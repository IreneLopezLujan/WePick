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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.jsx":
/*!***********************!*\
  !*** ./src/index.jsx ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: C:\\\\Users\\\\dell\\\\Documents\\\\College Work\\\\Year 4\\\\Group Project Final Year\\\\4th-Year-Project\\\\react-frontend\\\\src\\\\index.jsx: Unexpected token (14:0)\\n\\n\\u001b[0m \\u001b[90m 12 | \\u001b[39m\\u001b[36mimport\\u001b[39m \\u001b[33mLogout\\u001b[39m from \\u001b[32m'./components/Logout'\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 13 | \\u001b[39m\\u001b[36mimport\\u001b[39m \\u001b[33mHome\\u001b[39m from \\u001b[32m'./components/Home'\\u001b[39m\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 14 | \\u001b[39m\\u001b[33m<<\\u001b[39m\\u001b[33m<<\\u001b[39m\\u001b[33m<<\\u001b[39m\\u001b[33m<\\u001b[39m \\u001b[33mHEAD\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m\\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 15 | \\u001b[39m\\u001b[36mimport\\u001b[39m \\u001b[33mStickyFooter\\u001b[39m from \\u001b[32m'./components/StickyFooter'\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 16 | \\u001b[39m\\u001b[36mimport\\u001b[39m \\u001b[33mCarousel\\u001b[39m from \\u001b[32m'./components/Carousel'\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 17 | \\u001b[39m\\u001b[0m\\n    at Object.raise (C:\\\\Users\\\\dell\\\\Documents\\\\College Work\\\\Year 4\\\\Group Project Final Year\\\\4th-Year-Project\\\\react-frontend\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:3834:17)\\n    at Object.unexpected (C:\\\\Users\\\\dell\\\\Documents\\\\College Work\\\\Year 4\\\\Group Project Final Year\\\\4th-Year-Project\\\\react-frontend\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:5142:16)\\n    at Object.parseExprAtom (C:\\\\Users\\\\dell\\\\Documents\\\\College Work\\\\Year 4\\\\Group Project Final Year\\\\4th-Year-Project\\\\react-frontend\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:6279:20)\\n    at Object.parseExprAtom (C:\\\\Users\\\\dell\\\\Documents\\\\College Work\\\\Year 4\\\\Group Project Final Year\\\\4th-Year-Project\\\\react-frontend\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:3547:20)\\n    at Object.parseExprSubscripts (C:\\\\Users\\\\dell\\\\Documents\\\\College Work\\\\Year 4\\\\Group Project Final Year\\\\4th-Year-Project\\\\react-frontend\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:5848:23)\\n    at Object.parseMaybeUnary (C:\\\\Users\\\\dell\\\\Documents\\\\College Work\\\\Year 4\\\\Group Project Final Year\\\\4th-Year-Project\\\\react-frontend\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:5828:21)\\n    at Object.parseExprOps (C:\\\\Users\\\\dell\\\\Documents\\\\College Work\\\\Year 4\\\\Group Project Final Year\\\\4th-Year-Project\\\\react-frontend\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:5717:23)\\n    at Object.parseMaybeConditional (C:\\\\Users\\\\dell\\\\Documents\\\\College Work\\\\Year 4\\\\Group Project Final Year\\\\4th-Year-Project\\\\react-frontend\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:5690:23)\\n    at Object.parseMaybeAssign (C:\\\\Users\\\\dell\\\\Documents\\\\College Work\\\\Year 4\\\\Group Project Final Year\\\\4th-Year-Project\\\\react-frontend\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:5635:21)\\n    at Object.parseExpression (C:\\\\Users\\\\dell\\\\Documents\\\\College Work\\\\Year 4\\\\Group Project Final Year\\\\4th-Year-Project\\\\react-frontend\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:5587:23)\\n    at Object.parseStatementContent (C:\\\\Users\\\\dell\\\\Documents\\\\College Work\\\\Year 4\\\\Group Project Final Year\\\\4th-Year-Project\\\\react-frontend\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7321:23)\\n    at Object.parseStatement (C:\\\\Users\\\\dell\\\\Documents\\\\College Work\\\\Year 4\\\\Group Project Final Year\\\\4th-Year-Project\\\\react-frontend\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7199:17)\\n    at Object.parseBlockOrModuleBlockBody (C:\\\\Users\\\\dell\\\\Documents\\\\College Work\\\\Year 4\\\\Group Project Final Year\\\\4th-Year-Project\\\\react-frontend\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7757:25)\\n    at Object.parseBlockBody (C:\\\\Users\\\\dell\\\\Documents\\\\College Work\\\\Year 4\\\\Group Project Final Year\\\\4th-Year-Project\\\\react-frontend\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7744:10)\\n    at Object.parseTopLevel (C:\\\\Users\\\\dell\\\\Documents\\\\College Work\\\\Year 4\\\\Group Project Final Year\\\\4th-Year-Project\\\\react-frontend\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7164:10)\\n    at Object.parse (C:\\\\Users\\\\dell\\\\Documents\\\\College Work\\\\Year 4\\\\Group Project Final Year\\\\4th-Year-Project\\\\react-frontend\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8565:17)\\n    at parse (C:\\\\Users\\\\dell\\\\Documents\\\\College Work\\\\Year 4\\\\Group Project Final Year\\\\4th-Year-Project\\\\react-frontend\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10537:38)\\n    at parser (C:\\\\Users\\\\dell\\\\Documents\\\\College Work\\\\Year 4\\\\Group Project Final Year\\\\4th-Year-Project\\\\react-frontend\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\transformation\\\\normalize-file.js:170:34)\\n    at normalizeFile (C:\\\\Users\\\\dell\\\\Documents\\\\College Work\\\\Year 4\\\\Group Project Final Year\\\\4th-Year-Project\\\\react-frontend\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\transformation\\\\normalize-file.js:138:11)\\n    at runSync (C:\\\\Users\\\\dell\\\\Documents\\\\College Work\\\\Year 4\\\\Group Project Final Year\\\\4th-Year-Project\\\\react-frontend\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\transformation\\\\index.js:44:43)\\n    at runAsync (C:\\\\Users\\\\dell\\\\Documents\\\\College Work\\\\Year 4\\\\Group Project Final Year\\\\4th-Year-Project\\\\react-frontend\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\transformation\\\\index.js:35:14)\\n    at process.nextTick (C:\\\\Users\\\\dell\\\\Documents\\\\College Work\\\\Year 4\\\\Group Project Final Year\\\\4th-Year-Project\\\\react-frontend\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\transform.js:34:34)\\n    at process._tickCallback (internal/process/next_tick.js:61:11)\");\n\n//# sourceURL=webpack:///./src/index.jsx?");

/***/ }),

/***/ 0:
/*!*****************************!*\
  !*** multi ./src/index.jsx ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/index.jsx */\"./src/index.jsx\");\n\n\n//# sourceURL=webpack:///multi_./src/index.jsx?");

/***/ })

/******/ });