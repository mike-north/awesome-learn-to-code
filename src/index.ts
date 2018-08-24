// @ts-check
import { readFileSync, writeFileSync } from 'fs';
import allGames, { Game, OrganizedGames } from './data/games';
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

const mdCategoryIcons = (game: Game.Category): string => '';

const mdCategory = (cat: Game.Category, level: number): string => {
  const parts = [mdHeader(`[${cat.name}](${cat.url})`, level)];
  if (cat.description) {
    parts.push(`${cat.description}
    `);
  }
  return parts.join('\n');
};

const ICONS = {
  notFree: '/img/24/pay-wall.png',
  osx: '/img/24/osx.png',
  ios: '/img/24/ios.png',
  windows: '/img/24/windows.png',
  linux: '/img/24/linux.png',
  android: '/img/24/android.png',
};
const icon = (name: keyof typeof ICONS) => `![](${ICONS[name]})
`;

const mdGameIcons = (game: Game): string => {
  const icons: string[] = [];
  if (game.price > 0) {
    icons.push(icon('notFree'));
  }
  if (icons.length === 0) {
    return '';
  }
  if (game.platforms.includes('windows')) {
    icons.push(icon('windows'));
  }
  if (game.platforms.includes('os x')) {
    icons.push(icon('osx'));
  }
  if (game.platforms.includes('ios')) {
    icons.push(icon('ios'));
  }
  if (game.platforms.includes('android')) {
    icons.push(icon('android'));
  }
  if (game.platforms.includes('linux')) {
    icons.push(
      '![linux](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAEmSURBVDhPldO/S0JRGMbx69LQ0BKENUgQDuESQYIN0ihUU1Cjo3+AW5PQD5oCIQTBIJqkoKkpGmppaApa6x/ItIRA0bC+z7le8h65eX3gA77v1fcczj06/2QW20gjosY40Y9r+Ok7w1jJ4xp13KKHGYROETs4RA7aRQahU8I9jvAEDSggdKq4QxbP0IBXTGBkFtHFCTYQwwc0ZB8jc4UGpkzlRoeqAR0sqBGUOXxjz1R/mcQXNKSiRlB0cfSlVVP5cwM9ezNVQBLQG0iZyp9l6NUem8qKtriFT+ziFPaQJVxixVRW1qHtSRs6/RcM5gEX0CKbagxmDd4A0R3QSlHMI44WvOfn8EV/ngM8Qve+iSTKfVpA/XcMrW5HF0fs6Aym3Y9eHOcXp35B29x1KcsAAAAASUVORK5CYII=)',
    );
  }
  return icons.join('');
};

const mdGameDetails = (game: Game): string => {
  const parts: string[] = [mdGameIcons(game), game.description].filter(Boolean);

  if (parts.length > 0) {
    return ` - ${parts.join(' ')}`;
  }
  return '';
};

const mdGame = (game: Game): string => [`* [${game.name}](${game.url})`, mdGameDetails(game)].filter(Boolean).join('');

function mdCategoryGameList(og: OrganizedGames, level: number): string {
  const parts = [mdCategory(og.category, level)];
  if (og.items) {
    parts.push(...og.items.map(game => mdGame(game)));
    parts.push('\n');
  }
  if (og.children) {
    parts.push(...og.children.map(ch => mdCategoryGameList(ch, level + 1)));
  }
  return parts.join('\n');
}

function sortOgs(games: OrganizedGames[]): OrganizedGames[] {
  return games
    .filter(g => g.category.order !== void 0)
    .sort((a, b) => (b as any).category.order - (a as any).category.order)
    .concat(games.filter(g => g.category.order === void 0).sort());
}

function generateGameListMarkdown(games: OrganizedGames[], level: number = 1): string {
  return sortOgs(games).reduce((txt, game) => {
    return `${mdCategoryGameList(game, level)}${txt}`;
  }, '');
}

function updateGameList(existingContent: string, listContent: string): string {
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
  const newConent = updateGameList(readmeContents, generateGameListMarkdown(allGames));
  writeFileSync('README.md', newConent);
}

// Run the update
update();
