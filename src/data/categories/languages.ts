import { Game } from '../games';

// @ts-check

const ALL_LANGUAGES: Game.Categories = {
  bash: { id: 'bash', name: 'Bash', url: 'https://www.gnu.org/software/bash/' },
  c: { id: 'c', name: 'c', url: 'https://en.wikipedia.org/wiki/C_(programming_language)' },
  cSharp: {
    id: 'cSharp',
    name: 'cSharp',
    url: 'https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/',
  },
  clojure: { id: 'clojure', name: 'clojure', url: 'https://clojure.org/' },
  css: { id: 'css', name: 'css', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
  dart: { id: 'dart', name: 'dart', url: 'https://www.dartlang.org/' },
  fSharp: { id: 'fSharp', name: 'fSharp', url: 'https://fsharp.org/' },
  go: { id: 'go', name: 'go', url: 'https://golang.org/' },
  groovy: { id: 'groovy', name: 'groovy', url: 'http://groovy-lang.org/' },
  haskell: { id: 'haskell', name: 'haskell', url: 'https://www.haskell.org/' },
  java: { id: 'java', name: 'java', url: 'https://www.java.com/' },
  javascript: {
    id: 'javascript',
    name: 'javascript',
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  kotlin: { id: 'kotlin', name: 'kotlin', url: 'https://kotlinlang.org/' },
  lua: { id: 'lua', name: 'lua', url: 'https://www.lua.org/' },
  objectiveC: {
    id: 'objectiveC',
    name: 'objectiveC',
    url:
      'https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html',
  },
  ocaml: { id: 'ocaml', name: 'ocaml', url: 'https://ocaml.org/' },
  pascal: { id: 'pascal', name: 'pascal', url: 'http://pascal-central.com/ppl/index.html' },
  perl: { id: 'perl', name: 'perl', url: 'https://www.perl.org/' },
  php: { id: 'php', name: 'php', url: 'https://secure.php.net/' },
  python: { id: 'python', name: 'python', url: 'https://www.python.org/' },
  ruby: { id: 'ruby', name: 'ruby', url: 'https://www.ruby-lang.org/' },
  rust: { id: 'rust', name: 'rust', url: 'https://rust-lang.org' },
  scala: { id: 'scala', name: 'scala', url: 'https://www.scala-lang.org/' },
  swift: { id: 'swift', name: 'swift', url: 'https://developer.apple.com/swift/' },
  vbNet: {
    id: 'vbNet',
    name: 'vbNet',
    url: 'https://docs.microsoft.com/en-us/dotnet/visual-basic/getting-started/',
  },
};

/**
 * @type {Game.Categories<'languages'>}
 */
const ALL_LANGUAGES_WITH_ID = Object.keys(ALL_LANGUAGES).reduce(
  (obj, k) => {
    // eslint-disable-next-line no-param-reassign
    obj[k] = Object.assign({ parentId: 'languages' as 'languages' }, ALL_LANGUAGES[k]);
    return obj;
  },
  {} as Game.Categories<'languages'>,
);

export default ALL_LANGUAGES_WITH_ID;
