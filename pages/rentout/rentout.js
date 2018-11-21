// pages/rentout/rentout.js
Page({
  testFunction: function () {
    wx.navigateTo({
      url: '../edit/edit'
    })
  },
  /**
   * Page initial data
   */
  data: {
    cards: [
      {
        name: "iPAD CHARGER",
        image: "https://kitt.lewagon.com/placeholder/cities/shanghai",
        price: "45",
        description: "ljfsldfjsldfjsldjflsdjfls"
      },
      {
        name: "Your saver",
        image: "https://kitt.lewagon.com/placeholder/cities/tokyo",
        price: "1000",
        description: "ljfsldfjsldfjsldjflsdjfls"
      },
      {
        name: "A lot of charger",
        image: "https://kitt.lewagon.com/placeholder/cities/kyoto",
        price: "5",
        description: "ljfsldfjsldfjsldjflsdjfls"
      }
    ]
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

  }
})