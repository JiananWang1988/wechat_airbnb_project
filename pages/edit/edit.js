// pages/edit/edit.js
var app = getApp()
Page({
  /**
   * Page initial data
   */
  data: {
    item: {
      name: "",
      price: "",
      description: "",
      image: ""
    }
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    console.log(options.id)
    let pages = getCurrentPages()
    let prevPage = pages[pages.length-2]
    console.log(prevPage)
    let item = prevPage.data.items[options.id]
    console.log(item)
    this.data.itemid = item.id
    this.data.item.name = item.name
    this.data.item.price = item.price
    this.data.item.description = item.description
    this.data.item.image = item.image
    console.log(this.data)
    this.setData(this.data)
  },

  // bindEdit: function () {

  //   console.log("bindEdit")
  //   wx.navigateTo({
  //     url: '../completed/completed'
  //   })
  // },

  bindEdit: function (e) {
    const itemid = this.data.itemid;
    let chargerData = {
      item: e.detail.value
    }
    // console.log(chargerData);

    var page = this;
    wx.request({
      url: `${app.globalData.serverUrl}/api/v1/items/${itemid}?access_token=${app.globalData.access_token}`, //仅为示例，并非真实的接口地址,
      method: 'PUT',
      data: chargerData,
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data)
        // wx.navigateBack({
        // })
      wx.navigateTo({
        url: '../completed/completed'
        })
      }
    })
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