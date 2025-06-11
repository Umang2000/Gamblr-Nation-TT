
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
import { useAuth } from '@/context/AuthContext'; // Import useAuth

interface ChatSidebarProps {
  isOpen: boolean;
  onClose: () => void; 
}

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  name: string;
  avatar?: string;
  timestamp: Date;
}

export default function ChatSidebar({ isOpen, onClose }: ChatSidebarProps) {
  const { currentUser, isLoading: authIsLoading } = useAuth(); // Use AuthContext
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (isOpen && !authIsLoading) { // Only initialize messages once auth state is known
      if (currentUser) {
        setMessages([
          { id: 'welcome-bot', text: `Hi ${currentUser.username}! Welcome to the GamblrNation chat.`, sender: 'bot', name: 'Support Bot', timestamp: new Date() }
        ]);
      } else {
        setMessages([
          { id: 'login-prompt-bot', text: 'Welcome to GamblrNation chat! Please log in or sign up to participate.', sender: 'bot', name: 'Support Bot', timestamp: new Date() }
        ]);
      }
      setInputValue(''); // Clear input when chat opens
    }
  }, [isOpen, currentUser, authIsLoading]); // Add currentUser and authIsLoading as dependencies
  
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

    if (authIsLoading) { // Prevent sending if auth state is not yet determined
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
        description: "Please log in or sign up to send messages.",
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
      timestamp: new Date(),
    };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInputValue('');

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: `Thanks for your message, ${currentUser.username}! This is a simulated response.`,
        sender: 'bot',
        name: 'Support Bot',
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
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={msg.avatar} alt={msg.name} />
                      <AvatarFallback className="bg-accent text-accent-foreground">
                        {msg.name.substring(0,1).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                  )}
                  <div className={`flex flex-col gap-1 ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}>
                    <div className={`flex items-center space-x-2 rtl:space-x-reverse ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                        <span className="text-xs font-semibold text-foreground">{msg.name}</span>
                        <span className="text-xs font-normal text-muted-foreground">{msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                    </div>
                    <div className={`p-3 rounded-lg ${msg.sender === 'user' ? 'bg-primary text-primary-foreground rounded-br-none' : 'bg-secondary text-secondary-foreground rounded-bl-none'}`}>
                      <p className="text-sm font-normal">{msg.text}</p>
                    </div>
                  </div>
                    {msg.sender === 'user' && currentUser && (
                    <Avatar className="h-8 w-8">
                        <AvatarFallback className="bg-primary text-primary-foreground">
                        <UserIconLucide className="h-4 w-4"/>
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
              disabled={authIsLoading && !isOpen} 
            />
            <Button 
              type="submit" 
              size="icon" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground shrink-0" 
              aria-label="Send message"
              disabled={authIsLoading || (inputValue.trim() === '' && currentUser !== null)}
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
