<template>
	<!-- 轮播 -->
	<div class="banner" :style="{width : width+'px', height : setBannerHeight + 'px'}" @mouseover="mouseOver" @mouseout="mouseOut">
		<ul 
		 @transitionend="transitionEnd" 
		 :style="{
			 width : setListWidth + 'px', 
			 transform : `translateX(${-index * width}px)`,
			 transition : typeof transition == 'number' ? transition/1000 + 's' : transition
		 }"
		 >
		 
			<li v-for="item in setBannerList" :key="item.goods_id">
				<router-link :to="{path : '/home/product', query : {goodsId : item.goods_id}}">
					<img :src="item.goods_thumb">
				</router-link>
			</li>
			
		</ul>	
		
		
	
	</div>
	
</template>

<script>
	
	export default {
		name : 'WjSwipe',
		props : {
			bannerList : Array,
			width : Number,
			imageWidthHeight : Object,
			speed : {
				type : Number,
				default : 300
			},
			autoplay : Number
		},
		
		data(){
			return {
				bannerListChild : [],
				index : 1,
				transition : this.speed,
				timer : null
			};
		},
		
		computed : {
			setBannerList(){
				this.bannerListChild = this.bannerList.length == 0 ? [] : [this.bannerList[this.bannerList.length - 1], ...this.bannerList, this.bannerList[0]];
				return this.bannerListChild;
			},
			
			setBannerHeight(){
				return this.imageWidthHeight.height / this.imageWidthHeight.width * this.width;
			},
			
			setListWidth(){
				return this.bannerListChild.length * this.width;
			},
		},
		
		mounted(){	
			
			if(this.autoplay){
				this.autoP();
			};
		},
		
		methods : {
			// 自动播放方法
			autoP(){
				// 自动播放
				this.timer = setInterval(() => {
					// 加上过度动画
					this.transition = this.speed;
					this.index++;
				}, this.autoplay + this.speed);
			},
			
			// 鼠标移出
			mouseOut(){
				if(this.autoplay){
					this.autoP();
				};
			},
			
			//鼠标移入
			mouseOver(){
				if(this.autoplay){
					clearInterval(this.timer);
				};
			},
			
			transitionEnd(){
				console.log(this.index);
				if(this.index >= this.bannerListChild.length - 1){
					// 去掉过渡
					this.transition = 'none';
					this.index = 0;
				}
			},
		}
		
	}
	
</script>

<style scoped lang="less">
/* 轮播 */
.banner{
	// 要动态设置
	// width:1000px;
	// height: 475px;
	margin: 0px auto;
	position: relative;
	overflow: hidden;
	
	ul{
		// width动态设置
		// width:???
		height: 100%;
		position: absolute;
		left: 0px;
		top: 0px;
		// transition: 0.3s;
		// transform: translateX(-1000px);
		display: flex;
		
		li{
			height: 100%;		
			img{
				width:100%;
				height: 100%;
			}
		}
		
	}
	
	
	
}
 
</style>