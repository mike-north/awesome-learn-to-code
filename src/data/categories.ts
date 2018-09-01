import ALL_CWF from './categories/client-web-frameworks';
import ALL_LANGUAGES_WITH_ID from './categories/languages';
import { Resource } from './resource';

// @ts-check

const ALL_CATEGORIES: Resource.Categories = {
  'client-web-frameworks': {
    children: ALL_CWF,
    description: 'Frameworks for building web applications that run in the browser',
    id: 'client-web-frameworks',
    name: 'Client Web Frameworks',
    order: 4,
    url: 'https://en.wikipedia.org/wiki/Web_framework',
  },
  generalProgramming: {
    description: 'General computer programming skills & techniques',
    id: 'generalProgramming',
    name: 'General Programming',
    order: 1,
    url: 'https://en.wikipedia.org/wiki/Computer_programming',
  },
  languages: {
    children: ALL_LANGUAGES_WITH_ID,
    description: 'Programming languages',
    id: 'languages',
    name: 'Languages',
    order: 3,
    url: 'https://en.wikipedia.org/wiki/Programming_languages',
  },
  toolsAndEditors: {
    description: 'Build tools, text editors, IDEs and more',
    id: 'toolsAndEditors',
    name: 'Tools & Editors',
    order: 2,
    url: 'https://en.wikipedia.org/wiki/Programming_tool',
  },
};

export default ALL_CATEGORIES;
