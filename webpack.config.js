var webpack = require("webpack");

module.exports = {
  entry: {
    TimeTracker: "./src/main.js"
  },
  output: {
    path: './build',
    filename: "[name].js"
  },
  externals: {
    "react": "React"
  },
  resolve: {
    extensions: ['', '.js', '.json', '.jsx']
  },
  module: {
    loaders: [
      {test: /\.less$/, loader: 'style-loader!css-loader!less-loader'},
      {test: /\.(?:js|jsx)$/, loader: "6to5-loader?insertPragma=React.DOM", exclude: /node_modules/},
      //{test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'} // inline base64 URLs for <=8k images, direct URLs for the rest
      ]
  }
};
