import { assert } from 'chai';
import { suite, test } from 'mocha-typescript';
import { replaceBetween } from '../src';

const SAMPLE = `before
BEGIN_0
should be removed
END_0
BEGIN_1
should be removed
END_1
after end`;

@suite('Replace text between tags')
class ReplaceBetweenTests {
  @test
  'single replacement formats properly'() {
    assert.equal(
      replaceBetween('BEGIN_1', 'END_1', 'abc', SAMPLE),
      `before
BEGIN_0
should be removed
END_0
BEGIN_1
abc
END_1
after end`,
    );
  }
  @test
  'multiple replacement formats properly'() {
    assert.equal(
      replaceBetween('BEGIN_0', 'END_0', 'def', replaceBetween('BEGIN_1', 'END_1', 'abc', SAMPLE)),
      `before
BEGIN_0
def
END_0
BEGIN_1
abc
END_1
after end`,
    );
  }
}
