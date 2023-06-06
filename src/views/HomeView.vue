<template>
	<!-- 首页页面 -->
	<div class="home">
		<!-- 调用头部组件 -->
		<lc-header></lc-header>
		
		<!-- 调用导航分类组件 -->
		<lc-nav :cat-list="catList"></lc-nav>
		
		<!-- 子路由出口 -->
		<router-view />
		
		<!-- 调用底部组件 -->
		<lc-footer></lc-footer>
		
	</div>
</template>

<script>
	// 引入子组件
	import LcHeader from '../components/LcHeader.vue'
	import LcNav from '../components/LcNav.vue'
	import LcFooter from '../components/LcFooter.vue'
	
	export default {
		name : 'HomeView',
		components : {
			LcHeader,
			LcNav,
			LcFooter
		},
		
		data(){
			return {
				catList : []
			}
		},
		
		// created : async function(){
		async created(){
			
			this.hello();
			// console.log(this.wjLib);
			//this.getCatData();
			// 异步变同步
			// let res = await this.wjAPI.getCatGoodsBannerData('/api_goods', {page:1, pagesize : 4});
			this.catList = await this.wjAPI.getCatGoodsBannerData('/api_cat');
			
			
		},
		
		methods : {}
	}
	
</script>

<style>
</style>