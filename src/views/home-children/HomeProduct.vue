<template>
	<!-- 商品详情 -->
	<div class="product">
		<div class="banner">
			<img v-for="item in goods.banner" :src="item" :key="item"/>
		</div>
		<p class="goods-name">{{goods.goods_name}}</p>
		<p class="goods-price">{{goods.price}}</p>
		
		<!-- 加车 -->
		<div class="btn-content">
			<span class="reduce" @click="reduceAdd('reduce')">-</span>
			<input type="text" class="num" v-model="goods.goods_number" />
			<span class="add" @click="reduceAdd('add')">+</span>
		</div>
		<input type="button" class="add-cart" value="加入购物车"/>
		<input type="button" class="now-buy" value="立即购买"/>
		
		<div class="desc">
			<img v-for="item in goods.product_banner" :src="item" :key="item"/>
		</div>
	</div>

</template>

<script>
	export default {
		data(){
			return {
				goods : {}
			}
		},
		
		async created() {
			let res = await this.wjAPI.getCatGoodsBannerData('/api_goods', {goodsId : this.$route.query.goodsId});
			this.goods = res[0];
			// 数据结构整理
			this.goods.banner.forEach((item, index) => {
				this.goods.banner[index] = item.replace("url('", '').replace("')", '');
			});
			console.log(this.goods);
		},
		
		methods : {
			
			reduceAdd(val){
				if(val == 'reduce'){
					this.goods.goods_number--;
					this.goods.goods_number = this.goods.goods_number <= 1 ? 1 : this.goods.goods_number;
				}else if(val == 'add'){
					this.goods.goods_number++;
										this.goods.goods_number = this.goods.goods_number >= 10 ? 10 : this.goods.goods_number;
				};
				
			}
		}
		
	}
</script>

<style scoped>
	.product{
		width:1000px;
		margin: 0px auto;
		border: 1px solid #999;
	}
	.banner{
		display: flex;
	}
	.banner img{
		width:100px;
	}
	.desc img{
		width:70%;
	}
	.number-content{
		display: flex;
		margin: 20px;
	}
	.reduce, .add{
		padding: 3px 10px;
		background: #999;
		cursor: pointer;
		user-select: none;
	}
	.num{
		width:40px;
		height: 24px;
		text-align: center;
		outline: none;
		margin: 0 10px;
	}
	
	.desc img{
		width:1000px;
	}

</style>