// pages/detail/detail.js

const qcloud = require('../../vendor/wafer2-client-sdk/index')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    product: {
      id: 1,
      image: 'https://product-1256088332.cos.ap-guangzhou.myqcloud.com/product2.jpg',
      name: '商品',
      price: 480.5,
      source: '国内·广东'
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      //console.log(options.id)
      this.getDetail(options.id)
  },
  getDetail(id){
    wx.showLoading({
      title: '商品数据加载中',
    })
    qcloud.request({
      url: 'https://krzni9qp.qcloud.la/weapp/product/id',
      success: result => {
        wx.hideLoading()
        var res = result.data
        //console.log(result)
        if (!res.code) {
          this.setData({
            product: res.data
          })
        } else {
          setTimeout( () => {
            wx.navigateBack()
          },2000)
        }

      },
      fail: result => {
        wx.hideLoading()
        setTimeout(() => {
          wx.navigateBack()
        }, 2000)
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})