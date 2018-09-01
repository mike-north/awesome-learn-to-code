import ALL_LANGUAGES_WITH_ID from './categories/languages';
import ALL_FRAMEWORKS from './categories/web-frameworks';
import { Site } from './sites';

// @ts-check

const ALL_CATEGORIES: Site.Categories = {
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
  'web-frameworks': {
    children: ALL_FRAMEWORKS,
    description: 'Web Frameworks',
    id: 'web-frameworks',
    name: 'Web Frameworks',
    order: 4,
    url: 'https://en.wikipedia.org/wiki/Web_framework',
  },
};

export default ALL_CATEGORIES;
