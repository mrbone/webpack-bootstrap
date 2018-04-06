import inquirer from 'inquirer';
import fs from 'fs';
import proxyquire from 'proxyquire';

import configVue from '../configs/config.vue';

describe('generate-config', () => {
  
  it('should create a prompt when there is no .wbootrc found', () => {
    sinon.stub(inquirer, 'prompt').returns(Promise.reject());
    const generateConfig = proxyquire('./generate-config', {
      './config-detect': {
        default: () => undefined
      }
    }).default;

    generateConfig();
    expect(inquirer.prompt.called).to.be.true;
  });

  it('should not create prompt and wrap vue config when set liberary as vue in .wbootrc', () => {
    const generateConfig = proxyquire('./generate-config',{
      './config-detect': {
        default: () => 'somepath'
      }
    }).default;
    sinon.stub(inquirer,'prompt');
    sinon.stub(fs,'readFileSync').returns('{"liberary":"vue"}');

    expect(inquirer.prompt.called).to.be.false;
    return generateConfig().then(( webpackConfigWithVueLoaders ) => {
      configVue.loaders.forEach((loaderItem) => {
        expect(webpackConfigWithVueLoaders.module.rules.includes(loaderItem)).to.be.true;  
      })
    });
  });

});