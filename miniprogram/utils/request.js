// 网络请求封装
const app = getApp()

// 基础URL
const baseURL = app.globalData.baseURL || 'http://localhost:8080/springbooto8ka3'

/**
 * 封装wx.request
 * @param {Object} options - 请求配置
 * @param {string} options.url - 请求地址
 * @param {string} options.method - 请求方法
 * @param {Object} options.data - 请求数据
 * @param {Object} options.header - 请求头
 * @param {boolean} options.showLoading - 是否显示加载提示
 * @param {boolean} options.showError - 是否显示错误提示
 * @returns {Promise} - 返回Promise对象
 */
function request(options) {
  // 默认配置
  const defaultOptions = {
    url: '',
    method: 'GET',
    data: {},
    header: {
      'Content-Type': 'application/json',
      'token': app.globalData.token
    },
    showLoading: true,
    showError: true
  }
  
  // 合并配置
  const opts = Object.assign({}, defaultOptions, options)
  
  // 拼接完整URL
  if (!opts.url.startsWith('http')) {
    opts.url = `${baseURL}${opts.url}`
  }
  
  // 显示加载提示
  if (opts.showLoading) {
    wx.showLoading({
      title: '加载中...',
      mask: true
    })
  }
  
  return new Promise((resolve, reject) => {
    wx.request({
      ...opts,
      success: function(res) {
        // 隐藏加载提示
        if (opts.showLoading) {
          wx.hideLoading()
        }
        
        // 处理响应
        if (res.statusCode === 200) {
          if (res.data.code === 0) {
            // 请求成功
            resolve(res.data)
          } else if (res.data.code === 401) {
            // 未授权，跳转到登录页
            app.logout()
            reject(new Error('未授权'))
          } else {
            // 业务错误
            if (opts.showError) {
              wx.showToast({
                title: res.data.msg || '请求失败',
                icon: 'none',
                duration: 2000
              })
            }
            reject(new Error(res.data.msg || '请求失败'))
          }
        } else {
          // HTTP错误
          if (opts.showError) {
            wx.showToast({
              title: `请求失败(${res.statusCode})`,
              icon: 'none',
              duration: 2000
            })
          }
          reject(new Error(`HTTP Error ${res.statusCode}`))
        }
      },
      fail: function(err) {
        // 隐藏加载提示
        if (opts.showLoading) {
          wx.hideLoading()
        }
        
        // 网络错误
        if (opts.showError) {
          wx.showToast({
            title: '网络异常',
            icon: 'none',
            duration: 2000
          })
        }
        reject(err)
      }
    })
  })
}

// GET请求
function get(url, data = {}, options = {}) {
  return request({
    url,
    method: 'GET',
    data,
    ...options
  })
}

// POST请求
function post(url, data = {}, options = {}) {
  return request({
    url,
    method: 'POST',
    data,
    ...options
  })
}

// PUT请求
function put(url, data = {}, options = {}) {
  return request({
    url,
    method: 'PUT',
    data,
    ...options
  })
}

// DELETE请求
function del(url, data = {}, options = {}) {
  return request({
    url,
    method: 'DELETE',
    data,
    ...options
  })
}

module.exports = {
  request,
  get,
  post,
  put,
  del
}