// pages/rentout/rentout.js
var app = getApp()

Page({
  testFunction: function () {
    wx.navigateTo({
      url: '../add/add'
    })
  }, 
  deleteItem: function (e) {
    const data = e.currentTarget.dataset;
    const itemid = data.itemid;
    const page = this
    console.log(data)

  wx.showModal({
    title: 'Note',
    content: 'YOU WANT TO KILL A CHARGER?',
    success: function (res) {
      if (res.confirm) {
    // var page = 
    wx.request({
      url: `${app.globalData.serverUrl}/api/v1/items/${itemid}?access_token=${app.globalData.access_token}`, //仅为示例，并非真实的接口地址,
      method: 'DELETE',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data)
        page.getData()
        // page.setData({
        //   items: res.data.items
        // })

      }
    })
      } else if (res.cancel) {
        console.log('User clicks cancel')
      }
    }
  })
  },

  editItem: function(e) {
    const data = e.currentTarget.dataset;
    const itemid = data.itemid;
    const page = this
    console.log(data)
    //?id=2&
    wx.navigateTo({
      url: '../edit/edit?id='+e.currentTarget.id,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
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