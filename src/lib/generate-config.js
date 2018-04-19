import inquirer from 'inquirer';
import path from 'path';
import fs from 'fs';

import configDetect from './config-detect';
import webpackDefaultConfig from '../configs/config.default';
import configVue from '../configs/config.vue';
import configReact from '../configs/config.react';

const runningCwd = process.cwd();

export default function() {

  const configPath = configDetect(runningCwd);

  let bootOptionsPromise;
  
  if(configPath){
    const bootOptions = JSON.parse(fs.readFileSync(configPath));
    bootOptionsPromise = Promise.resolve(bootOptions);
  }
  else {
    bootOptionsPromise = inquirer.prompt([
      {
        type:'list',
        name:'liberary',
        message: 'which kind of app do you want to create?',
        choices:['default','vue','react']
      }
    ]).then((result) => {
      const { liberary } = result;
      fs.writeFileSync(path.resolve(runningCwd,'.wbootrc'),`{"liberary": "${liberary}"}`);
      return result;
    })
  }
  return bootOptionsPromise.then(( { liberary } ) => {
    const webpackFinalConfig = Object.assign({},webpackDefaultConfig);
    if( liberary === 'vue') {
      webpackFinalConfig.module.rules = webpackDefaultConfig.module.rules.concat(configVue.loaders);
    }
    if( liberary === 'react') {
      webpackFinalConfig.module.rules = webpackDefaultConfig.module.rules.concat(configReact.loaders);
    }
    return webpackFinalConfig;
  });
  
};