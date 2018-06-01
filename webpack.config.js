module.exports = {
  context: __dirname + '/client/src',
  entry: './index.jsx',
  output: {
    path: __dirname  + '/client/public',
    filename: 'bundle.js'
  },
  watch: true,
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include:  __dirname  + '/client/src',
        loader : 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  resolve:  {
    extensions: ['.js', '.jsx']
  },
  node: {
    dns: 'mock',
    net: 'mock',
    tls: 'mock',
    fs: 'empty'
  }
}