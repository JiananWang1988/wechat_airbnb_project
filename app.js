const AV = require('./utils/av-weapp-min.js');
const config = require('./key.js');
AV.init({
  appId: config.appId,
  appKey: config.appSecret,
});

App({
  onLaunch: function () {

  },

  globalData: {
    access_token: '',
    serverUrl: "http://localhost:3000"
  }

})
