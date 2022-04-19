const path = require("path");
// const entryPath = `./${entryPath}/js/app.js`;

module.exports = {
    entry: `./js/app.js`,
    output: {
        filename: "out.js",
        path: path.resolve(__dirname, `build`),
        // path: path.resolve(__dirname, `${entryPath}/build`),
    },
    devServer: {
        contentBase: path.join(__dirname),
        // contentBase: path.join(__dirname, `${entryPath}`),
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
