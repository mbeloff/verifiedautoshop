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
    path: "/services/tyres",
    priority: "0.5"
  },
  {
    path: "/services/air-con",
    priority: "0.5"
  },
  {
    path: "/services/diagnostics",
    priority: "0.5"
  },
  {
    path: "/services/paint-and-panel",
    priority: "0.5"
  },
  {
    path: "/services/auto-electrical",
    priority: "0.5"
  },
  {
    path: "/services/inspections",
    priority: "0.5"
  },
  {
    path: "/services/car-wash",
    priority: "0.5"
  },
  {
    path: "/services/brakes-and-suspensions",
    priority: "0.5"
  },
  {
    path: "/contact",
    priority: "0.6"
  }
];
// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
//   .BundleAnalyzerPlugin;
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
  // chainWebpack: config => {
  //   // ...your other webpack config overrides here

  //   if (process.env.NODE_ENV === "production")
  //     config.plugin("webpack-report").use(BundleAnalyzerPlugin, [
  //       {
  //         // ...webpack-bundle-analyzer options here
  //       }
  //     ]);
  // }
};
