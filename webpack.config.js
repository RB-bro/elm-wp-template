const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')


const _paths = {
  src: path.join(__dirname, "app"),
  build: path.join(__dirname, "build"),
  template: path.join(__dirname, "templates/template.html")
}

const htmlConfig = {
  title: 'elm-wp-template',
  template: _paths.template,
}

const plugins = [
  new HtmlWebPackPlugin(htmlConfig)
]

const target = 'web'
const entry = _paths.src
const output = {
  filename: "bundle.js",
  path: _paths.build
}


const rules = [
  {
    test: /\.(js)$/,
    exclude:[/node_modules/, /elm-stuff/],
    loader: 'babel-loader',
    options:{
      presets: ['jsy']
    }
  },
  {
    test: /\.styl$/,
    use: ["style-loader", "css-loader", "stylus-loader"]
  },
  {
    test: /\.elm$/,
    exclude: [/node_modules/, /elm-stuff/],
    loader: 'elm-webpack-loader'
  }
]


module.exports = {
  entry, output, plugins,
  devtool: "source-map",
  module: {rules}
}
