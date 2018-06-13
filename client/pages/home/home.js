// pages/home/home.js


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
    var that = this
    wx.request({
      url: 'http://pa7onzeml.bkt.clouddn.com/product1',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        //console.log(res.data[2].data)
        that.setData({
          productList:  res.data[2].data
        })
      }
    })
  },
  
})