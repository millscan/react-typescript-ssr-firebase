const path = require('path')
module.exports = {
  entry: './src/index.tsx',
  mode: 'production',
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|ts|jsx|tsx)$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    filename: 'bundle.js',
    path: __dirname + '/public',
  },
}
