// const ImageminWebpWebpackPlugin = require("imagemin-webp-webpack-plugin");
const SitemapPlugin = require("sitemap-webpack-plugin").default;
const paths = [
  {
    path: "/",
    priority: "0.8"
  },
  {
    path: "/quote"
  },
  {
    path: "/locations",
    priority: "0.6"
  },
  {
    path: "/services",
    priority: "0.7"
  },
  {
    path: "/contact",
    priority: "0.6"
  }
];
module.exports = {
  configureWebpack: {
    plugins: [
      // new ImageminWebpWebpackPlugin({
      //   config: [
      //     {
      //       test: /\.(jpe?g|png)/,
      //       options: {
      //         quality: 80
      //       }
      //     }
      //   ],
      //   overrideExtension: true,
      //   detailedLogs: false,
      //   silent: false,
      //   strict: true
      // }),
      new SitemapPlugin("https://verifiedautoshop.com", paths, {
        lastmod: true,
        changefreq: "monthly",
        priority: "0.5"
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
