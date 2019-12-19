const webpack=require('webpack')



module.exports={
    entry:['script!jquery/dist/jquery.min.js','script!foundation-sites/dist/foundation.min.js','./app/app.jsx'],
    externals:{
        jquery:'jQuery'

    },
    plugins:[
        new webpack.ProvidePlugin({
            '$':'jquery',
            'jQuery':'jquery'
        })
    ],
    
    
    output:{
        path:__dirname,
        filename:'./public/bundle.js'
    },
    resolve:{
        root:__dirname,
        alias:{
           main:'app/components/main.jsx',
           nav:'app/components/nav.jsx',
           weather:'app/components/weather.jsx',
           about:'app/components/about.jsx',
           examples:'app/components/examples.jsx',
           weatherform:'app/components/weatherform.jsx',
           weathermessage:'app/components/weathermessage.jsx',
           openweatherMap:'app/api/openweatherMap.jsx',
           errorModal:'app/components/errormodal.jsx'
        },
        extensions:['','.js','.jsx']
    },
    module:{
        loaders:[
            {
                loader:'babel-loader',
                query:{
                    presets:['react','es2015']
                },
                test:/\.jsx?$/,
                exclude:/(node_modules|bower_components)/
            }
        ]
    }
}