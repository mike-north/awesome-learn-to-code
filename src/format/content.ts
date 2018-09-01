import { OrganizedSites, Site } from '../data/sites';
import { mdCategory } from './category';
import { mdSite } from './site';

export function mdCategorySiteList(og: OrganizedSites, level: number = 1): string {
  const parts = [mdCategory(og.category, level)];
  const sortedItems = og.items.sort((a, b) => (b.name > a.name ? -1 : 1)).map(site => mdSite(site));
  if (sortedItems.length > 0) {
    parts.push('\n');
  }
  for (const item of sortedItems) {
    parts.push('\n', item);
  }
  const childCategories = og.children ? og.children.map(ch => mdCategorySiteList(ch, level + 1)) : [];
  for (const cat of childCategories) {
    parts.push('\n', '\n', cat);
  }
  return parts.join('');
}
