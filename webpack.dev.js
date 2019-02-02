const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // https://webpack.js.org/concepts/entry-points/#multi-page-application
  entry: {
    index: "./src/page-index/index.js",
    contact: "./src/page-contact/contact.js",
    biography: "./src/page-biography/biography.js"
  },

  // https://webpack.js.org/configuration/dev-server/
  devServer: {
    port: 3000
  },

  // https://webpack.js.org/concepts/loaders/
  module: {
    rules: [
      // {
      //   test: /\.(html)$/,
      //   use: {
      //     loader: "html-loader",
      //     options: {
      //       root: path.resolve(__dirname, "src")
      //     }
      //   }
      // },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        // Load all images as base64 encoding if they are smaller than 8192 bytes
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              // On development we want to see where the file is coming from, hence we preserve the [path]
              name: "[path][name].[ext]?hash=[hash:20]",
              limit: 8192
            }
          }
        ]
      }
    ]
  },

  // https://webpack.js.org/concepts/plugins/
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/page-index/index.html",
      inject: true,
      chunks: ["index"],
      filename: "index.html"
    }),
    new HtmlWebpackPlugin({
      template: "./src/page-contact/contact.html",
      inject: true,
      chunks: ["contact"],
      filename: "contact.html"
    }),
    new HtmlWebpackPlugin({
      template: "./src/page-biography/biography.html",
      inject: true,
      chunks: ["biography"],
      filename: "biography.html"
    })
  ]
};
