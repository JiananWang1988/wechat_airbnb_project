// pages/edit/edit.js
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
    this.data.item.name = item.name
    this.data.item.price = item.price
    this.data.item.description = item.description
    this.data.item.image = item.image
    console.log(this.data)
    this.setData(this.data)
  },

  bindEdit: function () {
    console.log("bindEdit")
    wx.navigateTo({
      url: '../completed/completed'
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