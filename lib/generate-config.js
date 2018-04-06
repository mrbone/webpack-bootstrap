import inquirer from 'inquirer';
import path from 'path';
import fs from 'fs';

import configDetect from './config-detect';
import webpackDefaultConfig from '../configs/config.default';
import configVue from '../configs/config.vue';

export default function() {

  const configPath = configDetect(process.cwd());
  
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
        message: 'what kind of liberary do you use?',
        choices:['vue','react']
      }
    ])
  }
  return bootOptionsPromise.then(( { liberary } )=>{
    if( liberary === 'vue') {
      webpackDefaultConfig.module.rules = webpackDefaultConfig.module.rules.concat(configVue.loaders);
    }
    return webpackDefaultConfig;
  });
  
};