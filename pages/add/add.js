// pages/add/add.js
var app = getApp()
// const app = getApp()
const AV = require('../../utils/av-weapp-min.js');
Page({
  /**
   * Page initial data
   */
  data: {
    filePath: 'hello',
  },
  onLoad: function () {
  },
  takePhoto: function () {
    var page = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {
        let tempFilePath = res.tempFilePaths[0];
        page.setData({
          filePath: tempFilePath
        });
        new AV.File('file-name', {
          blob: {
            uri: tempFilePath,
          },
        }).save().then(
          file => console.log(file.url())
        ).catch("error is " + console.error);
      }
    });
  },

  /**
   * Lifecycle function--Called when page load
   */
  jumpCompleted: function () {
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

  },

  bindSubmit: function (e) {
    //console.log(e)
    let chargerData = {
      item: e.detail.value
    }
    console.log(chargerData);

      var page = this;
      wx.request({
        url: `${app.globalData.serverUrl}/api/v1/items?access_token=${app.globalData.access_token}`, //仅为示例，并非真实的接口地址,
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
