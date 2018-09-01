import { flatten } from 'lodash';
import { Resource } from '../../resource';

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
    url: 'https://frontendmasters.com/courses/data-structures-interviews/',
    name: 'Introduction to Data Structures for Interviews',
    instructor: { name: 'Bianca Gandolfo', organization: 'Bitovi' },
    description:
      'Learn how to pass technical interviews by understanding the data structures you need to store and retrieve data efficiently in your everyday development.',
  },
  {
    id: 'aws-react-node-graphql',
    url: 'https://frontendmasters.com/courses/aws-react-node-graphql/',
    name: 'Rapid Development on AWS: React, Node.js & GraphQL',
    instructor: { name: 'Steve Kinney', organization: 'SendGrid' },
    description:
      'Learn to build on AWS’ cloud services and its world-class infrastructure to easily add authentication, storage, databases, and APIs into your apps!',
  },
  {
    id: 'javascript-new-hard-parts',
    url: 'https://frontendmasters.com/courses/javascript-new-hard-parts/',
    name: 'JavaScript: The New Hard Parts',
    instructor: { name: 'Will Sentance', organization: 'Codesmith' },
    description:
      'Develop an intuitive understanding of the new features of JavaScript in ES6+: iterators, generators, promises, and async/await!',
  },
  {
    id: 'webpack-plugins',
    url: 'https://frontendmasters.com/courses/webpack-plugins/',
    name: 'Webpack Plugins System',
    instructor: { name: 'Sean Larkin', organization: 'Microsoft' },
    description:
      'Learn the Webpack 4 plugin system, tour the Webpack source code and learn to build custom plugins and custom Webpack loaders.',
  },
  {
    id: 'performance-webpack',
    url: 'https://frontendmasters.com/courses/performance-webpack/',
    name: 'Web Performance with Webpack',
    instructor: { name: 'Sean Larkin', organization: 'Microsoft' },
    description:
      'Make websites load instantly using Webpack for lazy loading JavaScript with code splitting, removing unused code with tree shaking and prefetching assets.',
  },
  {
    id: 'webpack-fundamentals',
    url: 'https://frontendmasters.com/courses/webpack-fundamentals/',
    name: 'Webpack 4 Fundamentals',
    instructor: { name: 'Sean Larkin', organization: 'Microsoft' },
    description:
      'Learn the core concepts of Webpack 4. Start from scratch by adding Webpack with npm and build up a pipeline with popular loaders from the Webpack ecosystem!',
  },
  {
    id: 'web-development-v2',
    url: 'https://frontendmasters.com/courses/web-development-v2/',
    name: 'Complete Intro to Web Development, v2',
    instructor: { name: 'Brian Holt', organization: 'Microsoft' },
    description:
      'More than an introduction, in this course you’ll go from building your first website to having the foundation for becoming a professional web developer!',
  },
  {
    id: 'practical-algorithms',
    url: 'https://frontendmasters.com/courses/practical-algorithms/',
    name: 'A Practical Guide to Algorithms with JavaScript',
    instructor: { name: 'Bianca Gandolfo', organization: 'Bitovi' },
    description:
      'Learn to solve algorithms and analyze them efficiently in both an interview setting and also in your day-to-day development.',
  },
  {
    id: 'serverless-aws',
    url: 'https://frontendmasters.com/courses/serverless-aws/',
    name: 'Serverless with AWS Lambda',
    instructor: { name: 'Scott Moss', organization: 'Tipe' },
    description:
      'Get started with AWS Lambda functions and then learn to test, debug and deploy then to build a real API powered by lambda functions.',
  },
  {
    id: 'advanced-graphql',
    url: 'https://frontendmasters.com/courses/advanced-graphql/',
    name: 'Advanced GraphQL',
    instructor: { name: 'Scott Moss', organization: 'Tipe' },
    description:
      'Go beyond the basics to writing production-level, optimized GraphQL. Learn GraphQL techniques such as Nested Resolvers, Caching and Testing.',
  },
  {
    id: 'testing-react',
    url: 'https://frontendmasters.com/courses/testing-react/',
    name: 'Testing React Applications, v2',
    instructor: { name: 'Kent C. Dodds', organization: 'PayPal' },
    description:
      'Fix errors before your app reaches the end user by writing maintainable unit test & integration tests for your React applications!',
  },
  {
    id: 'advanced-react-patterns',
    url: 'https://frontendmasters.com/courses/advanced-react-patterns/',
    name: 'Advanced React Patterns',
    instructor: { name: 'Kent C. Dodds', organization: 'PayPal' },
    description:
      'Simplify large React applications by separating your component logic, state and display properties to make React components more flexible and usable!',
  },
  {
    id: 'sql-fundamentals',
    url: 'https://frontendmasters.com/courses/sql-fundamentals/',
    name: 'SQL Fundamentals',
    instructor: { name: 'Mike North', organization: 'LinkedIn' },
    description:
      'Learn SQL, the most popular language for storing, querying and analyzing the relational data that powers your server-side applications.',
  },
  {
    id: 'content-strategy',
    url: 'https://frontendmasters.com/courses/content-strategy/',
    name: 'Content Strategy',
    instructor: { name: 'Kristina Halvorson', organization: 'Brain Traffic' },
    description:
      'Get your content under control with an effective strategy! Research, take inventory and create a messaging framework for a cohesive voice for your website.',
  },
  {
    id: 'web-performance',
    url: 'https://frontendmasters.com/courses/web-performance/',
    name: 'Web Performance',
    instructor: { name: 'Steve Kinney', organization: 'SendGrid' },
    description:
      'Write more efficient JavaScript, optimize rendering performance, load assets faster with a CDN, split loading resources with Webpack and more!',
  },
  {
    id: 'computer-science-2',
    url: 'https://frontendmasters.com/courses/computer-science-2/',
    name: 'Four Semesters of Computer Science in 5 Hours, Part 2',
    instructor: { name: 'Brian Holt', organization: 'Microsoft' },
    description:
      'Learning computer science makes you a better developer, makes your apps better, and allows you to answer difficult engineering interview questions.',
  },
  {
    id: 'js-fundamentals-functional-v2',
    url: 'https://frontendmasters.com/courses/js-fundamentals-functional-v2/',
    name: 'JavaScript: From Fundamentals to Functional JS, v2',
    instructor: { name: 'Bianca Gandolfo', organization: 'Bitovi' },
    description:
      'Learn higher-order functions, closures, scope, master key functional methods like map, reduce and filter and promises and ES6+ asynchronous JavaScript.',
  },
  {
    id: 'git-in-depth',
    url: 'https://frontendmasters.com/courses/git-in-depth/',
    name: 'Git In-depth',
    instructor: { name: 'Nina Zakharenko', organization: 'Microsoft' },
    description:
      'A deep dive into git, this course is for developers who use it every day and want to learn inner workings and use advanced techniques in git.',
  },
  {
    id: 'full-stack-v2',
    url: 'https://frontendmasters.com/courses/full-stack-v2/',
    name: 'Full Stack for Front-Ends Part 2',
    instructor: { name: 'Jem Young', organization: 'Netflix' },
    description:
      'Deploy Node.js apps and configure Nginx using the command line. Setup SSH, firewall, server updates and configure nginx caching, gzip and HTTP2.',
  },
  {
    id: 'api-node-rest-graphql',
    url: 'https://frontendmasters.com/courses/api-node-rest-graphql/',
    name: 'REST & GraphQL API Design in Node.js, v2 (using Express & MongoDB)',
    instructor: { name: 'Scott Moss', organization: 'Tipe' },
    description:
      "Design APIs from the ground up using Node.js Express and MongoDB! You'll build a REST API and in the course you'll migrate your API to using GraphQL.",
  },
  {
    id: 'building-apps-angular',
    url: 'https://frontendmasters.com/courses/building-apps-angular/',
    name: 'Building Awesomer Apps with Angular',
    instructor: { name: 'Lukas Ruebbelke', organization: 'VenturPlex' },
    description:
      'Learn Angular from the ground up. Get up and running quickly with the Angular CLI, then build a production-ready app using Components, Services and Routes.',
  },
  {
    id: 'typescript',
    url: 'https://frontendmasters.com/courses/typescript/',
    name: 'TypeScript Fundamentals',
    instructor: { name: 'Mike North', organization: 'LinkedIn' },
    description:
      'TypeScript combines modern JavaScript language features with a powerful and flexible type system, to make building high-performance and scalable apps easy!',
  },
  {
    id: 'css-in-depth-v2',
    url: 'https://frontendmasters.com/courses/css-in-depth-v2/',
    name: 'CSS In-Depth, v2',
    instructor: { name: 'Estelle Weyl', organization: 'Standardista' },
    description:
      'Take a deep-dive into the essential features of CSS, while also exploring CSS features you probably didn’t even know existed!',
  },
  {
    id: 'css-grids-flexbox',
    url: 'https://frontendmasters.com/courses/css-grids-flexbox/',
    name: 'CSS Grids and Flexbox for Responsive Web Design',
    instructor: { name: 'Jen Kramer', organization: 'Harvard' },
    description:
      'Master CSS Grid and Flexbox, the latest tools and tricks to layout beautiful, responsive web applications with less code.',
  },
  {
    id: 'javascript-hard-parts',
    url: 'https://frontendmasters.com/courses/javascript-hard-parts/',
    name: 'JavaScript: The Hard Parts',
    instructor: { name: 'Will Sentance', organization: 'Codesmith' },
    description:
      'Take your JavaScript to the next level. Gain an understanding of callbacks, higher order functions, closure, asynchronous and object-oriented JavaScript!',
  },
  {
    id: 'advanced-vue',
    url: 'https://frontendmasters.com/courses/advanced-vue/',
    name: 'Advanced Vue.js Features from the Ground Up',
    instructor: { name: 'Evan You', organization: 'Creator of Vue.js' },
    description:
      'Learn how to build accessible routing, state management, form validation and internationalization from the ground up by composing basic Vue.js features.',
  },
  {
    id: 'visual-studio-code',
    url: 'https://frontendmasters.com/courses/visual-studio-code/',
    name: 'Visual Studio Code',
    instructor: { name: 'Mike North', organization: 'LinkedIn' },
    description:
      'Visual Studio Code is a modern, full-featured code editor built from the ground for the needs of web developers - JavaScript developers in particular.',
  },
  {
    id: 'web-security',
    url: 'https://frontendmasters.com/courses/web-security/',
    name: 'Web Security',
    instructor: { name: 'Mike North', organization: 'LinkedIn' },
    description:
      'Get hands on attacking and defending web applications. Defend Cross-Site Scripting (XSS) and Man-in-the-Middle attacks, secure 3rd party assets and more!',
  },
  {
    id: 'react-state',
    url: 'https://frontendmasters.com/courses/react-state/',
    name: 'Advanced State Management in React (feat. Redux and MobX)',
    instructor: { name: 'Steve Kinney', organization: 'SendGrid' },
    description: '',
  },
  {
    id: 'javascript-wordpress',
    url: 'https://frontendmasters.com/courses/javascript-wordpress/',
    name: 'JavaScript for WordPress',
    instructor: { name: 'Zac Gordon', organization: 'JS for WordPress' },
    description:
      'Learn how to use JavaScript and AJAX to harness the power of WordPress for themes and plugins -- decouple your code using the WordPress REST API!',
  },
  {
    id: 'progressive-web-apps',
    url: 'https://frontendmasters.com/courses/progressive-web-apps/',
    name: 'Progressive Web Applications and Offline',
    instructor: { name: 'Mike North', organization: 'LinkedIn' },
    description:
      'Learn how to audit a web app, go offline with service workers, load instantly with the App-Shell architecture, enable push notifications and more!',
  },
  {
    id: 'vue',
    url: 'https://frontendmasters.com/courses/vue/',
    name: 'Introduction to Vue.js',
    instructor: { name: 'Sarah Drasner', organization: 'Microsoft' },
    description:
      'Vue.js brings together the best features of the javascript framework landscape elegantly. Build complex and maintainable applications faster!',
  },
  {
    id: 'advanced-async-js',
    url: 'https://frontendmasters.com/courses/advanced-async-js/',
    name: 'Advanced Asynchronous JavaScript',
    instructor: { name: 'Jafar Husain', organization: 'Netflix' },
    description:
      'Go beyond the fundamentals of asynchronous JavaScript and use features and techniques that will help you reduce code and create smarter applications.',
  },
  {
    id: 'testing-modular-front-end',
    url: 'https://frontendmasters.com/courses/testing-modular-front-end/',
    name: 'Testing and Modular Front-End',
    instructor: { name: 'James Halliday', organization: 'Substack' },
    description:
      'Learn how to write unit tests for node.js and the browser and build up a modular frontend brick by brick with James Halliday',
  },
  {
    id: 'leveldb-crypto',
    url: 'https://frontendmasters.com/courses/leveldb-crypto/',
    name: 'LevelDB & Crypto',
    instructor: { name: 'James Halliday', organization: 'Substack' },
    description:
      'Cryptography provides a foundation for secure communications and distributed systems. LevelDB gives a modular ecosystem to persist and query data in node.js',
  },
  {
    id: 'networking-streams',
    url: 'https://frontendmasters.com/courses/networking-streams/',
    name: 'Networking and Streams',
    instructor: { name: 'James Halliday', organization: 'Substack' },
    description:
      'Learn the stream node module. Code readable, writable, transform, duplex streams. Plus code TCP, HTTP, and Websocket servers and clients using Node.js.',
  },
  {
    id: 'bash-vim-regex',
    url: 'https://frontendmasters.com/courses/bash-vim-regex/',
    name: 'Introduction to Bash, VIM & Regex',
    instructor: { name: 'James Halliday', organization: 'Substack' },
    description:
      'Take control of the Unix command line, automate tasks with shell scripts, compose regular expressions and easily edit files with the popular Vim editor.',
  },
  {
    id: 'functional-javascript-v2',
    url: 'https://frontendmasters.com/courses/functional-javascript-v2/',
    name: 'Functional-Light JavaScript, v2',
    instructor: { name: 'Kyle Simpson', organization: "You Don't Know JS" },
    description:
      'Improve your code with functional patterns like pure functions, compose & map/reduce/filter...plus advanced concepts like fusion, transducing and monads!',
  },
  {
    id: 'javascript-foundations',
    url: 'https://frontendmasters.com/courses/javascript-foundations/',
    name: 'Deep JavaScript Foundations',
    instructor: { name: 'Kyle Simpson', organization: "You Don't Know JS" },
    description:
      'Master JavaScript deeply learning scope and closure, functions, the prototype system, closure, types, coercion and new ES6 features in JavaScript!',
  },
  {
    id: 'linting-asts',
    url: 'https://frontendmasters.com/courses/linting-asts/',
    name: 'Code Transformation and Linting with ASTs',
    instructor: { name: 'Kent C. Dodds', organization: 'PayPal' },
    description:
      'Learn to use Abstract Syntax Trees (ASTs) to make stylistic code changes, reveal logical problems, and prevent bugs from entering your codebase.',
  },
  {
    id: 'react',
    url: 'https://frontendmasters.com/courses/react/',
    name: 'Complete Intro to React, v3 (feat. Redux, Router & Flow)',
    instructor: { name: 'Brian Holt', organization: 'Microsoft' },
    description:
      'Much more than an intro, you’ll not just learn React, but also a proven set of tools including Router v4 for paging, Jest for testing, Redux and Flow!',
  },
  {
    id: 'testing-javascript',
    url: 'https://frontendmasters.com/courses/testing-javascript/',
    name: 'Testing JavaScript Applications (feat. React and Redux)',
    instructor: { name: 'Kent C. Dodds', organization: 'PayPal' },
    description:
      'Bulletproof your JavaScript and Node environments. Learn how you can test React, Redux, and Node Express applications!',
  },
  {
    id: 'modern-seo',
    url: 'https://frontendmasters.com/courses/modern-seo/',
    name: 'Modern Search Engine Optimization (SEO)',
    instructor: { name: 'Mike North', organization: 'LinkedIn' },
    description:
      "Learn to get search engines to represent your site in the best way possible! And learn Facebook and Twitter's advanced sharing features.",
  },
  {
    id: 'sass',
    url: 'https://frontendmasters.com/courses/sass/',
    name: 'Sass Fundamentals',
    instructor: { name: 'Mike North', organization: 'LinkedIn' },
    description:
      'Leverage the Sass preprocessing to empower your CSS practices and master styling complex applications while keeping the styles readable and maintainable.',
  },
  {
    id: 'debugging-javascript',
    url: 'https://frontendmasters.com/courses/debugging-javascript/',
    name: 'Debugging and Fixing Common JavaScript Errors',
    instructor: { name: 'Todd Gardner', organization: 'TrackJS' },
    description:
      'Learn what causes common JavaScript bugs and use the latest developer tools to isolate and fix the source of the problems!',
  },
  {
    id: 'd3-v4',
    url: 'https://frontendmasters.com/courses/d3-v4/',
    name: 'Introduction to Data Visualization with d3.js v4',
    instructor: { name: 'Shirley Wu', organization: 'Data Sketches' },
    description:
      'Take advantage of the latest in data visualization by learning the core concepts of d3.js and experiencing the power to represent data in new ways!',
  },
  {
    id: 'hapi-js',
    url: 'https://frontendmasters.com/courses/hapi-js/',
    name: 'Code Robust APIs with the Hapi.js Server Framework for Node.js',
    instructor: { name: 'Ryan Chenkie', organization: 'Auth0' },
    description:
      'Learn to build APIs with Hapi.js from the ground up. Go from a basic API to how to use advanced Hapi.js features including its plugins and ecosystem.',
  },
  {
    id: 'firebase-react',
    url: 'https://frontendmasters.com/courses/firebase-react/',
    name: 'Firebase + React: Real-time, Serverless Web Apps',
    instructor: { name: 'Steve Kinney', organization: 'SendGrid' },
    description:
      'Learn to use Firebase to deploy sophisticated web and mobile applications without having to build your own complex, server-side infrastructure.',
  },
  {
    id: 'data-structures-algorithms',
    url: 'https://frontendmasters.com/courses/data-structures-algorithms/',
    name: 'Data Structures and Algorithms in JavaScript',
    instructor: { name: 'Bianca Gandolfo', organization: 'Bitovi' },
    description:
      'Learn the most common data structures and algorithms in Computer Science in-depth taught with JavaScript.',
  },
  {
    id: 'advanced-ember-2',
    url: 'https://frontendmasters.com/courses/advanced-ember-2/',
    name: 'Advanced Ember 2.x',
    instructor: { name: 'Mike North', organization: 'LinkedIn' },
    description:
      'Mike demonstrates recent Ember 2.x framework advancements to show you how to debug, customize, test and deploy applications with confidence.',
  },
  {
    id: 'full-stack',
    url: 'https://frontendmasters.com/courses/full-stack/',
    name: 'Full Stack for Front End Engineers',
    instructor: { name: 'Jem Young', organization: 'Netflix' },
    description:
      'Learn the skills that front-end engineers need to seamlessly work and switch between the front-end, command line, and server.',
  },
  {
    id: 'electron',
    url: 'https://frontendmasters.com/courses/electron/',
    name: 'Build Cross-Platform Desktop Apps with Electron',
    instructor: { name: 'Steve Kinney', organization: 'SendGrid' },
    description:
      'Build cross-platform desktop apps in JavaScript with Electron. Take your web development skills beyond the browser into building Mac and PC desktop apps!',
  },
  {
    id: 'secure-auth-jwt',
    url: 'https://frontendmasters.com/courses/secure-auth-jwt/',
    name: 'Secure Authentication for Web Apps & APIs Using JWTs',
    instructor: { name: 'Ryan Chenkie', organization: 'Auth0' },
    description:
      'Learn to set up authentication in your single page apps. Learn the anatomy of JSON Web Tokens, how to use JWT to protect resources, & manage auth in a SPA.',
  },
  {
    id: 'reactive-angular',
    url: 'https://frontendmasters.com/courses/reactive-angular/',
    name: 'Reactive Angular 2',
    instructor: { name: 'Lukas Ruebbelke', organization: 'VenturPlex' },
    description:
      'Learn how to build functional, reactive web applications in Angular 2 with a Redux-inspired library, @ngrx/store and observables from Rx.js.',
  },
  {
    id: 'web-apps-angular-2',
    url: 'https://frontendmasters.com/courses/web-apps-angular-2/',
    name: 'Building Awesome Web Apps with Angular 2',
    instructor: { name: 'Lukas Ruebbelke', organization: 'VenturPlex' },
    description:
      'Explore the Angular 2 JavaScript framework from the ground up using Components, Services and the CLI to write awesome web applications!',
  },
  {
    id: 'complete-intro-react',
    url: 'https://frontendmasters.com/courses/complete-intro-react/',
    name: 'Complete Intro to React v2 (feat. Router v4 and Redux)',
    instructor: { name: 'Brian Holt', organization: 'Microsoft' },
    description:
      "More than an intro, build an entire real-world web application in layers using React and the library's ecosystem, like Router v4, Redux and Jest.",
  },
  {
    id: 'web-accessibility',
    url: 'https://frontendmasters.com/courses/web-accessibility/',
    name: 'Website Accessibility',
    instructor: { name: 'Jon Kuperman', organization: 'Adobe' },
    description:
      'Audit and fix accessibility issues on any website! Learn keyboard accessibility, focus control & ARIA roles to make sites accessible to screen readers.',
  },
  {
    id: 'elm',
    url: 'https://frontendmasters.com/courses/elm/',
    name: 'Elm',
    instructor: { name: 'Richard Feldman', organization: 'NoRedInk' },
    description:
      'Write bulletproof, easily maintainable web applications with Elm, the functional programming language that is transforming web application development!',
  },
  {
    id: 'es6-right-parts',
    url: 'https://frontendmasters.com/courses/es6-right-parts/',
    name: 'ES6: The Right Parts',
    instructor: { name: 'Kyle Simpson', organization: "You Don't Know JS" },
    description:
      'Learn new ES6 JavaScript language features like arrow function, destructuring, generators & more to write cleaner and more productive, readable programs.',
  },
  {
    id: 'production-node-aws',
    url: 'https://frontendmasters.com/courses/production-node-aws/',
    name: 'Zero to Production Node.js on Amazon Web Services',
    instructor: { name: 'Kevin Whinnery', organization: 'Twilio Node Module' },
    description:
      'Equip yourself with the knowledge to build, test, deploy, and scale Node.js web applications in production on Amazon Web Services.',
  },
  {
    id: 'open-source',
    url: 'https://frontendmasters.com/courses/open-source/',
    name: 'Creating an Open Source JavaScript Library on Github',
    instructor: { name: 'Kent C. Dodds', organization: 'PayPal' },
    description:
      'Publish and distribute your JS library to npm, add testing/code coverage, manage community and more in this course on publishing an open source library.',
  },
  {
    id: 'webpack',
    url: 'https://frontendmasters.com/courses/webpack/',
    name: 'Webpack 2 Deep Dive',
    instructor: { name: 'Kent C. Dodds', organization: 'PayPal' },
    description:
      'Building and deploying complex front-end applications can get complicated. Webpack simplifies this with tons of features catering to all JavaScript apps.',
  },
  {
    id: 'react-native',
    url: 'https://frontendmasters.com/courses/react-native/',
    name: 'React Native (feat. Redux)',
    instructor: { name: 'Scott Moss', organization: 'Tipe' },
    description:
      'Use React Native to build native mobile apps in iOS and Android with JavaScript! Effectively build cross-platform mobile apps.',
  },
  {
    id: 'chrome-dev-tools',
    url: 'https://frontendmasters.com/courses/chrome-dev-tools/',
    name: 'Mastering Chrome Developer Tools',
    instructor: { name: 'Jon Kuperman', organization: 'Adobe' },
    description:
      'Learn to use ALL the built-in Chrome developer tools to debug and optimize websites and web applications!',
  },
  {
    id: 'motion-design-css',
    url: 'https://frontendmasters.com/courses/motion-design-css/',
    name: 'Motion Design with CSS',
    instructor: { name: 'Rachel Nabors', organization: 'Rachel Nabors, LLC' },
    description:
      'Animation is crucial to developing interactive designs and interfaces, and CSS is one of the most performant ways to animate!',
  },
  {
    id: 'react-intro',
    url: 'https://frontendmasters.com/courses/react-intro/',
    name: 'Complete Introduction to React (feat. Redux and React Router)',
    instructor: { name: 'Brian Holt', organization: 'Microsoft' },
    description:
      'Brian Holt (Netflix) introduces you to React plus surrounding ecosystem including: Redux for state management, React Router for navigation and more!',
  },
  {
    id: 'computer-science',
    url: 'https://frontendmasters.com/courses/computer-science/',
    name: 'Four Semesters of Computer Science in 5 Hours',
    instructor: { name: 'Brian Holt', organization: 'Microsoft' },
    description:
      "We're going to tackle some big topics in just five hours: Algorithms and Big O Analysis, Recursion, Sorting, Data Structures and Functional Programming.",
  },
  {
    id: 'good-parts-javascript-web',
    url: 'https://frontendmasters.com/courses/good-parts-javascript-web/',
    name: 'The Good Parts of JavaScript and the Web',
    instructor: { name: 'Douglas Crockford', organization: 'Paypal' },
    description:
      'Learn the history of JavaScript and details of the language with special attention on functions. Plus how browsers work, how servers work and security.',
  },
  {
    id: 'reactive-angular-2',
    url: 'https://frontendmasters.com/courses/reactive-angular-2/',
    name: 'Reactive Angular 2 with ngrx',
    instructor: { name: 'Lukas Ruebbelke', organization: 'VenturPlex' },
    description:
      'Learn how to build functional, reactive web applications in Angular 2 with a Redux inspired library, @ngrx/store and observables from Rx.js.',
  },
  {
    id: 'angular-2',
    url: 'https://frontendmasters.com/courses/angular-2/',
    name: 'Build Web Apps with Angular 2',
    instructor: { name: 'Lukas Ruebbelke', organization: 'VenturPlex' },
    description:
      'Angular 2 is an incredibly powerful evolution of AngularJS. We are going discover why Angular 2 is half the framework with twice the power!',
  },
  {
    id: 'rethinking-async-js',
    url: 'https://frontendmasters.com/courses/rethinking-async-js/',
    name: 'Rethinking Asynchronous JavaScript',
    instructor: { name: 'Kyle Simpson', organization: "You Don't Know JS" },
    description:
      'Effective asynchronous JavaScript means knowing various different patterns and weaving them together to write readable and understandable code. ',
  },
  {
    id: 'functional-js-lite',
    url: 'https://frontendmasters.com/courses/functional-js-lite/',
    name: 'Functional-Lite JavaScript',
    instructor: { name: 'Kyle Simpson', organization: "You Don't Know JS" },
    description:
      'Practical take on functional JavaScript so you can use techniques like pure functions, map/reduce/filter and recursion to improve your programming today!',
  },
  {
    id: 'svg-animation',
    url: 'https://frontendmasters.com/courses/svg-animation/',
    name: 'Advanced SVG Animation',
    instructor: { name: 'Sarah Drasner', organization: 'Microsoft' },
    description:
      'Make resolution-independent, scalable, complex animations for a myriad of use cases across the web with SVG',
  },
  {
    id: 'ember-2',
    url: 'https://frontendmasters.com/courses/ember-2/',
    name: 'Ember 2.x',
    instructor: { name: 'Mike North', organization: 'LinkedIn' },
    description:
      'Become a master in Ember.js and be well-suited to build complex and highly interactive apps with this course.',
  },
  {
    id: 'api-design-nodejs',
    url: 'https://frontendmasters.com/courses/api-design-nodejs/',
    name: 'API Design in Node.js (using Express & Mongo)',
    instructor: { name: 'Scott Moss', organization: 'Tipe' },
    description:
      'Learn to build a fully functional API with Node.js and have the skills to build your own APIs using the Express.js framework.',
  },
  {
    id: 'angular-components-es6',
    url: 'https://frontendmasters.com/courses/angular-components-es6/',
    name: 'Component-Based Architecture in AngularJS 1.x and ES6',
    instructor: { name: 'Scott Moss', organization: 'Tipe' },
    description:
      'Master building web apps in Angular 1.x and ES6. This is the best angular training. After doing our course you will be able to build 1.x apps and transition to 2.',
  },
  {
    id: 'modern-web-apps',
    url: 'https://frontendmasters.com/courses/modern-web-apps/',
    name: 'Building Web Apps (with React, Ampersand, ES6 and Webpack)',
    instructor: { name: 'Henrik Joreteg', organization: 'Ampersand.js' },
    description:
      'Everything you need to build and deploy a maintainable single page app. Build an app from scratch using React, Ampersand, ES6 (ES2015), and Webpack.',
  },
  {
    id: 'meteor',
    url: 'https://frontendmasters.com/courses/meteor/',
    name: 'Meteor',
    instructor: { name: 'Chris Mather', organization: 'Lively, Inc.' },
    description:
      'Built by a team of MIT engineers, Meteor is a full stack open source framework for building web and mobile apps in pure JavaScript.',
  },
  {
    id: 'unit-testing-javascript',
    url: 'https://frontendmasters.com/courses/unit-testing-javascript/',
    name: 'Unit Testing JavaScript (with CoffeeScript)',
    instructor: { name: 'Justin Searls', organization: 'Test Double' },
    description:
      'Learn to write testable code, testing types and strategies that will increase your ability to test JavaScript on the client and server (Node.js).',
  },
  {
    id: 'asynchronous-javascript',
    url: 'https://frontendmasters.com/courses/asynchronous-javascript/',
    name: 'Asynchronous Programming in JavaScript (with Rx.js Observables)',
    instructor: { name: 'Jafar Husain', organization: 'Netflix' },
    description:
      'Learning how to build and manage asynchronous programs is perhaps the most important part of becoming an effective JavaScript programmer.',
  },
  {
    id: 'organizing-javascript',
    url: 'https://frontendmasters.com/courses/organizing-javascript/',
    name: 'Organizing JavaScript Functionality',
    instructor: { name: 'Kyle Simpson', organization: "You Don't Know JS" },
    description:
      'Before you use a framework, learn how to organize the different bits of JavaScript (modularizing, decoupling, etc) with this advanced JavaScript course.',
  },
  {
    id: 'javascript-coercion',
    url: 'https://frontendmasters.com/courses/javascript-coercion/',
    name: 'Coercion in JavaScript',
    instructor: { name: 'Kyle Simpson', organization: "You Don't Know JS" },
    description:
      "Most developers cite coercion and the == operator as black magic. By learning coercion you'll learn important clarifications in style and readability of JS.",
  },
  {
    id: 'javascript-basics',
    url: 'https://frontendmasters.com/courses/javascript-basics/',
    name: 'Introduction to JavaScript Programming',
    instructor: { name: 'Kyle Simpson', organization: "You Don't Know JS" },
    description:
      'Master JavaScript with our online training and learn one of the easiest languages to get started with and one of the most powerful.',
  },
  {
    id: 'ui-prototyping-framer',
    url: 'https://frontendmasters.com/courses/ui-prototyping-framer/',
    name: 'UI Prototyping with Framer.js',
    instructor: { name: 'Jay Stakelon', organization: 'Facebook' },
    description:
      'Use Framer Studio to design and build responsive interactions, explore advanced animation techniques, and build data-driven UI prototypes together.',
  },
  {
    id: 'angular-app-dev',
    url: 'https://frontendmasters.com/courses/angular-app-dev/',
    name: 'AngularJS 1.x Application Development',
    instructor: { name: 'Lukas Ruebbelke', organization: 'VenturPlex' },
    description:
      'Learn everything from naming conventions to organizing your app into services, directives and routing with examples and challenges to anchor the concepts.',
  },
  {
    id: 'react-intro-to-flux',
    url: 'https://frontendmasters.com/courses/react-intro-to-flux/',
    name: 'React.js (with Introduction to Flux Architecture)',
    instructor: { name: 'Ryan Florence', organization: 'React Training' },
    description:
      'Learn from experts how to use React and become a master at creating user interfaces by Facebook and Instagram.',
  },
  {
    id: 'responsive-email',
    url: 'https://frontendmasters.com/courses/responsive-email/',
    name: 'Responsive HTML Email Design',
    instructor: { name: 'Justine Jordan', organization: 'Litmus' },
    description:
      'Learn the importance of HTML email and prove that building beautiful, responsive email campaigns isn’t as scary as you thought.',
  },
  {
    id: 'javascript-jquery-dom',
    url: 'https://frontendmasters.com/courses/javascript-jquery-dom/',
    name: 'Advanced JS Fundamentals to jQuery & Pure DOM Scripting',
    instructor: { name: 'Justin Meyer', organization: 'Bitovi' },
    description:
      'Gain an advanced JavaScript techniques and an understanding of difficult JavaScript concepts like closure, type comparators, coercion and delete.',
  },
  {
    id: 'smacss',
    url: 'https://frontendmasters.com/courses/smacss/',
    name: 'Scalable Modular Architecture for CSS (SMACSS)',
    instructor: { name: 'Jonathan Snook', organization: 'Snook.ca Web Development, Inc.' },
    description:
      "Make your CSS more maintainable and modular using Jonathan Snook's Scalable Modular Architecture for CSS (SMACSS) methodology.",
  },
  {
    id: 'js-fundamentals-to-functional',
    url: 'https://frontendmasters.com/courses/js-fundamentals-to-functional/',
    name: 'JavaScript: From Fundamentals to Functional JS',
    instructor: { name: 'Bianca Gandolfo', organization: 'Bitovi' },
    description:
      'Solidify your knowledge of functional JavaScript programming, including objects, arrays, and prototypes.',
  },
  {
    id: 'jsnext-es6',
    url: 'https://frontendmasters.com/courses/jsnext-es6/',
    name: 'JS.Next: ES6 / ES2015',
    instructor: { name: 'Aaron Frost', organization: 'SaltStack' },
    description:
      "Learn the latest standard of advanced JavaScript concepts, ES6 and it's new features like destructuring, let, spread, arrow functions and modules.",
  },
  {
    id: 'responsive-typography',
    url: 'https://frontendmasters.com/courses/responsive-typography/',
    name: 'Responsive Typography',
    instructor: { name: 'Jason Pamental', organization: 'Isovera' },
    description:
      'This course explores the world of web fonts and responsive type, what web fonts are, how they work and why you should be using them.',
  },
  {
    id: 'web-development',
    url: 'https://frontendmasters.com/courses/web-development/',
    name: 'Introduction to Web Development',
    instructor: { name: 'Nina Zakharenko', organization: 'Microsoft' },
    description:
      'With our web design courses, go from no prior coding knowledge to crafting your own websites using HTML, CSS, JavaScript, and Node.js.',
  },
  {
    id: 'javascript-frameworks-showdown',
    url: 'https://frontendmasters.com/courses/javascript-frameworks-showdown/',
    name: 'Choosing a JavaScript Framework',
    instructor: { name: 'Brian Holt', organization: 'Microsoft' },
    description:
      'In this advanced JavaScript training, Brian Holt (Reddit) gives a treatise on each of the four frameworks to help you decide which one is best for you.',
  },
  {
    id: 'functional-javascript',
    url: 'https://frontendmasters.com/courses/functional-javascript/',
    name: 'Hardcore Functional Programming in JavaScript',
    instructor: { name: 'Brian Lonsdorf', organization: 'Salesforce' },
    description:
      'Discover functional programming and build an example web app using abstract interfaces like Monads, Functors, Monoids and Applicatives.',
  },
  {
    id: 'realtime-html5-nodejs',
    url: 'https://frontendmasters.com/courses/realtime-html5-nodejs/',
    name: 'Real-Time Web with Node.js',
    instructor: { name: 'Kyle Simpson', organization: "You Don't Know JS" },
    description:
      'Learn the HTML5 APIs for real-time such as canvas/video, sockets, getUserMedia, and WebRTC and talk to them through asynchronous code in Node.js.',
  },
  {
    id: 'advanced-javascript',
    url: 'https://frontendmasters.com/courses/advanced-javascript/',
    name: 'Advanced JavaScript',
    instructor: { name: 'Kyle Simpson', organization: "You Don't Know JS" },
    description:
      'Learn from Kyle Simpson, the author of "You Don\'t Know JavaScript" series on the inner workings of JavaScript in detail and more!',
  },
  {
    id: 'html5-media-apis',
    url: 'https://frontendmasters.com/courses/html5-media-apis/',
    name: 'HTML5 Media: Audio, Video & WebRTC',
    instructor: { name: 'Mark Boas', organization: 'jPlayer' },
    description:
      'Learn HTML5 APIs to deliver rich media including: camera support with getUserMedia, WebRTC for realtime, video effects with canvas, and Web Audio API.',
  },
  {
    id: 'workflows-and-tooling',
    url: 'https://frontendmasters.com/courses/workflows-and-tooling/',
    name: 'Front-End Tooling and Workflows with Grunt and Beyond',
    instructor: { name: 'David Mosher', organization: 'Test Double' },
    description:
      'Create a custom build process for your SPAs with Grunt.js using CSS preprocessors, live reload, concat / minifying resources and CoffeeScript all together.',
  },
  {
    id: 'interactive-data-visualization-d3-js',
    url: 'https://frontendmasters.com/courses/interactive-data-visualization-d3-js/',
    name: 'Interactive Data Visualization with D3.js',
    instructor: { name: 'Ian Johnson', organization: 'Bay Area D3 and Tributary' },
    description:
      'The organizer of the largest d3.js meetup in the world (Bay Area d3.js), Ian Johnson, introduces and dives deep into the d3.js API in this video course.',
  },
  {
    id: 'angularjs-in-depth',
    url: 'https://frontendmasters.com/courses/angularjs-in-depth/',
    name: 'Angular 1.x Essentials',
    instructor: { name: 'Lukas Ruebbelke', organization: 'VenturPlex' },
    description:
      '"AngularJS In Action" Author Lukas Ruebbelke dives into AngularJS scope, two-way data binding and directives with real-world examples.',
  },
  {
    id: 'backbone-js-in-depth-testing-mocha-sinon',
    url: 'https://frontendmasters.com/courses/backbone-js-in-depth-testing-mocha-sinon/',
    name: 'Backbone.js (with Introduction to Testing)',
    instructor: { name: 'Sam Breed', organization: 'Credit Karma' },
    description:
      "Core Contributor Sam Breed teaches you Backbone JS's lightweight approach to building client-side MVC applications and unit testing in Mocha and Sinon.JS.",
  },
  {
    id: 'css3-in-depth',
    url: 'https://frontendmasters.com/courses/css3-in-depth/',
    name: 'CSS3 In-Depth',
    instructor: { name: 'Estelle Weyl', organization: 'Standardista' },
    description:
      'Learn how deep the CSS3 rabbit hole goes from transitions and animations to generated content in this jam-packed video training course.',
  },
  {
    id: 'web-ui-architecture',
    url: 'https://frontendmasters.com/courses/web-ui-architecture/',
    name: 'Web UI Architecture',
    instructor: { name: 'Garann Means', organization: 'Brandwatch' },
    description:
      'Garann covers considerations building JavaScript architecture for your web applications before tools and frameworks like Backbone.JS, AngularJS and Ember.',
  },
  {
    id: 'lean-front-end-engineering',
    url: 'https://frontendmasters.com/courses/lean-front-end-engineering/',
    name: 'Lean Front-End Engineering',
    instructor: { name: 'Bill Scott', organization: 'PayPal' },
    description:
      'Bill Scott, Sr. Director at PayPal, teaches making great UX experiences by applying lean startup principles to UI engineering.',
  },
  {
    id: 'responsive-web-design',
    url: 'https://frontendmasters.com/courses/responsive-web-design/',
    name: 'Responsive Web Design',
    instructor: { name: 'Ben Callahan', organization: 'Sparkbox' },
    description:
      'Ben Callahan leads you through this responsive web design tutorial step by step, using RWD patterns and coding with media queries and responsive CSS.',
  },
  {
    id: 'website-performance',
    url: 'https://frontendmasters.com/courses/website-performance/',
    name: 'Website Performance',
    instructor: { name: 'Kyle Simpson', organization: "You Don't Know JS" },
    description:
      'Learn from Kyle as he dives deep into everything related to website performance optimization, including resource loading, thread, animations, JSON, and more!',
  },
  {
    id: 'javascript-the-good-parts',
    url: 'https://frontendmasters.com/courses/javascript-the-good-parts/',
    name: 'JavaScript the Good Parts',
    instructor: { name: 'Douglas Crockford', organization: 'Paypal' },
    description:
      'Take Crockford\'s mind-expanding JavaScript function challenges in this course on "JavaScript the Good Parts".',
  },
  {
    id: 'angularjs-and-code-testability',
    url: 'https://frontendmasters.com/courses/angularjs-and-code-testability/',
    name: 'The Psychology of Code Testability',
    instructor: { name: 'Misko Hevery', organization: 'AngularJS Creator' },
    description:
      'Misko, the creator of AngularJS (by Google), gives us an overview of how to write testable code and what makes code hard to test.',
  },
  {
    id: 'introduction-html5-css3',
    url: 'https://frontendmasters.com/courses/introduction-html5-css3/',
    name: 'Introduction to HTML5 and CSS3',
    instructor: { name: 'Christopher Schmitt', organization: 'Frontend Masters' },
    description:
      'Christopher Schmitt, author of HTML5 Cookbook, covers HTML5 features such as audio, video and geolocation and then dives into many of CSS3′s features.',
  },
  {
    id: 'jquery-plugins-jquery-ui',
    url: 'https://frontendmasters.com/courses/jquery-plugins-jquery-ui/',
    name: 'jQuery Plugins and jQuery UI',
    instructor: { name: 'Scott Gonzalez', organization: 'Clipper Magazine' },
    description:
      'Scott Gonzalez, lead developer for jQuery UI, dives into writing jQuery plugins, making plugins stateful and gives an in-depth look at jQuery UI.',
  },
  {
    id: 'jquery-in-depth',
    url: 'https://frontendmasters.com/courses/jquery-in-depth/',
    name: 'Learning jQuery',
    instructor: { name: 'Karl Swedberg', organization: 'Learning jQuery' },
    description:
      'Karl Swedberg leverages his experience on the jQuery Team to give a thorough walkthrough of the most important parts of jQuery.',
  },
  {
    id: 'introduction-to-javascript-jquery',
    url: 'https://frontendmasters.com/courses/introduction-to-javascript-jquery/',
    name: 'Introduction to JavaScript and jQuery',
    instructor: { name: 'Karl Swedberg', organization: 'Learning jQuery' },
    description:
      'Karl Swedberg, author of Learning jQuery, teaches the JavaScript language; including closures, anonymous functions, and implicit versus explicit iteration.',
  },
];

type FemCourse = typeof SCRAPED_DATA extends Array<infer T> ? T : never;

const DEFAULT_CATEGORIES: Resource['categoryIds'] = [];

const VideoCategories = {
  ember: [/Ember/],
  angular: [/Angular\s[2-9]+/],
  angularjs: [/Angular\s1/],
  react: [/React/],
  javascript: [
    /(Organizing|Functional|Deep|Algorithms|Advanced|Good Parts)[\w\-\,\s]*JavaScript/,
    /JavaScript[\w\-\,\s]*(Hart Parts)/,
    /JavaScript Programming/,
    /ES6: The Right/,
  ],
  typescript: [/typescript/, /TypeScript/],
  cloud: [/AWS/, /Firebase/, /Amazon Web Services/],
  chromeDevTools: [/Chrome Developer Tools/],
  webpack: [/[W|w]ebpack/],
  sql: [/SQL/],
  elm: [/Elm/],
  meteor: [/Meteor/],
  bash: [/Bash/],
  css: [/CSS/],
  vue: [/Vue/],
  backbone: [/Backbone/, /backbone/],
  jquery: [/JQuery/, /jQuery/, /Jquery/, /jquery/],
  vscode: [/Visual Studio Code/],
  cs: [/computer science/g],
  git: [/Git\s/],
};
const VIDEO_SCAN_MAP: Map<RegExp[], string> = new Map(
  Object.keys(VideoCategories).map(
    k => [VideoCategories[k as keyof typeof VideoCategories] as RegExp[], k as string] as [RegExp[], string],
  ),
);

type VideoCategoryNames = keyof typeof VideoCategories;

const CategoryMap: { [K in VideoCategoryNames]: Resource['categoryIds'] } = {
  ember: [['languages', 'javascript', 'clientWebFrameworks', 'ember']],
  meteor: [['languages', 'javascript', 'clientWebFrameworks', 'meteor']],
  jquery: [['languages', 'javascript', 'clientWebFrameworks', 'jquery']],
  backbone: [['languages', 'javascript', 'clientWebFrameworks', 'backbone']],
  webpack: [['toolsAndEditors', 'webpack']],
  javascript: [['languages', 'javascript']],
  typescript: [['languages', 'typescript']],
  css: [['languages', 'css']],
  bash: [['languages', 'bash']],
  sql: [['languages', 'sql']],
  cs: [['generalProgramming']],
  cloud: [['toolsAndEditors']],
  git: [['toolsAndEditors', 'git']],
  vscode: [['toolsAndEditors', 'vscode']],
  chromeDevTools: [['toolsAndEditors', 'chromeDevTools']],
  elm: [['languages', 'elm']],
  react: [['languages', 'javascript', 'clientWebFrameworks', 'react']],
  angular: [['languages', 'javascript', 'clientWebFrameworks', 'angular']],
  angularjs: [['languages', 'javascript', 'clientWebFrameworks', 'angularjs']],
  vue: [['languages', 'javascript', 'clientWebFrameworks', 'vue']],
};

function detectVideoCategories(femCourse: FemCourse): VideoCategoryNames[] {
  const cats: Set<VideoCategoryNames> = new Set();
  for (const [regexps, cat] of VIDEO_SCAN_MAP) {
    for (const r of regexps) {
      if (r.test(femCourse.name)) {
        cats.add(cat as VideoCategoryNames);
      }
    }
  }
  // tslint:disable-next-line:no-console
  return [...cats];
}

function detectCategories(femCourse: FemCourse): Resource['categoryIds'] {
  const detectedVideoCats: Array<Resource['categoryIds']> = detectVideoCategories(femCourse).map(vc => CategoryMap[vc]);
  const cats = [...DEFAULT_CATEGORIES, ...flatten(detectedVideoCats)];
  // tslint:disable-next-line:no-console
  // console.log(cats);
  return cats;
}

const NORMALIZED_DATA: Resource[] = SCRAPED_DATA.map(raw => {
  const { id, url, name, description } = raw;
  const site: Resource = {
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
    categoryIds: detectCategories(raw),
  };
  return site;
});

export default NORMALIZED_DATA;
