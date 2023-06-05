<template>
	<div class="nav-content">
		<!-- 导航列表 -->
		<ul class="nav">
			<li v-for="item in catList" :key="item.cat_id">
				<!-- <a href="">{{item.cat_name}}</a> -->
				<!-- <a href="">{{item.cat_name}}</a> -->
				<router-link :to="{path: '/home/classify', query : {catId : item.cat_id}}">{{item.cat_name}}</router-link>
			</li>
		</ul>	
		<div class="search">
			<input type="text" class="keyword"/>
			<input type="button" value="搜索" class="key-btn"/>
		</div>
	</div>
</template>

<script>
	
	export default {
		props : {
			catList : Array
		},
		
	}
	
</script>

<style scoped>
	/* 导航 */
	.nav-content{
		width:1000px;
		height: 40px;
		background: #666;
		margin: 0px auto;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.nav{
		display: flex;
	}
	.nav li{
		margin: 0px 5px;
	}
	.nav li a{
		color: white;
	}
	.nav li a:hover{
		color: orangered;
	}
	.active-nav{
		color: orangered;
	}
</style>