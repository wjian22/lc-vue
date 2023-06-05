// 专门用来数据请求, 只有这个里面才会用axios了
import axios from 'axios'
import Qs from 'qs'
// 设置默认基础路径
axios.defaults.baseURL = 'http://159.75.89.136:3000'

let wjAPI = {
	// 热门 分类 详情数据 只是地址和参数不同
	// 导航分类 
	// 轮播
	async getCatGoodsBannerData(url, data = {}){ //函数参数的默认值
		// console.log('调用了getCatGoodsBannerData');
		//真正做事件,发起ajax请求
		let res = await axios.get(url, {params : data});
		// console.log(res);
		if(res.data.code != 0){
			console.log('getCatGoodsBannerData请求错误');
			console.log(res);
			return;
		};
		// 把数据返回去 res.data.data; [{}, {}] 是一个promise
		return res.data.data;
	},
	
	
	
	
};

export default wjAPI;