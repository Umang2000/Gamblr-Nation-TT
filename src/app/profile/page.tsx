
'use client';

import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { User, Mail, LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function ProfilePage() {
  const { currentUser, logout, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !currentUser) {
      router.push('/login');
    }
  }, [currentUser, isLoading, router]);

  if (isLoading || !currentUser) {
    // You can add a spinner or loading skeleton here
    return (
        <div className="flex items-center justify-center min-h-[calc(100vh-10rem)]">
            <p className="text-primary text-xl">Loading profile...</p>
        </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <Card className="glass-card">
        <CardHeader className="items-center text-center">
          <Avatar className="h-24 w-24 mb-4 border-2 border-primary">
            {/* In a real app, AvatarImage src would point to user's profile picture URL */}
            {/* <AvatarImage src={currentUser.profileImageUrl} alt={currentUser.username} /> */}
            <AvatarFallback className="text-4xl bg-primary text-primary-foreground">
              {currentUser.username ? currentUser.username.charAt(0).toUpperCase() : '?'}
            </AvatarFallback>
          </Avatar>
          <CardTitle className="text-3xl text-primary text-glow-primary">{currentUser.username}</CardTitle>
          <CardDescription className="text-muted-foreground">{currentUser.email}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-accent flex items-center">
              <User className="mr-2 h-5 w-5" /> Account Details
            </h3>
            <p className="text-foreground/80"><strong>Username:</strong> {currentUser.username}</p>
            <p className="text-foreground/80"><strong>Email:</strong> {currentUser.email}</p>
            {/* Add more profile details here as needed */}
          </div>
          
          {/* Placeholder for other profile sections like game stats, achievements etc. */}
          {/* <div className="space-y-2">
            <h3 className="text-lg font-semibold text-accent">Game Statistics</h3>
            <p className="text-foreground/80">Games Played: 123</p>
            <p className="text-foreground/80">Win Rate: 65%</p>
          </div> */}

          <Button 
            onClick={logout} 
            variant="destructive" 
            className="w-full element-glow-destructive"
          >
            <LogOut className="mr-2 h-5 w-5" /> Logout
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
