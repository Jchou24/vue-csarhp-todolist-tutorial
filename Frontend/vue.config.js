
// vue.config.js
const webpack = require('webpack')
const path = require('path')

module.exports = {
    // options...
    baseUrl: process.env.NODE_ENV === "production" ? "/wwwroot" : "/",
    configureWebpack: {
        plugins: [    
            // 若要讓所有的vue檔案可以使用jquery，可以反註解下面的code
            // new webpack.ProvidePlugin({        
            //     $:"jquery",            
            //     jQuery:"jquery",                
            //     "windows.jQuery":"jquery"                
            // }),
        ],
    },
}