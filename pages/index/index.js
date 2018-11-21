

//index.js
var app = getApp()
// This is the access to the app.js file

Page({
  linkComplete: function () {
    wx.navigateTo({
      url: '../completed/completed'
    })
  },

  data: {

  },
  onLoad: function (options) {
    // Save reference to page
    let page = this;

    // Display toast when loading
    wx.showToast({
      title: 'Updating',
      icon: 'success',
      duration: 3000
    });

    // Update local data
    this.setData(app.globalData)
  },
  //References getApp() to load on the global data onto this page.

  showRestaurant(e) {
    const data = e.currentTarget.dataset;
    const restaurant = data.restaurant;

    wx.navigateTo({
      url: `../show/show?id=${restaurant.id}`
    });
  },
})