const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: 'production',
  entry: './src/server.ts',
  target: "node",
  externals: [nodeExternals()],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  resolve: {
    extensions: ['.ts', '.js'],
    // Si encuentra un archivo con index.ts dele prioridad al de ts. Luego mire el de js
    // Por qué? porque en Typescrippt podemos encontrar los dos arhvios
  },
  module: {
    rules: [
      {
        test: /\.tsx?/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      // {
      //   test: /\.jsx?/,
      //   use: 'react-loader'
      // }
    ]
  }
}