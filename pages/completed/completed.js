// pages/completed/completed.js
Page({
  goBack: function () {
    wx.switchTab({
      url: '../index/index'
    })
  },
  indexChargers(e) {

    wx.navigateTo({
      url: '/pages/index/index'
    });
  }
})