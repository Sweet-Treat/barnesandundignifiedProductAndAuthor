const path = require('path');
const entryPath = path.join(__dirname, './client/src/index.jsx');
const outPut = path.join(__dirname, './client/dist');



module.exports = {
  entry: entryPath,
  module: {
    rules: [
      {
        test: [/\.jsx$/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|ttf|eot|svg|woff(2)?)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: outPut
  }

};


