import * as lp from 'left-pad';
import { OrganizedResourceCategory } from '../data/resource';

function dasherize(s: string): string {
  return s.toLowerCase().replace(/[\s\_\.]+/g, '-');
}

const SPACES: string[] = [];
function spaces(n: number) {
  if (SPACES[n] === void 0) {
    SPACES[n] = '';
    for (let i = 0; i < n; i++) {
      SPACES[n] += ' ';
    }
  }
  return SPACES[n];
}

export function mdTocOrganizedSite(os: OrganizedResourceCategory, level: number = 1): string {
  const pad = spaces(3 * (level - 1));
  const thisLine = pad + `* [${os.category.name}](#${dasherize(os.category.name)})`;
  const childLines = os.children
    ? os.children
        .sort((a, b) => a.category.name.localeCompare(b.category.name))
        .map(c => mdTocOrganizedSite(c, level + 1))
    : [];
  return [thisLine, ...childLines].join('\n');
}
