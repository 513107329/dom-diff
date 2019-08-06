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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/action.js":
/*!***********************!*\
  !*** ./src/action.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const ATTRS = \"ATTRS\";\r\nconst REPLACE = \"REPLACE\";\r\nconst TEXT = \"TEXT\";\r\nconst REMOVE = \"REMOVE\";\r\n\r\nmodule.exports = { ATTRS, REPLACE, TEXT, REMOVE }\n\n//# sourceURL=webpack:///./src/action.js?");

/***/ }),

/***/ "./src/diff.js":
/*!*********************!*\
  !*** ./src/diff.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const { ATTRS, REPLACE, TEXT, REMOVE } = __webpack_require__(/*! ./action */ \"./src/action.js\");\r\n\r\nlet Index = 0;\r\n\r\nfunction diff(oldNode, newNode) {\r\n  let patches = {};\r\n  let index = 0;\r\n  walk(oldNode, newNode, index, patches);\r\n  return patches\r\n}\r\n\r\nfunction isString(node) {\r\n  return Object.prototype.toString.call(node) === \"[object String]\"\r\n}\r\n\r\nfunction walk(oldNode, newNode, index, patches) {\r\n  let currentPatch = [];\r\n  if (!newNode) {\r\n    currentPatch.push({ type: REMOVE, index })\r\n  } else if (isString(oldNode) && isString(newNode)) {\r\n    if (oldNode !== newNode) {\r\n      currentPatch.push({ type: TEXT, text: newNode })\r\n    }\r\n  } else if (oldNode.tagName === newNode.tagName) {\r\n    let attrs = diffAttr(oldNode.attrs, newNode.attrs);\r\n    if (Object.keys(attrs).length > 0) {\r\n      currentPatch.push({ type: ATTRS, attrs })\r\n    }\r\n    diffChildren(oldNode.children, newNode.children, patches)\r\n  } else {\r\n    currentPatch.push({ type: REPLACE, newNode })\r\n  }\r\n\r\n  if (currentPatch.length > 0) {\r\n    patches[index] = currentPatch;\r\n    console.log(patches)\r\n  }\r\n}\r\n\r\nfunction diffAttr(oldAttrs, newAttrs) {\r\n  let patch = {};\r\n  for (let key in oldAttrs) {\r\n    if (oldAttrs[key] !== newAttrs[key]) {\r\n      patch[key] = newAttrs[key]\r\n    }\r\n  }\r\n\r\n  for (let key in newAttrs) {\r\n    if (!oldAttrs.hasOwnProperty(key)) {\r\n      patch[key] = newAttrs[key]\r\n    }\r\n  }\r\n\r\n  return patch\r\n}\r\n\r\nfunction diffChildren(oldChildren, newChildren, patches) {\r\n  oldChildren.forEach((child, idx) => {\r\n    walk(child, newChildren[idx], ++Index, patches)\r\n  })\r\n}\r\n\r\nmodule.exports = diff\n\n//# sourceURL=webpack:///./src/diff.js?");

/***/ }),

/***/ "./src/element.js":
/*!************************!*\
  !*** ./src/element.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const utils = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\r\n\r\nfunction createElement(tagName, attrs, children) {\r\n  return new Element(tagName, attrs, children)\r\n}\r\n\r\nclass Element {\r\n  constructor(tagName, attrs, children) {\r\n    this.tagName = tagName;\r\n    this.attrs = attrs;\r\n    this.children = children\r\n  }\r\n\r\n  render() {\r\n    let element = document.createElement(this.tagName);\r\n    for(let attr of Object.keys(this.attrs)) {\r\n      utils.setAttr(element, attr, this.attrs[attr])\r\n    }\r\n    this.children.forEach(child => {\r\n      let node = child instanceof Element ? child.render() : document.createTextNode(child);\r\n      element.appendChild(node);\r\n    })\r\n    return element\r\n  }\r\n}\r\n\r\nmodule.exports = { createElement }\n\n//# sourceURL=webpack:///./src/element.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const { createElement } = __webpack_require__(/*! ./element */ \"./src/element.js\");\r\nconst diff = __webpack_require__(/*! ./diff */ \"./src/diff.js\");\r\nconst patch = __webpack_require__(/*! ./patch */ \"./src/patch.js\");\r\n\r\nconst uli = createElement(\"ul\", { class: \"list\", id: \"list\" }, [\r\n  createElement(\"li\", { class: \"item\", id: \"item\" }, [\"1\"]),\r\n  createElement(\"li\", { class: \"item\", id: \"item\" }, [\"2\"]),\r\n  createElement(\"li\", { class: \"item\", id: \"item\" }, [\"3\"])\r\n])\r\nconst uli1 = createElement(\"ul\", { class: \"list-group\", id: \"list-group\" }, [\r\n  createElement(\"li\", { class: \"item\" }, [\"2\"]),\r\n  createElement(\"li\", { class: \"item\", id: \"item\" }, [\"3\"]),\r\n])\r\n\r\nlet ul = uli.render();\r\n\r\ndocument.body.appendChild(ul)\r\n\r\nconst patches = diff(uli, uli1);\r\n\r\npatch(ul, patches)\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/patch.js":
/*!**********************!*\
  !*** ./src/patch.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const { ATTRS, REPLACE, TEXT, REMOVE } = __webpack_require__(/*! ./action */ \"./src/action.js\");\r\nconst util = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\r\nlet Index = 0;\r\nlet allPatches;\r\n\r\nfunction patch(node, patches) {\r\n  allPatches = patches;\r\n  walk(node);\r\n}\r\n\r\nfunction walk(node) {\r\n  let currentPatch = allPatches[Index++];\r\n\r\n  (node.childNodes || []).forEach(child => {\r\n    walk(child)\r\n  })\r\n\r\n  if (currentPatch) {\r\n    doPatch(node, currentPatch)\r\n  }\r\n}\r\n\r\nfunction doPatch(node, currentPatches) {\r\n  currentPatches.forEach(patch => {\r\n    switch (patch.type) {\r\n      case ATTRS:\r\n        for (let key in patch.attrs) {\r\n          if (patch.attrs[key]) {\r\n            util.setAttr(node, key, patch.attrs[key])\r\n          } else {\r\n            node.removeAttribute(key)\r\n          }\r\n        }\r\n        break;\r\n      case REPLACE:\r\n        let newNode = (typeof patch.newNode === 'string') ? document.createTextNode(patch.newNode) : patch.newNode.render();\r\n        node.parentNode.replaceChild(node, newNode);\r\n        break;\r\n      case TEXT:\r\n        node.textContent = patch.text\r\n        break;\r\n      case REMOVE:\r\n        node.parentNode.removeChild(node)\r\n        break;\r\n      default:\r\n        break;\r\n    }\r\n  })\r\n}\r\n\r\nmodule.exports = patch\n\n//# sourceURL=webpack:///./src/patch.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\r\n  setAttr(element, attr, value) {\r\n    switch(attr) {\r\n      case \"style\":\r\n        element.style.cssText = value;\r\n        break;\r\n      case \"value\":\r\n        let tagName = element.tagName.toLowerCase();\r\n        if(tagName === 'input' || tagName === 'textarea') {\r\n          element.value = value\r\n        } else {\r\n          element.setAttribute(attr, value)\r\n        };\r\n        break;\r\n      default:\r\n        element.setAttribute(attr, value);\r\n        break;\r\n    }\r\n  }\r\n}\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ });