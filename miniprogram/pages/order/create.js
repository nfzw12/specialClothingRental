// pages/order/create.js
const { fuzhuangApi, orderApi } = require('../../services/api')

Page({
    /**
     * 页面的初始数据
     */
    data: {
        // 服装信息
        fuzhuangInfo: {
            id: '',
            fuzhuangmingcheng: '',
            jiage: 0,
            zujietype: '1',
            fuzhuangfenlei: '',
            fuzhuangpinpai: '',
            tupian: '',
            rizujin: 0,
            changqirent: 0,
            goumaijia: 0,
            baozhengjin: 0
        },
        // 租借信息
        startDate: '',
        endDate: '',
        quantity: 1,
        rentDays: 1,
        totalPrice: 0,
        // 联系人信息
        contactName: '',
        contactPhone: '',
        contactAddress: '',
        // 购物车相关
        cartSelectedItems: [],
        fromCart: false,
        cartTotalQuantity: 0,
        cartTotalDeposit: 0
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        console.log('订单页面onLoad参数:', options)
        const fuzhuangId = options.fuzhuangId
        const option = options.option || 'rizu'
        const size = options.size || ''
        const rizujin = parseFloat(options.rizujin) || 0
        const changqirent = parseFloat(options.changqirent) || 0
        const goumaijia = parseFloat(options.goumaijia) || 0
        const baozhengjin = parseFloat(options.baozhengjin) || 0
        const fromCart = options.fromCart === 'true'
        
        console.log('fromCart参数:', fromCart, '原始值:', options.fromCart)
        
        // 设置默认日期
        const today = new Date()
        const tomorrow = new Date(today)
        tomorrow.setDate(tomorrow.getDate() + 1)
        
        // 先设置 fromCart 等数据，确保在 loadCartItems 调用时 fromCart 已经被设置
        this.setData({
            startDate: this.formatDate(today),
            endDate: this.formatDate(tomorrow),
            selectedOption: option,
            selectedSize: size,
            rizujin: rizujin,
            changqirent: changqirent,
            goumaijia: goumaijia,
            baozhengjin: baozhengjin,
            fromCart: fromCart
        }, () => {
            // 在 setData 回调中调用 loadCartItems，确保 fromCart 已经被设置
            if (fromCart) {
                // 从购物车跳转过来
                console.log('从购物车跳转过来，加载购物车商品')
                this.loadCartItems()
            } else if (fuzhuangId) {
                // 从商品详情页跳转过来
                console.log('从商品详情页跳转过来，加载单个商品信息')
                this.loadFuzhuangInfo(fuzhuangId, option, size, rizujin, changqirent, goumaijia, baozhengjin)
            }
        })
    },

    // 加载购物车商品信息
    loadCartItems: function () {
        const that = this
        let selectedItems = wx.getStorageSync('cartSelectedItems') || []
        
        console.log('加载购物车商品信息 - 从本地存储获取的数据:', selectedItems)
        console.log('购物车商品数量:', selectedItems.length)
        
        if (selectedItems.length === 0) {
            console.log('购物车中没有选中的商品')
            wx.showToast({
                title: '购物车中没有选中的商品',
                icon: 'none',
                duration: 2000
            })
            return
        }
        
        // 展开分组项的子项
        const flatItems = []
        selectedItems.forEach(item => {
            if (item.items && item.items.length > 0) {
                // 如果是分组项，展开所有子项
                item.items.forEach(subItem => {
                    flatItems.push({
                        ...subItem,
                        id: subItem.id,
                        selected: item.selected
                    })
                })
            } else {
                // 如果是普通项，直接添加
                flatItems.push(item)
            }
        })
        
        // 计算购物车总数量和总押金
        const cartTotalQuantity = flatItems.reduce((total, item) => total + item.quantity, 0)
        const cartTotalDeposit = flatItems.reduce((total, item) => {
            return total + ((item.option === 'rizu' || item.option === 'changqi') && item.baozhengjin ? item.baozhengjin : 0)
        }, 0)
        
        // 保存购物车选中的商品信息
        that.setData({
            cartSelectedItems: flatItems,
            cartTotalQuantity: cartTotalQuantity,
            cartTotalDeposit: cartTotalDeposit
        }, () => {
            // 在 setData 回调中计算订单总价，确保 cartSelectedItems 已经被设置
            that.calculateTotalPrice()
        })
    },

    // 加载服装信息
    loadFuzhuangInfo: function (id, option, size, rizujin, changqirent, goumaijia, baozhengjin) {
        const that = this
        
        fuzhuangApi.getDetail(id)
            .then(res => {
                console.log('加载服装信息成功:', res)
                // 确保数据结构正确
                let data = {}
                if (res.data && res.data.data) {
                    data = res.data.data
                } else if (res.data) {
                    data = res.data
                }
                
                // 处理图片数据
                if (data.images && data.images.length > 0) {
                    data.tupian = data.images[0]
                } else if (data.fuzhuangtupian) {
                    const imgList = data.fuzhuangtupian.split(',')
                    if (imgList.length > 0) {
                        data.tupian = `http://localhost:8080/springbooto8ka3/${imgList[0]}`
                    }
                }
                
                // 根据选择的选项设置价格
                if (option === 'rizu') {
                    data.jiage = rizujin || 0
                } else if (option === 'changqi') {
                    data.jiage = changqirent || 0
                } else if (option === 'goumai') {
                    data.jiage = goumaijia || 0
                }
                
                // 设置价格信息
                data.rizujin = rizujin
                data.changqirent = changqirent

                data.goumaijia = goumaijia
                data.baozhengjin = baozhengjin
                
                that.setData({
                    fuzhuangInfo: data
                })
                that.calculateTotalPrice()
            })
            .catch(err => {
                console.error('加载服装信息失败:', err)
                wx.showToast({
                    title: '加载失败',
                    icon: 'none',
                    duration: 2000
                })
            })
    },

    // 格式化日期
    formatDate: function (date) {
        const year = date.getFullYear()
        const month = String(date.getMonth() + 1).padStart(2, '0')
        const day = String(date.getDate()).padStart(2, '0')
        return `${year}-${month}-${day}`
    },

    // 计算天数差
    calculateDays: function (startDate, endDate) {
        const start = new Date(startDate)
        const end = new Date(endDate)
        const diffTime = Math.abs(end - start)
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
        return diffDays + 1 // 包含开始和结束日期
    },

    // 计算订单总价
    calculateTotalPrice: function () {
        const { fuzhuangInfo, quantity, rentDays, selectedOption, cartSelectedItems, fromCart } = this.data
        let total = 0
        
        if (fromCart && cartSelectedItems && cartSelectedItems.length > 0) {
            // 从购物车跳转过来，计算所有选中商品的总价
            cartSelectedItems.forEach(item => {
                // 计算租借天数
                let itemRentDays = 1
                if (item.option === 'rizu' || item.option === 'changqi') {
                    if (item.startDate && item.endDate) {
                        const start = new Date(item.startDate)
                        const end = new Date(item.endDate)
                        if (end > start) {
                            const diffTime = Math.abs(end - start)
                            itemRentDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
                        }
                    }
                }
                
                const itemTotal = item.jiage * item.quantity * itemRentDays
                total += itemTotal
                
                // 如果是租借，添加押金
                if ((item.option === 'rizu' || item.option === 'changqi') && item.baozhengjin) {
                    total += item.baozhengjin
                }
            })
            console.log('购物车订单总价:', total, '商品数量:', cartSelectedItems.length)
        } else {
            // 从商品详情页跳转过来，计算单个商品的总价
            const price = fuzhuangInfo.jiage || 0
            total = price * quantity * rentDays
            
            // 如果是租借，添加押金
            if (selectedOption === 'rizu' || selectedOption === 'changqi') {
                total += fuzhuangInfo.baozhengjin || 0
            }
            console.log('单个商品订单总价:', total)
        }
        
        this.setData({
            totalPrice: total
        })
    },



    // 绑定联系人姓名输入
    bindContactNameInput: function (e) {
        this.setData({
            contactName: e.detail.value
        })
    },

    // 绑定联系人电话输入
    bindContactPhoneInput: function (e) {
        this.setData({
            contactPhone: e.detail.value
        })
    },

    // 绑定联系人地址输入
    bindContactAddressInput: function (e) {
        this.setData({
            contactAddress: e.detail.value
        })
    },

    // 提交订单
    submitOrder: function () {
        const { fuzhuangInfo, startDate, endDate, quantity, contactName, contactPhone, contactAddress, cartSelectedItems, fromCart } = this.data
        
        // 验证表单
        if (!contactName) {
            wx.showToast({ title: '请输入联系人姓名', icon: 'none' })
            return
        }
        if (!contactPhone) {
            wx.showToast({ title: '请输入联系电话', icon: 'none' })
            return
        }
        if (!contactAddress) {
            wx.showToast({ title: '请输入联系地址', icon: 'none' })
            return
        }
        
        if (fromCart && cartSelectedItems && cartSelectedItems.length > 0) {
            // 提交购物车订单
            this.submitCartOrder(contactName, contactPhone, contactAddress)
        } else {
            // 提交单个商品订单
            this.submitSingleOrder(contactName, contactPhone, contactAddress)
        }
    },
    
    // 提交单个商品订单
    submitSingleOrder: function (contactName, contactPhone, contactAddress) {
        const { fuzhuangInfo, startDate, endDate, quantity, selectedOption } = this.data
        
        // 校验租借日期
        if (selectedOption === 'rizu' || selectedOption === 'changqi') {
            const start = new Date(startDate);
            const end = new Date(endDate);
            if (end <= start) {
                wx.showToast({
                    title: '结束日期必须大于开始日期',
                    icon: 'none',
                    duration: 2000
                });
                return;
            }
            
            // 计算租借天数
            const diffTime = Math.abs(end - start);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            
            // 租借周期大于一周（7天）自动变化成长期租赁的价格
            if (diffDays > 7 && selectedOption === 'rizu') {
                wx.showToast({
                    title: '租借周期超过7天，已自动切换为长期租赁',
                    icon: 'none',
                    duration: 2000
                });
                // 重新计算价格
                let yuanjia = fuzhuangInfo.yuanjia || fuzhuangInfo.price || 0;
                if (yuanjia === 0 && fuzhuangInfo.jiage > 0) {
                    yuanjia = fuzhuangInfo.jiage / 0.04;
                }
                fuzhuangInfo.jiage = Math.round(yuanjia * 0.03);
                fuzhuangInfo.zujietype = '2';
                this.setData({
                    fuzhuangInfo: fuzhuangInfo,
                    selectedOption: 'changqi'
                });
                this.calculateTotalPrice();
            }
        }
        
        // 构建订单数据
        const orderData = {
            fuzhuangid: fuzhuangInfo.id,
            fuzhuangmingcheng: fuzhuangInfo.fuzhuangmingcheng,
            jiage: fuzhuangInfo.jiage,
            zujietype: fuzhuangInfo.zujietype,
            starttime: startDate,
            endtime: endDate,
            shuliang: quantity,
            totalprice: this.data.totalPrice,
            contactname: contactName,
            contactphone: contactPhone,
            contactaddress: contactAddress,
            status: 1 // 待支付
        }
        
        // 提交订单
        orderApi.create(orderData)
            .then(res => {
                console.log('提交订单成功:', res)
                wx.showToast({
                    title: '订单创建成功',
                    icon: 'success',
                    duration: 2000
                })
                // 跳转到订单列表
                setTimeout(() => {
                    wx.navigateTo({
                        url: '/pages/order/list'
                    })
                }, 2000)
            })
            .catch(err => {
                console.error('提交订单失败:', err)
                wx.showToast({
                    title: '订单创建失败',
                    icon: 'none',
                    duration: 2000
                })
            })
    },
    
    // 提交购物车订单
    submitCartOrder: function (contactName, contactPhone, contactAddress) {
        const { cartSelectedItems, startDate, endDate } = this.data
        
        // 为购物车中的每个商品创建订单
        const promises = cartSelectedItems.map(item => {
            // 计算租借天数
            let itemRentDays = 1
            if (item.option === 'rizu' || item.option === 'changqi') {
                if (item.startDate && item.endDate) {
                    const start = new Date(item.startDate)
                    const end = new Date(item.endDate)
                    if (end > start) {
                        const diffTime = Math.abs(end - start)
                        itemRentDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
                    }
                }
            }
            
            const orderData = {
                fuzhuangid: item.id,
                fuzhuangmingcheng: item.fuzhuangmingcheng,
                jiage: item.jiage,
                zujietype: item.option === 'rizu' ? '1' : item.option === 'changqi' ? '2' : '3',
                starttime: startDate,
                endtime: endDate,
                shuliang: item.quantity,
                totalprice: item.jiage * item.quantity * itemRentDays + ((item.option === 'rizu' || item.option === 'changqi') && item.baozhengjin ? item.baozhengjin : 0),
                contactname: contactName,
                contactphone: contactPhone,
                contactaddress: contactAddress,
                status: 1 // 待支付
            }
            
            return orderApi.create(orderData)
        })
        
        // 等待所有订单创建完成
        Promise.all(promises)
            .then(results => {
                console.log('购物车订单创建成功:', results)
                wx.showToast({
                    title: `成功创建${results.length}个订单`,
                    icon: 'success',
                    duration: 2000
                })
                
                // 从购物车中删除已下单的商品
                const cartList = wx.getStorageSync('cartList') || []
                const updatedCartList = cartList.filter(cartItem => 
                    !cartSelectedItems.some(selectedItem => 
                        selectedItem.id === cartItem.id && 
                        selectedItem.option === cartItem.option && 
                        selectedItem.size === cartItem.size
                    )
                )
                wx.setStorageSync('cartList', updatedCartList)
                
                // 清除购物车选中的商品
                wx.removeStorageSync('cartSelectedItems')
                
                // 跳转到订单列表
                setTimeout(() => {
                    wx.navigateTo({
                        url: '/pages/order/list'
                    })
                }, 2000)
            })
            .catch(err => {
                console.error('购物车订单创建失败:', err)
                wx.showToast({
                    title: '订单创建失败',
                    icon: 'none',
                    duration: 2000
                })
            })
    }
})