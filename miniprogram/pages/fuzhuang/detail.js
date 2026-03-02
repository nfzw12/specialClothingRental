// pages/fuzhuang/detail.js
const { fuzhuangApi } = require('../../services/api')

Page({
    /**
     * 页面的初始数据
     */
    data: {
        // 轮播图配置
        indicatorDots: true,
        autoplay: true,
        interval: 3000,
        duration: 500,
        // 选中的购买选项
        selectedOption: 'rizu',
        // 服装详情数据
        fuzhuangDetail: {
            id: '',
            fuzhuangmingcheng: '',
            fuzhuangfenlei: '',
            fuzhuangtupian: '',
            fuzhuangchima: '',
            fuzhuangyanse: '',
            fuzhuangcailiao: '',
            fuzhuangjiage: 0,
            yuanjia: 0,
            kucun: 0,
            fuzhuangjieshao: '',
            rizujin: 0,
            changqirent: 0,
            goumaijia: 0,
            baozhengjin: 0,
            images: []
        },
        // 尺码列表
        sizes: [],
        // 选中的尺码
        selectedSize: '',
        // 购物车商品数量
        cartCount: 0
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        const id = options.id
        if (id) {
            this.loadFuzhuangDetail(id)
        }
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {
        this.updateCartCount();
    },

    /**
     * 更新购物车商品数量
     */
    updateCartCount() {
        const cartList = wx.getStorageSync('cartList') || [];
        const cartCount = cartList.length;
        this.setData({
            cartCount: cartCount
        });
    },

    // 加载服装详情
    loadFuzhuangDetail: function (id) {
        const that = this
        
        // 真实API调用
        fuzhuangApi.getDetail(id)
            .then(res => {
                console.log('加载服装详情成功:', res)
                // 确保数据结构正确
                let data = {}
                if (res.data && res.data.data) {
                    data = res.data.data
                } else if (res.data) {
                    data = res.data
                }
                // 计算价格
                const yuanjia = data.price || 0
                const rizujin = Math.round(yuanjia * 0.04)
                const changqirent = Math.round(yuanjia * 0.03)
                const goumaijia = Math.round(yuanjia * 1.1)
                const baozhengjin = Math.round(yuanjia * 0.9)
                
                // 处理图片数据
                const images = []
                if (data.fuzhuangtupian) {
                    const imgList = data.fuzhuangtupian.split(',')
                    imgList.forEach(img => {
                        if (img) {
                            // 使用HTTP协议访问本地静态资源，因为已经打开了不校验合法域名选项
                            const imgUrl = `http://localhost:8080/springbooto8ka3/${img}`
                            images.push(imgUrl)
                        }
                    })
                }
                
                // 处理尺码数据
                let sizes = [];
                // 直接从res中获取sizes，因为request.js已经处理了响应数据
                if (res.sizes) {
                    sizes = res.sizes;
                }
                console.log('接收到的尺码数据:', sizes);
                
                that.setData({
                    fuzhuangDetail: {
                        ...data,
                        rizujin: rizujin,
                        changqirent: changqirent,
                        goumaijia: goumaijia,
                        baozhengjin: baozhengjin,
                        images: images
                    },
                    sizes: sizes
                })
                
                // 默认选中第一个尺码
                if (sizes.length > 0) {
                    console.log('默认选中的尺码:', sizes[0].size);
                    that.setData({
                        selectedSize: sizes[0].size
                    })
                } else {
                    console.log('没有尺码数据');
                }
            })
            .catch(err => {
                console.error('加载服装详情失败:', err)
                wx.showToast({
                    title: '加载失败',
                    icon: 'none',
                    duration: 2000
                })
            })
    },

    // 联系客服
    contactService: function () {
        wx.showToast({
            title: '客服功能开发中',
            icon: 'none',
            duration: 2000
        })
    },

    // 添加到购物车
    addToCart: function () {
        const { fuzhuangDetail, selectedOption, selectedSize, sizes } = this.data
        
        // 构建购物车商品数据
        const cartItem = {
            id: fuzhuangDetail.id,
            fuzhuangmingcheng: fuzhuangDetail.fuzhuangmingcheng,
            tupian: fuzhuangDetail.images[0] || '',
            option: selectedOption,
            size: selectedSize,
            quantity: 1,
            jiage: selectedOption === 'rizu' ? fuzhuangDetail.rizujin : 
                   selectedOption === 'changqi' ? fuzhuangDetail.changqirent : fuzhuangDetail.goumaijia,
            baozhengjin: fuzhuangDetail.baozhengjin,
            sizes: sizes,
            startDate: this.data.startDate,
            endDate: this.data.endDate
        }
        
        // 从本地存储中获取购物车数据
        const cartList = wx.getStorageSync('cartList') || []
        
        // 检查商品是否已在购物车中
        const existingItemIndex = cartList.findIndex(item => 
            item.id === cartItem.id && 
            item.option === cartItem.option && 
            item.size === cartItem.size &&
            item.startDate === cartItem.startDate &&
            item.endDate === cartItem.endDate
        )
        
        if (existingItemIndex > -1) {
            // 如果商品已存在，增加数量
            cartList[existingItemIndex].quantity++
        } else {
            // 如果商品不存在，添加到购物车
            cartList.push(cartItem)
        }
        
        // 保存到本地存储
        wx.setStorageSync('cartList', cartList)
        
        // 更新购物车数量
        this.updateCartCount();
        
        wx.showToast({
            title: '添加成功',
            icon: 'success',
            duration: 2000
        })
    },

    // 选择购买选项
    selectOption: function (e) {
        const option = e.currentTarget.dataset.option
        this.setData({
            selectedOption: option
        })
    },
    
    // 选择尺码
    selectSize: function (e) {
        const size = e.currentTarget.dataset.size
        this.setData({
            selectedSize: size
        })
    },

    // 立即租借/购买
    goRent: function () {
        const fuzhuangId = this.data.fuzhuangDetail.id
        const option = this.data.selectedOption
        const size = this.data.selectedSize
        const rizujin = this.data.fuzhuangDetail.rizujin
        const changqirent = this.data.fuzhuangDetail.changqirent
        const goumaijia = this.data.fuzhuangDetail.goumaijia
        const baozhengjin = this.data.fuzhuangDetail.baozhengjin
        
        // 校验尺码信息
        if (!size) {
            wx.showToast({
                title: '请选择尺码',
                icon: 'none',
                duration: 2000
            });
            return;
        }
        
        wx.navigateTo({
            url: `/pages/order/create?fuzhuangId=${fuzhuangId}&option=${option}&size=${size}&rizujin=${rizujin}&changqirent=${changqirent}&goumaijia=${goumaijia}&baozhengjin=${baozhengjin}`
        })
    }
})