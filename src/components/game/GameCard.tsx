// @ts-nocheck
'use client';

import type { Game } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Info } from 'lucide-react';
import GameSpecificIcon from '@/components/icons/GameSpecificIcon';

interface GameCardProps {
  game: Game;
}

export default function GameCard({ game }: GameCardProps) {
  return (
    <Card className="group overflow-hidden rounded-lg shadow-lg hover:shadow-primary/30 transition-all duration-300 ease-in-out transform hover:-translate-y-1 flex flex-col h-full glass-card">
      <CardHeader className="p-0">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={game.imageUrl}
            alt={game.name}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-500 group-hover:scale-110"
            data-ai-hint={game.imageHint}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-black/80 transition-opacity duration-300" />
           <div className="absolute top-3 right-3 bg-card/70 p-2 rounded-full backdrop-blur-sm">
            <GameSpecificIcon iconName={game.iconName} className="h-6 w-6 text-accent" />
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-5 flex-grow">
        <CardTitle className="text-2xl font-headline text-primary group-hover:text-primary/90 transition-colors mb-2 truncate">
          {game.name}
        </CardTitle>
        <CardDescription className="text-sm text-muted-foreground mb-1 line-clamp-2">
          {game.category && `${game.category} • `}{game.complexity && `Complexity: ${game.complexity}`}
        </CardDescription>
        <p className="text-foreground/80 font-body text-sm line-clamp-3 mb-4">
          {game.description}
        </p>
      </CardContent>
      <CardFooter className="p-5 pt-0 mt-auto">
        <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground element-glow-accent group-hover:shadow-lg group-hover:shadow-accent/30">
          <Link href={game.learnMoreLink}>
            Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
