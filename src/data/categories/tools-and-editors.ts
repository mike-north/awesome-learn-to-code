import { Resource } from '../resource';

const ALL_TOOLS = {
  webpack: { name: 'Webpack', id: 'webpack', url: 'https://webpack.js.org/' },
  git: { name: 'Git', id: 'git', url: 'https://git-scm.com/' },
  vscode: { name: 'Visual Studio Code', id: 'vscode', url: 'https://code.visualstudio.com/' },
  chromeDevTools: {
    name: 'Chrome Developer Tools',
    id: 'chromeDevTools',
    url: 'https://developers.google.com/web/tools/chrome-devtools/',
  },
};

export type ToolName = keyof typeof ALL_TOOLS;

/**
 * @type {Resource.Categories<'web-frameworks'>}
 */
const ALL_TOOLS_WITH_ID = (Object.keys(ALL_TOOLS) as Array<keyof typeof ALL_TOOLS>).reduce(
  (obj, k) => {
    // eslint-disable-next-line no-param-reassign
    obj[k] = Object.assign({ parentId: 'toolsAndEditors' as 'toolsAndEditors' }, ALL_TOOLS[k]);
    return obj;
  },
  {} as Resource.Categories<'toolsAndEditors'>,
);

export default ALL_TOOLS_WITH_ID;
