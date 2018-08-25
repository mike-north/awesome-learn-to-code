// @ts-check
import { readFileSync, writeFileSync } from 'fs';
import allSites, { OrganizedSites, Site } from './data/sites';
/**
 * Update new content
 *
 * @param {string} existingContent
 * @returns {Promise<string>} updated content
 */

const LIST_BEGIN_TAG = '<!-- BEGIN_LIST -->';
const LIST_END_TAG = '<!-- END_LIST -->';
const LIST_CONTENT_REGEX = /(?:<!--\sBEGIN_LIST\s-->)([\w\n\s]*)(?:<!--\sEND_LIST\s-->)/;
const wrapList = (content: string): string => `${LIST_BEGIN_TAG}

${content}

${LIST_END_TAG}`;

const MD_HEADER_PREFIXES = [null, '#', '##', '###', '####', '#####', '######'];

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
  if (site.platforms.includes('ios') || site.platforms.includes('android')) {
    icons.push('📱');
  }
  if (site.type === 'game') {
    icons.push('🎮');
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

function mdCategorySiteList(og: OrganizedSites, level: number): string {
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

function sortOgs(sites: OrganizedSites[]): OrganizedSites[] {
  return sites
    .filter(g => g.category.order !== void 0)
    .sort((a, b) => (b as any).category.order - (a as any).category.order)
    .concat(sites.filter(g => g.category.order === void 0).sort());
}

function generateSiteListMarkdown(sites: OrganizedSites[], level: number = 1): string {
  return sortOgs(sites).reduce((txt, site) => {
    return `${mdCategorySiteList(site, level)}${txt}`;
  }, '');
}

function updateSiteList(existingContent: string, listContent: string): string {
  const begin = existingContent.indexOf(LIST_BEGIN_TAG) - LIST_BEGIN_TAG.length;
  const end = existingContent.indexOf(LIST_END_TAG, begin) + LIST_END_TAG.length;
  return `${existingContent.substr(0, begin)}
${wrapList(listContent)}
${existingContent.substr(end)}`;
}

/**
 * Update markdown
 */
async function update() {
  const readmeContents = readFileSync('README.md').toString();
  const newConent = updateSiteList(readmeContents, generateSiteListMarkdown(allSites));
  writeFileSync('README.md', newConent);
}

// Run the update
update();
