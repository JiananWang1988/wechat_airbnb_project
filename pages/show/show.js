// pages/show/show.js
var app = getApp()
Page({
  clickComplete: function () {
    wx.navigateTo({
      url: '../completed/completed'
    })
  },
  /**
   * Page initial data
   */
  data: {
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    let itemId = options.id
    this.getData(itemId);
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  },
  getData: function (item_id) {
    // //wx.requrdy
    // this.setData(
    //   {
    //     card: 
    //       {
    //         item_id: 1,
    //         name: "Phone Charger",
    //         price: "250RMB",
    //         description:"Probably one of the coolest chargers you will ever find this charger comes with everything. It is the total package."
    //       }
    //     }
    

      // )
    
  var page = this;
  wx.request({
    url: `${app.globalData.serverUrl}/api/v1/items/${item_id}?access_token=${app.globalData.access_token}`, //仅为示例，并非真实的接口地址,
    method: 'GET',
    header: {
      'content-type': 'application/json' // 默认值
    },
    success(res) {
      console.log(res.data)
      page.setData({
        item: res.data
      })
    }
  })
    
  }
})