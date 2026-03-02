// pages/order/detail.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        orderDetail: {
            id: '',
            orderNo: '',
            status: 1,
            statusText: '待支付',
            fuzhuangmingcheng: '',
            fuzhuangImage: '',
            zujietype: '1',
            zujietypeText: '日租',
            quantity: 1,
            rentDays: 1,
            jiage: 0,
            totalPrice: 0,
            baozhengjin: 0,
            contactName: '',
            contactPhone: '',
            contactAddress: '',
            addtime: ''
        }
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        const orderId = options.id || '1';
        this.getOrderDetail(orderId);
    },

    /**
     * 获取订单详情
     */
    getOrderDetail(orderId) {
        // 模拟数据，实际项目中应该调用API获取
        const mockOrderDetail = {
            id: orderId,
            orderNo: '20240228' + orderId.padStart(4, '0'),
            status: 1,
            statusText: '待支付',
            fuzhuangmingcheng: '时尚休闲套装',
            fuzhuangImage: 'https://picsum.photos/300/300?random=' + orderId,
            zujietype: '1',
            zujietypeText: '日租',
            quantity: 1,
            rentDays: 3,
            jiage: 50,
            totalPrice: 150,
            baozhengjin: 200,
            contactName: '张三',
            contactPhone: '13800138000',
            contactAddress: '北京市朝阳区某某街道123号',
            addtime: new Date().toLocaleString()
        };

        this.setData({
            orderDetail: mockOrderDetail
        });
    },

    /**
     * 去支付
     */
    goPay() {
        wx.showToast({
            title: '跳转到支付页面',
            icon: 'none'
        });
    },

    /**
     * 取消订单
     */
    cancelOrder() {
        wx.showModal({
            title: '取消订单',
            content: '确定要取消该订单吗？',
            success: (res) => {
                if (res.confirm) {
                    wx.showToast({
                        title: '订单已取消',
                        icon: 'success'
                    });
                }
            }
        });
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

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})