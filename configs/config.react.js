const loaders = [
  {
    test:/\.jsx?$/,
    exclude:/node_modules/,
    use:{
      loader:'babel-loader',
      options:{
        presets:['react']
      }
    }
  }
];

module.exports = {
  loaders
}