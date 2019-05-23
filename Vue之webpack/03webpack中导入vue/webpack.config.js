const path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: path.join(__dirname, 'src/js/main.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [ // 添加plugins节点配置插件
        new htmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html'),//模板路径
            filename: 'index.html'//自动生成的HTML文件的名称
        })

    ],
    module: {
        rules: [
            {test: /\.css$/, use: ['style-loader', 'css-loader']},
            {test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader']},
            {test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader']},
            {test: /\.(jpg|png|gif|bmp|jpeg)$/, use: ['url-loader']},
            {test: /\.(ttf|eot|svg|woff|woff2)$/, use: ['url-loader']},
            {test: /\.js$/, use: ['babel-loader'], exclude: /node_modules/}
        ]
    },
    resolve:{
        alias:{
            'vue$':'vue/dist/vue.js'
        }
    }
};
