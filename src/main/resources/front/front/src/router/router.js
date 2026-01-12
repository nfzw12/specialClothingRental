import VueRouter from 'vue-router'

//引入组件
import Index from '../pages'
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import Register from '../pages/register/register'
import Center from '../pages/center/center'
import yonghuList from '../pages/yonghu/list'
import yonghuDetail from '../pages/yonghu/detail'
import yonghuAdd from '../pages/yonghu/add'
import fuzhuangfenleiList from '../pages/fuzhuangfenlei/list'
import fuzhuangfenleiDetail from '../pages/fuzhuangfenlei/detail'
import fuzhuangfenleiAdd from '../pages/fuzhuangfenlei/add'
import fuzhuangxinxiList from '../pages/fuzhuangxinxi/list'
import fuzhuangxinxiDetail from '../pages/fuzhuangxinxi/detail'
import fuzhuangxinxiAdd from '../pages/fuzhuangxinxi/add'
import zujiehetongList from '../pages/zujiehetong/list'
import zujiehetongDetail from '../pages/zujiehetong/detail'
import zujiehetongAdd from '../pages/zujiehetong/add'
import yuezujiedingdanList from '../pages/yuezujiedingdan/list'
import yuezujiedingdanDetail from '../pages/yuezujiedingdan/detail'
import yuezujiedingdanAdd from '../pages/yuezujiedingdan/add'
import rizujiedingdanList from '../pages/rizujiedingdan/list'
import rizujiedingdanDetail from '../pages/rizujiedingdan/detail'
import rizujiedingdanAdd from '../pages/rizujiedingdan/add'
import yuezujiejiesuanList from '../pages/yuezujiejiesuan/list'
import yuezujiejiesuanDetail from '../pages/yuezujiejiesuan/detail'
import yuezujiejiesuanAdd from '../pages/yuezujiejiesuan/add'
import rizujiejiesuanList from '../pages/rizujiejiesuan/list'
import rizujiejiesuanDetail from '../pages/rizujiejiesuan/detail'
import rizujiejiesuanAdd from '../pages/rizujiejiesuan/add'
import zukebaozhangxiufuList from '../pages/zukebaozhangxiufu/list'
import zukebaozhangxiufuDetail from '../pages/zukebaozhangxiufu/detail'
import zukebaozhangxiufuAdd from '../pages/zukebaozhangxiufu/add'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

//配置路由
export default new VueRouter({
	routes:[
		{
      path: '/',
      redirect: '/index/home'
    },
		{
			path: '/index',
			component: Index,
			children:[
				{
					path: 'home',
					component: Home
				},
				{
					path: 'center',
					component: Center,
				},
				{
					path: 'yonghu',
					component: yonghuList
				},
				{
					path: 'yonghuDetail',
					component: yonghuDetail
				},
				{
					path: 'yonghuAdd',
					component: yonghuAdd
				},
				{
					path: 'fuzhuangfenlei',
					component: fuzhuangfenleiList
				},
				{
					path: 'fuzhuangfenleiDetail',
					component: fuzhuangfenleiDetail
				},
				{
					path: 'fuzhuangfenleiAdd',
					component: fuzhuangfenleiAdd
				},
				{
					path: 'fuzhuangxinxi',
					component: fuzhuangxinxiList
				},
				{
					path: 'fuzhuangxinxiDetail',
					component: fuzhuangxinxiDetail
				},
				{
					path: 'fuzhuangxinxiAdd',
					component: fuzhuangxinxiAdd
				},
				{
					path: 'zujiehetong',
					component: zujiehetongList
				},
				{
					path: 'zujiehetongDetail',
					component: zujiehetongDetail
				},
				{
					path: 'zujiehetongAdd',
					component: zujiehetongAdd
				},
				{
					path: 'yuezujiedingdan',
					component: yuezujiedingdanList
				},
				{
					path: 'yuezujiedingdanDetail',
					component: yuezujiedingdanDetail
				},
				{
					path: 'yuezujiedingdanAdd',
					component: yuezujiedingdanAdd
				},
				{
					path: 'rizujiedingdan',
					component: rizujiedingdanList
				},
				{
					path: 'rizujiedingdanDetail',
					component: rizujiedingdanDetail
				},
				{
					path: 'rizujiedingdanAdd',
					component: rizujiedingdanAdd
				},
				{
					path: 'yuezujiejiesuan',
					component: yuezujiejiesuanList
				},
				{
					path: 'yuezujiejiesuanDetail',
					component: yuezujiejiesuanDetail
				},
				{
					path: 'yuezujiejiesuanAdd',
					component: yuezujiejiesuanAdd
				},
				{
					path: 'rizujiejiesuan',
					component: rizujiejiesuanList
				},
				{
					path: 'rizujiejiesuanDetail',
					component: rizujiejiesuanDetail
				},
				{
					path: 'rizujiejiesuanAdd',
					component: rizujiejiesuanAdd
				},
				{
					path: 'zukebaozhangxiufu',
					component: zukebaozhangxiufuList
				},
				{
					path: 'zukebaozhangxiufuDetail',
					component: zukebaozhangxiufuDetail
				},
				{
					path: 'zukebaozhangxiufuAdd',
					component: zukebaozhangxiufuAdd
				},
			]
		},
		{
			path: '/login',
			component: Login
		},
		{
			path: '/register',
			component: Register
		},
	]
})
