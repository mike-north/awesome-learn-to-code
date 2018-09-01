import { assert } from 'chai';
import { suite, test } from 'mocha-typescript';
import { mdCategorySiteList } from '../src/format/content';

@suite('Category site list formatting tests')
class CategorySiteListFormattingTests {
  @test
  'a category site list with no items is formatted properly'() {
    const str = mdCategorySiteList({
      path: ['test-category'],
      category: {
        description: 'Category description',
        id: 'test-category',
        name: 'Test Category',
        url: 'https://example.com/test-category',
      },
      items: [],
    });
    assert.equal(
      str,
      `
# [Test Category](https://example.com/test-category)

Category description`.trim(),
    );
  }
  @test
  'a category site list with some items is formatted properly'() {
    const str = mdCategorySiteList({
      path: ['test-category'],
      category: {
        description: 'Category description',
        id: 'test-category',
        name: 'Test Category',
        url: 'https://example.com/test-category',
      },
      items: [
        {
          categoryIds: [],
          description: 'Description of a thing',
          id: 'a-thing',
          name: 'A thing',
          platforms: ['ios'],
          price: 1.0,
          type: 'game',
          url: 'https://example.com/a-thing',
        },
        {
          categoryIds: [],
          description: 'Description of a thing',
          id: 'a-thing',
          name: 'A thing',
          platforms: ['ios'],
          price: 1.0,
          type: 'game',
          url: 'https://example.com/a-thing',
        },
        {
          categoryIds: [],
          description: 'Description of a thing',
          id: 'a-thing',
          name: 'A thing',
          platforms: ['ios'],
          price: 1.0,
          type: 'game',
          url: 'https://example.com/a-thing',
        },
      ],
    });
    assert.equal(
      str,
      `
# [Test Category](https://example.com/test-category)

Category description

* [A thing](https://example.com/a-thing) - 💰📱🎮 - Description of a thing
* [A thing](https://example.com/a-thing) - 💰📱🎮 - Description of a thing
* [A thing](https://example.com/a-thing) - 💰📱🎮 - Description of a thing`.trim(),
    );
  }
  @test
  'a category site list with subcategories is formatted properly'() {
    const str = mdCategorySiteList({
      path: ['test-category'],
      category: {
        description: 'Category description',
        id: 'test-category',
        name: 'Test Category',
        url: 'https://example.com/test-category',
      },
      children: [
        {
          path: ['test-category-2'],
          category: {
            description: 'Description of test category 2',
            id: 'test-category-2',
            name: 'Test Category 2',
            url: 'https://example.com/test-category-2',
          },
          items: [],
        },
        {
          path: ['test-category-3'],
          category: {
            description: 'Description of test category 3',
            id: 'test-category-3',
            name: 'Test Category 3',
            url: 'https://example.com/test-category-3',
          },
          items: [],
        },
      ],
      items: [],
    });
    assert.equal(
      str,
      `
# [Test Category](https://example.com/test-category)

Category description

## [Test Category 2](https://example.com/test-category-2)

Description of test category 2

## [Test Category 3](https://example.com/test-category-3)

Description of test category 3`.trim(),
    );
  }
  @test
  'a category site list with subcategories and items is formatted properly'() {
    const str = mdCategorySiteList({
      path: ['test-category'],
      category: {
        description: 'Category description',
        id: 'test-category',
        name: 'Test Category',
        url: 'https://example.com/test-category',
      },
      children: [
        {
          path: ['test-category-2'],
          category: {
            description: 'Description of test category 2',
            id: 'test-category-2',
            name: 'Test Category 2',
            url: 'https://example.com/test-category-2',
          },
          items: [
            {
              categoryIds: [],
              description: 'Description of a thing',
              id: 'a-thing',
              name: 'A thing',
              platforms: ['ios'],
              price: 1.0,
              type: 'game',
              url: 'https://example.com/a-thing',
            },
            {
              categoryIds: [],
              description: 'Description of a thing',
              id: 'a-thing',
              name: 'A thing',
              platforms: ['ios'],
              price: 1.0,
              type: 'game',
              url: 'https://example.com/a-thing',
            },
            {
              categoryIds: [],
              description: 'Description of a thing',
              id: 'a-thing',
              name: 'A thing',
              platforms: ['ios'],
              price: 1.0,
              type: 'game',
              url: 'https://example.com/a-thing',
            },
          ],
        },
        {
          path: ['test-category-3'],
          category: {
            description: 'Description of test category 3',
            id: 'test-category-3',
            name: 'Test Category 3',
            url: 'https://example.com/test-category-3',
          },
          items: [
            {
              categoryIds: [],
              description: 'Description of a thing',
              id: 'a-thing',
              name: 'A thing',
              platforms: ['ios'],
              price: 1.0,
              type: 'game',
              url: 'https://example.com/a-thing',
            },
            {
              categoryIds: [],
              description: 'Description of a thing',
              id: 'a-thing',
              name: 'A thing',
              platforms: ['ios'],
              price: 1.0,
              type: 'game',
              url: 'https://example.com/a-thing',
            },
            {
              categoryIds: [],
              description: 'Description of a thing',
              id: 'a-thing',
              name: 'A thing',
              platforms: ['ios'],
              price: 1.0,
              type: 'game',
              url: 'https://example.com/a-thing',
            },
          ],
        },
      ],
      items: [
        {
          categoryIds: [],
          description: 'Description of a thing',
          id: 'a-thing',
          name: 'A thing',
          platforms: ['ios'],
          price: 1.0,
          type: 'game',
          url: 'https://example.com/a-thing',
        },
        {
          categoryIds: [],
          description: 'Description of a thing',
          id: 'a-thing',
          name: 'A thing',
          platforms: ['ios'],
          price: 1.0,
          type: 'game',
          url: 'https://example.com/a-thing',
        },
        {
          categoryIds: [],
          description: 'Description of a thing',
          id: 'a-thing',
          name: 'A thing',
          platforms: ['ios'],
          price: 1.0,
          type: 'game',
          url: 'https://example.com/a-thing',
        },
      ],
    });
    assert.equal(
      str,
      `
# [Test Category](https://example.com/test-category)

Category description

* [A thing](https://example.com/a-thing) - 💰📱🎮 - Description of a thing
* [A thing](https://example.com/a-thing) - 💰📱🎮 - Description of a thing
* [A thing](https://example.com/a-thing) - 💰📱🎮 - Description of a thing

## [Test Category 2](https://example.com/test-category-2)

Description of test category 2

* [A thing](https://example.com/a-thing) - 💰📱🎮 - Description of a thing
* [A thing](https://example.com/a-thing) - 💰📱🎮 - Description of a thing
* [A thing](https://example.com/a-thing) - 💰📱🎮 - Description of a thing

## [Test Category 3](https://example.com/test-category-3)

Description of test category 3

* [A thing](https://example.com/a-thing) - 💰📱🎮 - Description of a thing
* [A thing](https://example.com/a-thing) - 💰📱🎮 - Description of a thing
* [A thing](https://example.com/a-thing) - 💰📱🎮 - Description of a thing
`.trim(),
    );
  }
}
