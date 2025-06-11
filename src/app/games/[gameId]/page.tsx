'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowLeft, Star, Users, Zap } from 'lucide-react';

// Mock game data - in a real app, fetch this based on gameId
const getGameDetails = (gameId: string) => {
  const games = [
    { id: '1', title: 'Cosmic Conquest', genre: 'Strategy', rating: 4.5, players: 1500, image: 'https://placehold.co/800x450/A050C3/201028?text=Cosmic+Conquest', imageHint: "space strategy game", description: "Conquer galaxies in this epic multiplayer strategy game. Build your fleet, manage resources, and engage in tactical battles against players from around the universe. Form alliances, research powerful technologies, and dominate the cosmos!", longDescription: "Cosmic Conquest offers a deep and engaging strategic experience. Players start with a single planet and must expand their empire by colonizing new worlds, developing infrastructure, and building a formidable military. The game features a complex economic system, diverse unit types, and a dynamic galaxy map that evolves with player actions. Regular events and updates keep the gameplay fresh and exciting." },
    { id: '2', title: 'Neon Racer', genre: 'Racing', rating: 4.2, players: 800, image: 'https://placehold.co/800x450/E91E63/201028?text=Neon+Racer', imageHint: "futuristic car race", description: "Speed through futuristic cities in high-octane races.", longDescription: "Neon Racer throws you into the driver's seat of high-speed, anti-gravity vehicles. Race through stunning, neon-lit cityscapes, master challenging tracks, and customize your ride with a wide array of upgrades and cosmetic items. Compete in single-player championships or test your skills against others in thrilling online multiplayer modes." },
  ];
  return games.find(game => game.id === gameId) || games[0]; // Fallback to first game if not found
};


export default function GameDetailPage({ params }: { params: { gameId: string } }) {
  const game = getGameDetails(params.gameId);

  if (!game) {
    return (
      <div className="text-center py-10">
        <h1 className="text-3xl font-bold text-destructive">Game Not Found</h1>
        <p className="text-muted-foreground mt-2">The game you are looking for does not exist or has been moved.</p>
        <Button asChild className="mt-6">
          <Link href="/games">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Games
          </Link>
        </Button>
      </div>
    );
  }
  
  return (
    <div className="space-y-8">
       <Button variant="outline" asChild className="mb-2 border-primary text-primary hover:bg-primary/10 hover:text-primary">
          <Link href="/games">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to All Games
          </Link>
        </Button>

      <Card className="overflow-hidden glass-card">
        <CardHeader className="p-0 relative h-64 md:h-96">
          <Image src={game.image} alt={game.title} layout="fill" objectFit="cover" priority data-ai-hint={game.imageHint}/>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 p-6">
            <CardTitle className="text-4xl md:text-5xl font-bold text-white text-glow-primary">{game.title}</CardTitle>
            <CardDescription className="text-lg text-primary-foreground/80">{game.genre}</CardDescription>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="flex flex-wrap items-center gap-4 text-md text-foreground/90 mb-6">
            <span className="flex items-center p-2 bg-primary/10 rounded-md"><Star className="h-5 w-5 mr-2 text-yellow-400" /> Rating: {game.rating}/5.0</span>
            <span className="flex items-center p-2 bg-primary/10 rounded-md"><Users className="h-5 w-5 mr-2 text-primary" /> Players: {game.players.toLocaleString()}</span>
          </div>
          
          <h2 className="text-2xl font-semibold text-primary mb-3">About {game.title}</h2>
          <p className="text-foreground/80 leading-relaxed mb-6">{game.longDescription || game.description}</p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <Card className="bg-card/50">
              <CardHeader><CardTitle className="text-xl text-accent">Key Features</CardTitle></CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1 text-foreground/80">
                  <li>Feature 1 specific to {game.title}</li>
                  <li>Feature 2: Exciting gameplay mechanic</li>
                  <li>Feature 3: Stunning visuals</li>
                  <li>Feature 4: Multiplayer support</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-card/50">
              <CardHeader><CardTitle className="text-xl text-accent">System Requirements (Mock)</CardTitle></CardHeader>
              <CardContent>
                <ul className="space-y-1 text-foreground/80">
                  <li><strong>OS:</strong> Windows 10 / macOS X</li>
                  <li><strong>Processor:</strong> Intel Core i5 or AMD equivalent</li>
                  <li><strong>Memory:</strong> 8 GB RAM</li>
                  <li><strong>Graphics:</strong> NVIDIA GeForce GTX 970 / AMD Radeon R9 290</li>
                  <li><strong>Storage:</strong> 20 GB available space</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <Button size="lg" className="w-full md:w-auto bg-accent hover:bg-accent/90 text-accent-foreground element-glow-accent text-lg py-3 px-8">
            <Zap className="mr-2 h-5 w-5" /> Play {game.title}
          </Button>
          <p className="text-xs text-muted-foreground mt-2 text-center md:text-left">(Mock play button - links to external game page or starts demo)</p>
        </CardContent>
      </Card>
    </div>
  );
}
