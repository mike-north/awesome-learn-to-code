import { Resource } from '../data/resource';
import { mdHeader } from './utils';

export const mdCategory = (cat: Resource.Category, level: number): string => {
  const parts = [mdHeader(cat.url ? `[${cat.name}](${cat.url})` : cat.name, level)];
  if (cat.description) {
    parts.push('\n', '\n', cat.description);
  }
  return parts.join('');
};
