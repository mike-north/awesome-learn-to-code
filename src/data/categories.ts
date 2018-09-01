import ALL_LANGUAGES_WITH_ID from './categories/languages';
import ALL_TOOLS_WITH_ID from './categories/tools-and-editors';
import { Resource } from './resource';

// @ts-check
const ALL_CATEGORIES = {
  playground: {
    description: 'Web-based tools for running code right in a web browser',
    id: 'playground',
    name: 'Playgrounds',
    order: 9,
  },
  bootcamp: {
    description:
      'Curated and structured education that leads to leveling up your skills through exercises, projects and quizzes',
    id: 'bootcamp',
    name: 'Learning platforms and bootcamps',
    order: 1,
    url: 'https://en.wikipedia.org/wiki/Coding_bootcamp',
  },
  practicePlatform: {
    description:
      "Collections of exercises to help you sharpen your skills and learn at your own pace. Good for practice once you've mastered the basics",
    id: 'practicePlatform',
    name: 'Practice Platform',
    order: 1.2,
  },
  dataScience: {
    description:
      'The scientific methods, processes, algorithms and systems used to extract knowledge and insights from data',
    id: 'dataScience',
    name: 'Data Science',
    order: 2,
    url: 'https://en.wikipedia.org/wiki/Data_science',
  },
  generalProgramming: {
    description: 'General computer programming skills & techniques',
    id: 'generalProgramming',
    name: 'General Programming',
    order: 3,
    url: 'https://en.wikipedia.org/wiki/Computer_programming',
  },
  languages: {
    children: ALL_LANGUAGES_WITH_ID,
    description: 'Programming languages',
    id: 'languages',
    name: 'Languages',
    order: 5,
    url: 'https://en.wikipedia.org/wiki/Programming_languages',
  },
  toolsAndEditors: {
    children: ALL_TOOLS_WITH_ID,
    description: 'Build tools, text editors, IDEs and more',
    id: 'toolsAndEditors',
    name: 'Tools & Editors',
    order: 4,
    url: 'https://en.wikipedia.org/wiki/Programming_tool',
  },
};

export type TopLevelCategoryName = keyof typeof ALL_CATEGORIES;

export default ALL_CATEGORIES as Resource.Categories;
