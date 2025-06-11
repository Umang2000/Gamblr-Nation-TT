'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Filter, Star, Zap, Swords, Puzzle, Users } from 'lucide-react';

// Mock data for games
const allGames = [
  { id: '1', title: 'Cosmic Conquest', genre: 'Strategy', rating: 4.5, players: 1500, image: 'https://placehold.co/600x400/A050C3/201028?text=Cosmic+Conquest', imageHint: "space strategy game", description: "Conquer galaxies in this epic multiplayer strategy game." },
  { id: '2', title: 'Neon Racer', genre: 'Racing', rating: 4.2, players: 800, image: 'https://placehold.co/600x400/E91E63/201028?text=Neon+Racer', imageHint: "futuristic car race", description: "Speed through futuristic cities in high-octane races." },
  { id: '3', title: 'Mystic Realms', genre: 'RPG', rating: 4.8, players: 2200, image: 'https://placehold.co/600x400/4CAF50/201028?text=Mystic+Realms', imageHint: "fantasy world adventure", description: "Embark on a magical journey in a vast open-world RPG." },
  { id: '4', title: 'Block Breaker Blitz', genre: 'Puzzle', rating: 4.0, players: 500, image: 'https://placehold.co/600x400/FFC107/201028?text=Block+Breaker', imageHint: "colorful blocks puzzle", description: "Test your wits in this fast-paced block-breaking puzzle game." },
  { id: '5', title: 'Arena Champions', genre: 'Action', rating: 4.6, players: 1800, image: 'https://placehold.co/600x400/F44336/201028?text=Arena+Champions', imageHint: "gladiator combat arena", description: "Battle for glory in intense arena combat." },
  { id: '6', title: 'Galactic Traders', genre: 'Simulation', rating: 4.3, players: 950, image: 'https://placehold.co/600x400/03A9F4/201028?text=Galactic+Traders', imageHint: "space trading simulation", description: "Build your trading empire across the stars." },
];

const genres = ['All', 'Strategy', 'Racing', 'RPG', 'Puzzle', 'Action', 'Simulation'];
const sortOptions = [
  { value: 'title_asc', label: 'Title (A-Z)' },
  { value: 'title_desc', label: 'Title (Z-A)' },
  { value: 'rating_desc', label: 'Rating (High-Low)' },
  { value: 'players_desc', label: 'Players (Most)' },
];

export default function GamesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [sortBy, setSortBy] = useState('rating_desc');

  const filteredGames = allGames
    .filter(game => game.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter(game => selectedGenre === 'All' || game.genre === selectedGenre)
    .sort((a, b) => {
      switch (sortBy) {
        case 'title_asc':
          return a.title.localeCompare(b.title);
        case 'title_desc':
          return b.title.localeCompare(a.title);
        case 'rating_desc':
          return b.rating - a.rating;
        case 'players_desc':
          return b.players - a.players;
        default:
          return 0;
      }
    });

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-primary text-glow-primary">All Games</h1>

      <Card className="p-6 glass-card">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search games..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-input text-foreground placeholder:text-muted-foreground"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          </div>
          <div>
            <label htmlFor="genre-filter" className="block text-sm font-medium text-foreground mb-1">Filter by Genre</label>
            <Select value={selectedGenre} onValueChange={setSelectedGenre}>
              <SelectTrigger id="genre-filter" className="w-full bg-input text-foreground">
                <SelectValue placeholder="Select genre" />
              </SelectTrigger>
              <SelectContent className="bg-popover text-popover-foreground">
                {genres.map(genre => (
                  <SelectItem key={genre} value={genre} className="hover:bg-primary/20 focus:bg-primary/30">{genre}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <label htmlFor="sort-by" className="block text-sm font-medium text-foreground mb-1">Sort By</label>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger id="sort-by" className="w-full bg-input text-foreground">
                <SelectValue placeholder="Sort games" />
              </SelectTrigger>
              <SelectContent className="bg-popover text-popover-foreground">
                {sortOptions.map(option => (
                  <SelectItem key={option.value} value={option.value} className="hover:bg-primary/20 focus:bg-primary/30">{option.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </Card>

      {filteredGames.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGames.map(game => (
            <Card key={game.id} className="overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/30 glass-card">
              <CardHeader className="p-0">
                <div className="relative h-48 w-full">
                  <Image src={game.image} alt={game.title} layout="fill" objectFit="cover" data-ai-hint={game.imageHint} />
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="text-2xl text-primary mb-2">{game.title}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground mb-1">Genre: {game.genre}</CardDescription>
                <div className="flex items-center space-x-4 text-sm text-foreground/80 mb-3">
                  <span className="flex items-center"><Star className="h-4 w-4 mr-1 text-yellow-400" /> {game.rating}/5.0</span>
                  <span className="flex items-center"><Users className="h-4 w-4 mr-1 text-primary" /> {game.players.toLocaleString()} Players</span>
                </div>
                <p className="text-foreground/80 text-sm mb-4 h-16 overflow-hidden text-ellipsis">{game.description}</p>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                 <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground element-glow-accent">
                  {/* In a real app, this would link to the game or a game detail page */}
                  <Link href={`/games/${game.id}`}> 
                    <Zap className="mr-2 h-4 w-4" /> Play Now
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <Card className="text-center py-12 glass-card">
          <CardHeader>
            <Filter className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
            <CardTitle className="text-2xl">No Games Found</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Try adjusting your search or filters.</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

// Dummy page for individual game link, can be expanded later
export function GameDetailPage({ params }: { params: { gameId: string } }) {
  return (
    <div>
      <h1 className="text-3xl font-bold">Game Details for Game ID: {params.gameId}</h1>
      <p>Details about the game will be shown here.</p>
      <Button asChild className="mt-4">
        <Link href="/games">Back to Games</Link>
      </Button>
    </div>
  );
}
