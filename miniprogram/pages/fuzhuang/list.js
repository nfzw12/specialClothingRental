// pages/fuzhuang/list.js
const { fuzhuangApi } = require('../../services/api')
Page({

    /**
     * 页面的初始数据
     */
    data: {
        fuzhuangList: [
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
        categories: [
            { id: 1, name: '男装' },
            { id: 2, name: '女装' },
            { id: 3, name: '童装' },
            { id: 4, name: '配饰' },
            { id: 5, name: '礼服' },
            { id: 6, name: '运动装' },
            { id: 7, name: '休闲装' },
            { id: 8, name: '其他' }
        ],
        activeCategory: 0
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        console.log('服装列表onLoad触发')
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
        console.log('服装列表onShow触发')
        this.initData()
    },
    
    initData() {
        // 触发API请求
        this.loadFuzhuangList()
        this.loadCategories()
    },
    
    // 加载服装列表
    loadFuzhuangList() {
        const that = this
        const activeCategory = this.data.activeCategory
        console.log('开始加载服装列表数据，分类ID:', activeCategory)
        
        // 构建请求参数
        const params = { page: 1, limit: 10 }
        if (activeCategory > 0) {
            // 查找对应的分类名称
            const category = that.data.categories.find(cat => cat.id === activeCategory)
            if (category) {
                params.fuzhuangfenlei = category.fuzhuangfenlei
            }
        }
        
        // 真实API调用
        fuzhuangApi.getList(params)
            .then(res => {
                console.log('加载服装列表成功:', res)
                // 确保数据结构正确
                let list = []
                if (res.data && res.data.data && res.data.data.list) {
                    list = res.data.data.list || []
                } else if (res.data && res.data.list) {
                    // 兼容不同的数据格式
                    list = res.data.list || []
                }
                
                // 处理图片路径和价格
                const processedList = list.map(item => {
                    if (item.fuzhuangtupian) {
                        // 取第一张图片作为列表显示
                        const imgList = item.fuzhuangtupian.split(',')
                        if (imgList.length > 0 && imgList[0]) {
                            // 使用HTTP协议访问本地静态资源，因为已经打开了不校验合法域名选项
                            item.tupian = `http://localhost:8080/springbooto8ka3/${imgList[0]}`
                        }
                    }
                    // 处理价格字段
                    const yuanjia = item.price || item.fuzhuangjiage || 0
                    item.jiage = Math.round(yuanjia * 0.04) // 日租金为原价的4%
                    item.zujietype = '1' // 默认为日租
                    return item
                })
                
                that.setData({
                    fuzhuangList: processedList
                })
            })
            .catch(err => {
                console.error('加载服装列表失败:', err)
                // 使用默认数据，确保页面显示
                that.setData({
                    fuzhuangList: that.data.fuzhuangList
                })
            })
    },
    
    // 加载分类列表
    loadCategories() {
        const that = this
        console.log('开始加载分类列表数据')
        
        // 真实API调用
        fuzhuangApi.getCategories()
            .then(res => {
                console.log('加载分类列表成功:', res)
                // 确保数据结构正确
                if (res.data && res.data.data && res.data.data.list) {
                    that.setData({
                        categories: res.data.data.list || []
                    })
                } else if (res.data && res.data.list) {
                    // 兼容不同的数据格式
                    that.setData({
                        categories: res.data.list || []
                    })
                } else {
                    that.setData({
                        categories: []
                    })
                }
            })
            .catch(err => {
                console.error('加载分类列表失败:', err)
                // 使用默认数据，确保页面显示
                that.setData({
                    categories: that.data.categories
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
    
    // 切换分类
    switchCategory(e) {
        const categoryId = e.currentTarget.dataset.id
        this.setData({
            activeCategory: categoryId
        })
        console.log('切换分类', categoryId)
        // 重新加载服装列表数据
        this.loadFuzhuangList()
    },
    
    // 跳转到服装详情
    goFuzhuangDetail(e) {
        const id = e.currentTarget.dataset.id
        wx.navigateTo({
            url: `/pages/fuzhuang/detail?id=${id}`
        })
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})