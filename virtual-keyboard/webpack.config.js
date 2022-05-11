const path = require('path');

module.exports = {
    
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
    },


    module: {
        rules: [
          {
            test: /\.svg$/,
            use: [
              'file-loader',
              'svgo-loader'
            ]
          },
          {
            test: /\.css$/,
            use: [
              'style-loader',
              'css-loader'
            ]
          }
        ]
      }


}