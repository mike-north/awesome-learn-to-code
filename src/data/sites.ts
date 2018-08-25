// @ts-check
import ALL_CATEGORIES from './categories';
import { ProgrammingLanguage } from './categories/languages';
import learnGitBranching from './sites/branching-game';
import checkIO from './sites/check-io';
import codeCombat from './sites/code-combat';
import codeHunt from './sites/code-hunt';
import codeMonkey from './sites/code-monkey';
import codeWars from './sites/code-wars';
import codingGame from './sites/codin-game';
import cssDiner from './sites/css-diner';
import cyberDojo from './sites/cyber-dojo';
import flexboxDefense from './sites/flexbox-defense';
import flexboxFrogger from './sites/flexbox-frogger';
import gitGame from './sites/git-game';
import grasshopper from './sites/grasshopper';
import hrMachine from './sites/human-resource-machine';
import robocode from './sites/robocode';
import rubyWarrior from './sites/ruby-warrior';
import screeps from './sites/screeps';
import shenzhenIo from './sites/shenzhen-io';
import swiftPlaygrounds from './sites/swift-playgrounds';
import tis100 from './sites/tis-100';
import untrusted from './sites/untrusted';
import vimAdventures from './sites/vim-adventures';

export type SiteType = 'game';
export interface Site {
  id: string;
  platforms: Site.Platform[];
  categoryIds: Array<['languages', ProgrammingLanguage] | ['generalProgramming'] | ['toolsAndEditors']>;
  name: string;
  type: SiteType;
  kidOriented?: boolean;
  description: string;
  url: string;
  price: number;
}

export interface OrganizedSites {
  category: Site.Category;
  items: Site[];
  children?: OrganizedSites[];
}

// tslint:disable-next-line:no-namespace
export declare namespace Site {
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
 * @type {Site[]}
 */
const ALL_GAMES = [
  codeCombat,
  codeHunt,
  codeWars,
  rubyWarrior,
  gitGame,
  grasshopper,
  learnGitBranching,
  flexboxDefense,
  codingGame,
  cssDiner,
  codeMonkey,
  flexboxFrogger,
  cyberDojo,
  hrMachine,
  robocode,
  untrusted,
  shenzhenIo,
  checkIO,
  swiftPlaygrounds,
  screeps,
  tis100,
  vimAdventures,
];

function gameMap(games: Site[]): { [k: string]: Site[] } {
  const m: { [k: string]: Site[] } = {};
  for (const g of games) {
    for (const cpair of g.categoryIds) {
      const key = cpair.join('/');
      let gameList: Site[] | undefined = m[key];
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
 * @param {Site[]} games
 */
function organizeGames<K extends string>(
  games: Site[],
  categories: Site.Categories<K>,
  gmap: { [k: string]: Site[] } = gameMap(games),
  parentCatName: string[] = [],
): OrganizedSites[] {
  const topLevel: OrganizedSites[] = [];
  // tslint:disable-next-line:forin
  for (const c in categories) {
    const cpair = parentCatName.concat(c);
    const catKey = cpair.join('/');
    const catGames = gmap[catKey];
    const og: OrganizedSites = {
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
