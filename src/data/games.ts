// @ts-check
import ALL_CATEGORIES from './categories';
import { ProgrammingLanguage } from './categories/languages';
import codeCombat from './games/code-combat';
import codeHunt from './games/code-hunt';
import codeMonkey from './games/code-monkey';
import codeWars from './games/code-wars';
import codingGame from './games/codin-game';
import cssDiner from './games/css-diner';
import flexboxDefense from './games/flexbox-defense';
import flexboxFrogger from './games/flexbox-frogger';
import hrMachine from './games/human-resource-machine';
import robocode from './games/robocode';
import rubyWarrior from './games/ruby-warrior';
import screeps from './games/screeps';
import shenzhenIo from './games/shenzhen-io';
import swiftPlaygrounds from './games/swift-playgrounds';
import tis100 from './games/tis-100';
import vimAdventures from './games/vim-adventures';

export interface Game {
  id: string;
  platforms: Game.Platform[];
  categoryIds: Array<['languages', ProgrammingLanguage] | ['generalProgramming'] | ['tools']>;
  name: string;
  kidOriented?: boolean;
  description: string;
  url: string;
  price: number;
}

export interface OrganizedGames {
  category: Game.Category;
  items: Game[];
  children?: OrganizedGames[];
}

// tslint:disable-next-line:no-namespace
export declare namespace Game {
  type Platform = 'ios' | 'android' | 'web' | 'windows' | 'os x' | 'linux';
  interface Category<ID extends string = string> {
    id: ID;
    name: string;
    description?: string;
    order?: number | string;
    img?: string;
    url: string;
  }
  type Categories<P extends string = ''> = {
    [L in string]: Category<L> &
      (P extends ''
        ? { children?: Categories<L> }
        : {
            parentId: P;
            children?: Categories<L>;
          })
  };
}

/**
 * @type {Game[]}
 */
const ALL_GAMES = [
  codeCombat,
  codeHunt,
  codeWars,
  rubyWarrior,
  flexboxDefense,
  codingGame,
  cssDiner,
  codeMonkey,
  flexboxFrogger,
  hrMachine,
  robocode,
  shenzhenIo,
  swiftPlaygrounds,
  screeps,
  tis100,
  vimAdventures,
];

function gameMap(games: Game[]): { [k: string]: Game[] } {
  const m: { [k: string]: Game[] } = {};
  for (const g of games) {
    for (const cpair of g.categoryIds) {
      const key = cpair.join('/');
      let gameList: Game[] | undefined = m[key];
      if (!gameList) {
        gameList = [];
        m[key] = gameList;
      }
      gameList.push(g);
    }
  }
  return m;
}

/**
 * Organize all the games into categories
 * @param {Game[]} games
 */
function organizeGames<K extends string>(
  games: Game[],
  categories: Game.Categories<K>,
  gmap: { [k: string]: Game[] } = gameMap(games),
  parentCatName: string[] = [],
): OrganizedGames[] {
  const topLevel: OrganizedGames[] = [];
  // tslint:disable-next-line:forin
  for (const c in categories) {
    const cpair = parentCatName.concat(c);
    const catKey = cpair.join('/');
    const catGames = gmap[catKey];
    const og: OrganizedGames = {
      category: categories[c],
      items: catGames || [],
    };
    const { children } = categories[c];
    if (children) {
      og.children = organizeGames<string>(games, children, gmap, cpair);
    }
    topLevel.push(og);
  }
  return topLevel;
}

export default organizeGames(ALL_GAMES, ALL_CATEGORIES);
