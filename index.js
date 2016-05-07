var loadScript = require('load-script')
var API_MY_IP = 'http://pv.sohu.com/cityjson'

module.exports = function (cb) {
  // avoid window.returnCitySN defined
  var confilctCache = typeof returnCitySN !== 'undefined' ? returnCitySN : undefined
  loadScript(API_MY_IP, {}, function (err) {
    var result = returnCitySN
    returnCitySN = confilctCache
    err == null ? cb(null, result) : cb(err)
  })
}
