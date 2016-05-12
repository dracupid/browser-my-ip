var loadScript = require('load-script')
var API_MY_IP = 'http://pv.sohu.com/cityjson'

module.exports = function (cb) {
  // avoid window.returnCitySN defined
  var conflictCache = typeof returnCitySN !== 'undefined' ? returnCitySN : undefined
  loadScript(API_MY_IP, {}, function (err) {
    if (typeof returnCitySN !== 'object') {
        return cb(new TypeError('Get IP failed.'))
    }
    var result = returnCitySN.cip || ''
    returnCitySN = conflictCache
    err == null ? cb(null, result) : cb(err)
  })
}
