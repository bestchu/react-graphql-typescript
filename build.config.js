// 配置文档：https://ice.work/docs/guide/develop/plugin-dev
module.exports = {
  router: {
    // 对page启用路由分割
    lazy: true,
  },
  define: {
    env: process.env.NODE_ENV,
  },
  proxy: {
    '/**': {
      'enable': true,
      'target': 'http://127.0.0.1:6001'
    }
  },
  plugins: [
    ['build-plugin-antd', {
      'themeConfig': {
        'primary-color': '#1DA57A'
      }
    }],
  ],
  babelPlugins: ['import-graphql']
}