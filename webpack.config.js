const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    mode: 'development',
    entry: {
        doc: './index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js'
    },

    module: {
        rules: [{
            test: /\.s?css$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: ["css-loader", "sass-loader"]
            })
        }]
    },
    plugins: [
        new ExtractTextPlugin({
            'filename': '[hash].css'
        }),
    ]

};
