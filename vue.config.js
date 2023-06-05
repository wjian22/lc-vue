const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
	
	// 设置服务
	devServer : {
		host : 'localhost',
		port : 8081,
		open : true
	}
})
