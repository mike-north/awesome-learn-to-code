import ALL_LANGUAGES_WITH_ID from './categories/languages';
import ALL_TOOLS_WITH_ID from './categories/tools-and-editors';
import { Resource } from './resource';

// @ts-check
const ALL_CATEGORIES: Resource.Categories = {
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
    children: ALL_TOOLS_WITH_ID,
    description: 'Build tools, text editors, IDEs and more',
    id: 'toolsAndEditors',
    name: 'Tools & Editors',
    order: 2,
    url: 'https://en.wikipedia.org/wiki/Programming_tool',
  },
};

export default ALL_CATEGORIES;
