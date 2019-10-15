const proxy = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    proxy('/api', { //`api`是需要转发的请求 
      target: 'http://m.you.163.com', // 这里是接口服务器地址
      changeOrigin: true,
      pathRewrite: { // 重写路径: 去掉路径中开头的'/api'
        '^/api': ''
      }
    })
  )
}