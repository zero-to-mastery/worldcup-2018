const autoprefixer = require("autoprefixer");

const postCSSConfig = {
  loader: require.resolve("postcss-loader"),
  options: {
    ident: "postcss",
    plugins: () => [
      require("postcss-flexbugs-fixes"),
      autoprefixer({
        browsers: [
          ">1%",
          "last 4 versions",
          "Firefox ESR",
          "not ie < 9" // React doesn't support IE8 anyway
        ],
        flexbox: "no-2009"
      })
    ]
  }
};

const cssLoaderConfig = {
  loader: require.resolve("css-loader"),
  options: {
    importLoaders: 1,
    minimize: true,
    sourceMap: true
  }
};

const cssModulesLoaderConfig = {
  loader: require.resolve("css-loader"),
  options: {
    ...cssLoaderConfig,
    modules: true,
    localIdentName: "[name]__[local]___[hash:base64:5]"
  }
};

module.exports = {
  cssConfig: [require.resolve("style-loader"), cssLoaderConfig, postCSSConfig],
  cssModuleConfig: [
    require.resolve("style-loader"),
    cssModulesLoaderConfig,
    postCSSConfig
  ]
};
