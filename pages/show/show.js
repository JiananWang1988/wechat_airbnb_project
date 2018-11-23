// pages/show/show.js
var app = getApp()
Page({
  // clickComplete: function (e) {
  //   console.log(e);
  //   let id = e.target.dataset.item
  //   let price = e.target.dataset.price
  //   let name = e.target.dataset.name
  //   let description = e.target.dataset.description
  
  //   wx.navigateTo({
  //     url: `../confirm/confirm?id=${id}&price=${price}&name=${name}&description=${description}`
  //     // show/show?id=${item.id}`
  //   })
  // },
  /**
   * Page initial data
   */
  data: {
    dateStart: 'YYYY-MM-DD',
    dateEnd: 'YYYY-MM-DD',
  },
  bindDateChangeStart: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      dateStart: e.detail.value
    })
  },
  bindDateChangeEnd: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      dateEnd: e.detail.value
    })
  },
  clickComplete: function(){
    var page = this
    wx.showModal({
      title: 'NOTICE',
      content: 'Are you sure',
      success(res) {
        if (res.confirm) {
          page.itemOrder()
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },

  itemOrder: function() {
    
    const itemid = this.data.itemid;
    var orderData = { order : {
      start_time: this.data.dateStart,
      end_time: this.data.dateEnd
    }}
    var page = this
    wx.request({
      url: `${app.globalData.serverUrl}/api/v1/items/${itemid}/orders?access_token=${app.globalData.access_token}`, //仅为示例，并非真实的接口地址,
      method: 'POST',
      data: orderData,
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
      
        console.log(res.data)
        let id = page.data.item.id
        let price = page.data.item.price
        let name = page.data.item.name
        let description = page.data.item.description

        wx.navigateTo({
          url: `../confirm/confirm?id=${id}&price=${price}&name=${name}&description=${description}`
          // show/show?id=${item.id}`
        })
        
        // page.setData({
        //   items: res.data.items
        // })
      }
    })
  },
  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    let itemId = options.id
    this.getData(itemId);
    this.data.itemid=  options.id;
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
  getData: function (item_id) {
    // //wx.requrdyfget
    // this.setData(
    //   {
    //     card: 
    //       {
    //         item_id: 1,
    //         name: "Phone Charger",
    //         price: "250RMB",
    //         description:"Probably one of the coolest chargers you will ever find this charger comes with everything. It is the total package."
    //       }
    //     }
    

      // )
    
  var page = this;
  wx.request({
    url: `${app.globalData.serverUrl}/api/v1/items/${item_id}?access_token=${app.globalData.access_token}`, //仅为示例，并非真实的接口地址,
    method: 'GET',
    header: {
      'content-type': 'application/json' // 默认值
    },
    success(res) {
      console.log(res.data)
      page.setData({
        item: res.data
      })
    }
  })
    
  }
})