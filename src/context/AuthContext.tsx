
'use client';

import type { User } from '@/types/user';
import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import { useRouter } from 'next/navigation';

interface AuthContextType {
  currentUser: User | null;
  isLoading: boolean;
  login: (userData: User) => void;
  logout: () => void;
  updateProfilePicture: (userId: string, imageUrl: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem('currentUser');
      if (storedUser) {
        setCurrentUser(JSON.parse(storedUser));
      }
    } catch (error) {
      console.error("Failed to parse user from localStorage", error);
      localStorage.removeItem('currentUser'); // Clear corrupted data
    }
    setIsLoading(false);
  }, []);

  const login = useCallback((userData: User) => { // userData here should already include profileImageUrl if it exists
    localStorage.setItem('currentUser', JSON.stringify(userData));
    setCurrentUser(userData);
    router.push('/'); 
  }, [router]);

  const logout = useCallback(() => {
    localStorage.removeItem('currentUser');
    setCurrentUser(null);
    router.push('/login');
  }, [router]);

  const updateProfilePicture = useCallback((userId: string, imageUrl: string) => {
    // Update in the 'users' array in localStorage
    try {
      const storedUsers = localStorage.getItem('users');
      let users: User[] = storedUsers ? JSON.parse(storedUsers) : [];
      users = users.map(u => u.id === userId ? { ...u, profileImageUrl: imageUrl } : u);
      localStorage.setItem('users', JSON.stringify(users));

      // If the updated user is the current user, update currentUser state and its localStorage item
      if (currentUser && currentUser.id === userId) {
        const updatedCurrentUser = { ...currentUser, profileImageUrl: imageUrl };
        setCurrentUser(updatedCurrentUser);
        localStorage.setItem('currentUser', JSON.stringify(updatedCurrentUser));
      }
    } catch (error) {
      console.error("Failed to update profile picture in localStorage", error);
    }
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, isLoading, login, logout, updateProfilePicture }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
