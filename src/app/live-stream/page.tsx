import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PlayCircle, CalendarClock, Users } from 'lucide-react';

// Mock data for streamers and schedule
const liveStreamers = [
  { id: '1', name: 'ShadowStrikerX', game: 'Cosmic Conquest', viewers: 1250, isLive: true, avatarSeed: 'SSX', twitchUsername: 'shadowstrikerx' },
  { id: '2', name: 'MysticMaven', game: 'Mystic Realms', viewers: 980, isLive: true, avatarSeed: 'MM', twitchUsername: 'mysticmaven' },
  { id: '3', name: 'NeonNinja', game: 'Neon Racer', viewers: 0, isLive: false, scheduledAt: 'Today, 8:00 PM PST', avatarSeed: 'NN', twitchUsername: 'neonninja' },
];

const featuredStreamer = liveStreamers.find(s => s.isLive) || liveStreamers[0];

export default function LiveStreamPage() {
  const twitchEmbedUrl = `https://player.twitch.tv/?channel=${featuredStreamer.twitchUsername}&parent=${typeof window !== 'undefined' ? window.location.hostname : 'localhost'}`;

  return (
    <div className="space-y-8">
      <div className="text-center">
        <PlayCircle className="mx-auto h-16 w-16 text-accent mb-4 element-glow-accent" />
        <h1 className="text-4xl font-bold text-primary text-glow-primary">Live Streams</h1>
        <p className="text-muted-foreground mt-2">Watch your favorite GamblrNation streamers live in action!</p>
      </div>
      
      <Card className="overflow-hidden glass-card">
        <CardHeader>
          <CardTitle className="text-2xl text-accent">Now Streaming: {featuredStreamer.name} - {featuredStreamer.game}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="aspect-video bg-black rounded-lg overflow-hidden border border-primary/30">
            {/* In a real app, ensure the parent domain is correctly configured for Twitch embeds */}
            <iframe
              src={twitchEmbedUrl}
              height="100%"
              width="100%"
              allowFullScreen={true}
              title={`${featuredStreamer.name}'s Live Stream`}
              className="border-0"
            ></iframe>
          </div>
           <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Avatar>
                <AvatarImage src={`https://placehold.co/40x40/201028/A050C3?text=${featuredStreamer.avatarSeed}`} />
                <AvatarFallback>{featuredStreamer.avatarSeed}</AvatarFallback>
              </Avatar>
              <span className="font-semibold">{featuredStreamer.name}</span>
            </div>
            {featuredStreamer.isLive && (
              <div className="flex items-center gap-1 text-red-500 font-semibold">
                <div className="h-3 w-3 bg-red-500 rounded-full animate-pulse"></div>
                LIVE ({featuredStreamer.viewers.toLocaleString()} viewers)
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="text-2xl text-primary flex items-center"><CalendarClock className="mr-3 h-7 w-7 text-primary"/>Stream Schedule & Other Streamers</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {liveStreamers.map((streamer) => (
            <Card key={streamer.id} className="flex flex-col md:flex-row items-center justify-between p-4 bg-card/50 hover:border-primary/50 transition-colors">
              <div className="flex items-center space-x-4 mb-2 md:mb-0">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={`https://placehold.co/60x60/201028/A050C3?text=${streamer.avatarSeed}`} />
                  <AvatarFallback className="bg-primary text-primary-foreground">{streamer.avatarSeed}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold text-lg text-accent">{streamer.name}</h3>
                  <p className="text-sm text-muted-foreground">Playing: {streamer.game}</p>
                </div>
              </div>
              <div className="text-right">
                {streamer.isLive ? (
                  <div className="flex items-center text-red-500">
                    <div className="h-2.5 w-2.5 bg-red-500 rounded-full animate-pulse mr-2"></div>
                    LIVE NOW
                  </div>
                ) : (
                  <p className="text-sm text-primary">{streamer.scheduledAt || 'Offline'}</p>
                )}
                <p className="text-xs text-muted-foreground flex items-center justify-end mt-1">
                  <Users className="h-3 w-3 mr-1" /> {streamer.isLive ? `${streamer.viewers.toLocaleString()} Viewers` : 'Waiting for stream'}
                </p>
              </div>
            </Card>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
