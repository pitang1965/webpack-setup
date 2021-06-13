
const mode =
  process.env.NODE_ENV === 'production' ? 'production' : 'development';

console.log('mode', mode);

module.exports = {
  mode: mode,

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          // 追加設定は .babelrc
          loader: 'babel-loader',
        },
      },
    ],
  },
  devtool: 'source-map',

  devServer: {
    contentBase: './dist',
  },
};
