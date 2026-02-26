// API服务
const request = require('../utils/request')

// 用户相关API
const userApi = {
  // 登录
  login: (data) => request.post('/yonghu/login', data),
  // 退出登录
  logout: () => request.post('/yonghu/logout'),
  // 获取当前用户信息
  getCurrentUser: () => request.get('/yonghu/session'),
  // 注册
  register: (data) => request.post('/yonghu/save', data)
}

// 服装相关API
const fuzhuangApi = {
  // 获取服装列表
  getList: (data) => request.get('/fuzhuangxinxi/list', data),
  // 获取服装详情
  getDetail: (id) => request.get(`/fuzhuangxinxi/info/${id}`),
  // 获取服装分类
  getCategories: () => request.get('/fuzhuangfenlei/list')
}

// 订单相关API
const orderApi = {
  // 获取订单列表
  getList: (data) => request.get('/rizujiedingdan/list', data),
  // 获取订单详情
  getDetail: (id) => request.get(`/rizujiedingdan/info/${id}`),
  // 创建订单
  create: (data) => request.post('/rizujiedingdan/save', data),
  // 删除订单
  delete: (ids) => request.del('/rizujiedingdan/delete', { ids }),
  // 获取日租借订单列表
  getRiOrderList: (data) => request.get('/rizujiedingdan/list', data),
  // 获取月租借订单列表
  getYueOrderList: (data) => request.get('/yuezujiedingdan/list', data),
  // 获取日租借结算
  getRiJiesuanList: (data) => request.get('/rizujiejiesuan/list', data),
  // 获取月租借结算
  getYueJiesuanList: (data) => request.get('/yuezujiejiesuan/list', data)
}

// 租借合同API
const zujiehetongApi = {
  // 获取合同列表
  getList: (data) => request.get('/zujiehetong/list', data),
  // 获取合同详情
  getDetail: (id) => request.get(`/zujiehetong/info/${id}`)
}

// 租客保障API
const zukebaozhangApi = {
  // 获取保障列表
  getList: (data) => request.get('/zukebaozhangxiufu/list', data),
  // 申请修复
  applyRepair: (data) => request.post('/zukebaozhangxiufu/save', data)
}

module.exports = {
  userApi,
  fuzhuangApi,
  orderApi,
  zujiehetongApi,
  zukebaozhangApi
}