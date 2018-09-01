import { Resource } from '../data/resource';

const ICONS = {
  android: '/img/16/android.png',
  ios: '/img/16/ios.png',
  linux: '/img/16/linux.png',
  notFree: '/img/16/pay.png',
  osx: '/img/16/osx.png',
  windows: '/img/16/windows.png',
};
const icon = (key: keyof typeof ICONS, title: string) => `[![${title}](${ICONS[key]})](#)
`;

const mdSiteIcons = (site: Resource): string => {
  const icons: string[] = [];
  if (site.price) {
    icons.push('💰');
  }
  if (site.platforms.indexOf('windows') >= 0) {
    icons.push('❖');
  }
  if (site.platforms.indexOf('os x') >= 0) {
    icons.push('');
  }
  if (site.platforms.indexOf('web') >= 0) {
    icons.push('🕸');
  }
  if (site.platforms.indexOf('ios') >= 0 || site.platforms.indexOf('android') >= 0) {
    icons.push('📱');
  }
  if (site.type === 'game') {
    icons.push('🎮');
  }
  if (site.type === 'playground') {
    icons.push('🏗');
  }
  if (site.type === 'video-course') {
    icons.push('📼');
  }
  if (icons.length === 0) {
    return '';
  }
  return ` ${icons.join('')} `;
};

const mdSiteDetails = (site: Resource): string => {
  const parts: string[] = [mdSiteIcons(site), ' - ', site.description].filter(Boolean);

  if (parts.length > 0) {
    return ` - ${parts.join(' ')}`;
  }
  return '';
};

export const mdSite = (site: Resource): string =>
  [`* [${site.name}](${site.url})`, mdSiteDetails(site)].filter(Boolean).join('');
