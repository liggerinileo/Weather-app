const path  = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/app/index.js', //que archivo de javascript tiene que copiar
    output: {
        path: path.join(__dirname, 'dist'),//para que cree una carpeta dist al lado de src
        filename: 'bundle.js'
    },
    devServer: {//servidor de desarrollo
        port: 8080
    },
    module: { //reglas de webpack
        rules: [
            {   
                test: /\.css$/, //expresion regular de js-leer todos los archivos css en mi proyecto
                use: ['style-loader', 'css-loader'] //para cargarlos usamos estos dos modulos de webpack
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }) //poder copiar un archivo html de un directorio a otro
    ]
};