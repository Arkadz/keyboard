/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./style.css":
/*!*********************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./style.css ***!
  \*********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  margin: 0;\\n  padding: 0;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  height: 100vh;\\n}\\n\\nh1 {\\n  position: fixed;\\n  top: 0;\\n}\\n\\np {\\n  position: fixed;\\n  top: 20%;\\n}\\n\\n.use-keyboard-input {\\n  position: absolute;\\n  top: 5%;\\n  width: 70vw;\\n  height: 150px;\\n}\\n\\n.keyboard {\\n  position: fixed;\\n  border-radius: 20px;\\n  top: 30%;\\n  width: 100%;\\n  max-width: 800px;\\n  min-width: 555px;\\n  padding: 5px 0;\\n  background: #2a1f48;\\n  box-shadow: 0 0 50px rgba(0, 0, 0, 0.5);\\n  user-select: none;\\n  transition: bottom 0.4s;\\n}\\n\\n.keyboard--hidden {\\n  bottom: -100%;\\n}\\n\\n.keyboard__keys {\\n  text-align: center;\\n}\\n\\n.keyboard__key {\\n  height: 45px;\\n  width: 5%;\\n  max-width: 90px;\\n  margin: 2px;\\n  border: none;\\n  background: rgba(255, 255, 255, 0.2);\\n  color: #ffffff;\\n  font-size: 0.9rem;\\n  outline: none;\\n  cursor: pointer;\\n  display: inline-flex;\\n  align-items: center;\\n  justify-content: center;\\n  vertical-align: top;\\n  padding: 0;\\n  -webkit-tap-highlight-color: transparent;\\n  position: relative;\\n}\\n\\n.keyboard__key:active {\\n  background: rgba(255, 255, 255, 0.12);\\n}\\n\\n.keyboard__key--wide {\\n  width: 12%;\\n}\\n\\n.keyboard__key--extra-wide {\\n  width: 36%;\\n  max-width: 500px;\\n}\\n\\n.keyboard__key--dark {\\n  background: rgba(0, 0, 0, 0.25);\\n}\\n\\n.key_down {\\n  transition: 0.1s;\\n  color: black;\\n  background-color: #a89898;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://virtual-keyboard/./style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./style.css":
/*!*******************!*\
  !*** ./style.css ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!./node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://virtual-keyboard/./style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style.css */ \"./style.css\");\n\r\n\r\n\r\nconst Keyboard = {\r\n    elements: {\r\n        main: null,\r\n        keysContainer: null,\r\n        keys: [],\r\n        eventKeys: []\r\n    },\r\n\r\n    eventHandlers: {\r\n        oninput: null,\r\n        onclose: null\r\n    },\r\n\r\n    properties: {\r\n        value: \"\",\r\n        capsLock: false,\r\n        flag: true\r\n    },\r\n\r\n    startKeyboard() {\r\n        const header_element = document.createElement('h1');\r\n        header_element.innerText = 'Virtual Keyboard';\r\n        document.body.appendChild(header_element);\r\n\r\n        const textarea = document.createElement('textarea');\r\n        textarea.classList.add('use-keyboard-input');\r\n        document.body.appendChild(textarea);\r\n        \r\n        const p = document.createElement('p');\r\n        p.innerText = 'Shift + Alt to switch En / Ru';\r\n        document.body.appendChild(p);\r\n\r\n        \r\n        this.elements.main = document.createElement('div');\r\n        this.elements.keysContainer = document.createElement('div');\r\n\r\n       \r\n        this.elements.main.classList.add('keyboard', 'keyboard--hidden');\r\n        this.elements.keysContainer.classList.add('keyboard__keys');\r\n        this.elements.keysContainer.appendChild(this.createKeys(this.properties.flag));\r\n\r\n        this.elements.keys = this.elements.keysContainer.querySelectorAll('.keyboard__key');\r\n\r\n        \r\n        this.elements.main.appendChild(this.elements.keysContainer);\r\n        document.body.appendChild(this.elements.main);\r\n\r\n       \r\n        document.querySelectorAll('.use-keyboard-input').forEach(element => {\r\n            element.addEventListener(\"focus\", () => {\r\n                this.open(element.value, currentValue => {\r\n                    element.value = currentValue;\r\n                });\r\n            });\r\n        });\r\n\r\n        document.addEventListener('keydown', (event)=>{\r\n                \r\n            if (event.key == 'Shift' && event.altKey) {\r\n                this.elements.keysContainer.innerHTML = '';\r\n                this.properties.flag = !this.properties.flag;\r\n                this.elements.keysContainer.appendChild(this.createKeys(this.properties.flag));\r\n            }\r\n\r\n            this.elements.keys.forEach(item=>{\r\n                if (item.dataset.key == event.key || item.dataset.key == event.key.toLocaleLowerCase()) {\r\n                   \r\n                    if (item.dataset.val != 'none') this.properties.value += event.key;\r\n                   \r\n                   item.classList.add('key_down');\r\n                  \r\n                   setTimeout(()=>{item.classList.remove('key_down')},200);\r\n                } \r\n            })\r\n        });\r\n    },\r\n\r\n    createKeys(flag) {\r\n        \r\n        function keyReturn(isEn) {\r\n            return isEn ? keyLayout : keyLayoutRus;\r\n        }\r\n        \r\n        const fragment = document.createDocumentFragment();\r\n\r\n        const keyLayout = [\r\n            \"`\", \"1\", \"2\", \"3\", \"4\", \"5\", \"6\", \"7\", \"8\", \"9\", \"0\", \"-\", \"=\", \"backspace\",\r\n            \"tab\", \"q\", \"w\", \"e\", \"r\", \"t\", \"y\", \"u\", \"i\", \"o\", \"p\", \"[\", \"]\", \"\\\\\", \"del\",\r\n            \"caps\", \"a\", \"s\", \"d\", \"f\", \"g\", \"h\", \"j\", \"k\", \"l\", \";\", \"'\", \"#\", \"enter\",\r\n            \"shift\", \"z\", \"x\", \"c\", \"v\", \"b\", \"n\", \"m\", \",\", \".\", \"?\", \"R_Shift\", \"up\",\r\n            \"ctrl\", \"Win\", \"alt\", \"space\", \"alt\", \"ctrl\", \"left\", \"down\", \"right\"\r\n        ];\r\n\r\n        const keyLayoutRus = [\r\n            \"`\", \"1\", \"2\", \"3\", \"4\", \"5\", \"6\", \"7\", \"8\", \"9\", \"0\", \"-\", \"=\", \"backspace\",\r\n            \"tab\", \"й\", \"ц\", \"у\", \"к\", \"е\", \"н\", \"г\", \"ш\", \"щ\", \"з\", \"[\", \"]\", \"\\\\\", \"del\",\r\n            \"caps\", \"ф\", \"ы\", \"в\", \"а\", \"п\", \"р\", \"о\", \"л\", \"д\", \";\", \"'\", \"#\", \"enter\",\r\n            \"shift\", \"я\", \"ч\", \"с\", \"м\", \"и\", \"т\", \"ь\", \"б\", \"ю\", \"?\", \"R_Shift\", \"up\",\r\n            \"ctrl\", \"Win\", \"alt\", \"space\", \"alt\", \"ctrl\", \"left\", \"down\", \"right\"\r\n        ]\r\n\r\n       \r\n        const createIconHTML = (icon_name) => {\r\n            return `<i class=\"material-icons\">${icon_name}</i>`;\r\n        };\r\n\r\n        const array_key = keyReturn(flag);\r\n\r\n        array_key.forEach(key => {\r\n            const keyElement = document.createElement(\"button\");\r\n            const insertLineBreak = [\"backspace\", \"del\", \"enter\", \"up\"].indexOf(key) !== -1;\r\n\r\n            \r\n            keyElement.setAttribute(\"type\", \"button\");\r\n            keyElement.classList.add(\"keyboard__key\");\r\n\r\n            switch (key) {\r\n                case \"backspace\":\r\n                    keyElement.classList.add(\"keyboard__key--wide\");\r\n                    keyElement.innerHTML = createIconHTML(\"backspace\");\r\n                    keyElement.setAttribute(\"data-key\", \"Backspace\");\r\n                    keyElement.setAttribute(\"data-val\", \"none\");\r\n\r\n                    keyElement.addEventListener(\"click\", () => {\r\n                        this.properties.value = this.properties.value.substring(0, this.properties.value.length - 1);\r\n                        this.handEvent(\"oninput\");\r\n                    });\r\n\r\n                    break;\r\n            \r\n                case \"del\":\r\n                    \r\n                    keyElement.textContent = \"del\";\r\n                    keyElement.setAttribute(\"data-capsLock\", \"none\");\r\n                    keyElement.setAttribute(\"data-key\", \"Delete\");\r\n                    keyElement.setAttribute(\"data-val\", \"none\");\r\n\r\n                    keyElement.addEventListener(\"click\", () => {\r\n                        this.properties.value = this.properties.value.substring(0, this.properties.value.length - 1);\r\n                        this.handEvent(\"oninput\");\r\n                    });\r\n        \r\n                    break;\r\n    \r\n\r\n                case \"caps\":\r\n                    keyElement.classList.add(\"keyboard__key--wide\", \"keyboard__key--activatable\");\r\n                    keyElement.innerHTML = createIconHTML(\"keyboard_capslock\");\r\n                    keyElement.setAttribute(\"data-val\", \"none\");\r\n                    keyElement.addEventListener(\"click\", () => {\r\n                        this.toggleCapsLock();\r\n                        \r\n                    });\r\n\r\n                    break;\r\n\r\n                case \"enter\":\r\n                    keyElement.classList.add(\"keyboard__key--wide\");\r\n                    keyElement.innerHTML = createIconHTML(\"keyboard_return\");\r\n                    keyElement.setAttribute(\"data-val\", \"none\");\r\n                    keyElement.setAttribute(\"data-key\", \"Enter\");\r\n                    keyElement.addEventListener(\"click\", () => {\r\n                        this.properties.value += \"\\n\";\r\n                        this.handEvent(\"oninput\");\r\n                    });\r\n\r\n                    break;\r\n\r\n                case \"space\":\r\n                    keyElement.classList.add(\"keyboard__key--extra-wide\");\r\n                    keyElement.innerHTML = createIconHTML(\"\");\r\n                    keyElement.setAttribute(\"data-key\", \" \");\r\n\r\n                    keyElement.addEventListener(\"click\", () => {\r\n                        this.properties.value += \" \";\r\n                        this.handEvent(\"oninput\");\r\n                    });\r\n\r\n                    break;\r\n\r\n\r\n                case \"tab\":\r\n                    keyElement.classList.add(\"keyboard__key--wide\");\r\n                    keyElement.innerHTML = createIconHTML(\"keyboard_tab\");\r\n    \r\n                    keyElement.addEventListener(\"click\", () => {\r\n                        this.properties.value += \"    \";\r\n                        this.handEvent(\"oninput\");\r\n                    });\r\n    \r\n                    break;\r\n\r\n                case \"Win\":\r\n                    keyElement.innerHTML = createIconHTML(\"grid_view\");\r\n            \r\n                    keyElement.addEventListener(\"click\", () => {\r\n                    this.properties.value += \"\";\r\n                    this.handEvent(\"oninput\");\r\n                    });\r\n            \r\n                    break;\r\n\r\n                case \"left\":\r\n                    keyElement.innerHTML = createIconHTML(\"arrow_left\");\r\n    \r\n                    keyElement.addEventListener(\"click\", () => {\r\n                        this.properties.value += \"\";\r\n                        this.handEvent(\"oninput\");\r\n                    });\r\n    \r\n                        break;\r\n\r\n                case \"down\":\r\n                            \r\n                    keyElement.innerHTML = createIconHTML(\"arrow_drop_down\");\r\n            \r\n                    keyElement.addEventListener(\"click\", () => {\r\n                        this.properties.value += \"\";\r\n                        this.handEvent(\"oninput\");\r\n                    });\r\n            \r\n                    break;\r\n\r\n                case \"right\":\r\n                    keyElement.innerHTML = createIconHTML(\"arrow_right\");\r\n        \r\n                    keyElement.addEventListener(\"click\", () => {\r\n                        this.properties.value += \"\";\r\n                        this.handEvent(\"oninput\");\r\n                    });\r\n        \r\n                    break;\r\n\r\n                case \"up\":\r\n                    keyElement.innerHTML = createIconHTML(\"arrow_drop_up\");\r\n            \r\n                    keyElement.addEventListener(\"click\", () => {\r\n                        this.properties.value += \"\";\r\n                        this.handEvent(\"oninput\");\r\n                    });\r\n                    break;\r\n                \r\n                case \"shift\":\r\n                    keyElement.classList.add(\"keyboard__key--wide\");\r\n                    keyElement.textContent = \"Shift\";\r\n                    keyElement.setAttribute(\"data-capsLock\", \"none\");\r\n    \r\n                    keyElement.addEventListener(\"click\", () => {\r\n                        this.properties.value += \"\";\r\n                        this.handEvent(\"oninput\");\r\n                    });\r\n    \r\n                break;\r\n\r\n                case \"R_Shift\":\r\n                    keyElement.classList.add(\"keyboard__key--wide\");\r\n                    keyElement.textContent = \"Shift\";\r\n                    keyElement.setAttribute(\"data-capsLock\", \"none\");\r\n    \r\n                    keyElement.addEventListener(\"click\", () => {\r\n                        this.properties.value += \"    \";\r\n                        this.handEvent(\"oninput\");\r\n                    });\r\n    \r\n                break;\r\n\r\n                case \"ctrl\":\r\n                    keyElement.classList.add(\"keyboard__key--wide\");\r\n                    keyElement.textContent = \"ctrl\";\r\n                    keyElement.setAttribute(\"data-capsLock\", \"none\");\r\n                    keyElement.addEventListener(\"click\", () => {\r\n                        this.properties.value += \"    \";\r\n                        this.handEvent(\"oninput\");\r\n                    });\r\n    \r\n                break;\r\n\r\n                case \"alt\":\r\n                    \r\n                    keyElement.textContent = \"alt\";\r\n                    keyElement.setAttribute(\"data-capsLock\", \"none\");\r\n                    keyElement.addEventListener(\"click\", () => {\r\n                        this.properties.value += \"    \";\r\n                        this.handEvent(\"oninput\");\r\n                    });\r\n    \r\n                break;\r\n\r\n\r\n\r\n                default:\r\n                    keyElement.textContent = key.toLowerCase();\r\n                    keyElement.setAttribute(\"data-key\", key);\r\n                    keyElement.addEventListener(\"click\", () => {\r\n                        this.properties.value += this.properties.capsLock ? key.toUpperCase() : key.toLowerCase();\r\n                        this.handEvent(\"oninput\");\r\n                    });\r\n\r\n                    break;\r\n            }\r\n\r\n            fragment.appendChild(keyElement);\r\n\r\n            if (insertLineBreak) {\r\n                fragment.appendChild(document.createElement(\"br\"));\r\n            }\r\n        });\r\n\r\n        return fragment;\r\n    },\r\n\r\n    handEvent(handlerName) {\r\n        if (typeof this.eventHandlers[handlerName] == \"function\") {\r\n            this.eventHandlers[handlerName](this.properties.value);\r\n        }\r\n    },\r\n\r\n    toggleCapsLock() {\r\n        this.properties.capsLock = !this.properties.capsLock;\r\n        \r\n        for (const key of document.querySelector(\"body > div > div\").childNodes) {\r\n            \r\n            if (key.childElementCount === 0 && key.dataset.capslock != 'none') {\r\n                key.textContent = this.properties.capsLock ? key.textContent.toUpperCase() : key.textContent.toLowerCase();\r\n            }\r\n        }\r\n    },\r\n\r\n    open(initialValue, oninput, onclose) {\r\n        this.properties.value = initialValue || \"\";\r\n        this.eventHandlers.oninput = oninput;\r\n        this.eventHandlers.onclose = onclose;\r\n        this.elements.main.classList.remove(\"keyboard--hidden\");\r\n    },\r\n    \r\n\r\n    close() {\r\n        this.properties.value = \"\";\r\n        this.eventHandlers.oninput = oninput;\r\n        this.eventHandlers.onclose = onclose;\r\n        this.elements.main.classList.add(\"keyboard--hidden\");\r\n    }\r\n};\r\n\r\nwindow.addEventListener(\"DOMContentLoaded\", function () {\r\n    Keyboard.startKeyboard();\r\n    Keyboard.elements.main.classList.remove(\"keyboard--hidden\");\r\n});\r\n\r\n\n\n//# sourceURL=webpack://virtual-keyboard/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;