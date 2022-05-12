const path = require("path");

module.exports = {
    entry: "./app.js",
    output: {
        filename: "out.js",
        path: path.resolve(__dirname, "build"),
    },
    devServer: {
        contentBase: path.join(__dirname),
        publicPath: "/build/",
        compress: true,
        port: 3003,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
        ],
    },
};
