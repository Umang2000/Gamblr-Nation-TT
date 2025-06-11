
'use client';

import { useState, useCallback } from 'react';
import ChatBubble from './ChatBubble';
import ChatSidebar from './ChatSidebar';

export default function ChatSystem() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = useCallback(() => {
    setIsChatOpen(prev => !prev);
  }, []);

  const openChat = useCallback(() => {
    setIsChatOpen(true);
  }, []);
  
  const closeChat = useCallback(() => {
    setIsChatOpen(false);
  }, []);

  return (
    <>
      {!isChatOpen && <ChatBubble onClick={openChat} />}
      {isChatOpen && <div className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm md:hidden" onClick={closeChat} />}
      <ChatSidebar isOpen={isChatOpen} onClose={closeChat} />
    </>
  );
}
