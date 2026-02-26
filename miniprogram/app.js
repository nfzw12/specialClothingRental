//app.js
App({
  onLaunch: function () {
    // 读取本地存储的用户信息和token
    const userInfo = wx.getStorageSync('userInfo')
    const token = wx.getStorageSync('token')
    
    // 设置全局数据
    this.globalData.userInfo = userInfo
    this.globalData.token = token
    this.globalData.isLogin = !!token
    
    // 暂时注释掉token检查，避免网络请求导致的问题
    /*
    // 检查token是否有效
    if (token) {
      this.checkToken()
    }
    */
  },
  
  // 检查token有效性
  checkToken: function() {
    const that = this
    wx.request({
      url: `${that.globalData.baseURL}/yonghu/session`,
      method: 'GET',
      header: {
        'token': that.globalData.token
      },
      success: function(res) {
        if (res.data.code !== 0) {
          // token无效，清除本地存储
          that.logout()
        }
      },
      fail: function() {
        // 请求失败，清除本地存储
        that.logout()
      }
    })
  },
  
  // 登录
  login: function(userInfo, token) {
    this.globalData.userInfo = userInfo
    this.globalData.token = token
    this.globalData.isLogin = true
    
    // 保存到本地存储
    wx.setStorageSync('userInfo', userInfo)
    wx.setStorageSync('token', token)
  },
  
  // 退出登录
  logout: function() {
    this.globalData.userInfo = null
    this.globalData.token = ''
    this.globalData.isLogin = false
    
    // 清除本地存储
    wx.removeStorageSync('userInfo')
    wx.removeStorageSync('token')
    
    // 不自动跳转到登录页，允许用户在首页进行操作
  },
  
  globalData: {
    userInfo: null,
    token: '',
    isLogin: false,
    baseURL: 'http://localhost:8080/springbooto8ka3'
  }
})