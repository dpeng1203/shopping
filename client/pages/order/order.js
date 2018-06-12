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
            image: 'https://product-1256901696.cos.ap-shanghai.myqcloud.com/product1.jpg',
            name: '钱包',
            price: 126.5,
          }]
        },
        {
          id: 1,
          list: [{
            count: 1,
            image: 'https://product-1256901696.cos.ap-shanghai.myqcloud.com/product2.jpg',
            name: '金色木吉他',
            price: 480.5,
          },
          {
            count: 1,
            image: 'https://product-1256901696.cos.ap-shanghai.myqcloud.com/product3.jpg',
            name: '红纹铁质装订机',
            price: 28.0,
          }
          ]
        },
        {
          id: 2,
          list: [{
            count: 1,
            image: 'https://product-1256901696.cos.ap-shanghai.myqcloud.com/product4.jpg',
            name: '新鲜有机青菜',
            price: 30.9,
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