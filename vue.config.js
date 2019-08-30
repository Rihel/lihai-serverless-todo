require('dotenv').config()
const appJson = require('./app.json')
const env = process.env
const outputDir = `app${appJson.appKey}`
const ossPath = `http://serverless-platform.deepexi.top/applications/${outputDir}`
module.exports = {
  // 打包资源路径应修改为oss上的东西
  publicPath: env.NODE_ENV === 'production' ? ossPath : '/',
  // 打包文件夹名  dist+物料hash
  outputDir
}
