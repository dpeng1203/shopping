// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      userInfo: null,
      orderList: [
        {
          id: 0,
          list: [{
            count: 1,
            image: '填入任意你之前上传到腾讯云的图片链接',
            name: '商品1',
            price: 50.5,
          }]
        },
        {
          id: 1,
          list: [{
            count: 1,
            image: '填入任意你之前上传到腾讯云的图片链接',
            name: '商品1',
            price: 50.5,
          },
          {
            count: 1,
            image: '填入任意你之前上传到腾讯云的图片链接',
            name: '商品2',
            price: 50.5,
          }
          ]
        },
        {
          id: 2,
          list: [{
            count: 1,
            image: '填入任意你之前上传到腾讯云的图片链接',
            name: '商品2',
            price: 50.5,
          }]
        }
      ], // 订单列表
      
  },
  onTapLogin(e) {
    // console.log(e.detail.errMsg)
    // console.log(e.detail.userInfo)
    // console.log(e.detail.rawData)
    this.setData({
      userInfo: e.detail.userInfo
    })
    //console.log(e.detail.userInfo)
    // if (e.detail.userInfo) {
    //   //用户按了允许授权按钮
    // } else {
    //   //用户按了拒绝按钮
    // }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
    // 查看是否授权
    wx.getSetting({
      success: res => {
        console.log(res)
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: res => {
              // console.log(res.userInfo)
              //用户已经授权过
              this.setData({
                userInfo: res.userInfo
              })
            }
          })
        }
      }
    })
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