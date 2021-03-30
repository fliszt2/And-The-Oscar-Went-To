const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, 'client', 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'client', 'public'),
    filename: 'bundle.js'
  },
  // devServer: {
  //   contentBase: path.resolve(__dirname, 'client', 'public'),
  //   // open: true,
  //   // clientLogLevel: 'silent',
  //   port: 3000
  // },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        include: path.resolve(__dirname, 'client', 'src'),
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', {
                "targets": "defaults"
              }],
              '@babel/preset-react'
            ]
          }
        }]
      }
    ]
  }
}