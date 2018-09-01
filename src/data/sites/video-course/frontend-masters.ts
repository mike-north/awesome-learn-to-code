import { Site } from '../../sites';

const SCRAPED_DATA = [
  {
    id: 'responsive-typography-v2',
    url: 'https://frontendmasters.com/courses/responsive-typography-v2/',
    name: 'Responsive Web Typography v2',
    instructor: { name: 'Jason Pamental', organization: 'Isovera' },
    description:
      'Learn how to implement web fonts and create a modern, scalable typographic system to give the best reading experience for desktop and mobile devices!',
  },
  {
    id: 'data-structures-interviews',
    url: 'https://frontendmasters.com/courses/responsive-typography-v2/',
    name: 'Responsive Web Typography v2',
    instructor: { name: 'Jason Pamental', organization: 'Isovera' },
    description:
      'Learn how to implement web fonts and create a modern, scalable typographic system to give the best reading experience for desktop and mobile devices!',
  },
  {
    id: 'aws-react-node-graphql',
    url: 'https://frontendmasters.com/courses/responsive-typography-v2/',
    name: 'Responsive Web Typography v2',
    instructor: { name: 'Jason Pamental', organization: 'Isovera' },
    description:
      'Learn how to implement web fonts and create a modern, scalable typographic system to give the best reading experience for desktop and mobile devices!',
  },
  {
    id: 'javascript-new-hard-parts',
    url: 'https://frontendmasters.com/courses/responsive-typography-v2/',
    name: 'Responsive Web Typography v2',
    instructor: { name: 'Jason Pamental', organization: 'Isovera' },
    description:
      'Learn how to implement web fonts and create a modern, scalable typographic system to give the best reading experience for desktop and mobile devices!',
  },
  {
    id: 'webpack-plugins',
    url: 'https://frontendmasters.com/courses/responsive-typography-v2/',
    name: 'Responsive Web Typography v2',
    instructor: { name: 'Jason Pamental', organization: 'Isovera' },
    description:
      'Learn how to implement web fonts and create a modern, scalable typographic system to give the best reading experience for desktop and mobile devices!',
  },
  {
    id: 'performance-webpack',
    url: 'https://frontendmasters.com/courses/responsive-typography-v2/',
    name: 'Responsive Web Typography v2',
    instructor: { name: 'Jason Pamental', organization: 'Isovera' },
    description:
      'Learn how to implement web fonts and create a modern, scalable typographic system to give the best reading experience for desktop and mobile devices!',
  },
  {
    id: 'webpack-fundamentals',
    url: 'https://frontendmasters.com/courses/responsive-typography-v2/',
    name: 'Responsive Web Typography v2',
    instructor: { name: 'Jason Pamental', organization: 'Isovera' },
    description:
      'Learn how to implement web fonts and create a modern, scalable typographic system to give the best reading experience for desktop and mobile devices!',
  },
  {
    id: 'web-development-v2',
    url: 'https://frontendmasters.com/courses/responsive-typography-v2/',
    name: 'Responsive Web Typography v2',
    instructor: { name: 'Jason Pamental', organization: 'Isovera' },
    description:
      'Learn how to implement web fonts and create a modern, scalable typographic system to give the best reading experience for desktop and mobile devices!',
  },
  {
    id: 'practical-algorithms',
    url: 'https://frontendmasters.com/courses/responsive-typography-v2/',
    name: 'Responsive Web Typography v2',
    instructor: { name: 'Jason Pamental', organization: 'Isovera' },
    description:
      'Learn how to implement web fonts and create a modern, scalable typographic system to give the best reading experience for desktop and mobile devices!',
  },
  {
    id: 'serverless-aws',
    url: 'https://frontendmasters.com/courses/responsive-typography-v2/',
    name: 'Responsive Web Typography v2',
    instructor: { name: 'Jason Pamental', organization: 'Isovera' },
    description:
      'Learn how to implement web fonts and create a modern, scalable typographic system to give the best reading experience for desktop and mobile devices!',
  },
  {
    id: 'advanced-graphql',
    url: 'https://frontendmasters.com/courses/responsive-typography-v2/',
    name: 'Responsive Web Typography v2',
    instructor: { name: 'Jason Pamental', organization: 'Isovera' },
    description:
      'Learn how to implement web fonts and create a modern, scalable typographic system to give the best reading experience for desktop and mobile devices!',
  },
  {
    id: 'testing-react',
    url: 'https://frontendmasters.com/courses/responsive-typography-v2/',
    name: 'Responsive Web Typography v2',
    instructor: { name: 'Jason Pamental', organization: 'Isovera' },
    description:
      'Learn how to implement web fonts and create a modern, scalable typographic system to give the best reading experience for desktop and mobile devices!',
  },
  {
    id: 'advanced-react-patterns',
    url: 'https://frontendmasters.com/courses/responsive-typography-v2/',
    name: 'Responsive Web Typography v2',
    instructor: { name: 'Jason Pamental', organization: 'Isovera' },
    description:
      'Learn how to implement web fonts and create a modern, scalable typographic system to give the best reading experience for desktop and mobile devices!',
  },
  {
    id: 'sql-fundamentals',
    url: 'https://frontendmasters.com/courses/responsive-typography-v2/',
    name: 'Responsive Web Typography v2',
    instructor: { name: 'Jason Pamental', organization: 'Isovera' },
    description:
      'Learn how to implement web fonts and create a modern, scalable typographic system to give the best reading experience for desktop and mobile devices!',
  },
  {
    id: 'content-strategy',
    url: 'https://frontendmasters.com/courses/responsive-typography-v2/',
    name: 'Responsive Web Typography v2',
    instructor: { name: 'Jason Pamental', organization: 'Isovera' },
    description:
      'Learn how to implement web fonts and create a modern, scalable typographic system to give the best reading experience for desktop and mobile devices!',
  },
  {
    id: 'web-performance',
    url: 'https://frontendmasters.com/courses/responsive-typography-v2/',
    name: 'Responsive Web Typography v2',
    instructor: { name: 'Jason Pamental', organization: 'Isovera' },
    description:
      'Learn how to implement web fonts and create a modern, scalable typographic system to give the best reading experience for desktop and mobile devices!',
  },
  {
    id: 'computer-science-2',
    url: 'https://frontendmasters.com/courses/responsive-typography-v2/',
    name: 'Responsive Web Typography v2',
    instructor: { name: 'Jason Pamental', organization: 'Isovera' },
    description:
      'Learn how to implement web fonts and create a modern, scalable typographic system to give the best reading experience for desktop and mobile devices!',
  },
  {
    id: 'js-fundamentals-functional-v2',
    url: 'https://frontendmasters.com/courses/responsive-typography-v2/',
    name: 'Responsive Web Typography v2',
    instructor: { name: 'Jason Pamental', organization: 'Isovera' },
    description:
      'Learn how to implement web fonts and create a modern, scalable typographic system to give the best reading experience for desktop and mobile devices!',
  },
  {
    id: 'git-in-depth',
    url: 'https://frontendmasters.com/courses/responsive-typography-v2/',
    name: 'Responsive Web Typography v2',
    instructor: { name: 'Jason Pamental', organization: 'Isovera' },
    description:
      'Learn how to implement web fonts and create a modern, scalable typographic system to give the best reading experience for desktop and mobile devices!',
  },
  {
    id: 'full-stack-v2',
    url: 'https://frontendmasters.com/courses/responsive-typography-v2/',
    name: 'Responsive Web Typography v2',
    instructor: { name: 'Jason Pamental', organization: 'Isovera' },
    description:
      'Learn how to implement web fonts and create a modern, scalable typographic system to give the best reading experience for desktop and mobile devices!',
  },
  {
    id: 'api-node-rest-graphql',
    url: 'https://frontendmasters.com/courses/responsive-typography-v2/',
    name: 'Responsive Web Typography v2',
    instructor: { name: 'Jason Pamental', organization: 'Isovera' },
    description:
      'Learn how to implement web fonts and create a modern, scalable typographic system to give the best reading experience for desktop and mobile devices!',
  },
  {
    id: 'building-apps-angular',
    url: 'https://frontendmasters.com/courses/responsive-typography-v2/',
    name: 'Responsive Web Typography v2',
    instructor: { name: 'Jason Pamental', organization: 'Isovera' },
    description:
      'Learn how to implement web fonts and create a modern, scalable typographic system to give the best reading experience for desktop and mobile devices!',
  },
  {
    id: 'typescript',
    url: 'https://frontendmasters.com/courses/responsive-typography-v2/',
    name: 'Responsive Web Typography v2',
    instructor: { name: 'Jason Pamental', organization: 'Isovera' },
    description:
      'Learn how to implement web fonts and create a modern, scalable typographic system to give the best reading experience for desktop and mobile devices!',
  },
  {
    id: 'css-in-depth-v2',
    url: 'https://frontendmasters.com/courses/responsive-typography-v2/',
    name: 'Responsive Web Typography v2',
    instructor: { name: 'Jason Pamental', organization: 'Isovera' },
    description:
      'Learn how to implement web fonts and create a modern, scalable typographic system to give the best reading experience for desktop and mobile devices!',
  },
  {
    id: 'css-grids-flexbox',
    url: 'https://frontendmasters.com/courses/responsive-typography-v2/',
    name: 'Responsive Web Typography v2',
    instructor: { name: 'Jason Pamental', organization: 'Isovera' },
    description:
      'Learn how to implement web fonts and create a modern, scalable typographic system to give the best reading experience for desktop and mobile devices!',
  },
  {
    id: 'javascript-hard-parts',
    url: 'https://frontendmasters.com/courses/responsive-typography-v2/',
    name: 'Responsive Web Typography v2',
    instructor: { name: 'Jason Pamental', organization: 'Isovera' },
    description:
      'Learn how to implement web fonts and create a modern, scalable typographic system to give the best reading experience for desktop and mobile devices!',
  },
  {
    id: 'advanced-vue',
    url: 'https://frontendmasters.com/courses/responsive-typography-v2/',
    name: 'Responsive Web Typography v2',
    instructor: { name: 'Jason Pamental', organization: 'Isovera' },
    description:
      'Learn how to implement web fonts and create a modern, scalable typographic system to give the best reading experience for desktop and mobile devices!',
  },
  {
    id: 'visual-studio-code',
    url: 'https://frontendmasters.com/courses/responsive-typography-v2/',
    name: 'Responsive Web Typography v2',
    instructor: { name: 'Jason Pamental', organization: 'Isovera' },
    description:
      'Learn how to implement web fonts and create a modern, scalable typographic system to give the best reading experience for desktop and mobile devices!',
  },
  {
    id: 'web-security',
    url: 'https://frontendmasters.com/courses/responsive-typography-v2/',
    name: 'Responsive Web Typography v2',
    instructor: { name: 'Jason Pamental', organization: 'Isovera' },
    description:
      'Learn how to implement web fonts and create a modern, scalable typographic system to give the best reading experience for desktop and mobile devices!',
  },
  {
    id: 'react-state',
    url: 'https://frontendmasters.com/courses/responsive-typography-v2/',
    name: 'Responsive Web Typography v2',
    instructor: { name: 'Jason Pamental', organization: 'Isovera' },
    description:
      'Learn how to implement web fonts and create a modern, scalable typographic system to give the best reading experience for desktop and mobile devices!',
  },
  {
    id: 'javascript-wordpress',
    url: 'https://frontendmasters.com/courses/responsive-typography-v2/',
    name: 'Responsive Web Typography v2',
    instructor: { name: 'Jason Pamental', organization: 'Isovera' },
    description:
      'Learn how to implement web fonts and create a modern, scalable typographic system to give the best reading experience for desktop and mobile devices!',
  },
  {
    id: 'progressive-web-apps',
    url: 'https://frontendmasters.com/courses/responsive-typography-v2/',
    name: 'Responsive Web Typography v2',
    instructor: { name: 'Jason Pamental', organization: 'Isovera' },
    description:
      'Learn how to implement web fonts and create a modern, scalable typographic system to give the best reading experience for desktop and mobile devices!',
  },
  {
    id: 'vue',
    url: 'https://frontendmasters.com/courses/responsive-typography-v2/',
    name: 'Responsive Web Typography v2',
    instructor: { name: 'Jason Pamental', organization: 'Isovera' },
    description:
      'Learn how to implement web fonts and create a modern, scalable typographic system to give the best reading experience for desktop and mobile devices!',
  },
  {
    id: 'advanced-async-js',
    url: 'https://frontendmasters.com/courses/responsive-typography-v2/',
    name: 'Responsive Web Typography v2',
    instructor: { name: 'Jason Pamental', organization: 'Isovera' },
    description:
      'Learn how to implement web fonts and create a modern, scalable typographic system to give the best reading experience for desktop and mobile devices!',
  },
  {
    id: 'testing-modular-front-end',
    url: 'https://frontendmasters.com/courses/responsive-typography-v2/',
    name: 'Responsive Web Typography v2',
    instructor: { name: 'Jason Pamental', organization: 'Isovera' },
    description:
      'Learn how to implement web fonts and create a modern, scalable typographic system to give the best reading experience for desktop and mobile devices!',
  },
  {
    id: 'leveldb-crypto',
    url: 'https://frontendmasters.com/courses/responsive-typography-v2/',
    name: 'Responsive Web Typography v2',
    instructor: { name: 'Jason Pamental', organization: 'Isovera' },
    description:
      'Learn how to implement web fonts and create a modern, scalable typographic system to give the best reading experience for desktop and mobile devices!',
  },
  {
    id: 'networking-streams',
    url: 'https://frontendmasters.com/courses/responsive-typography-v2/',
    name: 'Responsive Web Typography v2',
    instructor: { name: 'Jason Pamental', organization: 'Isovera' },
    description:
      'Learn how to implement web fonts and create a modern, scalable typographic system to give the best reading experience for desktop and mobile devices!',
  },
  {
    id: 'bash-vim-regex',
    url: 'https://frontendmasters.com/courses/responsive-typography-v2/',
    name: 'Responsive Web Typography v2',
    instructor: { name: 'Jason Pamental', organization: 'Isovera' },
    description:
      'Learn how to implement web fonts and create a modern, scalable typographic system to give the best reading experience for desktop and mobile devices!',
  },
  {
    id: 'functional-javascript-v2',
    url: 'https://frontendmasters.com/courses/responsive-typography-v2/',
    name: 'Responsive Web Typography v2',
    instructor: { name: 'Jason Pamental', organization: 'Isovera' },
    description:
      'Learn how to implement web fonts and create a modern, scalable typographic system to give the best reading experience for desktop and mobile devices!',
  },
  {
    id: 'javascript-foundations',
    url: 'https://frontendmasters.com/courses/responsive-typography-v2/',
    name: 'Responsive Web Typography v2',
    instructor: { name: 'Jason Pamental', organization: 'Isovera' },
    description:
      'Learn how to implement web fonts and create a modern, scalable typographic system to give the best reading experience for desktop and mobile devices!',
  },
  {
    id: 'linting-asts',
    url: 'https://frontendmasters.com/courses/responsive-typography-v2/',
    name: 'Responsive Web Typography v2',
    instructor: { name: 'Jason Pamental', organization: 'Isovera' },
    description:
      'Learn how to implement web fonts and create a modern, scalable typographic system to give the best reading experience for desktop and mobile devices!',
  },
  {
    id: 'react',
    url: 'https://frontendmasters.com/courses/responsive-typography-v2/',
    name: 'Responsive Web Typography v2',
    instructor: { name: 'Jason Pamental', organization: 'Isovera' },
    description:
      'Learn how to implement web fonts and create a modern, scalable typographic system to give the best reading experience for desktop and mobile devices!',
  },
  {
    id: 'testing-javascript',
    url: 'https://frontendmasters.com/courses/responsive-typography-v2/',
    name: 'Responsive Web Typography v2',
    instructor: { name: 'Jason Pamental', organization: 'Isovera' },
    description:
      'Learn how to implement web fonts and create a modern, scalable typographic system to give the best reading experience for desktop and mobile devices!',
  },
  {
    id: 'modern-seo',
    url: 'https://frontendmasters.com/courses/responsive-typography-v2/',
    name: 'Responsive Web Typography v2',
    instructor: { name: 'Jason Pamental', organization: 'Isovera' },
    description:
      'Learn how to implement web fonts and create a modern, scalable typographic system to give the best reading experience for desktop and mobile devices!',
  },
  {
    id: 'sass',
    url: 'https://frontendmasters.com/courses/responsive-typography-v2/',
    name: 'Responsive Web Typography v2',
    instructor: { name: 'Jason Pamental', organization: 'Isovera' },
    description:
      'Learn how to implement web fonts and create a modern, scalable typographic system to give the best reading experience for desktop and mobile devices!',
  },
  {
    id: 'debugging-javascript',
    url: 'https://frontendmasters.com/courses/responsive-typography-v2/',
    name: 'Responsive Web Typography v2',
    instructor: { name: 'Jason Pamental', organization: 'Isovera' },
    description:
      'Learn how to implement web fonts and create a modern, scalable typographic system to give the best reading experience for desktop and mobile devices!',
  },
  {
    id: 'd3-v4',
    url: 'https://frontendmasters.com/courses/responsive-typography-v2/',
    name: 'Responsive Web Typography v2',
    instructor: { name: 'Jason Pamental', organization: 'Isovera' },
    description:
      'Learn how to implement web fonts and create a modern, scalable typographic system to give the best reading experience for desktop and mobile devices!',
  },
  {
    id: 'hapi-js',
    url: 'https://frontendmasters.com/courses/responsive-typography-v2/',
    name: 'Responsive Web Typography v2',
    instructor: { name: 'Jason Pamental', organization: 'Isovera' },
    description:
      'Learn how to implement web fonts and create a modern, scalable typographic system to give the best reading experience for desktop and mobile devices!',
  },
  {
    id: 'firebase-react',
    url: 'https://frontendmasters.com/courses/responsive-typography-v2/',
    name: 'Responsive Web Typography v2',
    instructor: { name: 'Jason Pamental', organization: 'Isovera' },
    description:
      'Learn how to implement web fonts and create a modern, scalable typographic system to give the best reading experience for desktop and mobile devices!',
  },
  {
    id: 'data-structures-algorithms',
    url: 'https://frontendmasters.com/courses/responsive-typography-v2/',
    name: 'Responsive Web Typography v2',
    instructor: { name: 'Jason Pamental', organization: 'Isovera' },
    description:
      'Learn how to implement web fonts and create a modern, scalable typographic system to give the best reading experience for desktop and mobile devices!',
  },
  {
    id: 'advanced-ember-2',
    url: 'https://frontendmasters.com/courses/responsive-typography-v2/',
    name: 'Responsive Web Typography v2',
    instructor: { name: 'Jason Pamental', organization: 'Isovera' },
    description:
      'Learn how to implement web fonts and create a modern, scalable typographic system to give the best reading experience for desktop and mobile devices!',
  },
  {
    id: 'full-stack',
    url: 'https://frontendmasters.com/courses/responsive-typography-v2/',
    name: 'Responsive Web Typography v2',
    instructor: { name: 'Jason Pamental', organization: 'Isovera' },
    description:
      'Learn how to implement web fonts and create a modern, scalable typographic system to give the best reading experience for desktop and mobile devices!',
  },
  {
    id: 'electron',
    url: 'https://frontendmasters.com/courses/responsive-typography-v2/',
    name: 'Responsive Web Typography v2',
    instructor: { name: 'Jason Pamental', organization: 'Isovera' },
    description:
      'Learn how to implement web fonts and create a modern, scalable typographic system to give the best reading experience for desktop and mobile devices!',
  },
  {
    id: 'secure-auth-jwt',
    url: 'https://frontendmasters.com/courses/responsive-typography-v2/',
    name: 'Responsive Web Typography v2',
    instructor: { name: 'Jason Pamental', organization: 'Isovera' },
    description:
      'Learn how to implement web fonts and create a modern, scalable typographic system to give the best reading experience for desktop and mobile devices!',
  },
  {
    id: 'reactive-angular',
    url: 'https://frontendmasters.com/courses/responsive-typography-v2/',
    name: 'Responsive Web Typography v2',
    instructor: { name: 'Jason Pamental', organization: 'Isovera' },
    description:
      'Learn how to implement web fonts and create a modern, scalable typographic system to give the best reading experience for desktop and mobile devices!',
  },
  {
    id: 'web-apps-angular-2',
    url: 'https://frontendmasters.com/courses/responsive-typography-v2/',
    name: 'Responsive Web Typography v2',
    instructor: { name: 'Jason Pamental', organization: 'Isovera' },
    description:
      'Learn how to implement web fonts and create a modern, scalable typographic system to give the best reading experience for desktop and mobile devices!',
  },
  {
    id: 'complete-intro-react',
    url: 'https://frontendmasters.com/courses/responsive-typography-v2/',
    name: 'Responsive Web Typography v2',
    instructor: { name: 'Jason Pamental', organization: 'Isovera' },
    description:
      'Learn how to implement web fonts and create a modern, scalable typographic system to give the best reading experience for desktop and mobile devices!',
  },
  {
    id: 'web-accessibility',
    url: 'https://frontendmasters.com/courses/responsive-typography-v2/',
    name: 'Responsive Web Typography v2',
    instructor: { name: 'Jason Pamental', organization: 'Isovera' },
    description:
      'Learn how to implement web fonts and create a modern, scalable typographic system to give the best reading experience for desktop and mobile devices!',
  },
  {
    id: 'elm',
    url: 'https://frontendmasters.com/courses/responsive-typography-v2/',
    name: 'Responsive Web Typography v2',
    instructor: { name: 'Jason Pamental', organization: 'Isovera' },
    description:
      'Learn how to implement web fonts and create a modern, scalable typographic system to give the best reading experience for desktop and mobile devices!',
  },
  {
    id: 'es6-right-parts',
    url: 'https://frontendmasters.com/courses/responsive-typography-v2/',
    name: 'Responsive Web Typography v2',
    instructor: { name: 'Jason Pamental', organization: 'Isovera' },
    description:
      'Learn how to implement web fonts and create a modern, scalable typographic system to give the best reading experience for desktop and mobile devices!',
  },
  {
    id: 'production-node-aws',
    url: 'https://frontendmasters.com/courses/responsive-typography-v2/',
    name: 'Responsive Web Typography v2',
    instructor: { name: 'Jason Pamental', organization: 'Isovera' },
    description:
      'Learn how to implement web fonts and create a modern, scalable typographic system to give the best reading experience for desktop and mobile devices!',
  },
  {
    id: 'open-source',
    url: 'https://frontendmasters.com/courses/responsive-typography-v2/',
    name: 'Responsive Web Typography v2',
    instructor: { name: 'Jason Pamental', organization: 'Isovera' },
    description:
      'Learn how to implement web fonts and create a modern, scalable typographic system to give the best reading experience for desktop and mobile devices!',
  },
  {
    id: 'webpack',
    url: 'https://frontendmasters.com/courses/responsive-typography-v2/',
    name: 'Responsive Web Typography v2',
    instructor: { name: 'Jason Pamental', organization: 'Isovera' },
    description:
      'Learn how to implement web fonts and create a modern, scalable typographic system to give the best reading experience for desktop and mobile devices!',
  },
  {
    id: 'react-native',
    url: 'https://frontendmasters.com/courses/responsive-typography-v2/',
    name: 'Responsive Web Typography v2',
    instructor: { name: 'Jason Pamental', organization: 'Isovera' },
    description:
      'Learn how to implement web fonts and create a modern, scalable typographic system to give the best reading experience for desktop and mobile devices!',
  },
  {
    id: 'chrome-dev-tools',
    url: 'https://frontendmasters.com/courses/responsive-typography-v2/',
    name: 'Responsive Web Typography v2',
    instructor: { name: 'Jason Pamental', organization: 'Isovera' },
    description:
      'Learn how to implement web fonts and create a modern, scalable typographic system to give the best reading experience for desktop and mobile devices!',
  },
  {
    id: 'motion-design-css',
    url: 'https://frontendmasters.com/courses/responsive-typography-v2/',
    name: 'Responsive Web Typography v2',
    instructor: { name: 'Jason Pamental', organization: 'Isovera' },
    description:
      'Learn how to implement web fonts and create a modern, scalable typographic system to give the best reading experience for desktop and mobile devices!',
  },
  {
    id: 'react-intro',
    url: 'https://frontendmasters.com/courses/responsive-typography-v2/',
    name: 'Responsive Web Typography v2',
    instructor: { name: 'Jason Pamental', organization: 'Isovera' },
    description:
      'Learn how to implement web fonts and create a modern, scalable typographic system to give the best reading experience for desktop and mobile devices!',
  },
  {
    id: 'computer-science',
    url: 'https://frontendmasters.com/courses/responsive-typography-v2/',
    name: 'Responsive Web Typography v2',
    instructor: { name: 'Jason Pamental', organization: 'Isovera' },
    description:
      'Learn how to implement web fonts and create a modern, scalable typographic system to give the best reading experience for desktop and mobile devices!',
  },
  {
    id: 'good-parts-javascript-web',
    url: 'https://frontendmasters.com/courses/responsive-typography-v2/',
    name: 'Responsive Web Typography v2',
    instructor: { name: 'Jason Pamental', organization: 'Isovera' },
    description:
      'Learn how to implement web fonts and create a modern, scalable typographic system to give the best reading experience for desktop and mobile devices!',
  },
  {
    id: 'reactive-angular-2',
    url: 'https://frontendmasters.com/courses/responsive-typography-v2/',
    name: 'Responsive Web Typography v2',
    instructor: { name: 'Jason Pamental', organization: 'Isovera' },
    description:
      'Learn how to implement web fonts and create a modern, scalable typographic system to give the best reading experience for desktop and mobile devices!',
  },
  {
    id: 'angular-2',
    url: 'https://frontendmasters.com/courses/responsive-typography-v2/',
    name: 'Responsive Web Typography v2',
    instructor: { name: 'Jason Pamental', organization: 'Isovera' },
    description:
      'Learn how to implement web fonts and create a modern, scalable typographic system to give the best reading experience for desktop and mobile devices!',
  },
  {
    id: 'rethinking-async-js',
    url: 'https://frontendmasters.com/courses/responsive-typography-v2/',
    name: 'Responsive Web Typography v2',
    instructor: { name: 'Jason Pamental', organization: 'Isovera' },
    description:
      'Learn how to implement web fonts and create a modern, scalable typographic system to give the best reading experience for desktop and mobile devices!',
  },
  {
    id: 'functional-js-lite',
    url: 'https://frontendmasters.com/courses/responsive-typography-v2/',
    name: 'Responsive Web Typography v2',
    instructor: { name: 'Jason Pamental', organization: 'Isovera' },
    description:
      'Learn how to implement web fonts and create a modern, scalable typographic system to give the best reading experience for desktop and mobile devices!',
  },
  {
    id: 'svg-animation',
    url: 'https://frontendmasters.com/courses/responsive-typography-v2/',
    name: 'Responsive Web Typography v2',
    instructor: { name: 'Jason Pamental', organization: 'Isovera' },
    description:
      'Learn how to implement web fonts and create a modern, scalable typographic system to give the best reading experience for desktop and mobile devices!',
  },
  {
    id: 'ember-2',
    url: 'https://frontendmasters.com/courses/responsive-typography-v2/',
    name: 'Responsive Web Typography v2',
    instructor: { name: 'Jason Pamental', organization: 'Isovera' },
    description:
      'Learn how to implement web fonts and create a modern, scalable typographic system to give the best reading experience for desktop and mobile devices!',
  },
  {
    id: 'api-design-nodejs',
    url: 'https://frontendmasters.com/courses/responsive-typography-v2/',
    name: 'Responsive Web Typography v2',
    instructor: { name: 'Jason Pamental', organization: 'Isovera' },
    description:
      'Learn how to implement web fonts and create a modern, scalable typographic system to give the best reading experience for desktop and mobile devices!',
  },
  {
    id: 'angular-components-es6',
    url: 'https://frontendmasters.com/courses/responsive-typography-v2/',
    name: 'Responsive Web Typography v2',
    instructor: { name: 'Jason Pamental', organization: 'Isovera' },
    description:
      'Learn how to implement web fonts and create a modern, scalable typographic system to give the best reading experience for desktop and mobile devices!',
  },
  {
    id: 'modern-web-apps',
    url: 'https://frontendmasters.com/courses/responsive-typography-v2/',
    name: 'Responsive Web Typography v2',
    instructor: { name: 'Jason Pamental', organization: 'Isovera' },
    description:
      'Learn how to implement web fonts and create a modern, scalable typographic system to give the best reading experience for desktop and mobile devices!',
  },
  {
    id: 'meteor',
    url: 'https://frontendmasters.com/courses/responsive-typography-v2/',
    name: 'Responsive Web Typography v2',
    instructor: { name: 'Jason Pamental', organization: 'Isovera' },
    description:
      'Learn how to implement web fonts and create a modern, scalable typographic system to give the best reading experience for desktop and mobile devices!',
  },
  {
    id: 'unit-testing-javascript',
    url: 'https://frontendmasters.com/courses/responsive-typography-v2/',
    name: 'Responsive Web Typography v2',
    instructor: { name: 'Jason Pamental', organization: 'Isovera' },
    description:
      'Learn how to implement web fonts and create a modern, scalable typographic system to give the best reading experience for desktop and mobile devices!',
  },
  {
    id: 'asynchronous-javascript',
    url: 'https://frontendmasters.com/courses/responsive-typography-v2/',
    name: 'Responsive Web Typography v2',
    instructor: { name: 'Jason Pamental', organization: 'Isovera' },
    description:
      'Learn how to implement web fonts and create a modern, scalable typographic system to give the best reading experience for desktop and mobile devices!',
  },
  {
    id: 'organizing-javascript',
    url: 'https://frontendmasters.com/courses/responsive-typography-v2/',
    name: 'Responsive Web Typography v2',
    instructor: { name: 'Jason Pamental', organization: 'Isovera' },
    description:
      'Learn how to implement web fonts and create a modern, scalable typographic system to give the best reading experience for desktop and mobile devices!',
  },
  {
    id: 'javascript-coercion',
    url: 'https://frontendmasters.com/courses/responsive-typography-v2/',
    name: 'Responsive Web Typography v2',
    instructor: { name: 'Jason Pamental', organization: 'Isovera' },
    description:
      'Learn how to implement web fonts and create a modern, scalable typographic system to give the best reading experience for desktop and mobile devices!',
  },
  {
    id: 'javascript-basics',
    url: 'https://frontendmasters.com/courses/responsive-typography-v2/',
    name: 'Responsive Web Typography v2',
    instructor: { name: 'Jason Pamental', organization: 'Isovera' },
    description:
      'Learn how to implement web fonts and create a modern, scalable typographic system to give the best reading experience for desktop and mobile devices!',
  },
  {
    id: 'ui-prototyping-framer',
    url: 'https://frontendmasters.com/courses/responsive-typography-v2/',
    name: 'Responsive Web Typography v2',
    instructor: { name: 'Jason Pamental', organization: 'Isovera' },
    description:
      'Learn how to implement web fonts and create a modern, scalable typographic system to give the best reading experience for desktop and mobile devices!',
  },
  {
    id: 'angular-app-dev',
    url: 'https://frontendmasters.com/courses/responsive-typography-v2/',
    name: 'Responsive Web Typography v2',
    instructor: { name: 'Jason Pamental', organization: 'Isovera' },
    description:
      'Learn how to implement web fonts and create a modern, scalable typographic system to give the best reading experience for desktop and mobile devices!',
  },
  {
    id: 'react-intro-to-flux',
    url: 'https://frontendmasters.com/courses/responsive-typography-v2/',
    name: 'Responsive Web Typography v2',
    instructor: { name: 'Jason Pamental', organization: 'Isovera' },
    description:
      'Learn how to implement web fonts and create a modern, scalable typographic system to give the best reading experience for desktop and mobile devices!',
  },
  {
    id: 'responsive-email',
    url: 'https://frontendmasters.com/courses/responsive-typography-v2/',
    name: 'Responsive Web Typography v2',
    instructor: { name: 'Jason Pamental', organization: 'Isovera' },
    description:
      'Learn how to implement web fonts and create a modern, scalable typographic system to give the best reading experience for desktop and mobile devices!',
  },
  {
    id: 'javascript-jquery-dom',
    url: 'https://frontendmasters.com/courses/responsive-typography-v2/',
    name: 'Responsive Web Typography v2',
    instructor: { name: 'Jason Pamental', organization: 'Isovera' },
    description:
      'Learn how to implement web fonts and create a modern, scalable typographic system to give the best reading experience for desktop and mobile devices!',
  },
  {
    id: 'smacss',
    url: 'https://frontendmasters.com/courses/responsive-typography-v2/',
    name: 'Responsive Web Typography v2',
    instructor: { name: 'Jason Pamental', organization: 'Isovera' },
    description:
      'Learn how to implement web fonts and create a modern, scalable typographic system to give the best reading experience for desktop and mobile devices!',
  },
  {
    id: 'js-fundamentals-to-functional',
    url: 'https://frontendmasters.com/courses/responsive-typography-v2/',
    name: 'Responsive Web Typography v2',
    instructor: { name: 'Jason Pamental', organization: 'Isovera' },
    description:
      'Learn how to implement web fonts and create a modern, scalable typographic system to give the best reading experience for desktop and mobile devices!',
  },
  {
    id: 'jsnext-es6',
    url: 'https://frontendmasters.com/courses/responsive-typography-v2/',
    name: 'Responsive Web Typography v2',
    instructor: { name: 'Jason Pamental', organization: 'Isovera' },
    description:
      'Learn how to implement web fonts and create a modern, scalable typographic system to give the best reading experience for desktop and mobile devices!',
  },
  {
    id: 'responsive-typography',
    url: 'https://frontendmasters.com/courses/responsive-typography-v2/',
    name: 'Responsive Web Typography v2',
    instructor: { name: 'Jason Pamental', organization: 'Isovera' },
    description:
      'Learn how to implement web fonts and create a modern, scalable typographic system to give the best reading experience for desktop and mobile devices!',
  },
  {
    id: 'web-development',
    url: 'https://frontendmasters.com/courses/responsive-typography-v2/',
    name: 'Responsive Web Typography v2',
    instructor: { name: 'Jason Pamental', organization: 'Isovera' },
    description:
      'Learn how to implement web fonts and create a modern, scalable typographic system to give the best reading experience for desktop and mobile devices!',
  },
  {
    id: 'javascript-frameworks-showdown',
    url: 'https://frontendmasters.com/courses/responsive-typography-v2/',
    name: 'Responsive Web Typography v2',
    instructor: { name: 'Jason Pamental', organization: 'Isovera' },
    description:
      'Learn how to implement web fonts and create a modern, scalable typographic system to give the best reading experience for desktop and mobile devices!',
  },
  {
    id: 'functional-javascript',
    url: 'https://frontendmasters.com/courses/responsive-typography-v2/',
    name: 'Responsive Web Typography v2',
    instructor: { name: 'Jason Pamental', organization: 'Isovera' },
    description:
      'Learn how to implement web fonts and create a modern, scalable typographic system to give the best reading experience for desktop and mobile devices!',
  },
  {
    id: 'realtime-html5-nodejs',
    url: 'https://frontendmasters.com/courses/responsive-typography-v2/',
    name: 'Responsive Web Typography v2',
    instructor: { name: 'Jason Pamental', organization: 'Isovera' },
    description:
      'Learn how to implement web fonts and create a modern, scalable typographic system to give the best reading experience for desktop and mobile devices!',
  },
  {
    id: 'advanced-javascript',
    url: 'https://frontendmasters.com/courses/responsive-typography-v2/',
    name: 'Responsive Web Typography v2',
    instructor: { name: 'Jason Pamental', organization: 'Isovera' },
    description:
      'Learn how to implement web fonts and create a modern, scalable typographic system to give the best reading experience for desktop and mobile devices!',
  },
  {
    id: 'html5-media-apis',
    url: 'https://frontendmasters.com/courses/responsive-typography-v2/',
    name: 'Responsive Web Typography v2',
    instructor: { name: 'Jason Pamental', organization: 'Isovera' },
    description:
      'Learn how to implement web fonts and create a modern, scalable typographic system to give the best reading experience for desktop and mobile devices!',
  },
  {
    id: 'workflows-and-tooling',
    url: 'https://frontendmasters.com/courses/responsive-typography-v2/',
    name: 'Responsive Web Typography v2',
    instructor: { name: 'Jason Pamental', organization: 'Isovera' },
    description:
      'Learn how to implement web fonts and create a modern, scalable typographic system to give the best reading experience for desktop and mobile devices!',
  },
  {
    id: 'interactive-data-visualization-d3-js',
    url: 'https://frontendmasters.com/courses/responsive-typography-v2/',
    name: 'Responsive Web Typography v2',
    instructor: { name: 'Jason Pamental', organization: 'Isovera' },
    description:
      'Learn how to implement web fonts and create a modern, scalable typographic system to give the best reading experience for desktop and mobile devices!',
  },
  {
    id: 'angularjs-in-depth',
    url: 'https://frontendmasters.com/courses/responsive-typography-v2/',
    name: 'Responsive Web Typography v2',
    instructor: { name: 'Jason Pamental', organization: 'Isovera' },
    description:
      'Learn how to implement web fonts and create a modern, scalable typographic system to give the best reading experience for desktop and mobile devices!',
  },
  {
    id: 'backbone-js-in-depth-testing-mocha-sinon',
    url: 'https://frontendmasters.com/courses/responsive-typography-v2/',
    name: 'Responsive Web Typography v2',
    instructor: { name: 'Jason Pamental', organization: 'Isovera' },
    description:
      'Learn how to implement web fonts and create a modern, scalable typographic system to give the best reading experience for desktop and mobile devices!',
  },
  {
    id: 'css3-in-depth',
    url: 'https://frontendmasters.com/courses/responsive-typography-v2/',
    name: 'Responsive Web Typography v2',
    instructor: { name: 'Jason Pamental', organization: 'Isovera' },
    description:
      'Learn how to implement web fonts and create a modern, scalable typographic system to give the best reading experience for desktop and mobile devices!',
  },
  {
    id: 'web-ui-architecture',
    url: 'https://frontendmasters.com/courses/responsive-typography-v2/',
    name: 'Responsive Web Typography v2',
    instructor: { name: 'Jason Pamental', organization: 'Isovera' },
    description:
      'Learn how to implement web fonts and create a modern, scalable typographic system to give the best reading experience for desktop and mobile devices!',
  },
  {
    id: 'lean-front-end-engineering',
    url: 'https://frontendmasters.com/courses/responsive-typography-v2/',
    name: 'Responsive Web Typography v2',
    instructor: { name: 'Jason Pamental', organization: 'Isovera' },
    description:
      'Learn how to implement web fonts and create a modern, scalable typographic system to give the best reading experience for desktop and mobile devices!',
  },
  {
    id: 'responsive-web-design',
    url: 'https://frontendmasters.com/courses/responsive-typography-v2/',
    name: 'Responsive Web Typography v2',
    instructor: { name: 'Jason Pamental', organization: 'Isovera' },
    description:
      'Learn how to implement web fonts and create a modern, scalable typographic system to give the best reading experience for desktop and mobile devices!',
  },
  {
    id: 'website-performance',
    url: 'https://frontendmasters.com/courses/responsive-typography-v2/',
    name: 'Responsive Web Typography v2',
    instructor: { name: 'Jason Pamental', organization: 'Isovera' },
    description:
      'Learn how to implement web fonts and create a modern, scalable typographic system to give the best reading experience for desktop and mobile devices!',
  },
  {
    id: 'javascript-the-good-parts',
    url: 'https://frontendmasters.com/courses/responsive-typography-v2/',
    name: 'Responsive Web Typography v2',
    instructor: { name: 'Jason Pamental', organization: 'Isovera' },
    description:
      'Learn how to implement web fonts and create a modern, scalable typographic system to give the best reading experience for desktop and mobile devices!',
  },
  {
    id: 'angularjs-and-code-testability',
    url: 'https://frontendmasters.com/courses/responsive-typography-v2/',
    name: 'Responsive Web Typography v2',
    instructor: { name: 'Jason Pamental', organization: 'Isovera' },
    description:
      'Learn how to implement web fonts and create a modern, scalable typographic system to give the best reading experience for desktop and mobile devices!',
  },
  {
    id: 'introduction-html5-css3',
    url: 'https://frontendmasters.com/courses/responsive-typography-v2/',
    name: 'Responsive Web Typography v2',
    instructor: { name: 'Jason Pamental', organization: 'Isovera' },
    description:
      'Learn how to implement web fonts and create a modern, scalable typographic system to give the best reading experience for desktop and mobile devices!',
  },
  {
    id: 'jquery-plugins-jquery-ui',
    url: 'https://frontendmasters.com/courses/responsive-typography-v2/',
    name: 'Responsive Web Typography v2',
    instructor: { name: 'Jason Pamental', organization: 'Isovera' },
    description:
      'Learn how to implement web fonts and create a modern, scalable typographic system to give the best reading experience for desktop and mobile devices!',
  },
  {
    id: 'jquery-in-depth',
    url: 'https://frontendmasters.com/courses/responsive-typography-v2/',
    name: 'Responsive Web Typography v2',
    instructor: { name: 'Jason Pamental', organization: 'Isovera' },
    description:
      'Learn how to implement web fonts and create a modern, scalable typographic system to give the best reading experience for desktop and mobile devices!',
  },
  {
    id: 'introduction-to-javascript-jquery',
    url: 'https://frontendmasters.com/courses/responsive-typography-v2/',
    name: 'Responsive Web Typography v2',
    instructor: { name: 'Jason Pamental', organization: 'Isovera' },
    description:
      'Learn how to implement web fonts and create a modern, scalable typographic system to give the best reading experience for desktop and mobile devices!',
  },
];

const NORMALIZED_DATA: Site[] = SCRAPED_DATA.map(raw => {
  const { id, url, name, description } = raw;
  const site: Site = {
    id,
    description,
    name,
    url,
    price: {
      amt: 39,
      frequency: 'month',
      type: 'membership',
    },
    platforms: ['web', 'ios', 'android'],
    type: 'video-course',
    categoryIds: [],
  };
  return site;
});

export default NORMALIZED_DATA;
