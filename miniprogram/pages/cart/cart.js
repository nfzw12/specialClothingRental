// pages/cart/cart.js
const { fuzhuangApi } = require('../../services/api')

Page({
    /**
     * 页面的初始数据
     */
    data: {
        cartList: [],
        totalPrice: 0,
        selectAll: false,
        showEditModal: false,
        selectedCount: 0,
        editItem: {
            id: '',
            fuzhuangmingcheng: '',
            tupian: '',
            option: '',
            size: '',
            quantity: 1,
            jiage: 0,
            baozhengjin: 0,
            sizes: [],
            startDate: '',
            endDate: ''
        }
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        // 检查本地存储中是否有购物车数据
        const cartList = wx.getStorageSync('cartList') || [];
        if (cartList.length === 0) {
            // 添加一些测试数据到本地存储
            const today = new Date();
            const tomorrow = new Date(today);
            tomorrow.setDate(tomorrow.getDate() + 1);
            const dayAfterTomorrow = new Date(today);
            dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + 2);
            
            const testData = [
                {
                    id: '1',
                    fuzhuangmingcheng: '测试服装1',
                    tupian: 'http://localhost:8080/springbooto8ka3/images/fuzhuang1.jpg',
                    option: 'rizu',
                    size: 'M',
                    quantity: 1,
                    jiage: 20,
                    baozhengjin: 100,
                    startDate: this.formatDate(today),
                    endDate: this.formatDate(tomorrow),
                    sizes: [
                        { size: 'S', qty: 10 },
                        { size: 'M', qty: 15 },
                        { size: 'L', qty: 8 },
                        { size: 'XL', qty: 5 }
                    ]
                },
                {
                    id: '2',
                    fuzhuangmingcheng: '测试服装2',
                    tupian: 'http://localhost:8080/springbooto8ka3/images/fuzhuang2.jpg',
                    option: 'changqi',
                    size: 'L',
                    quantity: 2,
                    jiage: 15,
                    baozhengjin: 80,
                    startDate: this.formatDate(today),
                    endDate: this.formatDate(dayAfterTomorrow),
                    sizes: [
                        { size: 'S', qty: 5 },
                        { size: 'M', qty: 10 },
                        { size: 'L', qty: 12 },
                        { size: 'XL', qty: 8 }
                    ]
                }
            ];
            wx.setStorageSync('cartList', testData);
            console.log('添加测试数据到本地存储');
        }
        
        // 加载购物车列表
        this.loadCartList();
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {
        this.loadCartList();
    },

    /**
     * 加载购物车列表
     */
    loadCartList() {
        // 从本地存储中获取购物车数据
        let cartList = wx.getStorageSync('cartList') || [];
        console.log('从本地存储获取的购物车数据:', cartList);
        
        if (cartList.length > 0) {
            // 显示加载提示
            wx.showLoading({
                title: '加载中...',
                mask: true
            });
            
            // 遍历购物车商品，从数据库获取最新信息
            const promises = cartList.map(item => {
                console.log('获取商品详情:', item.id);
                return fuzhuangApi.getDetail(item.id)
                    .then(res => {
                        console.log('商品详情响应:', res);
                        let data = {};
                        if (res.data && res.data.data) {
                            data = res.data.data;
                        } else if (res.data) {
                            data = res.data;
                        }
                        console.log('处理后的商品数据:', data);
                        
                        // 计算价格
                        const yuanjia = data.price || data.fuzhuangjiage || 0;
                        const rizujin = Math.round(yuanjia * 0.04);
                        const changqirent = Math.round(yuanjia * 0.03);
                        const goumaijia = Math.round(yuanjia * 1.1);
                        const baozhengjin = Math.round(yuanjia * 0.9);
                        
                        // 确保 sizes 是一个数组
                        let sizes = [];
                        // 尝试从多个位置获取尺码数据
                        if (res.sizes) {
                            sizes = res.sizes;
                        } else if (data.sizes) {
                            if (Array.isArray(data.sizes)) {
                                sizes = data.sizes;
                            } else if (typeof data.sizes === 'object') {
                                // 如果 sizes 是一个对象，尝试将其转换为数组
                                sizes = Object.values(data.sizes);
                            }
                        }
                        console.log('处理后的尺码数据:', sizes);
                        
                        // 更新商品信息
                        const updatedItem = {
                            ...item,
                            sizes: sizes,
                            jiage: item.option === 'rizu' ? rizujin : 
                                  item.option === 'changqi' ? changqirent : goumaijia,
                            baozhengjin: baozhengjin
                        };
                        console.log('更新后的商品信息:', updatedItem);
                        return updatedItem;
                    })
                    .catch(err => {
                        console.error('获取商品详情失败:', err);
                        return item; // 如果获取失败，使用本地存储的信息
                    });
            });
            
            // 等待所有请求完成
            Promise.all(promises)
                .then(updatedCartList => {
                    console.log('所有商品更新完成:', updatedCartList);
                    
                    // 不合并同种服装的不同规格，直接使用原始列表
                    const processedCartList = updatedCartList.map((item, index) => ({
                        ...item,
                        selected: index === 0 // 默认选中第一个商品
                    }));
                    
                    this.setData({
                        cartList: processedCartList,
                        selectAll: processedCartList.length > 0 && processedCartList.every(item => item.selected)
                    });
                    console.log('设置购物车数据完成');
                    
                    // 保存更新后的购物车数据到本地存储
                    const cartListToSave = processedCartList.map(({ selected, ...item }) => item);
                    wx.setStorageSync('cartList', cartListToSave);
                    console.log('保存购物车数据到本地存储完成');
                    
                    this.calculateTotalPrice();
                    console.log('计算总价格完成');
                    wx.hideLoading();
                })
                .catch(err => {
                    console.error('加载购物车失败:', err);
                    // 使用本地存储的信息
                    cartList = cartList.map((item, index) => ({
                        ...item,
                        selected: index === 0, // 默认选中第一个商品
                        sizes: item.sizes || []
                    }));
                    
                    this.setData({
                        cartList: cartList,
                        selectAll: cartList.length > 0 && cartList.every(item => item.selected)
                    });
                    this.calculateTotalPrice();
                    wx.hideLoading();
                });
        } else {
            // 购物车为空
            console.log('购物车为空');
            this.setData({
                cartList: [],
                selectAll: false
            });
            this.calculateTotalPrice();
        }
    },

    /**
     * 将同种服装的不同尺码合并显示
     */
    groupCartItems: function(cartList) {
        const grouped = {};
        
        // 按服装ID和选项分组
        cartList.forEach(item => {
            const key = `${item.id}_${item.option}`;
            if (!grouped[key]) {
                grouped[key] = {
                    id: item.id,
                    fuzhuangmingcheng: item.fuzhuangmingcheng,
                    tupian: item.tupian,
                    option: item.option,
                    sizes: item.sizes || [],
                    items: [],
                    selected: false,
                    quantity: 0,
                    jiage: 0,
                    baozhengjin: 0
                };
            }
            grouped[key].items.push(item);
            grouped[key].quantity += item.quantity || 1;
            grouped[key].jiage = item.jiage || 0;
            grouped[key].baozhengjin = item.baozhengjin || 0;
            if (item.selected) {
                grouped[key].selected = true;
            }
        });
        
        // 将分组后的数据转换为数组
        return Object.values(grouped);
    },

    /**
     * 将分组后的数据展开为原始列表
     */
    flattenCartList: function(cartList) {
        const flatList = [];
        
        cartList.forEach(item => {
            if (item.items && item.items.length > 0) {
                // 如果是分组项，展开为多个子项
                item.items.forEach(subItem => {
                    flatList.push({
                        ...subItem,
                        selected: item.selected
                    });
                });
            } else {
                // 如果是普通项，直接添加
                flatList.push(item);
            }
        });
        
        return flatList;
    },

    /**
     * 计算总价格
     */
    calculateTotalPrice() {
        const { cartList } = this.data;
        let totalPrice = 0;
        const selectedItems = cartList.filter(item => item.selected);
        const selectedCount = selectedItems.length;
        
        console.log('计算总价格 - 购物车列表:', cartList);
        console.log('计算总价格 - 选中的商品:', selectedItems);
        console.log('计算总价格 - 选中的商品数量:', selectedCount);
        
        selectedItems.forEach(item => {
            if (item.items && item.items.length > 0) {
                // 如果是分组项，计算所有子项的价格
                let groupDepositAdded = false;
                item.items.forEach(subItem => {
                    console.log('计算子项价格:', subItem.fuzhuangmingcheng, '单价:', subItem.jiage, '数量:', subItem.quantity, '押金:', subItem.baozhengjin);
                    
                    // 计算租借天数
                    let rentDays = 1;
                    if (subItem.option === 'rizu' || subItem.option === 'changqi') {
                        if (subItem.startDate && subItem.endDate) {
                            const start = new Date(subItem.startDate);
                            const end = new Date(subItem.endDate);
                            if (end > start) {
                                const diffTime = Math.abs(end - start);
                                rentDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                            }
                        }
                    }
                    
                    // 计算商品价格（单价 * 数量 * 租借天数）
                    totalPrice += subItem.jiage * subItem.quantity * rentDays;
                    // 如果是租借，添加押金（押金只计算一次，不按数量乘以）
                    if ((subItem.option === 'rizu' || subItem.option === 'changqi') && subItem.baozhengjin && !groupDepositAdded) {
                        totalPrice += subItem.baozhengjin;
                        console.log('添加押金:', subItem.baozhengjin);
                        groupDepositAdded = true;
                    }
                });
            } else {
                // 如果是普通项，直接计算
                console.log('计算商品价格:', item.fuzhuangmingcheng, '单价:', item.jiage, '数量:', item.quantity, '押金:', item.baozhengjin);
                
                // 计算租借天数
                let rentDays = 1;
                if (item.option === 'rizu' || item.option === 'changqi') {
                    if (item.startDate && item.endDate) {
                        const start = new Date(item.startDate);
                        const end = new Date(item.endDate);
                        if (end > start) {
                            const diffTime = Math.abs(end - start);
                            rentDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                        }
                    }
                }
                
                // 计算商品价格（单价 * 数量 * 租借天数）
                totalPrice += item.jiage * item.quantity * rentDays;
                // 如果是租借，添加押金（押金只计算一次，不按数量乘以）
                if ((item.option === 'rizu' || item.option === 'changqi') && item.baozhengjin) {
                    totalPrice += item.baozhengjin;
                    console.log('添加押金:', item.baozhengjin);
                }
            }
        });
        
        console.log('总价格:', totalPrice);
        
        this.setData({
            totalPrice: totalPrice,
            selectedCount: selectedCount
        });
    },

    /**
     * 格式化日期
     */
    formatDate: function (date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    },

    /**
     * 减少数量
     */
    decreaseQuantity(e) {
        const index = e.currentTarget.dataset.index;
        const cartList = this.data.cartList.map((item, i) => {
            if (i === index && item.quantity > 1) {
                item.quantity--;
            }
            return item;
        });
        
        // 将分组后的数据展开为原始列表
        const flatCartList = this.flattenCartList(cartList);
        
        this.setData({
            cartList: cartList
        });
        
        // 保存到本地存储（移除selected属性，因为本地存储不需要）
        const cartListToSave = flatCartList.map(({ selected, ...item }) => item);
        wx.setStorageSync('cartList', cartListToSave);
        this.calculateTotalPrice();
    },

    /**
     * 增加数量
     */
    increaseQuantity(e) {
        const index = e.currentTarget.dataset.index;
        const cartList = this.data.cartList.map((item, i) => {
            if (i === index) {
                item.quantity++;
            }
            return item;
        });
        
        // 将分组后的数据展开为原始列表
        const flatCartList = this.flattenCartList(cartList);
        
        this.setData({
            cartList: cartList
        });
        
        // 保存到本地存储（移除selected属性，因为本地存储不需要）
        const cartListToSave = flatCartList.map(({ selected, ...item }) => item);
        wx.setStorageSync('cartList', cartListToSave);
        this.calculateTotalPrice();
    },

    /**
     * 删除商品
     */
    deleteItem(e) {
        const id = e.currentTarget.dataset.id;
        const size = e.currentTarget.dataset.size;
        const startDate = e.currentTarget.dataset.startDate;
        const endDate = e.currentTarget.dataset.endDate;
        const cartList = this.data.cartList.filter(item => !(item.id === id && item.size === size && item.startDate === startDate && item.endDate === endDate));
        
        // 将分组后的数据展开为原始列表
        const flatCartList = this.flattenCartList(cartList);
        
        this.setData({
            cartList: cartList
        });
        
        // 保存到本地存储（移除selected属性，因为本地存储不需要）
        const cartListToSave = flatCartList.map(({ selected, ...item }) => item);
        wx.setStorageSync('cartList', cartListToSave);
        this.calculateTotalPrice();
        
        wx.showToast({
            title: '删除成功',
            icon: 'success',
            duration: 2000
        });
    },

    /**
     * 切换商品选择状态
     */
    toggleSelect(e) {
        const id = e.currentTarget.dataset.id;
        const size = e.currentTarget.dataset.size;
        const startDate = e.currentTarget.dataset.startDate;
        const endDate = e.currentTarget.dataset.endDate;
        const index = e.currentTarget.dataset.index;
        const cartList = this.data.cartList.map((item, i) => {
            // 使用索引来确保只选择当前点击的商品
            if (i === index) {
                item.selected = !item.selected;
            }
            return item;
        });
        
        // 将分组后的数据展开为原始列表
        const flatCartList = this.flattenCartList(cartList);
        
        // 检查是否所有商品都被选中
        const selectAll = flatCartList.every(item => item.selected);
        
        this.setData({
            cartList: cartList,
            selectAll: selectAll
        });
        
        // 保存到本地存储（移除selected属性，因为本地存储不需要）
        const cartListToSave = flatCartList.map(({ selected, ...item }) => item);
        wx.setStorageSync('cartList', cartListToSave);
        this.calculateTotalPrice();
    },

    /**
     * 全选/取消全选
     */
    toggleSelectAll() {
        const selectAll = !this.data.selectAll;
        const cartList = this.data.cartList.map(item => ({
            ...item,
            selected: selectAll
        }));
        
        // 将分组后的数据展开为原始列表
        const flatCartList = this.flattenCartList(cartList);
        
        this.setData({
            cartList: cartList,
            selectAll: selectAll
        });
        
        // 保存到本地存储（移除selected属性，因为本地存储不需要）
        const cartListToSave = flatCartList.map(({ selected, ...item }) => item);
        wx.setStorageSync('cartList', cartListToSave);
        this.calculateTotalPrice();
    },

    /**
     * 批量删除
     */
    batchDelete() {
        const selectedItems = this.data.cartList.filter(item => item.selected);
        if (selectedItems.length === 0) {
            wx.showToast({
                title: '请选择要删除的商品',
                icon: 'none',
                duration: 2000
            });
            return;
        }
        
        wx.showModal({
            title: '批量删除',
            content: `确定要删除选中的${selectedItems.length}个商品吗？`,
            success: (res) => {
                if (res.confirm) {
                    const cartList = this.data.cartList.filter(item => !item.selected);
                    
                    // 将分组后的数据展开为原始列表
                    const flatCartList = this.flattenCartList(cartList);
                    
                    this.setData({
                        cartList: flatCartList,
                        selectAll: false
                    });
                    
                    // 保存到本地存储（移除selected属性，因为本地存储不需要）
                    const cartListToSave = flatCartList.map(({ selected, ...item }) => item);
                    wx.setStorageSync('cartList', cartListToSave);
                    this.calculateTotalPrice();
                    
                    wx.showToast({
                        title: '删除成功',
                        icon: 'success',
                        duration: 2000
                    });
                }
            }
        });
    },

    /**
     * 显示编辑模态框
     */
    showEditModal(e) {
        const id = e.currentTarget.dataset.id;
        const size = e.currentTarget.dataset.size;
        const startDate = e.currentTarget.dataset.startDate;
        const endDate = e.currentTarget.dataset.endDate;
        const index = e.currentTarget.dataset.index;
        const item = this.data.cartList[index];
        
        if (!item) {
            wx.showToast({
                title: '商品不存在',
                icon: 'none',
                duration: 2000
            });
            return;
        }
        
        // 显示加载提示
        wx.showLoading({
            title: '加载中...',
            mask: true
        });
        
        // 从数据库获取最新的商品信息
        fuzhuangApi.getDetail(item.id)
            .then(res => {
                console.log('编辑商品详情响应:', res);
                console.log('res.data:', res.data);
                console.log('res.data.data:', res.data ? res.data.data : 'undefined');
                console.log('res.sizes:', res.sizes);
                console.log('res.data.sizes:', res.data ? res.data.sizes : 'undefined');
                
                let data = {};
                if (res.data && res.data.data) {
                    data = res.data.data;
                } else if (res.data) {
                    data = res.data;
                }
                console.log('处理后的编辑商品数据:', data);
                console.log('data.sizes:', data.sizes);
                
                // 计算价格
                const yuanjia = data.price || data.fuzhuangjiage || 0;
                const rizujin = Math.round(yuanjia * 0.04);
                const changqirent = Math.round(yuanjia * 0.03);
                const goumaijia = Math.round(yuanjia * 1.1);
                const baozhengjin = Math.round(yuanjia * 0.9);
                
                // 确保 sizes 是一个数组
                let sizes = [];
                // 尝试从多个位置获取尺码数据
                if (res.sizes) {
                    sizes = res.sizes;
                } else if (data.sizes) {
                    if (Array.isArray(data.sizes)) {
                        sizes = data.sizes;
                    } else if (typeof data.sizes === 'object') {
                        // 如果 sizes 是一个对象，尝试将其转换为数组
                        sizes = Object.values(data.sizes);
                    }
                }
                console.log('处理后的尺码数据:', sizes);
                
                // 设置编辑商品数据
                const today = new Date();
                const tomorrow = new Date(today);
                tomorrow.setDate(tomorrow.getDate() + 1);
                
                this.setData({
                    editItem: {
                        ...item,
                        index: index, // 保存索引
                        sizes: sizes,
                        jiage: item.option === 'rizu' ? rizujin : 
                              item.option === 'changqi' ? changqirent : goumaijia,
                        baozhengjin: baozhengjin,
                        startDate: item.startDate || this.formatDate(today),
                        endDate: item.endDate || this.formatDate(tomorrow)
                    },
                    showEditModal: true
                });
                console.log('设置编辑商品数据:', this.data.editItem);
                wx.hideLoading();
            })
            .catch(err => {
                console.error('获取编辑商品详情失败:', err);
                // 使用本地存储的信息
                const today = new Date();
                const tomorrow = new Date(today);
                tomorrow.setDate(tomorrow.getDate() + 1);
                
                this.setData({
                    editItem: {
                        ...item,
                        index: index, // 保存索引
                        startDate: item.startDate || this.formatDate(today),
                        endDate: item.endDate || this.formatDate(tomorrow)
                    },
                    showEditModal: true
                });
                console.log('设置编辑商品数据（失败）:', this.data.editItem);
                wx.hideLoading();
            });
    },

    /**
     * 关闭编辑模态框
     */
    closeEditModal() {
        this.setData({
            showEditModal: false
        });
    },

    /**
     * 选择编辑尺码
     */
    selectEditSize(e) {
        const size = e.currentTarget.dataset.size;
        this.setData({
            'editItem.size': size
        });
    },

    /**
     * 从列表中选择要编辑的尺码
     */
    selectEditSizeFromList(e) {
        const id = e.currentTarget.dataset.id;
        const size = e.currentTarget.dataset.size;
        const { editItem } = this.data;
        
        // 查找对应的子项
        const selectedItem = editItem.items.find(item => item.id === id);
        
        if (selectedItem) {
            // 设置选中的尺码
            this.setData({
                'editItem.selectedSize': size,
                'editItem.selectedId': id
            });
        }
    },

    /**
     * 减少编辑数量
     */
    decreaseEditQuantity() {
        const { editItem } = this.data;
        if (editItem.quantity > 1) {
            this.setData({
                'editItem.quantity': editItem.quantity - 1
            });
        }
    },

    /**
     * 增加编辑数量
     */
    increaseEditQuantity() {
        const { editItem } = this.data;
        this.setData({
            'editItem.quantity': editItem.quantity + 1
        });
    },

    /**
     * 绑定编辑开始日期变化
     */
    bindEditStartDateChange(e) {
        this.setData({
            'editItem.startDate': e.detail.value
        });
    },

    /**
     * 绑定编辑结束日期变化
     */
    bindEditEndDateChange(e) {
        this.setData({
            'editItem.endDate': e.detail.value
        });
    },



    /**
     * 确认编辑
     */
    confirmEdit() {
        const { editItem, cartList } = this.data;
        
        console.log('确认编辑 - 开始');
        console.log('确认编辑 - editItem:', editItem);
        console.log('确认编辑 - cartList:', cartList);
        
        // 计算租借天数
        let updatedEditItem = { ...editItem };
        if (updatedEditItem.option === 'rizu' || updatedEditItem.option === 'changqi') {
            if (updatedEditItem.startDate && updatedEditItem.endDate) {
                const start = new Date(updatedEditItem.startDate);
                const end = new Date(updatedEditItem.endDate);
                if (end > start) {
                    const diffTime = Math.abs(end - start);
                    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                    
                    // 租借周期大于一周（7天）自动变化成长期租赁的价格
                    if (diffDays > 7 && updatedEditItem.option === 'rizu') {
                        updatedEditItem.option = 'changqi';
                        // 重新计算价格
                        const yuanjia = updatedEditItem.yuanjia || updatedEditItem.price || updatedEditItem.jiage / 0.04 || 0;
                        updatedEditItem.jiage = Math.round(yuanjia * 0.03);
                        console.log(`${updatedEditItem.fuzhuangmingcheng}租借周期超过7天，自动切换为长期租赁，价格调整为${updatedEditItem.jiage}`);
                    }
                }
            }
        }
        
        console.log('确认编辑 - updatedEditItem:', updatedEditItem);
        
        // 获取商品索引
        const itemIndex = updatedEditItem.index;
        console.log('确认编辑 - 商品索引:', itemIndex);
        
        // 检查索引是否有效
        if (itemIndex === undefined || itemIndex < 0 || itemIndex >= cartList.length) {
            console.error('索引无效:', itemIndex);
            wx.showToast({
                title: '编辑失败，请重试',
                icon: 'none',
                duration: 2000
            });
            return;
        }
        
        // 创建新的购物车列表
        const updatedCartList = [...cartList];
        
        // 更新商品项
        console.log('更新前的商品项:', updatedCartList[itemIndex]);
        updatedCartList[itemIndex] = {
            ...updatedCartList[itemIndex],
            size: updatedEditItem.size,
            quantity: updatedEditItem.quantity,
            startDate: updatedEditItem.startDate,
            endDate: updatedEditItem.endDate,
            option: updatedEditItem.option,
            jiage: updatedEditItem.jiage
        };
        console.log('更新后的商品项:', updatedCartList[itemIndex]);
        
        console.log('更新后的购物车列表:', updatedCartList);
        
        // 更新数据
        this.setData({
            cartList: updatedCartList,
            showEditModal: false
        }, () => {
            console.log('setData完成后的cartList:', this.data.cartList);
            
            // 保存到本地存储（移除selected属性，因为本地存储不需要）
            const cartListToSave = updatedCartList.map(({ selected, ...item }) => item);
            console.log('保存到本地存储的cartList:', cartListToSave);
            wx.setStorageSync('cartList', cartListToSave);
            
            // 重新计算总价格
            this.calculateTotalPrice();
            
            wx.showToast({
                title: '编辑成功',
                icon: 'success',
                duration: 2000
            });
        });
    },

    /**
     * 去结算
     */
    goCheckout() {
        const { cartList } = this.data;
        const selectedItems = cartList.filter(item => item.selected);
        
        if (cartList.length === 0) {
            wx.showToast({
                title: '购物车是空的',
                icon: 'none',
                duration: 2000
            });
            return;
        }
        
        if (selectedItems.length === 0) {
            wx.showToast({
                title: '请选择要结算的商品',
                icon: 'none',
                duration: 2000
            });
            return;
        }
        
        // 校验选中的商品
        for (let i = 0; i < selectedItems.length; i++) {
            const item = selectedItems[i];
            
            // 校验尺码信息
            if (!item.size) {
                wx.showToast({
                    title: `请选择${item.fuzhuangmingcheng}的尺码`,
                    icon: 'none',
                    duration: 2000
                });
                return;
            }
            
            // 校验租借日期
            if (item.option === 'rizu' || item.option === 'changqi') {
                if (!item.startDate || !item.endDate) {
                    wx.showToast({
                        title: `请设置${item.fuzhuangmingcheng}的租借日期`,
                        icon: 'none',
                        duration: 2000
                    });
                    return;
                }
                
                // 校验结束日期要大于开始日期
                const start = new Date(item.startDate);
                const end = new Date(item.endDate);
                if (end <= start) {
                    wx.showToast({
                        title: `${item.fuzhuangmingcheng}的结束日期必须大于开始日期`,
                        icon: 'none',
                        duration: 2000
                    });
                    return;
                }
                
                // 计算租借天数
                const diffTime = Math.abs(end - start);
                const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                
                // 租借周期大于一周（7天）自动变化成长期租赁的价格
                if (diffDays > 7 && item.option === 'rizu') {
                    item.option = 'changqi';
                    // 重新计算价格
                    const yuanjia = item.yuanjia || item.price || item.jiage / 0.04 || 0;
                    item.jiage = Math.round(yuanjia * 0.03);
                    console.log(`${item.fuzhuangmingcheng}租借周期超过7天，自动切换为长期租赁，价格调整为${item.jiage}`);
                }
            }
        }
        
        // 将选中的商品信息保存到本地存储，供订单页面使用
        console.log('保存到本地存储的购物车商品:', selectedItems)
        console.log('商品数量:', selectedItems.length)
        wx.setStorageSync('cartSelectedItems', selectedItems);
        
        // 验证本地存储是否保存成功
        const storedItems = wx.getStorageSync('cartSelectedItems') || []
        console.log('从本地存储读取的购物车商品:', storedItems)
        console.log('读取的商品数量:', storedItems.length)
        
        console.log('跳转到订单页面，选中的商品:', selectedItems);
        
        // 跳转到结算页面
        wx.navigateTo({
            url: '/pages/order/create?fromCart=true'
        });
    }
})