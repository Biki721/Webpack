const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

// import path from 'path'
// export default {}
module.exports = {
    entry: "./src/index.js",
    module: {
        rules:[
            {
                test:  /\.svg$/,
                loader: "svg-inline-loader", 
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(js)$/,
                use: "babel-loader",
            },

        ]
    },

    output: {
        filename : 'bundle.js',
        path : path.resolve(__dirname,'dist')
    },

    plugins: [
        new HtmlWebpackPlugin(), // No template specified
    ],

    mode : process.env.NODE_ENV === "production" ? "production" : "development" 

}