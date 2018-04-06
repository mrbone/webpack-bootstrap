const chai = require('chai');
const sandbox = require('sinon').sandbox.create();

global.expect = chai.expect;
global.sinon = sandbox;

process.on('unhandledRejection', error => {});

afterEach(() => {
  sandbox.restore();
});