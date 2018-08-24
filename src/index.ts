// @ts-check
import { readFileSync, writeFileSync } from 'fs';
import allGames from './data/games';
/**
 * Update new content
 *
 * @param {string} existingContent
 * @returns {Promise<string>} updated content
 */
async function updateReadme(existingContent: string): Promise<string> {
  return existingContent;
}

/**
 * Update markdown
 */
async function update() {
  const readmeContents = readFileSync('README.md').toString();
  const newConent = await updateReadme(readmeContents);
  console.log(allGames);
  writeFileSync('README.md', newConent);
}

// Run the update
update();
