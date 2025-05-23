module.exports = {
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
