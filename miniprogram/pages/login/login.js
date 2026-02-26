// pages/login/login.js
const app = getApp()
const { userApi } = require('../../services/api')

Page({
  data: {
    formData: {
      username: '',
      password: '',
      captcha: ''
    },
    captchaUrl: ''
  },
  
  onLoad: function() {
    // 初始化验证码
    this.refreshCaptcha()
  },
  
  // 输入处理
  onInput: function(e) {
    const field = e.currentTarget.dataset.field
    const value = e.detail.value
    this.setData({
      [`formData.${field}`]: value
    })
  },
  
  // 刷新验证码
  refreshCaptcha: function() {
    // 这里需要根据实际情况生成验证码URL
    // 暂时使用占位符
    this.setData({
      captchaUrl: `https://picsum.photos/180/80?random=${Math.random()}`
    })
  },
  
  // 登录
  login: function(e) {
    const that = this
    const { username, password, captcha } = this.data.formData
    
    // 表单验证
    if (!username || !password) {
      wx.showToast({
        title: '请输入用户名和密码',
        icon: 'none',
        duration: 2000
      })
      return
    }
    
    // 显示加载提示
    wx.showLoading({
      title: '登录中...',
      mask: true
    })
    
    // 调用登录API
    userApi.login({
      username: username,
      password: password,
      captcha: captcha
    })
    .then(res => {
      // 登录成功
      wx.hideLoading()
      
      // 保存登录状态
      app.login(res.data.userinfo, res.data.token)
      
      // 跳转到首页
      wx.switchTab({
        url: '/pages/index/index'
      })
    })
    .catch(err => {
      // 登录失败
      wx.hideLoading()
      
      // 刷新验证码
      that.refreshCaptcha()
    })
  }
})