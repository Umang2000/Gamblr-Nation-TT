
'use client';

import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { User, Mail, LogOut, Camera } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, ChangeEvent } from 'react';
import { useToast } from "@/hooks/use-toast";

export default function ProfilePage() {
  const { currentUser, logout, isLoading, updateProfilePicture } = useAuth();
  const router = useRouter();
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!isLoading && !currentUser) {
      router.push('/login');
    }
  }, [currentUser, isLoading, router]);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && currentUser) {
      if (!file.type.startsWith('image/')) {
        toast({ title: "Invalid File Type", description: "Please select an image file.", variant: "destructive" });
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageUrl = reader.result as string;
        updateProfilePicture(currentUser.id, imageUrl);
        toast({ title: "Profile Picture Updated", description: "Your new profile picture has been saved.", variant: "default" });
      };
      reader.onerror = () => {
        toast({ title: "Error Uploading", description: "Could not read the image file.", variant: "destructive" });
      }
      reader.readAsDataURL(file);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  if (isLoading || !currentUser) {
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
          <div className="relative">
            <Avatar className="h-24 w-24 mb-4 border-2 border-primary">
              {currentUser.profileImageUrl ? (
                <AvatarImage src={currentUser.profileImageUrl} alt={currentUser.username} />
              ) : null}
              <AvatarFallback className="text-4xl bg-primary text-primary-foreground">
                {currentUser.username ? currentUser.username.charAt(0).toUpperCase() : '?'}
              </AvatarFallback>
            </Avatar>
            {/* Hidden file input */}
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept="image/*"
              className="hidden"
            />
          </div>
          <CardTitle className="text-3xl text-primary">{currentUser.username}</CardTitle>
          <CardDescription className="text-muted-foreground">{currentUser.email}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-accent flex items-center">
              <User className="mr-2 h-5 w-5" /> Account Details
            </h3>
            <p className="text-foreground/80"><strong>Username:</strong> {currentUser.username}</p>
            <p className="text-foreground/80"><strong>Email:</strong> {currentUser.email}</p>
          </div>
          
          <Button 
            onClick={handleUploadClick} 
            variant="outline" 
            className="w-full border-primary text-primary hover:bg-primary/10 hover:text-primary"
          >
            <Camera className="mr-2 h-5 w-5" /> Change Profile Picture
          </Button>

        </CardContent>
        <CardFooter>
           <Button 
            onClick={logout} 
            variant="destructive" 
            className="w-full"
          >
            <LogOut className="mr-2 h-5 w-5" /> Logout
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
