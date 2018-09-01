import { Resource } from '../resource';

const ALL_WEB_FRAMEWORKS = {
  angular: { name: 'Angular', id: 'angular', url: 'https://angular.io/' },
  jquery: { name: 'JQuery', id: 'jquery', url: 'https://jquery.com/' },
  angularjs: { name: 'Angular.js', id: 'angularjs', url: 'https://angularjs.org/' },
  ember: { name: 'Ember.js', id: 'ember', url: 'https://emberjs.com' },
  backbone: { name: 'Backbone', id: 'backbone', url: 'http://backbonejs.org/' },
  meteor: { name: 'Meteor.js', id: 'meteor', url: 'https://meteor.com' },
  react: { name: 'React.js', id: 'react', url: 'https://reactjs.org/' },
  vue: { name: 'Vue.js', id: 'vue', url: 'https://vuejs.org/' },
};

export type ClientWebFramework = keyof typeof ALL_WEB_FRAMEWORKS;

/**
 * @type {Resource.Categories<'javascript'>}
 */
const ALL_WEB_FRAMEWORKS_WITH_ID = (Object.keys(ALL_WEB_FRAMEWORKS) as Array<keyof typeof ALL_WEB_FRAMEWORKS>).reduce(
  (obj, k) => {
    // eslint-disable-next-line no-param-reassign
    obj[k] = Object.assign({ parentId: 'javascript' as 'javascript' }, ALL_WEB_FRAMEWORKS[k]);
    return obj;
  },
  {} as Resource.Categories<'javascript'>,
);

export default ALL_WEB_FRAMEWORKS_WITH_ID;
