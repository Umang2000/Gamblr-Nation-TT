import type React from 'react';

export interface Game {
  id: string;
  name: string;
  description: string;
  longDescription?: string;
  imageUrl: string;
  imageHint: string;
  externalLink?: string;
  learnMoreLink: string;
  iconName: string; // Changed from Icon: React.ElementType
  articleContent?: React.ReactNode;
  category?: string; // Optional: For filtering, e.g., 'Card Game', 'Dice Game'
  complexity?: 'Low' | 'Medium' | 'High'; // Optional: Game complexity
  players?: string; // Optional: e.g., '1 Player', '2-8 Players'
}
