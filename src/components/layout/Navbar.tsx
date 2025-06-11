'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Gamepad2, LogIn, UserPlus } from 'lucide-react';
import { useState } from 'react';
import Logo from '@/components/icons/Logo';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Home', href: '/', icon: Gamepad2 },
  { name: 'Forum', href: '/forum', icon: Gamepad2 },
  { name: 'Games', href: '/games', icon: Gamepad2 },
  { name: 'Leaderboard', href: '/leaderboard', icon: Gamepad2 },
  { name: 'Marketplace', href: '/marketplace', icon: Gamepad2 },
  { name: 'Live Stream', href: '/live-stream', icon: Gamepad2 },
  { name: 'Game Test', href: '/game-test', icon: Gamepad2 },
  { name: 'Daily Case', href: '/daily-case', icon: Gamepad2 },
  { name: 'Support', href: '/support', icon: Gamepad2 },
  { name: 'Jackpot', href: '/progressive-jackpot', icon: Gamepad2 },
];

const authNavItems = [
  { name: 'Login', href: '/login', icon: LogIn },
  { name: 'Sign Up', href: '/signup', icon: UserPlus },
];

const NavLink = ({ href, children, onClick, icon: Icon }: { href: string; children: React.ReactNode; onClick?: () => void; icon?: React.ElementType }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} passHref>
      <Button
        variant="ghost"
        onClick={onClick}
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          isActive ? "text-primary font-bold text-glow-primary" : "text-foreground/80",
          "flex items-center gap-2 justify-start md:justify-center px-2 py-1 md:px-3 md:py-2"
        )}
        aria-current={isActive ? "page" : undefined}
      >
        {Icon && <Icon className={cn("h-4 w-4", isActive ? "text-primary" : "text-accent")} />}
        {children}
      </Button>
    </Link>
  );
};


export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <Logo className="h-10 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {navItems.map((item) => (
            <NavLink key={item.name} href={item.href} icon={item.icon}>
              {item.name}
            </NavLink>
          ))}
        </nav>
        <div className="hidden md:flex items-center space-x-2">
          {authNavItems.map((item) => (
             <NavLink key={item.name} href={item.href} icon={item.icon}>
              {item.name}
            </NavLink>
          ))}
        </div>


        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-primary" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[350px] bg-background p-0">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b">
                  <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                    <Logo className="h-10 w-auto" />
                  </Link>
                  <SheetClose asChild>
                     <Button variant="ghost" size="icon">
                        <X className="h-6 w-6 text-primary" />
                        <span className="sr-only">Close menu</span>
                      </Button>
                  </SheetClose>
                </div>
                <nav className="flex-grow p-4 space-y-2 overflow-y-auto">
                  {navItems.map((item) => (
                    <NavLink key={item.name} href={item.href} onClick={() => setMobileMenuOpen(false)} icon={item.icon}>
                      {item.name}
                    </NavLink>
                  ))}
                  <hr className="my-4 border-border/40" />
                  {authNavItems.map((item) => (
                    <NavLink key={item.name} href={item.href} onClick={() => setMobileMenuOpen(false)} icon={item.icon}>
                      {item.name}
                    </NavLink>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
