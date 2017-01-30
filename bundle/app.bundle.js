webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(161);


/***/ },

/***/ 9:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(global) {/*! *****************************************************************************
	Copyright (c) Microsoft Corporation. All rights reserved.
	Licensed under the Apache License, Version 2.0 (the "License"); you may not use
	this file except in compliance with the License. You may obtain a copy of the
	License at http://www.apache.org/licenses/LICENSE-2.0
	
	THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
	KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
	WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
	MERCHANTABLITY OR NON-INFRINGEMENT.
	
	See the Apache Version 2.0 License for specific language governing permissions
	and limitations under the License.
	***************************************************************************** */
	/* global global, define, System, Reflect, Promise */
	var __extends;
	var __assign;
	var __rest;
	var __decorate;
	var __param;
	var __metadata;
	var __awaiter;
	var __generator;
	(function (factory) {
	    var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports) { factory(createExporter(root, createExporter(exports))); }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    }
	    else if (typeof module === "object" && typeof module.exports === "object") {
	        factory(createExporter(root, createExporter(module.exports)));
	    }
	    else {
	        factory(createExporter(root));
	    }
	    function createExporter(exports, previous) {
	        return function (id, v) { return exports[id] = previous ? previous(id, v) : v; };
	    }
	})
	(function (exporter) {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	
	    __extends = function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	
	    __assign = Object.assign || function (t) {
	        for (var s, i = 1, n = arguments.length; i < n; i++) {
	            s = arguments[i];
	            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
	        }
	        return t;
	    };
	
	    __rest = function (s, e) {
	        var t = {};
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
	            t[p] = s[p];
	        if (s != null && typeof Object.getOwnPropertySymbols === "function")
	            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
	                t[p[i]] = s[p[i]];
	        return t;
	    };
	
	    __decorate = function (decorators, target, key, desc) {
	        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	        return c > 3 && r && Object.defineProperty(target, key, r), r;
	    };
	
	    __param = function (paramIndex, decorator) {
	        return function (target, key) { decorator(target, key, paramIndex); }
	    };
	
	    __metadata = function (metadataKey, metadataValue) {
	        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
	    };
	
	    __awaiter = function (thisArg, _arguments, P, generator) {
	        return new (P || (P = Promise))(function (resolve, reject) {
	            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
	            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
	            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
	            step((generator = generator.apply(thisArg, _arguments || [])).next());
	        });
	    };
	
	    __generator = function (thisArg, body) {
	        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
	        return { next: verb(0), "throw": verb(1), "return": verb(2) };
	        function verb(n) { return function (v) { return step([n, v]); }; }
	        function step(op) {
	            if (f) throw new TypeError("Generator is already executing.");
	            while (_) try {
	                if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
	                if (y = 0, t) op = [0, t.value];
	                switch (op[0]) {
	                    case 0: case 1: t = op; break;
	                    case 4: _.label++; return { value: op[1], done: false };
	                    case 5: _.label++; y = op[1]; op = [0]; continue;
	                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
	                    default:
	                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
	                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
	                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
	                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
	                        if (t[2]) _.ops.pop();
	                        _.trys.pop(); continue;
	                }
	                op = body.call(thisArg, _);
	            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
	            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
	        }
	    };
	
	    exporter("__extends", __extends);
	    exporter("__assign", __assign);
	    exporter("__rest", __rest);
	    exporter("__decorate", __decorate);
	    exporter("__param", __param);
	    exporter("__metadata", __metadata);
	    exporter("__awaiter", __awaiter);
	    exporter("__generator", __generator);
	});
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },

/***/ 12:
/***/ function(module, exports) {

	/// <reference path="declare/index.d.ts" />
	console.log(1234321);
	
	export * from './helper';
	export * from './class';
	export * from './Component';

/***/ },

/***/ 20:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(12), __webpack_require__(137), __webpack_require__(158), __webpack_require__(151), __webpack_require__(156), __webpack_require__(147), __webpack_require__(145), __webpack_require__(143), __webpack_require__(139), __webpack_require__(141), __webpack_require__(160)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, ts_react_app_web_1, App_1, Storage_1, Redux_1, Request_1, Prompt_1, Navigation_1, Error_1, AsyncOperation_1, Device_1, User_1) {
	    "use strict";
	    var _Factory = (function () {
	        function _Factory() {
	            this.App = App_1.App.instance;
	            this.Storage = Storage_1.Storage.instance;
	            this.Redux = Redux_1.Redux.instance;
	            this.Request = Request_1.Request.instance;
	            this.Prompt = Prompt_1.Prompt.instance;
	            this.Navigation = Navigation_1.Navigation.instance;
	            this.ErrorHandler = Error_1.ErrorHandler.instance;
	            this.AsyncOperation = AsyncOperation_1.AsyncOperation.instance;
	            this.Device = Device_1.Device.instance;
	            this.User = User_1.User.instance;
	        }
	        return _Factory;
	    }());
	    exports.Factory = new _Factory();
	    ts_react_app_web_1.setWebFactory(exports.Factory);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },

/***/ 43:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(305)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, base_1) {
	    "use strict";
	    function __export(m) {
	        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	    }
	    __export(base_1);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },

/***/ 44:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(149), __webpack_require__(150)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, appGlobal_1, user_1) {
	    "use strict";
	    function __export(m) {
	        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	    }
	    __export(appGlobal_1);
	    __export(user_1);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },

/***/ 45:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(307)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, helper_1) {
	    "use strict";
	    function __export(m) {
	        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	    }
	    console.log(1234321);
	    __export(helper_1);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },

/***/ 78:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(135), __webpack_require__(306)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, Header_1, common_1) {
	    "use strict";
	    function __export(m) {
	        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	    }
	    __export(Header_1);
	    __export(common_1);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },

/***/ 79:
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },

/***/ 131:
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },

/***/ 133:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(9), __webpack_require__(5), __webpack_require__(121), __webpack_require__(43), __webpack_require__(134), __webpack_require__(78)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, tslib_1, React, react_router_1, base_1, SceneContainer_1, common_1) {
	    "use strict";
	    var Root = (function (_super) {
	        tslib_1.__extends(Root, _super);
	        function Root() {
	            return _super !== null && _super.apply(this, arguments) || this;
	        }
	        Root.prototype.render = function () {
	            return (React.createElement("div", { className: classNames.container },
	                React.createElement(common_1.Header, null),
	                React.createElement("div", { className: classNames.main },
	                    React.createElement(react_router_1.Router, { history: react_router_1.hashHistory },
	                        React.createElement(react_router_1.Route, { path: "/", component: SceneContainer_1.default })))));
	        };
	        return Root;
	    }(base_1.AWebComponent));
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.default = Root;
	    var classNames = {
	        container: 'bodyContainer overflowY',
	        main: 'main'
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },

/***/ 134:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(9), __webpack_require__(5), __webpack_require__(43), __webpack_require__(78), __webpack_require__(69), __webpack_require__(20)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, tslib_1, React, base_1, common_1, react_redux_1, Factory_1) {
	    "use strict";
	    var SceneContainer = (function (_super) {
	        tslib_1.__extends(SceneContainer, _super);
	        function SceneContainer() {
	            return _super !== null && _super.apply(this, arguments) || this;
	        }
	        SceneContainer.prototype.render = function () {
	            var spinnerShow = this.props.spinnerShow;
	            return (React.createElement("div", { className: classNames.container },
	                this.props.children,
	                React.createElement(common_1.LoadingSpinner, { show: spinnerShow, imgSrc: Factory_1.Factory.App.getImageFullPath('loading.gif') })));
	        };
	        return SceneContainer;
	    }(base_1.AWebComponent));
	    var classNames = {
	        container: 'bodyContainer'
	    };
	    function select(state) {
	        return {
	            spinnerShow: state.appGlobal.spinnerShow
	        };
	    }
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.default = react_redux_1.connect(select)(SceneContainer);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },

/***/ 135:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(9), __webpack_require__(5), __webpack_require__(43)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, tslib_1, React, base_1) {
	    "use strict";
	    var Header = (function (_super) {
	        tslib_1.__extends(Header, _super);
	        function Header() {
	            return _super !== null && _super.apply(this, arguments) || this;
	        }
	        Header.prototype.render = function () {
	            return (React.createElement("div", { className: classNames.container }));
	        };
	        return Header;
	    }(base_1.AWebComponent));
	    exports.Header = Header;
	    var classNames = {
	        container: 'header'
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },

/***/ 136:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(9), __webpack_require__(12), __webpack_require__(20), __webpack_require__(45)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, tslib_1, ts_react_app_web_1, Factory_1, helper_1) {
	    "use strict";
	    var App = (function (_super) {
	        tslib_1.__extends(App, _super);
	        function App() {
	            return _super.call(this) || this;
	        }
	        Object.defineProperty(App.prototype, "AppConfig", {
	            get: function () {
	                if (!this._appConfig) {
	                    this._appConfig =
	                        {
	                            token: '',
	                            listViewPageSize: 20,
	                            staticResourceFolderPath: './static/'
	                        };
	                }
	                return this._appConfig;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        App.prototype.checkUpgrade = function () {
	            return 0;
	        };
	        App.prototype.clearState = function () {
	            Factory_1.Factory.Storage.remove(this.lastStateInStorageKey);
	            Factory_1.Factory.Redux.changeState(Factory_1.Factory.Redux.action.appReset());
	        };
	        App.prototype.setInitData = function () {
	            this.initData = {};
	            return Factory_1.Factory.AsyncOperation.getResolve();
	        };
	        App.prototype.upgrade = function () {
	            this.reset('即将进行版本更新！');
	        };
	        App.prototype.init = function () {
	            var _this = this;
	            window.onerror = function (msg, url, num) {
	                Factory_1.Factory.ErrorHandler.hasPendingGlobalError = true;
	                Factory_1.Factory.ErrorHandler.log({ msg: msg, url: url, lineNum: num });
	                _this.reset();
	            };
	            var isRefresh = false;
	            window.onbeforeunload = function () {
	                isRefresh = true;
	            };
	            window.onunload = function () {
	                if (Factory_1.Factory.ErrorHandler.hasPendingGlobalError || isRefresh) {
	                    Factory_1.Factory.Storage.remove(_this.lastStateInStorageKey);
	                    return;
	                }
	                Factory_1.Factory.Storage.setValue(_this.lastStateInStorageKey, JSON.stringify({
	                    lastUnloadTime: new Date().getTime(),
	                    state: Factory_1.Factory.Redux.getState()
	                }));
	            };
	            var initState = function () {
	                return _this.setInitData().then(function () {
	                    try {
	                        if (!_this.initData) {
	                            return Factory_1.Factory.AsyncOperation.getReject();
	                        }
	                        var check = _this.checkUpgrade();
	                        if (check != 2) {
	                            Factory_1.Factory.Redux.changeState(Factory_1.Factory.Redux.action.appInit(_this.initData));
	                            return Factory_1.Factory.AsyncOperation.getResolve();
	                        }
	                        else {
	                            _this.upgrade();
	                            return Factory_1.Factory.AsyncOperation.getReject();
	                        }
	                    }
	                    catch (e) {
	                        Factory_1.Factory.ErrorHandler.log(e);
	                        return Factory_1.Factory.AsyncOperation.getReject();
	                    }
	                });
	            };
	            var lastUnLoadInfoStr = Factory_1.Factory.Storage.getValue(this.lastStateInStorageKey);
	            try {
	                if (lastUnLoadInfoStr) {
	                    var lastUnLoadInfo = helper_1.strHp.toJson(lastUnLoadInfoStr);
	                    if (lastUnLoadInfo && lastUnLoadInfo.lastUnloadTime && lastUnLoadInfo.state && !this.isRefreshStateInStroage(lastUnLoadInfo.lastUnloadTime, 0)) {
	                        lastUnLoadInfo.state.appGlobal.spinnerShow = false;
	                        Factory_1.Factory.Redux.changeState(Factory_1.Factory.Redux.action.appRecoverByLastUnLoadState(lastUnLoadInfo.state));
	                    }
	                }
	            }
	            catch (e) {
	                Factory_1.Factory.ErrorHandler.log(e);
	            }
	            return initState();
	        };
	        App.prototype.spinnerShow = function (show) {
	            Factory_1.Factory.Redux.changeState(Factory_1.Factory.Redux.action.appSpinnerShow({ show: show }));
	        };
	        App.prototype.getImageFullPath = function (imgName) {
	            return this.AppConfig.staticResourceFolderPath + 'img/' + imgName;
	        };
	        return App;
	    }(ts_react_app_web_1.AWebApp));
	    App.instance = new App();
	    exports.App = App;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },

/***/ 137:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(136)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, App_1) {
	    "use strict";
	    function __export(m) {
	        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	    }
	    __export(App_1);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },

/***/ 138:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(9), __webpack_require__(12), __webpack_require__(20)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, tslib_1, ts_react_app_web_1, Factory_1) {
	    "use strict";
	    var AsyncOperation = (function (_super) {
	        tslib_1.__extends(AsyncOperation, _super);
	        function AsyncOperation() {
	            return _super.call(this) || this;
	        }
	        AsyncOperation.prototype.prepare = function () {
	            Factory_1.Factory.App.spinnerShow(true);
	        };
	        AsyncOperation.prototype.finally = function () {
	            setTimeout(function () {
	                Factory_1.Factory.App.spinnerShow(false);
	            }, 300);
	        };
	        AsyncOperation.prototype.success = function () {
	        };
	        AsyncOperation.prototype.fail = function () {
	        };
	        return AsyncOperation;
	    }(ts_react_app_web_1.AWebAsyncOperation));
	    AsyncOperation.instance = new AsyncOperation();
	    exports.AsyncOperation = AsyncOperation;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },

/***/ 139:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(138)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, AsyncOperation_1) {
	    "use strict";
	    function __export(m) {
	        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	    }
	    __export(AsyncOperation_1);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },

/***/ 140:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(9), __webpack_require__(12)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, tslib_1, ts_react_app_web_1) {
	    "use strict";
	    var Device = (function (_super) {
	        tslib_1.__extends(Device, _super);
	        function Device() {
	            return _super.call(this) || this;
	        }
	        Object.defineProperty(Device.prototype, "PxRatio", {
	            get: function () {
	                return 1;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        return Device;
	    }(ts_react_app_web_1.AWebDevice));
	    Device.instance = new Device();
	    exports.Device = Device;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },

/***/ 141:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(140)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, Device_1) {
	    "use strict";
	    function __export(m) {
	        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	    }
	    __export(Device_1);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },

/***/ 142:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(9), __webpack_require__(12)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, tslib_1, ts_react_app_web_1) {
	    "use strict";
	    var ErrorHandler = (function (_super) {
	        tslib_1.__extends(ErrorHandler, _super);
	        function ErrorHandler() {
	            return _super.call(this) || this;
	        }
	        return ErrorHandler;
	    }(ts_react_app_web_1.AWebErrorHandler));
	    ErrorHandler.instance = new ErrorHandler();
	    exports.ErrorHandler = ErrorHandler;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },

/***/ 143:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(142)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, ErrorHandler_1) {
	    "use strict";
	    function __export(m) {
	        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	    }
	    __export(ErrorHandler_1);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },

/***/ 144:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(9), __webpack_require__(12)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, tslib_1, ts_react_app_web_1) {
	    "use strict";
	    var Navigation = (function (_super) {
	        tslib_1.__extends(Navigation, _super);
	        function Navigation() {
	            return _super.call(this) || this;
	        }
	        Navigation.prototype.checkPreChange = function () {
	            return true;
	        };
	        return Navigation;
	    }(ts_react_app_web_1.AWebNavigation));
	    Navigation.instance = new Navigation();
	    exports.Navigation = Navigation;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },

/***/ 145:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(144)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, Navigation_1) {
	    "use strict";
	    function __export(m) {
	        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	    }
	    __export(Navigation_1);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },

/***/ 146:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(9), __webpack_require__(12)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, tslib_1, ts_react_app_web_1) {
	    "use strict";
	    var Prompt = (function (_super) {
	        tslib_1.__extends(Prompt, _super);
	        function Prompt() {
	            return _super.call(this) || this;
	        }
	        Prompt.prototype.createPopUp = function (_title, _msg, _type, _okCallBack, _cancelCallBack) {
	        };
	        Prompt.prototype.createToast = function (_msg, _onShow, _onHide) {
	        };
	        return Prompt;
	    }(ts_react_app_web_1.AWebPrompt));
	    Prompt.instance = new Prompt();
	    exports.Prompt = Prompt;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },

/***/ 147:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(146)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, Prompt_1) {
	    "use strict";
	    function __export(m) {
	        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	    }
	    __export(Prompt_1);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },

/***/ 148:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(9), __webpack_require__(12), __webpack_require__(153), __webpack_require__(44)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, tslib_1, ts_react_app_web_1, reducers_1, action) {
	    "use strict";
	    var Redux = (function (_super) {
	        tslib_1.__extends(Redux, _super);
	        function Redux() {
	            var _this = _super.call(this, reducers_1.default) || this;
	            _this.action = action;
	            return _this;
	        }
	        return Redux;
	    }(ts_react_app_web_1.AWebRedux));
	    Redux.instance = new Redux();
	    exports.Redux = Redux;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },

/***/ 149:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
	    "use strict";
	    exports.app_exit = 'app_exit';
	    function appExit(newValue) {
	        return {
	            type: exports.app_exit,
	            newValue: newValue
	        };
	    }
	    exports.appExit = appExit;
	    exports.app_reset = 'app_reset';
	    function appReset() {
	        return {
	            type: exports.app_reset
	        };
	    }
	    exports.appReset = appReset;
	    exports.app_init = "app_init";
	    function appInit(newValue) {
	        return {
	            type: exports.app_init,
	            newValue: newValue
	        };
	    }
	    exports.appInit = appInit;
	    exports.app_recoverByLastUnLoadState = "app_recoverByLastUnLoadState";
	    function appRecoverByLastUnLoadState(newValue) {
	        return {
	            type: exports.app_recoverByLastUnLoadState,
	            newValue: newValue
	        };
	    }
	    exports.appRecoverByLastUnLoadState = appRecoverByLastUnLoadState;
	    exports.app_spinner_show = "app_spinner_show";
	    function appSpinnerShow(newValue) {
	        return {
	            type: exports.app_spinner_show,
	            newValue: newValue
	        };
	    }
	    exports.appSpinnerShow = appSpinnerShow;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },

/***/ 150:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
	    "use strict";
	    exports.user_logout = 'user_logout';
	    function userLogout() {
	        return {
	            type: exports.user_logout
	        };
	    }
	    exports.userLogout = userLogout;
	    exports.user_login = 'user_login';
	    function userLogin(newValue) {
	        return {
	            type: exports.user_login,
	            newValue: newValue
	        };
	    }
	    exports.userLogin = userLogin;
	    exports.user_updateInfo = 'user_updateInfo';
	    function userUpdateInfo(newValue) {
	        return {
	            type: exports.user_updateInfo,
	            newValue: newValue
	        };
	    }
	    exports.userUpdateInfo = userUpdateInfo;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },

/***/ 151:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(148)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, Redux_1) {
	    "use strict";
	    function __export(m) {
	        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	    }
	    __export(Redux_1);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },

/***/ 152:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(44), __webpack_require__(45)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, ac, helper_1) {
	    "use strict";
	    var appGlobalDefault = {
	        spinnerShow: false
	    };
	    var appGlobalHandler = (_a = {},
	        _a[ac.app_reset] = function () {
	            return helper_1.objHp.cloneDeep(appGlobalDefault);
	        },
	        _a[ac.app_recoverByLastUnLoadState] = function (_state, newValue) {
	            return newValue.appGlobal;
	        },
	        _a[ac.app_exit] = function (state, newValue) {
	            return Object.assign({}, state, newValue);
	        },
	        _a[ac.app_init] = function (state, _newValue) {
	            var v = {};
	            return Object.assign({}, state, v);
	        },
	        _a[ac.app_spinner_show] = function (state, newValue) {
	            var v = {
	                spinnerShow: newValue.show
	            };
	            return Object.assign({}, state, v);
	        },
	        _a);
	    exports.appGlobal = function (state, action) {
	        if (state === void 0) { state = helper_1.objHp.cloneDeep(appGlobalDefault); }
	        var _handler = appGlobalHandler[action.type];
	        if (_handler) {
	            return _handler(state, action.newValue);
	        }
	        return state;
	    };
	    var _a;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },

/***/ 153:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(77), __webpack_require__(152), __webpack_require__(154)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, redux_1, appGlobal_1, user_1) {
	    "use strict";
	    var rootReducer = redux_1.combineReducers({
	        appGlobal: appGlobal_1.appGlobal,
	        userInfo: user_1.userInfo
	    });
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.default = rootReducer;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },

/***/ 154:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(44), __webpack_require__(45)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, ac, helper_1) {
	    "use strict";
	    var userInfoDefault = {
	        nowUser: undefined
	    };
	    var userInfoHandler = (_a = {},
	        _a[ac.app_reset] = function () {
	            return helper_1.objHp.cloneDeep(userInfoDefault);
	        },
	        _a[ac.app_recoverByLastUnLoadState] = function (_state, newValue) {
	            return newValue.user;
	        },
	        _a[ac.app_init] = function (state, _newValue) {
	            var v = {};
	            return Object.assign({}, state, v);
	        },
	        _a[ac.user_logout] = function (state) {
	            return Object.assign({}, state, { nowUser: undefined });
	        },
	        _a[ac.user_login] = function (state, newValue) {
	            var v = {
	                nowUser: newValue.nowUser
	            };
	            return Object.assign({}, state, v);
	        },
	        _a[ac.user_updateInfo] = function (state, newValue) {
	            if (!newValue)
	                return state;
	            var v = {
	                nowUser: Object.assign({}, state.nowUser, newValue)
	            };
	            return Object.assign({}, state, v);
	        },
	        _a);
	    exports.userInfo = function (state, action) {
	        if (state === void 0) { state = helper_1.objHp.cloneDeep(userInfoDefault); }
	        var _handler = userInfoHandler[action.type];
	        if (_handler) {
	            return _handler(state, action.newValue);
	        }
	        return state;
	    };
	    var _a;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },

/***/ 155:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(9), __webpack_require__(12), __webpack_require__(20)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, tslib_1, ts_react_app_web_1, Factory_1) {
	    "use strict";
	    var debug = false;
	    var hostUrl = debug ? 'http://ycytest.5fengshou.com' : 'http://weixin.4008268365.com';
	    var Request = (function (_super) {
	        tslib_1.__extends(Request, _super);
	        function Request() {
	            var _this = _super.call(this) || this;
	            _this.setHostUrl(hostUrl);
	            return _this;
	        }
	        Request.prototype.sealPostData = function (postData) {
	            if (!postData)
	                return { token: Factory_1.Factory.App.AppConfig.token };
	            var _data = postData;
	            _data["token"] = Factory_1.Factory.App.AppConfig.token;
	            return _data;
	        };
	        Request.prototype.postGlobalHandler = function (url, postData) {
	            var error = this.createError();
	            error.postData = postData;
	            return this.post(url, postData)
	                .then(function (data) {
	                error.returnData = data;
	                if (!data || data.state == null) {
	                    error.message = '返回的数据结构或数据类型错误！';
	                    if (data && data.msg) {
	                        error.message = data.msg;
	                    }
	                    error.state = 2;
	                    Factory_1.Factory.ErrorHandler.log(error);
	                    Factory_1.Factory.Prompt.promptToast('请求超时！请稍后再试！');
	                    return Factory_1.Factory.AsyncOperation.getReject(error);
	                }
	                if (data.msg == "token_error") {
	                    Factory_1.Factory.Redux.changeState(Factory_1.Factory.Redux.action.userLogout());
	                    Factory_1.Factory.Navigation.toLogin(true);
	                    error.message = '会话状态超时！';
	                    error.state = 3;
	                    Factory_1.Factory.ErrorHandler.log(error);
	                    Factory_1.Factory.Prompt.promptToast(error.message);
	                    return Factory_1.Factory.AsyncOperation.getReject(error);
	                }
	                if (!data.state) {
	                    error.message = data.msg ? data.msg : '操作失败！';
	                    Factory_1.Factory.Prompt.failPopUp(error.message);
	                    return Factory_1.Factory.AsyncOperation.getReject(error);
	                }
	                return Factory_1.Factory.AsyncOperation.getResolve(data.dataList);
	            }, function (e) {
	                error.message = '通信异常！';
	                error.returnData = e;
	                error.state = 1;
	                Factory_1.Factory.ErrorHandler.log(error);
	                Factory_1.Factory.Prompt.promptToast('请求超时！请稍后再试！');
	                return Factory_1.Factory.AsyncOperation.getReject(error);
	            });
	        };
	        return Request;
	    }(ts_react_app_web_1.AWebRequest));
	    Request.instance = new Request();
	    exports.Request = Request;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },

/***/ 156:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(155)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, Request_1) {
	    "use strict";
	    function __export(m) {
	        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	    }
	    __export(Request_1);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },

/***/ 157:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(9), __webpack_require__(12)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, tslib_1, ts_react_app_web_1) {
	    "use strict";
	    var Storage = (function (_super) {
	        tslib_1.__extends(Storage, _super);
	        function Storage() {
	            return _super.call(this) || this;
	        }
	        return Storage;
	    }(ts_react_app_web_1.AWebStorage));
	    Storage.instance = new Storage();
	    exports.Storage = Storage;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },

/***/ 158:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(157)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, Storage_1) {
	    "use strict";
	    function __export(m) {
	        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	    }
	    __export(Storage_1);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },

/***/ 159:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(9), __webpack_require__(12), __webpack_require__(20)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, tslib_1, ts_react_app_web_1, Factory_1) {
	    "use strict";
	    var User = (function (_super) {
	        tslib_1.__extends(User, _super);
	        function User() {
	            return _super.call(this) || this;
	        }
	        User.prototype.getUser = function () {
	            return Factory_1.Factory.Redux.getState().user.nowUser;
	        };
	        User.prototype.isLogin = function () {
	            var user = this.getUser();
	            if (!user || !user.id) {
	                return false;
	            }
	            return true;
	        };
	        return User;
	    }(ts_react_app_web_1.AWebUser));
	    User.instance = new User();
	    exports.User = User;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },

/***/ 160:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(159)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, User_1) {
	    "use strict";
	    function __export(m) {
	        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	    }
	    __export(User_1);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },

/***/ 161:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(5), __webpack_require__(52), __webpack_require__(69), __webpack_require__(133), __webpack_require__(20), __webpack_require__(301), __webpack_require__(300)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, React, react_dom_1, react_redux_1, Root_1, Factory_1) {
	    "use strict";
	    Factory_1.Factory.App.init().then(function () {
	        try {
	            var rootElement = document.getElementById('container');
	            react_dom_1.render(React.createElement(react_redux_1.Provider, { store: Factory_1.Factory.Redux.Store },
	                React.createElement(Root_1.default, null)), rootElement);
	        }
	        catch (e) {
	            Factory_1.Factory.ErrorHandler.hasPendingGlobalError = true;
	            Factory_1.Factory.ErrorHandler.log(e);
	            Factory_1.Factory.App.reset();
	        }
	    }, function () { });
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },

/***/ 162:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(79)();
	// imports
	
	
	// module
	exports.push([module.id, "body{background-color:#ececec;overflow:hidden}.bodyContainer,body{width:100%;height:100%}.bodyContainer .overflowY{overflow-x:hidden;overflow-y:auto}.header{width:100%;height:120px}.header,.main{background-color:#fff}.main{margin-top:30px;width:90%;margin-left:auto;margin-right:auto}", ""]);
	
	// exports


/***/ },

/***/ 163:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(79)();
	// imports
	
	
	// module
	exports.push([module.id, "a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:\"\";content:none}table{border-collapse:collapse;border-spacing:0}", ""]);
	
	// exports


/***/ },

/***/ 300:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(162);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(131)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/less-loader/index.js!./main.less", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/less-loader/index.js!./main.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 301:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(163);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(131)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/less-loader/index.js!./reset.less", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/less-loader/index.js!./reset.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 305:
/***/ function(module, exports) {

	export * from './AWebComponent';
	export * from './AWebSceneComponent';

/***/ },

/***/ 306:
/***/ function(module, exports) {

	export * from './Centering';
	export * from './LoadingSpinner';
	export * from './MaskLayer';
	export * from './EnlargeElement';
	
	


/***/ },

/***/ 307:
/***/ function(module, exports) {

	export * from 'ts-react-app-infrastructure/helper';
	export * from './cookieHp';


/***/ }

});