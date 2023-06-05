<template>
	<!-- 分类商品 -->
	<div class="hot">
		<h1 class="hot-title">分类良品</h1>
		<ul class="hot-list">
			<li>
				<img src="../../assets/img/283895.jpg" alt="">
				<p>商品名称</p>
				<p>价格</p>
				<p>描述</p>
				<p>点赞</p>
				<p>品牌</p>
			</li>
		</ul>		
		<!-- 分页器 -->
		<div class="pagination"></div>		
	</div>
</template>

<script>
	export default {
		
		created(){
			// 获取当前分类数据
			this.nowCatId = this.$route.catId;
		},
		
		data(){
			return {
				nowCatId : 0
			}
		}

	}
</script>

<style scoped>
	
	/* 热闹商品 */
	.hot{
		width:1000px;
		margin: 50px auto;
		/* 不能定死高度，自动高度 */
		/* border: 1px solid #999; */
	}
	.hot-title{
		text-align: center;
		font-size: 13px;
		color: #666;
		border-bottom: 1px solid #999;
		line-height: 36px;
		font-weight: normal;
		margin-bottom: 30px;
	}
	.hot-list{
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}
	.hot-list>li{
		width:316px;
		margin-bottom: 20px;
		background-color: #e1e1e1;
	}
	.hot-list>li img{
		width:100%;
		height: 316px;
	}
	
	/* 分頁的样式 */
	.pagination{
		margin: 30px 0px;
		display: flex;
		justify-content: flex-end
	}
	.pagination>a, .pagination>span{
		text-decoration: none;
		cursor: pointer;
		font-weight: bold;
		border-radius: 6px;
		padding: 2px 8px;
		margin: 0px 5px;
		background-color: #333;
		text-align: center;
		line-height: 20px;
		font-size: 12px;
		color: white;
		list-style: none;
		user-select: none;
	}
	.pagination>a:hover, .pagination>span:hover{
		background-color: orangered;
	}
	.pagination .a{
		background-color: orangered;
	}
	
	.jump-ipt{
		width:40px;
		outline: none;
		border-radius: 5px;
		border: 1px solid #333;
		text-align: center;
	}
	
</style>