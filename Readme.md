browser-my-ip
===========

Get client IP in browser.


## How
- Sohu API: http://pv.sohu.com/cityjson (Chinese)

## usage
```js
getMyIP(function (err, data) {
    // data = {"cip": "183.157.160.60", "cid": "330100", "cname": "浙江省杭州市"}
    console.log(data.cip)
})
```

## License
MIT @ Jingchen Zhao
