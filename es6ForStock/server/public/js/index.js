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


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

{
    // Decorator是一个函数是用来修改类的行为；
    // 函数，扩展类的功能 ， 只在类的范畴内有用
    // 首先要安装额外的插件, babel-plugin-transform-decorators-legacy
    //在.babelrc中添加""plugins":["transform-decorators-legacy"]
    /**
     * 修饰器 代码复用性 可维护性
     */
}

{
    var _desc, _value, _class;

    var readonly = function readonly(target, name, descriptor) {
        descriptor.writable = false;
        return descriptor;
    };

    var Test = (_class = function () {
        function Test() {
            _classCallCheck(this, Test);
        }

        _createClass(Test, [{
            key: 'time',
            value: function time() {
                return '2017-08-09';
            }
        }]);

        return Test;
    }(), (_applyDecoratedDescriptor(_class.prototype, 'time', [readonly], Object.getOwnPropertyDescriptor(_class.prototype, 'time'), _class.prototype)), _class);


    var test = new Test();
    // time函数不可修改
    // test.time = function() {
    //     console.log('reset time');
    // }

    console.log(test.time());
}

{
    var _class2;

    var typename = function typename(target, name, descriptor) {
        target.myname = 'hello';
    };

    // 此时一定要放在类的上面紧邻class, myname是类的静态属性

    var _Test = typename(_class2 = function _Test() {
        _classCallCheck(this, _Test);
    }) || _class2;

    console.log(_Test.myname);
}

{
    var _dec, _dec2, _desc2, _value2, _class3;

    // 第三方的库的修饰器的js库：core-decorators.js
    // 实例：日志系统
    var log = function log(type) {
        return function (target, name, descriptor) {
            var src_method = descriptor.value;
            descriptor.value = function () {
                for (var _len = arguments.length, arg = Array(_len), _key = 0; _key < _len; _key++) {
                    arg[_key] = arguments[_key];
                }

                src_method.apply(target, arg);
                console.info('log ' + type);
            };
        };
    };

    var AD = (_dec = log('show'), _dec2 = log('click'), (_class3 = function () {
        function AD() {
            _classCallCheck(this, AD);
        }

        _createClass(AD, [{
            key: 'show',
            value: function show() {
                console.info('ad is show');
            }
        }, {
            key: 'click',
            value: function click() {
                console.log('ad is click');
            }
        }]);

        return AD;
    }(), (_applyDecoratedDescriptor(_class3.prototype, 'show', [_dec], Object.getOwnPropertyDescriptor(_class3.prototype, 'show'), _class3.prototype), _applyDecoratedDescriptor(_class3.prototype, 'click', [_dec2], Object.getOwnPropertyDescriptor(_class3.prototype, 'click'), _class3.prototype)), _class3));


    var ad = new AD();
    ad.show();
    ad.click();
}

/***/ })
/******/ ]);