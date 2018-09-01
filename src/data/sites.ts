// @ts-check
import ALL_CATEGORIES from './categories';
import { ProgrammingLanguage } from './categories/languages';

import { pipe } from '../utils';
import allGames from './sites/games';
import allPlaygrounds from './sites/playgrounds';

export type SiteType = 'game' | 'playground' | 'video-site';
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
  pricePeriod?: 'once' | 'year' | 'month';
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

const ALL_SITES: Site[] = allGames.concat(allPlaygrounds);

function siteMap(sites: Site[]): { [k: string]: Site[] } {
  const m: { [k: string]: Site[] } = {};
  for (const g of sites) {
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
 * Organize all the sites into categories
 * @param {Site[]} sites
 */
function organizeSites<K extends string>(
  sites: Site[],
  categories: Site.Categories<K>,
  smap: { [k: string]: Site[] } = siteMap(sites),
  parentCatName: string[] = [],
): OrganizedSites[] {
  const topLevel: OrganizedSites[] = [];
  // tslint:disable-next-line:forin
  for (const c in categories) {
    const cpair = parentCatName.concat(c);
    const catKey = cpair.join('/');
    const catSites = smap[catKey];
    const og: OrganizedSites = {
      category: categories[c],
      items: catSites || [],
    };
    const { children } = categories[c];
    if (children) {
      og.children = organizeSites<string>(sites, children, smap, cpair);
    }
    topLevel.push(og);
  }
  return topLevel;
}

function sortOrganizedSites(sites: OrganizedSites[]): OrganizedSites[] {
  return sites
    .filter(g => g.category.order !== void 0)
    .sort((a, b) => (b as any).category.order - (a as any).category.order)
    .concat(sites.filter(g => g.category.order === void 0).sort());
}

export const ALL_SITES_ORGANIZED = pipe(
  (sites: Site[]) => organizeSites(sites, ALL_CATEGORIES),
  sortOrganizedSites,
)(ALL_SITES);
