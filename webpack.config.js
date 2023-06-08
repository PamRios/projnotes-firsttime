const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  entry: "./client/index.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js"
  },
  module:{
    rules:[
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use:[
          {
            loader: 'babel-loader',
            options: {
              presets:[
                [
                  '@babel/preset-env',
                  {
                    'modules': false,
                    'useBuiltIns': 'usage',
                    'targets': {"chrome": "80"},
                    'corejs':3
                  }
                ]
              ]
            }
          }
        ] 
      }
    ]
  },
  module:{
    rules:[
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  },
  plugins: [new MiniCssExtractPlugin({
    filename: 'style/app.css'
  })]
}