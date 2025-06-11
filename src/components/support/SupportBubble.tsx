
'use client';

import Link from 'next/link';
import { HelpCircle } from 'lucide-react'; // Changed from LifeBuoy
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function SupportBubble() {
  return (
    <Link href="/support" passHref>
      <Button
        variant="default"
        size="icon"
        className={cn(
          "fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full shadow-lg focus:ring-2 focus:ring-ring focus:ring-offset-2",
          "bg-accent text-accent-foreground hover:bg-accent/90 element-glow-accent"
        )}
        aria-label="Open support page"
      >
        <HelpCircle className="h-7 w-7" /> {/* Changed from LifeBuoy */}
      </Button>
    </Link>
  );
}
