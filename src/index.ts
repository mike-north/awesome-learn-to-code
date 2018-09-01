// @ts-check
import { readFileSync, writeFileSync } from 'fs';
import { ALL_SITES_ORGANIZED } from './data/sites';
import { generateSiteListMarkdown } from './format';
/**
 * Update new content
 *
 * @param {string} existingContent
 * @returns {Promise<string>} updated content
 */

const LIST_BEGIN_TAG = '<!-- BEGIN_LIST -->';
const LIST_END_TAG = '<!-- END_LIST -->';
const TOC_BEGIN_TAG = '<!-- BEGIN_LIST -->';
const TOC_END_TAG = '<!-- END_LIST -->';
const wrapList = (content: string): string => [LIST_BEGIN_TAG, content.trim(), LIST_END_TAG].join('\n\n');

function updateSiteList(existingContent: string, listContent: string): string {
  const begin = existingContent.indexOf(LIST_BEGIN_TAG);
  const end = existingContent.indexOf(LIST_END_TAG, begin) + LIST_END_TAG.length;
  return [existingContent.substr(0, begin).trim(), wrapList(listContent), existingContent.substr(end).trim()].join(
    '\n\n',
  );
}

/**
 * Update markdown
 */
async function update() {
  const readmeContents = readFileSync('README.md').toString();
  const newConent = updateSiteList(readmeContents, generateSiteListMarkdown(ALL_SITES_ORGANIZED));
  writeFileSync('README.md', newConent);
}

// Run the update
update();
