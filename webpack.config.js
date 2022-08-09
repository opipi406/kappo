module.exports = {
  // mode: "development",

  entry: "./js/dev/entry.js",

  output: {
    path: `${__dirname}/js`,
    filename: "bundle.js"
  },

  externals: {
    jquery: 'jQuery'  // jQueryをバンドル対象から外す
  },
}