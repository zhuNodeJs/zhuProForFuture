/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(2);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Map与Array的对比, Set与Array的对比
{
    // 数据结构的横向对比：增，查， 改，删
    var map = new Map();
    var array = [];

    // 增
    map.set('t', 1);
    array.push({ "t": 1 });

    console.info(map, array);

    // 查
    var map_exist = map.has('t');
    var array_exist = array.find(function (item) {
        return item.t;
    });
    console.log(map_exist, array_exist);

    // 改
    map.set('t', 2);
    array.forEach(function (item) {
        return item.t ? item.t = 2 : '';
    });
    console.log(map, array);

    // 删
    map.delete('t');
    var index = array.findIndex(function (item) {
        return item.t;
    });
    array.splice(index, 1);
    console.log(map, array);
}

{
    // set和Array的比较
    var set = new Set();
    var _array = [];

    // 增
    set.add({ "t": 1 });
    _array.push({ "t": 1 });
    console.log(set, _array);

    // 查
    var set_exist = set.has({ "t": 1 }); //注意此时的false，因为对象的存在的是地址的引用
    var _array_exist = _array.find(function (item) {
        return item.t;
    });
    console.log(set_exist, _array_exist);

    // 改
    set.forEach(function (item) {
        return item.t ? item.t = 2 : '';
    });
    _array.forEach(function (item) {
        return item.t ? item.t *= 2 : '';
    });
    console.log(set, _array);

    // 删1
    set.forEach(function (item) {
        return item.t ? set.delete(item) : '';
    });
    var _index = _array.findIndex(function (item) {
        return item.t;
    });
    _array.splice(_index, 1);
    console.log(set, _array);
}
// Map与Object的对比，Set和Object的对比
{
    // map, set, object的对比
    var item = { "t": 1 };
    var _map = new Map();
    var _set = new Set();
    var obj = {};

    // 增
    _map.set('t', 1);
    _set.add(item);
    obj['t'] = 1;

    console.log(_map, _set, obj);

    // 查
    console.info({
        map_exist: _map.has('t'),
        set_exist: _set.has(item),
        obj_exist: 't' in obj
    });

    // 改
    _map.set('t', 2);
    _set.forEach(function (item) {
        return item.t ? item.t = 2 : '';
    });
    obj['t'] = 2;
    console.log(_map, _set, obj);

    // 删
    _map.delete('t');
    _set.delete(item);
    delete obj['t'];
    console.log(_map, _set, obj);
}

/***/ })
/******/ ]);