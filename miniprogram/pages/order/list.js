// pages/order/list.js
const { orderApi } = require('../../services/api')
Page({

    /**
     * 页面的初始数据
     */
    data: {
        orderList: [
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
            },
            {
                id: 3,
                fuzhuangmingcheng: '儿童卡通T恤',
                status: 2,
                totalPrice: 150,
                zujietype: '1',
                addtime: '2023-06-26 09:15:00'
            }
        ],
        activeTab: 0 // 0: 全部, 1: 待支付, 2: 待发货, 3: 已完成
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        console.log('订单列表onLoad触发')
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
        console.log('订单列表onShow触发')
        this.initData()
    },
    
    initData() {
        // 直接使用默认数据，确保页面立即显示
        this.setData({
            orderList: this.data.orderList
        })
        console.log('订单列表数据已加载', this.data)
        
        // 触发API请求
        this.loadOrderList()
    },
    
    // 加载订单列表
    loadOrderList() {
        const that = this
        console.log('开始加载订单列表数据')
        
        // 真实API调用
        orderApi.getList({ page: 1, limit: 10 })
            .then(res => {
                console.log('加载订单列表成功:', res)
                that.setData({
                    orderList: res.data.list || that.data.orderList
                })
            })
            .catch(err => {
                console.error('加载订单列表失败:', err)
                // 使用默认数据，确保页面显示
                that.setData({
                    orderList: that.data.orderList
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
    
    // 切换标签页
    switchTab(e) {
        const tabIndex = e.currentTarget.dataset.index
        this.setData({
            activeTab: tabIndex
        })
        console.log('切换订单标签', tabIndex)
    },
    
    // 跳转到订单详情
    goOrderDetail(e) {
        const id = e.currentTarget.dataset.id
        wx.navigateTo({
            url: `/pages/order/detail?id=${id}`
        })
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})