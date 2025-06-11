
'use client';

import { useState, useEffect, useRef, FormEvent } from 'react';
import { Send, User as UserIconLucide, ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useToast } from "@/hooks/use-toast";
import { useAuth } from '@/context/AuthContext';

interface ChatSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  name: string;
  avatar?: string; // For bot avatar
  userAvatarUrl?: string; // For user avatar
  timestamp: Date;
}

export default function ChatSidebar({ isOpen, onClose }: ChatSidebarProps) {
  const { currentUser, isLoading: authIsLoading } = useAuth();
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (isOpen && !authIsLoading) {
      if (currentUser) {
        setMessages([
          { id: 'welcome-bot', text: `Hi ${currentUser.username}! Welcome to the GamblrNation chat. How can I help you today?`, sender: 'bot', name: 'Support Bot', timestamp: new Date(), avatar: `https://placehold.co/40x40/32080a/FFFFFF?text=B` }
        ]);
      } else {
        setMessages([
          { id: 'login-prompt-bot', text: 'Welcome to GamblrNation chat! Please log in or sign up to participate.', sender: 'bot', name: 'Support Bot', timestamp: new Date(), avatar: `https://placehold.co/40x40/32080a/FFFFFF?text=B` }
        ]);
      }
      setInputValue('');
    }
  }, [isOpen, currentUser, authIsLoading]);

  useEffect(() => {
    if (scrollAreaRef.current) {
      const viewport = scrollAreaRef.current.querySelector('div[data-radix-scroll-area-viewport]');
      if (viewport) {
        viewport.scrollTop = viewport.scrollHeight;
      }
    }
  }, [messages]);


  const handleSendMessage = (e: FormEvent) => {
    e.preventDefault();

    if (authIsLoading) {
      toast({
        title: "Loading...",
        description: "Please wait while we check your login status.",
        variant: "default",
      });
      return;
    }

    if (!currentUser) {
      toast({
        title: "Login Required",
        description: "Please log in to send messages.",
        variant: "destructive",
      });
      return;
    }

    if (inputValue.trim() === '') return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      name: currentUser.username,
      userAvatarUrl: currentUser.profileImageUrl,
      timestamp: new Date(),
    };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInputValue('');

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: `Thanks for your message, ${currentUser.username}! This is a simulated response from GamblrBot.`,
        sender: 'bot',
        name: 'Support Bot',
        avatar: `https://placehold.co/40x40/32080a/FFFFFF?text=B`,
        timestamp: new Date(),
      };
      setMessages((prevMessages) => [...prevMessages, botResponse]);
    }, 1000);
  };

  return (
    <div className={cn(
      "fixed inset-y-0 left-0 z-40 w-80 bg-card text-card-foreground border-r border-border shadow-xl transform transition-transform duration-300 ease-in-out",
      isOpen ? "translate-x-0" : "-translate-x-full"
    )}
      role="dialog"
      aria-modal="true"
      aria-labelledby="chat-sidebar-title"
    >
      <div className="flex flex-col h-full">
        <header className="flex items-center justify-between p-4 border-b border-border">
          <h2 id="chat-sidebar-title" className="text-lg font-semibold font-headline text-primary">Community Chat</h2>
        </header>

        <ScrollArea className="flex-grow p-4" ref={scrollAreaRef}>
          <div className="space-y-4">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex items-start gap-2.5 max-w-[80%]`}>
                  {msg.sender === 'bot' && (
                    <Avatar className="h-8 w-8 shrink-0">
                      <AvatarImage src={msg.avatar} alt={msg.name} />
                      <AvatarFallback className="bg-accent text-accent-foreground">
                        {msg.name.substring(0, 1).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                  )}
                  
                  <div className={`flex flex-col gap-0.5 ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}>
                    <span className="text-xs font-semibold text-foreground px-1">{msg.name}</span>
                    
                    <div
                      className={cn(
                        'p-3 rounded-lg text-sm font-normal break-words',
                        msg.sender === 'user'
                          ? 'bg-primary text-primary-foreground rounded-tr-none'
                          : 'bg-secondary text-secondary-foreground rounded-tl-none'
                      )}
                    >
                      {msg.text}
                    </div>
                    <div
                      className={cn(
                        'text-xs px-1', 
                        msg.sender === 'user' ? 'text-primary-foreground/70 text-right' : 'text-muted-foreground text-left'
                      )}
                    >
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>

                  {msg.sender === 'user' && currentUser && (
                    <Avatar className="h-8 w-8 shrink-0">
                      {msg.userAvatarUrl ? (
                        <AvatarImage src={msg.userAvatarUrl} alt={currentUser.username} />
                      ) : null}
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        {currentUser.username ? currentUser.username.charAt(0).toUpperCase() : <UserIconLucide className="h-4 w-4" />}
                      </AvatarFallback>
                    </Avatar>
                  )}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        <div className="p-4 border-t border-border">
          <form onSubmit={handleSendMessage} className="flex items-center space-x-2">
            <Input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={authIsLoading ? "Checking login..." : (currentUser ? "Type a message..." : "Log in to chat...")}
              className="flex-grow bg-input text-foreground placeholder:text-muted-foreground"
              aria-label="Chat message input"
              disabled={authIsLoading && !isOpen && !currentUser}
            />
            <Button
              type="submit"
              size="icon"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shrink-0"
              aria-label="Send message"
              disabled={authIsLoading || (inputValue.trim() === '' && !!currentUser) || !currentUser}
            >
              <Send className="h-5 w-5" />
            </Button>
            <Button
              type="button"
              size="icon"
              onClick={onClose}
              className="bg-[#E91E63] hover:bg-[#d81b60] text-white rounded-md p-2 flex items-center justify-center shrink-0"
              aria-label="Close chat"
              style={{ width: '40px', height: '40px' }}
            >
              <ChevronLeft className="h-6 w-6" strokeWidth={2.5} />
            </Button>
          </form>
          {!authIsLoading && !currentUser && isOpen && (
            <p className="text-xs text-muted-foreground mt-2 text-center">
              Want to join the conversation? <Link href="/login" className="text-primary hover:underline font-semibold">Log In</Link> or <Link href="/signup" className="text-primary hover:underline font-semibold">Sign Up</Link>.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
