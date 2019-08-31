require('dotenv').config()
const appJson = require('./app.json')
const env = process.env
const ossPath = `http://serverless-platform.deepexi.top/applications/${appJson.appKey}`
module.exports = {
  // 打包资源路径应修改为oss上的东西
  publicPath: env.NODE_ENV === 'production' ? ossPath : '/'
}
