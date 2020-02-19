const mocha = "mocha";
const chai = "chai";
const create_tiny_str = require('../lib/controller/createString');



describe('Creates Tiny String', () => {
  it('should return a tiny random string')}, () => {
    assert.isString(create_tiny_str());
  });
  it('should be less than n characters', () => {
    assert.isAtLeast((create_tiny_str()).length, 5, 'string at least 5 characters');
  });
