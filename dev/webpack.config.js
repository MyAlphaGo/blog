const path = require("path");
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const htmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
    entry: path.join(__dirname, "src/main.js"),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        open: true,
        port: 5000,
        hot: true
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),
            filename: "index.html"
        }),
        new VueLoaderPlugin()
    ],
    module: {
        rules: [    // 第三方模块的匹配规则
            { test: /\.css/, use: ['style-loader', 'css-loader'] },
            { test: /\.(jpg|jpeg|png|gif)$/, use: 'url-loader?limit=4021&[hash:8]-name=[name].[ext]' },
            // limit 给的的值，是图片的大小，单位是 byte，如果我们引用的图片大于或者等于给定的值，则不会被转为 base64格式的字符串，如果图片小于给定的 limit 值，则会被转为 base64的字符串
            // 第二个属性 name 可以让名字不变，因为不设置，那么名字就是hash值，但是约定为和原始名字一样的话，若是两个文件夹下有两张不一样的同名图片，那么就会从出错，因为解析到内存中的图片名字都一样时，后面的那一张会覆盖前一张
            { test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader' },  // 处理字体文件的 loader
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
            { test: /\.vue$/, use: 'vue-loader' },
            { test: /\.scss/,use: ['style-loader', 'css-loader', 'sass-loader'] }
        ]
    }

}