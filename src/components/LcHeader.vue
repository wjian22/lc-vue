<template>
	
	<!-- 头部 -->
	<div class="header">
		<a href="index.html">logo</a>
		<!-- 右边 -->
		<div>
			<!-- <a href="javascript:;" class="login-btn">登录</a> -->
			<router-link to="/login">登录</router-link>
			<a href="javascript:;" class="welcome">欢迎，xiaohua</a>
			
			<a href="register.html" class="register-btn">注册</a>
			<a href="javascript:;" class="loginout">退出</a>
			
			<a href="javascript:;" class="cart-btn">购物车</a>
		</div>
	</div>
	
</template>

<script>
	
	
</script>

<style scoped lang="less">
	/* 头部 */
	.header{
		width:1000px;
		height: 50px;
		background: #333;
		margin: 0px auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 20px;
	}
	.header a{
		color: white;
		margin: 0px 10px;
	}
	.header a:hover{
		color: orange;
	}
	
</style>