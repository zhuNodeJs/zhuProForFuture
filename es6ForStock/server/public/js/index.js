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


var _test = __webpack_require__(2);

var _test2 = _interopRequireDefault(_test);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

{
    var a = void 0,
        b = void 0,
        c = void 0,
        rest = void 0;
    var _ref = [1, 2];
    a = _ref[0];
    b = _ref[1];
    var _ref$ = _ref[2];
    c = _ref$ === undefined ? 9 : _ref$;

    console.log("1.>>", a, b, c);
}

{
    var f = function f() {
        return [3, 4];
    };

    var _a = void 0,
        _b = void 0;

    var _f = f();

    var _f2 = _slicedToArray(_f, 2);

    _a = _f2[0];
    _b = _f2[1];

    console.log("2.>>", _a, _b);
}

{
    var _a2 = 4;
    var _b2 = 9;
    var _ref2 = [_b2, _a2];
    _a2 = _ref2[0];
    _b2 = _ref2[1];

    console.log('3.>>', _a2, _b2);
}

{
    var _f3 = function _f3() {
        return [1, 2, 3, 4, 5];
    };

    var _a3 = void 0,
        _b3 = void 0,
        _c = void 0;

    var _f4 = _f3();

    var _f5 = _slicedToArray(_f4, 4);

    _a3 = _f5[0];
    _b3 = _f5[3];

    console.log('4.>>>', _a3, _b3);
}

{
    var _f6 = function _f6() {
        return [1, 2, 3, 4, 5];
    };

    var _a4 = void 0,
        _b4 = void 0,
        _c2 = void 0;

    var _f7 = _f6();

    var _f8 = _toArray(_f7);

    _a4 = _f8[0];
    _b4 = _f8.slice(1);

    console.log('5.>>>', _a4, _b4);
}

{
    var o = { p: 42, q: true };
    var p = o.p,
        q = o.q;

    console.log("6.>>>", p, q);
}

{
    var metaData = {
        title: 'abc',
        test: [{ title: 'test', desc: 'description' }]
    };

    var esTitle = metaData.title,
        _metaData$test = _slicedToArray(metaData.test, 1),
        cnTitle = _metaData$test[0].title;

    console.log('7.>>>', esTitle, cnTitle);
}

{
    var regx = new RegExp('xyz', 'i');
    var regx2 = new RegExp(/xyz/i); // 此处的i,只能是单个单词，不能是复合的， 如：ig

    console.log(regx.test('xyz123'), regx2.test('xyz123')); // true true

    var regx3 = new RegExp(/xyz/ig, 'i'); // es6的情况下可以使用复合的写法
    console.log(regx3.flags); // i  此处进行了覆盖
}

{
    // y, u 是es6新增的修饰符
    var s = 'bbb_bb_b';
    var a1 = /b+/g;
    var a2 = new RegExp("b+", "y"); // 粘连特性
    // 都是全局匹配，g从上一次匹配的位置即可，不强调从第一个字符开始，y修饰符必须‘_bb’就开始匹配, 一开始就不符合
    console.log("one", a1.exec(s), a2.exec(s)); // 匹配到['bbb']， 匹配到['bbb']
    console.log("one", a1.exec(s), a2.exec(s)); // 匹配到['bb'] ， 匹配到null

    console.log(a1.sticky, a2.sticky); // false true 表示是否开启了粘连模式
}

{
    //u 可以理解为unicode , 处理正则中有大于两个字节的字符时，要使用u
    console.log('u-1', /^\uD83D/.test("\uD83D\uDC2A")); // true
    console.log('u-2', /^(?:\uD83D(?![\uDC00-\uDFFF]))/.test("\uD83D\uDC2A")); // false

    console.log(/\u{61}/.test('a')); // false
    console.log(/a/.test('a')); // true 只有使用u修饰符时，才能识别到把61和‘a’相匹配，两者相等

    // 点(.)字符不能识别码点大于0xFFFF的Unicode字符，表示两个字节以上的字符时，必须加上u修饰符。
    console.log("\uD842\uDFB7"); // 𠮷 这个字符大于两个字节
    console.log('u-1', /^.$/.test("\uD842\uDFB7")); // false
    console.log('u-2', /^(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])$/.test("\uD842\uDFB7")); // true

    console.log('test-1', /𠮷{2}/.test('𠮷𠮷')); // false
    console.log('test-2', /(?:\uD842\uDFB7){2}/.test('𠮷𠮷')); // true
}

{}

/***/ })
/******/ ]);