// //app.js
// App({
//   onLaunch: function () {
//     // 展示本地存储能力
//     var logs = wx.getStorageSync('logs') || []
//     logs.unshift(Date.now())
//     wx.setStorageSync('logs', logs)

//     // 登录
//     wx.login({
//       success: res => {
//         // 发送 res.code 到后台换取 openId, sessionKey, unionId
//       }
//     })
//     // 获取用户信息
//     wx.getSetting({
//       success: res => {
//         if (res.authSetting['scope.userInfo']) {
//           // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
//           wx.getUserInfo({
//             success: res => {
//               // 可以将 res 发送给后台解码出 unionId
//               this.globalData.userInfo = res.userInfo

//               // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
//               // 所以此处加入 callback 以防止这种情况
//               if (this.userInfoReadyCallback) {
//                 this.userInfoReadyCallback(res)
//               }
//             }
//           })
//         }
//       }
//     })
//   },
//   globalData: {
//     userInfo: null
//   }
// })

// ===========================================================

//app.js

App({

  onLaunch: function () {
    //Write API call that fetches data from backend
    //Write function that sets JSON from backend to Global data
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
