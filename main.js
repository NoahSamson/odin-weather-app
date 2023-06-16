/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./../assets/imgs/bg3.jpg */ "./assets/imgs/bg3.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body,
html {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

body {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-repeat: no-repeat;
  /* background-size: 100% 100%; */
  background-size: cover;
  /* background-size: contain; */
  color: white;
}

.container {
  display: flex;
  flex-direction: column;
  padding: 50px;
  font-family: Arial, Helvetica, sans-serif;
  gap: 40px;
}

.top-container {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

/* Left */
#left-weather-text {
  font-size: 50px;
  margin: 0 0 10px 0;
  font-weight: 500;
}

#left-city-text {
  font-size: 18px;
  font-weight: 500;
  margin: 0 0 10px 0;
}

#left-date,
#left-time {
  font-size: 14px;
  font-weight: 600;
  margin: 0;
}

#left-current-temp {
  font-size: 60px;
  font-weight: 600;
  margin: 15px 0 5px 0;
}

#left-change-units {
  color: white;
  background: none;
  border: none;
  font-size: 12px;
}

.left-search {
  border-bottom: 2px solid white;
  padding: 5px;
  width: 155px;
}

#left-city-search {
  font-size: 15px;
  color: white;
  background: none;
  border: none;
  width: 125px;
  padding-right: 3px;
  outline: none;
}

#left-city-search::placeholder {
  color: white;
}

.left-weather-icon {
  filter: invert(100%);
  width: 165px;
}

/* Right */
.right-sub svg {
  width: 50px;
  height: 50px;
  stroke-width: 1px;
  filter: invert(100%);
}
.right-sub {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  margin-bottom: 30px;
}

.right-sub p {
  margin: 6px;
}

.right-desc-text {
  font-size: 15px;
  font-weight: 600;
}

.right-desc-value {
  font-size: 20px;
  font-weight: 600;
}

/* Bottom */
.bottom-container {
  display: flex;
  justify-content: space-around;
}

.forecast-title {
  font-size: 30px;
  border-bottom: 2px solid white;
  text-align: center;
}

.forecast-temp {
  font-weight: 600;
  font-size: 30px;
  margin-bottom: 5px;
  text-align: center;
}

.forecast-max-temp {
  display: flex;
  font-weight: 600;
  justify-content: center;
}

.forecast-max-temp p {
  margin: 5px 0;
}

.forecast-max-temp svg {
  filter: invert(100%);
  width: 20px;
}

.forecast-weatherIcon {
  filter: invert(100%);
  padding: 30px 0;
  width: 130px;
}

/* Overlay */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  color: white;
  font-size: 24px;
  z-index: 1;
}

.overlay-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  color: #ffffff;
}

.text {
  margin-top: 10px;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;EAEE,WAAW;EACX,YAAY;EACZ,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,yDAAiD;EACjD,4BAA4B;EAC5B,gCAAgC;EAChC,sBAAsB;EACtB,8BAA8B;EAC9B,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,aAAa;EACb,yCAAyC;EACzC,SAAS;AACX;;AAEA;EACE,WAAW;EACX,aAAa;EACb,8BAA8B;AAChC;;AAEA,SAAS;AACT;EACE,eAAe;EACf,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;;EAEE,eAAe;EACf,gBAAgB;EAChB,SAAS;AACX;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,oBAAoB;AACtB;;AAEA;EACE,YAAY;EACZ,gBAAgB;EAChB,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,8BAA8B;EAC9B,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,gBAAgB;EAChB,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,aAAa;AACf;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,oBAAoB;EACpB,YAAY;AACd;;AAEA,UAAU;AACV;EACE,WAAW;EACX,YAAY;EACZ,iBAAiB;EACjB,oBAAoB;AACtB;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,SAAS;EACT,mBAAmB;AACrB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,gBAAgB;AAClB;;AAEA,WAAW;AACX;EACE,aAAa;EACb,6BAA6B;AAC/B;;AAEA;EACE,eAAe;EACf,8BAA8B;EAC9B,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,gBAAgB;EAChB,uBAAuB;AACzB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,oBAAoB;EACpB,WAAW;AACb;;AAEA;EACE,oBAAoB;EACpB,eAAe;EACf,YAAY;AACd;;AAEA,YAAY;AACZ;EACE,eAAe;EACf,MAAM;EACN,OAAO;EACP,WAAW;EACX,YAAY;EACZ,oCAAoC;EACpC,aAAa;EACb,YAAY;EACZ,eAAe;EACf,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;EACZ,cAAc;AAChB;;AAEA;EACE,gBAAgB;AAClB","sourcesContent":["body,\r\nhtml {\r\n  width: 100%;\r\n  height: 100%;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nbody {\r\n  background-image: url(\"./../assets/imgs/bg3.jpg\");\r\n  background-repeat: no-repeat;\r\n  /* background-size: 100% 100%; */\r\n  background-size: cover;\r\n  /* background-size: contain; */\r\n  color: white;\r\n}\r\n\r\n.container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 50px;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  gap: 40px;\r\n}\r\n\r\n.top-container {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n/* Left */\r\n#left-weather-text {\r\n  font-size: 50px;\r\n  margin: 0 0 10px 0;\r\n  font-weight: 500;\r\n}\r\n\r\n#left-city-text {\r\n  font-size: 18px;\r\n  font-weight: 500;\r\n  margin: 0 0 10px 0;\r\n}\r\n\r\n#left-date,\r\n#left-time {\r\n  font-size: 14px;\r\n  font-weight: 600;\r\n  margin: 0;\r\n}\r\n\r\n#left-current-temp {\r\n  font-size: 60px;\r\n  font-weight: 600;\r\n  margin: 15px 0 5px 0;\r\n}\r\n\r\n#left-change-units {\r\n  color: white;\r\n  background: none;\r\n  border: none;\r\n  font-size: 12px;\r\n}\r\n\r\n.left-search {\r\n  border-bottom: 2px solid white;\r\n  padding: 5px;\r\n  width: 155px;\r\n}\r\n\r\n#left-city-search {\r\n  font-size: 15px;\r\n  color: white;\r\n  background: none;\r\n  border: none;\r\n  width: 125px;\r\n  padding-right: 3px;\r\n  outline: none;\r\n}\r\n\r\n#left-city-search::placeholder {\r\n  color: white;\r\n}\r\n\r\n.left-weather-icon {\r\n  filter: invert(100%);\r\n  width: 165px;\r\n}\r\n\r\n/* Right */\r\n.right-sub svg {\r\n  width: 50px;\r\n  height: 50px;\r\n  stroke-width: 1px;\r\n  filter: invert(100%);\r\n}\r\n.right-sub {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  gap: 20px;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.right-sub p {\r\n  margin: 6px;\r\n}\r\n\r\n.right-desc-text {\r\n  font-size: 15px;\r\n  font-weight: 600;\r\n}\r\n\r\n.right-desc-value {\r\n  font-size: 20px;\r\n  font-weight: 600;\r\n}\r\n\r\n/* Bottom */\r\n.bottom-container {\r\n  display: flex;\r\n  justify-content: space-around;\r\n}\r\n\r\n.forecast-title {\r\n  font-size: 30px;\r\n  border-bottom: 2px solid white;\r\n  text-align: center;\r\n}\r\n\r\n.forecast-temp {\r\n  font-weight: 600;\r\n  font-size: 30px;\r\n  margin-bottom: 5px;\r\n  text-align: center;\r\n}\r\n\r\n.forecast-max-temp {\r\n  display: flex;\r\n  font-weight: 600;\r\n  justify-content: center;\r\n}\r\n\r\n.forecast-max-temp p {\r\n  margin: 5px 0;\r\n}\r\n\r\n.forecast-max-temp svg {\r\n  filter: invert(100%);\r\n  width: 20px;\r\n}\r\n\r\n.forecast-weatherIcon {\r\n  filter: invert(100%);\r\n  padding: 30px 0;\r\n  width: 130px;\r\n}\r\n\r\n/* Overlay */\r\n.overlay {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: rgba(0, 0, 0, 0.8);\r\n  display: flex;\r\n  color: white;\r\n  font-size: 24px;\r\n  z-index: 1;\r\n}\r\n\r\n.overlay-content {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  flex-grow: 1;\r\n  color: #ffffff;\r\n}\r\n\r\n.text {\r\n  margin-top: 10px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/js/apiFunctions.js":
/*!********************************!*\
  !*** ./src/js/apiFunctions.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getData: () => (/* binding */ getData)
/* harmony export */ });
async function getData(cityName, units) {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=83686476d69d4386b59102752231206&q=${cityName}&days=7&aqi=yes&alerts=no`
    );

    const data = await response.json();

    let weatherData = {
      name: data.location.name,
      // region: data.location.region,
      // country: data.location.country,
      // timezone: data.location.tz_id,
      localTime: data.location.localtime,
      code: data.current.condition.code,
      text: data.current.condition.text,
      isDay: data.current.is_day,
      humidity: data.current.humidity,
      // cloud: data.current.cloud,
      // uv: data.current.uv,
      airQuality: data.current.air_quality["us-epa-index"],
      // windDegree: data.current.wind_degree,
      // windDir: data.current.wind_dir,
      // forecast: data.forecast.forecastday,
    };

    if (units === "metric") {
      weatherData["feelsLike"] = data.current.feelslike_c;
      // weatherData["Gust"] = data.current.gust_kph;
      // weatherData["precip"] = data.current.precip_mm;
      // weatherData["pressure"] = data.current.pressure_mb;
      weatherData["temp"] = data.current.temp_c;
      // weatherData["vis"] = data.current.vis_km;
      weatherData["windSpeed"] = data.current.wind_kph;
      weatherData["tempUnit"] = " °C";
      weatherData["speedUnit"] = " km/h";

      const newForecastArray = [];

      data.forecast.forecastday.forEach((eachDay) => {
        console.log(eachDay.day.avgtemp_c);
        const dayForecast = {
          date: eachDay.date,
          avgTemp: eachDay.day.avgtemp_c,
          code: eachDay.day.condition.code,
          maxTemp: eachDay.day.maxtemp_c,
          // airQuality: eachDay.day.air_quality["us-epa-index"],
        };

        newForecastArray.push(dayForecast);
      });

      weatherData["forecastData"] = newForecastArray;
    } else {
      weatherData["feelsLike"] = data.current.feelslike_f;
      // weatherData["Gust"] = data.current.gust_mph;
      // weatherData["precip"] = data.current.precip_in;
      // weatherData["pressure"] = data.current.pressure_in;
      weatherData["temp"] = data.current.temp_f;
      // weatherData["vis"] = data.current.vis_miles;
      weatherData["windSpeed"] = data.current.wind_mph;
      weatherData["tempUnit"] = " °F";
      weatherData["speedUnit"] = " mph";

      const newForecastArray = [];

      data.forecast.forecastday.forEach((eachDay) => {
        console.log(eachDay.day.avgtemp_c);
        const dayForecast = {
          date: eachDay.date,
          avgTemp: eachDay.day.avgtemp_c,
          code: eachDay.day.condition.code,
          maxTemp: eachDay.day.maxtemp_f,
          // airQuality: eachDay.day.air_quality["us-epa-index"],
        };

        newForecastArray.push(dayForecast);
      });

      weatherData["forecastData"] = newForecastArray;
    }
    return weatherData;
  } catch (error) {
    console.log("Error fetching weather data:", error);
    throw error;
  }
}

async function getData2(cityName, units) {
  try {
    const response = await fetch(
      //   `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=20f7632ffc2c022654e4093c6947b4f4`
      `https://api.weatherapi.com/v1/current.json?key=83686476d69d4386b59102752231206&q=${cityName}`
    );
    const data = await response.json();

    let weatherData = {
      country: data.location.country,
      name: data.location.name,
      region: data.location.region,
      timezone: data.location.tz_id,
      localTime: data.location.localtime,
    };

    if (units === "metric") {
      weatherData["code"] = data.current.condition.code;
      weatherData["text"] = data.current.condition.text;
      weatherData["feelsLike"] = data.current.feelslike_c;
      weatherData["Gust"] = data.current.gust_kph;
      weatherData["humidity"] = data.current.humidity;
      weatherData["isDay"] = data.current.is_day;
      weatherData["precip"] = data.current.precip_mm;
      weatherData["pressure"] = data.current.pressure_mb;
      weatherData["temp"] = data.current.temp_c;
      weatherData["uv"] = data.current.uv;
      weatherData["vis"] = data.current.vis_km;
      weatherData["windDegree"] = data.current.wind_degree;
      weatherData["windDir"] = data.current.wind_dir;
      weatherData["windSpeed"] = data.current.wind_kph;
    } else {
      weatherData["code"] = data.current.condition.code;
      weatherData["text"] = data.current.condition.text;
      weatherData["feelsLike"] = data.current.feelslike_f;
      weatherData["Gust"] = data.current.gust_mph;
      weatherData["humidity"] = data.current.humidity;
      weatherData["isDay"] = data.current.is_day;
      weatherData["precip"] = data.current.precip_in;
      weatherData["pressure"] = data.current.pressure_in;
      weatherData["temp"] = data.current.temp_f;
      weatherData["uv"] = data.current.uv;
      weatherData["vis"] = data.current.vis_miles;
      weatherData["windDegree"] = data.current.wind_degree;
      weatherData["windDir"] = data.current.wind_dir;
      weatherData["windSpeed"] = data.current.wind_mph;
    }

    console.log(weatherData.country);
    console.log(weatherData.localTime);
    console.log(weatherData.code);
    console.log(data);
    return weatherData;
  } catch (error) {
    console.log("Error fetching weather data:", error);
    throw error;
  }
}




/***/ }),

/***/ "./src/js/domFunctions.js":
/*!********************************!*\
  !*** ./src/js/domFunctions.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadingScreen: () => (/* binding */ loadingScreen),
/* harmony export */   renderForecast: () => (/* binding */ renderForecast),
/* harmony export */   renderLocations: () => (/* binding */ renderLocations),
/* harmony export */   renderWeather: () => (/* binding */ renderWeather)
/* harmony export */ });
/* harmony import */ var _utility_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility.js */ "./src/js/utility.js");


function renderLocations(location) {
  const cityText = document.getElementById("left-city-text");
  cityText.textContent = location.region;
}

function renderWeather(weather) {
  // Left side
  const weatherText = document.getElementById("left-weather-text");
  weatherText.textContent = weather.text;

  const cityText = document.getElementById("left-city-text");
  cityText.textContent = weather.name;

  const currentDate = document.getElementById("left-date");
  currentDate.textContent = _utility_js__WEBPACK_IMPORTED_MODULE_0__.currentDateFormatted(
    weather.localTime
  );

  const currentTime = document.getElementById("left-time");
  currentTime.textContent = _utility_js__WEBPACK_IMPORTED_MODULE_0__.currentTimeFormatted(
    weather.localTime
  );

  const currentTemp = document.getElementById("left-current-temp");
  currentTemp.textContent = weather.temp + weather.tempUnit;

  const weatherIcon = document.getElementById("left-weather-icon");
  weatherIcon.innerHTML = _utility_js__WEBPACK_IMPORTED_MODULE_0__.getWeatherIcon(
    weather.code,
    weather.isDay
  );

  // Right Side
  const descText = document.querySelectorAll(".right-desc-text");
  const descValue = document.querySelectorAll(".right-desc-value");

  descText[0].textContent = "Feels Like";
  descValue[0].textContent = weather.feelsLike + weather.tempUnit;

  descText[1].textContent = "Humidity";
  descValue[1].textContent = weather.humidity + "%";

  descText[2].textContent = "Air Quality";
  descValue[2].textContent = _utility_js__WEBPACK_IMPORTED_MODULE_0__.getAirQuality(
    weather.airQuality
  );

  descText[3].textContent = "Wind Speed";
  descValue[3].textContent = weather.windSpeed + weather.speedUnit;
}

function renderForecast(weather) {
  let forecastData = weather.forecastData;

  const cards = document.getElementById("bottom-container");

  cards.innerHTML = "";
  for (let i = 0; i < 7; i++) {
    const card = document.createElement("div");
    card.classList.add("card");

    const title = document.createElement("p");
    title.classList.add("forecast-title");
    title.textContent = _utility_js__WEBPACK_IMPORTED_MODULE_0__.getDay(forecastData[i].date);

    const temp = document.createElement("p");
    temp.classList.add("forecast-temp");
    temp.textContent = forecastData[i].avgTemp + weather.tempUnit;

    const airQUalityDiv = document.createElement("div");
    airQUalityDiv.classList.add("forecast-max-temp");
    airQUalityDiv.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>thermometer-high</title><path d="M15 13V5A3 3 0 0 0 9 5V13A5 5 0 1 0 15 13M12 4A1 1 0 0 1 13 5H11A1 1 0 0 1 12 4Z" /></svg>
        <p>${forecastData[i].maxTemp + weather.tempUnit}</p>
        `;

    const weatherIcon = document.createElement("div");
    weatherIcon.classList.add("forecast-weatherIcon");
    weatherIcon.innerHTML = _utility_js__WEBPACK_IMPORTED_MODULE_0__.getWeatherIcon(
      forecastData[i].code,
      weather.isDay
    );

    card.append(title, temp, airQUalityDiv, weatherIcon);
    cards.appendChild(card);
  }
}

function loadingScreen(show) {
  const overlay = document.querySelector(".overlay");
  console.log(overlay.style.display);
  if (show) {
    overlay.style.display = "flex";
  } else {
    console.log(overlay.style.display);
    overlay.style.display = "none";
  }
}




/***/ }),

/***/ "./src/js/utility.js":
/*!***************************!*\
  !*** ./src/js/utility.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   currentDateFormatted: () => (/* binding */ currentDateFormatted),
/* harmony export */   currentTimeFormatted: () => (/* binding */ currentTimeFormatted),
/* harmony export */   getAirQuality: () => (/* binding */ getAirQuality),
/* harmony export */   getDay: () => (/* binding */ getDay),
/* harmony export */   getWeatherIcon: () => (/* binding */ getWeatherIcon)
/* harmony export */ });
function currentDateFormatted(localTime) {
  const date = new Date(localTime);

  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  const formattedDate = date.toLocaleDateString("en-Us", options);
  return formattedDate;
}

function currentTimeFormatted(localTime) {
  const date = new Date(localTime);

  const options = {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };

  const formattedTime = date.toLocaleTimeString("en-US", options).toLowerCase();
  return formattedTime;
}

function getAirQuality(index) {
  switch (index) {
    case 1:
      return "Good";
    case 2:
      return "Moderate";
    case 3:
      return "Unhealthy";
    case 4:
      return "Unhealthy";
    case 5:
      return "Very Unhealthy";
    case 6:
      return "Hazardous";
  }
}

function getDay(date) {
  const newDate = new Date(date);
  const dayName = newDate.toLocaleString("en-US", { weekday: "long" });
  return dayName;
}

function getWeatherIcon(code, isDay) {
  switch (code) {
    case 1000:
      // Day: Sunny, Night: Clear
      if (isDay) {
        return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>white-balance-sunny</title><path d="M3.55 19.09L4.96 20.5L6.76 18.71L5.34 17.29M12 6C8.69 6 6 8.69 6 12S8.69 18 12 18 18 15.31 18 12C18 8.68 15.31 6 12 6M20 13H23V11H20M17.24 18.71L19.04 20.5L20.45 19.09L18.66 17.29M20.45 5L19.04 3.6L17.24 5.39L18.66 6.81M13 1H11V4H13M6.76 5.39L4.96 3.6L3.55 5L5.34 6.81L6.76 5.39M1 13H4V11H1M13 20H11V23H13" /></svg>`;
      } else {
        return `<svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24">
      <title>weather-night</title>
      <path d="M17.75,4.09L15.22,6.03L16.13,9.09L13.5,7.28L10.87,9.09L11.78,6.03L9.25,4.09L12.44,4L13.5,1L14.56,4L17.75,4.09M21.25,11L19.61,12.25L20.2,14.23L18.5,13.06L16.8,14.23L17.39,12.25L15.75,11L17.81,10.95L18.5,9L19.19,10.95L21.25,11M18.97,15.95C19.8,15.87 20.69,17.05 20.16,17.8C19.84,18.25 19.5,18.67 19.08,19.07C15.17,23 8.84,23 4.94,19.07C1.03,15.17 1.03,8.83 4.94,4.93C5.34,4.53 5.76,4.17 6.21,3.85C6.96,3.32 8.14,4.21 8.06,5.04C7.79,7.9 8.75,10.87 10.95,13.06C13.14,15.26 16.1,16.22 18.97,15.95M17.33,17.97C14.5,17.81 11.7,16.64 9.53,14.5C7.36,12.31 6.2,9.5 6.04,6.68C3.23,9.82 3.34,14.64 6.35,17.66C9.37,20.67 14.19,20.78 17.33,17.97Z" />
      </svg>`;
      }

    case 1003:
      // Partly Cloudy
      if (isDay) {
        return `<svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24">
      <title>weather-partly-cloudy</title>
      <path d="M12.74,5.47C15.1,6.5 16.35,9.03 15.92,11.46C17.19,12.56 18,14.19 18,16V16.17C18.31,16.06 18.65,16 19,16A3,3 0 0,1 22,19A3,3 0 0,1 19,22H6A4,4 0 0,1 2,18A4,4 0 0,1 6,14H6.27C5,12.45 4.6,10.24 5.5,8.26C6.72,5.5 9.97,4.24 12.74,5.47M11.93,7.3C10.16,6.5 8.09,7.31 7.31,9.07C6.85,10.09 6.93,11.22 7.41,12.13C8.5,10.83 10.16,10 12,10C12.7,10 13.38,10.12 14,10.34C13.94,9.06 13.18,7.86 11.93,7.3M13.55,3.64C13,3.4 12.45,3.23 11.88,3.12L14.37,1.82L15.27,4.71C14.76,4.29 14.19,3.93 13.55,3.64M6.09,4.44C5.6,4.79 5.17,5.19 4.8,5.63L4.91,2.82L7.87,3.5C7.25,3.71 6.65,4.03 6.09,4.44M18,9.71C17.91,9.12 17.78,8.55 17.59,8L19.97,9.5L17.92,11.73C18.03,11.08 18.05,10.4 18,9.71M3.04,11.3C3.11,11.9 3.24,12.47 3.43,13L1.06,11.5L3.1,9.28C3,9.93 2.97,10.61 3.04,11.3M19,18H16V16A4,4 0 0,0 12,12A4,4 0 0,0 8,16H6A2,2 0 0,0 4,18A2,2 0 0,0 6,20H19A1,1 0 0,0 20,19A1,1 0 0,0 19,18Z" />
      </svg>`;
      } else {
        return `<svg fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="moon-cloudy" class="icon glyph"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M15.12,9.06v.07A4.64,4.64,0,0,0,14,9a5.43,5.43,0,0,0-5.11,3.85,3.51,3.51,0,0,0-3,1.37A6,6,0,0,1,3.22,7.46,3.26,3.26,0,0,0,6.31,9.61a3.3,3.3,0,0,0,3.3-3.3A3.26,3.26,0,0,0,7.46,3.22a6,6,0,0,1,7.66,5.84Zm3.32,2.86a3.76,3.76,0,0,0-.82.11A4.39,4.39,0,0,0,15,10.14,3.49,3.49,0,0,0,14,10a4.52,4.52,0,0,0-4.34,3.89l-.17.1a2.48,2.48,0,0,0-.82-.15,2.56,2.56,0,0,0-1.89.84,3,3,0,0,0-.78,2A2.78,2.78,0,0,0,8.67,19.6h9.77A3.71,3.71,0,0,0,22,15.76,3.71,3.71,0,0,0,18.44,11.92Z"></path></g></svg>`;
      }

    case 1006:
      // cloudy
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>weather-cloudy</title><path d="M6,19A5,5 0 0,1 1,14A5,5 0 0,1 6,9C7,6.65 9.3,5 12,5C15.43,5 18.24,7.66 18.5,11.03L19,11A4,4 0 0,1 23,15A4,4 0 0,1 19,19H6M19,13H17V12A5,5 0 0,0 12,7C9.5,7 7.45,8.82 7.06,11.19C6.73,11.07 6.37,11 6,11A3,3 0 0,0 3,14A3,3 0 0,0 6,17H19A2,2 0 0,0 21,15A2,2 0 0,0 19,13Z" /></svg>`;
    case 1009:
      // overcast
      return `<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="m 9 1 c -2.027344 0.003906 -3.855469 1.234375 -4.617188 3.113281 c -0.289062 -0.074219 -0.585937 -0.113281 -0.882812 -0.113281 c -1.933594 0 -3.5 1.566406 -3.5 3.5 s 1.566406 3.5 3.5 3.5 h 1.34375 c 0.628906 -1.742188 2.234375 -2.996094 4.15625 -3 c 1.476562 0 2.730469 0.832031 3.5625 2.011719 c 0.769531 0.015625 1.480469 0.28125 2.050781 0.71875 c 0.847657 -0.421875 1.386719 -1.285157 1.386719 -2.230469 c 0 -1.1875 -0.839844 -2.214844 -2.003906 -2.449219 c 0 -0.015625 0.003906 -0.035156 0.003906 -0.050781 c 0 -2.761719 -2.238281 -5 -5 -5 z m 0 8 c -1.765625 0.003906 -3.253906 1.320312 -3.46875 3.074219 c -0.175781 -0.050781 -0.351562 -0.074219 -0.53125 -0.074219 c -1.105469 0 -2 0.894531 -2 2 s 0.894531 2 2 2 h 7.5 c 1.378906 0 2.5 -1.121094 2.5 -2.5 s -1.121094 -2.5 -2.5 -2.5 c -0.109375 0 -0.21875 0.007812 -0.328125 0.023438 c -0.574219 -1.234376 -1.8125 -2.023438 -3.171875 -2.023438 z m 0 0" fill="#2e3436"></path> </g></svg>`;

    case 1030:
    // Misty
    case 1135:
    // Fog
    case 1147:
      // Freezing Fog
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>weather-fog</title><path d="M3,15H13A1,1 0 0,1 14,16A1,1 0 0,1 13,17H3A1,1 0 0,1 2,16A1,1 0 0,1 3,15M16,15H21A1,1 0 0,1 22,16A1,1 0 0,1 21,17H16A1,1 0 0,1 15,16A1,1 0 0,1 16,15M1,12A5,5 0 0,1 6,7C7,4.65 9.3,3 12,3C15.43,3 18.24,5.66 18.5,9.03L19,9C21.19,9 22.97,10.76 23,13H21A2,2 0 0,0 19,11H17V10A5,5 0 0,0 12,5C9.5,5 7.45,6.82 7.06,9.19C6.73,9.07 6.37,9 6,9A3,3 0 0,0 3,12C3,12.35 3.06,12.69 3.17,13H1.1L1,12M3,19H5A1,1 0 0,1 6,20A1,1 0 0,1 5,21H3A1,1 0 0,1 2,20A1,1 0 0,1 3,19M8,19H21A1,1 0 0,1 22,20A1,1 0 0,1 21,21H8A1,1 0 0,1 7,20A1,1 0 0,1 8,19Z" /></svg>`;

    case 1063:
    // Patchy rain possible
    case 1150:
    // Patchy light drizzle
    case 1153:
      // Light drizzle
      if (isDay) {
        return `<svg fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M5.6,19.9a1,1,0,1,0,0-2,2.6,2.6,0,0,1,0-5.2,2.554,2.554,0,0,1,.864.162,1,1,0,0,0,1.272-.589,3.488,3.488,0,0,1,6.529,0,1.021,1.021,0,0,0,1.272.589,2.334,2.334,0,0,1,1.255-.122A2.594,2.594,0,0,1,16.4,17.9a1,1,0,1,0,0,2,4.587,4.587,0,0,0,2.386-8.513A4.789,4.789,0,0,0,19,10a5.006,5.006,0,0,0-5-5A4.956,4.956,0,0,0,9.329,8.277a5.54,5.54,0,0,0-3.077,2.474A4.212,4.212,0,0,0,5.6,10.7a4.6,4.6,0,0,0,0,9.2ZM14,7a3,3,0,0,1,3,3,2.769,2.769,0,0,1-.1.731,4.422,4.422,0,0,0-1.153.02,5.673,5.673,0,0,0-4.021-2.7h0A2.974,2.974,0,0,1,14,7Zm9,3a1,1,0,0,1-1,1H21a1,1,0,0,1,0-2h1A1,1,0,0,1,23,10ZM14,1a1,1,0,0,1,1,1V3a1,1,0,0,1-2,0V2A1,1,0,0,1,14,1Zm6.364,2.636a1,1,0,0,1,0,1.414l-.707.707a1,1,0,0,1-1.414-1.414l.707-.707A1,1,0,0,1,20.364,3.636Zm-11.314,0,.707.707A1,1,0,1,1,8.343,5.757L7.636,5.05A1,1,0,1,1,9.05,3.636ZM10.4,15.447l-1,2a1,1,0,0,1-1.79-.894l1-2a1,1,0,1,1,1.79.894Zm4,0-1,2a1,1,0,0,1-1.79-.894l1-2a1,1,0,1,1,1.79.894Zm-4,5-1,2a1,1,0,0,1-1.79-.894l1-2a1,1,0,1,1,1.79.894Zm4,0-1,2a1,1,0,0,1-1.79-.894l1-2a1,1,0,1,1,1.79.894Z"></path></g></svg>`;
      } else {
        return `<svg fill="#000000" viewBox="-2.4 -2.4 28.80 28.80" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M1,13.9a4.6,4.6,0,0,0,4.6,4.6,1,1,0,1,0,0-2,2.6,2.6,0,1,1,.866-5.037,1,1,0,0,0,1.27-.59A3.512,3.512,0,0,1,11,8.6a3.562,3.562,0,0,1,3.264,2.273,1,1,0,0,0,1.27.59,2.537,2.537,0,0,1,2.856.789l.011.009A2.572,2.572,0,0,1,19,13.9a2.6,2.6,0,0,1-2.6,2.6,1,1,0,1,0,0,2A4.6,4.6,0,0,0,21,13.9a4.552,4.552,0,0,0-.424-1.917A5.991,5.991,0,0,0,22.945,8.95a1,1,0,0,0-1.057-1.321,3.839,3.839,0,0,1-.445.027,4.005,4.005,0,0,1-3.791-5.329A1,1,0,0,0,16.6,1.006a5.991,5.991,0,0,0-5.316,5.613c-.094,0-.186-.019-.281-.019A5.52,5.52,0,0,0,6.252,9.351,4.6,4.6,0,0,0,1,13.9ZM15.432,3.408c0,.077-.005.155-.005.232a6.028,6.028,0,0,0,4.91,5.915,4.054,4.054,0,0,1-.975.835,4.53,4.53,0,0,0-3.61-1.04h0a5.847,5.847,0,0,0-2.5-2.264A4,4,0,0,1,15.432,3.408ZM10.4,15.447l-1,2a1,1,0,0,1-1.79-.894l1-2a1,1,0,1,1,1.79.894Zm4,0-1,2a1,1,0,0,1-1.79-.894l1-2a1,1,0,1,1,1.79.894Zm-4,5-1,2a1,1,0,0,1-1.79-.894l1-2a1,1,0,1,1,1.79.894Zm4,0-1,2a1,1,0,0,1-1.79-.894l1-2a1,1,0,1,1,1.79.894Z"></path></g></svg>`;
      }

    case 1066:
      // Patchy snow possible
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>weather-snowy</title><path d="M6,14A1,1 0 0,1 7,15A1,1 0 0,1 6,16A5,5 0 0,1 1,11A5,5 0 0,1 6,6C7,3.65 9.3,2 12,2C15.43,2 18.24,4.66 18.5,8.03L19,8A4,4 0 0,1 23,12A4,4 0 0,1 19,16H18A1,1 0 0,1 17,15A1,1 0 0,1 18,14H19A2,2 0 0,0 21,12A2,2 0 0,0 19,10H17V9A5,5 0 0,0 12,4C9.5,4 7.45,5.82 7.06,8.19C6.73,8.07 6.37,8 6,8A3,3 0 0,0 3,11A3,3 0 0,0 6,14M7.88,18.07L10.07,17.5L8.46,15.88C8.07,15.5 8.07,14.86 8.46,14.46C8.85,14.07 9.5,14.07 9.88,14.46L11.5,16.07L12.07,13.88C12.21,13.34 12.76,13.03 13.29,13.17C13.83,13.31 14.14,13.86 14,14.4L13.41,16.59L15.6,16C16.14,15.86 16.69,16.17 16.83,16.71C16.97,17.24 16.66,17.79 16.12,17.93L13.93,18.5L15.54,20.12C15.93,20.5 15.93,21.15 15.54,21.54C15.15,21.93 14.5,21.93 14.12,21.54L12.5,19.93L11.93,22.12C11.79,22.66 11.24,22.97 10.71,22.83C10.17,22.69 9.86,22.14 10,21.6L10.59,19.41L8.4,20C7.86,20.14 7.31,19.83 7.17,19.29C7.03,18.76 7.34,18.21 7.88,18.07Z" /></svg>`;

    case 1069:
    case 1072:
    // Patchy sleet possible || Patchy freezing drizzle possible
    case 1249:
    // Light sleet showers
    case 1252:
    // Moderate or heavy sleet showers
    case 1255:
    // Light snow showers
    case 1258:
    // Moderate or heavy snow showers
    case 1261:
    // Light showers of ice pellets
    case 1264:
      // Moderate or heavy showers of ice pellets
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>weather-snowy-rainy</title><path d="M18.5,18.67C18.5,19.96 17.5,21 16.25,21C15,21 14,19.96 14,18.67C14,17.12 16.25,14.5 16.25,14.5C16.25,14.5 18.5,17.12 18.5,18.67M4,17.36C3.86,16.82 4.18,16.25 4.73,16.11L7,15.5L5.33,13.86C4.93,13.46 4.93,12.81 5.33,12.4C5.73,12 6.4,12 6.79,12.4L8.45,14.05L9.04,11.8C9.18,11.24 9.75,10.92 10.29,11.07C10.85,11.21 11.17,11.78 11,12.33L10.42,14.58L12.67,14C13.22,13.83 13.79,14.15 13.93,14.71C14.08,15.25 13.76,15.82 13.2,15.96L10.95,16.55L12.6,18.21C13,18.6 13,19.27 12.6,19.67C12.2,20.07 11.54,20.07 11.15,19.67L9.5,18L8.89,20.27C8.75,20.83 8.18,21.14 7.64,21C7.08,20.86 6.77,20.29 6.91,19.74L7.5,17.5L5.26,18.09C4.71,18.23 4.14,17.92 4,17.36M1,11A5,5 0 0,1 6,6C7,3.65 9.3,2 12,2C15.43,2 18.24,4.66 18.5,8.03L19,8A4,4 0 0,1 23,12A4,4 0 0,1 19,16A1,1 0 0,1 18,15A1,1 0 0,1 19,14A2,2 0 0,0 21,12A2,2 0 0,0 19,10H17V9A5,5 0 0,0 12,4C9.5,4 7.45,5.82 7.06,8.19C6.73,8.07 6.37,8 6,8A3,3 0 0,0 3,11C3,11.85 3.35,12.61 3.91,13.16C4.27,13.55 4.26,14.16 3.88,14.54C3.5,14.93 2.85,14.93 2.47,14.54C1.56,13.63 1,12.38 1,11Z" /></svg>`;

    case 1087:
      // Thundery outbreaks possible
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>weather-lightning</title><path d="M6,16A5,5 0 0,1 1,11A5,5 0 0,1 6,6C7,3.65 9.3,2 12,2C15.43,2 18.24,4.66 18.5,8.03L19,8A4,4 0 0,1 23,12A4,4 0 0,1 19,16H18A1,1 0 0,1 17,15A1,1 0 0,1 18,14H19A2,2 0 0,0 21,12A2,2 0 0,0 19,10H17V9A5,5 0 0,0 12,4C9.5,4 7.45,5.82 7.06,8.19C6.73,8.07 6.37,8 6,8A3,3 0 0,0 3,11A3,3 0 0,0 6,14H7A1,1 0 0,1 8,15A1,1 0 0,1 7,16H6M12,11H15L13,15H15L11.25,22L12,17H9.5L12,11Z" /></svg>`;

    case 1114:
      // Blowing Snow
      return `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 226.705 226.705"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M174.177,106.669c-23.998,0-43.522,19.523-43.522,43.522c0,20.026,16.291,36.318,36.316,36.318c4.143,0,7.5-3.358,7.5-7.5 c0-4.142-3.357-7.5-7.5-7.5c-11.754,0-21.316-9.563-21.316-21.318c0-15.727,12.795-28.522,28.522-28.522 c20.693,0,37.528,16.834,37.528,37.525c0,26.901-21.886,48.787-48.786,48.787H7.5c-4.142,0-7.5,3.358-7.5,7.5 c0,4.142,3.358,7.5,7.5,7.5h155.419c35.172,0,63.786-28.615,63.786-63.787C226.705,130.232,203.141,106.669,174.177,106.669z"></path> <path d="M7.5,158.657h69.889c23.534,0,42.68-19.146,42.68-42.68c0-19.652-15.989-35.641-35.643-35.641 c-16.55,0-30.014,13.464-30.014,30.014c0,14.066,11.444,25.51,25.51,25.51c4.142,0,7.5-3.358,7.5-7.5c0-4.142-3.358-7.5-7.5-7.5 c-5.795,0-10.51-4.715-10.51-10.51c0-8.279,6.735-15.014,15.014-15.014c11.382,0,20.643,9.259,20.643,20.641 c0,15.263-12.417,27.68-27.68,27.68H7.5c-4.142,0-7.5,3.358-7.5,7.5S3.358,158.657,7.5,158.657z"></path> <path d="M2.304,53.919c1.112,1.925,3.128,3.001,5.202,3.001c1.018,0,2.05-0.259,2.995-0.805l13.168-7.603v15.206 c0,3.313,2.687,6,6,6c3.313,0,6-2.687,6-6V48.512l13.169,7.604c0.945,0.545,1.977,0.805,2.995,0.805 c2.073,0,4.09-1.076,5.202-3.001c1.657-2.87,0.673-6.539-2.196-8.196l-13.169-7.604l13.169-7.604 c2.87-1.657,3.853-5.327,2.196-8.196c-1.658-2.87-5.326-3.853-8.196-2.196l-13.169,7.603V12.522c0-3.314-2.687-6-6-6 c-3.313,0-6,2.686-6,6v15.204L10.5,20.123c-2.87-1.657-6.539-0.673-8.196,2.196c-1.657,2.87-0.673,6.539,2.196,8.196l13.169,7.604 L4.5,45.723C1.63,47.38,0.647,51.049,2.304,53.919z"></path> <path d="M117.287,70.317c1.111,1.925,3.128,3.001,5.202,3.001c1.018,0,2.049-0.259,2.994-0.805l24.252-14.001v28.004 c0,3.313,2.687,6,6,6c3.314,0,6-2.687,6-6V58.511l24.254,14.003c0.945,0.545,1.977,0.805,2.994,0.805 c2.074,0,4.091-1.076,5.202-3.001c1.656-2.87,0.674-6.54-2.196-8.196l-24.253-14.002l24.253-14.002 c2.87-1.657,3.853-5.327,2.196-8.196c-1.656-2.869-5.323-3.853-8.196-2.196l-24.254,14.003V9.724c0-3.314-2.686-6-6-6 c-3.314,0-6,2.686-6,6v28.002l-24.252-14.001c-2.871-1.657-6.54-0.672-8.196,2.196c-1.656,2.87-0.674,6.539,2.196,8.196 l24.253,14.002l-24.253,14.002C116.613,63.778,115.631,67.448,117.287,70.317z"></path> </g> </g></svg>
      `;
    case 1117:
      // Blizzard
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>snowflake-variant</title><path d="M14.25,12L16.27,11H23L22,9H18.03L20.42,5.83L19.43,3.83L15.37,9.2L13.35,10.21L13.75,8L17.83,2.62L15.64,2.22L12,7L8.4,2.2L6.2,2.6L10.26,8L10.66,10.21L8.82,9.29L8.66,9.21L4.6,3.8L3.6,5.8L6,9H2L1,11H7.77L9.75,12L7.73,13H1L2,15H5.97L3.58,18.17L4.57,20.17L8.63,14.8L10.65,13.79L10.25,16L6.17,21.38L8.36,21.79L12,17L15.6,21.8L17.8,21.4L13.74,16L13.34,13.79L15.34,14.79L19.4,20.2L20.4,18.2L18,15H22L23,13H16.23" /></svg>`;

    case 1168:
    // Freezing Drizzle
    case 1171:
      // Heavy Freezing Drizzle
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>weather-snowy-rainy</title><path d="M18.5,18.67C18.5,19.96 17.5,21 16.25,21C15,21 14,19.96 14,18.67C14,17.12 16.25,14.5 16.25,14.5C16.25,14.5 18.5,17.12 18.5,18.67M4,17.36C3.86,16.82 4.18,16.25 4.73,16.11L7,15.5L5.33,13.86C4.93,13.46 4.93,12.81 5.33,12.4C5.73,12 6.4,12 6.79,12.4L8.45,14.05L9.04,11.8C9.18,11.24 9.75,10.92 10.29,11.07C10.85,11.21 11.17,11.78 11,12.33L10.42,14.58L12.67,14C13.22,13.83 13.79,14.15 13.93,14.71C14.08,15.25 13.76,15.82 13.2,15.96L10.95,16.55L12.6,18.21C13,18.6 13,19.27 12.6,19.67C12.2,20.07 11.54,20.07 11.15,19.67L9.5,18L8.89,20.27C8.75,20.83 8.18,21.14 7.64,21C7.08,20.86 6.77,20.29 6.91,19.74L7.5,17.5L5.26,18.09C4.71,18.23 4.14,17.92 4,17.36M1,11A5,5 0 0,1 6,6C7,3.65 9.3,2 12,2C15.43,2 18.24,4.66 18.5,8.03L19,8A4,4 0 0,1 23,12A4,4 0 0,1 19,16A1,1 0 0,1 18,15A1,1 0 0,1 19,14A2,2 0 0,0 21,12A2,2 0 0,0 19,10H17V9A5,5 0 0,0 12,4C9.5,4 7.45,5.82 7.06,8.19C6.73,8.07 6.37,8 6,8A3,3 0 0,0 3,11C3,11.85 3.35,12.61 3.91,13.16C4.27,13.55 4.26,14.16 3.88,14.54C3.5,14.93 2.85,14.93 2.47,14.54C1.56,13.63 1,12.38 1,11Z" /></svg>`;

    case 1180:
    // Patchy Light Rain
    case 1183:
    // Light Rain
    case 1186:
    // Moderate rain at times
    case 1189:
      // Moderate Rain
      return `<svg viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M17.93 15.745H6.87C4.45 15.745 2.5 13.725 2.5 11.215C2.5 8.72503 4.45 6.68503 6.87 6.68503C7.4 6.68503 7.89999 6.77503 8.35999 6.95503C8.60999 7.04503 8.87001 6.95503 9.01001 6.73503C9.74001 5.49503 11.07 4.65503 12.59 4.65503C14.61 4.65503 16.28 6.11503 16.69 8.06503C16.75 8.33503 16.97 8.47504 17.24 8.41504C17.46 8.36504 17.69 8.34503 17.93 8.34503C19.91 8.34503 21.5 10.005 21.5 12.055C21.51 14.095 19.91 15.745 17.93 15.745Z" stroke="#0F0F0F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M10.51 20.345L12.01 17.745" stroke="#0F0F0F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M14.51 20.345L16.01 17.745" stroke="#0F0F0F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M6.51001 20.345L8.01001 17.745" stroke="#0F0F0F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>`;

    case 1192:
    // Heavy Rain at Times
    case 1195:
      // Heavy
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>weather-pouring</title><path d="M9,12C9.53,12.14 9.85,12.69 9.71,13.22L8.41,18.05C8.27,18.59 7.72,18.9 7.19,18.76C6.65,18.62 6.34,18.07 6.5,17.54L7.78,12.71C7.92,12.17 8.47,11.86 9,12M13,12C13.53,12.14 13.85,12.69 13.71,13.22L11.64,20.95C11.5,21.5 10.95,21.8 10.41,21.66C9.88,21.5 9.56,20.97 9.7,20.43L11.78,12.71C11.92,12.17 12.47,11.86 13,12M17,12C17.53,12.14 17.85,12.69 17.71,13.22L16.41,18.05C16.27,18.59 15.72,18.9 15.19,18.76C14.65,18.62 14.34,18.07 14.5,17.54L15.78,12.71C15.92,12.17 16.47,11.86 17,12M17,10V9A5,5 0 0,0 12,4C9.5,4 7.45,5.82 7.06,8.19C6.73,8.07 6.37,8 6,8A3,3 0 0,0 3,11C3,12.11 3.6,13.08 4.5,13.6V13.59C5,13.87 5.14,14.5 4.87,14.96C4.59,15.43 4,15.6 3.5,15.32V15.33C2,14.47 1,12.85 1,11A5,5 0 0,1 6,6C7,3.65 9.3,2 12,2C15.43,2 18.24,4.66 18.5,8.03L19,8A4,4 0 0,1 23,12C23,13.5 22.2,14.77 21,15.46V15.46C20.5,15.73 19.91,15.57 19.63,15.09C19.36,14.61 19.5,14 20,13.72V13.73C20.6,13.39 21,12.74 21,12A2,2 0 0,0 19,10H17Z" /></svg>`;

    case 1198:
    // Light freezing Rain
    case 1201:
    // Moderate or heavy freezing rain
    case 1204:
    // Light sleet
    case 1207:
      // Moderate or heavy sleet
      return `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>cloud-snow-rain</title> <path d="M29.135 10.075c-0.865-1.165-2.159-1.968-3.645-2.174l-0.029-0.003c0.145-0.342 0.229-0.74 0.229-1.157 0-0.045-0.001-0.090-0.003-0.135l0 0.006c-0.060-0.894-0.451-1.687-1.050-2.267l-0.001-0.001c-0.813-0.817-1.939-1.323-3.183-1.323-0.889 0-1.718 0.258-2.415 0.704l0.018-0.011c-2.52-3.159-7.256-3.053-10.657-0.989-2.056 0.998-3.449 3.071-3.449 5.469 0 0.643 0.1 1.263 0.286 1.845l-0.012-0.043c-2.332 0.765-3.986 2.923-3.986 5.466 0 0.125 0.004 0.248 0.012 0.371l-0.001-0.017c-0.001 0.039-0.002 0.086-0.002 0.132 0 1.261 0.403 2.428 1.088 3.378l-0.012-0.017c0.764 1.004 1.959 1.646 3.305 1.646 0.043 0 0.086-0.001 0.129-0.002l-0.006 0 20.28-0.008c1.932-0.227 3.52-1.496 4.201-3.223l0.012-0.035c0.316-0.828 0.499-1.786 0.499-2.787 0-1.82-0.605-3.499-1.624-4.846l0.015 0.020zM28.857 17.12c-0.471 1.245-1.574 2.151-2.907 2.331l-0.019 0.002h-20.179c-0.034 0.002-0.074 0.002-0.115 0.002-0.863 0-1.629-0.411-2.114-1.049l-0.005-0.007c-0.483-0.684-0.772-1.535-0.772-2.453 0-0.046 0.001-0.093 0.002-0.139l-0 0.007c-0.015-0.13-0.023-0.28-0.023-0.432 0-2.089 1.587-3.807 3.62-4.016l0.017-0.001c0.414-0 0.75-0.336 0.75-0.75 0-0.144-0.040-0.278-0.11-0.392l0.002 0.003c-1.604-2.643 0.070-4.946 2.172-6.221 1.248-0.775 2.757-1.242 4.374-1.265l0.006-0c0.075-0.004 0.163-0.006 0.251-0.006 1.866 0 3.505 0.971 4.44 2.435l0.013 0.021c0.134 0.218 0.371 0.361 0.641 0.361 0.206 0 0.392-0.083 0.527-0.217l-0 0c0.525-0.515 1.246-0.833 2.040-0.833 0.825 0 1.571 0.343 2.101 0.894l0.001 0.001c0.379 0.325 0.618 0.804 0.618 1.34 0 0.558-0.26 1.056-0.665 1.378l-0.004 0.003c-0.137 0.136-0.222 0.325-0.222 0.533 0 0.414 0.336 0.75 0.75 0.75 0.036 0 0.071-0.002 0.105-0.007l-0.004 0c0.177-0.028 0.381-0.044 0.589-0.044 1.316 0 2.482 0.642 3.202 1.63l0.008 0.011c0.808 1.078 1.293 2.438 1.293 3.911 0 0.794-0.141 1.556-0.4 2.26l0.015-0.046zM28.248 25.125c-0.134-0.225-0.376-0.373-0.653-0.373-0.137 0-0.265 0.036-0.376 0.1l0.004-0.002-1.473 0.85v-1.7c0-0.414-0.336-0.75-0.75-0.75s-0.75 0.336-0.75 0.75v0 1.7l-1.473-0.85c-0.108-0.063-0.237-0.1-0.375-0.1-0.415 0-0.751 0.336-0.751 0.751 0 0.277 0.15 0.518 0.372 0.648l0.004 0.002 1.471 0.85-1.471 0.85c-0.226 0.132-0.376 0.374-0.376 0.65 0 0.414 0.336 0.75 0.75 0.75 0 0 0 0 0.001 0h-0c0.138-0 0.267-0.037 0.379-0.102l-0.004 0.002 1.473-0.85v1.7c0 0.414 0.336 0.75 0.75 0.75s0.75-0.336 0.75-0.75v0-1.7l1.473 0.85c0.107 0.063 0.237 0.1 0.374 0.1 0.277 0 0.518-0.149 0.649-0.371l0.002-0.004c0.063-0.108 0.1-0.237 0.1-0.375 0-0.277-0.149-0.518-0.372-0.649l-0.004-0.002-1.471-0.85 1.471-0.85c0.226-0.132 0.376-0.374 0.376-0.65 0-0.138-0.037-0.267-0.102-0.378l0.002 0.004zM15.237 23.289c-0.072-0.026-0.155-0.041-0.242-0.041-0.329 0-0.608 0.214-0.706 0.51l-0.002 0.005-2 6c-0.024 0.071-0.038 0.152-0.038 0.236 0 0.329 0.212 0.609 0.508 0.709l0.005 0.002c0.070 0.025 0.151 0.039 0.235 0.039 0.001 0 0.002 0 0.003 0h-0c0.33-0 0.609-0.213 0.71-0.508l0.002-0.005 2-6c0.024-0.071 0.038-0.152 0.038-0.236 0-0.329-0.212-0.609-0.508-0.709l-0.005-0.002zM19.236 23.289c-0.072-0.025-0.155-0.040-0.241-0.040-0.329 0-0.607 0.214-0.705 0.51l-0.002 0.005-2.001 6c-0.024 0.071-0.038 0.152-0.038 0.236 0 0.329 0.212 0.609 0.508 0.709l0.005 0.002c0.070 0.025 0.151 0.039 0.235 0.039 0.001 0 0.002 0 0.003 0h-0c0.33-0 0.609-0.213 0.71-0.508l0.002-0.005 1.999-6c0.024-0.071 0.039-0.152 0.039-0.237 0-0.329-0.213-0.609-0.508-0.708l-0.005-0.002zM10.247 25.125c-0.134-0.225-0.376-0.373-0.652-0.373-0.137 0-0.265 0.036-0.376 0.1l0.004-0.002-1.473 0.85v-1.7c0-0.414-0.336-0.75-0.75-0.75s-0.75 0.336-0.75 0.75v0 1.7l-1.473-0.85c-0.108-0.063-0.237-0.1-0.375-0.1-0.415 0-0.751 0.336-0.751 0.751 0 0.277 0.15 0.518 0.372 0.648l0.004 0.002 1.471 0.85-1.471 0.85c-0.226 0.132-0.375 0.374-0.375 0.65 0 0.415 0.336 0.751 0.751 0.751 0 0 0 0 0.001 0h-0c0.138-0.001 0.266-0.037 0.378-0.102l-0.004 0.002 1.473-0.85v1.7c0 0.414 0.336 0.75 0.75 0.75s0.75-0.336 0.75-0.75v0-1.7l1.473 0.85c0.108 0.062 0.236 0.099 0.374 0.1h0c0 0 0 0 0.001 0 0.415 0 0.751-0.336 0.751-0.751 0-0.276-0.149-0.518-0.372-0.648l-0.004-0.002-1.471-0.85 1.471-0.85c0.226-0.133 0.375-0.374 0.375-0.65 0-0.138-0.037-0.267-0.102-0.379l0.002 0.004z"></path> </g></svg>`;

    case 1210:
    // Patchy light snow
    case 1213:
    // Light Snow
    case 1216:
      // Patchy Moderate Snow
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>weather-snowy</title><path d="M6,14A1,1 0 0,1 7,15A1,1 0 0,1 6,16A5,5 0 0,1 1,11A5,5 0 0,1 6,6C7,3.65 9.3,2 12,2C15.43,2 18.24,4.66 18.5,8.03L19,8A4,4 0 0,1 23,12A4,4 0 0,1 19,16H18A1,1 0 0,1 17,15A1,1 0 0,1 18,14H19A2,2 0 0,0 21,12A2,2 0 0,0 19,10H17V9A5,5 0 0,0 12,4C9.5,4 7.45,5.82 7.06,8.19C6.73,8.07 6.37,8 6,8A3,3 0 0,0 3,11A3,3 0 0,0 6,14M7.88,18.07L10.07,17.5L8.46,15.88C8.07,15.5 8.07,14.86 8.46,14.46C8.85,14.07 9.5,14.07 9.88,14.46L11.5,16.07L12.07,13.88C12.21,13.34 12.76,13.03 13.29,13.17C13.83,13.31 14.14,13.86 14,14.4L13.41,16.59L15.6,16C16.14,15.86 16.69,16.17 16.83,16.71C16.97,17.24 16.66,17.79 16.12,17.93L13.93,18.5L15.54,20.12C15.93,20.5 15.93,21.15 15.54,21.54C15.15,21.93 14.5,21.93 14.12,21.54L12.5,19.93L11.93,22.12C11.79,22.66 11.24,22.97 10.71,22.83C10.17,22.69 9.86,22.14 10,21.6L10.59,19.41L8.4,20C7.86,20.14 7.31,19.83 7.17,19.29C7.03,18.76 7.34,18.21 7.88,18.07Z" /></svg>`;

    case 1219:
    // Moderate Snow
    case 1222:
    // Patchy Heavy Snow
    case 1225:
      // Heavy Snow
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>weather-snowy-heavy</title><path d="M4,16.36C3.86,15.82 4.18,15.25 4.73,15.11L7,14.5L5.33,12.86C4.93,12.46 4.93,11.81 5.33,11.4C5.73,11 6.4,11 6.79,11.4L8.45,13.05L9.04,10.8C9.18,10.24 9.75,9.92 10.29,10.07C10.85,10.21 11.17,10.78 11,11.33L10.42,13.58L12.67,13C13.22,12.83 13.79,13.15 13.93,13.71C14.08,14.25 13.76,14.82 13.2,14.96L10.95,15.55L12.6,17.21C13,17.6 13,18.27 12.6,18.67C12.2,19.07 11.54,19.07 11.15,18.67L9.5,17L8.89,19.27C8.75,19.83 8.18,20.14 7.64,20C7.08,19.86 6.77,19.29 6.91,18.74L7.5,16.5L5.26,17.09C4.71,17.23 4.14,16.92 4,16.36M1,10A5,5 0 0,1 6,5C7,2.65 9.3,1 12,1C15.43,1 18.24,3.66 18.5,7.03L19,7A4,4 0 0,1 23,11A4,4 0 0,1 19,15A1,1 0 0,1 18,14A1,1 0 0,1 19,13A2,2 0 0,0 21,11A2,2 0 0,0 19,9H17V8A5,5 0 0,0 12,3C9.5,3 7.45,4.82 7.06,7.19C6.73,7.07 6.37,7 6,7A3,3 0 0,0 3,10C3,10.85 3.35,11.61 3.91,12.16C4.27,12.55 4.26,13.16 3.88,13.54C3.5,13.93 2.85,13.93 2.47,13.54C1.56,12.63 1,11.38 1,10M14.03,20.43C14.13,20.82 14.5,21.04 14.91,20.94L16.5,20.5L16.06,22.09C15.96,22.5 16.18,22.87 16.57,22.97C16.95,23.08 17.35,22.85 17.45,22.46L17.86,20.89L19.03,22.05C19.3,22.33 19.77,22.33 20.05,22.05C20.33,21.77 20.33,21.3 20.05,21.03L18.89,19.86L20.46,19.45C20.85,19.35 21.08,18.95 20.97,18.57C20.87,18.18 20.5,17.96 20.09,18.06L18.5,18.5L18.94,16.91C19.04,16.5 18.82,16.13 18.43,16.03C18.05,15.92 17.65,16.15 17.55,16.54L17.14,18.11L15.97,16.95C15.7,16.67 15.23,16.67 14.95,16.95C14.67,17.24 14.67,17.7 14.95,17.97L16.11,19.14L14.54,19.55C14.15,19.65 13.92,20.05 14.03,20.43Z" /></svg>`;

    case 1237:
      // Ice Pellets
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>snowflake</title><path d="M20.79,13.95L18.46,14.57L16.46,13.44V10.56L18.46,9.43L20.79,10.05L21.31,8.12L19.54,7.65L20,5.88L18.07,5.36L17.45,7.69L15.45,8.82L13,7.38V5.12L14.71,3.41L13.29,2L12,3.29L10.71,2L9.29,3.41L11,5.12V7.38L8.5,8.82L6.5,7.69L5.92,5.36L4,5.88L4.47,7.65L2.7,8.12L3.22,10.05L5.55,9.43L7.55,10.56V13.45L5.55,14.58L3.22,13.96L2.7,15.89L4.47,16.36L4,18.12L5.93,18.64L6.55,16.31L8.55,15.18L11,16.62V18.88L9.29,20.59L10.71,22L12,20.71L13.29,22L14.7,20.59L13,18.88V16.62L15.5,15.17L17.5,16.3L18.12,18.63L20,18.12L19.53,16.35L21.3,15.88L20.79,13.95M9.5,10.56L12,9.11L14.5,10.56V13.44L12,14.89L9.5,13.44V10.56Z" /></svg>`;

    case 1240:
    // Light Rain Shower
    case 1243:
    // Moderate or Heavy Rain Shower
    case 1246:
      // Torrential Rain Shower
      return `<svg viewBox="0 -2 154 154" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g clip-path="url(#clip0)"> <path d="M106.196 29.7328C107.476 28.8795 108.577 28.1164 109.707 27.3977C117.858 22.2126 126.71 21.138 135.917 23.4732C151.578 27.446 157.044 43.7028 152.161 56.1824C150.637 60.081 148.164 63.6849 145.705 67.1253C142.997 70.9156 138.859 72.8301 134.427 74.0109C132.051 74.6436 129.63 75.1096 126.995 75.7036C126.724 76.7242 126.426 77.7789 126.162 78.8429C124.755 84.5333 121.634 89.278 117.877 93.6518C115.055 96.9335 111.257 98.7338 107.151 99.5818C101.558 100.736 95.8973 101.66 90.2233 102.32C75.247 104.063 60.1757 103.771 45.1331 104.057C38.1644 104.292 31.1994 103.488 24.4674 101.672C12.2924 98.2193 4.94677 90.2106 1.95517 78.1373C-0.00242049 70.4929 0.21227 62.4541 2.5753 54.9255C6.52383 42.3022 15.3503 34.1364 27.0489 28.7374C28.9725 27.9224 30.5254 26.4225 31.4064 24.5282C37.939 11.6548 48.2539 3.0142 62.5575 0.785936C76.8419 -1.43971 89.1154 3.46842 98.3993 14.8684C101.369 18.5366 103.66 22.705 105.165 27.1779C105.446 28.0029 105.815 28.7975 106.196 29.7328ZM50.3463 95.8144C53.2637 95.8144 56.1877 95.9542 59.0966 95.7901C71.1993 95.1056 83.2924 94.2281 95.3998 93.6452C99.3293 93.5245 103.191 92.5853 106.737 90.8886C114.986 86.8456 118.859 80.1522 118.157 71.041C117.612 63.9775 113.2 58.5378 106.284 56.8753C97.6425 54.7973 89.7724 56.4289 83.0797 62.483C81.2551 64.133 79.6503 66.0239 77.9347 67.7941C76.1547 69.6318 74.5158 70.0643 72.8723 69.1579C71.2847 68.2824 70.5968 66.4998 71.2971 64.1917C72.3355 60.7788 71.7841 57.5625 70.541 54.3576C69.1004 50.7 67.0533 47.3117 64.4864 44.3343C56.5966 35.0412 42.4592 30.9744 31.459 35.3706C16.8332 41.212 6.45622 53.5513 8.26376 71.5706C9.84947 87.3838 17.5254 92.4907 28.8676 94.9842C29.1958 95.0564 29.5319 95.0984 29.862 95.164C36.642 96.5029 43.4941 96.3231 50.3463 95.8144ZM79.1233 55.1344C79.2959 55.1002 79.4659 55.0502 79.63 54.9857C80.0133 54.7566 80.4071 54.5388 80.7642 54.2736C87.4641 49.2933 95.027 47.3526 103.286 48.0384C114.415 48.9573 122.532 54.5832 125.952 65.5204C126.172 66.2234 126.496 66.8942 126.94 68.0021C129.405 67.0209 131.731 66.2576 133.915 65.1968C141.922 61.3067 145.669 54.7899 145.144 45.9162C144.707 38.5147 140.214 32.9471 132.996 31.2794C124.328 29.2742 116.489 31.012 109.85 37.114C108.04 38.7785 106.449 40.6801 104.721 42.4378C103.084 44.1035 101.481 44.4843 99.9076 43.6665C98.2884 42.8244 97.5356 41.0018 98.2332 38.7401C99.3228 35.2096 98.7636 31.8865 97.3938 28.6008C96.9632 27.5678 96.5136 26.5398 96.0096 25.5415C87.1733 8.04421 66.4593 4.0915 53.303 12.152C48.4799 15.0372 44.2502 18.8141 40.8393 23.2809C40.3847 24.0111 39.984 24.7733 39.6408 25.5621C59.8809 26.3871 72.8756 36.4281 79.1233 55.1344Z" fill="#000000"></path> <path d="M95.939 122.676C96.3426 121.375 96.827 120.103 97.3895 118.863C99.0303 115.827 100.762 112.839 102.5 109.857C102.943 109.096 103.4 108.15 104.107 107.783C105.057 107.296 106.133 107.111 107.192 107.252C108.466 107.469 108.758 108.706 108.73 109.889C108.74 110.446 108.645 111 108.452 111.522C106.786 115.407 105.105 119.284 103.358 123.132C102.995 123.824 102.505 124.441 101.914 124.95C100.767 126.033 99.2581 126.597 97.9552 125.672C97.0114 124.998 96.5553 123.637 95.939 122.676Z" fill="#000000"></path> <path d="M36.9705 111.129C36.5688 112.319 36.3142 113.164 35.9991 113.99C34.7619 117.206 33.4806 120.409 32.2579 123.634C31.0515 126.822 29.0616 128.163 26.8549 127.204C24.9857 126.389 24.4717 124.242 25.7528 121.358C27.2434 118.004 28.9216 114.729 30.5814 111.453C30.913 110.622 31.4692 109.9 32.1877 109.367C33.0744 108.879 34.3875 108.448 35.2172 108.769C36.0231 109.078 36.4474 110.369 36.9705 111.129Z" fill="#000000"></path> <path d="M59.2449 124.396C59.8402 122.81 60.2143 121.526 60.7899 120.338C62.1977 117.433 63.6962 114.57 65.1657 111.694C65.4003 111.19 65.6774 110.707 65.9945 110.25C66.7381 109.261 67.8782 108.694 68.9185 109.288C69.7921 109.892 70.457 110.751 70.8219 111.748C70.9991 112.512 70.919 113.314 70.5941 114.028C69.3957 117.376 68.1841 120.73 66.8169 124.013C66.4087 125.054 65.6837 125.939 64.7443 126.543C63.7814 127.068 62.3001 127.4 61.3661 127.024C60.4321 126.648 59.9189 125.29 59.2449 124.396Z" fill="#000000"></path> <path d="M127.026 127.614C126.877 128.401 126.679 129.176 126.432 129.937C125.325 132.618 124.301 135.347 122.977 137.92C122.268 139.304 121.251 140.506 120.005 141.435C117.998 142.879 115.898 141.737 115.794 139.248C115.726 138.133 115.937 137.02 116.408 136.008C117.998 132.936 119.765 129.953 121.504 126.959C121.745 126.45 122.154 126.039 122.662 125.794C123.581 125.54 124.722 125.221 125.49 125.561C126.228 125.888 126.608 127.015 127.026 127.614Z" fill="#000000"></path> <path d="M48.1399 135.399C46.5706 140.064 45.038 144.239 42.4008 147.869C41.1695 149.563 39.3664 149.823 37.992 148.911C36.7181 148.066 36.3466 146.574 36.9767 144.759C37.1048 144.334 37.2812 143.923 37.502 143.538C39.4618 140.441 41.4162 137.34 43.4305 134.277C44.1426 133.196 45.2297 132.308 46.5023 133.121C47.2938 133.62 47.6897 134.738 48.1399 135.399Z" fill="#000000"></path> <path d="M84.6108 136.308C82.773 139.941 81.1079 143.462 79.2183 146.861C78.8639 147.523 78.2633 148.018 77.5459 148.239C76.8286 148.46 76.0534 148.389 75.3879 148.043C73.8783 147.373 73.8698 145.913 74.1225 144.564C74.3089 143.463 74.6646 142.398 75.1772 141.406C76.461 139.051 77.8249 136.733 79.2872 134.485C80.1017 133.233 81.524 132.693 82.8085 133.484C83.5954 133.969 83.9301 135.185 84.6108 136.308Z" fill="#000000"></path> <path d="M141.948 87.6658C140.242 91.7351 138.791 95.6075 136.982 99.3092C136.817 99.6735 136.576 99.9984 136.275 100.262C135.974 100.525 135.619 100.72 135.235 100.834C134.852 100.948 134.448 100.978 134.053 100.922C133.656 100.865 133.277 100.725 132.94 100.509C132.606 100.348 132.309 100.12 132.067 99.8408C131.824 99.5612 131.64 99.235 131.528 98.8819C131.415 98.5295 131.376 98.1573 131.412 97.7885C131.448 97.4203 131.559 97.0632 131.738 96.739C133.51 93.1344 135.504 89.6309 137.543 86.1654C138.122 85.1809 139.343 84.5337 140.443 85.3122C141.142 85.8077 141.452 86.85 141.948 87.6658Z" fill="#000000"></path> </g> <defs> <clipPath id="clip0"> <rect width="153.583" height="149.645" fill="white" transform="translate(0.329102 0.09375)"></rect> </clipPath> </defs> </g></svg>`;

    case 1273:
    // Patchy light rain with thunder
    case 1276:
      // Moderate or heavy rain with thunder
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>weather-lightning-rainy</title><path d="M4.5,13.59C5,13.87 5.14,14.5 4.87,14.96C4.59,15.44 4,15.6 3.5,15.33V15.33C2,14.47 1,12.85 1,11A5,5 0 0,1 6,6C7,3.65 9.3,2 12,2C15.43,2 18.24,4.66 18.5,8.03L19,8A4,4 0 0,1 23,12A4,4 0 0,1 19,16A1,1 0 0,1 18,15A1,1 0 0,1 19,14A2,2 0 0,0 21,12A2,2 0 0,0 19,10H17V9A5,5 0 0,0 12,4C9.5,4 7.45,5.82 7.06,8.19C6.73,8.07 6.37,8 6,8A3,3 0 0,0 3,11C3,12.11 3.6,13.08 4.5,13.6V13.59M9.5,11H12.5L10.5,15H12.5L8.75,22L9.5,17H7L9.5,11M17.5,18.67C17.5,19.96 16.5,21 15.25,21C14,21 13,19.96 13,18.67C13,17.12 15.25,14.5 15.25,14.5C15.25,14.5 17.5,17.12 17.5,18.67Z" /></svg>`;
    case 1279:
    // Patchy light snow with thunder
    case 1282:
      // Moderate or heavy snow with thunder
      return `<svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><rect width='24' height='24' stroke='none' fill='#000000' opacity='0'/>
        <g transform="matrix(0.83 0 0 0.83 12 12)" >
        <g style="" >
        <g transform="matrix(1 0 0 1 -2.78 -3.88)" >
        <path style="stroke: rgb(0,0,0); stroke-width: 1.5; stroke-dasharray: none; stroke-linecap: round; stroke-dashoffset: 0; stroke-linejoin: round; stroke-miterlimit: 4; fill: none; fill-rule: nonzero; opacity: 1;" transform=" translate(-9.22, -8.12)" d="M 9.159 8.30901 C 9.15896 8.55975 9.17466 8.81024 9.206 9.05901 C 9.17466 8.81024 9.15896 8.55975 9.159 8.30901 C 9.16043 7.93225 9.19827 7.5565 9.272 7.18701" stroke-linecap="round" />
        </g>
        <g transform="matrix(1 0 0 1 0.54 -3.69)" >
        <path style="stroke: rgb(0,0,0); stroke-width: 1.5; stroke-dasharray: none; stroke-linecap: round; stroke-dashoffset: 0; stroke-linejoin: round; stroke-miterlimit: 4; fill: none; fill-rule: nonzero; opacity: 1;" transform=" translate(-12.54, -8.31)" d="M 15.159 14.309 C 16.298 14.3104 17.4138 13.9875 18.3761 13.3782 C 19.3383 12.7689 20.1073 11.8982 20.5931 10.868 C 21.0788 9.83784 21.2614 8.69067 21.1193 7.5606 C 20.9772 6.43052 20.5164 5.36423 19.7908 4.48634 C 19.0651 3.60845 18.1046 2.95525 17.0214 2.60306 C 15.9383 2.25088 14.7772 2.21427 13.6741 2.49751 C 12.5709 2.78075 11.5711 3.37215 10.7916 4.20257 C 10.012 5.03299 9.48498 6.06814 9.27199 7.18702 C 8.76469 6.94382 8.20911 6.81804 7.64653 6.81903 C 7.08395 6.82001 6.52882 6.94773 6.02237 7.1927 C 5.51592 7.43767 5.07117 7.79359 4.72116 8.23403 C 4.37114 8.67447 4.12485 9.18811 4.00058 9.7368 C 3.87632 10.2855 3.87726 10.8551 4.00336 11.4034 C 4.12945 11.9517 4.37744 12.4645 4.72892 12.9038 C 5.0804 13.343 5.52633 13.6975 6.03359 13.9407 C 6.54085 14.184 7.09641 14.3099 7.65899 14.309 L 15.159 14.309 Z" stroke-linecap="round" />
        </g>
        <g transform="matrix(1 0 0 1 -0.59 5.68)" >
        <path style="stroke: rgb(0,0,0); stroke-width: 1.5; stroke-dasharray: none; stroke-linecap: round; stroke-dashoffset: 0; stroke-linejoin: round; stroke-miterlimit: 4; fill: none; fill-rule: nonzero; opacity: 1;" transform=" translate(-11.41, -17.68)" d="M 12.159 14.309 L 9.159 17.309 L 13.659 17.309 L 9.909 21.059" stroke-linecap="round" />
        </g>
        <g transform="matrix(1 0 0 1 -6.4 9.06)" >
        <path style="stroke: rgb(0,0,0); stroke-width: 1.5; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: none; fill-rule: nonzero; opacity: 1;" transform=" translate(-5.6, -21.06)" d="M 5.784 21.434 C 5.57689 21.434 5.409 21.2661 5.409 21.059 C 5.409 20.8519 5.57689 20.684 5.784 20.684" stroke-linecap="round" />
        </g>
        <g transform="matrix(1 0 0 1 -6.03 9.06)" >
        <path style="stroke: rgb(0,0,0); stroke-width: 1.5; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: none; fill-rule: nonzero; opacity: 1;" transform=" translate(-5.97, -21.06)" d="M 5.784 21.434 C 5.9911 21.434 6.159 21.2661 6.159 21.059 C 6.159 20.8519 5.9911 20.684 5.784 20.684" stroke-linecap="round" />
        </g>
        <g transform="matrix(1 0 0 1 3.35 9.06)" >
        <path style="stroke: rgb(0,0,0); stroke-width: 1.5; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: none; fill-rule: nonzero; opacity: 1;" transform=" translate(-15.35, -21.06)" d="M 15.534 21.434 C 15.3269 21.434 15.159 21.2661 15.159 21.059 C 15.159 20.8519 15.3269 20.684 15.534 20.684" stroke-linecap="round" />
        </g>
        <g transform="matrix(1 0 0 1 3.72 9.06)" >
        <path style="stroke: rgb(0,0,0); stroke-width: 1.5; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: none; fill-rule: nonzero; opacity: 1;" transform=" translate(-15.72, -21.06)" d="M 15.534 21.434 C 15.7411 21.434 15.909 21.2661 15.909 21.059 C 15.909 20.8519 15.7411 20.684 15.534 20.684" stroke-linecap="round" />
        </g>
        </g>
        </g>
        </svg>`;
  }
}




/***/ }),

/***/ "./assets/imgs/bg3.jpg":
/*!*****************************!*\
  !*** ./assets/imgs/bg3.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8d140a93df22c1a6dca2.jpg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _js_apiFunctions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/apiFunctions.js */ "./src/js/apiFunctions.js");
/* harmony import */ var _js_domFunctions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/domFunctions.js */ "./src/js/domFunctions.js");




// Search City
// Search Input
const searchInput = document.getElementById("left-city-search");
// Search Icon
const searchIcon = document.getElementById("left-city-search-icon");
// Switch Units value button
const switchUnits = document.getElementById("left-change-units");

// Flags
let lastCityName;
let units = "metric";

// Get Weather Data to populate the page
async function getWeatherData(cityName, units) {
  // Get Weather Data
  try {
    _js_domFunctions_js__WEBPACK_IMPORTED_MODULE_2__.loadingScreen(true);
    const weatherData = await _js_apiFunctions_js__WEBPACK_IMPORTED_MODULE_1__.getData(cityName, units);
    lastCityName = cityName;

    _js_domFunctions_js__WEBPACK_IMPORTED_MODULE_2__.loadingScreen(false);
    console.log(units);
    _js_domFunctions_js__WEBPACK_IMPORTED_MODULE_2__.renderLocations(weatherData);
    _js_domFunctions_js__WEBPACK_IMPORTED_MODULE_2__.renderWeather(weatherData);
    _js_domFunctions_js__WEBPACK_IMPORTED_MODULE_2__.renderForecast(weatherData);
  } catch (error) {
    console.log("Error fetching weather data: ", error);
    throw error;
  }
}

// handle city search
async function handleSearch() {
  let cityName = searchInput.value;

  if (cityName) {
    try {
      await getWeatherData(cityName, units);
    } catch (error) {
      console.log("Error handling Search: ", error);
    }
  }
  searchInput.value = '';
}

// Search on Enter key press
searchInput.addEventListener("keydown", async (e) => {
  if (e.key === "Enter") {
    await handleSearch();
  }
});

// Search on click on search icon
searchIcon.addEventListener("click", async () => {
  await handleSearch();
});

// inital Loading Weather Data
getWeatherData("London", units);

// Event Listeners
switchUnits.addEventListener("click", () => {
  if (units === "metric") {
    switchUnits.innerHTML = "Display C";
    units = "imperial";
  } else {
    switchUnits.innerHTML = "Display F";
    units = "metric";
  }

  getWeatherData(lastCityName, units);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHNIQUEyQztBQUN2Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsbUNBQW1DO0FBQzdEO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGlGQUFpRixVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLFVBQVUsS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLFVBQVUsS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sVUFBVSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sVUFBVSxLQUFLLFVBQVUs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V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ2lDO0FBQ0c7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksOERBQThCO0FBQ2xDLDhCQUE4Qix3REFBcUI7QUFDbkQ7QUFDQTtBQUNBLElBQUksOERBQThCO0FBQ2xDO0FBQ0EsSUFBSSxnRUFBZ0M7QUFDcEMsSUFBSSw4REFBOEI7QUFDbEMsSUFBSSwrREFBK0I7QUFDbkMsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4td2VhdGhlci1hcHAtLS1jb3B5Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLS0tY29weS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC0tLWNvcHkvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAtLS1jb3B5Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC0tLWNvcHkvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC0tLWNvcHkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC0tLWNvcHkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAtLS1jb3B5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAtLS1jb3B5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAtLS1jb3B5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC0tLWNvcHkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLS0tY29weS8uL3NyYy9qcy9hcGlGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC0tLWNvcHkvLi9zcmMvanMvZG9tRnVuY3Rpb25zLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAtLS1jb3B5Ly4vc3JjL2pzL3V0aWxpdHkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC0tLWNvcHkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC0tLWNvcHkvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC0tLWNvcHkvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAtLS1jb3B5L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC0tLWNvcHkvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLS0tY29weS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAtLS1jb3B5L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAtLS1jb3B5L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAtLS1jb3B5L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLS0tY29weS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi8uLi9hc3NldHMvaW1ncy9iZzMuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBib2R5LFxyXG5odG1sIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIC8qIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlOyAqL1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgLyogYmFja2dyb3VuZC1zaXplOiBjb250YWluOyAqL1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHBhZGRpbmc6IDUwcHg7XHJcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgZ2FwOiA0MHB4O1xyXG59XHJcblxyXG4udG9wLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi8qIExlZnQgKi9cclxuI2xlZnQtd2VhdGhlci10ZXh0IHtcclxuICBmb250LXNpemU6IDUwcHg7XHJcbiAgbWFyZ2luOiAwIDAgMTBweCAwO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbiNsZWZ0LWNpdHktdGV4dCB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbWFyZ2luOiAwIDAgMTBweCAwO1xyXG59XHJcblxyXG4jbGVmdC1kYXRlLFxyXG4jbGVmdC10aW1lIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbiNsZWZ0LWN1cnJlbnQtdGVtcCB7XHJcbiAgZm9udC1zaXplOiA2MHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgbWFyZ2luOiAxNXB4IDAgNXB4IDA7XHJcbn1cclxuXHJcbiNsZWZ0LWNoYW5nZS11bml0cyB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLmxlZnQtc2VhcmNoIHtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGU7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIHdpZHRoOiAxNTVweDtcclxufVxyXG5cclxuI2xlZnQtY2l0eS1zZWFyY2gge1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgd2lkdGg6IDEyNXB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDNweDtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4jbGVmdC1jaXR5LXNlYXJjaDo6cGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmxlZnQtd2VhdGhlci1pY29uIHtcclxuICBmaWx0ZXI6IGludmVydCgxMDAlKTtcclxuICB3aWR0aDogMTY1cHg7XHJcbn1cclxuXHJcbi8qIFJpZ2h0ICovXHJcbi5yaWdodC1zdWIgc3ZnIHtcclxuICB3aWR0aDogNTBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgc3Ryb2tlLXdpZHRoOiAxcHg7XHJcbiAgZmlsdGVyOiBpbnZlcnQoMTAwJSk7XHJcbn1cclxuLnJpZ2h0LXN1YiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAyMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbi5yaWdodC1zdWIgcCB7XHJcbiAgbWFyZ2luOiA2cHg7XHJcbn1cclxuXHJcbi5yaWdodC1kZXNjLXRleHQge1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4ucmlnaHQtZGVzYy12YWx1ZSB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi8qIEJvdHRvbSAqL1xyXG4uYm90dG9tLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxufVxyXG5cclxuLmZvcmVjYXN0LXRpdGxlIHtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmZvcmVjYXN0LXRlbXAge1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5mb3JlY2FzdC1tYXgtdGVtcCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uZm9yZWNhc3QtbWF4LXRlbXAgcCB7XHJcbiAgbWFyZ2luOiA1cHggMDtcclxufVxyXG5cclxuLmZvcmVjYXN0LW1heC10ZW1wIHN2ZyB7XHJcbiAgZmlsdGVyOiBpbnZlcnQoMTAwJSk7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbn1cclxuXHJcbi5mb3JlY2FzdC13ZWF0aGVySWNvbiB7XHJcbiAgZmlsdGVyOiBpbnZlcnQoMTAwJSk7XHJcbiAgcGFkZGluZzogMzBweCAwO1xyXG4gIHdpZHRoOiAxMzBweDtcclxufVxyXG5cclxuLyogT3ZlcmxheSAqL1xyXG4ub3ZlcmxheSB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi5vdmVybGF5LWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuLnRleHQge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztFQUVFLFdBQVc7RUFDWCxZQUFZO0VBQ1osU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLHlEQUFpRDtFQUNqRCw0QkFBNEI7RUFDNUIsZ0NBQWdDO0VBQ2hDLHNCQUFzQjtFQUN0Qiw4QkFBOEI7RUFDOUIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IseUNBQXlDO0VBQ3pDLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUVBLFNBQVM7QUFDVDtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7O0VBRUUsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixZQUFZO0FBQ2Q7O0FBRUEsVUFBVTtBQUNWO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUEsV0FBVztBQUNYO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGVBQWU7RUFDZiw4QkFBOEI7RUFDOUIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsV0FBVztBQUNiOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUEsWUFBWTtBQUNaO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7RUFDWixvQ0FBb0M7RUFDcEMsYUFBYTtFQUNiLFlBQVk7RUFDWixlQUFlO0VBQ2YsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHksXFxyXFxuaHRtbCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuLy4uL2Fzc2V0cy9pbWdzL2JnMy5qcGdcXFwiKTtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAvKiBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTsgKi9cXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAvKiBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47ICovXFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBwYWRkaW5nOiA1MHB4O1xcclxcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxyXFxuICBnYXA6IDQwcHg7XFxyXFxufVxcclxcblxcclxcbi50b3AtY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLyogTGVmdCAqL1xcclxcbiNsZWZ0LXdlYXRoZXItdGV4dCB7XFxyXFxuICBmb250LXNpemU6IDUwcHg7XFxyXFxuICBtYXJnaW46IDAgMCAxMHB4IDA7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbn1cXHJcXG5cXHJcXG4jbGVmdC1jaXR5LXRleHQge1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIG1hcmdpbjogMCAwIDEwcHggMDtcXHJcXG59XFxyXFxuXFxyXFxuI2xlZnQtZGF0ZSxcXHJcXG4jbGVmdC10aW1lIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbiNsZWZ0LWN1cnJlbnQtdGVtcCB7XFxyXFxuICBmb250LXNpemU6IDYwcHg7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgbWFyZ2luOiAxNXB4IDAgNXB4IDA7XFxyXFxufVxcclxcblxcclxcbiNsZWZ0LWNoYW5nZS11bml0cyB7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgZm9udC1zaXplOiAxMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubGVmdC1zZWFyY2gge1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlO1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbiAgd2lkdGg6IDE1NXB4O1xcclxcbn1cXHJcXG5cXHJcXG4jbGVmdC1jaXR5LXNlYXJjaCB7XFxyXFxuICBmb250LXNpemU6IDE1cHg7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgd2lkdGg6IDEyNXB4O1xcclxcbiAgcGFkZGluZy1yaWdodDogM3B4O1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI2xlZnQtY2l0eS1zZWFyY2g6OnBsYWNlaG9sZGVyIHtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmxlZnQtd2VhdGhlci1pY29uIHtcXHJcXG4gIGZpbHRlcjogaW52ZXJ0KDEwMCUpO1xcclxcbiAgd2lkdGg6IDE2NXB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBSaWdodCAqL1xcclxcbi5yaWdodC1zdWIgc3ZnIHtcXHJcXG4gIHdpZHRoOiA1MHB4O1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgc3Ryb2tlLXdpZHRoOiAxcHg7XFxyXFxuICBmaWx0ZXI6IGludmVydCgxMDAlKTtcXHJcXG59XFxyXFxuLnJpZ2h0LXN1YiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDIwcHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucmlnaHQtc3ViIHAge1xcclxcbiAgbWFyZ2luOiA2cHg7XFxyXFxufVxcclxcblxcclxcbi5yaWdodC1kZXNjLXRleHQge1xcclxcbiAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG59XFxyXFxuXFxyXFxuLnJpZ2h0LWRlc2MtdmFsdWUge1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG59XFxyXFxuXFxyXFxuLyogQm90dG9tICovXFxyXFxuLmJvdHRvbS1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9yZWNhc3QtdGl0bGUge1xcclxcbiAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9yZWNhc3QtdGVtcCB7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9yZWNhc3QtbWF4LXRlbXAge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcmVjYXN0LW1heC10ZW1wIHAge1xcclxcbiAgbWFyZ2luOiA1cHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcmVjYXN0LW1heC10ZW1wIHN2ZyB7XFxyXFxuICBmaWx0ZXI6IGludmVydCgxMDAlKTtcXHJcXG4gIHdpZHRoOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9yZWNhc3Qtd2VhdGhlckljb24ge1xcclxcbiAgZmlsdGVyOiBpbnZlcnQoMTAwJSk7XFxyXFxuICBwYWRkaW5nOiAzMHB4IDA7XFxyXFxuICB3aWR0aDogMTMwcHg7XFxyXFxufVxcclxcblxcclxcbi8qIE92ZXJsYXkgKi9cXHJcXG4ub3ZlcmxheSB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgei1pbmRleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLm92ZXJsYXktY29udGVudCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGZsZXgtZ3JvdzogMTtcXHJcXG4gIGNvbG9yOiAjZmZmZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4udGV4dCB7XFxyXFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImFzeW5jIGZ1bmN0aW9uIGdldERhdGEoY2l0eU5hbWUsIHVuaXRzKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgIGBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT04MzY4NjQ3NmQ2OWQ0Mzg2YjU5MTAyNzUyMjMxMjA2JnE9JHtjaXR5TmFtZX0mZGF5cz03JmFxaT15ZXMmYWxlcnRzPW5vYFxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgIGxldCB3ZWF0aGVyRGF0YSA9IHtcclxuICAgICAgbmFtZTogZGF0YS5sb2NhdGlvbi5uYW1lLFxyXG4gICAgICAvLyByZWdpb246IGRhdGEubG9jYXRpb24ucmVnaW9uLFxyXG4gICAgICAvLyBjb3VudHJ5OiBkYXRhLmxvY2F0aW9uLmNvdW50cnksXHJcbiAgICAgIC8vIHRpbWV6b25lOiBkYXRhLmxvY2F0aW9uLnR6X2lkLFxyXG4gICAgICBsb2NhbFRpbWU6IGRhdGEubG9jYXRpb24ubG9jYWx0aW1lLFxyXG4gICAgICBjb2RlOiBkYXRhLmN1cnJlbnQuY29uZGl0aW9uLmNvZGUsXHJcbiAgICAgIHRleHQ6IGRhdGEuY3VycmVudC5jb25kaXRpb24udGV4dCxcclxuICAgICAgaXNEYXk6IGRhdGEuY3VycmVudC5pc19kYXksXHJcbiAgICAgIGh1bWlkaXR5OiBkYXRhLmN1cnJlbnQuaHVtaWRpdHksXHJcbiAgICAgIC8vIGNsb3VkOiBkYXRhLmN1cnJlbnQuY2xvdWQsXHJcbiAgICAgIC8vIHV2OiBkYXRhLmN1cnJlbnQudXYsXHJcbiAgICAgIGFpclF1YWxpdHk6IGRhdGEuY3VycmVudC5haXJfcXVhbGl0eVtcInVzLWVwYS1pbmRleFwiXSxcclxuICAgICAgLy8gd2luZERlZ3JlZTogZGF0YS5jdXJyZW50LndpbmRfZGVncmVlLFxyXG4gICAgICAvLyB3aW5kRGlyOiBkYXRhLmN1cnJlbnQud2luZF9kaXIsXHJcbiAgICAgIC8vIGZvcmVjYXN0OiBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5LFxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAodW5pdHMgPT09IFwibWV0cmljXCIpIHtcclxuICAgICAgd2VhdGhlckRhdGFbXCJmZWVsc0xpa2VcIl0gPSBkYXRhLmN1cnJlbnQuZmVlbHNsaWtlX2M7XHJcbiAgICAgIC8vIHdlYXRoZXJEYXRhW1wiR3VzdFwiXSA9IGRhdGEuY3VycmVudC5ndXN0X2twaDtcclxuICAgICAgLy8gd2VhdGhlckRhdGFbXCJwcmVjaXBcIl0gPSBkYXRhLmN1cnJlbnQucHJlY2lwX21tO1xyXG4gICAgICAvLyB3ZWF0aGVyRGF0YVtcInByZXNzdXJlXCJdID0gZGF0YS5jdXJyZW50LnByZXNzdXJlX21iO1xyXG4gICAgICB3ZWF0aGVyRGF0YVtcInRlbXBcIl0gPSBkYXRhLmN1cnJlbnQudGVtcF9jO1xyXG4gICAgICAvLyB3ZWF0aGVyRGF0YVtcInZpc1wiXSA9IGRhdGEuY3VycmVudC52aXNfa207XHJcbiAgICAgIHdlYXRoZXJEYXRhW1wid2luZFNwZWVkXCJdID0gZGF0YS5jdXJyZW50LndpbmRfa3BoO1xyXG4gICAgICB3ZWF0aGVyRGF0YVtcInRlbXBVbml0XCJdID0gXCIgwrBDXCI7XHJcbiAgICAgIHdlYXRoZXJEYXRhW1wic3BlZWRVbml0XCJdID0gXCIga20vaFwiO1xyXG5cclxuICAgICAgY29uc3QgbmV3Rm9yZWNhc3RBcnJheSA9IFtdO1xyXG5cclxuICAgICAgZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheS5mb3JFYWNoKChlYWNoRGF5KSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZWFjaERheS5kYXkuYXZndGVtcF9jKTtcclxuICAgICAgICBjb25zdCBkYXlGb3JlY2FzdCA9IHtcclxuICAgICAgICAgIGRhdGU6IGVhY2hEYXkuZGF0ZSxcclxuICAgICAgICAgIGF2Z1RlbXA6IGVhY2hEYXkuZGF5LmF2Z3RlbXBfYyxcclxuICAgICAgICAgIGNvZGU6IGVhY2hEYXkuZGF5LmNvbmRpdGlvbi5jb2RlLFxyXG4gICAgICAgICAgbWF4VGVtcDogZWFjaERheS5kYXkubWF4dGVtcF9jLFxyXG4gICAgICAgICAgLy8gYWlyUXVhbGl0eTogZWFjaERheS5kYXkuYWlyX3F1YWxpdHlbXCJ1cy1lcGEtaW5kZXhcIl0sXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgbmV3Rm9yZWNhc3RBcnJheS5wdXNoKGRheUZvcmVjYXN0KTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICB3ZWF0aGVyRGF0YVtcImZvcmVjYXN0RGF0YVwiXSA9IG5ld0ZvcmVjYXN0QXJyYXk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB3ZWF0aGVyRGF0YVtcImZlZWxzTGlrZVwiXSA9IGRhdGEuY3VycmVudC5mZWVsc2xpa2VfZjtcclxuICAgICAgLy8gd2VhdGhlckRhdGFbXCJHdXN0XCJdID0gZGF0YS5jdXJyZW50Lmd1c3RfbXBoO1xyXG4gICAgICAvLyB3ZWF0aGVyRGF0YVtcInByZWNpcFwiXSA9IGRhdGEuY3VycmVudC5wcmVjaXBfaW47XHJcbiAgICAgIC8vIHdlYXRoZXJEYXRhW1wicHJlc3N1cmVcIl0gPSBkYXRhLmN1cnJlbnQucHJlc3N1cmVfaW47XHJcbiAgICAgIHdlYXRoZXJEYXRhW1widGVtcFwiXSA9IGRhdGEuY3VycmVudC50ZW1wX2Y7XHJcbiAgICAgIC8vIHdlYXRoZXJEYXRhW1widmlzXCJdID0gZGF0YS5jdXJyZW50LnZpc19taWxlcztcclxuICAgICAgd2VhdGhlckRhdGFbXCJ3aW5kU3BlZWRcIl0gPSBkYXRhLmN1cnJlbnQud2luZF9tcGg7XHJcbiAgICAgIHdlYXRoZXJEYXRhW1widGVtcFVuaXRcIl0gPSBcIiDCsEZcIjtcclxuICAgICAgd2VhdGhlckRhdGFbXCJzcGVlZFVuaXRcIl0gPSBcIiBtcGhcIjtcclxuXHJcbiAgICAgIGNvbnN0IG5ld0ZvcmVjYXN0QXJyYXkgPSBbXTtcclxuXHJcbiAgICAgIGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXkuZm9yRWFjaCgoZWFjaERheSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVhY2hEYXkuZGF5LmF2Z3RlbXBfYyk7XHJcbiAgICAgICAgY29uc3QgZGF5Rm9yZWNhc3QgPSB7XHJcbiAgICAgICAgICBkYXRlOiBlYWNoRGF5LmRhdGUsXHJcbiAgICAgICAgICBhdmdUZW1wOiBlYWNoRGF5LmRheS5hdmd0ZW1wX2MsXHJcbiAgICAgICAgICBjb2RlOiBlYWNoRGF5LmRheS5jb25kaXRpb24uY29kZSxcclxuICAgICAgICAgIG1heFRlbXA6IGVhY2hEYXkuZGF5Lm1heHRlbXBfZixcclxuICAgICAgICAgIC8vIGFpclF1YWxpdHk6IGVhY2hEYXkuZGF5LmFpcl9xdWFsaXR5W1widXMtZXBhLWluZGV4XCJdLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIG5ld0ZvcmVjYXN0QXJyYXkucHVzaChkYXlGb3JlY2FzdCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgd2VhdGhlckRhdGFbXCJmb3JlY2FzdERhdGFcIl0gPSBuZXdGb3JlY2FzdEFycmF5O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHdlYXRoZXJEYXRhO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIkVycm9yIGZldGNoaW5nIHdlYXRoZXIgZGF0YTpcIiwgZXJyb3IpO1xyXG4gICAgdGhyb3cgZXJyb3I7XHJcbiAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXREYXRhMihjaXR5TmFtZSwgdW5pdHMpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgICAgLy8gICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2NpdHlOYW1lfSZBUFBJRD0yMGY3NjMyZmZjMmMwMjI2NTRlNDA5M2M2OTQ3YjRmNGBcclxuICAgICAgYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2N1cnJlbnQuanNvbj9rZXk9ODM2ODY0NzZkNjlkNDM4NmI1OTEwMjc1MjIzMTIwNiZxPSR7Y2l0eU5hbWV9YFxyXG4gICAgKTtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgbGV0IHdlYXRoZXJEYXRhID0ge1xyXG4gICAgICBjb3VudHJ5OiBkYXRhLmxvY2F0aW9uLmNvdW50cnksXHJcbiAgICAgIG5hbWU6IGRhdGEubG9jYXRpb24ubmFtZSxcclxuICAgICAgcmVnaW9uOiBkYXRhLmxvY2F0aW9uLnJlZ2lvbixcclxuICAgICAgdGltZXpvbmU6IGRhdGEubG9jYXRpb24udHpfaWQsXHJcbiAgICAgIGxvY2FsVGltZTogZGF0YS5sb2NhdGlvbi5sb2NhbHRpbWUsXHJcbiAgICB9O1xyXG5cclxuICAgIGlmICh1bml0cyA9PT0gXCJtZXRyaWNcIikge1xyXG4gICAgICB3ZWF0aGVyRGF0YVtcImNvZGVcIl0gPSBkYXRhLmN1cnJlbnQuY29uZGl0aW9uLmNvZGU7XHJcbiAgICAgIHdlYXRoZXJEYXRhW1widGV4dFwiXSA9IGRhdGEuY3VycmVudC5jb25kaXRpb24udGV4dDtcclxuICAgICAgd2VhdGhlckRhdGFbXCJmZWVsc0xpa2VcIl0gPSBkYXRhLmN1cnJlbnQuZmVlbHNsaWtlX2M7XHJcbiAgICAgIHdlYXRoZXJEYXRhW1wiR3VzdFwiXSA9IGRhdGEuY3VycmVudC5ndXN0X2twaDtcclxuICAgICAgd2VhdGhlckRhdGFbXCJodW1pZGl0eVwiXSA9IGRhdGEuY3VycmVudC5odW1pZGl0eTtcclxuICAgICAgd2VhdGhlckRhdGFbXCJpc0RheVwiXSA9IGRhdGEuY3VycmVudC5pc19kYXk7XHJcbiAgICAgIHdlYXRoZXJEYXRhW1wicHJlY2lwXCJdID0gZGF0YS5jdXJyZW50LnByZWNpcF9tbTtcclxuICAgICAgd2VhdGhlckRhdGFbXCJwcmVzc3VyZVwiXSA9IGRhdGEuY3VycmVudC5wcmVzc3VyZV9tYjtcclxuICAgICAgd2VhdGhlckRhdGFbXCJ0ZW1wXCJdID0gZGF0YS5jdXJyZW50LnRlbXBfYztcclxuICAgICAgd2VhdGhlckRhdGFbXCJ1dlwiXSA9IGRhdGEuY3VycmVudC51djtcclxuICAgICAgd2VhdGhlckRhdGFbXCJ2aXNcIl0gPSBkYXRhLmN1cnJlbnQudmlzX2ttO1xyXG4gICAgICB3ZWF0aGVyRGF0YVtcIndpbmREZWdyZWVcIl0gPSBkYXRhLmN1cnJlbnQud2luZF9kZWdyZWU7XHJcbiAgICAgIHdlYXRoZXJEYXRhW1wid2luZERpclwiXSA9IGRhdGEuY3VycmVudC53aW5kX2RpcjtcclxuICAgICAgd2VhdGhlckRhdGFbXCJ3aW5kU3BlZWRcIl0gPSBkYXRhLmN1cnJlbnQud2luZF9rcGg7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB3ZWF0aGVyRGF0YVtcImNvZGVcIl0gPSBkYXRhLmN1cnJlbnQuY29uZGl0aW9uLmNvZGU7XHJcbiAgICAgIHdlYXRoZXJEYXRhW1widGV4dFwiXSA9IGRhdGEuY3VycmVudC5jb25kaXRpb24udGV4dDtcclxuICAgICAgd2VhdGhlckRhdGFbXCJmZWVsc0xpa2VcIl0gPSBkYXRhLmN1cnJlbnQuZmVlbHNsaWtlX2Y7XHJcbiAgICAgIHdlYXRoZXJEYXRhW1wiR3VzdFwiXSA9IGRhdGEuY3VycmVudC5ndXN0X21waDtcclxuICAgICAgd2VhdGhlckRhdGFbXCJodW1pZGl0eVwiXSA9IGRhdGEuY3VycmVudC5odW1pZGl0eTtcclxuICAgICAgd2VhdGhlckRhdGFbXCJpc0RheVwiXSA9IGRhdGEuY3VycmVudC5pc19kYXk7XHJcbiAgICAgIHdlYXRoZXJEYXRhW1wicHJlY2lwXCJdID0gZGF0YS5jdXJyZW50LnByZWNpcF9pbjtcclxuICAgICAgd2VhdGhlckRhdGFbXCJwcmVzc3VyZVwiXSA9IGRhdGEuY3VycmVudC5wcmVzc3VyZV9pbjtcclxuICAgICAgd2VhdGhlckRhdGFbXCJ0ZW1wXCJdID0gZGF0YS5jdXJyZW50LnRlbXBfZjtcclxuICAgICAgd2VhdGhlckRhdGFbXCJ1dlwiXSA9IGRhdGEuY3VycmVudC51djtcclxuICAgICAgd2VhdGhlckRhdGFbXCJ2aXNcIl0gPSBkYXRhLmN1cnJlbnQudmlzX21pbGVzO1xyXG4gICAgICB3ZWF0aGVyRGF0YVtcIndpbmREZWdyZWVcIl0gPSBkYXRhLmN1cnJlbnQud2luZF9kZWdyZWU7XHJcbiAgICAgIHdlYXRoZXJEYXRhW1wid2luZERpclwiXSA9IGRhdGEuY3VycmVudC53aW5kX2RpcjtcclxuICAgICAgd2VhdGhlckRhdGFbXCJ3aW5kU3BlZWRcIl0gPSBkYXRhLmN1cnJlbnQud2luZF9tcGg7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc29sZS5sb2cod2VhdGhlckRhdGEuY291bnRyeSk7XHJcbiAgICBjb25zb2xlLmxvZyh3ZWF0aGVyRGF0YS5sb2NhbFRpbWUpO1xyXG4gICAgY29uc29sZS5sb2cod2VhdGhlckRhdGEuY29kZSk7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgIHJldHVybiB3ZWF0aGVyRGF0YTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coXCJFcnJvciBmZXRjaGluZyB3ZWF0aGVyIGRhdGE6XCIsIGVycm9yKTtcclxuICAgIHRocm93IGVycm9yO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHsgZ2V0RGF0YSB9O1xyXG4iLCJpbXBvcnQgKiBhcyBVVElMSVRZX0ZVTkNUSU9OUyBmcm9tIFwiLi91dGlsaXR5LmpzXCI7XHJcblxyXG5mdW5jdGlvbiByZW5kZXJMb2NhdGlvbnMobG9jYXRpb24pIHtcclxuICBjb25zdCBjaXR5VGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGVmdC1jaXR5LXRleHRcIik7XHJcbiAgY2l0eVRleHQudGV4dENvbnRlbnQgPSBsb2NhdGlvbi5yZWdpb247XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlcldlYXRoZXIod2VhdGhlcikge1xyXG4gIC8vIExlZnQgc2lkZVxyXG4gIGNvbnN0IHdlYXRoZXJUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsZWZ0LXdlYXRoZXItdGV4dFwiKTtcclxuICB3ZWF0aGVyVGV4dC50ZXh0Q29udGVudCA9IHdlYXRoZXIudGV4dDtcclxuXHJcbiAgY29uc3QgY2l0eVRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxlZnQtY2l0eS10ZXh0XCIpO1xyXG4gIGNpdHlUZXh0LnRleHRDb250ZW50ID0gd2VhdGhlci5uYW1lO1xyXG5cclxuICBjb25zdCBjdXJyZW50RGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGVmdC1kYXRlXCIpO1xyXG4gIGN1cnJlbnREYXRlLnRleHRDb250ZW50ID0gVVRJTElUWV9GVU5DVElPTlMuY3VycmVudERhdGVGb3JtYXR0ZWQoXHJcbiAgICB3ZWF0aGVyLmxvY2FsVGltZVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGN1cnJlbnRUaW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsZWZ0LXRpbWVcIik7XHJcbiAgY3VycmVudFRpbWUudGV4dENvbnRlbnQgPSBVVElMSVRZX0ZVTkNUSU9OUy5jdXJyZW50VGltZUZvcm1hdHRlZChcclxuICAgIHdlYXRoZXIubG9jYWxUaW1lXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgY3VycmVudFRlbXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxlZnQtY3VycmVudC10ZW1wXCIpO1xyXG4gIGN1cnJlbnRUZW1wLnRleHRDb250ZW50ID0gd2VhdGhlci50ZW1wICsgd2VhdGhlci50ZW1wVW5pdDtcclxuXHJcbiAgY29uc3Qgd2VhdGhlckljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxlZnQtd2VhdGhlci1pY29uXCIpO1xyXG4gIHdlYXRoZXJJY29uLmlubmVySFRNTCA9IFVUSUxJVFlfRlVOQ1RJT05TLmdldFdlYXRoZXJJY29uKFxyXG4gICAgd2VhdGhlci5jb2RlLFxyXG4gICAgd2VhdGhlci5pc0RheVxyXG4gICk7XHJcblxyXG4gIC8vIFJpZ2h0IFNpZGVcclxuICBjb25zdCBkZXNjVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucmlnaHQtZGVzYy10ZXh0XCIpO1xyXG4gIGNvbnN0IGRlc2NWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucmlnaHQtZGVzYy12YWx1ZVwiKTtcclxuXHJcbiAgZGVzY1RleHRbMF0udGV4dENvbnRlbnQgPSBcIkZlZWxzIExpa2VcIjtcclxuICBkZXNjVmFsdWVbMF0udGV4dENvbnRlbnQgPSB3ZWF0aGVyLmZlZWxzTGlrZSArIHdlYXRoZXIudGVtcFVuaXQ7XHJcblxyXG4gIGRlc2NUZXh0WzFdLnRleHRDb250ZW50ID0gXCJIdW1pZGl0eVwiO1xyXG4gIGRlc2NWYWx1ZVsxXS50ZXh0Q29udGVudCA9IHdlYXRoZXIuaHVtaWRpdHkgKyBcIiVcIjtcclxuXHJcbiAgZGVzY1RleHRbMl0udGV4dENvbnRlbnQgPSBcIkFpciBRdWFsaXR5XCI7XHJcbiAgZGVzY1ZhbHVlWzJdLnRleHRDb250ZW50ID0gVVRJTElUWV9GVU5DVElPTlMuZ2V0QWlyUXVhbGl0eShcclxuICAgIHdlYXRoZXIuYWlyUXVhbGl0eVxyXG4gICk7XHJcblxyXG4gIGRlc2NUZXh0WzNdLnRleHRDb250ZW50ID0gXCJXaW5kIFNwZWVkXCI7XHJcbiAgZGVzY1ZhbHVlWzNdLnRleHRDb250ZW50ID0gd2VhdGhlci53aW5kU3BlZWQgKyB3ZWF0aGVyLnNwZWVkVW5pdDtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyRm9yZWNhc3Qod2VhdGhlcikge1xyXG4gIGxldCBmb3JlY2FzdERhdGEgPSB3ZWF0aGVyLmZvcmVjYXN0RGF0YTtcclxuXHJcbiAgY29uc3QgY2FyZHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvdHRvbS1jb250YWluZXJcIik7XHJcblxyXG4gIGNhcmRzLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA3OyBpKyspIHtcclxuICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiKTtcclxuXHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZChcImZvcmVjYXN0LXRpdGxlXCIpO1xyXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBVVElMSVRZX0ZVTkNUSU9OUy5nZXREYXkoZm9yZWNhc3REYXRhW2ldLmRhdGUpO1xyXG5cclxuICAgIGNvbnN0IHRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIHRlbXAuY2xhc3NMaXN0LmFkZChcImZvcmVjYXN0LXRlbXBcIik7XHJcbiAgICB0ZW1wLnRleHRDb250ZW50ID0gZm9yZWNhc3REYXRhW2ldLmF2Z1RlbXAgKyB3ZWF0aGVyLnRlbXBVbml0O1xyXG5cclxuICAgIGNvbnN0IGFpclFVYWxpdHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgYWlyUVVhbGl0eURpdi5jbGFzc0xpc3QuYWRkKFwiZm9yZWNhc3QtbWF4LXRlbXBcIik7XHJcbiAgICBhaXJRVWFsaXR5RGl2LmlubmVySFRNTCA9IGBcclxuICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHRpdGxlPnRoZXJtb21ldGVyLWhpZ2g8L3RpdGxlPjxwYXRoIGQ9XCJNMTUgMTNWNUEzIDMgMCAwIDAgOSA1VjEzQTUgNSAwIDEgMCAxNSAxM00xMiA0QTEgMSAwIDAgMSAxMyA1SDExQTEgMSAwIDAgMSAxMiA0WlwiIC8+PC9zdmc+XHJcbiAgICAgICAgPHA+JHtmb3JlY2FzdERhdGFbaV0ubWF4VGVtcCArIHdlYXRoZXIudGVtcFVuaXR9PC9wPlxyXG4gICAgICAgIGA7XHJcblxyXG4gICAgY29uc3Qgd2VhdGhlckljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgd2VhdGhlckljb24uY2xhc3NMaXN0LmFkZChcImZvcmVjYXN0LXdlYXRoZXJJY29uXCIpO1xyXG4gICAgd2VhdGhlckljb24uaW5uZXJIVE1MID0gVVRJTElUWV9GVU5DVElPTlMuZ2V0V2VhdGhlckljb24oXHJcbiAgICAgIGZvcmVjYXN0RGF0YVtpXS5jb2RlLFxyXG4gICAgICB3ZWF0aGVyLmlzRGF5XHJcbiAgICApO1xyXG5cclxuICAgIGNhcmQuYXBwZW5kKHRpdGxlLCB0ZW1wLCBhaXJRVWFsaXR5RGl2LCB3ZWF0aGVySWNvbik7XHJcbiAgICBjYXJkcy5hcHBlbmRDaGlsZChjYXJkKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRpbmdTY3JlZW4oc2hvdykge1xyXG4gIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm92ZXJsYXlcIik7XHJcbiAgY29uc29sZS5sb2cob3ZlcmxheS5zdHlsZS5kaXNwbGF5KTtcclxuICBpZiAoc2hvdykge1xyXG4gICAgb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnNvbGUubG9nKG92ZXJsYXkuc3R5bGUuZGlzcGxheSk7XHJcbiAgICBvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IHJlbmRlckxvY2F0aW9ucywgcmVuZGVyV2VhdGhlciwgcmVuZGVyRm9yZWNhc3QsIGxvYWRpbmdTY3JlZW4gfTtcclxuIiwiZnVuY3Rpb24gY3VycmVudERhdGVGb3JtYXR0ZWQobG9jYWxUaW1lKSB7XHJcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGxvY2FsVGltZSk7XHJcblxyXG4gIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICB3ZWVrZGF5OiBcImxvbmdcIixcclxuICAgIGRheTogXCJudW1lcmljXCIsXHJcbiAgICBtb250aDogXCJsb25nXCIsXHJcbiAgICB5ZWFyOiBcIm51bWVyaWNcIixcclxuICB9O1xyXG4gIGNvbnN0IGZvcm1hdHRlZERhdGUgPSBkYXRlLnRvTG9jYWxlRGF0ZVN0cmluZyhcImVuLVVzXCIsIG9wdGlvbnMpO1xyXG4gIHJldHVybiBmb3JtYXR0ZWREYXRlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjdXJyZW50VGltZUZvcm1hdHRlZChsb2NhbFRpbWUpIHtcclxuICBjb25zdCBkYXRlID0gbmV3IERhdGUobG9jYWxUaW1lKTtcclxuXHJcbiAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgIGhvdXI6IFwibnVtZXJpY1wiLFxyXG4gICAgbWludXRlOiBcIm51bWVyaWNcIixcclxuICAgIGhvdXIxMjogdHJ1ZSxcclxuICB9O1xyXG5cclxuICBjb25zdCBmb3JtYXR0ZWRUaW1lID0gZGF0ZS50b0xvY2FsZVRpbWVTdHJpbmcoXCJlbi1VU1wiLCBvcHRpb25zKS50b0xvd2VyQ2FzZSgpO1xyXG4gIHJldHVybiBmb3JtYXR0ZWRUaW1lO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRBaXJRdWFsaXR5KGluZGV4KSB7XHJcbiAgc3dpdGNoIChpbmRleCkge1xyXG4gICAgY2FzZSAxOlxyXG4gICAgICByZXR1cm4gXCJHb29kXCI7XHJcbiAgICBjYXNlIDI6XHJcbiAgICAgIHJldHVybiBcIk1vZGVyYXRlXCI7XHJcbiAgICBjYXNlIDM6XHJcbiAgICAgIHJldHVybiBcIlVuaGVhbHRoeVwiO1xyXG4gICAgY2FzZSA0OlxyXG4gICAgICByZXR1cm4gXCJVbmhlYWx0aHlcIjtcclxuICAgIGNhc2UgNTpcclxuICAgICAgcmV0dXJuIFwiVmVyeSBVbmhlYWx0aHlcIjtcclxuICAgIGNhc2UgNjpcclxuICAgICAgcmV0dXJuIFwiSGF6YXJkb3VzXCI7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXREYXkoZGF0ZSkge1xyXG4gIGNvbnN0IG5ld0RhdGUgPSBuZXcgRGF0ZShkYXRlKTtcclxuICBjb25zdCBkYXlOYW1lID0gbmV3RGF0ZS50b0xvY2FsZVN0cmluZyhcImVuLVVTXCIsIHsgd2Vla2RheTogXCJsb25nXCIgfSk7XHJcbiAgcmV0dXJuIGRheU5hbWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFdlYXRoZXJJY29uKGNvZGUsIGlzRGF5KSB7XHJcbiAgc3dpdGNoIChjb2RlKSB7XHJcbiAgICBjYXNlIDEwMDA6XHJcbiAgICAgIC8vIERheTogU3VubnksIE5pZ2h0OiBDbGVhclxyXG4gICAgICBpZiAoaXNEYXkpIHtcclxuICAgICAgICByZXR1cm4gYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dGl0bGU+d2hpdGUtYmFsYW5jZS1zdW5ueTwvdGl0bGU+PHBhdGggZD1cIk0zLjU1IDE5LjA5TDQuOTYgMjAuNUw2Ljc2IDE4LjcxTDUuMzQgMTcuMjlNMTIgNkM4LjY5IDYgNiA4LjY5IDYgMTJTOC42OSAxOCAxMiAxOCAxOCAxNS4zMSAxOCAxMkMxOCA4LjY4IDE1LjMxIDYgMTIgNk0yMCAxM0gyM1YxMUgyME0xNy4yNCAxOC43MUwxOS4wNCAyMC41TDIwLjQ1IDE5LjA5TDE4LjY2IDE3LjI5TTIwLjQ1IDVMMTkuMDQgMy42TDE3LjI0IDUuMzlMMTguNjYgNi44MU0xMyAxSDExVjRIMTNNNi43NiA1LjM5TDQuOTYgMy42TDMuNTUgNUw1LjM0IDYuODFMNi43NiA1LjM5TTEgMTNINFYxMUgxTTEzIDIwSDExVjIzSDEzXCIgLz48L3N2Zz5gO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBgPHN2ZyBcclxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIFxyXG4gICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XHJcbiAgICAgIDx0aXRsZT53ZWF0aGVyLW5pZ2h0PC90aXRsZT5cclxuICAgICAgPHBhdGggZD1cIk0xNy43NSw0LjA5TDE1LjIyLDYuMDNMMTYuMTMsOS4wOUwxMy41LDcuMjhMMTAuODcsOS4wOUwxMS43OCw2LjAzTDkuMjUsNC4wOUwxMi40NCw0TDEzLjUsMUwxNC41Niw0TDE3Ljc1LDQuMDlNMjEuMjUsMTFMMTkuNjEsMTIuMjVMMjAuMiwxNC4yM0wxOC41LDEzLjA2TDE2LjgsMTQuMjNMMTcuMzksMTIuMjVMMTUuNzUsMTFMMTcuODEsMTAuOTVMMTguNSw5TDE5LjE5LDEwLjk1TDIxLjI1LDExTTE4Ljk3LDE1Ljk1QzE5LjgsMTUuODcgMjAuNjksMTcuMDUgMjAuMTYsMTcuOEMxOS44NCwxOC4yNSAxOS41LDE4LjY3IDE5LjA4LDE5LjA3QzE1LjE3LDIzIDguODQsMjMgNC45NCwxOS4wN0MxLjAzLDE1LjE3IDEuMDMsOC44MyA0Ljk0LDQuOTNDNS4zNCw0LjUzIDUuNzYsNC4xNyA2LjIxLDMuODVDNi45NiwzLjMyIDguMTQsNC4yMSA4LjA2LDUuMDRDNy43OSw3LjkgOC43NSwxMC44NyAxMC45NSwxMy4wNkMxMy4xNCwxNS4yNiAxNi4xLDE2LjIyIDE4Ljk3LDE1Ljk1TTE3LjMzLDE3Ljk3QzE0LjUsMTcuODEgMTEuNywxNi42NCA5LjUzLDE0LjVDNy4zNiwxMi4zMSA2LjIsOS41IDYuMDQsNi42OEMzLjIzLDkuODIgMy4zNCwxNC42NCA2LjM1LDE3LjY2QzkuMzcsMjAuNjcgMTQuMTksMjAuNzggMTcuMzMsMTcuOTdaXCIgLz5cclxuICAgICAgPC9zdmc+YDtcclxuICAgICAgfVxyXG5cclxuICAgIGNhc2UgMTAwMzpcclxuICAgICAgLy8gUGFydGx5IENsb3VkeVxyXG4gICAgICBpZiAoaXNEYXkpIHtcclxuICAgICAgICByZXR1cm4gYDxzdmcgXHJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBcclxuICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxyXG4gICAgICA8dGl0bGU+d2VhdGhlci1wYXJ0bHktY2xvdWR5PC90aXRsZT5cclxuICAgICAgPHBhdGggZD1cIk0xMi43NCw1LjQ3QzE1LjEsNi41IDE2LjM1LDkuMDMgMTUuOTIsMTEuNDZDMTcuMTksMTIuNTYgMTgsMTQuMTkgMTgsMTZWMTYuMTdDMTguMzEsMTYuMDYgMTguNjUsMTYgMTksMTZBMywzIDAgMCwxIDIyLDE5QTMsMyAwIDAsMSAxOSwyMkg2QTQsNCAwIDAsMSAyLDE4QTQsNCAwIDAsMSA2LDE0SDYuMjdDNSwxMi40NSA0LjYsMTAuMjQgNS41LDguMjZDNi43Miw1LjUgOS45Nyw0LjI0IDEyLjc0LDUuNDdNMTEuOTMsNy4zQzEwLjE2LDYuNSA4LjA5LDcuMzEgNy4zMSw5LjA3QzYuODUsMTAuMDkgNi45MywxMS4yMiA3LjQxLDEyLjEzQzguNSwxMC44MyAxMC4xNiwxMCAxMiwxMEMxMi43LDEwIDEzLjM4LDEwLjEyIDE0LDEwLjM0QzEzLjk0LDkuMDYgMTMuMTgsNy44NiAxMS45Myw3LjNNMTMuNTUsMy42NEMxMywzLjQgMTIuNDUsMy4yMyAxMS44OCwzLjEyTDE0LjM3LDEuODJMMTUuMjcsNC43MUMxNC43Niw0LjI5IDE0LjE5LDMuOTMgMTMuNTUsMy42NE02LjA5LDQuNDRDNS42LDQuNzkgNS4xNyw1LjE5IDQuOCw1LjYzTDQuOTEsMi44Mkw3Ljg3LDMuNUM3LjI1LDMuNzEgNi42NSw0LjAzIDYuMDksNC40NE0xOCw5LjcxQzE3LjkxLDkuMTIgMTcuNzgsOC41NSAxNy41OSw4TDE5Ljk3LDkuNUwxNy45MiwxMS43M0MxOC4wMywxMS4wOCAxOC4wNSwxMC40IDE4LDkuNzFNMy4wNCwxMS4zQzMuMTEsMTEuOSAzLjI0LDEyLjQ3IDMuNDMsMTNMMS4wNiwxMS41TDMuMSw5LjI4QzMsOS45MyAyLjk3LDEwLjYxIDMuMDQsMTEuM00xOSwxOEgxNlYxNkE0LDQgMCAwLDAgMTIsMTJBNCw0IDAgMCwwIDgsMTZINkEyLDIgMCAwLDAgNCwxOEEyLDIgMCAwLDAgNiwyMEgxOUExLDEgMCAwLDAgMjAsMTlBMSwxIDAgMCwwIDE5LDE4WlwiIC8+XHJcbiAgICAgIDwvc3ZnPmA7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGA8c3ZnIGZpbGw9XCIjMDAwMDAwXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBpZD1cIm1vb24tY2xvdWR5XCIgY2xhc3M9XCJpY29uIGdseXBoXCI+PGcgaWQ9XCJTVkdSZXBvX2JnQ2FycmllclwiIHN0cm9rZS13aWR0aD1cIjBcIj48L2c+PGcgaWQ9XCJTVkdSZXBvX3RyYWNlckNhcnJpZXJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIj48L2c+PGcgaWQ9XCJTVkdSZXBvX2ljb25DYXJyaWVyXCI+PHBhdGggZD1cIk0xNS4xMiw5LjA2di4wN0E0LjY0LDQuNjQsMCwwLDAsMTQsOWE1LjQzLDUuNDMsMCwwLDAtNS4xMSwzLjg1LDMuNTEsMy41MSwwLDAsMC0zLDEuMzdBNiw2LDAsMCwxLDMuMjIsNy40NiwzLjI2LDMuMjYsMCwwLDAsNi4zMSw5LjYxYTMuMywzLjMsMCwwLDAsMy4zLTMuM0EzLjI2LDMuMjYsMCwwLDAsNy40NiwzLjIyYTYsNiwwLDAsMSw3LjY2LDUuODRabTMuMzIsMi44NmEzLjc2LDMuNzYsMCwwLDAtLjgyLjExQTQuMzksNC4zOSwwLDAsMCwxNSwxMC4xNCwzLjQ5LDMuNDksMCwwLDAsMTQsMTBhNC41Miw0LjUyLDAsMCwwLTQuMzQsMy44OWwtLjE3LjFhMi40OCwyLjQ4LDAsMCwwLS44Mi0uMTUsMi41NiwyLjU2LDAsMCwwLTEuODkuODQsMywzLDAsMCwwLS43OCwyQTIuNzgsMi43OCwwLDAsMCw4LjY3LDE5LjZoOS43N0EzLjcxLDMuNzEsMCwwLDAsMjIsMTUuNzYsMy43MSwzLjcxLDAsMCwwLDE4LjQ0LDExLjkyWlwiPjwvcGF0aD48L2c+PC9zdmc+YDtcclxuICAgICAgfVxyXG5cclxuICAgIGNhc2UgMTAwNjpcclxuICAgICAgLy8gY2xvdWR5XHJcbiAgICAgIHJldHVybiBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjx0aXRsZT53ZWF0aGVyLWNsb3VkeTwvdGl0bGU+PHBhdGggZD1cIk02LDE5QTUsNSAwIDAsMSAxLDE0QTUsNSAwIDAsMSA2LDlDNyw2LjY1IDkuMyw1IDEyLDVDMTUuNDMsNSAxOC4yNCw3LjY2IDE4LjUsMTEuMDNMMTksMTFBNCw0IDAgMCwxIDIzLDE1QTQsNCAwIDAsMSAxOSwxOUg2TTE5LDEzSDE3VjEyQTUsNSAwIDAsMCAxMiw3QzkuNSw3IDcuNDUsOC44MiA3LjA2LDExLjE5QzYuNzMsMTEuMDcgNi4zNywxMSA2LDExQTMsMyAwIDAsMCAzLDE0QTMsMyAwIDAsMCA2LDE3SDE5QTIsMiAwIDAsMCAyMSwxNUEyLDIgMCAwLDAgMTksMTNaXCIgLz48L3N2Zz5gO1xyXG4gICAgY2FzZSAxMDA5OlxyXG4gICAgICAvLyBvdmVyY2FzdFxyXG4gICAgICByZXR1cm4gYDxzdmcgdmlld0JveD1cIjAgMCAxNiAxNlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBmaWxsPVwiIzAwMDAwMFwiPjxnIGlkPVwiU1ZHUmVwb19iZ0NhcnJpZXJcIiBzdHJva2Utd2lkdGg9XCIwXCI+PC9nPjxnIGlkPVwiU1ZHUmVwb190cmFjZXJDYXJyaWVyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCI+PC9nPjxnIGlkPVwiU1ZHUmVwb19pY29uQ2FycmllclwiPiA8cGF0aCBkPVwibSA5IDEgYyAtMi4wMjczNDQgMC4wMDM5MDYgLTMuODU1NDY5IDEuMjM0Mzc1IC00LjYxNzE4OCAzLjExMzI4MSBjIC0wLjI4OTA2MiAtMC4wNzQyMTkgLTAuNTg1OTM3IC0wLjExMzI4MSAtMC44ODI4MTIgLTAuMTEzMjgxIGMgLTEuOTMzNTk0IDAgLTMuNSAxLjU2NjQwNiAtMy41IDMuNSBzIDEuNTY2NDA2IDMuNSAzLjUgMy41IGggMS4zNDM3NSBjIDAuNjI4OTA2IC0xLjc0MjE4OCAyLjIzNDM3NSAtMi45OTYwOTQgNC4xNTYyNSAtMyBjIDEuNDc2NTYyIDAgMi43MzA0NjkgMC44MzIwMzEgMy41NjI1IDIuMDExNzE5IGMgMC43Njk1MzEgMC4wMTU2MjUgMS40ODA0NjkgMC4yODEyNSAyLjA1MDc4MSAwLjcxODc1IGMgMC44NDc2NTcgLTAuNDIxODc1IDEuMzg2NzE5IC0xLjI4NTE1NyAxLjM4NjcxOSAtMi4yMzA0NjkgYyAwIC0xLjE4NzUgLTAuODM5ODQ0IC0yLjIxNDg0NCAtMi4wMDM5MDYgLTIuNDQ5MjE5IGMgMCAtMC4wMTU2MjUgMC4wMDM5MDYgLTAuMDM1MTU2IDAuMDAzOTA2IC0wLjA1MDc4MSBjIDAgLTIuNzYxNzE5IC0yLjIzODI4MSAtNSAtNSAtNSB6IG0gMCA4IGMgLTEuNzY1NjI1IDAuMDAzOTA2IC0zLjI1MzkwNiAxLjMyMDMxMiAtMy40Njg3NSAzLjA3NDIxOSBjIC0wLjE3NTc4MSAtMC4wNTA3ODEgLTAuMzUxNTYyIC0wLjA3NDIxOSAtMC41MzEyNSAtMC4wNzQyMTkgYyAtMS4xMDU0NjkgMCAtMiAwLjg5NDUzMSAtMiAyIHMgMC44OTQ1MzEgMiAyIDIgaCA3LjUgYyAxLjM3ODkwNiAwIDIuNSAtMS4xMjEwOTQgMi41IC0yLjUgcyAtMS4xMjEwOTQgLTIuNSAtMi41IC0yLjUgYyAtMC4xMDkzNzUgMCAtMC4yMTg3NSAwLjAwNzgxMiAtMC4zMjgxMjUgMC4wMjM0MzggYyAtMC41NzQyMTkgLTEuMjM0Mzc2IC0xLjgxMjUgLTIuMDIzNDM4IC0zLjE3MTg3NSAtMi4wMjM0MzggeiBtIDAgMFwiIGZpbGw9XCIjMmUzNDM2XCI+PC9wYXRoPiA8L2c+PC9zdmc+YDtcclxuXHJcbiAgICBjYXNlIDEwMzA6XHJcbiAgICAvLyBNaXN0eVxyXG4gICAgY2FzZSAxMTM1OlxyXG4gICAgLy8gRm9nXHJcbiAgICBjYXNlIDExNDc6XHJcbiAgICAgIC8vIEZyZWV6aW5nIEZvZ1xyXG4gICAgICByZXR1cm4gYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dGl0bGU+d2VhdGhlci1mb2c8L3RpdGxlPjxwYXRoIGQ9XCJNMywxNUgxM0ExLDEgMCAwLDEgMTQsMTZBMSwxIDAgMCwxIDEzLDE3SDNBMSwxIDAgMCwxIDIsMTZBMSwxIDAgMCwxIDMsMTVNMTYsMTVIMjFBMSwxIDAgMCwxIDIyLDE2QTEsMSAwIDAsMSAyMSwxN0gxNkExLDEgMCAwLDEgMTUsMTZBMSwxIDAgMCwxIDE2LDE1TTEsMTJBNSw1IDAgMCwxIDYsN0M3LDQuNjUgOS4zLDMgMTIsM0MxNS40MywzIDE4LjI0LDUuNjYgMTguNSw5LjAzTDE5LDlDMjEuMTksOSAyMi45NywxMC43NiAyMywxM0gyMUEyLDIgMCAwLDAgMTksMTFIMTdWMTBBNSw1IDAgMCwwIDEyLDVDOS41LDUgNy40NSw2LjgyIDcuMDYsOS4xOUM2LjczLDkuMDcgNi4zNyw5IDYsOUEzLDMgMCAwLDAgMywxMkMzLDEyLjM1IDMuMDYsMTIuNjkgMy4xNywxM0gxLjFMMSwxMk0zLDE5SDVBMSwxIDAgMCwxIDYsMjBBMSwxIDAgMCwxIDUsMjFIM0ExLDEgMCAwLDEgMiwyMEExLDEgMCAwLDEgMywxOU04LDE5SDIxQTEsMSAwIDAsMSAyMiwyMEExLDEgMCAwLDEgMjEsMjFIOEExLDEgMCAwLDEgNywyMEExLDEgMCAwLDEgOCwxOVpcIiAvPjwvc3ZnPmA7XHJcblxyXG4gICAgY2FzZSAxMDYzOlxyXG4gICAgLy8gUGF0Y2h5IHJhaW4gcG9zc2libGVcclxuICAgIGNhc2UgMTE1MDpcclxuICAgIC8vIFBhdGNoeSBsaWdodCBkcml6emxlXHJcbiAgICBjYXNlIDExNTM6XHJcbiAgICAgIC8vIExpZ2h0IGRyaXp6bGVcclxuICAgICAgaWYgKGlzRGF5KSB7XHJcbiAgICAgICAgcmV0dXJuIGA8c3ZnIGZpbGw9XCIjMDAwMDAwXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48ZyBpZD1cIlNWR1JlcG9fYmdDYXJyaWVyXCIgc3Ryb2tlLXdpZHRoPVwiMFwiPjwvZz48ZyBpZD1cIlNWR1JlcG9fdHJhY2VyQ2FycmllclwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiPjwvZz48ZyBpZD1cIlNWR1JlcG9faWNvbkNhcnJpZXJcIj48cGF0aCBkPVwiTTUuNiwxOS45YTEsMSwwLDEsMCwwLTIsMi42LDIuNiwwLDAsMSwwLTUuMiwyLjU1NCwyLjU1NCwwLDAsMSwuODY0LjE2MiwxLDEsMCwwLDAsMS4yNzItLjU4OSwzLjQ4OCwzLjQ4OCwwLDAsMSw2LjUyOSwwLDEuMDIxLDEuMDIxLDAsMCwwLDEuMjcyLjU4OSwyLjMzNCwyLjMzNCwwLDAsMSwxLjI1NS0uMTIyQTIuNTk0LDIuNTk0LDAsMCwxLDE2LjQsMTcuOWExLDEsMCwxLDAsMCwyLDQuNTg3LDQuNTg3LDAsMCwwLDIuMzg2LTguNTEzQTQuNzg5LDQuNzg5LDAsMCwwLDE5LDEwYTUuMDA2LDUuMDA2LDAsMCwwLTUtNUE0Ljk1Niw0Ljk1NiwwLDAsMCw5LjMyOSw4LjI3N2E1LjU0LDUuNTQsMCwwLDAtMy4wNzcsMi40NzRBNC4yMTIsNC4yMTIsMCwwLDAsNS42LDEwLjdhNC42LDQuNiwwLDAsMCwwLDkuMlpNMTQsN2EzLDMsMCwwLDEsMywzLDIuNzY5LDIuNzY5LDAsMCwxLS4xLjczMSw0LjQyMiw0LjQyMiwwLDAsMC0xLjE1My4wMiw1LjY3Myw1LjY3MywwLDAsMC00LjAyMS0yLjdoMEEyLjk3NCwyLjk3NCwwLDAsMSwxNCw3Wm05LDNhMSwxLDAsMCwxLTEsMUgyMWExLDEsMCwwLDEsMC0yaDFBMSwxLDAsMCwxLDIzLDEwWk0xNCwxYTEsMSwwLDAsMSwxLDFWM2ExLDEsMCwwLDEtMiwwVjJBMSwxLDAsMCwxLDE0LDFabTYuMzY0LDIuNjM2YTEsMSwwLDAsMSwwLDEuNDE0bC0uNzA3LjcwN2ExLDEsMCwwLDEtMS40MTQtMS40MTRsLjcwNy0uNzA3QTEsMSwwLDAsMSwyMC4zNjQsMy42MzZabS0xMS4zMTQsMCwuNzA3LjcwN0ExLDEsMCwxLDEsOC4zNDMsNS43NTdMNy42MzYsNS4wNUExLDEsMCwxLDEsOS4wNSwzLjYzNlpNMTAuNCwxNS40NDdsLTEsMmExLDEsMCwwLDEtMS43OS0uODk0bDEtMmExLDEsMCwxLDEsMS43OS44OTRabTQsMC0xLDJhMSwxLDAsMCwxLTEuNzktLjg5NGwxLTJhMSwxLDAsMSwxLDEuNzkuODk0Wm0tNCw1LTEsMmExLDEsMCwwLDEtMS43OS0uODk0bDEtMmExLDEsMCwxLDEsMS43OS44OTRabTQsMC0xLDJhMSwxLDAsMCwxLTEuNzktLjg5NGwxLTJhMSwxLDAsMSwxLDEuNzkuODk0WlwiPjwvcGF0aD48L2c+PC9zdmc+YDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gYDxzdmcgZmlsbD1cIiMwMDAwMDBcIiB2aWV3Qm94PVwiLTIuNCAtMi40IDI4LjgwIDI4LjgwXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxnIGlkPVwiU1ZHUmVwb19iZ0NhcnJpZXJcIiBzdHJva2Utd2lkdGg9XCIwXCI+PC9nPjxnIGlkPVwiU1ZHUmVwb190cmFjZXJDYXJyaWVyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCI+PC9nPjxnIGlkPVwiU1ZHUmVwb19pY29uQ2FycmllclwiPjxwYXRoIGQ9XCJNMSwxMy45YTQuNiw0LjYsMCwwLDAsNC42LDQuNiwxLDEsMCwxLDAsMC0yLDIuNiwyLjYsMCwxLDEsLjg2Ni01LjAzNywxLDEsMCwwLDAsMS4yNy0uNTlBMy41MTIsMy41MTIsMCwwLDEsMTEsOC42YTMuNTYyLDMuNTYyLDAsMCwxLDMuMjY0LDIuMjczLDEsMSwwLDAsMCwxLjI3LjU5LDIuNTM3LDIuNTM3LDAsMCwxLDIuODU2Ljc4OWwuMDExLjAwOUEyLjU3MiwyLjU3MiwwLDAsMSwxOSwxMy45YTIuNiwyLjYsMCwwLDEtMi42LDIuNiwxLDEsMCwxLDAsMCwyQTQuNiw0LjYsMCwwLDAsMjEsMTMuOWE0LjU1Miw0LjU1MiwwLDAsMC0uNDI0LTEuOTE3QTUuOTkxLDUuOTkxLDAsMCwwLDIyLjk0NSw4Ljk1YTEsMSwwLDAsMC0xLjA1Ny0xLjMyMSwzLjgzOSwzLjgzOSwwLDAsMS0uNDQ1LjAyNyw0LjAwNSw0LjAwNSwwLDAsMS0zLjc5MS01LjMyOUExLDEsMCwwLDAsMTYuNiwxLjAwNmE1Ljk5MSw1Ljk5MSwwLDAsMC01LjMxNiw1LjYxM2MtLjA5NCwwLS4xODYtLjAxOS0uMjgxLS4wMTlBNS41Miw1LjUyLDAsMCwwLDYuMjUyLDkuMzUxLDQuNiw0LjYsMCwwLDAsMSwxMy45Wk0xNS40MzIsMy40MDhjMCwuMDc3LS4wMDUuMTU1LS4wMDUuMjMyYTYuMDI4LDYuMDI4LDAsMCwwLDQuOTEsNS45MTUsNC4wNTQsNC4wNTQsMCwwLDEtLjk3NS44MzUsNC41Myw0LjUzLDAsMCwwLTMuNjEtMS4wNGgwYTUuODQ3LDUuODQ3LDAsMCwwLTIuNS0yLjI2NEE0LDQsMCwwLDEsMTUuNDMyLDMuNDA4Wk0xMC40LDE1LjQ0N2wtMSwyYTEsMSwwLDAsMS0xLjc5LS44OTRsMS0yYTEsMSwwLDEsMSwxLjc5Ljg5NFptNCwwLTEsMmExLDEsMCwwLDEtMS43OS0uODk0bDEtMmExLDEsMCwxLDEsMS43OS44OTRabS00LDUtMSwyYTEsMSwwLDAsMS0xLjc5LS44OTRsMS0yYTEsMSwwLDEsMSwxLjc5Ljg5NFptNCwwLTEsMmExLDEsMCwwLDEtMS43OS0uODk0bDEtMmExLDEsMCwxLDEsMS43OS44OTRaXCI+PC9wYXRoPjwvZz48L3N2Zz5gO1xyXG4gICAgICB9XHJcblxyXG4gICAgY2FzZSAxMDY2OlxyXG4gICAgICAvLyBQYXRjaHkgc25vdyBwb3NzaWJsZVxyXG4gICAgICByZXR1cm4gYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dGl0bGU+d2VhdGhlci1zbm93eTwvdGl0bGU+PHBhdGggZD1cIk02LDE0QTEsMSAwIDAsMSA3LDE1QTEsMSAwIDAsMSA2LDE2QTUsNSAwIDAsMSAxLDExQTUsNSAwIDAsMSA2LDZDNywzLjY1IDkuMywyIDEyLDJDMTUuNDMsMiAxOC4yNCw0LjY2IDE4LjUsOC4wM0wxOSw4QTQsNCAwIDAsMSAyMywxMkE0LDQgMCAwLDEgMTksMTZIMThBMSwxIDAgMCwxIDE3LDE1QTEsMSAwIDAsMSAxOCwxNEgxOUEyLDIgMCAwLDAgMjEsMTJBMiwyIDAgMCwwIDE5LDEwSDE3VjlBNSw1IDAgMCwwIDEyLDRDOS41LDQgNy40NSw1LjgyIDcuMDYsOC4xOUM2LjczLDguMDcgNi4zNyw4IDYsOEEzLDMgMCAwLDAgMywxMUEzLDMgMCAwLDAgNiwxNE03Ljg4LDE4LjA3TDEwLjA3LDE3LjVMOC40NiwxNS44OEM4LjA3LDE1LjUgOC4wNywxNC44NiA4LjQ2LDE0LjQ2QzguODUsMTQuMDcgOS41LDE0LjA3IDkuODgsMTQuNDZMMTEuNSwxNi4wN0wxMi4wNywxMy44OEMxMi4yMSwxMy4zNCAxMi43NiwxMy4wMyAxMy4yOSwxMy4xN0MxMy44MywxMy4zMSAxNC4xNCwxMy44NiAxNCwxNC40TDEzLjQxLDE2LjU5TDE1LjYsMTZDMTYuMTQsMTUuODYgMTYuNjksMTYuMTcgMTYuODMsMTYuNzFDMTYuOTcsMTcuMjQgMTYuNjYsMTcuNzkgMTYuMTIsMTcuOTNMMTMuOTMsMTguNUwxNS41NCwyMC4xMkMxNS45MywyMC41IDE1LjkzLDIxLjE1IDE1LjU0LDIxLjU0QzE1LjE1LDIxLjkzIDE0LjUsMjEuOTMgMTQuMTIsMjEuNTRMMTIuNSwxOS45M0wxMS45MywyMi4xMkMxMS43OSwyMi42NiAxMS4yNCwyMi45NyAxMC43MSwyMi44M0MxMC4xNywyMi42OSA5Ljg2LDIyLjE0IDEwLDIxLjZMMTAuNTksMTkuNDFMOC40LDIwQzcuODYsMjAuMTQgNy4zMSwxOS44MyA3LjE3LDE5LjI5QzcuMDMsMTguNzYgNy4zNCwxOC4yMSA3Ljg4LDE4LjA3WlwiIC8+PC9zdmc+YDtcclxuXHJcbiAgICBjYXNlIDEwNjk6XHJcbiAgICBjYXNlIDEwNzI6XHJcbiAgICAvLyBQYXRjaHkgc2xlZXQgcG9zc2libGUgfHwgUGF0Y2h5IGZyZWV6aW5nIGRyaXp6bGUgcG9zc2libGVcclxuICAgIGNhc2UgMTI0OTpcclxuICAgIC8vIExpZ2h0IHNsZWV0IHNob3dlcnNcclxuICAgIGNhc2UgMTI1MjpcclxuICAgIC8vIE1vZGVyYXRlIG9yIGhlYXZ5IHNsZWV0IHNob3dlcnNcclxuICAgIGNhc2UgMTI1NTpcclxuICAgIC8vIExpZ2h0IHNub3cgc2hvd2Vyc1xyXG4gICAgY2FzZSAxMjU4OlxyXG4gICAgLy8gTW9kZXJhdGUgb3IgaGVhdnkgc25vdyBzaG93ZXJzXHJcbiAgICBjYXNlIDEyNjE6XHJcbiAgICAvLyBMaWdodCBzaG93ZXJzIG9mIGljZSBwZWxsZXRzXHJcbiAgICBjYXNlIDEyNjQ6XHJcbiAgICAgIC8vIE1vZGVyYXRlIG9yIGhlYXZ5IHNob3dlcnMgb2YgaWNlIHBlbGxldHNcclxuICAgICAgcmV0dXJuIGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHRpdGxlPndlYXRoZXItc25vd3ktcmFpbnk8L3RpdGxlPjxwYXRoIGQ9XCJNMTguNSwxOC42N0MxOC41LDE5Ljk2IDE3LjUsMjEgMTYuMjUsMjFDMTUsMjEgMTQsMTkuOTYgMTQsMTguNjdDMTQsMTcuMTIgMTYuMjUsMTQuNSAxNi4yNSwxNC41QzE2LjI1LDE0LjUgMTguNSwxNy4xMiAxOC41LDE4LjY3TTQsMTcuMzZDMy44NiwxNi44MiA0LjE4LDE2LjI1IDQuNzMsMTYuMTFMNywxNS41TDUuMzMsMTMuODZDNC45MywxMy40NiA0LjkzLDEyLjgxIDUuMzMsMTIuNEM1LjczLDEyIDYuNCwxMiA2Ljc5LDEyLjRMOC40NSwxNC4wNUw5LjA0LDExLjhDOS4xOCwxMS4yNCA5Ljc1LDEwLjkyIDEwLjI5LDExLjA3QzEwLjg1LDExLjIxIDExLjE3LDExLjc4IDExLDEyLjMzTDEwLjQyLDE0LjU4TDEyLjY3LDE0QzEzLjIyLDEzLjgzIDEzLjc5LDE0LjE1IDEzLjkzLDE0LjcxQzE0LjA4LDE1LjI1IDEzLjc2LDE1LjgyIDEzLjIsMTUuOTZMMTAuOTUsMTYuNTVMMTIuNiwxOC4yMUMxMywxOC42IDEzLDE5LjI3IDEyLjYsMTkuNjdDMTIuMiwyMC4wNyAxMS41NCwyMC4wNyAxMS4xNSwxOS42N0w5LjUsMThMOC44OSwyMC4yN0M4Ljc1LDIwLjgzIDguMTgsMjEuMTQgNy42NCwyMUM3LjA4LDIwLjg2IDYuNzcsMjAuMjkgNi45MSwxOS43NEw3LjUsMTcuNUw1LjI2LDE4LjA5QzQuNzEsMTguMjMgNC4xNCwxNy45MiA0LDE3LjM2TTEsMTFBNSw1IDAgMCwxIDYsNkM3LDMuNjUgOS4zLDIgMTIsMkMxNS40MywyIDE4LjI0LDQuNjYgMTguNSw4LjAzTDE5LDhBNCw0IDAgMCwxIDIzLDEyQTQsNCAwIDAsMSAxOSwxNkExLDEgMCAwLDEgMTgsMTVBMSwxIDAgMCwxIDE5LDE0QTIsMiAwIDAsMCAyMSwxMkEyLDIgMCAwLDAgMTksMTBIMTdWOUE1LDUgMCAwLDAgMTIsNEM5LjUsNCA3LjQ1LDUuODIgNy4wNiw4LjE5QzYuNzMsOC4wNyA2LjM3LDggNiw4QTMsMyAwIDAsMCAzLDExQzMsMTEuODUgMy4zNSwxMi42MSAzLjkxLDEzLjE2QzQuMjcsMTMuNTUgNC4yNiwxNC4xNiAzLjg4LDE0LjU0QzMuNSwxNC45MyAyLjg1LDE0LjkzIDIuNDcsMTQuNTRDMS41NiwxMy42MyAxLDEyLjM4IDEsMTFaXCIgLz48L3N2Zz5gO1xyXG5cclxuICAgIGNhc2UgMTA4NzpcclxuICAgICAgLy8gVGh1bmRlcnkgb3V0YnJlYWtzIHBvc3NpYmxlXHJcbiAgICAgIHJldHVybiBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjx0aXRsZT53ZWF0aGVyLWxpZ2h0bmluZzwvdGl0bGU+PHBhdGggZD1cIk02LDE2QTUsNSAwIDAsMSAxLDExQTUsNSAwIDAsMSA2LDZDNywzLjY1IDkuMywyIDEyLDJDMTUuNDMsMiAxOC4yNCw0LjY2IDE4LjUsOC4wM0wxOSw4QTQsNCAwIDAsMSAyMywxMkE0LDQgMCAwLDEgMTksMTZIMThBMSwxIDAgMCwxIDE3LDE1QTEsMSAwIDAsMSAxOCwxNEgxOUEyLDIgMCAwLDAgMjEsMTJBMiwyIDAgMCwwIDE5LDEwSDE3VjlBNSw1IDAgMCwwIDEyLDRDOS41LDQgNy40NSw1LjgyIDcuMDYsOC4xOUM2LjczLDguMDcgNi4zNyw4IDYsOEEzLDMgMCAwLDAgMywxMUEzLDMgMCAwLDAgNiwxNEg3QTEsMSAwIDAsMSA4LDE1QTEsMSAwIDAsMSA3LDE2SDZNMTIsMTFIMTVMMTMsMTVIMTVMMTEuMjUsMjJMMTIsMTdIOS41TDEyLDExWlwiIC8+PC9zdmc+YDtcclxuXHJcbiAgICBjYXNlIDExMTQ6XHJcbiAgICAgIC8vIEJsb3dpbmcgU25vd1xyXG4gICAgICByZXR1cm4gYFxyXG4gICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjI2LjcwNSAyMjYuNzA1XCI+PGcgaWQ9XCJTVkdSZXBvX2JnQ2FycmllclwiIHN0cm9rZS13aWR0aD1cIjBcIj48L2c+PGcgaWQ9XCJTVkdSZXBvX3RyYWNlckNhcnJpZXJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIj48L2c+PGcgaWQ9XCJTVkdSZXBvX2ljb25DYXJyaWVyXCI+IDxnPiA8cGF0aCBkPVwiTTE3NC4xNzcsMTA2LjY2OWMtMjMuOTk4LDAtNDMuNTIyLDE5LjUyMy00My41MjIsNDMuNTIyYzAsMjAuMDI2LDE2LjI5MSwzNi4zMTgsMzYuMzE2LDM2LjMxOGM0LjE0MywwLDcuNS0zLjM1OCw3LjUtNy41IGMwLTQuMTQyLTMuMzU3LTcuNS03LjUtNy41Yy0xMS43NTQsMC0yMS4zMTYtOS41NjMtMjEuMzE2LTIxLjMxOGMwLTE1LjcyNywxMi43OTUtMjguNTIyLDI4LjUyMi0yOC41MjIgYzIwLjY5MywwLDM3LjUyOCwxNi44MzQsMzcuNTI4LDM3LjUyNWMwLDI2LjkwMS0yMS44ODYsNDguNzg3LTQ4Ljc4Niw0OC43ODdINy41Yy00LjE0MiwwLTcuNSwzLjM1OC03LjUsNy41IGMwLDQuMTQyLDMuMzU4LDcuNSw3LjUsNy41aDE1NS40MTljMzUuMTcyLDAsNjMuNzg2LTI4LjYxNSw2My43ODYtNjMuNzg3QzIyNi43MDUsMTMwLjIzMiwyMDMuMTQxLDEwNi42NjksMTc0LjE3NywxMDYuNjY5elwiPjwvcGF0aD4gPHBhdGggZD1cIk03LjUsMTU4LjY1N2g2OS44ODljMjMuNTM0LDAsNDIuNjgtMTkuMTQ2LDQyLjY4LTQyLjY4YzAtMTkuNjUyLTE1Ljk4OS0zNS42NDEtMzUuNjQzLTM1LjY0MSBjLTE2LjU1LDAtMzAuMDE0LDEzLjQ2NC0zMC4wMTQsMzAuMDE0YzAsMTQuMDY2LDExLjQ0NCwyNS41MSwyNS41MSwyNS41MWM0LjE0MiwwLDcuNS0zLjM1OCw3LjUtNy41YzAtNC4xNDItMy4zNTgtNy41LTcuNS03LjUgYy01Ljc5NSwwLTEwLjUxLTQuNzE1LTEwLjUxLTEwLjUxYzAtOC4yNzksNi43MzUtMTUuMDE0LDE1LjAxNC0xNS4wMTRjMTEuMzgyLDAsMjAuNjQzLDkuMjU5LDIwLjY0MywyMC42NDEgYzAsMTUuMjYzLTEyLjQxNywyNy42OC0yNy42OCwyNy42OEg3LjVjLTQuMTQyLDAtNy41LDMuMzU4LTcuNSw3LjVTMy4zNTgsMTU4LjY1Nyw3LjUsMTU4LjY1N3pcIj48L3BhdGg+IDxwYXRoIGQ9XCJNMi4zMDQsNTMuOTE5YzEuMTEyLDEuOTI1LDMuMTI4LDMuMDAxLDUuMjAyLDMuMDAxYzEuMDE4LDAsMi4wNS0wLjI1OSwyLjk5NS0wLjgwNWwxMy4xNjgtNy42MDN2MTUuMjA2IGMwLDMuMzEzLDIuNjg3LDYsNiw2YzMuMzEzLDAsNi0yLjY4Nyw2LTZWNDguNTEybDEzLjE2OSw3LjYwNGMwLjk0NSwwLjU0NSwxLjk3NywwLjgwNSwyLjk5NSwwLjgwNSBjMi4wNzMsMCw0LjA5LTEuMDc2LDUuMjAyLTMuMDAxYzEuNjU3LTIuODcsMC42NzMtNi41MzktMi4xOTYtOC4xOTZsLTEzLjE2OS03LjYwNGwxMy4xNjktNy42MDQgYzIuODctMS42NTcsMy44NTMtNS4zMjcsMi4xOTYtOC4xOTZjLTEuNjU4LTIuODctNS4zMjYtMy44NTMtOC4xOTYtMi4xOTZsLTEzLjE2OSw3LjYwM1YxMi41MjJjMC0zLjMxNC0yLjY4Ny02LTYtNiBjLTMuMzEzLDAtNiwyLjY4Ni02LDZ2MTUuMjA0TDEwLjUsMjAuMTIzYy0yLjg3LTEuNjU3LTYuNTM5LTAuNjczLTguMTk2LDIuMTk2Yy0xLjY1NywyLjg3LTAuNjczLDYuNTM5LDIuMTk2LDguMTk2bDEzLjE2OSw3LjYwNCBMNC41LDQ1LjcyM0MxLjYzLDQ3LjM4LDAuNjQ3LDUxLjA0OSwyLjMwNCw1My45MTl6XCI+PC9wYXRoPiA8cGF0aCBkPVwiTTExNy4yODcsNzAuMzE3YzEuMTExLDEuOTI1LDMuMTI4LDMuMDAxLDUuMjAyLDMuMDAxYzEuMDE4LDAsMi4wNDktMC4yNTksMi45OTQtMC44MDVsMjQuMjUyLTE0LjAwMXYyOC4wMDQgYzAsMy4zMTMsMi42ODcsNiw2LDZjMy4zMTQsMCw2LTIuNjg3LDYtNlY1OC41MTFsMjQuMjU0LDE0LjAwM2MwLjk0NSwwLjU0NSwxLjk3NywwLjgwNSwyLjk5NCwwLjgwNSBjMi4wNzQsMCw0LjA5MS0xLjA3Niw1LjIwMi0zLjAwMWMxLjY1Ni0yLjg3LDAuNjc0LTYuNTQtMi4xOTYtOC4xOTZsLTI0LjI1My0xNC4wMDJsMjQuMjUzLTE0LjAwMiBjMi44Ny0xLjY1NywzLjg1My01LjMyNywyLjE5Ni04LjE5NmMtMS42NTYtMi44NjktNS4zMjMtMy44NTMtOC4xOTYtMi4xOTZsLTI0LjI1NCwxNC4wMDNWOS43MjRjMC0zLjMxNC0yLjY4Ni02LTYtNiBjLTMuMzE0LDAtNiwyLjY4Ni02LDZ2MjguMDAybC0yNC4yNTItMTQuMDAxYy0yLjg3MS0xLjY1Ny02LjU0LTAuNjcyLTguMTk2LDIuMTk2Yy0xLjY1NiwyLjg3LTAuNjc0LDYuNTM5LDIuMTk2LDguMTk2IGwyNC4yNTMsMTQuMDAybC0yNC4yNTMsMTQuMDAyQzExNi42MTMsNjMuNzc4LDExNS42MzEsNjcuNDQ4LDExNy4yODcsNzAuMzE3elwiPjwvcGF0aD4gPC9nPiA8L2c+PC9zdmc+XHJcbiAgICAgIGA7XHJcbiAgICBjYXNlIDExMTc6XHJcbiAgICAgIC8vIEJsaXp6YXJkXHJcbiAgICAgIHJldHVybiBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjx0aXRsZT5zbm93Zmxha2UtdmFyaWFudDwvdGl0bGU+PHBhdGggZD1cIk0xNC4yNSwxMkwxNi4yNywxMUgyM0wyMiw5SDE4LjAzTDIwLjQyLDUuODNMMTkuNDMsMy44M0wxNS4zNyw5LjJMMTMuMzUsMTAuMjFMMTMuNzUsOEwxNy44MywyLjYyTDE1LjY0LDIuMjJMMTIsN0w4LjQsMi4yTDYuMiwyLjZMMTAuMjYsOEwxMC42NiwxMC4yMUw4LjgyLDkuMjlMOC42Niw5LjIxTDQuNiwzLjhMMy42LDUuOEw2LDlIMkwxLDExSDcuNzdMOS43NSwxMkw3LjczLDEzSDFMMiwxNUg1Ljk3TDMuNTgsMTguMTdMNC41NywyMC4xN0w4LjYzLDE0LjhMMTAuNjUsMTMuNzlMMTAuMjUsMTZMNi4xNywyMS4zOEw4LjM2LDIxLjc5TDEyLDE3TDE1LjYsMjEuOEwxNy44LDIxLjRMMTMuNzQsMTZMMTMuMzQsMTMuNzlMMTUuMzQsMTQuNzlMMTkuNCwyMC4yTDIwLjQsMTguMkwxOCwxNUgyMkwyMywxM0gxNi4yM1wiIC8+PC9zdmc+YDtcclxuXHJcbiAgICBjYXNlIDExNjg6XHJcbiAgICAvLyBGcmVlemluZyBEcml6emxlXHJcbiAgICBjYXNlIDExNzE6XHJcbiAgICAgIC8vIEhlYXZ5IEZyZWV6aW5nIERyaXp6bGVcclxuICAgICAgcmV0dXJuIGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHRpdGxlPndlYXRoZXItc25vd3ktcmFpbnk8L3RpdGxlPjxwYXRoIGQ9XCJNMTguNSwxOC42N0MxOC41LDE5Ljk2IDE3LjUsMjEgMTYuMjUsMjFDMTUsMjEgMTQsMTkuOTYgMTQsMTguNjdDMTQsMTcuMTIgMTYuMjUsMTQuNSAxNi4yNSwxNC41QzE2LjI1LDE0LjUgMTguNSwxNy4xMiAxOC41LDE4LjY3TTQsMTcuMzZDMy44NiwxNi44MiA0LjE4LDE2LjI1IDQuNzMsMTYuMTFMNywxNS41TDUuMzMsMTMuODZDNC45MywxMy40NiA0LjkzLDEyLjgxIDUuMzMsMTIuNEM1LjczLDEyIDYuNCwxMiA2Ljc5LDEyLjRMOC40NSwxNC4wNUw5LjA0LDExLjhDOS4xOCwxMS4yNCA5Ljc1LDEwLjkyIDEwLjI5LDExLjA3QzEwLjg1LDExLjIxIDExLjE3LDExLjc4IDExLDEyLjMzTDEwLjQyLDE0LjU4TDEyLjY3LDE0QzEzLjIyLDEzLjgzIDEzLjc5LDE0LjE1IDEzLjkzLDE0LjcxQzE0LjA4LDE1LjI1IDEzLjc2LDE1LjgyIDEzLjIsMTUuOTZMMTAuOTUsMTYuNTVMMTIuNiwxOC4yMUMxMywxOC42IDEzLDE5LjI3IDEyLjYsMTkuNjdDMTIuMiwyMC4wNyAxMS41NCwyMC4wNyAxMS4xNSwxOS42N0w5LjUsMThMOC44OSwyMC4yN0M4Ljc1LDIwLjgzIDguMTgsMjEuMTQgNy42NCwyMUM3LjA4LDIwLjg2IDYuNzcsMjAuMjkgNi45MSwxOS43NEw3LjUsMTcuNUw1LjI2LDE4LjA5QzQuNzEsMTguMjMgNC4xNCwxNy45MiA0LDE3LjM2TTEsMTFBNSw1IDAgMCwxIDYsNkM3LDMuNjUgOS4zLDIgMTIsMkMxNS40MywyIDE4LjI0LDQuNjYgMTguNSw4LjAzTDE5LDhBNCw0IDAgMCwxIDIzLDEyQTQsNCAwIDAsMSAxOSwxNkExLDEgMCAwLDEgMTgsMTVBMSwxIDAgMCwxIDE5LDE0QTIsMiAwIDAsMCAyMSwxMkEyLDIgMCAwLDAgMTksMTBIMTdWOUE1LDUgMCAwLDAgMTIsNEM5LjUsNCA3LjQ1LDUuODIgNy4wNiw4LjE5QzYuNzMsOC4wNyA2LjM3LDggNiw4QTMsMyAwIDAsMCAzLDExQzMsMTEuODUgMy4zNSwxMi42MSAzLjkxLDEzLjE2QzQuMjcsMTMuNTUgNC4yNiwxNC4xNiAzLjg4LDE0LjU0QzMuNSwxNC45MyAyLjg1LDE0LjkzIDIuNDcsMTQuNTRDMS41NiwxMy42MyAxLDEyLjM4IDEsMTFaXCIgLz48L3N2Zz5gO1xyXG5cclxuICAgIGNhc2UgMTE4MDpcclxuICAgIC8vIFBhdGNoeSBMaWdodCBSYWluXHJcbiAgICBjYXNlIDExODM6XHJcbiAgICAvLyBMaWdodCBSYWluXHJcbiAgICBjYXNlIDExODY6XHJcbiAgICAvLyBNb2RlcmF0ZSByYWluIGF0IHRpbWVzXHJcbiAgICBjYXNlIDExODk6XHJcbiAgICAgIC8vIE1vZGVyYXRlIFJhaW5cclxuICAgICAgcmV0dXJuIGA8c3ZnIHZpZXdCb3g9XCItMC41IDAgMjUgMjVcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48ZyBpZD1cIlNWR1JlcG9fYmdDYXJyaWVyXCIgc3Ryb2tlLXdpZHRoPVwiMFwiPjwvZz48ZyBpZD1cIlNWR1JlcG9fdHJhY2VyQ2FycmllclwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiPjwvZz48ZyBpZD1cIlNWR1JlcG9faWNvbkNhcnJpZXJcIj4gPHBhdGggZD1cIk0xNy45MyAxNS43NDVINi44N0M0LjQ1IDE1Ljc0NSAyLjUgMTMuNzI1IDIuNSAxMS4yMTVDMi41IDguNzI1MDMgNC40NSA2LjY4NTAzIDYuODcgNi42ODUwM0M3LjQgNi42ODUwMyA3Ljg5OTk5IDYuNzc1MDMgOC4zNTk5OSA2Ljk1NTAzQzguNjA5OTkgNy4wNDUwMyA4Ljg3MDAxIDYuOTU1MDMgOS4wMTAwMSA2LjczNTAzQzkuNzQwMDEgNS40OTUwMyAxMS4wNyA0LjY1NTAzIDEyLjU5IDQuNjU1MDNDMTQuNjEgNC42NTUwMyAxNi4yOCA2LjExNTAzIDE2LjY5IDguMDY1MDNDMTYuNzUgOC4zMzUwMyAxNi45NyA4LjQ3NTA0IDE3LjI0IDguNDE1MDRDMTcuNDYgOC4zNjUwNCAxNy42OSA4LjM0NTAzIDE3LjkzIDguMzQ1MDNDMTkuOTEgOC4zNDUwMyAyMS41IDEwLjAwNSAyMS41IDEyLjA1NUMyMS41MSAxNC4wOTUgMTkuOTEgMTUuNzQ1IDE3LjkzIDE1Ljc0NVpcIiBzdHJva2U9XCIjMEYwRjBGXCIgc3Ryb2tlLW1pdGVybGltaXQ9XCIxMFwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiPjwvcGF0aD4gPHBhdGggZD1cIk0xMC41MSAyMC4zNDVMMTIuMDEgMTcuNzQ1XCIgc3Ryb2tlPVwiIzBGMEYwRlwiIHN0cm9rZS1taXRlcmxpbWl0PVwiMTBcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIj48L3BhdGg+IDxwYXRoIGQ9XCJNMTQuNTEgMjAuMzQ1TDE2LjAxIDE3Ljc0NVwiIHN0cm9rZT1cIiMwRjBGMEZcIiBzdHJva2UtbWl0ZXJsaW1pdD1cIjEwXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCI+PC9wYXRoPiA8cGF0aCBkPVwiTTYuNTEwMDEgMjAuMzQ1TDguMDEwMDEgMTcuNzQ1XCIgc3Ryb2tlPVwiIzBGMEYwRlwiIHN0cm9rZS1taXRlcmxpbWl0PVwiMTBcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIj48L3BhdGg+IDwvZz48L3N2Zz5gO1xyXG5cclxuICAgIGNhc2UgMTE5MjpcclxuICAgIC8vIEhlYXZ5IFJhaW4gYXQgVGltZXNcclxuICAgIGNhc2UgMTE5NTpcclxuICAgICAgLy8gSGVhdnlcclxuICAgICAgcmV0dXJuIGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHRpdGxlPndlYXRoZXItcG91cmluZzwvdGl0bGU+PHBhdGggZD1cIk05LDEyQzkuNTMsMTIuMTQgOS44NSwxMi42OSA5LjcxLDEzLjIyTDguNDEsMTguMDVDOC4yNywxOC41OSA3LjcyLDE4LjkgNy4xOSwxOC43NkM2LjY1LDE4LjYyIDYuMzQsMTguMDcgNi41LDE3LjU0TDcuNzgsMTIuNzFDNy45MiwxMi4xNyA4LjQ3LDExLjg2IDksMTJNMTMsMTJDMTMuNTMsMTIuMTQgMTMuODUsMTIuNjkgMTMuNzEsMTMuMjJMMTEuNjQsMjAuOTVDMTEuNSwyMS41IDEwLjk1LDIxLjggMTAuNDEsMjEuNjZDOS44OCwyMS41IDkuNTYsMjAuOTcgOS43LDIwLjQzTDExLjc4LDEyLjcxQzExLjkyLDEyLjE3IDEyLjQ3LDExLjg2IDEzLDEyTTE3LDEyQzE3LjUzLDEyLjE0IDE3Ljg1LDEyLjY5IDE3LjcxLDEzLjIyTDE2LjQxLDE4LjA1QzE2LjI3LDE4LjU5IDE1LjcyLDE4LjkgMTUuMTksMTguNzZDMTQuNjUsMTguNjIgMTQuMzQsMTguMDcgMTQuNSwxNy41NEwxNS43OCwxMi43MUMxNS45MiwxMi4xNyAxNi40NywxMS44NiAxNywxMk0xNywxMFY5QTUsNSAwIDAsMCAxMiw0QzkuNSw0IDcuNDUsNS44MiA3LjA2LDguMTlDNi43Myw4LjA3IDYuMzcsOCA2LDhBMywzIDAgMCwwIDMsMTFDMywxMi4xMSAzLjYsMTMuMDggNC41LDEzLjZWMTMuNTlDNSwxMy44NyA1LjE0LDE0LjUgNC44NywxNC45NkM0LjU5LDE1LjQzIDQsMTUuNiAzLjUsMTUuMzJWMTUuMzNDMiwxNC40NyAxLDEyLjg1IDEsMTFBNSw1IDAgMCwxIDYsNkM3LDMuNjUgOS4zLDIgMTIsMkMxNS40MywyIDE4LjI0LDQuNjYgMTguNSw4LjAzTDE5LDhBNCw0IDAgMCwxIDIzLDEyQzIzLDEzLjUgMjIuMiwxNC43NyAyMSwxNS40NlYxNS40NkMyMC41LDE1LjczIDE5LjkxLDE1LjU3IDE5LjYzLDE1LjA5QzE5LjM2LDE0LjYxIDE5LjUsMTQgMjAsMTMuNzJWMTMuNzNDMjAuNiwxMy4zOSAyMSwxMi43NCAyMSwxMkEyLDIgMCAwLDAgMTksMTBIMTdaXCIgLz48L3N2Zz5gO1xyXG5cclxuICAgIGNhc2UgMTE5ODpcclxuICAgIC8vIExpZ2h0IGZyZWV6aW5nIFJhaW5cclxuICAgIGNhc2UgMTIwMTpcclxuICAgIC8vIE1vZGVyYXRlIG9yIGhlYXZ5IGZyZWV6aW5nIHJhaW5cclxuICAgIGNhc2UgMTIwNDpcclxuICAgIC8vIExpZ2h0IHNsZWV0XHJcbiAgICBjYXNlIDEyMDc6XHJcbiAgICAgIC8vIE1vZGVyYXRlIG9yIGhlYXZ5IHNsZWV0XHJcbiAgICAgIHJldHVybiBgPHN2ZyB2aWV3Qm94PVwiMCAwIDMyIDMyXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxnIGlkPVwiU1ZHUmVwb19iZ0NhcnJpZXJcIiBzdHJva2Utd2lkdGg9XCIwXCI+PC9nPjxnIGlkPVwiU1ZHUmVwb190cmFjZXJDYXJyaWVyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCI+PC9nPjxnIGlkPVwiU1ZHUmVwb19pY29uQ2FycmllclwiPiA8dGl0bGU+Y2xvdWQtc25vdy1yYWluPC90aXRsZT4gPHBhdGggZD1cIk0yOS4xMzUgMTAuMDc1Yy0wLjg2NS0xLjE2NS0yLjE1OS0xLjk2OC0zLjY0NS0yLjE3NGwtMC4wMjktMC4wMDNjMC4xNDUtMC4zNDIgMC4yMjktMC43NCAwLjIyOS0xLjE1NyAwLTAuMDQ1LTAuMDAxLTAuMDkwLTAuMDAzLTAuMTM1bDAgMC4wMDZjLTAuMDYwLTAuODk0LTAuNDUxLTEuNjg3LTEuMDUwLTIuMjY3bC0wLjAwMS0wLjAwMWMtMC44MTMtMC44MTctMS45MzktMS4zMjMtMy4xODMtMS4zMjMtMC44ODkgMC0xLjcxOCAwLjI1OC0yLjQxNSAwLjcwNGwwLjAxOC0wLjAxMWMtMi41Mi0zLjE1OS03LjI1Ni0zLjA1My0xMC42NTctMC45ODktMi4wNTYgMC45OTgtMy40NDkgMy4wNzEtMy40NDkgNS40NjkgMCAwLjY0MyAwLjEgMS4yNjMgMC4yODYgMS44NDVsLTAuMDEyLTAuMDQzYy0yLjMzMiAwLjc2NS0zLjk4NiAyLjkyMy0zLjk4NiA1LjQ2NiAwIDAuMTI1IDAuMDA0IDAuMjQ4IDAuMDEyIDAuMzcxbC0wLjAwMS0wLjAxN2MtMC4wMDEgMC4wMzktMC4wMDIgMC4wODYtMC4wMDIgMC4xMzIgMCAxLjI2MSAwLjQwMyAyLjQyOCAxLjA4OCAzLjM3OGwtMC4wMTItMC4wMTdjMC43NjQgMS4wMDQgMS45NTkgMS42NDYgMy4zMDUgMS42NDYgMC4wNDMgMCAwLjA4Ni0wLjAwMSAwLjEyOS0wLjAwMmwtMC4wMDYgMCAyMC4yOC0wLjAwOGMxLjkzMi0wLjIyNyAzLjUyLTEuNDk2IDQuMjAxLTMuMjIzbDAuMDEyLTAuMDM1YzAuMzE2LTAuODI4IDAuNDk5LTEuNzg2IDAuNDk5LTIuNzg3IDAtMS44Mi0wLjYwNS0zLjQ5OS0xLjYyNC00Ljg0NmwwLjAxNSAwLjAyMHpNMjguODU3IDE3LjEyYy0wLjQ3MSAxLjI0NS0xLjU3NCAyLjE1MS0yLjkwNyAyLjMzMWwtMC4wMTkgMC4wMDJoLTIwLjE3OWMtMC4wMzQgMC4wMDItMC4wNzQgMC4wMDItMC4xMTUgMC4wMDItMC44NjMgMC0xLjYyOS0wLjQxMS0yLjExNC0xLjA0OWwtMC4wMDUtMC4wMDdjLTAuNDgzLTAuNjg0LTAuNzcyLTEuNTM1LTAuNzcyLTIuNDUzIDAtMC4wNDYgMC4wMDEtMC4wOTMgMC4wMDItMC4xMzlsLTAgMC4wMDdjLTAuMDE1LTAuMTMtMC4wMjMtMC4yOC0wLjAyMy0wLjQzMiAwLTIuMDg5IDEuNTg3LTMuODA3IDMuNjItNC4wMTZsMC4wMTctMC4wMDFjMC40MTQtMCAwLjc1LTAuMzM2IDAuNzUtMC43NSAwLTAuMTQ0LTAuMDQwLTAuMjc4LTAuMTEtMC4zOTJsMC4wMDIgMC4wMDNjLTEuNjA0LTIuNjQzIDAuMDcwLTQuOTQ2IDIuMTcyLTYuMjIxIDEuMjQ4LTAuNzc1IDIuNzU3LTEuMjQyIDQuMzc0LTEuMjY1bDAuMDA2LTBjMC4wNzUtMC4wMDQgMC4xNjMtMC4wMDYgMC4yNTEtMC4wMDYgMS44NjYgMCAzLjUwNSAwLjk3MSA0LjQ0IDIuNDM1bDAuMDEzIDAuMDIxYzAuMTM0IDAuMjE4IDAuMzcxIDAuMzYxIDAuNjQxIDAuMzYxIDAuMjA2IDAgMC4zOTItMC4wODMgMC41MjctMC4yMTdsLTAgMGMwLjUyNS0wLjUxNSAxLjI0Ni0wLjgzMyAyLjA0MC0wLjgzMyAwLjgyNSAwIDEuNTcxIDAuMzQzIDIuMTAxIDAuODk0bDAuMDAxIDAuMDAxYzAuMzc5IDAuMzI1IDAuNjE4IDAuODA0IDAuNjE4IDEuMzQgMCAwLjU1OC0wLjI2IDEuMDU2LTAuNjY1IDEuMzc4bC0wLjAwNCAwLjAwM2MtMC4xMzcgMC4xMzYtMC4yMjIgMC4zMjUtMC4yMjIgMC41MzMgMCAwLjQxNCAwLjMzNiAwLjc1IDAuNzUgMC43NSAwLjAzNiAwIDAuMDcxLTAuMDAyIDAuMTA1LTAuMDA3bC0wLjAwNCAwYzAuMTc3LTAuMDI4IDAuMzgxLTAuMDQ0IDAuNTg5LTAuMDQ0IDEuMzE2IDAgMi40ODIgMC42NDIgMy4yMDIgMS42M2wwLjAwOCAwLjAxMWMwLjgwOCAxLjA3OCAxLjI5MyAyLjQzOCAxLjI5MyAzLjkxMSAwIDAuNzk0LTAuMTQxIDEuNTU2LTAuNCAyLjI2bDAuMDE1LTAuMDQ2ek0yOC4yNDggMjUuMTI1Yy0wLjEzNC0wLjIyNS0wLjM3Ni0wLjM3My0wLjY1My0wLjM3My0wLjEzNyAwLTAuMjY1IDAuMDM2LTAuMzc2IDAuMWwwLjAwNC0wLjAwMi0xLjQ3MyAwLjg1di0xLjdjMC0wLjQxNC0wLjMzNi0wLjc1LTAuNzUtMC43NXMtMC43NSAwLjMzNi0wLjc1IDAuNzV2MCAxLjdsLTEuNDczLTAuODVjLTAuMTA4LTAuMDYzLTAuMjM3LTAuMS0wLjM3NS0wLjEtMC40MTUgMC0wLjc1MSAwLjMzNi0wLjc1MSAwLjc1MSAwIDAuMjc3IDAuMTUgMC41MTggMC4zNzIgMC42NDhsMC4wMDQgMC4wMDIgMS40NzEgMC44NS0xLjQ3MSAwLjg1Yy0wLjIyNiAwLjEzMi0wLjM3NiAwLjM3NC0wLjM3NiAwLjY1IDAgMC40MTQgMC4zMzYgMC43NSAwLjc1IDAuNzUgMCAwIDAgMCAwLjAwMSAwaC0wYzAuMTM4LTAgMC4yNjctMC4wMzcgMC4zNzktMC4xMDJsLTAuMDA0IDAuMDAyIDEuNDczLTAuODV2MS43YzAgMC40MTQgMC4zMzYgMC43NSAwLjc1IDAuNzVzMC43NS0wLjMzNiAwLjc1LTAuNzV2MC0xLjdsMS40NzMgMC44NWMwLjEwNyAwLjA2MyAwLjIzNyAwLjEgMC4zNzQgMC4xIDAuMjc3IDAgMC41MTgtMC4xNDkgMC42NDktMC4zNzFsMC4wMDItMC4wMDRjMC4wNjMtMC4xMDggMC4xLTAuMjM3IDAuMS0wLjM3NSAwLTAuMjc3LTAuMTQ5LTAuNTE4LTAuMzcyLTAuNjQ5bC0wLjAwNC0wLjAwMi0xLjQ3MS0wLjg1IDEuNDcxLTAuODVjMC4yMjYtMC4xMzIgMC4zNzYtMC4zNzQgMC4zNzYtMC42NSAwLTAuMTM4LTAuMDM3LTAuMjY3LTAuMTAyLTAuMzc4bDAuMDAyIDAuMDA0ek0xNS4yMzcgMjMuMjg5Yy0wLjA3Mi0wLjAyNi0wLjE1NS0wLjA0MS0wLjI0Mi0wLjA0MS0wLjMyOSAwLTAuNjA4IDAuMjE0LTAuNzA2IDAuNTFsLTAuMDAyIDAuMDA1LTIgNmMtMC4wMjQgMC4wNzEtMC4wMzggMC4xNTItMC4wMzggMC4yMzYgMCAwLjMyOSAwLjIxMiAwLjYwOSAwLjUwOCAwLjcwOWwwLjAwNSAwLjAwMmMwLjA3MCAwLjAyNSAwLjE1MSAwLjAzOSAwLjIzNSAwLjAzOSAwLjAwMSAwIDAuMDAyIDAgMC4wMDMgMGgtMGMwLjMzLTAgMC42MDktMC4yMTMgMC43MS0wLjUwOGwwLjAwMi0wLjAwNSAyLTZjMC4wMjQtMC4wNzEgMC4wMzgtMC4xNTIgMC4wMzgtMC4yMzYgMC0wLjMyOS0wLjIxMi0wLjYwOS0wLjUwOC0wLjcwOWwtMC4wMDUtMC4wMDJ6TTE5LjIzNiAyMy4yODljLTAuMDcyLTAuMDI1LTAuMTU1LTAuMDQwLTAuMjQxLTAuMDQwLTAuMzI5IDAtMC42MDcgMC4yMTQtMC43MDUgMC41MWwtMC4wMDIgMC4wMDUtMi4wMDEgNmMtMC4wMjQgMC4wNzEtMC4wMzggMC4xNTItMC4wMzggMC4yMzYgMCAwLjMyOSAwLjIxMiAwLjYwOSAwLjUwOCAwLjcwOWwwLjAwNSAwLjAwMmMwLjA3MCAwLjAyNSAwLjE1MSAwLjAzOSAwLjIzNSAwLjAzOSAwLjAwMSAwIDAuMDAyIDAgMC4wMDMgMGgtMGMwLjMzLTAgMC42MDktMC4yMTMgMC43MS0wLjUwOGwwLjAwMi0wLjAwNSAxLjk5OS02YzAuMDI0LTAuMDcxIDAuMDM5LTAuMTUyIDAuMDM5LTAuMjM3IDAtMC4zMjktMC4yMTMtMC42MDktMC41MDgtMC43MDhsLTAuMDA1LTAuMDAyek0xMC4yNDcgMjUuMTI1Yy0wLjEzNC0wLjIyNS0wLjM3Ni0wLjM3My0wLjY1Mi0wLjM3My0wLjEzNyAwLTAuMjY1IDAuMDM2LTAuMzc2IDAuMWwwLjAwNC0wLjAwMi0xLjQ3MyAwLjg1di0xLjdjMC0wLjQxNC0wLjMzNi0wLjc1LTAuNzUtMC43NXMtMC43NSAwLjMzNi0wLjc1IDAuNzV2MCAxLjdsLTEuNDczLTAuODVjLTAuMTA4LTAuMDYzLTAuMjM3LTAuMS0wLjM3NS0wLjEtMC40MTUgMC0wLjc1MSAwLjMzNi0wLjc1MSAwLjc1MSAwIDAuMjc3IDAuMTUgMC41MTggMC4zNzIgMC42NDhsMC4wMDQgMC4wMDIgMS40NzEgMC44NS0xLjQ3MSAwLjg1Yy0wLjIyNiAwLjEzMi0wLjM3NSAwLjM3NC0wLjM3NSAwLjY1IDAgMC40MTUgMC4zMzYgMC43NTEgMC43NTEgMC43NTEgMCAwIDAgMCAwLjAwMSAwaC0wYzAuMTM4LTAuMDAxIDAuMjY2LTAuMDM3IDAuMzc4LTAuMTAybC0wLjAwNCAwLjAwMiAxLjQ3My0wLjg1djEuN2MwIDAuNDE0IDAuMzM2IDAuNzUgMC43NSAwLjc1czAuNzUtMC4zMzYgMC43NS0wLjc1djAtMS43bDEuNDczIDAuODVjMC4xMDggMC4wNjIgMC4yMzYgMC4wOTkgMC4zNzQgMC4xaDBjMCAwIDAgMCAwLjAwMSAwIDAuNDE1IDAgMC43NTEtMC4zMzYgMC43NTEtMC43NTEgMC0wLjI3Ni0wLjE0OS0wLjUxOC0wLjM3Mi0wLjY0OGwtMC4wMDQtMC4wMDItMS40NzEtMC44NSAxLjQ3MS0wLjg1YzAuMjI2LTAuMTMzIDAuMzc1LTAuMzc0IDAuMzc1LTAuNjUgMC0wLjEzOC0wLjAzNy0wLjI2Ny0wLjEwMi0wLjM3OWwwLjAwMiAwLjAwNHpcIj48L3BhdGg+IDwvZz48L3N2Zz5gO1xyXG5cclxuICAgIGNhc2UgMTIxMDpcclxuICAgIC8vIFBhdGNoeSBsaWdodCBzbm93XHJcbiAgICBjYXNlIDEyMTM6XHJcbiAgICAvLyBMaWdodCBTbm93XHJcbiAgICBjYXNlIDEyMTY6XHJcbiAgICAgIC8vIFBhdGNoeSBNb2RlcmF0ZSBTbm93XHJcbiAgICAgIHJldHVybiBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjx0aXRsZT53ZWF0aGVyLXNub3d5PC90aXRsZT48cGF0aCBkPVwiTTYsMTRBMSwxIDAgMCwxIDcsMTVBMSwxIDAgMCwxIDYsMTZBNSw1IDAgMCwxIDEsMTFBNSw1IDAgMCwxIDYsNkM3LDMuNjUgOS4zLDIgMTIsMkMxNS40MywyIDE4LjI0LDQuNjYgMTguNSw4LjAzTDE5LDhBNCw0IDAgMCwxIDIzLDEyQTQsNCAwIDAsMSAxOSwxNkgxOEExLDEgMCAwLDEgMTcsMTVBMSwxIDAgMCwxIDE4LDE0SDE5QTIsMiAwIDAsMCAyMSwxMkEyLDIgMCAwLDAgMTksMTBIMTdWOUE1LDUgMCAwLDAgMTIsNEM5LjUsNCA3LjQ1LDUuODIgNy4wNiw4LjE5QzYuNzMsOC4wNyA2LjM3LDggNiw4QTMsMyAwIDAsMCAzLDExQTMsMyAwIDAsMCA2LDE0TTcuODgsMTguMDdMMTAuMDcsMTcuNUw4LjQ2LDE1Ljg4QzguMDcsMTUuNSA4LjA3LDE0Ljg2IDguNDYsMTQuNDZDOC44NSwxNC4wNyA5LjUsMTQuMDcgOS44OCwxNC40NkwxMS41LDE2LjA3TDEyLjA3LDEzLjg4QzEyLjIxLDEzLjM0IDEyLjc2LDEzLjAzIDEzLjI5LDEzLjE3QzEzLjgzLDEzLjMxIDE0LjE0LDEzLjg2IDE0LDE0LjRMMTMuNDEsMTYuNTlMMTUuNiwxNkMxNi4xNCwxNS44NiAxNi42OSwxNi4xNyAxNi44MywxNi43MUMxNi45NywxNy4yNCAxNi42NiwxNy43OSAxNi4xMiwxNy45M0wxMy45MywxOC41TDE1LjU0LDIwLjEyQzE1LjkzLDIwLjUgMTUuOTMsMjEuMTUgMTUuNTQsMjEuNTRDMTUuMTUsMjEuOTMgMTQuNSwyMS45MyAxNC4xMiwyMS41NEwxMi41LDE5LjkzTDExLjkzLDIyLjEyQzExLjc5LDIyLjY2IDExLjI0LDIyLjk3IDEwLjcxLDIyLjgzQzEwLjE3LDIyLjY5IDkuODYsMjIuMTQgMTAsMjEuNkwxMC41OSwxOS40MUw4LjQsMjBDNy44NiwyMC4xNCA3LjMxLDE5LjgzIDcuMTcsMTkuMjlDNy4wMywxOC43NiA3LjM0LDE4LjIxIDcuODgsMTguMDdaXCIgLz48L3N2Zz5gO1xyXG5cclxuICAgIGNhc2UgMTIxOTpcclxuICAgIC8vIE1vZGVyYXRlIFNub3dcclxuICAgIGNhc2UgMTIyMjpcclxuICAgIC8vIFBhdGNoeSBIZWF2eSBTbm93XHJcbiAgICBjYXNlIDEyMjU6XHJcbiAgICAgIC8vIEhlYXZ5IFNub3dcclxuICAgICAgcmV0dXJuIGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHRpdGxlPndlYXRoZXItc25vd3ktaGVhdnk8L3RpdGxlPjxwYXRoIGQ9XCJNNCwxNi4zNkMzLjg2LDE1LjgyIDQuMTgsMTUuMjUgNC43MywxNS4xMUw3LDE0LjVMNS4zMywxMi44NkM0LjkzLDEyLjQ2IDQuOTMsMTEuODEgNS4zMywxMS40QzUuNzMsMTEgNi40LDExIDYuNzksMTEuNEw4LjQ1LDEzLjA1TDkuMDQsMTAuOEM5LjE4LDEwLjI0IDkuNzUsOS45MiAxMC4yOSwxMC4wN0MxMC44NSwxMC4yMSAxMS4xNywxMC43OCAxMSwxMS4zM0wxMC40MiwxMy41OEwxMi42NywxM0MxMy4yMiwxMi44MyAxMy43OSwxMy4xNSAxMy45MywxMy43MUMxNC4wOCwxNC4yNSAxMy43NiwxNC44MiAxMy4yLDE0Ljk2TDEwLjk1LDE1LjU1TDEyLjYsMTcuMjFDMTMsMTcuNiAxMywxOC4yNyAxMi42LDE4LjY3QzEyLjIsMTkuMDcgMTEuNTQsMTkuMDcgMTEuMTUsMTguNjdMOS41LDE3TDguODksMTkuMjdDOC43NSwxOS44MyA4LjE4LDIwLjE0IDcuNjQsMjBDNy4wOCwxOS44NiA2Ljc3LDE5LjI5IDYuOTEsMTguNzRMNy41LDE2LjVMNS4yNiwxNy4wOUM0LjcxLDE3LjIzIDQuMTQsMTYuOTIgNCwxNi4zNk0xLDEwQTUsNSAwIDAsMSA2LDVDNywyLjY1IDkuMywxIDEyLDFDMTUuNDMsMSAxOC4yNCwzLjY2IDE4LjUsNy4wM0wxOSw3QTQsNCAwIDAsMSAyMywxMUE0LDQgMCAwLDEgMTksMTVBMSwxIDAgMCwxIDE4LDE0QTEsMSAwIDAsMSAxOSwxM0EyLDIgMCAwLDAgMjEsMTFBMiwyIDAgMCwwIDE5LDlIMTdWOEE1LDUgMCAwLDAgMTIsM0M5LjUsMyA3LjQ1LDQuODIgNy4wNiw3LjE5QzYuNzMsNy4wNyA2LjM3LDcgNiw3QTMsMyAwIDAsMCAzLDEwQzMsMTAuODUgMy4zNSwxMS42MSAzLjkxLDEyLjE2QzQuMjcsMTIuNTUgNC4yNiwxMy4xNiAzLjg4LDEzLjU0QzMuNSwxMy45MyAyLjg1LDEzLjkzIDIuNDcsMTMuNTRDMS41NiwxMi42MyAxLDExLjM4IDEsMTBNMTQuMDMsMjAuNDNDMTQuMTMsMjAuODIgMTQuNSwyMS4wNCAxNC45MSwyMC45NEwxNi41LDIwLjVMMTYuMDYsMjIuMDlDMTUuOTYsMjIuNSAxNi4xOCwyMi44NyAxNi41NywyMi45N0MxNi45NSwyMy4wOCAxNy4zNSwyMi44NSAxNy40NSwyMi40NkwxNy44NiwyMC44OUwxOS4wMywyMi4wNUMxOS4zLDIyLjMzIDE5Ljc3LDIyLjMzIDIwLjA1LDIyLjA1QzIwLjMzLDIxLjc3IDIwLjMzLDIxLjMgMjAuMDUsMjEuMDNMMTguODksMTkuODZMMjAuNDYsMTkuNDVDMjAuODUsMTkuMzUgMjEuMDgsMTguOTUgMjAuOTcsMTguNTdDMjAuODcsMTguMTggMjAuNSwxNy45NiAyMC4wOSwxOC4wNkwxOC41LDE4LjVMMTguOTQsMTYuOTFDMTkuMDQsMTYuNSAxOC44MiwxNi4xMyAxOC40MywxNi4wM0MxOC4wNSwxNS45MiAxNy42NSwxNi4xNSAxNy41NSwxNi41NEwxNy4xNCwxOC4xMUwxNS45NywxNi45NUMxNS43LDE2LjY3IDE1LjIzLDE2LjY3IDE0Ljk1LDE2Ljk1QzE0LjY3LDE3LjI0IDE0LjY3LDE3LjcgMTQuOTUsMTcuOTdMMTYuMTEsMTkuMTRMMTQuNTQsMTkuNTVDMTQuMTUsMTkuNjUgMTMuOTIsMjAuMDUgMTQuMDMsMjAuNDNaXCIgLz48L3N2Zz5gO1xyXG5cclxuICAgIGNhc2UgMTIzNzpcclxuICAgICAgLy8gSWNlIFBlbGxldHNcclxuICAgICAgcmV0dXJuIGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHRpdGxlPnNub3dmbGFrZTwvdGl0bGU+PHBhdGggZD1cIk0yMC43OSwxMy45NUwxOC40NiwxNC41N0wxNi40NiwxMy40NFYxMC41NkwxOC40Niw5LjQzTDIwLjc5LDEwLjA1TDIxLjMxLDguMTJMMTkuNTQsNy42NUwyMCw1Ljg4TDE4LjA3LDUuMzZMMTcuNDUsNy42OUwxNS40NSw4LjgyTDEzLDcuMzhWNS4xMkwxNC43MSwzLjQxTDEzLjI5LDJMMTIsMy4yOUwxMC43MSwyTDkuMjksMy40MUwxMSw1LjEyVjcuMzhMOC41LDguODJMNi41LDcuNjlMNS45Miw1LjM2TDQsNS44OEw0LjQ3LDcuNjVMMi43LDguMTJMMy4yMiwxMC4wNUw1LjU1LDkuNDNMNy41NSwxMC41NlYxMy40NUw1LjU1LDE0LjU4TDMuMjIsMTMuOTZMMi43LDE1Ljg5TDQuNDcsMTYuMzZMNCwxOC4xMkw1LjkzLDE4LjY0TDYuNTUsMTYuMzFMOC41NSwxNS4xOEwxMSwxNi42MlYxOC44OEw5LjI5LDIwLjU5TDEwLjcxLDIyTDEyLDIwLjcxTDEzLjI5LDIyTDE0LjcsMjAuNTlMMTMsMTguODhWMTYuNjJMMTUuNSwxNS4xN0wxNy41LDE2LjNMMTguMTIsMTguNjNMMjAsMTguMTJMMTkuNTMsMTYuMzVMMjEuMywxNS44OEwyMC43OSwxMy45NU05LjUsMTAuNTZMMTIsOS4xMUwxNC41LDEwLjU2VjEzLjQ0TDEyLDE0Ljg5TDkuNSwxMy40NFYxMC41NlpcIiAvPjwvc3ZnPmA7XHJcblxyXG4gICAgY2FzZSAxMjQwOlxyXG4gICAgLy8gTGlnaHQgUmFpbiBTaG93ZXJcclxuICAgIGNhc2UgMTI0MzpcclxuICAgIC8vIE1vZGVyYXRlIG9yIEhlYXZ5IFJhaW4gU2hvd2VyXHJcbiAgICBjYXNlIDEyNDY6XHJcbiAgICAgIC8vIFRvcnJlbnRpYWwgUmFpbiBTaG93ZXJcclxuICAgICAgcmV0dXJuIGA8c3ZnIHZpZXdCb3g9XCIwIC0yIDE1NCAxNTRcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48ZyBpZD1cIlNWR1JlcG9fYmdDYXJyaWVyXCIgc3Ryb2tlLXdpZHRoPVwiMFwiPjwvZz48ZyBpZD1cIlNWR1JlcG9fdHJhY2VyQ2FycmllclwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiPjwvZz48ZyBpZD1cIlNWR1JlcG9faWNvbkNhcnJpZXJcIj4gPGcgY2xpcC1wYXRoPVwidXJsKCNjbGlwMClcIj4gPHBhdGggZD1cIk0xMDYuMTk2IDI5LjczMjhDMTA3LjQ3NiAyOC44Nzk1IDEwOC41NzcgMjguMTE2NCAxMDkuNzA3IDI3LjM5NzdDMTE3Ljg1OCAyMi4yMTI2IDEyNi43MSAyMS4xMzggMTM1LjkxNyAyMy40NzMyQzE1MS41NzggMjcuNDQ2IDE1Ny4wNDQgNDMuNzAyOCAxNTIuMTYxIDU2LjE4MjRDMTUwLjYzNyA2MC4wODEgMTQ4LjE2NCA2My42ODQ5IDE0NS43MDUgNjcuMTI1M0MxNDIuOTk3IDcwLjkxNTYgMTM4Ljg1OSA3Mi44MzAxIDEzNC40MjcgNzQuMDEwOUMxMzIuMDUxIDc0LjY0MzYgMTI5LjYzIDc1LjEwOTYgMTI2Ljk5NSA3NS43MDM2QzEyNi43MjQgNzYuNzI0MiAxMjYuNDI2IDc3Ljc3ODkgMTI2LjE2MiA3OC44NDI5QzEyNC43NTUgODQuNTMzMyAxMjEuNjM0IDg5LjI3OCAxMTcuODc3IDkzLjY1MThDMTE1LjA1NSA5Ni45MzM1IDExMS4yNTcgOTguNzMzOCAxMDcuMTUxIDk5LjU4MThDMTAxLjU1OCAxMDAuNzM2IDk1Ljg5NzMgMTAxLjY2IDkwLjIyMzMgMTAyLjMyQzc1LjI0NyAxMDQuMDYzIDYwLjE3NTcgMTAzLjc3MSA0NS4xMzMxIDEwNC4wNTdDMzguMTY0NCAxMDQuMjkyIDMxLjE5OTQgMTAzLjQ4OCAyNC40Njc0IDEwMS42NzJDMTIuMjkyNCA5OC4yMTkzIDQuOTQ2NzcgOTAuMjEwNiAxLjk1NTE3IDc4LjEzNzNDLTAuMDAyNDIwNDkgNzAuNDkyOSAwLjIxMjI3IDYyLjQ1NDEgMi41NzUzIDU0LjkyNTVDNi41MjM4MyA0Mi4zMDIyIDE1LjM1MDMgMzQuMTM2NCAyNy4wNDg5IDI4LjczNzRDMjguOTcyNSAyNy45MjI0IDMwLjUyNTQgMjYuNDIyNSAzMS40MDY0IDI0LjUyODJDMzcuOTM5IDExLjY1NDggNDguMjUzOSAzLjAxNDIgNjIuNTU3NSAwLjc4NTkzNkM3Ni44NDE5IC0xLjQzOTcxIDg5LjExNTQgMy40Njg0MiA5OC4zOTkzIDE0Ljg2ODRDMTAxLjM2OSAxOC41MzY2IDEwMy42NiAyMi43MDUgMTA1LjE2NSAyNy4xNzc5QzEwNS40NDYgMjguMDAyOSAxMDUuODE1IDI4Ljc5NzUgMTA2LjE5NiAyOS43MzI4Wk01MC4zNDYzIDk1LjgxNDRDNTMuMjYzNyA5NS44MTQ0IDU2LjE4NzcgOTUuOTU0MiA1OS4wOTY2IDk1Ljc5MDFDNzEuMTk5MyA5NS4xMDU2IDgzLjI5MjQgOTQuMjI4MSA5NS4zOTk4IDkzLjY0NTJDOTkuMzI5MyA5My41MjQ1IDEwMy4xOTEgOTIuNTg1MyAxMDYuNzM3IDkwLjg4ODZDMTE0Ljk4NiA4Ni44NDU2IDExOC44NTkgODAuMTUyMiAxMTguMTU3IDcxLjA0MUMxMTcuNjEyIDYzLjk3NzUgMTEzLjIgNTguNTM3OCAxMDYuMjg0IDU2Ljg3NTNDOTcuNjQyNSA1NC43OTczIDg5Ljc3MjQgNTYuNDI4OSA4My4wNzk3IDYyLjQ4M0M4MS4yNTUxIDY0LjEzMyA3OS42NTAzIDY2LjAyMzkgNzcuOTM0NyA2Ny43OTQxQzc2LjE1NDcgNjkuNjMxOCA3NC41MTU4IDcwLjA2NDMgNzIuODcyMyA2OS4xNTc5QzcxLjI4NDcgNjguMjgyNCA3MC41OTY4IDY2LjQ5OTggNzEuMjk3MSA2NC4xOTE3QzcyLjMzNTUgNjAuNzc4OCA3MS43ODQxIDU3LjU2MjUgNzAuNTQxIDU0LjM1NzZDNjkuMTAwNCA1MC43IDY3LjA1MzMgNDcuMzExNyA2NC40ODY0IDQ0LjMzNDNDNTYuNTk2NiAzNS4wNDEyIDQyLjQ1OTIgMzAuOTc0NCAzMS40NTkgMzUuMzcwNkMxNi44MzMyIDQxLjIxMiA2LjQ1NjIyIDUzLjU1MTMgOC4yNjM3NiA3MS41NzA2QzkuODQ5NDcgODcuMzgzOCAxNy41MjU0IDkyLjQ5MDcgMjguODY3NiA5NC45ODQyQzI5LjE5NTggOTUuMDU2NCAyOS41MzE5IDk1LjA5ODQgMjkuODYyIDk1LjE2NEMzNi42NDIgOTYuNTAyOSA0My40OTQxIDk2LjMyMzEgNTAuMzQ2MyA5NS44MTQ0Wk03OS4xMjMzIDU1LjEzNDRDNzkuMjk1OSA1NS4xMDAyIDc5LjQ2NTkgNTUuMDUwMiA3OS42MyA1NC45ODU3QzgwLjAxMzMgNTQuNzU2NiA4MC40MDcxIDU0LjUzODggODAuNzY0MiA1NC4yNzM2Qzg3LjQ2NDEgNDkuMjkzMyA5NS4wMjcgNDcuMzUyNiAxMDMuMjg2IDQ4LjAzODRDMTE0LjQxNSA0OC45NTczIDEyMi41MzIgNTQuNTgzMiAxMjUuOTUyIDY1LjUyMDRDMTI2LjE3MiA2Ni4yMjM0IDEyNi40OTYgNjYuODk0MiAxMjYuOTQgNjguMDAyMUMxMjkuNDA1IDY3LjAyMDkgMTMxLjczMSA2Ni4yNTc2IDEzMy45MTUgNjUuMTk2OEMxNDEuOTIyIDYxLjMwNjcgMTQ1LjY2OSA1NC43ODk5IDE0NS4xNDQgNDUuOTE2MkMxNDQuNzA3IDM4LjUxNDcgMTQwLjIxNCAzMi45NDcxIDEzMi45OTYgMzEuMjc5NEMxMjQuMzI4IDI5LjI3NDIgMTE2LjQ4OSAzMS4wMTIgMTA5Ljg1IDM3LjExNEMxMDguMDQgMzguNzc4NSAxMDYuNDQ5IDQwLjY4MDEgMTA0LjcyMSA0Mi40Mzc4QzEwMy4wODQgNDQuMTAzNSAxMDEuNDgxIDQ0LjQ4NDMgOTkuOTA3NiA0My42NjY1Qzk4LjI4ODQgNDIuODI0NCA5Ny41MzU2IDQxLjAwMTggOTguMjMzMiAzOC43NDAxQzk5LjMyMjggMzUuMjA5NiA5OC43NjM2IDMxLjg4NjUgOTcuMzkzOCAyOC42MDA4Qzk2Ljk2MzIgMjcuNTY3OCA5Ni41MTM2IDI2LjUzOTggOTYuMDA5NiAyNS41NDE1Qzg3LjE3MzMgOC4wNDQyMSA2Ni40NTkzIDQuMDkxNSA1My4zMDMgMTIuMTUyQzQ4LjQ3OTkgMTUuMDM3MiA0NC4yNTAyIDE4LjgxNDEgNDAuODM5MyAyMy4yODA5QzQwLjM4NDcgMjQuMDExMSAzOS45ODQgMjQuNzczMyAzOS42NDA4IDI1LjU2MjFDNTkuODgwOSAyNi4zODcxIDcyLjg3NTYgMzYuNDI4MSA3OS4xMjMzIDU1LjEzNDRaXCIgZmlsbD1cIiMwMDAwMDBcIj48L3BhdGg+IDxwYXRoIGQ9XCJNOTUuOTM5IDEyMi42NzZDOTYuMzQyNiAxMjEuMzc1IDk2LjgyNyAxMjAuMTAzIDk3LjM4OTUgMTE4Ljg2M0M5OS4wMzAzIDExNS44MjcgMTAwLjc2MiAxMTIuODM5IDEwMi41IDEwOS44NTdDMTAyLjk0MyAxMDkuMDk2IDEwMy40IDEwOC4xNSAxMDQuMTA3IDEwNy43ODNDMTA1LjA1NyAxMDcuMjk2IDEwNi4xMzMgMTA3LjExMSAxMDcuMTkyIDEwNy4yNTJDMTA4LjQ2NiAxMDcuNDY5IDEwOC43NTggMTA4LjcwNiAxMDguNzMgMTA5Ljg4OUMxMDguNzQgMTEwLjQ0NiAxMDguNjQ1IDExMSAxMDguNDUyIDExMS41MjJDMTA2Ljc4NiAxMTUuNDA3IDEwNS4xMDUgMTE5LjI4NCAxMDMuMzU4IDEyMy4xMzJDMTAyLjk5NSAxMjMuODI0IDEwMi41MDUgMTI0LjQ0MSAxMDEuOTE0IDEyNC45NUMxMDAuNzY3IDEyNi4wMzMgOTkuMjU4MSAxMjYuNTk3IDk3Ljk1NTIgMTI1LjY3MkM5Ny4wMTE0IDEyNC45OTggOTYuNTU1MyAxMjMuNjM3IDk1LjkzOSAxMjIuNjc2WlwiIGZpbGw9XCIjMDAwMDAwXCI+PC9wYXRoPiA8cGF0aCBkPVwiTTM2Ljk3MDUgMTExLjEyOUMzNi41Njg4IDExMi4zMTkgMzYuMzE0MiAxMTMuMTY0IDM1Ljk5OTEgMTEzLjk5QzM0Ljc2MTkgMTE3LjIwNiAzMy40ODA2IDEyMC40MDkgMzIuMjU3OSAxMjMuNjM0QzMxLjA1MTUgMTI2LjgyMiAyOS4wNjE2IDEyOC4xNjMgMjYuODU0OSAxMjcuMjA0QzI0Ljk4NTcgMTI2LjM4OSAyNC40NzE3IDEyNC4yNDIgMjUuNzUyOCAxMjEuMzU4QzI3LjI0MzQgMTE4LjAwNCAyOC45MjE2IDExNC43MjkgMzAuNTgxNCAxMTEuNDUzQzMwLjkxMyAxMTAuNjIyIDMxLjQ2OTIgMTA5LjkgMzIuMTg3NyAxMDkuMzY3QzMzLjA3NDQgMTA4Ljg3OSAzNC4zODc1IDEwOC40NDggMzUuMjE3MiAxMDguNzY5QzM2LjAyMzEgMTA5LjA3OCAzNi40NDc0IDExMC4zNjkgMzYuOTcwNSAxMTEuMTI5WlwiIGZpbGw9XCIjMDAwMDAwXCI+PC9wYXRoPiA8cGF0aCBkPVwiTTU5LjI0NDkgMTI0LjM5NkM1OS44NDAyIDEyMi44MSA2MC4yMTQzIDEyMS41MjYgNjAuNzg5OSAxMjAuMzM4QzYyLjE5NzcgMTE3LjQzMyA2My42OTYyIDExNC41NyA2NS4xNjU3IDExMS42OTRDNjUuNDAwMyAxMTEuMTkgNjUuNjc3NCAxMTAuNzA3IDY1Ljk5NDUgMTEwLjI1QzY2LjczODEgMTA5LjI2MSA2Ny44NzgyIDEwOC42OTQgNjguOTE4NSAxMDkuMjg4QzY5Ljc5MjEgMTA5Ljg5MiA3MC40NTcgMTEwLjc1MSA3MC44MjE5IDExMS43NDhDNzAuOTk5MSAxMTIuNTEyIDcwLjkxOSAxMTMuMzE0IDcwLjU5NDEgMTE0LjAyOEM2OS4zOTU3IDExNy4zNzYgNjguMTg0MSAxMjAuNzMgNjYuODE2OSAxMjQuMDEzQzY2LjQwODcgMTI1LjA1NCA2NS42ODM3IDEyNS45MzkgNjQuNzQ0MyAxMjYuNTQzQzYzLjc4MTQgMTI3LjA2OCA2Mi4zMDAxIDEyNy40IDYxLjM2NjEgMTI3LjAyNEM2MC40MzIxIDEyNi42NDggNTkuOTE4OSAxMjUuMjkgNTkuMjQ0OSAxMjQuMzk2WlwiIGZpbGw9XCIjMDAwMDAwXCI+PC9wYXRoPiA8cGF0aCBkPVwiTTEyNy4wMjYgMTI3LjYxNEMxMjYuODc3IDEyOC40MDEgMTI2LjY3OSAxMjkuMTc2IDEyNi40MzIgMTI5LjkzN0MxMjUuMzI1IDEzMi42MTggMTI0LjMwMSAxMzUuMzQ3IDEyMi45NzcgMTM3LjkyQzEyMi4yNjggMTM5LjMwNCAxMjEuMjUxIDE0MC41MDYgMTIwLjAwNSAxNDEuNDM1QzExNy45OTggMTQyLjg3OSAxMTUuODk4IDE0MS43MzcgMTE1Ljc5NCAxMzkuMjQ4QzExNS43MjYgMTM4LjEzMyAxMTUuOTM3IDEzNy4wMiAxMTYuNDA4IDEzNi4wMDhDMTE3Ljk5OCAxMzIuOTM2IDExOS43NjUgMTI5Ljk1MyAxMjEuNTA0IDEyNi45NTlDMTIxLjc0NSAxMjYuNDUgMTIyLjE1NCAxMjYuMDM5IDEyMi42NjIgMTI1Ljc5NEMxMjMuNTgxIDEyNS41NCAxMjQuNzIyIDEyNS4yMjEgMTI1LjQ5IDEyNS41NjFDMTI2LjIyOCAxMjUuODg4IDEyNi42MDggMTI3LjAxNSAxMjcuMDI2IDEyNy42MTRaXCIgZmlsbD1cIiMwMDAwMDBcIj48L3BhdGg+IDxwYXRoIGQ9XCJNNDguMTM5OSAxMzUuMzk5QzQ2LjU3MDYgMTQwLjA2NCA0NS4wMzggMTQ0LjIzOSA0Mi40MDA4IDE0Ny44NjlDNDEuMTY5NSAxNDkuNTYzIDM5LjM2NjQgMTQ5LjgyMyAzNy45OTIgMTQ4LjkxMUMzNi43MTgxIDE0OC4wNjYgMzYuMzQ2NiAxNDYuNTc0IDM2Ljk3NjcgMTQ0Ljc1OUMzNy4xMDQ4IDE0NC4zMzQgMzcuMjgxMiAxNDMuOTIzIDM3LjUwMiAxNDMuNTM4QzM5LjQ2MTggMTQwLjQ0MSA0MS40MTYyIDEzNy4zNCA0My40MzA1IDEzNC4yNzdDNDQuMTQyNiAxMzMuMTk2IDQ1LjIyOTcgMTMyLjMwOCA0Ni41MDIzIDEzMy4xMjFDNDcuMjkzOCAxMzMuNjIgNDcuNjg5NyAxMzQuNzM4IDQ4LjEzOTkgMTM1LjM5OVpcIiBmaWxsPVwiIzAwMDAwMFwiPjwvcGF0aD4gPHBhdGggZD1cIk04NC42MTA4IDEzNi4zMDhDODIuNzczIDEzOS45NDEgODEuMTA3OSAxNDMuNDYyIDc5LjIxODMgMTQ2Ljg2MUM3OC44NjM5IDE0Ny41MjMgNzguMjYzMyAxNDguMDE4IDc3LjU0NTkgMTQ4LjIzOUM3Ni44Mjg2IDE0OC40NiA3Ni4wNTM0IDE0OC4zODkgNzUuMzg3OSAxNDguMDQzQzczLjg3ODMgMTQ3LjM3MyA3My44Njk4IDE0NS45MTMgNzQuMTIyNSAxNDQuNTY0Qzc0LjMwODkgMTQzLjQ2MyA3NC42NjQ2IDE0Mi4zOTggNzUuMTc3MiAxNDEuNDA2Qzc2LjQ2MSAxMzkuMDUxIDc3LjgyNDkgMTM2LjczMyA3OS4yODcyIDEzNC40ODVDODAuMTAxNyAxMzMuMjMzIDgxLjUyNCAxMzIuNjkzIDgyLjgwODUgMTMzLjQ4NEM4My41OTU0IDEzMy45NjkgODMuOTMwMSAxMzUuMTg1IDg0LjYxMDggMTM2LjMwOFpcIiBmaWxsPVwiIzAwMDAwMFwiPjwvcGF0aD4gPHBhdGggZD1cIk0xNDEuOTQ4IDg3LjY2NThDMTQwLjI0MiA5MS43MzUxIDEzOC43OTEgOTUuNjA3NSAxMzYuOTgyIDk5LjMwOTJDMTM2LjgxNyA5OS42NzM1IDEzNi41NzYgOTkuOTk4NCAxMzYuMjc1IDEwMC4yNjJDMTM1Ljk3NCAxMDAuNTI1IDEzNS42MTkgMTAwLjcyIDEzNS4yMzUgMTAwLjgzNEMxMzQuODUyIDEwMC45NDggMTM0LjQ0OCAxMDAuOTc4IDEzNC4wNTMgMTAwLjkyMkMxMzMuNjU2IDEwMC44NjUgMTMzLjI3NyAxMDAuNzI1IDEzMi45NCAxMDAuNTA5QzEzMi42MDYgMTAwLjM0OCAxMzIuMzA5IDEwMC4xMiAxMzIuMDY3IDk5Ljg0MDhDMTMxLjgyNCA5OS41NjEyIDEzMS42NCA5OS4yMzUgMTMxLjUyOCA5OC44ODE5QzEzMS40MTUgOTguNTI5NSAxMzEuMzc2IDk4LjE1NzMgMTMxLjQxMiA5Ny43ODg1QzEzMS40NDggOTcuNDIwMyAxMzEuNTU5IDk3LjA2MzIgMTMxLjczOCA5Ni43MzlDMTMzLjUxIDkzLjEzNDQgMTM1LjUwNCA4OS42MzA5IDEzNy41NDMgODYuMTY1NEMxMzguMTIyIDg1LjE4MDkgMTM5LjM0MyA4NC41MzM3IDE0MC40NDMgODUuMzEyMkMxNDEuMTQyIDg1LjgwNzcgMTQxLjQ1MiA4Ni44NSAxNDEuOTQ4IDg3LjY2NThaXCIgZmlsbD1cIiMwMDAwMDBcIj48L3BhdGg+IDwvZz4gPGRlZnM+IDxjbGlwUGF0aCBpZD1cImNsaXAwXCI+IDxyZWN0IHdpZHRoPVwiMTUzLjU4M1wiIGhlaWdodD1cIjE0OS42NDVcIiBmaWxsPVwid2hpdGVcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMC4zMjkxMDIgMC4wOTM3NSlcIj48L3JlY3Q+IDwvY2xpcFBhdGg+IDwvZGVmcz4gPC9nPjwvc3ZnPmA7XHJcblxyXG4gICAgY2FzZSAxMjczOlxyXG4gICAgLy8gUGF0Y2h5IGxpZ2h0IHJhaW4gd2l0aCB0aHVuZGVyXHJcbiAgICBjYXNlIDEyNzY6XHJcbiAgICAgIC8vIE1vZGVyYXRlIG9yIGhlYXZ5IHJhaW4gd2l0aCB0aHVuZGVyXHJcbiAgICAgIHJldHVybiBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjx0aXRsZT53ZWF0aGVyLWxpZ2h0bmluZy1yYWlueTwvdGl0bGU+PHBhdGggZD1cIk00LjUsMTMuNTlDNSwxMy44NyA1LjE0LDE0LjUgNC44NywxNC45NkM0LjU5LDE1LjQ0IDQsMTUuNiAzLjUsMTUuMzNWMTUuMzNDMiwxNC40NyAxLDEyLjg1IDEsMTFBNSw1IDAgMCwxIDYsNkM3LDMuNjUgOS4zLDIgMTIsMkMxNS40MywyIDE4LjI0LDQuNjYgMTguNSw4LjAzTDE5LDhBNCw0IDAgMCwxIDIzLDEyQTQsNCAwIDAsMSAxOSwxNkExLDEgMCAwLDEgMTgsMTVBMSwxIDAgMCwxIDE5LDE0QTIsMiAwIDAsMCAyMSwxMkEyLDIgMCAwLDAgMTksMTBIMTdWOUE1LDUgMCAwLDAgMTIsNEM5LjUsNCA3LjQ1LDUuODIgNy4wNiw4LjE5QzYuNzMsOC4wNyA2LjM3LDggNiw4QTMsMyAwIDAsMCAzLDExQzMsMTIuMTEgMy42LDEzLjA4IDQuNSwxMy42VjEzLjU5TTkuNSwxMUgxMi41TDEwLjUsMTVIMTIuNUw4Ljc1LDIyTDkuNSwxN0g3TDkuNSwxMU0xNy41LDE4LjY3QzE3LjUsMTkuOTYgMTYuNSwyMSAxNS4yNSwyMUMxNCwyMSAxMywxOS45NiAxMywxOC42N0MxMywxNy4xMiAxNS4yNSwxNC41IDE1LjI1LDE0LjVDMTUuMjUsMTQuNSAxNy41LDE3LjEyIDE3LjUsMTguNjdaXCIgLz48L3N2Zz5gO1xyXG4gICAgY2FzZSAxMjc5OlxyXG4gICAgLy8gUGF0Y2h5IGxpZ2h0IHNub3cgd2l0aCB0aHVuZGVyXHJcbiAgICBjYXNlIDEyODI6XHJcbiAgICAgIC8vIE1vZGVyYXRlIG9yIGhlYXZ5IHNub3cgd2l0aCB0aHVuZGVyXHJcbiAgICAgIHJldHVybiBgPHN2ZyB2aWV3Qm94PScwIDAgMjQgMjQnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PHJlY3Qgd2lkdGg9JzI0JyBoZWlnaHQ9JzI0JyBzdHJva2U9J25vbmUnIGZpbGw9JyMwMDAwMDAnIG9wYWNpdHk9JzAnLz5cclxuICAgICAgICA8ZyB0cmFuc2Zvcm09XCJtYXRyaXgoMC44MyAwIDAgMC44MyAxMiAxMilcIiA+XHJcbiAgICAgICAgPGcgc3R5bGU9XCJcIiA+XHJcbiAgICAgICAgPGcgdHJhbnNmb3JtPVwibWF0cml4KDEgMCAwIDEgLTIuNzggLTMuODgpXCIgPlxyXG4gICAgICAgIDxwYXRoIHN0eWxlPVwic3Ryb2tlOiByZ2IoMCwwLDApOyBzdHJva2Utd2lkdGg6IDEuNTsgc3Ryb2tlLWRhc2hhcnJheTogbm9uZTsgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kOyBzdHJva2UtZGFzaG9mZnNldDogMDsgc3Ryb2tlLWxpbmVqb2luOiByb3VuZDsgc3Ryb2tlLW1pdGVybGltaXQ6IDQ7IGZpbGw6IG5vbmU7IGZpbGwtcnVsZTogbm9uemVybzsgb3BhY2l0eTogMTtcIiB0cmFuc2Zvcm09XCIgdHJhbnNsYXRlKC05LjIyLCAtOC4xMilcIiBkPVwiTSA5LjE1OSA4LjMwOTAxIEMgOS4xNTg5NiA4LjU1OTc1IDkuMTc0NjYgOC44MTAyNCA5LjIwNiA5LjA1OTAxIEMgOS4xNzQ2NiA4LjgxMDI0IDkuMTU4OTYgOC41NTk3NSA5LjE1OSA4LjMwOTAxIEMgOS4xNjA0MyA3LjkzMjI1IDkuMTk4MjcgNy41NTY1IDkuMjcyIDcuMTg3MDFcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgLz5cclxuICAgICAgICA8L2c+XHJcbiAgICAgICAgPGcgdHJhbnNmb3JtPVwibWF0cml4KDEgMCAwIDEgMC41NCAtMy42OSlcIiA+XHJcbiAgICAgICAgPHBhdGggc3R5bGU9XCJzdHJva2U6IHJnYigwLDAsMCk7IHN0cm9rZS13aWR0aDogMS41OyBzdHJva2UtZGFzaGFycmF5OiBub25lOyBzdHJva2UtbGluZWNhcDogcm91bmQ7IHN0cm9rZS1kYXNob2Zmc2V0OiAwOyBzdHJva2UtbGluZWpvaW46IHJvdW5kOyBzdHJva2UtbWl0ZXJsaW1pdDogNDsgZmlsbDogbm9uZTsgZmlsbC1ydWxlOiBub256ZXJvOyBvcGFjaXR5OiAxO1wiIHRyYW5zZm9ybT1cIiB0cmFuc2xhdGUoLTEyLjU0LCAtOC4zMSlcIiBkPVwiTSAxNS4xNTkgMTQuMzA5IEMgMTYuMjk4IDE0LjMxMDQgMTcuNDEzOCAxMy45ODc1IDE4LjM3NjEgMTMuMzc4MiBDIDE5LjMzODMgMTIuNzY4OSAyMC4xMDczIDExLjg5ODIgMjAuNTkzMSAxMC44NjggQyAyMS4wNzg4IDkuODM3ODQgMjEuMjYxNCA4LjY5MDY3IDIxLjExOTMgNy41NjA2IEMgMjAuOTc3MiA2LjQzMDUyIDIwLjUxNjQgNS4zNjQyMyAxOS43OTA4IDQuNDg2MzQgQyAxOS4wNjUxIDMuNjA4NDUgMTguMTA0NiAyLjk1NTI1IDE3LjAyMTQgMi42MDMwNiBDIDE1LjkzODMgMi4yNTA4OCAxNC43NzcyIDIuMjE0MjcgMTMuNjc0MSAyLjQ5NzUxIEMgMTIuNTcwOSAyLjc4MDc1IDExLjU3MTEgMy4zNzIxNSAxMC43OTE2IDQuMjAyNTcgQyAxMC4wMTIgNS4wMzI5OSA5LjQ4NDk4IDYuMDY4MTQgOS4yNzE5OSA3LjE4NzAyIEMgOC43NjQ2OSA2Ljk0MzgyIDguMjA5MTEgNi44MTgwNCA3LjY0NjUzIDYuODE5MDMgQyA3LjA4Mzk1IDYuODIwMDEgNi41Mjg4MiA2Ljk0NzczIDYuMDIyMzcgNy4xOTI3IEMgNS41MTU5MiA3LjQzNzY3IDUuMDcxMTcgNy43OTM1OSA0LjcyMTE2IDguMjM0MDMgQyA0LjM3MTE0IDguNjc0NDcgNC4xMjQ4NSA5LjE4ODExIDQuMDAwNTggOS43MzY4IEMgMy44NzYzMiAxMC4yODU1IDMuODc3MjYgMTAuODU1MSA0LjAwMzM2IDExLjQwMzQgQyA0LjEyOTQ1IDExLjk1MTcgNC4zNzc0NCAxMi40NjQ1IDQuNzI4OTIgMTIuOTAzOCBDIDUuMDgwNCAxMy4zNDMgNS41MjYzMyAxMy42OTc1IDYuMDMzNTkgMTMuOTQwNyBDIDYuNTQwODUgMTQuMTg0IDcuMDk2NDEgMTQuMzA5OSA3LjY1ODk5IDE0LjMwOSBMIDE1LjE1OSAxNC4zMDkgWlwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiAvPlxyXG4gICAgICAgIDwvZz5cclxuICAgICAgICA8ZyB0cmFuc2Zvcm09XCJtYXRyaXgoMSAwIDAgMSAtMC41OSA1LjY4KVwiID5cclxuICAgICAgICA8cGF0aCBzdHlsZT1cInN0cm9rZTogcmdiKDAsMCwwKTsgc3Ryb2tlLXdpZHRoOiAxLjU7IHN0cm9rZS1kYXNoYXJyYXk6IG5vbmU7IHN0cm9rZS1saW5lY2FwOiByb3VuZDsgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7IHN0cm9rZS1saW5lam9pbjogcm91bmQ7IHN0cm9rZS1taXRlcmxpbWl0OiA0OyBmaWxsOiBub25lOyBmaWxsLXJ1bGU6IG5vbnplcm87IG9wYWNpdHk6IDE7XCIgdHJhbnNmb3JtPVwiIHRyYW5zbGF0ZSgtMTEuNDEsIC0xNy42OClcIiBkPVwiTSAxMi4xNTkgMTQuMzA5IEwgOS4xNTkgMTcuMzA5IEwgMTMuNjU5IDE3LjMwOSBMIDkuOTA5IDIxLjA1OVwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiAvPlxyXG4gICAgICAgIDwvZz5cclxuICAgICAgICA8ZyB0cmFuc2Zvcm09XCJtYXRyaXgoMSAwIDAgMSAtNi40IDkuMDYpXCIgPlxyXG4gICAgICAgIDxwYXRoIHN0eWxlPVwic3Ryb2tlOiByZ2IoMCwwLDApOyBzdHJva2Utd2lkdGg6IDEuNTsgc3Ryb2tlLWRhc2hhcnJheTogbm9uZTsgc3Ryb2tlLWxpbmVjYXA6IGJ1dHQ7IHN0cm9rZS1kYXNob2Zmc2V0OiAwOyBzdHJva2UtbGluZWpvaW46IG1pdGVyOyBzdHJva2UtbWl0ZXJsaW1pdDogNDsgZmlsbDogbm9uZTsgZmlsbC1ydWxlOiBub256ZXJvOyBvcGFjaXR5OiAxO1wiIHRyYW5zZm9ybT1cIiB0cmFuc2xhdGUoLTUuNiwgLTIxLjA2KVwiIGQ9XCJNIDUuNzg0IDIxLjQzNCBDIDUuNTc2ODkgMjEuNDM0IDUuNDA5IDIxLjI2NjEgNS40MDkgMjEuMDU5IEMgNS40MDkgMjAuODUxOSA1LjU3Njg5IDIwLjY4NCA1Ljc4NCAyMC42ODRcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgLz5cclxuICAgICAgICA8L2c+XHJcbiAgICAgICAgPGcgdHJhbnNmb3JtPVwibWF0cml4KDEgMCAwIDEgLTYuMDMgOS4wNilcIiA+XHJcbiAgICAgICAgPHBhdGggc3R5bGU9XCJzdHJva2U6IHJnYigwLDAsMCk7IHN0cm9rZS13aWR0aDogMS41OyBzdHJva2UtZGFzaGFycmF5OiBub25lOyBzdHJva2UtbGluZWNhcDogYnV0dDsgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7IHN0cm9rZS1saW5lam9pbjogbWl0ZXI7IHN0cm9rZS1taXRlcmxpbWl0OiA0OyBmaWxsOiBub25lOyBmaWxsLXJ1bGU6IG5vbnplcm87IG9wYWNpdHk6IDE7XCIgdHJhbnNmb3JtPVwiIHRyYW5zbGF0ZSgtNS45NywgLTIxLjA2KVwiIGQ9XCJNIDUuNzg0IDIxLjQzNCBDIDUuOTkxMSAyMS40MzQgNi4xNTkgMjEuMjY2MSA2LjE1OSAyMS4wNTkgQyA2LjE1OSAyMC44NTE5IDUuOTkxMSAyMC42ODQgNS43ODQgMjAuNjg0XCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIC8+XHJcbiAgICAgICAgPC9nPlxyXG4gICAgICAgIDxnIHRyYW5zZm9ybT1cIm1hdHJpeCgxIDAgMCAxIDMuMzUgOS4wNilcIiA+XHJcbiAgICAgICAgPHBhdGggc3R5bGU9XCJzdHJva2U6IHJnYigwLDAsMCk7IHN0cm9rZS13aWR0aDogMS41OyBzdHJva2UtZGFzaGFycmF5OiBub25lOyBzdHJva2UtbGluZWNhcDogYnV0dDsgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7IHN0cm9rZS1saW5lam9pbjogbWl0ZXI7IHN0cm9rZS1taXRlcmxpbWl0OiA0OyBmaWxsOiBub25lOyBmaWxsLXJ1bGU6IG5vbnplcm87IG9wYWNpdHk6IDE7XCIgdHJhbnNmb3JtPVwiIHRyYW5zbGF0ZSgtMTUuMzUsIC0yMS4wNilcIiBkPVwiTSAxNS41MzQgMjEuNDM0IEMgMTUuMzI2OSAyMS40MzQgMTUuMTU5IDIxLjI2NjEgMTUuMTU5IDIxLjA1OSBDIDE1LjE1OSAyMC44NTE5IDE1LjMyNjkgMjAuNjg0IDE1LjUzNCAyMC42ODRcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgLz5cclxuICAgICAgICA8L2c+XHJcbiAgICAgICAgPGcgdHJhbnNmb3JtPVwibWF0cml4KDEgMCAwIDEgMy43MiA5LjA2KVwiID5cclxuICAgICAgICA8cGF0aCBzdHlsZT1cInN0cm9rZTogcmdiKDAsMCwwKTsgc3Ryb2tlLXdpZHRoOiAxLjU7IHN0cm9rZS1kYXNoYXJyYXk6IG5vbmU7IHN0cm9rZS1saW5lY2FwOiBidXR0OyBzdHJva2UtZGFzaG9mZnNldDogMDsgc3Ryb2tlLWxpbmVqb2luOiBtaXRlcjsgc3Ryb2tlLW1pdGVybGltaXQ6IDQ7IGZpbGw6IG5vbmU7IGZpbGwtcnVsZTogbm9uemVybzsgb3BhY2l0eTogMTtcIiB0cmFuc2Zvcm09XCIgdHJhbnNsYXRlKC0xNS43MiwgLTIxLjA2KVwiIGQ9XCJNIDE1LjUzNCAyMS40MzQgQyAxNS43NDExIDIxLjQzNCAxNS45MDkgMjEuMjY2MSAxNS45MDkgMjEuMDU5IEMgMTUuOTA5IDIwLjg1MTkgMTUuNzQxMSAyMC42ODQgMTUuNTM0IDIwLjY4NFwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiAvPlxyXG4gICAgICAgIDwvZz5cclxuICAgICAgICA8L2c+XHJcbiAgICAgICAgPC9nPlxyXG4gICAgICAgIDwvc3ZnPmA7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQge1xyXG4gIGN1cnJlbnREYXRlRm9ybWF0dGVkLFxyXG4gIGN1cnJlbnRUaW1lRm9ybWF0dGVkLFxyXG4gIGdldFdlYXRoZXJJY29uLFxyXG4gIGdldEFpclF1YWxpdHksXHJcbiAgZ2V0RGF5LFxyXG59O1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XHJcbmltcG9ydCAqIGFzIEFQSV9GVU5DVElPTlMgZnJvbSBcIi4vanMvYXBpRnVuY3Rpb25zLmpzXCI7XHJcbmltcG9ydCAqIGFzIFJFTkRFUl9GVU5DVElPTlMgZnJvbSBcIi4vanMvZG9tRnVuY3Rpb25zLmpzXCI7XHJcblxyXG4vLyBTZWFyY2ggQ2l0eVxyXG4vLyBTZWFyY2ggSW5wdXRcclxuY29uc3Qgc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxlZnQtY2l0eS1zZWFyY2hcIik7XHJcbi8vIFNlYXJjaCBJY29uXHJcbmNvbnN0IHNlYXJjaEljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxlZnQtY2l0eS1zZWFyY2gtaWNvblwiKTtcclxuLy8gU3dpdGNoIFVuaXRzIHZhbHVlIGJ1dHRvblxyXG5jb25zdCBzd2l0Y2hVbml0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGVmdC1jaGFuZ2UtdW5pdHNcIik7XHJcblxyXG4vLyBGbGFnc1xyXG5sZXQgbGFzdENpdHlOYW1lO1xyXG5sZXQgdW5pdHMgPSBcIm1ldHJpY1wiO1xyXG5cclxuLy8gR2V0IFdlYXRoZXIgRGF0YSB0byBwb3B1bGF0ZSB0aGUgcGFnZVxyXG5hc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyRGF0YShjaXR5TmFtZSwgdW5pdHMpIHtcclxuICAvLyBHZXQgV2VhdGhlciBEYXRhXHJcbiAgdHJ5IHtcclxuICAgIFJFTkRFUl9GVU5DVElPTlMubG9hZGluZ1NjcmVlbih0cnVlKTtcclxuICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgQVBJX0ZVTkNUSU9OUy5nZXREYXRhKGNpdHlOYW1lLCB1bml0cyk7XHJcbiAgICBsYXN0Q2l0eU5hbWUgPSBjaXR5TmFtZTtcclxuXHJcbiAgICBSRU5ERVJfRlVOQ1RJT05TLmxvYWRpbmdTY3JlZW4oZmFsc2UpO1xyXG4gICAgY29uc29sZS5sb2codW5pdHMpO1xyXG4gICAgUkVOREVSX0ZVTkNUSU9OUy5yZW5kZXJMb2NhdGlvbnMod2VhdGhlckRhdGEpO1xyXG4gICAgUkVOREVSX0ZVTkNUSU9OUy5yZW5kZXJXZWF0aGVyKHdlYXRoZXJEYXRhKTtcclxuICAgIFJFTkRFUl9GVU5DVElPTlMucmVuZGVyRm9yZWNhc3Qod2VhdGhlckRhdGEpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIkVycm9yIGZldGNoaW5nIHdlYXRoZXIgZGF0YTogXCIsIGVycm9yKTtcclxuICAgIHRocm93IGVycm9yO1xyXG4gIH1cclxufVxyXG5cclxuLy8gaGFuZGxlIGNpdHkgc2VhcmNoXHJcbmFzeW5jIGZ1bmN0aW9uIGhhbmRsZVNlYXJjaCgpIHtcclxuICBsZXQgY2l0eU5hbWUgPSBzZWFyY2hJbnB1dC52YWx1ZTtcclxuXHJcbiAgaWYgKGNpdHlOYW1lKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBnZXRXZWF0aGVyRGF0YShjaXR5TmFtZSwgdW5pdHMpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJFcnJvciBoYW5kbGluZyBTZWFyY2g6IFwiLCBlcnJvcik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHNlYXJjaElucHV0LnZhbHVlID0gJyc7XHJcbn1cclxuXHJcbi8vIFNlYXJjaCBvbiBFbnRlciBrZXkgcHJlc3Ncclxuc2VhcmNoSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgYXN5bmMgKGUpID0+IHtcclxuICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xyXG4gICAgYXdhaXQgaGFuZGxlU2VhcmNoKCk7XHJcbiAgfVxyXG59KTtcclxuXHJcbi8vIFNlYXJjaCBvbiBjbGljayBvbiBzZWFyY2ggaWNvblxyXG5zZWFyY2hJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoKSA9PiB7XHJcbiAgYXdhaXQgaGFuZGxlU2VhcmNoKCk7XHJcbn0pO1xyXG5cclxuLy8gaW5pdGFsIExvYWRpbmcgV2VhdGhlciBEYXRhXHJcbmdldFdlYXRoZXJEYXRhKFwiTG9uZG9uXCIsIHVuaXRzKTtcclxuXHJcbi8vIEV2ZW50IExpc3RlbmVyc1xyXG5zd2l0Y2hVbml0cy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIGlmICh1bml0cyA9PT0gXCJtZXRyaWNcIikge1xyXG4gICAgc3dpdGNoVW5pdHMuaW5uZXJIVE1MID0gXCJEaXNwbGF5IENcIjtcclxuICAgIHVuaXRzID0gXCJpbXBlcmlhbFwiO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBzd2l0Y2hVbml0cy5pbm5lckhUTUwgPSBcIkRpc3BsYXkgRlwiO1xyXG4gICAgdW5pdHMgPSBcIm1ldHJpY1wiO1xyXG4gIH1cclxuXHJcbiAgZ2V0V2VhdGhlckRhdGEobGFzdENpdHlOYW1lLCB1bml0cyk7XHJcbn0pO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=