import path from 'path';
import cp from 'child_process';
import yargs from 'yargs';
import webpack from 'webpack';
import serve from 'webpack-serve';

import generateConfig from '../lib/generate-config';

const task =  yargs.argv._[0];

generateConfig().then(( configs ) => {
  if(task === 'build') {
    const compiler = webpack(configs);
    compiler.run((err, stats) => {
      if(err) {
        console.error(err);
      }
      else {
        console.log(stats.toString());
      }
    })
  }
  else if (task === 'dev'){
    serve({config: configs});
  }
  else {
    console.error('unknow task: try to use build or start');
  }
});
