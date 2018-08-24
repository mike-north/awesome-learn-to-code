import ALL_LANGUAGES_WITH_ID from './categories/languages';
import { Game } from './games';

// @ts-check

const ALL_CATEGORIES: Game.Categories = {
  generalProgramming: {
    order: 1,
    id: 'generalProgramming',
    name: 'General Programming',
    url: 'https://en.wikipedia.org/wiki/Computer_programming',
    description: 'General computer programming skills & techniques',
  },
  toolsAndEditors: {
    order: 2,
    id: 'toolsAndEditors',
    name: 'Tools & Editors',
    description: 'Build tools, text editors, IDEs and more',
    url: 'https://en.wikipedia.org/wiki/Programming_tool',
  },
  languages: {
    order: 3,
    id: 'languages',
    name: 'Languages',
    description: 'Programming languages',
    url: 'https://en.wikipedia.org/wiki/Programming_languages',
    children: ALL_LANGUAGES_WITH_ID,
  },
};

export default ALL_CATEGORIES;
