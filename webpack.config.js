const path = require('path');

module.exports = {

  //MAKE SURE TO ONLY HAVE ONE 'ENTRY' UNCOMMENTED...THIS IS WHERE YOU SWITCH BETWEEN
  //THE REDUX, MOBEX AND CONTEXT CODE

  //entry: ['babel-polyfill', './src/redux/index.js'],
  entry: ['babel-polyfill', './src/MobEx/index.js'],
  //entry: ['babel-polyfill', './src/ReactContextApi/index.js'],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js$|\.jsx$/,
        exclude: /node_modules/
      },
      {
        test: /.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ],
    loaders: [
      {
        query: {
          presets: ['react', 'es2015', "stage-0"]
        }
      }
    ]
  },

  // Dev tools are provided by webpack
  // Source maps help map errors to original react code
  devtool: 'cheap-module-eval-source-map',

  // Configuration for webpack-dev-server
  devServer: {
    contentBase: path.join(__dirname, 'public')
  }
};
