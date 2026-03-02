
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
    // 加载数据
    this.loadHotFuzhuang()
    this.loadLatestOrders()
    this.loadCategories()
  },
  
  // 加载热门服装数据
  loadHotFuzhuang: function() {
    const that = this
    
    // 真实API调用
    fuzhuangApi.getList({ page: 1, limit: 5 })
      .then(res => {
        console.log('加载热门服装成功:', res)
        // 确保数据结构正确
        if (res.data && res.data.data && res.data.data.list) {
          that.setData({
            hotFuzhuangList: res.data.data.list || []
          })
        } else if (res.data && res.data.list) {
          // 兼容不同的数据格式
          that.setData({
            hotFuzhuangList: res.data.list || []
          })
        } else {
          that.setData({
            hotFuzhuangList: []
          })
        }
      })
      .catch(err => {
        console.error('加载热门服装失败:', err)
        // 使用默认数据，确保页面显示
        that.setData({
          hotFuzhuangList: that.data.hotFuzhuangList
        })
      })
  },
  
  // 加载最新订单数据
  loadLatestOrders: function() {
    const that = this
    
    // 真实API调用
    orderApi.getList({ page: 1, limit: 3 })
      .then(res => {
        console.log('加载最新订单成功:', res)
        // 确保数据结构正确
        if (res.data && res.data.data && res.data.data.list) {
          that.setData({
            latestOrderList: res.data.data.list || []
          })
        } else if (res.data && res.data.list) {
          // 兼容不同的数据格式
          that.setData({
            latestOrderList: res.data.list || []
          })
        } else {
          that.setData({
            latestOrderList: []
          })
        }
      })
      .catch(err => {
        console.error('加载最新订单失败:', err)
        // 订单列表加载失败不影响页面显示，使用默认数据
        that.setData({
          latestOrderList: that.data.latestOrderList
        })
      })
  },
  
  // 加载分类数据
  loadCategories: function() {
    const that = this
    
    // 真实API调用
    fuzhuangApi.getCategories()
      .then(res => {
        console.log('加载分类成功:', res)
        // 确保数据结构正确
        if (res.data && res.data.data && res.data.data.list) {
          that.setData({
            categoryList: res.data.data.list || []
          })
        } else if (res.data && res.data.list) {
          // 兼容不同的数据格式
          that.setData({
            categoryList: res.data.list || []
          })
        } else {
          that.setData({
            categoryList: []
          })
        }
      })
      .catch(err => {
        console.error('加载分类失败:', err)
        // 使用默认数据，确保页面显示
        that.setData({
          categoryList: that.data.categoryList
        })
      })
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