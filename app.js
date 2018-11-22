App({

  //photo upload

// Initialization of the app



  onLaunch: function () {
    //Write API call that fetches data from backend
    //Write function that sets JSON from backend to Global data
    // const host = 'http://localhost:3000/'
    // console.log('processing to login')
    // wx.login({
    //   success: (res) => {
    //     console.log(res)
    //     // insert next code here
    //     wx.request({
    //       url: host + 'login',
    //       method: 'post',
    //       data: {
    //         code: res.code
    //       },
    //       // insert next code here
    //       success: (res) => {
    //         console.log(res)
    //         this.globalData.userId = res.data.userId
    //       }
    //     })
    //   }
    // })
    const AV = require('./utils/av-weapp-min.js');
    const config = require('./key.js');
    AV.init({
      appId: config.appId,
      appKey: config.appSecret,
    });
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
        "image": "/images/chargers/nokia.jpg",
        "avatar": "https://kitt.lewagon.com/placeholder/users/tgenaitay"
      },
      {
        "id": 3,
        "name": "iPhone Charger",
        "price": "150RMB",
        "description": "Best Southeast Dishes",
        "image": "/images/chargers/case.jpg",
        "avatar": "https://kitt.lewagon.com/placeholder/users/tgenaitay"
      },
      {
        "id": 4,
        "name": "car Charger",
        "price": "210RMB",
        "description": "Charge in your Car!",
        "image": "/images/chargers/car.jpg",
        "avatar": "https://kitt.lewagon.com/placeholder/users/tgenaitay"
      }
    ]
  }

})
