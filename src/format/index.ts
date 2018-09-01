import { OrganizedSites } from '../data/sites';
import { mdCategorySiteList } from './content';
import { mdTocOrganizedSite } from './toc';

export function generateSiteListMarkdown(sites: OrganizedSites[], level: number = 1): string {
  return sites.map(s => mdCategorySiteList(s, level)).join('\n\n');
}

export function generateTableOfContents(sites: OrganizedSites[]): string {
  return sites
    .sort((a, b) => a.category.name.localeCompare(b.category.name))
    .map(s => mdTocOrganizedSite(s))
    .join('\n');
}
