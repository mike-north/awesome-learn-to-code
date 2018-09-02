// @ts-check
import ALL_CATEGORIES, { TopLevelCategoryName } from './categories';
import { ProgrammingLanguage } from './categories/languages';

import { pipe } from '../utils';
import { ClientWebFramework } from './categories/client-web-frameworks';
import { JSTopic } from './categories/javascript';
import { ToolName } from './categories/tools-and-editors';
import allBootcamps from './sites/bootcamps';
import allGames from './sites/games';
import allPlaygrounds from './sites/playgrounds';
import allPracticePlatforms from './sites/practice-platforms';
import allTutorials from './sites/tutorials';
import allVideoCourses from './sites/video-course';

export interface Resource {
  id: string;
  platforms: Resource.Platform[];
  categoryIds: Array<
    | [TopLevelCategoryName]
    | ['languages', ProgrammingLanguage]
    | ['toolsAndEditors', ToolName]
    | ['languages', 'javascript', JSTopic]
    | ['languages', 'javascript', 'clientWebFrameworks', ClientWebFramework]
  >;
  name: string;
  author?: Resource.Entity;
  authorOrg?: Resource.Entity;
  publisher?: Resource.Entity;
  type: Resource.Type | Resource.Type[];
  kidOriented?: boolean;
  description: string;
  url: string;
  price: number | Resource.Price;
}

export interface OrganizedResourceCategory {
  category: Resource.Category;
  path: string[];
  items: Resource[];
  children?: OrganizedResourceCategory[];
}

// tslint:disable-next-line:no-namespace
export declare namespace Resource {
  interface Entity {
    name: string;
    url?: string;
  }
  namespace Price {
    type Type = 'membership' | 'each';
    type Frequency = 'once' | 'year' | 'month';
  }
  interface Price {
    amt: number;
    type: Price.Type;
    frequency: Price.Frequency;
  }
  type Type = 'game' | 'playground' | 'video' | 'practice-platform' | 'tutorial' | 'bootcamp';
  type Platform = 'ios' | 'android' | 'web' | 'windows' | 'os x' | 'linux';
  interface Category<ID extends string = string> {
    id: ID;
    name: string;
    description?: string;
    order?: number;
    img?: string;
    url?: string;
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

const ALL_SITES: Resource[] = [
  ...allGames,
  ...allPlaygrounds,
  ...allVideoCourses,
  ...allBootcamps,
  ...allPracticePlatforms,
  ...allTutorials,
];

function siteMap(sites: Resource[]): { [k: string]: Resource[] } {
  const m: { [k: string]: Resource[] } = {};
  for (const g of sites) {
    for (const cpair of g.categoryIds) {
      const key = cpair.join('/');
      let gameList: Resource[] | undefined = m[key];
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
 * @param {Resource[]} sites
 */
function organizeResources<K extends string>(
  sites: Resource[],
  categories: Resource.Categories<K>,
  smap: { [k: string]: Resource[] } = siteMap(sites),
  parentCatName: string[] = [],
): OrganizedResourceCategory[] {
  const topLevel: OrganizedResourceCategory[] = [];
  // tslint:disable-next-line:forin
  for (const c in categories) {
    const cpair = parentCatName.concat(c);
    const catKey = cpair.join('/');
    const catSites = smap[catKey];
    const og: OrganizedResourceCategory = {
      category: categories[c],
      path: cpair,
      items: catSites || [],
    };
    const { children } = categories[c];
    if (children) {
      og.children = organizeResources<string>(sites, children, smap, cpair);
    }
    topLevel.push(og);
  }
  return topLevel;
}

function sortOrganizedSites(sites: OrganizedResourceCategory[]): OrganizedResourceCategory[] {
  return sites
    .filter(g => g.category.order !== void 0)
    .sort((a, b) => (b as any).category.order - (a as any).category.order)
    .concat(sites.filter(g => g.category.order === void 0).sort());
}

export const ALL_SITES_ORGANIZED = pipe(
  (sites: Resource[]) => organizeResources(sites, ALL_CATEGORIES),
  sortOrganizedSites,
)(ALL_SITES);
