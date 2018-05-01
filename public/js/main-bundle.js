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
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./resources/assets/ts/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/assets/ts/UriGenerator.ts":
/*!*********************************************!*\
  !*** ./resources/assets/ts/UriGenerator.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {\n    \"use strict\";\n    exports.__esModule = true;\n    var UriGenerator = (function () {\n        function UriGenerator(input, output) {\n            this.input = input;\n            this.output = output;\n            this.input.addEventListener(\"keyup\", this.generateUri.bind(this));\n        }\n        UriGenerator.prototype.generateUri = function () {\n            var uri = this.input.value.toLowerCase();\n            uri = this.removeSpaces(uri);\n            uri = this.removeAccents(uri);\n            uri = this.removeSpecialCharacters(uri);\n            uri = this.removeRepeateHyphen(uri);\n            this.output.value = uri;\n        };\n        UriGenerator.prototype.removeSpaces = function (uri) {\n            return uri.replace(/\\s/g, \"-\");\n        };\n        UriGenerator.prototype.removeAccents = function (uri) {\n            uri = uri.replace(/[áàãâ]/g, \"a\");\n            uri = uri.replace(/[éèẽê]/g, \"e\");\n            uri = uri.replace(/[íìĩî]/g, \"i\");\n            uri = uri.replace(/[óòõô]/g, \"o\");\n            uri = uri.replace(/[úùũûü]/g, \"u\");\n            uri = uri.replace(/[ç]/g, \"c\");\n            return uri;\n        };\n        UriGenerator.prototype.removeSpecialCharacters = function (uri) {\n            uri = uri.replace(/\\\"/g, \"\");\n            uri = uri.replace(/\\'/g, \"\");\n            uri = uri.replace(/\\#/g, \"\");\n            uri = uri.replace(/\\*/g, \"\");\n            uri = uri.replace(/\\&/g, \"\");\n            uri = uri.replace(/\\$/g, \"\");\n            uri = uri.replace(/\\%/g, \"\");\n            uri = uri.replace(/\\@/g, \"\");\n            uri = uri.replace(/\\(/g, \"\");\n            uri = uri.replace(/\\)/g, \"\");\n            uri = uri.replace(/\\!/g, \"\");\n            uri = uri.replace(/\\?/g, \"\");\n            uri = uri.replace(/\\+/g, \"\");\n            uri = uri.replace(/\\=/g, \"\");\n            uri = uri.replace(/\\//g, \"\");\n            uri = uri.replace(/\\|/g, \"\");\n            uri = uri.replace(/\\,/g, \"\");\n            uri = uri.replace(/\\;/g, \"\");\n            uri = uri.replace(/\\:/g, \"\");\n            uri = uri.replace(/\\./g, \"\");\n            uri = uri.replace(/\\}/g, \"\");\n            uri = uri.replace(/\\{/g, \"\");\n            uri = uri.replace(/\\[/g, \"\");\n            uri = uri.replace(/\\]/g, \"\");\n            uri = uri.replace(/\\§/g, \"\");\n            uri = uri.replace(/\\º/g, \"\");\n            uri = uri.replace(/\\ª/g, \"\");\n            return uri;\n        };\n        UriGenerator.prototype.removeRepeateHyphen = function (uri) {\n            return uri.replace(/\\-\\-/g, \"-\");\n        };\n        return UriGenerator;\n    }());\n    exports.UriGenerator = UriGenerator;\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n\n//# sourceURL=webpack:///./resources/assets/ts/UriGenerator.ts?");

/***/ }),

/***/ "./resources/assets/ts/main.ts":
/*!*************************************!*\
  !*** ./resources/assets/ts/main.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./UriGenerator */ \"./resources/assets/ts/UriGenerator.ts\")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, UriGenerator_1) {\n    \"use strict\";\n    exports.__esModule = true;\n    window.addEventListener(\"DOMContentLoaded\", function () {\n        var titleInput = document.querySelector(\"#title\");\n        var uriInput = document.querySelector(\"#uri\");\n        var uriGenerator = new UriGenerator_1.UriGenerator(titleInput, uriInput);\n    });\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n\n//# sourceURL=webpack:///./resources/assets/ts/main.ts?");

/***/ })

/******/ });