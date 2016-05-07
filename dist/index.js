(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["getMyIP"] = factory();
	else
		root["getMyIP"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var loadScript = __webpack_require__(1)
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


/***/ },
/* 1 */
/***/ function(module, exports) {

	
	module.exports = function load (src, opts, cb) {
	  var head = document.head || document.getElementsByTagName('head')[0]
	  var script = document.createElement('script')

	  if (typeof opts === 'function') {
	    cb = opts
	    opts = {}
	  }

	  opts = opts || {}
	  cb = cb || function() {}

	  script.type = opts.type || 'text/javascript'
	  script.charset = opts.charset || 'utf8';
	  script.async = 'async' in opts ? !!opts.async : true
	  script.src = src

	  if (opts.attrs) {
	    setAttributes(script, opts.attrs)
	  }

	  if (opts.text) {
	    script.text = '' + opts.text
	  }

	  var onend = 'onload' in script ? stdOnEnd : ieOnEnd
	  onend(script, cb)

	  // some good legacy browsers (firefox) fail the 'in' detection above
	  // so as a fallback we always set onload
	  // old IE will ignore this and new IE will set onload
	  if (!script.onload) {
	    stdOnEnd(script, cb);
	  }

	  head.appendChild(script)
	}

	function setAttributes(script, attrs) {
	  for (var attr in attrs) {
	    script.setAttribute(attr, attrs[attr]);
	  }
	}

	function stdOnEnd (script, cb) {
	  script.onload = function () {
	    this.onerror = this.onload = null
	    cb(null, script)
	  }
	  script.onerror = function () {
	    // this.onload = null here is necessary
	    // because even IE9 works not like others
	    this.onerror = this.onload = null
	    cb(new Error('Failed to load ' + this.src), script)
	  }
	}

	function ieOnEnd (script, cb) {
	  script.onreadystatechange = function () {
	    if (this.readyState != 'complete' && this.readyState != 'loaded') return
	    this.onreadystatechange = null
	    cb(null, script) // there is no way to catch loading errors in IE8
	  }
	}


/***/ }
/******/ ])
});
;