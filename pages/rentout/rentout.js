// pages/rentout/rentout.js
var app = getApp()

Page({
  testFunction: function () {
    wx.navigateTo({
      url: '../add/add'
    })
  },
  /**
   * Page initial data
   */

  data: {
    // cards: [
    //   {
    //     name: "iPAD CHARGER",
    //     image: "https://kitt.lewagon.com/placeholder/cities/shanghai",
    //     price: "45",
    //     description: "A great charger"
    //   },
    //   {
    //     name: "Your saver",
    //     image: "https://kitt.lewagon.com/placeholder/cities/tokyo",
    //     price: "1000",
    //     description: "Save alot"
    //   },
    //   {
    //     name: "HK Charger",
    //     image: "https://kitt.lewagon.com/placeholder/cities/kyoto",
    //     price: "5",
    //     description: "Charge it now!"
    //   }
    // ]
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
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
    this.getData();
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
  getData(){
    var page = this;
    wx.request({
      url: `${app.globalData.serverUrl}/api/v1/users/1/rentingout?access_token=${app.globalData.access_token}`, //仅为示例，并非真实的接口地址,
      method: 'GET',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data)
        page.setData({
          items: res.data.items
        })
        
      }
    })
  }
})