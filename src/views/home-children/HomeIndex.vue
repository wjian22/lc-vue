<template>
	<div class="home-index">
		
		<!-- 轮播图 -->
		<!-- 调用轮播组件 -->
		<wj-swipe :autoplay="2000" :banner-list="bannerList" :speed="300" :width="1000" :image-width-height="{width:1000, height : 475}"></wj-swipe>

		<!-- 人气良品 -->
		<div class="hot">
			<h1 class="hot-title">人气良品</h1>
			<ul class="hot-list">
				<li @click="toProductH(item.goods_id)" v-for="item in hotList" :key="item.goods_id">
					<img :src="item.goods_thumb">
					<p>{{item.goods_name}}</p>
					<p>{{item.price}}</p>
					<p>{{item.goods_desc}}</p>
					<p>{{item.goods_star}}</p>
					<p>{{item.goods_brand}}</p>
				</li>
			</ul>
			
			<!-- 更多按钮 -->
			<div class="more" @click="onMoreHandler">MORE</div>
		
		</div>
		
	</div>
</template>

<script>
	
	// import WjSwipe from '../../components/banner/WjSwipe.vue'
	
	export default {
		data(){
			return {
				bannerList : [],
				hotList : [],
				// 点击more的当前页
				nowPage : 1,
				// more 开关
				more : false
			}
		},
		
		// components : {
		// 	WjSwipe
		// },
		
		async created(){
			
			this.hotList = await this.wjAPI.getCatGoodsBannerData('/api_goods',{pagesize : 3, page : 1});
			
			this.bannerList = await this.wjAPI.getCatGoodsBannerData('/api_banner',{bannerId : 1});

			console.log(this.bannerList)
			
		},
		
		methods : {
			
			// 点击热门商品的方法
			toProductH(id){
				// 路由编程式跳转
				this.$router.push({'path' : '/home/product', query : {goodsId : id}});
			},
			
			// 点击more
			async onMoreHandler(){
				//节流
				if(this.more){return};			
				this.nowPage++;
				this.more = true;
				// this.getHotData(this.nowPage);
				let res = await this.wjAPI.getCatGoodsBannerData('/api_goods',{pagesize : 3, page : this.nowPage});
				//请求成功			
				this.hotList = [...this.hotList, ...res];
				this.more = false;
			},
			
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
	.more{
		width:130px;
		height: 40px;
		color: white;
		text-align: center;
		font-size: 20px;
		line-height: 40px;
		background: #333;
		margin: 50px auto;
		cursor: pointer;
		border-radius: 8px;
		font-weight: bold;
	}

</style>