const path = require("path");
// const entryPath = "01_Dzien_1/01_Podstawy_zdarzen/01_Zadanie_1";
// const entryPath = "01_Dzien_1/01_Implementacja/01_Implementacja_Redux";
// const entryPath = "02_Dzien_2-3/01_Combine_Reducers/01_Aplikacja_bankowa";
// const entryPath = "03_Dzien_4/01_Komponenty/01_Zadanie_1";
// const entryPath = "04_Dzien_5-7/01_Zadania_podsumowujace/01_Zadanie";
// const entryPath = "05_Dzien_8/01_Polaczenie_z_React/01_Zadanie";
// const entryPath = "06_Dzien_9-10/01_Asynchronicznosc/01_Zadanie";
const entryPath = "08_Dzien_12-14/01_Zadania_podsumowujace/01_Zadanie";

module.exports = {
    entry: `./${entryPath}/js/app.js`,
    output: {
        filename: "out.js",
        path: path.resolve(__dirname, `${entryPath}/build`),
    },
    devServer: {
        contentBase: path.join(__dirname, `${entryPath}`),
        publicPath: "/build/",
        compress: true,
        port: 3001,
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
