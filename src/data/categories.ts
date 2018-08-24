import ALL_LANGUAGES_WITH_ID from './categories/languages';
import { Game } from './games';

// @ts-check

const ALL_CATEGORIES: Game.Categories = {
  generalProgramming: {
    id: 'generalProgramming',
    name: 'General Programming',
    url: 'https://en.wikipedia.org/wiki/Computer_programming',
    description: 'General computer programming skills & techniques',
  },
  toolsAndEditors: {
    id: 'toolsAndEditors',
    name: 'Tools & Editors',
    url: 'https://en.wikipedia.org/wiki/Programming_tool',
  },
  languages: {
    id: 'languages',
    name: 'Languages',
    url: 'https://en.wikipedia.org/wiki/Programming_languages',
    children: ALL_LANGUAGES_WITH_ID,
  },
};

export default ALL_CATEGORIES;
