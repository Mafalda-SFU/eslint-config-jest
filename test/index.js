const {expect, use} = require('chai');
const {test} = require('mocha');
const {jestSnapshotPlugin} = require('mocha-chai-jest-snapshot');

const eslintrc = require('../.eslintrc.js');


use(jestSnapshotPlugin());


test('layout', function()
{
  expect(eslintrc).toMatchSnapshot();
})
