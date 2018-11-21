
App({

  onLaunch: function () {
    //Write API call that fetches data from backend
    //Write function that sets JSON from backend to Global data
    const host = 'http://localhost:3000/'
    console.log('processing to login')
    wx.login({
      success: (res) => {
        console.log(res)
        // insert next code here
        wx.request({
          url: host + 'login',
          method: 'post',
          data: {
            code: res.code
          },
          // insert next code here
          success: (res) => {
            console.log(res)
            this.globalData.userId = res.data.userId
          }
        })
      }
    })
  },

  globalData: {
    restaurants: [
      {
        "id": 1,
        "name": "iPad Charger",
        "price": "250RMB",
        "description": "The best in the block",
        "image": "/images/chargers/ipad.png",
        "avatar": "https://kitt.lewagon.com/placeholder/users/tgenaitay"
      },
      {
        "id": 2,
        "name": "Old Skool Nokia",
        "price": "150RMB",
        "description": "More phone, More Fun",
        "image": "https://img.grouponcdn.com/deal/8DDtq5XRzVnLXEUnPHPd/p2-2048x1229/v1/c700x420.jpg",
        "avatar": "https://kitt.lewagon.com/placeholder/users/tgenaitay"
      },
      {
        "id": 3,
        "name": "iPhone Charger",
        "price": "150RMB",
        "description": "Best Southeast Dishes",
        "image": "https://assets.epicurious.com/photos/57a384e73a12dd9d5602415e/2:1/w_1260%2Ch_630/mango-salad.jpg",
        "avatar": "https://kitt.lewagon.com/placeholder/users/tgenaitay"
      },
      {
        "id": 4,
        "name": "Perfect Charger  ",
        "price": "42 american drive",
        "description": "More Meat Than You Can Eat",
        "image": "https://media-cdn.tripadvisor.com/media/photo-s/11/76/1c/72/stock-burger-co.jpg",
        "avatar": "https://kitt.lewagon.com/placeholder/users/tgenaitay"
      }
    ]
  }

})
