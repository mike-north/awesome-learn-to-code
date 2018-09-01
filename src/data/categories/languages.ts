// @ts-check
import { Site } from '../sites';

const ALL_LANGUAGES = {
  assembly: { id: 'assembly', name: 'Assembly', url: 'http://www.azillionmonkeys.com/qed/asmexample.html' },
  bash: { id: 'bash', name: 'Bash', url: 'https://www.gnu.org/software/bash/' },
  c: { id: 'c', name: 'C', url: 'https://en.wikipedia.org/wiki/C_(programming_language)' },
  'c++': { id: 'c++', name: 'C++', url: 'https://en.cppreference.com/w/' },
  cSharp: {
    id: 'cSharp',
    name: 'C#',
    url: 'https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/',
  },
  clojure: { id: 'clojure', name: 'Clojure', url: 'https://clojure.org/' },
  coffeescript: { id: 'coffeescript', name: 'Coffeescript', url: 'https://coffeescript.org/' },
  crystal: { id: 'crystal', name: 'Crystal', url: 'https://crystal-lang.org/' },
  css: { id: 'css', name: 'CSS', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
  d: { id: 'd', name: 'D', url: 'https://dlang.org/' },
  dart: { id: 'dart', name: 'Dart', url: 'https://www.dartlang.org/' },
  elixir: { id: 'elixir', name: 'Elixir', url: 'https://elixir-lang.org/' },
  erlang: { id: 'erlang', name: 'Erlang', url: 'https://www.erlang.org/' },
  fSharp: { id: 'fSharp', name: 'F#', url: 'https://fsharp.org/' },
  fortran: { id: 'fortran', name: 'Fortran', url: 'https://en.wikibooks.org/wiki/Fortran/Fortran_examples' },
  go: { id: 'go', name: 'Go', url: 'https://golang.org/' },
  groovy: { id: 'groovy', name: 'Groovy', url: 'http://groovy-lang.org/' },
  haskell: { id: 'haskell', name: 'Haskell', url: 'https://www.haskell.org/' },
  java: { id: 'java', name: 'Java', url: 'https://www.java.com/' },
  javascript: {
    id: 'javascript',
    name: 'JavaScript',
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  kotlin: { id: 'kotlin', name: 'Kotlin', url: 'https://kotlinlang.org/' },
  lua: { id: 'lua', name: 'Lua', url: 'https://www.lua.org/' },
  objectiveC: {
    id: 'objectiveC',
    name: 'Objective-C',
    url:
      'https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html',
  },
  ocaml: { id: 'ocaml', name: 'OCaml', url: 'https://ocaml.org/' },
  pascal: { id: 'pascal', name: 'Pascal', url: 'http://pascal-central.com/ppl/index.html' },
  perl: { id: 'perl', name: 'Perl', url: 'https://www.perl.org/' },
  php: { id: 'php', name: 'Php', url: 'https://secure.php.net/' },
  python: { id: 'python', name: 'Python', url: 'https://www.python.org/' },
  r: { id: 'r', name: 'R', url: 'https://www.r-project.org/' },
  ruby: { id: 'ruby', name: 'Ruby', url: 'https://www.ruby-lang.org/' },
  rust: { id: 'rust', name: 'Rust', url: 'https://rust-lang.org' },
  scala: { id: 'scala', name: 'Scala', url: 'https://www.scala-lang.org/' },
  shell: { id: 'shell', name: 'Shell', url: 'https://help.ubuntu.com/community/Beginners/BashScripting' },
  sql: { id: 'sql', name: 'SQL', url: 'https://www.postgresql.org/' },
  swift: { id: 'swift', name: 'Swift', url: 'https://developer.apple.com/swift/' },
  typescript: { id: 'typescript', name: 'TypeScript', url: 'http://typescriptlang.org/' },
  vbNet: {
    id: 'vbNet',
    name: 'VB.NET',
    url: 'https://docs.microsoft.com/en-us/dotnet/visual-basic/getting-started/',
  },
};

export type ProgrammingLanguage = keyof typeof ALL_LANGUAGES;

/**
 * @type {Site.Categories<'languages'>}
 */
const ALL_LANGUAGES_WITH_ID = (Object.keys(ALL_LANGUAGES) as Array<keyof typeof ALL_LANGUAGES>).reduce(
  (obj, k) => {
    // eslint-disable-next-line no-param-reassign
    obj[k] = Object.assign({ parentId: 'languages' as 'languages' }, ALL_LANGUAGES[k]);
    return obj;
  },
  {} as Site.Categories<'languages'>,
);

export default ALL_LANGUAGES_WITH_ID;
