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
  module:{
    rules:[
    ]
  },

  plugins:[
  ],
  devtool: 'eval'
}