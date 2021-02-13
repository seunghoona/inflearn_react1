const refreshWebPackPlugin  = require('@pmmmwh/react-refresh-webpack-plugin')
const path = require("path");
module.exports = {
    mode:'development',
    devtool: 'eval',
    resolve:{
        extensions :['.jsx','.js']
    },
    entry :{
        app : './client',
    },
    module : {
        rules :[{
            test:/\.jsx?$/,
            loader : 'babel-loader',
            options: {
                presets:[
                    ['@babel/preset-env',{
                    targets:{
                        browsers:['last 2 chrome versions']
                    }
                    }],
                    '@babel/preset-react'
                ],
                plugins:[
                    '@babel/plugin-proposal-class-properties',
                    'react-refresh/babel',
                ]
            },
        }],
    },
    plugins: [
        new refreshWebPackPlugin()
    ],
    output : {
        filename : 'app.js',
        path     : path.join(__dirname,'dist'),
    },
    //변경점을 감지해서 수정된 내용을 적용해준다.
    devServer : {
      publicPath :'/dist/',
        hot:true,
    },
}