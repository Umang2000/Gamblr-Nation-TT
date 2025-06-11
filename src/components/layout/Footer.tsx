
import Link from 'next/link';
import { Send, Twitter as TwitterIcon } from 'lucide-react';
import Logo from '@/components/icons/Logo';

const DiscordIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg fill="currentColor" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M20.317 4.369a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.865-.608 1.229a18.258 18.258 0 00-5.484 0 12.072 12.072 0 00-.608-1.229.076.076 0 00-.079-.037A19.718 19.718 0 003.679 4.37a.07.07 0 00-.033.055C1.542 8.642 1.232 12.212 1.613 15.612a.08.08 0 00.045.072c1.739.87 3.533 1.511 5.257 1.855a.073.073 0 00.08-.05N.075.075 0 00.075-.05c.011-.022.022-.043.033-.064a17.802 17.802 0 006.446 2.274.07.07 0 00.05-.033 14.14 14.14 0 001.37-2.953.076.076 0 00-.037-.09A19.915 19.915 0 0012.001 0a19.915 19.915 0 00-3.435 1.453.076.076 0 00-.037.09 13.071 13.071 0 001.37 2.953.07.07 0 00.05.033A17.932 17.932 0 0012.002 6.7c2.93.043 5.762-.696 8.288-1.855a.075.075 0 00.08.05.07.07 0 00.046-.072c.38-3.4-.029-6.97-1.894-11.243a.07.07 0 00-.033-.055zM8.02 15.33c-1.183 0-2.15-.945-2.15-2.107s.96-2.107 2.15-2.107 2.15.945 2.15 2.107-.967 2.107-2.15 2.107zm7.974 0c-1.183 0-2.15-.945-2.15-2.107s.96-2.107 2.15-2.107 2.15.945 2.15 2.107-.967 2.107-2.15 2.107z"/>
  </svg>
);

const TwitchIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg fill="currentColor" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0H6zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714v9.429z"/>
  </svg>
);

const KickIcon = (props: React.SVGProps<SVGSVGElement>) => (
 <svg fill="currentColor" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M5 3h2.5l6 7.5L7.5 18H5l6-7.5L5 3zm7.5 0H15l6 7.5-6 7.5h-2.5l6-7.5-6-7.5z"/>
  </svg>
);


const socialLinks = [
  { name: 'Discord', href: '#', icon: DiscordIcon, brandColorClass: 'text-[#5865F2]' },
  { name: 'Twitch', href: '#', icon: TwitchIcon, brandColorClass: 'text-[#9146FF]' },
  { name: 'Kick', href: '#', icon: KickIcon, brandColorClass: 'text-[#53FC18]' },
  { name: 'Telegram', href: '#', icon: Send, brandColorClass: 'text-[#2AABEE]' },
  { name: 'Twitter', href: '#', icon: TwitterIcon, brandColorClass: 'text-primary' }, 
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-background/80 backdrop-blur-sm mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center">
             <Logo className="h-8 w-auto mr-2" />
             <p className="text-sm text-muted-foreground">&copy; {currentYear} GamblrNation Hub. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className={`${link.brandColorClass} transition-opacity hover:opacity-80`}
              >
                <link.icon className="h-6 w-6" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
