const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
      port: 8080,
      client: {
          webSocketURL: 'ws://0.0.0.0:8080/ws',
      },
       allowedHosts: 'all',
  },
})
