import type React from 'react';
import { Spade, Dice5, Landmark, CircleDotDashed, Zap, LayoutGrid, CircleDot, Coins, Dices } from 'lucide-react';

interface GameSpecificIconProps extends React.SVGProps<SVGSVGElement> {
  iconName?: string; // Make iconName optional to allow for a default
  className?: string;
}

const iconMap: { [key: string]: React.ElementType } = {
  Spade,
  Dice5, // For Craps (was DiceFive)
  Landmark, // For Slots
  CircleDotDashed, // For Roulette (was CircleDot)
  LayoutGrid, // Default or other uses
  CircleDot, // Explicitly available if needed
  Coins, // For Coinflip
  Dices, // For Dice Roll
  Zap, // General/Fallback
};

const GameSpecificIcon: React.FC<GameSpecificIconProps> = ({ iconName, className, ...props }) => {
  const IconComponent = iconName && iconMap[iconName] ? iconMap[iconName] : iconMap.Zap; // Default to Zap if no name or not found
  return <IconComponent className={className} {...props} />;
};

export default GameSpecificIcon;
