import { assert } from 'chai';
import { suite, test } from 'mocha-typescript';
import { mdSite } from '../src/format/site';

@suite('Site formatting tests')
class SiteFormattingTests {
  @test
  'a basic site is formatted properly'() {
    const str = mdSite({
      categoryIds: [],
      description: 'This is a description',
      id: 'test-site',
      name: 'Test Site',
      platforms: ['windows', 'os x'],
      price: 0,
      type: 'game',
      url: 'https://example.com/test-site',
    });
    assert.equal(str, `* [Test Site](https://example.com/test-site) -  ❖🎮  This is a description`);
  }
  @test
  'icons are always in the same order'() {
    const str = mdSite({
      categoryIds: [],
      description: 'This is a description',
      id: 'test-site',
      name: 'Test Site',
      platforms: ['os x', 'windows'],
      price: 0,
      type: 'game',
      url: 'https://example.com/test-site',
    });
    assert.equal(str, `* [Test Site](https://example.com/test-site) -  ❖🎮  This is a description`);
  }
  @test
  'a game is formatted properly'() {
    const str = mdSite({
      categoryIds: [],
      description: 'This is a description',
      id: 'test-site',
      name: 'Test Site',
      platforms: ['ios'],
      price: 0,
      type: 'game',
      url: 'https://example.com/test-site',
    });
    assert.equal(str, `* [Test Site](https://example.com/test-site) -  📱🎮  This is a description`);
  }
  @test
  'a playground is formatted properly'() {
    const str = mdSite({
      categoryIds: [],
      description: 'This is a description',
      id: 'test-site',
      name: 'Test Site',
      platforms: ['android', 'ios', 'web'],
      price: 0,
      type: 'playground',
      url: 'https://example.com/test-site',
    });
    assert.equal(str, `* [Test Site](https://example.com/test-site) -  🕸📱🏗  This is a description`);
  }
  @test
  'a paid app is formatted properly'() {
    const str = mdSite({
      categoryIds: [],
      description: 'This is a description',
      id: 'test-site',
      name: 'Test Site',
      platforms: ['android', 'ios', 'web'],
      price: 10,
      type: 'playground',
      url: 'https://example.com/test-site',
    });
    assert.equal(str, `* [Test Site](https://example.com/test-site) -  💰🕸📱🏗  This is a description`);
  }
}
