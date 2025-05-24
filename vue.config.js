module.exports = {
  transpileDependencies: ['@dcloudio/uni-ui'],

  devServer: {
    proxy: {
      '/api': {
        target: 'https://tools-api.xuas.cn',
        changeOrigin: true,
      },
    },
    port: 8090,
  },
};
