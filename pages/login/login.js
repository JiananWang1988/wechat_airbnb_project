// pages/login/login.js
const app = getApp()
Page({
  /**
   * Page initial data
   */
  data: {

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
  login: function () {
    wx.login({
      success: (res) => {
        console.log(res)
        // insert next code here
        wx.request({
          url: `${app.globalData.serverUrl}/api/v1/login`,
          method: 'post',
          data: {
            code: res.code
          },
          // insert next code here
          success: (res) => {
            let access_token = res.data.access_token
            console.log(access_token)
            app.globalData.access_token = access_token
            wx.switchTab({
              url: '../index/index',
            })
          }
        })
      }
    })
  }
})