const ImageminWebpWebpackPlugin = require("imagemin-webp-webpack-plugin");
module.exports = {
  configureWebpack: {
    plugins: [
      new ImageminWebpWebpackPlugin({
        config: [
          {
            test: /\.(jpe?g|png)/,
            options: {
              quality: 80
            }
          }
        ],
        overrideExtension: true,
        detailedLogs: false,
        silent: false,
        strict: true
      })
    ]
  },
  pages: {
    index: {
      // entry for the page
      entry: "src/main.js",
      // the source template
      template: "public/index.html",
      // output as dist/index.html
      filename: "index.html",
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: "Verified Auto Shop - Quality servicing and repairs"
    }
  }
};
