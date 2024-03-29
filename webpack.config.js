var path = require("path");

module.exports = {
  // entry file - starting point for the app
  entry: "./src",

  // where to dump the output of a production build
  output: {
    path: path.join(__dirname, "build"),
    filename: "bundle.js"
  },

  module: {
    rules: [
      {
        test: /\.jsx?/i,
        loader: "babel-loader",
        resolve: {
          alias: {
            react: "preact/compat",
            "react-dom": "preact/compat",
            // Not necessary unless you consume a module using `createClass`
            "create-react-class": "preact/compat/lib/create-react-class",
            // Not necessary unless you consume a module requiring `react-dom-factories`
            "react-dom-factories": "preact/compat/lib/react-dom-factories"
          }
        },
        options: {
          presets: ["@babel/preset-env"],
          plugins: [["transform-react-jsx", { pragma: "h" }]]
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
      }
    ]
  },

  // enable Source Maps
  devtool: "source-map",

  devServer: {
    // serve up any static files from src/
    contentBase: path.join(__dirname, "src"),

    // enable gzip compression:
    compress: true,

    // enable pushState() routing, as used by preact-router et al:
    historyApiFallback: true
  }
};
