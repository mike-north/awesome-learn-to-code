import { assert } from 'chai';
import { suite, test } from 'mocha-typescript';
import { mdCategory } from '../src/format/category';

@suite('Category formatting tests')
class CategoryFormattingTests {
  @test
  'a category is formatted properly'() {
    const str = mdCategory(
      {
        description: 'This is a description',
        id: 'test-category',
        name: 'Test Category',
        url: 'https://example.com/test-category',
      },
      1,
    );
    assert.equal(
      str,
      `# [Test Category](https://example.com/test-category)

This is a description`,
    );
  }
  @test
  'a category with no description is formatted properly'() {
    const str = mdCategory(
      {
        id: 'test-category',
        name: 'Test Category',
        url: 'https://example.com/test-category',
      },
      1,
    );
    assert.equal(str, `# [Test Category](https://example.com/test-category)`);
  }
  @test
  'a sub-category is formatted properly'() {
    const str = mdCategory(
      {
        description: 'This is a description',
        id: 'test-category',
        name: 'Test Category',
        url: 'https://example.com/test-category',
      },
      2,
    );
    assert.equal(
      str,
      `## [Test Category](https://example.com/test-category)

This is a description`,
    );
  }
}
