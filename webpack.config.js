module.exports = {
    entry: './source/entry.jsx',
    output: {
      filename: './build/bundle.js'
    },
    devtool: 'inline-source-map',
    module: {
      loaders: [
    { test: /\.jsx$/, loader: 'jsx-loader' }
      ]
    },
    resolve: {
      extensions: ['', '.js', '.jsx']
    }
};
