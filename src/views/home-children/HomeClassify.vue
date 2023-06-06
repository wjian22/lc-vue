<template>
	<!-- 分类商品 -->
	<div class="hot">
		<h1 class="hot-title">分类良品</h1>
		<ul class="hot-list">
			<li @click="toProduct(item.goods_id)" v-for="item in goodsList" :key="item.goods_id">
				<img :src="item.goods_thumb" alt="">
				<p>{{item.goods_name}}</p>
				<p>{{item.price}}</p>
				<p>{{item.goods_desc}}</p>
				<p>{{item.goods_star}}</p>
				<p>{{item.goods_brand}}</p>
			</li>
		</ul>
		
		<!-- 分页器 -->
		<div class="pagination">
			
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				goodsList : [],
				pagesize : 3,
				nowPage : 1
			}
		},
		
		async created(){
			this.goodsList = await this.wjAPI.getCatGoodsBannerData('/api_goods', {
				catId : this.$route.query.catId,
				pagesize : this.pagesize,
				page : this.nowPage
			});
			 
			 console.log(this.goodsList);
		},
		
		methods : {
			toProduct(id){
				this.$router.push({path : '/home/product', query : {goodsId : id}})
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