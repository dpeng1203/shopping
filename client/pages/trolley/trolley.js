// pages/trolley/trolley.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: null,
    trolleyList: [{
      id: 1,
      name: '商品1',
      image: 'https://s3.cn-north-1.amazonaws.com.cn/u-img/product1.jpg',
      price: 45,
      source: '海外·瑞典',
      count: 1,
    }, {
      id: 2,
      name: '商品2',
      image: 'https://s3.cn-north-1.amazonaws.com.cn/u-img/product2.jpg',
      price: 480.5,
      source: '海外·新西兰',
      count: 3,
    }], // 购物车商品列表
    trolleyCheckMap: [], // 购物车中选中的id哈希表
    trolleyAccount: 0, // 购物车结算总价
    isTrolleyEdit: false, // 购物车是否处于编辑状态
    isTrolleyTotalCheck: false, // 购物车中商品是否全选
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
  onTapEdit() {
    let isTrolleyEdit = this.data.isTrolleyEdit
    isTrolleyEdit = !isTrolleyEdit
    this.setData({
      isTrolleyEdit
    })
  },
  countMinus(event){
    //console.log(event)
    let minusId = event.currentTarget.dataset.id
    let trolleyList = this.data.trolleyList
    let trolleyCheckMap = this.data.trolleyCheckMap
    let product
    for (let index = 0; index < trolleyList.length; index ++) {
      if (trolleyList[index].id === minusId) {
        product = trolleyList[index]
        if (product.count <= 1) {
          trolleyList.splice(index, 1)
          this.isAllCheck()
        } else {
          product.count--
        }
      }
    }
    let trolleyAccount = this.calcAccount(trolleyList, trolleyCheckMap)
    this.setData({
      trolleyAccount,
      trolleyList
    })
  },
  countAdd(event) {
   // console.log(event)
    let minusId = event.currentTarget.dataset.id
    let trolleyList = this.data.trolleyList
    let trolleyCheckMap = this.data.trolleyCheckMap
    let product
    for (let index = 0; index < trolleyList.length; index++) {
      if (trolleyList[index].id === minusId) {
        product = trolleyList[index]
        product.count ++
      }
    }
    let trolleyAccount = this.calcAccount(trolleyList, trolleyCheckMap)
    this.setData({
      trolleyAccount,
      trolleyList
    })
  },
  onTapCheckSingle(event) {
    let checkId = event.currentTarget.dataset.id
    let trolleyCheckMap = this.data.trolleyCheckMap
    // 单项商品被选中/取消
    trolleyCheckMap[checkId] = !trolleyCheckMap[checkId]
    this.isAllCheck()
  },
  isAllCheck(){
    let trolleyCheckMap = this.data.trolleyCheckMap
    let trolleyList = this.data.trolleyList
    let trolleyAccount = this.data.trolleyAccount
    let numTotalProduct
    let numCheckedProduct = 0
    let isTrolleyTotalCheck = this.data.isTrolleyTotalCheck
   
    // 商品的总数量
    numTotalProduct = trolleyList.length
    //console.log(numTotalProduct)
    //遍历选中个数
    trolleyCheckMap.forEach( checked => {
      checked ? numCheckedProduct += 1 : numCheckedProduct
    })
    //console.log(numCheckedProduct)
    //判断是否全选
    isTrolleyTotalCheck = (numCheckedProduct >= numTotalProduct) ? true : false
    
    trolleyAccount = this.calcAccount(trolleyList, trolleyCheckMap)
    this.setData({
      trolleyCheckMap,
      isTrolleyTotalCheck,
      trolleyAccount
    })
  },
  onTapCheckTotal(event) {
    let trolleyCheckMap = this.data.trolleyCheckMap
    let trolleyList = this.data.trolleyList
    let isTrolleyTotalCheck = this.data.isTrolleyTotalCheck
    let trolleyAccount = this.data.trolleyAccount
    isTrolleyTotalCheck = !isTrolleyTotalCheck
    trolleyList.forEach(product => {
      trolleyCheckMap[product.id] = isTrolleyTotalCheck
    })
    trolleyAccount = this.calcAccount(trolleyList, trolleyCheckMap)
    this.setData({
      isTrolleyTotalCheck,
      trolleyCheckMap,
      trolleyAccount
    })
    
  },
  calcAccount(trolleyList, trolleyCheckMap) {
    let acount =0
    trolleyList.forEach(product => {
      trolleyCheckMap[product.id] ? acount += product.price * product.count : acount
    })
    return acount
  },
  pay() {
    wx.showToast({
      title: '商品购买成功',
    })
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
        //console.log(res)
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
    wx.getStorage({
      key: "key",
      success: res => {
        //console.log(res.data)
        let trolleyList = this.data.trolleyList
        let trolleyCheckMap = this.data.trolleyCheckMap
        let trolleyAccount = this.data.trolleyAccount
        let isTrolleyTotalCheck = this.data.isTrolleyTotalCheck
        let flog = true
        let product
        for (let index = 0; index < trolleyList.length; index++) {
          //console.log(trolleyList[index].id)
          //console.log(res.data.id)
          if(trolleyList[index].id == res.data.id) {
            flog = false
            product = trolleyList[index]
            product.count++
          }
        }
        if (flog) {
          this.data.trolleyList.push(res.data)
          isTrolleyTotalCheck = false
        }
        trolleyAccount = this.calcAccount(trolleyList, trolleyCheckMap)
        this.setData({
          trolleyList,
          trolleyAccount,
          isTrolleyTotalCheck
        })
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