
import Link from 'next/link';
import { Send, Twitter as TwitterIcon } from 'lucide-react';
import Logo from '@/components/icons/Logo';

const DiscordIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg fill="currentColor" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M20.317 4.369a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.078.037c-.21.375-.443.805-.61 1.176a17.865 17.865 0 00-5.485 0 17.952 17.952 0 00-.61-1.176.074.074 0 00-.078-.037A19.791 19.791 0 003.683 4.37a.07.07 0 00-.034.043 21.229 21.229 0 00-1.612 7.698.074.074 0 00.026.066C2.632 12.99 3.931 13.81 5.132 14.477a.071.071 0 00.085-.026c.36-.462.687-.928.973-1.409a.072.072 0 00-.042-.102 14.075 14.075 0 01-1.508-.795.073.073 0 01.002-.126c.09-.09.184-.184.271-.271a.074.074 0 01.08-.022c.385.116.768.24 1.137.361.072.022.056.132-.022.175a13.173 13.173 0 00-1.516 1.087.072.072 0 00.004.127 17.188 17.188 0 004.385 2.66.074.074 0 00.087-.035c.315-.562.588-1.137.811-1.728a.073.073 0 00-.049-.111 12.631 12.631 0 01-1.314-.688.073.073 0 01.014-.13C10.092 12.1 11.03 12 12 12s1.908.1 2.771.271a.072.072 0 01.014.13 12.63 12.63 0 01-1.313.688.073.073 0 00-.05.11c.222.592.494 1.167.81 1.729a.074.074 0 00.087.035 17.188 17.188 0 004.385-2.66.073.073 0 00.004-.127 13.173 13.173 0 00-1.516-1.087.072.072 0 00-.022-.175c.368-.12.752-.245 1.137-.361a.073.073 0 01.08.022c.087.088.18.18.271.271a.073.073 0 01.002.126 14.075 14.075 0 01-1.508.795.072.072 0 00-.042.102c.286.48.613.947.973 1.409a.071.071 0 00.085.026c1.201-.667 2.5-1.486 3.05-2.213a.074.074 0 00.026-.066 21.229 21.229 0 00-1.612-7.698.07.07 0 00-.034-.043z"/>
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
  { name: 'Twitter', href: '#', icon: TwitterIcon, brandColorClass: 'text-primary' }, // Using primary for theme consistency with X
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
                className={`transition-opacity hover:opacity-80 ${link.brandColorClass}`}
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
