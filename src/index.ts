// @ts-check
import { readFileSync, writeFileSync } from 'fs';
import { ALL_SITES_ORGANIZED } from './data/sites';
import { generateSiteListMarkdown, generateTableOfContents } from './format';
import { pipe } from './utils';
/**
 * Update new content
 *
 * @param {string} existingContent
 * @returns {Promise<string>} updated content
 */

const LIST_BEGIN_TAG = '<!-- BEGIN_LIST -->';
const LIST_END_TAG = '<!-- END_LIST -->';
const TOC_BEGIN_TAG = '<!-- BEGIN_TOC -->';
const TOC_END_TAG = '<!-- END_TOC -->';

export function replaceBetween(
  beginText: string,
  endText: string,
  newContent: string,
  existingContent: string,
): string {
  const begin = existingContent.indexOf(beginText);
  const end = existingContent.indexOf(endText, begin);
  return [existingContent.substr(0, begin + beginText.length), newContent, existingContent.substr(end)].join('\n');
}

export const replaceSiteList: (newContent: string, existingContent: string) => string = replaceBetween.bind(
  null,
  LIST_BEGIN_TAG,
  LIST_END_TAG,
);
export const replaceTOC: (newContent: string, existingContent: string) => string = replaceBetween.bind(
  null,
  TOC_BEGIN_TAG,
  TOC_END_TAG,
);

/**
 * Update markdown
 */
async function update() {
  const readmeContents = readFileSync('README.md').toString();
  const newSiteList = generateSiteListMarkdown(ALL_SITES_ORGANIZED);
  const newToc = generateTableOfContents(ALL_SITES_ORGANIZED);
  const newConent = pipe(
    (x: string) => replaceSiteList(newSiteList, x), // site list
    (x: string) => replaceTOC(newToc, x), // table of contents,
  )(readmeContents);
  writeFileSync('README.md', newConent);
}

// Run the update
update();
