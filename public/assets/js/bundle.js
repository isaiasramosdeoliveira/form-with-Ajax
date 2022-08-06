/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/ValidForm.js":
/*!**********************************!*\
  !*** ./src/modules/ValidForm.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Valid)
/* harmony export */ });
/* harmony import */ var _result__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./result */ "./src/modules/result.js");
/* harmony import */ var _result__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_result__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



var Valid = /*#__PURE__*/function () {
  function Valid() {
    _classCallCheck(this, Valid);
  }

  _createClass(Valid, [{
    key: "validData",
    value: function validData(nome, sobrenome, idade) {
      if (nome, sobrenome, idade === "") {
        error.style.display = "block";
      }

      if (nome, sobrenome, idade !== "") {
        error.style.display = "none";
        success.style.display = "block";
        _result__WEBPACK_IMPORTED_MODULE_0___default()(nome, sobrenome, idade);
      }
    }
  }]);

  return Valid;
}();



/***/ }),

/***/ "./src/modules/requerition.js":
/*!************************************!*\
  !*** ./src/modules/requerition.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requeritionForm)
/* harmony export */ });
function requeritionForm(action, display) {
  var request = function request(obj) {
    var xhr = new XMLHttpRequest();
    xhr.open(obj.method, obj.url);
    xhr.send(null);
    xhr.addEventListener("load", function () {
      if (xhr.status >= 200 && xhr.status <= 300) {
        obj.success(xhr.response);
      } else {
        obj.error(xhr.status);
      }
    });
  };

  function requerition() {
    var href = action.getAttribute("href");
    var obj = {
      method: "GET",
      url: href,
      success: function success(response) {
        result(response);
      },
      error: function error(_error) {
        console.log(_error);
      }
    };
    request(obj);
  }

  function result(response) {
    return display.innerHTML = response;
  }

  requerition();
}

/***/ }),

/***/ "./src/modules/result.js":
/*!*******************************!*\
  !*** ./src/modules/result.js ***!
  \*******************************/
/***/ (() => {



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
/******/ 			// no module.id needed
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_requerition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/requerition */ "./src/modules/requerition.js");
/* harmony import */ var _modules_ValidForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/ValidForm */ "./src/modules/ValidForm.js");


var enviar = document.querySelector(".enviar");
var requisition = document.querySelector(".requerition");
var display = document.querySelector(".display");
document, addEventListener("click", function (e) {
  var action = e.target;
  e.preventDefault();

  if (action.classList.contains("requerition")) {
    enviar.style.display = "inline";
    var tag = action.tagName.toLowerCase();

    if (tag === "a") {
      var data = (0,_modules_requerition__WEBPACK_IMPORTED_MODULE_0__["default"])(action, display);
    }
  } // if(action.classList.contains("enviar")){
  //     let nome = document.querySelector("#nome")
  //     let sobrenome = document.querySelector("#sobrenome")
  //     let idade = document.querySelector("#idade")
  //     let valid = new Valid()
  //     valid.validData(nome.value, sobrenome.value, idade.value)
  // }

});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map