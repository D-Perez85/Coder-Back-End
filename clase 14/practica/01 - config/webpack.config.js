const path = require('path');
const nodeExternals = require('webpack-node-externals');

// exportar un objeto que contenga los conceptos
module.exports = {
   mode: 'production',
   entry: './index.js',
   target: "node",
   output: {
    path: path.resolve(__dirname, 'build'),
    filename: "app.bundle.js"
    },

   externals: [nodeExternals()],
//  Loaders
   module: {
       rules: [
           {
               test: /\.txt?/, //Cuales transformar
               use: 'raw-loader' //Nombre para transformar esos archivos
           }
       ]
   }
}
