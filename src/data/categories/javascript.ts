import { Resource } from '../resource';
import ALL_WEB_FRAMEWORKS_WITH_ID from './client-web-frameworks';

const ALL_JS_TOPICS = {
  node: {
    description: "Run JavaScript in a places other than a web browser, using Chrome's V8 engine",
    id: 'node',
    name: 'Node.js',
    url: 'https://nodejs.org/',
  },
  clientWebFrameworks: {
    children: ALL_WEB_FRAMEWORKS_WITH_ID,
    description: 'Frameworks for building web applications that run in the browser',
    id: 'clientWebFrameworks',
    name: 'Client Web Frameworks',
    url: 'https://en.wikipedia.org/wiki/Web_framework',
  },
};

export type JSTopic = keyof typeof ALL_JS_TOPICS;

/**
 * @type {Resource.Categories<'javascript'>}
 */
const ALL_JS_TOPICS_WITH_ID = (Object.keys(ALL_JS_TOPICS) as Array<keyof typeof ALL_JS_TOPICS>).reduce(
  (obj, k) => {
    // eslint-disable-next-line no-param-reassign
    obj[k] = Object.assign({ parentId: 'javascript' as 'javascript' }, ALL_JS_TOPICS[k]);
    return obj;
  },
  {} as Resource.Categories<'javascript'>,
);

export default {
  id: 'javascript',
  name: 'JavaScript',
  url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  children: ALL_JS_TOPICS,
};
