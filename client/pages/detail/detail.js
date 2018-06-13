// pages/detail/detail.js

const qcloud = require('../../vendor/wafer2-client-sdk/index')

const config = require('../../config.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    product: ''
  },
  addToTrolley () {
    //console.log(this.data.product)
    wx.setStorage({
      key: "key",
      data: this.data.product
    })
    wx.showToast({
      title: '已加入购物车',
    })
  },
  buy() {
    wx.showToast({
      title: '购买成功',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.getDetail(options.id)
  },
  getDetail(id){
    wx.showLoading({
      title: '商品数据加载中',
    })
    wx.request({
      url: 'http://pa7onzeml.bkt.clouddn.com/product1',
      success: result => {
        wx.hideLoading()
        var res = result.data[2].data
        //console.log(result)
        if (!res.code) {
          this.setData({
            product: res[id - 1]
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