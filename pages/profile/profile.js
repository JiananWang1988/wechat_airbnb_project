// pages/profile/profile.js
var app = getApp()
Page({

  /**
   * Page initial data
   */
  data: {
    cards: [
     
    ]
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    var page = this;
    var user = wx.getStorageSync('user')
    if (user) {
      console.log(user)
    }
    wx.request({
      url: `${app.globalData.serverUrl}/api/v1/items?access_token=${app.globalData.access_token}&user=${user.id}`, //仅为示例，并非真实的接口地址,
      method: 'GET',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data)
        page.setData({
          cards:res.data.items
        })
      }
    });
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

  }
})