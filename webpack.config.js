
const path = require("path");
 
module.exports = {
 
  // Entry point that indicates where
  // webpack starts bundling
  entry: "./src/index.js",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // checks for .js or .jsx files
        exclude: /(node_modules)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] },
      },
      {
        test: /\.s[ac]ss$/i, // checks for .scss files
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        // files will be emitted to the output directory and their paths will be injected into the bundles
        test: /\.(png|jp(e*)g|svg|gif)$/,
        type: 'asset/resource'
      },
    ],
  },
 
  // Options for resolving module requests
 // extensions that are used
  resolve: { extensions: ["*", ".js", ".jsx"] },
 
  // Output point is where webpack should
  // output the bundles and assets
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/",
    filename: "bundle.js",
  },
};