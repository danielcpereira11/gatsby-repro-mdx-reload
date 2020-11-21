// /**
//  * Implement Gatsby's Node APIs in this file.
//  *
//  * See: https://www.gatsbyjs.org/docs/node-apis/
//  */

// // You can delete this file if you're not using it

const path = require("path")
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@components": path.resolve(__dirname, "src/components"),
        "@images": path.resolve(__dirname, "src/images"),
        "@pages": path.resolve(__dirname, "src/pages"),
        "@templates": path.resolve(__dirname, "src/templates"),
        "@styles": path.resolve(__dirname, "src/styles"),
        "@layouts": path.resolve(__dirname, "src/layouts"),
        "@configs": path.resolve(__dirname, "src/configs"),
      },
    },
  })
}
