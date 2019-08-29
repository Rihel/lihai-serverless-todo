// const metaJson = require('./meta.json')
const appJson = require('./app.json')
const outputDir = `app${appJson.appKey}`
const ossPath = `http://serverless-platform.deepexi.top/applications/${outputDir}`
module.exports = {
  // 打包资源路径应修改为oss上的东西
  publicPath: process.env.NODE_ENV === 'production' ? ossPath : '/',
  // 打包文件夹名  dist+物料hash
  outputDir
}
