import { assert } from 'chai';
import { suite, test } from 'mocha-typescript';
import { generateSiteListMarkdown } from '../src/format';

@suite('Sitelist generation tests')
class GenerateSitelistTests {
  @test
  'a category is formatted properly'() {
    const str = generateSiteListMarkdown(
      [
        {
          path: ['test-category'],
          category: {
            description: 'Category description 1',
            id: 'test-category1',
            name: 'Test Category 1',
            url: 'https://example.com/test-category1',
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
          ],
        },
        {
          path: ['test-category-2'],
          category: {
            description: 'Category description 2',
            id: 'test-category2',
            name: 'Test Category 2',
            url: 'https://example.com/test-category2',
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
          ],
        },
      ],
      1,
    );
    assert.equal(
      str,
      `
# [Test Category 1](https://example.com/test-category1)

Category description 1

* [A thing](https://example.com/a-thing) - 💰📱🎮 - Description of a thing
* [A thing](https://example.com/a-thing) - 💰📱🎮 - Description of a thing

# [Test Category 2](https://example.com/test-category2)

Category description 2

* [A thing](https://example.com/a-thing) - 💰📱🎮 - Description of a thing
* [A thing](https://example.com/a-thing) - 💰📱🎮 - Description of a thing
`.trim(),
    );
  }
}
