import { Site } from '../sites';

const ALL_WEB_FRAMEWORKS = {
  angular: { name: 'Angular', id: 'angular', url: 'https://angular.io/' },
  angularjs: { name: 'Angular.js', id: 'angularjs', url: 'https://angularjs.org/' },
  elm: { name: 'Elm', id: 'elm', url: 'http://elm-lang.org/' },
  ember: { name: 'Ember.js', id: 'ember', url: 'https://emberjs.com' },
  react: { name: 'React.js', id: 'react', url: 'https://reactjs.org/' },
  vue: { name: 'Vue.js', id: 'vue', url: 'https://vuejs.org/' },
};

export type WebFramework = keyof typeof ALL_WEB_FRAMEWORKS;

/**
 * @type {Site.Categories<'web-frameworks'>}
 */
const ALL_WEB_FRAMEWORKS_WITH_ID = (Object.keys(ALL_WEB_FRAMEWORKS) as Array<keyof typeof ALL_WEB_FRAMEWORKS>).reduce(
  (obj, k) => {
    // eslint-disable-next-line no-param-reassign
    obj[k] = Object.assign({ parentId: 'web-frameworks' as 'web-frameworks' }, ALL_WEB_FRAMEWORKS[k]);
    return obj;
  },
  {} as Site.Categories<'web-frameworks'>,
);

export default ALL_WEB_FRAMEWORKS_WITH_ID;
