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
                orderNo: 'ORDER20230628001',
                fuzhuangmingcheng: '时尚休闲外套',
                fuzhuangImage: 'https://picsum.photos/300/300?random=12',
                status: 1,
                totalPrice: 300,
                zujietype: '1',
                addtime: '2023-06-28 10:00:00'
            },
            {
                id: 2,
                orderNo: 'ORDER20230627002',
                fuzhuangmingcheng: '优雅连衣裙',
                fuzhuangImage: 'https://picsum.photos/300/300?random=13',
                status: 2,
                totalPrice: 450,
                zujietype: '1',
                addtime: '2023-06-27 15:30:00'
            },
            {
                id: 3,
                orderNo: 'ORDER20230626003',
                fuzhuangmingcheng: '儿童卡通T恤',
                fuzhuangImage: 'https://picsum.photos/300/300?random=14',
                status: 3,
                totalPrice: 150,
                zujietype: '1',
                addtime: '2023-06-26 09:15:00'
            },
            {
                id: 4,
                orderNo: 'ORDER20230625004',
                fuzhuangmingcheng: '运动套装',
                fuzhuangImage: 'https://picsum.photos/300/300?random=15',
                status: 1,
                totalPrice: 240,
                zujietype: '1',
                addtime: '2023-06-25 14:20:00'
            }
        ],
        activeStatus: 0 // 0: 全部, 1: 待支付, 2: 待发货, 3: 已完成
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
        // 触发API请求
        this.loadOrderList()
    },
    
    // 加载订单列表
    loadOrderList() {
        const that = this
        const activeStatus = this.data.activeStatus
        console.log('开始加载订单列表数据，状态:', activeStatus)
        
        // 构建请求参数
        const params = { page: 1, limit: 10 }
        if (activeStatus > 0) {
            params.status = activeStatus
        }
        
        // 真实API调用
        orderApi.getList(params)
            .then(res => {
                console.log('加载订单列表成功:', res)
                // 确保数据结构正确
                if (res.data && res.data.data && res.data.data.list) {
                    that.setData({
                        orderList: res.data.data.list || []
                    })
                } else if (res.data && res.data.list) {
                    // 兼容不同的数据格式
                    that.setData({
                        orderList: res.data.list || []
                    })
                } else {
                    that.setData({
                        orderList: []
                    })
                }
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
    
    // 选择订单状态
    selectStatus(e) {
        const status = parseInt(e.currentTarget.dataset.status)
        this.setData({
            activeStatus: status
        })
        this.loadOrderList()
        console.log('选择订单状态', status)
    },
    
    // 跳转到支付页面
    goPay(e) {
        const id = e.currentTarget.dataset.id
        wx.showToast({
            title: '支付功能开发中',
            icon: 'none',
            duration: 2000
        })
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