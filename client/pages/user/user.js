// pages/user/user.js
//const app = getApp( )
Page({

  /**
   * 页面的初始数据
   */
  data: {
      userInfo: null,
      // userInfo: {
      //   nickName: "段朋",
      //   avatarUrl: "",
      // }
  },
  onTapLogin(e) {
    console.log(e.detail.errMsg)
    console.log(e.detail.userInfo)
    console.log(e.detail.rawData)
      this.setData({
        userInfo: e.detail.userInfo
      })
   //console.log(e.detail.userInfo)
    // if (e.detail.userInfo) {
    //   //用户按了允许授权按钮
    // } else {
    //   //用户按了拒绝按钮
    // }
      // app.login({
      //     success: ({ userInfo }) => {
      //         this.setDate ({
      //           userInfo: {
      //             nickName: "段朋",
      //             avatarUrl: "",
      //           }
      //         })
      //     }
      // })
  },
  onTapAddress() {
        wx.showToast({
            icon: 'none',
            title: '此功能暂未开放'
        })
  },
  onTapKf() {
    wx.showToast({
      icon: 'none',
      title: '此功能暂未开放'
    })
  },
  // checkSession({ success, error }) {
  //        if (userInfo) {
  //            return success && success({
  //         userInfo
  //              })
  //       }
 	 
    //   wx.checkSession({
    //     success: () => {
    //           this.getUserInfo({
    //         success: res => {
    //                   userInfo = res.userInfo
          
    //                     success && success({
    //             userInfo
    //                       })
    //               },
    //         fail: () => {
    //               error && error()
    //               }
    //       })
    //     },
    //   fail: () => {
    //         error && error()
    //      }
    //   })
    // },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  // onShow: function () {
  //   app.checkSession({
  //     success: ({ userInfo }) => {
  //              this.setData({
  //         userInfo
  //                 })
  //           }
  //     })
  // },

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