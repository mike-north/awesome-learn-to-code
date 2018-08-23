// @ts-check
const fs = require('fs');

/**
 * Update new content
 *
 * @param {string} existingContent
 * @returns {Promise<string>} updated content
 */
async function updateReadme(existingContent) {
  return existingContent;
}

/**
 * Update all rendered files (HTML and Markdown)
 */
async function update() {
  const readmeContents = fs.readFileSync('README.md').toString();
  const newConent = await updateReadme(readmeContents);
  fs.writeFileSync('README.md', newConent);
}

// Run the update
update();
