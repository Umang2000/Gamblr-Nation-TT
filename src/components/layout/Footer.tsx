
import Link from 'next/link';
import { Send, Twitter as TwitterIcon } from 'lucide-react';
import Logo from '@/components/icons/Logo';

const DiscordIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg fill="currentColor" role="img" viewBox="0 0 248 204" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M208.322 0C200.142 0 192.802 2.475 187.122 7.209L175.342 19.07C149.662 13.996 122.042 12.444 94.422 13.996L82.642 2.134C76.962 2.475 69.622 0 61.442 0C51.742 0 42.042 4.95 42.042 4.95S24.102 17.514 11.682 32.214C1.982 46.914 0.00201953 63.758 0.00201953 81.67C0.00201953 139.052 37.122 182.502 89.302 202.418C89.302 202.418 96.642 203.97 103.142 201.494C109.642 199.019 113.002 193.614 113.002 193.614C113.002 193.614 110.522 191.48 108.042 189.348C100.822 182.844 93.602 175.409 88.002 165.709C94.422 168.524 101.782 170.759 109.642 172.31C121.422 173.862 133.202 173.862 144.982 172.31C152.842 170.759 160.202 168.524 166.622 165.709C161.022 175.409 153.802 182.844 146.582 189.348C144.102 191.48 141.622 193.614 141.622 193.614C141.622 193.614 144.982 199.019 151.482 201.494C157.982 203.97 165.322 202.418 165.322 202.418C217.502 182.502 254.622 139.052 254.622 81.67C254.622 63.758 252.642 46.914 242.942 32.214C230.522 17.514 212.582 4.95 212.582 4.95S202.882 0 192.942 0L208.322 0Z"/>
    <path d="M85.8218 103.84C75.2818 103.84 66.6418 112.854 66.6418 123.81C66.6418 134.766 75.2818 143.78 85.8218 143.78C96.3618 143.78 104.682 134.766 104.682 123.81C105.002 112.854 96.3618 103.84 85.8218 103.84Z"/>
    <path d="M168.802 103.84C158.262 103.84 149.622 112.854 149.622 123.81C149.622 134.766 158.262 143.78 168.802 143.78C179.342 143.78 187.662 134.766 187.662 123.81C187.662 112.854 179.342 103.84 168.802 103.84Z"/>
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
