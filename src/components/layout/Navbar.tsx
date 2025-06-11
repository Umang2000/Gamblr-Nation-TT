
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Gamepad2, UserCircle, LogIn } from 'lucide-react'; // UserCircle as placeholder
import { useState } from 'react';
import Logo from '@/components/icons/Logo';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { useAuth } from '@/context/AuthContext';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const navItems = [
  { name: 'Home', href: '/', icon: Gamepad2 },
  { name: 'Games', href: '/games', icon: Gamepad2 },
  { name: 'Leaderboard', href: '/leaderboard', icon: Gamepad2 },
  { name: 'Marketplace', href: '/marketplace', icon: Gamepad2 },
  { name: 'Live Stream', href: '/live-stream', icon: Gamepad2 },
  { name: 'Daily Case', href: '/daily-case', icon: Gamepad2 },
  { name: 'Jackpot', href: '/progressive-jackpot', icon: Gamepad2 },
];

// Auth Nav Item is now dynamic based on login state

const NavLink = ({ href, children, onClick, icon: Icon, isActiveOverride }: { href: string; children: React.ReactNode; onClick?: () => void; icon?: React.ElementType; isActiveOverride?: boolean }) => {
  const pathname = usePathname();
  const isActive = isActiveOverride !== undefined ? isActiveOverride : pathname === href;

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
  const { currentUser, isLoading } = useAuth();
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <Logo className="h-10 w-auto" />
        </Link>

        {/* Desktop Navigation & Auth */}
        <div className="hidden md:flex items-center">
          <nav className="flex flex-wrap items-center gap-x-1 lg:gap-x-2 gap-y-1">
            {navItems.map((item) => (
              <NavLink key={item.name} href={item.href} icon={item.icon}>
                {item.name}
              </NavLink>
            ))}
          </nav>
          <div className="ml-2 md:ml-4 flex items-center">
            {isLoading ? (
              <div className="h-8 w-20 bg-muted rounded animate-pulse"></div> // Skeleton loader
            ) : currentUser ? (
              <Link href="/profile" passHref>
                <Button variant="ghost" className={cn("p-0 hover:bg-transparent", pathname === '/profile' ? 'ring-2 ring-primary rounded-full' : '')}>
                  <Avatar className={cn("h-9 w-9 border-2", pathname === '/profile' ? 'border-primary' : 'border-transparent hover:border-primary/50')}>
                    {/* <AvatarImage src="user-profile-pic.jpg" alt={currentUser.username} /> */}
                    <AvatarFallback className="bg-primary/20 text-primary font-semibold">
                      {currentUser.username ? currentUser.username.charAt(0).toUpperCase() : <UserCircle className="h-5 w-5"/>}
                    </AvatarFallback>
                  </Avatar>
                  <span className="sr-only">Profile</span>
                </Button>
              </Link>
            ) : (
              <NavLink href="/login" icon={LogIn} isActiveOverride={pathname === '/login' || pathname === '/signup'}>
                Login
              </NavLink>
            )}
          </div>
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
                <nav className="flex-grow p-4 space-y-1 overflow-y-auto">
                  {navItems.map((item) => (
                    <NavLink key={item.name} href={item.href} onClick={() => setMobileMenuOpen(false)} icon={item.icon}>
                      {item.name}
                    </NavLink>
                  ))}
                  <hr className="my-3 border-border/40" />
                  {isLoading ? (
                     <div className="h-8 w-full bg-muted rounded animate-pulse px-2 py-1"></div>
                  ) : currentUser ? (
                     <NavLink href="/profile" onClick={() => setMobileMenuOpen(false)} icon={UserCircle}> {/* Consider better icon for profile */}
                        Profile
                      </NavLink>
                  ) : (
                     <NavLink href="/login" onClick={() => setMobileMenuOpen(false)} icon={LogIn}>
                        Login
                      </NavLink>
                  )}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
