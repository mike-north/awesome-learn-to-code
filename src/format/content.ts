import { OrganizedSites, Site } from '../data/sites';
import { MD_HEADER_PREFIXES } from './utils';

const mdHeader = (text: string, level: number) => `${MD_HEADER_PREFIXES[level]} ${text}
`;

const mdCategoryIcons = (cat: Site.Category): string => '';

const mdCategory = (cat: Site.Category, level: number): string => {
  const parts = [mdHeader(`[${cat.name}](${cat.url})`, level)];
  if (cat.description) {
    parts.push(`${cat.description}
    `);
  }
  return parts.join('\n');
};

const ICONS = {
  android: '/img/16/android.png',
  ios: '/img/16/ios.png',
  linux: '/img/16/linux.png',
  notFree: '/img/16/pay.png',
  osx: '/img/16/osx.png',
  windows: '/img/16/windows.png',
};
const icon = (key: keyof typeof ICONS, title: string) => `[![${title}](${ICONS[key]})](#)
`;

const mdSiteIcons = (site: Site): string => {
  const icons: string[] = [];
  if (site.price > 0) {
    icons.push('💰');
  }
  if (site.platforms.includes('windows')) {
    icons.push('❖');
  }
  if (site.platforms.includes('os x')) {
    icons.push('');
  }
  if (site.platforms.includes('web')) {
    icons.push('🕸');
  }
  if (site.platforms.includes('ios') || site.platforms.includes('android')) {
    icons.push('📱');
  }
  if (site.type === 'game') {
    icons.push('🎮');
  }
  if (site.type === 'playground') {
    icons.push('🏗');
  }
  if (icons.length === 0) {
    return '';
  }
  return ` ${icons.join('')} `;
};

const mdSiteDetails = (site: Site): string => {
  const parts: string[] = [mdSiteIcons(site), site.description].filter(Boolean);

  if (parts.length > 0) {
    return ` - ${parts.join(' ')}`;
  }
  return '';
};

const mdSite = (site: Site): string => [`* [${site.name}](${site.url})`, mdSiteDetails(site)].filter(Boolean).join('');

export function mdCategorySiteList(og: OrganizedSites, level: number): string {
  const parts = [mdCategory(og.category, level)];
  if (og.items) {
    parts.push(...og.items.sort((a, b) => (b.name > a.name ? -1 : 1)).map(site => mdSite(site)));
    parts.push('\n');
  }
  if (og.children) {
    parts.push(...og.children.map(ch => mdCategorySiteList(ch, level + 1)));
  }
  return parts.join('\n');
}
