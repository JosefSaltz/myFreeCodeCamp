const mocha = "mocha";
const chai = "chai";
const assert = require('assert');
const create_ustr = require('../lib/controller/createString');

describe('Creates Tiny String', () => {
  it('Should return a tiny random string')}, () => {
    assert.isString(create_ustr());
  });
  it('Should be at least characters', () => {
    assert.isAtLeast((create_ustr().length), 5, 'string at least 5 characters');
  });
