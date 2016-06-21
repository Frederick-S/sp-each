/******/ (function(modules) { // webpackBootstrap
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

	/// <reference path='./typings/index.d.ts'/>
	/// <reference path='../../../typings/index.d.ts'/>
	"use strict";
	var index_1 = __webpack_require__(1);
	var getQueryStringParameter = function (param) {
	    var params = document.URL.split('?')[1].split('&');
	    var strParams = '';
	    for (var i = 0; i < params.length; i = i + 1) {
	        var singleParam = params[i].split('=');
	        if (singleParam[0] === param) {
	            return decodeURIComponent(singleParam[1]);
	        }
	    }
	};
	var clientContext = SP.ClientContext.get_current();
	var hostUrl = getQueryStringParameter('SPHostUrl');
	var appContextSite = new SP.AppContextSite(clientContext, hostUrl);
	var web = appContextSite.get_web();
	var webs = web.get_webs();
	clientContext.load(webs);
	clientContext.executeQueryAsync(function (sender, args) {
	    index_1.each(webs, function (web, index, webs) {
	        $('#message').append('<li>Index ' + index + ': ' + web.get_title() + ' </li>');
	    });
	}, function (sender, args) {
	    alert(args.get_message());
	});


/***/ },
/* 1 */
/***/ function(module, exports) {

	/// <reference path="./typings/index.d.ts"/>
	"use strict";
	function each(collection, iteratee, context) {
	    if (typeof collection.getEnumerator === 'function') {
	        var index = 0;
	        var current = null;
	        var enumerator = collection.getEnumerator();
	        while (enumerator.moveNext()) {
	            current = enumerator.get_current();
	            iteratee.call(context, current, index, collection);
	            index++;
	        }
	    }
	}
	exports.each = each;


/***/ }
/******/ ]);