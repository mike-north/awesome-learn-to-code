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

const mdGameIcons = (game: Game): string => {
  const icons: string[] = [];
  if (game.price > 0) {
    icons.push('💵');
  }
  if (icons.length === 0) {
    return '';
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
  return existingContent.replace(LIST_CONTENT_REGEX, wrapList(listContent));
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
