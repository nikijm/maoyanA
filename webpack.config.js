var path = require("path");
var webpack = require("webpack");
module.exports = {
    //入口
    entry : [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://0.0.0.0:8080',
        'webpack/hot/only-dev-server',
        path.join(__dirname,"js/main.js")

    ],

    //输出
    output : {
        path : path.join(__dirname,"dist"),
        filename : "[name].bundle.js"
    },

    module : {
        rules: [
          {
            test: /\.js$/,
            use: [
              'babel-loader',
            ],
            exclude: /node_modules/
          },
          {
            test: /\.css$/,
            use: [
              'style-loader',
              'css-loader'
            ],
          },
        ]
    },
    devServer: {
        hot: true,
        contentBase: path.join(__dirname, 'dist'),
        host:'0.0.0.0',
        proxy: [
          {
            context: ['/maoyan/**','/users/**', '/filmManage/**', '/cinemaManage/**', '/matchManage/**', '/hotPlay/**', '/seat/**', '/hall/**'],
            target: 'http://127.0.0.1:3000',
            secure: false
          },
            {
            context: ['/getSession', '/Logout'],
            target: 'http://127.0.0.1:3000',
            secure: false
          }
        ]
    },
    devtool:"cheap-module-source-map",
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ]
}
