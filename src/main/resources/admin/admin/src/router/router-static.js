import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import fuzhuangxinxi from '@/views/modules/fuzhuangxinxi/list'
    import zukebaozhangxiufu from '@/views/modules/zukebaozhangxiufu/list'
    import rizujiedingdan from '@/views/modules/rizujiedingdan/list'
    import yonghu from '@/views/modules/yonghu/list'
    import rizujiejiesuan from '@/views/modules/rizujiejiesuan/list'
    import fuzhuangfenlei from '@/views/modules/fuzhuangfenlei/list'
    import yuezujiejiesuan from '@/views/modules/yuezujiejiesuan/list'
    import yuezujiedingdan from '@/views/modules/yuezujiedingdan/list'
    import config from '@/views/modules/config/list'
    import zujiehetong from '@/views/modules/zujiehetong/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '系统首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '系统首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/fuzhuangxinxi',
        name: '服装信息',
        component: fuzhuangxinxi
      }
      ,{
	path: '/zukebaozhangxiufu',
        name: '租客保障修复',
        component: zukebaozhangxiufu
      }
      ,{
	path: '/rizujiedingdan',
        name: '日租借订单',
        component: rizujiedingdan
      }
      ,{
	path: '/yonghu',
        name: '用户',
        component: yonghu
      }
      ,{
	path: '/rizujiejiesuan',
        name: '日租借结算',
        component: rizujiejiesuan
      }
      ,{
	path: '/fuzhuangfenlei',
        name: '服装分类',
        component: fuzhuangfenlei
      }
      ,{
	path: '/yuezujiejiesuan',
        name: '月租借结算',
        component: yuezujiejiesuan
      }
      ,{
	path: '/yuezujiedingdan',
        name: '月租借订单',
        component: yuezujiedingdan
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
      ,{
	path: '/zujiehetong',
        name: '租借合同',
        component: zujiehetong
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '系统首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
export default router;
