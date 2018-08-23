type GamePlatform = 'ios' | 'android' | 'web' | 'windows' | 'os x' | 'linx';

interface GameDescription {
  platforms: GamePlatform[];
  name: string;
  description: string;
  url: string;
}
