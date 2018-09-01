import { OrganizedSites } from '../data/sites';
import { mdCategorySiteList } from './content';

export function generateSiteListMarkdown(sites: OrganizedSites[], level: number = 1): string {
  return sites.reduce((txt, site) => {
    return `${mdCategorySiteList(site, level)}${txt}`;
  }, '');
}
