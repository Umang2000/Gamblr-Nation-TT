import type { Game } from '@/types';
import React from 'react';

export const games: Game[] = [
  {
    id: 'poker',
    name: 'Poker',
    description: 'Master the art of bluffing and strategy in various poker games.',
    longDescription:
      "Poker is a renowned family of comparing card games where players wager on the strength of their hand according to specific game rules. It intricately blends skill, strategic thinking, and psychological acumen.",
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'poker game table',
    externalLink: 'https://www.example.com/poker-info',
    learnMoreLink: '/games/poker',
    iconName: 'Spade', // Changed from Icon: Spade
    category: 'Card Game',
    complexity: 'High',
    players: '2-10 Players',
    articleContent: (
      <>
        <p className="lead">
          Poker is far more than a simple game of chance; it's a sophisticated contest of skill, mental fortitude, and strategic depth. Whether it's the shared community cards in Texas Hold'em or the four-card puzzle of Omaha, each variant presents unique challenges and layers of intellectual stimulation.
        </p>
        <h3>Foundations of Poker Mastery</h3>
        <p>To excel in poker, one must grasp several key concepts:</p>
        <ul>
          <li>
            <strong>Hand Rankings:</strong> A thorough understanding of the hierarchy of hands, from a Royal Flush down to a High Card, is absolutely fundamental. This knowledge forms the bedrock of all strategic decisions.
          </li>
          <li>
            <strong>Betting Strategies:</strong> The art of poker lies in knowing when to bet, call, raise, or fold. This decision is influenced by your hand's strength, your table position, and the perceived strategies of your opponents.
          </li>
          <li>
            <strong>Psychological Acumen (Player Tells):</strong> Keen observation of opponents' non-verbal cues (tells) and betting patterns can provide invaluable insights, offering a significant competitive advantage.
          </li>
          <li>
            <strong>Positional Awareness:</strong> Your position relative to the dealer button (the "button") dramatically impacts optimal strategy. Late positions offer more information and therefore more power.
          </li>
          <li>
            <strong>Bankroll Management:</strong> Disciplined management of your poker funds is crucial for long-term sustainability and success. Never play with money you cannot afford to lose.
          </li>
        </ul>

        <h3>Paths to Improvement</h3>
        <p>
          Continuous learning is key in poker. Study diverse strategies, engage in regular practice (ideally in low-stakes or free-to-play environments to hone skills without financial risk), critically analyze your gameplay, and seek wisdom from seasoned players and reputable educational resources.
        </p>
        <p>
          <em>Remember, responsible gaming is paramount. Poker should be an enjoyable and intellectually stimulating pursuit.</em>
        </p>
      </>
    ),
  },
  {
    id: 'slots',
    name: 'Slot Machines',
    description: 'Spin the reels for a chance at exciting jackpots and bonuses.',
    longDescription:
      "Slot machines are electronic or mechanical gaming devices that generate random combinations of symbols on reels. They are celebrated for their straightforward gameplay and the potential for substantial payouts.",
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'slot machine win',
    externalLink: 'https://www.example.com/slots-info',
    learnMoreLink: '/games/slots',
    iconName: 'Landmark', // Changed from Icon: Landmark
    category: 'Electronic Game',
    complexity: 'Low',
    players: '1 Player',
    articleContent: (
      <>
        <p className="lead">
          Slot machines stand as one of the most popular and visually captivating attractions in the gaming world. They are prized for their ease of play and the exhilarating possibility of hitting a life-altering jackpot. Modern video slots, in particular, offer a vast universe of themes, stunning graphics, and complex bonus features designed to enhance player engagement.
        </p>
        <h3>Decoding Slot Machine Mechanics</h3>
        <p>While seemingly simple, understanding the underlying mechanics can enrich the player experience:</p>
        <ul>
          <li>
            <strong>Paylines:</strong> These are predefined lines across the reels where winning combinations of symbols must align. Classic slots might have a single payline, while modern video slots can feature hundreds or even thousands ("ways to win").
          </li>
          <li>
            <strong>Return to Player (RTP):</strong> This is a theoretical percentage indicating the average portion of wagered money a slot machine is designed to pay back to players over an extended period of play (millions of spins). An RTP of 96% means that, on average, for every $100 wagered, the machine is expected to return $96.
          </li>
          <li>
            <strong>Volatility (Variance):</strong> This term describes the risk level inherent in a slot game. High volatility slots typically offer larger but less frequent wins, creating a more thrilling, high-risk/high-reward experience. Low volatility slots, conversely, provide smaller, more frequent wins, leading to longer play sessions.
          </li>
          <li>
            <strong>Bonus Features:</strong> These are special game elements designed to add excitement and increase winning potential. Common features include free spins (a set number of spins at no cost), wild symbols (which can substitute for other symbols to complete winning combinations), scatter symbols (which can trigger bonus rounds or payouts regardless of their position on paylines), and interactive mini-games.
          </li>
          <li>
            <strong>Random Number Generators (RNGs):</strong> At the heart of every certified slot machine is a sophisticated algorithm known as an RNG. This ensures that the outcome of each spin is entirely random and independent of previous or future spins, guaranteeing fair play.
          </li>
        </ul>

        <h3>Enjoying Slots Responsibly</h3>
        <p>
          While primarily games of chance, grasping these concepts can enhance your appreciation and enjoyment. It's crucial to always establish a budget before playing, adhere to it strictly, and view slot play as a form of entertainment rather than a means of financial gain.
        </p>
      </>
    ),
  },
  {
    id: 'blackjack',
    name: 'Blackjack',
    description: 'Aim for 21 and beat the dealer in this classic card game.',
    longDescription:
      "Blackjack, also known as Twenty-One, is a globally cherished casino banking game. It involves a strategic comparison of card values between players and a dealer, with the primary goal of achieving a hand total closer to 21 than the dealer, without exceeding this value.",
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'blackjack strategy',
    externalLink: 'https://www.example.com/blackjack-info',
    learnMoreLink: '/games/blackjack',
    iconName: 'Spade', // Changed from LayoutGrid to Spade
    category: 'Card Game',
    complexity: 'Medium',
    players: '1-7 Players',
    articleContent: (
      <>
        <p className="lead">
          Blackjack, often referred to by its evocative name "Twenty-One," is a captivating card game that masterfully blends elements of luck with a significant degree of skill and strategic decision-making. The objective appears deceptively simple: construct a hand whose total value is closer to 21 than the dealer’s hand, all without exceeding the crucial 21-point threshold (an outcome known as "busting").
        </p>
        <h3>Core Blackjack Decisions & Strategies</h3>
        <p>Player agency is central to Blackjack, with several key decisions available:</p>
        <ul>
          <li>
            <strong>Hit or Stand:</strong> This is the most fundamental decision in Blackjack. To "Hit" means to request an additional card from the dealer. To "Stand" (or "Stay") means to keep your current hand total and end your turn.
          </li>
          <li>
            <strong>Doubling Down:</strong> After receiving your initial two cards, you may have the option to "Double Down." This involves doubling your original bet in exchange for receiving only one more card. This is typically a strategic move when your initial hand is strong (e.g., totals 9, 10, or 11) and the dealer's upcard is weak.
          </li>
          <li>
            <strong>Splitting Pairs:</strong> If your first two cards form a pair (e.g., two 8s or two Aces), you generally have the option to "Split" them. This separates the pair into two distinct hands, each receiving an additional card. You must place an additional bet, equal to your original wager, on the new hand. Strategic splitting can significantly improve your chances.
          </li>
          <li>
            <strong>Insurance:</strong> When the dealer's face-up card is an Ace, players are typically offered an "Insurance" bet. This is a side bet, usually half the original wager, that pays out (often 2:1) if the dealer reveals a Blackjack (a ten-value card as their hole card). While seemingly protective, insurance is generally not recommended for players employing basic strategy due to its unfavorable odds.
          </li>
          <li>
            <strong>Surrender (if available):</strong> Some Blackjack variations offer a "Surrender" option, allowing a player to forfeit their hand and half of their bet after the initial deal, if they believe their hand is unlikely to win against the dealer's upcard.
          </li>
        </ul>

        <h3>The Power of Basic Strategy</h3>
        <p>
          A cornerstone of skilled Blackjack play is "basic strategy." This is a mathematically derived set of optimal plays for every possible hand combination a player can hold against any dealer upcard. Consistent and disciplined application of basic strategy can significantly reduce the casino's inherent advantage (house edge), making Blackjack one of the most player-friendly casino games.
        </p>
      </>
    ),
  },
  {
    id: 'craps',
    name: 'Craps',
    description:
      'Experience the excitement of the dice table with various betting options.',
    longDescription:
      "Craps is a dynamic dice game where players bet on the outcomes of a pair of dice. Known for its energetic atmosphere and complex betting system, it's a casino staple.",
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'craps dice rolling',
    externalLink: 'https://www.example.com/craps-info',
    learnMoreLink: '/games/craps',
    iconName: 'Dice5', // Changed from DiceFive
    category: 'Dice Game',
    complexity: 'High',
    players: 'Multiple Players',
    articleContent: (
      <>
        <p className="lead">
          Craps is an electrifying dice game that frequently serves as the vibrant heart of any casino floor. Its appeal lies in the communal excitement of players betting on the outcome of a roll, or series of rolls, of two six-sided dice. While the array of betting options can seem daunting to newcomers, the fundamental gameplay is relatively straightforward.
        </p>
        <h3>Understanding the Basics of Craps</h3>
        <ul>
          <li>
            <strong>The "Come-Out" Roll:</strong> Play begins with a "come-out" roll made by the "shooter" (the player rolling the dice). If this roll is a 7 or 11 (a "natural"), Pass Line bets win. If it's a 2, 3, or 12 ("craps"), Pass Line bets lose. Any other number (4, 5, 6, 8, 9, or 10) establishes the "point."
          </li>
          <li>
            <strong>The "Point" Phase:</strong> If a point is established, the shooter continues to roll the dice. The objective is to roll the point number again *before* rolling a 7. If the point is rolled, Pass Line bets win. If a 7 is rolled before the point (a "seven-out"), Pass Line bets lose, and the dice typically pass to the next shooter.
          </li>
        </ul>
        <h3>Key Bets in Craps</h3>
        <p>While numerous bets exist, some of the most common and fundamental include:</p>
        <ul>
          <li>
            <strong>Pass Line Bet:</strong> The most basic bet in craps. You're betting with the shooter, hoping they will either roll a natural on the come-out roll or establish and then re-roll a point before a 7.
          </li>
          <li>
            <strong>Don't Pass Line Bet:</strong> The opposite of the Pass Line. You're betting against the shooter. This bet wins if the come-out roll is a 2 or 3 (12 is usually a "push" or tie for Don't Pass bettors), or if a 7 is rolled before the point is re-rolled.
          </li>
          <li>
            <strong>Come Bet:</strong> Similar to a Pass Line bet, but can be made at any time *after* a point has been established. The next roll acts as a come-out roll specifically for this bet.
          </li>
          <li>
            <strong>Don't Come Bet:</strong> The opposite of a Come bet, functioning similarly to a Don't Pass bet but made after the point is established.
          </li>
          <li>
            <strong>Odds Bets:</strong> Once a point is established, players with Pass Line, Don't Pass, Come, or Don't Come bets can often make an additional "Odds" bet. These bets are unique because they are paid at true odds, meaning they have no house edge. This is one of the best bets in any casino.
          </li>
          <li>
            <strong>Place Bets:</strong> Bets made directly on specific numbers (4, 5, 6, 8, 9, 10) to be rolled before a 7.
          </li>
          <li>
            <strong>Proposition Bets:</strong> Single-roll bets on specific outcomes (e.g., "Any Craps" – 2, 3, or 12; "Field Bet" – 2, 3, 4, 9, 10, 11, or 12). These often have higher house edges but offer quick results.
          </li>
        </ul>
        <h3>The Craps Experience</h3>
        <p>
          Craps is as much about the energetic atmosphere and camaraderie as it is about the complex betting. The shared experience of cheering for (or against) the shooter creates a unique social dynamic. Understanding the basic bets and table etiquette can greatly enhance your enjoyment of this classic casino game. Always remember to gamble responsibly and familiarize yourself with the specific rules of the table you're playing at, as minor variations can exist.
        </p>
      </>
    ),
  },
  {
    id: 'roulette',
    name: 'Roulette',
    description: 'Place your bets and watch the iconic wheel spin for big wins.',
    longDescription:
      "Roulette is a classic casino game where players bet on which numbered pocket a small ball will land in on a spinning wheel. Its simple rules and thrilling suspense make it a favorite.",
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'roulette wheel betting',
    externalLink: 'https://www.example.com/roulette-info',
    learnMoreLink: '/games/roulette',
    iconName: 'CircleDotDashed', // Changed from CircleDot
    category: 'Table Game',
    complexity: 'Low',
    players: 'Multiple Players',
    articleContent: (
      <>
        <p className="lead">
          Roulette, with its iconic spinning wheel and the mesmerizing dance of the small white ball, is the quintessential game of chance and anticipation. Its name, derived from the French word for "little wheel," perfectly captures its essence. Players are drawn to its simple-to-understand rules and the wide array of betting options that cater to different risk appetites.
        </p>
        <h3>The Roulette Wheel and Table Layout</h3>
        <p>
          The game features a wheel with numbered pockets, typically 0-36 for European/French roulette, or 0, 00, and 1-36 for American roulette. These numbers alternate in color between red and black, with the 0 (and 00) usually being green. The table layout mirrors these numbers and colors, offering various betting squares where players place their chips.
        </p>
        <h3>Types of Roulette Bets</h3>
        <p>Roulette bets are broadly categorized into two types:</p>
        <ul>
          <li>
            <strong>Inside Bets:</strong> These are bets placed directly on the numbers themselves or on small groups of numbers. They offer higher payouts but have lower probabilities of winning. Examples include:
            <ul>
              <li><strong>Straight Up:</strong> Betting on a single number (e.g., 17). Pays 35 to 1.</li>
              <li><strong>Split:</strong> Betting on two adjacent numbers (e.g., 8 and 9). Pays 17 to 1.</li>
              <li><strong>Street:</strong> Betting on three numbers in a horizontal line (e.g., 1, 2, 3). Pays 11 to 1.</li>
              <li><strong>Corner (Square):</strong> Betting on four numbers that form a square on the layout (e.g., 25, 26, 28, 29). Pays 8 to 1.</li>
              <li><strong>Six Line (Double Street):</strong> Betting on two adjacent streets (six numbers). Pays 5 to 1.</li>
            </ul>
          </li>
          <li>
            <strong>Outside Bets:</strong> These bets are placed on larger groups of numbers or characteristics of the numbers. They offer lower payouts but have higher probabilities of winning. Examples include:
            <ul>
              <li><strong>Red or Black:</strong> Betting on whether the ball will land on a red or black number. Pays 1 to 1.</li>
              <li><strong>Even or Odd:</strong> Betting on whether the ball will land on an even or odd number. Pays 1 to 1.</li>
              <li><strong>Low (1-18) or High (19-36):</strong> Betting on whether the number will be in the lower or upper half. Pays 1 to 1.</li>
              <li><strong>Dozens:</strong> Betting on one of three groups of twelve numbers (1-12, 13-24, or 25-36). Pays 2 to 1.</li>
              <li><strong>Columns:</strong> Betting on one of the three vertical columns of numbers on the layout. Pays 2 to 1.</li>
            </ul>
          </li>
        </ul>
        <h3>Gameplay and House Edge</h3>
        <p>
          Once all bets are placed, the croupier spins the wheel in one direction and the ball in the opposite. The winning number is determined when the ball comes to rest in one of the numbered pockets. The presence of the 0 (and 00 in American roulette) gives the house its edge. European roulette (with a single zero) generally offers better odds to the player than American roulette.
        </p>
        <p>
          While roulette is fundamentally a game of luck, understanding the different bets, their payouts, and probabilities can make the experience more engaging. It’s a game of thrilling suspense, best enjoyed responsibly as a form of entertainment.
        </p>
      </>
    ),
  },
];
