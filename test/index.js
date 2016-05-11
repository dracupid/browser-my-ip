var assert = require('assert');
var getMyIp = require('../dist/')

describe('This project', function (done) {
  it('can get IP and clean context', function (done) {
    getMyIp(function (err, data) {
      assert.ok(typeof data === 'string')
      assert.ok(typeof returnCitySN === 'undefined')
      done()
    })
  })

  it('can get IP and revert context', function (done) {
    returnCitySN = 1
    getMyIp(function (err, data) {
      assert.ok(typeof data === 'string')
      assert.equal(returnCitySN, 1)
      done()
    })
  })
})
