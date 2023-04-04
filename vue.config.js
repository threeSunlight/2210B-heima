const { defineConfig } = require("@vue/cli-service")
const target = process.env.VUE_APP_MOCK_ENABLE === "true" ? "http://localhost:8090" : process.env.VUE_APP_CONSOLE_URL
console.log(target)
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  // 根目录
  publicPath: "./",
  //打包输出的文件
  outputDir: "dist",
  // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
  assetsDir: "assets",
  // dev环境下，webpack-dev-server 相关配置
  devServer: {
    //开发运行时的端口
    port: 9999,
    // 开发运行时域名，设置成'0.0.0.0',在同一个局域网下，如果你的项目在运行，同时可以通过你的http://ip:port/...访问你的项目
    host: "localhost",
    // 是否启用 https
    https: false,
    // npm run serve 时是否直接打开浏览器
    open: false,
    // 跨域代理的配置proxy
    proxy: {
      [process.env.VUE_APP_BASE_API]: {
        changeOrigin: true, // 配置代理默认开启target方式
        target,
        pathRewrite: {
          ["^" + process.env.VUE_APP_BASE_API]: ""
        }
      }
    }
  }
})
