// pages/home/home.js
const config = require('../../config.js')

const qcloud = require('../../vendor/wafer2-client-sdk/index')

Page({

  data: {
    productList: [{
      id: 1,
      image: 'https://s3.cn-north-1.amazonaws.com.cn/u-img/product1.jpg',
      name: '商品1',
      price: 100,
      source: '国内·广东',
    }], // 商品列表
  
  },
  onLoad: function(options) {
    this.getProductList()

  },
  getProductList(){
    wx.showLoading({
      title: '商品数据加载中',
    })
    qcloud.request({
      url: 'https://krzni9qp.qcloud.la/weapp/product',
      success: result => {
        wx.hideLoading()
        var res = result.data
        console.log(result.data.data)
        if (!res.code) {
          this.setData({
            productList: res.data
          })
        } else {
          wx.showToast({
            title: '商品数据加载失败',
          })
        }
        
      },
      fail: result => {
        wx.hideLoading()
        wx.showToast({
          title: '商品数据加载失败',
        })
      }
    })
  }
})