
const app = getApp()
const { fuzhuangApi, orderApi } = require('../../services/api')

Page({
  data: {
    // 轮播图配置
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 500,
    
    // 轮播图数据
    bannerList: [
      { id: 1, imageUrl: 'https://picsum.photos/750/300?random=1' },
      { id: 2, imageUrl: 'https://picsum.photos/750/300?random=2' },
      { id: 3, imageUrl: 'https://picsum.photos/750/300?random=3' }
    ],
    
    // 分类数据
    categoryList: [
      { id: 1, name: '男装', iconUrl: 'https://picsum.photos/80/80?random=4' },
      { id: 2, name: '女装', iconUrl: 'https://picsum.photos/80/80?random=5' },
      { id: 3, name: '童装', iconUrl: 'https://picsum.photos/80/80?random=6' },
      { id: 4, name: '配饰', iconUrl: 'https://picsum.photos/80/80?random=7' },
      { id: 5, name: '礼服', iconUrl: 'https://picsum.photos/80/80?random=8' },
      { id: 6, name: '运动装', iconUrl: 'https://picsum.photos/80/80?random=9' },
      { id: 7, name: '休闲装', iconUrl: 'https://picsum.photos/80/80?random=10' },
      { id: 8, name: '其他', iconUrl: 'https://picsum.photos/80/80?random=11' }
    ],
    
    // 热门服装数据 - 添加默认数据
    hotFuzhuangList: [
      {
        id: 1,
        fuzhuangmingcheng: '时尚休闲外套',
        tupian: 'https://picsum.photos/300/300?random=12',
        jiage: 100,
        zujietype: '1',
        fuzhuangfenlei: '男装',
        fuzhuangpinpai: '品牌A'
      },
      {
        id: 2,
        fuzhuangmingcheng: '优雅连衣裙',
        tupian: 'https://picsum.photos/300/300?random=13',
        jiage: 150,
        zujietype: '1',
        fuzhuangfenlei: '女装',
        fuzhuangpinpai: '品牌B'
      },
      {
        id: 3,
        fuzhuangmingcheng: '儿童卡通T恤',
        tupian: 'https://picsum.photos/300/300?random=14',
        jiage: 50,
        zujietype: '1',
        fuzhuangfenlei: '童装',
        fuzhuangpinpai: '品牌C'
      }
    ],
    
    // 最新订单数据 - 添加默认数据
    latestOrderList: [
      {
        id: 1,
        fuzhuangmingcheng: '时尚休闲外套',
        status: 0,
        totalPrice: 300,
        zujietype: '1',
        addtime: '2023-06-28 10:00:00'
      },
      {
        id: 2,
        fuzhuangmingcheng: '优雅连衣裙',
        status: 1,
        totalPrice: 450,
        zujietype: '1',
        addtime: '2023-06-27 15:30:00'
      }
    ]
  },
  
  onLoad: function() {
    // 页面初次加载时执行
    console.log('首页onLoad触发')
    this.initData()
  },
  
  onShow: function() {
    // 页面显示时执行，包括tabBar切换
    console.log('首页onShow触发')
    this.initData()
  },
  
  initData: function() {
    // 直接使用默认数据，确保页面立即显示
    this.setData({
      bannerList: this.data.bannerList,
      categoryList: this.data.categoryList,
      hotFuzhuangList: this.data.hotFuzhuangList,
      latestOrderList: this.data.latestOrderList
    })
    console.log('首页数据已加载', this.data)
  },
  
  // 加载热门服装数据
  loadHotFuzhuang: function() {
    const that = this
    
    // 模拟API调用，使用setTimeout模拟网络请求
    setTimeout(() => {
      // 这里可以调用真实API，现在使用默认数据
      console.log('热门服装数据加载完成')
    }, 1000)
    
    // 真实API调用示例（注释掉，防止报错）
    /*
    fuzhuangApi.getList({ page: 1, limit: 5 })
      .then(res => {
        that.setData({
          hotFuzhuangList: res.data.list || that.data.hotFuzhuangList
        })
      })
      .catch(err => {
        console.error('加载热门服装失败:', err)
        // 使用默认数据，确保页面显示
        that.setData({
          hotFuzhuangList: that.data.hotFuzhuangList
        })
      })
    */
  },
  
  // 加载最新订单数据
  loadLatestOrders: function() {
    const that = this
    
    // 模拟API调用，使用setTimeout模拟网络请求
    setTimeout(() => {
      // 这里可以调用真实API，现在使用默认数据
      console.log('最新订单数据加载完成')
    }, 1500)
    
    // 真实API调用示例（注释掉，防止报错）
    /*
    orderApi.getList({ page: 1, limit: 3 })
      .then(res => {
        that.setData({
          latestOrderList: res.data.list || that.data.latestOrderList
        })
      })
      .catch(err => {
        console.error('加载最新订单失败:', err)
        // 订单列表加载失败不影响页面显示，使用默认数据
        that.setData({
          latestOrderList: that.data.latestOrderList
        })
      })
    */
  },
  
  // 跳转到搜索页面
  goSearch: function() {
    wx.showToast({
      title: '搜索功能开发中',
      icon: 'none',
      duration: 2000
    })
    // wx.navigateTo({
    //   url: '/pages/fuzhuang/search'
    // })
  },
  
  // 跳转到轮播图详情
  goBannerDetail: function(e) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/fuzhuang/detail?id=${id}`
    })
  },
  
  // 跳转到分类页面
  goCategory: function(e) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/fuzhuang/list?categoryId=${id}`
    })
  },
  
  // 跳转到服装详情
  goFuzhuangDetail: function(e) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/fuzhuang/detail?id=${id}`
    })
  },
  
  // 跳转到订单详情
  goOrderDetail: function(e) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/order/detail?id=${id}`
    })
  }
})