const path = require('path');

const runningFolder = process.cwd();

module.exports = {
  mode:'development',
  entry: path.resolve(runningFolder, 'src'),
  output:{
    path: path.resolve(runningFolder, 'dist'),
    filename:'bundle.js'
  },
  resolve:{
    extensions:['.js','.jsx','.ts']
  },
  resolveLoader: {
    modules: [
      'node_modules',
      path.resolve(__dirname,'..','node_modules'),
    ]
  },
  module:{
    rules:[
    ]
  },

  plugins:[
  ],
  devtool: 'eval'
}