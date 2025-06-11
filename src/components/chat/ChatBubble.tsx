
'use client';

import { MessageCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ChatBubbleProps {
  onClick: () => void;
  isChatOpen: boolean;
}

export default function ChatBubble({ onClick, isChatOpen }: ChatBubbleProps) {
  return (
    <Button
      onClick={onClick}
      variant="default"
      size="icon"
      className={cn(
        "fixed bottom-6 left-6 z-50 h-14 w-14 rounded-full shadow-lg focus:ring-2 focus:ring-ring focus:ring-offset-2",
        isChatOpen 
          ? "bg-destructive text-destructive-foreground hover:bg-destructive/90 element-glow-primary" 
          : "bg-primary text-primary-foreground hover:bg-primary/90 element-glow-primary" 
      )}
      aria-label={isChatOpen ? "Close chat" : "Open chat"}
    >
      {isChatOpen ? <X className="h-7 w-7" /> : <MessageCircle className="h-7 w-7" />}
    </Button>
  );
}
