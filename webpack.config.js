module.exports = {
    entry: "./main.js",
    output: {
        path: __dirname,
        filename: "result.js"
    },
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel', // 'babel-loader' is also a legal name to reference
          query: {
            presets: ['es2015', 'react']
          }
        }
      ]
    }
};