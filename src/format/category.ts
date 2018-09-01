import { Resource } from '../data/resource';
import { mdHeader } from './utils';

export const mdCategory = (cat: Resource.Category, level: number): string => {
  const parts = [mdHeader(`[${cat.name}](${cat.url})`, level)];
  if (cat.description) {
    parts.push('\n', '\n', cat.description);
  }
  return parts.join('');
};
