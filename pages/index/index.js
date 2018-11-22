

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

  onShow: function() {
    this.getData();
    // Update local data
  },

  onLoad: function (options) {
    // Save reference to page
    let page = this;

    // Display toast when loading
    wx.showToast({
      title: 'Updating',
      icon: 'success',
      duration: 2000
    });

  },
  //References getApp() to load on the global data onto this page.

  showItem(e) {
    const data = e.currentTarget.dataset;
    const item = data.item;

    wx.navigateTo({
      url: `../show/show?id=${item.id}`
    });
  },
  getData(){
    var page = this;
    wx.request({
      url: `${app.globalData.serverUrl}/api/v1/items?access_token=${app.globalData.access_token}`, //仅为示例，并非真实的接口地址,
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