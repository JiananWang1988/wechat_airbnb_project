// pages/add/add.js
Page({
  jumpCompleted: function () {
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

  bindSubmit: function (e) {
    //console.log(e)
    let chargerData = {
      item: e.detail.value
    }
    console.log(chargerData);
    
      var page = this;
      wx.request({
        url: `http://10.183.253.119:3000/api/v1/items?access_token=X1tiimdoewBLjyCUZPM3ezti`, //仅为示例，并非真实的接口地址,
        method: 'POST',
        data: chargerData,
        header: {
          'content-type': 'application/json' // 默认值
        },
        success(res) {
          console.log(res.data)
          // wx.navigateBack({
          // })
          page.jumpCompleted()
          // page.setData({
          //   items: res.data.items
          // })
        }
      })
  }
})