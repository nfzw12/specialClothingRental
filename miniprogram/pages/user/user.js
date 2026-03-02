// pages/user/user.js
const app = getApp()
const { userApi } = require('../../services/api')
Page({

    /**
     * 页面的初始数据
     */
    data: {
        userInfo: {
            nickname: '未登录',
            avatar: 'https://picsum.photos/100/100?random=20',
            phone: '',
            email: ''
        },
        isLogin: false,
        menuList: [
            {
                id: 1,
                name: '我的订单',
                icon: '📋',
                url: '/pages/order/list'
            },
            {
                id: 2,
                name: '租借合同',
                icon: '📄',
                url: '/pages/zujiehetong/zujiehetong'
            },
            {
                id: 3,
                name: '租客保障',
                icon: '🛡️',
                url: '/pages/zukebaozhang/zukebaozhang'
            },
            {
                id: 4,
                name: '联系我们',
                icon: '📞',
                url: ''
            },
            {
                id: 5,
                name: '关于我们',
                icon: 'ℹ️',
                url: ''
            }
        ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        console.log('用户中心onLoad触发')
        this.initData()
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {
        console.log('用户中心onShow触发')
        this.initData()
    },
    
    initData() {
        // 获取全局用户信息
        const globalUserInfo = app.globalData.userInfo
        const isLogin = app.globalData.isLogin
        
        // 使用默认数据或全局用户信息
        this.setData({
            userInfo: globalUserInfo || this.data.userInfo,
            isLogin: isLogin
        })
        console.log('用户中心数据已加载', this.data)
        
        // 如果已登录，触发API请求获取最新用户信息
        if (isLogin) {
            this.loadCurrentUser()
        }
    },
    
    // 加载当前用户信息
    loadCurrentUser() {
        const that = this
        console.log('开始加载当前用户信息')
        
        // 真实API调用
        userApi.getCurrentUser()
            .then(res => {
                console.log('加载当前用户信息成功:', res)
                // 更新全局用户信息
                app.login(res.data.data, app.globalData.token)
                that.setData({
                    userInfo: res.data.data || that.data.userInfo,
                    isLogin: true
                })
            })
            .catch(err => {
                console.error('加载当前用户信息失败:', err)
                // 使用默认数据，确保页面显示
                that.setData({
                    userInfo: that.data.userInfo
                })
            })
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },
    
    // 跳转到登录页
    goLogin() {
        wx.navigateTo({
            url: '/pages/login/login'
        })
    },
    
    // 跳转到订单列表
    goOrderList(e) {
        const status = e.currentTarget.dataset.status || 0
        wx.navigateTo({
            url: `/pages/order/list?status=${status}`
        })
    },
    
    // 跳转到租借合同页面
    goZujiehetong() {
        wx.navigateTo({
            url: '/pages/zujiehetong/zujiehetong'
        })
    },
    
    // 跳转到租客保障页面
    goZukebaozhang() {
        wx.navigateTo({
            url: '/pages/zukebaozhang/zukebaozhang'
        })
    },
    
    // 跳转到设置页面
    goSettings() {
        wx.showToast({
            title: '设置功能开发中',
            icon: 'none',
            duration: 2000
        })
    },
    
    // 跳转到关于我们页面
    goAbout() {
        wx.showToast({
            title: '关于我们功能开发中',
            icon: 'none',
            duration: 2000
        })
    },
    
    // 退出登录
    logout() {
        app.logout()
        this.initData()
        wx.showToast({
            title: '已退出登录',
            icon: 'success',
            duration: 2000
        })
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})