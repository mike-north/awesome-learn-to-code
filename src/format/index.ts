import { OrganizedResourceCategory } from '../data/resource';
import { mdCategorySiteList } from './content';
import { mdTocOrganizedSite } from './toc';

export function generateSiteListMarkdown(sites: OrganizedResourceCategory[], level: number = 1): string {
  return sites.map(s => mdCategorySiteList(s, level)).join('\n\n');
}

export function generateTableOfContents(sites: OrganizedResourceCategory[]): string {
  return sites
    .sort((a, b) => a.category.name.localeCompare(b.category.name))
    .map(s => mdTocOrganizedSite(s))
    .join('\n');
}
