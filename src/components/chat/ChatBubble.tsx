'use client';

import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
      className="fixed bottom-6 left-6 z-50 h-14 w-14 rounded-full bg-primary text-primary-foreground shadow-lg element-glow-primary hover:bg-primary/90 focus:ring-2 focus:ring-ring focus:ring-offset-2"
      aria-label={isChatOpen ? "Close chat" : "Open chat"}
    >
      <MessageCircle className="h-7 w-7" />
    </Button>
  );
}
