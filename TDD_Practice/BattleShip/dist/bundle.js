/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/app.css":
/*!***********************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/app.css ***!
  \***********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `
html{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root{
    --cell-bg: blue;
    --ship-bg: grey;
    --hit: red;
    --miss: blue;
    --fleet-bg-p: red;
    --fleet-bg-o: grey;
    --grey: grey;
}

body{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
}
.main{
    display: grid;
    place-items: center;
    align-items: center;
    overflow-x: hidden;
    width: 100vw;
}

.header{
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.766);
    height: 3rem;
    padding: 0 1rem;
    width: 100%;
}

section{
    display: grid;
    place-items: center;
}
.hero{
    padding: 1rem;
}
.ship-container{
    max-width: 19rem;
    display: flex;
    /* flex-direction: column; */
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: .5rem;
    /* margin: 1rem 0; */
    /* padding: 0 1rem; */
}

.ship-container #carrier{
    min-width: 10rem;
}

.ship-container #battleship{
    min-width: 8rem;
}

.ship-container #cruiser,.ship-container #submarine{
    min-width: 6rem;
}
.ship-container #destroyer{
    min-width: 4rem;
}

.buttons>button{
    border: 1px solid rgb(18, 139, 143);
    background-color: rgb(150, 200, 200);
    padding: 8px 1rem;
    border-radius: 3px;
    cursor: pointer;
    text-transform: uppercase;
    font-weight: 600;
}

.logo{
    color: red;
    font-size: large;
    font-weight: bold;
}

.board-area{
    position: relative;
    margin: 2rem;
    display: grid;
    align-items: center;
    justify-items: center;
    gap: 1rem;
}

.title{
    background-color: var(--fleet-bg-p);
    /* width: 100%; */
    display: grid;
    place-items: center;
    font-weight: 600;
    color: white;
    padding: .5rem;
    border-radius: .3rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-family: sans-serif;

}
.title.enemy{
    background-color: var(--fleet-bg-o);
}
.divder{
    display: none;
}
.divider.show{
    display: block;
    outline: 1px solid grey;
    width: 90vw;
    margin-top: 1rem;
}

.p-board, .e-board{
    position: relative;
    display: grid;
}

.ship-section{
    display: flex;
    margin-top: 1rem;
    height: 4rem;
}

.player-ship-indicator, .enemy-ship-indicator{
    margin-left: 1rem;
}
.col-count{
    display: flex;
    gap: 1px;
}
.row-count{
    position: absolute;
    left: -2rem;
    top: 4rem;
    display: grid;
    gap: .1rem;
}

.row-count>div, .col-count>div{
    background-color: transparent;
    outline: none;
    font-weight: 600;
    text-transform: uppercase;
}

.indicator-title{
    position: absolute;
    left: -4rem;
    bottom: +1.8rem;
    z-index: -10;
}

.e-graveyard{
    position: absolute;
    left: -.7rem;
}
.graveyard{
    display: none;
}
.shipyard, .graveyard, .e-graveyard{
    text-orientation: upright;
    transform: rotate(-90deg);
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 2px;
}
.board{
    display: grid;
    gap: 1px;
    grid-template-columns: repeat(10, 1fr);
    /* border: 1px solid skyblue; */
    height: 21.2rem;
    margin-bottom: 2rem;
}

.player-board, .enemy-board{
    width: min-content;
    height: min-content;
}

.cell{
    display: grid;
    height: 2rem;
    width: 2rem;
    outline: 1px solid skyblue;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
}

.fill{
    background-color: rgb(67, 147, 204);
}
.ship{
    border: 3px solid blue;
    background-color: gray;
    z-index: 100;
}
.firstCell{
    border: 2px solid red;
}


.ships{
    display: grid;
    gap: 5px;
}
.carrier{
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    color: black;
    border: 1px solid gray;
    /* width: 10rem; */
}
.carrier div{
    height: 2rem;
    width: 2rem;
}

/* .ship-container>div{
    display: flex;
    color: black;
    height: 2rem;
    width: min-content;
    border: 1px solid gray;
}
.ship-container>div>div{
    width: 2rem;
    height: 2rem;
} */

.wrong{
    border: 2px solid red;
}
.valid{
    border: 2px solid green;
}
.highlight{
    background-color: rgb(103, 194, 103);
}



.ship-container.vertical{
    display: flex;
}

/* .ship-container>div:hover{
    cursor: pointer;
    border: 2px solid rgb(41, 12, 231);
}
.ship-container>div.vertical{
    display: grid;
    grid-template-columns: 1fr;
    width: 2rem;
} */

/* .carrier.vertical{
    height: 10rem;
}
.battleship.vertical{
    height: 8rem;
}
.cruiser.vertical{
    height: 6rem;
}
.submarine.vertical{
    height: 6rem;
}
.destroyer.vertical{
    height: 4rem;
} */

.e-board{
    display: none;
    position: relative;
}

.e-board.show{
    display: grid;
    position: relative;
}

.hit{
    position: relative;
    font-size: 1.5rem;
    top: 0;
    left: 0;
    color: var(--hit);
    /* background-color: var(--grey); */
    display: flex;
    align-items: center;
    justify-content: center;
    /* border: 1px solid rgb(249, 13, 5); */
}

.missed{
    font-size: 1.5rem;
    font-weight: bolder;
    color: rgb(214, 224, 18);
}


/* ships */
.behicle{
    height: 2rem;
    width: 2rem;
}

.behicle span{
    /* border: 2px solid rgb(34, 22, 197); */
    position: absolute;
    background-color: rgba(83, 177, 177, 0.44);
    border-radius: 8px;
    z-index: -10;
}


/* horizontal and verticle sizes */
.behicle.verticle{
    .len5{
        display: block;
        height: calc(10rem + 4px);
        width: 2rem;
    }
    .len4{
        display: block;
        height: calc(8rem + 3px);
        width: 2rem;
    }

    .len3{
        display: block;
        height: calc(6rem + 2px);
        width: 2rem;
    }
    .len2{
        display: block;
        height: calc(4rem + 2px);
        width: 2rem;
    }
}

.behicle.horizontal{

    .len5{
        display: flex;
        width: calc(10rem + 4px);
        height: 2rem;
    }
    .len4{
        display: flex;
        width: calc(8rem + 3px);
        height: 2rem;
    }
    .len3{
        display: flex;
        width: calc(6rem + 2px);
        height: 2rem;
    }
    .len2{
        display: flex;
        width: calc(4rem + 2px);
        height: 2rem;
    }
}

/* indicator ships */
.player-ship-indicator,
.enemy-ship-indicator{
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
}
/* Common styles for player and enemy ship indicators */
.player-ship-indicator > div,
.enemy-ship-indicator > div {
    display: flex;
    margin: 0.3rem 0;
    width: fit-content;
}

/* Styles for inner divs within player and enemy ship indicators */
.player-ship-indicator > div > div,
.enemy-ship-indicator > div > div {
    height: .8rem;
    width: .8rem;
    border: 1px solid grey;
}

/* Styles for destroyed player and enemy ship indicators */
.player-ship-indicator > div.destroyed,
.enemy-ship-indicator > div.destroyed {
    /* border: 1px solid grey; */
    opacity: 0.4;
}

/* Styles for inner divs within destroyed player and enemy ship indicators */
.player-ship-indicator > div.destroyed > div,
.enemy-ship-indicator > div.destroyed > div {
    border: 1px solid grey;
}

/* |BreakPoint */

@media screen and (min-width: 700px) {
    .board-area{
        display: flex;
        gap: 2rem;
    }
    .divider.show{
        display: block;
        height: 24rem;
        width: 0;
        margin-right: 1rem;
        margin-top: 0;
    }
}`, "",{"version":3,"sources":["webpack://./src/app.css"],"names":[],"mappings":"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","sourcesContent":["\nhtml{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n:root{\n    --cell-bg: blue;\n    --ship-bg: grey;\n    --hit: red;\n    --miss: blue;\n    --fleet-bg-p: red;\n    --fleet-bg-o: grey;\n    --grey: grey;\n}\n\nbody{\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    overflow-x: hidden;\n}\n.main{\n    display: grid;\n    place-items: center;\n    align-items: center;\n    overflow-x: hidden;\n    width: 100vw;\n}\n\n.header{\n    display: grid;\n    grid-template-columns: 1fr 3fr 1fr;\n    align-items: center;\n    background-color: rgba(0, 0, 0, 0.766);\n    height: 3rem;\n    padding: 0 1rem;\n    width: 100%;\n}\n\nsection{\n    display: grid;\n    place-items: center;\n}\n.hero{\n    padding: 1rem;\n}\n.ship-container{\n    max-width: 19rem;\n    display: flex;\n    /* flex-direction: column; */\n    align-items: center;\n    justify-content: center;\n    flex-wrap: wrap;\n    gap: .5rem;\n    /* margin: 1rem 0; */\n    /* padding: 0 1rem; */\n}\n\n.ship-container #carrier{\n    min-width: 10rem;\n}\n\n.ship-container #battleship{\n    min-width: 8rem;\n}\n\n.ship-container #cruiser,.ship-container #submarine{\n    min-width: 6rem;\n}\n.ship-container #destroyer{\n    min-width: 4rem;\n}\n\n.buttons>button{\n    border: 1px solid rgb(18, 139, 143);\n    background-color: rgb(150, 200, 200);\n    padding: 8px 1rem;\n    border-radius: 3px;\n    cursor: pointer;\n    text-transform: uppercase;\n    font-weight: 600;\n}\n\n.logo{\n    color: red;\n    font-size: large;\n    font-weight: bold;\n}\n\n.board-area{\n    position: relative;\n    margin: 2rem;\n    display: grid;\n    align-items: center;\n    justify-items: center;\n    gap: 1rem;\n}\n\n.title{\n    background-color: var(--fleet-bg-p);\n    /* width: 100%; */\n    display: grid;\n    place-items: center;\n    font-weight: 600;\n    color: white;\n    padding: .5rem;\n    border-radius: .3rem;\n    text-transform: uppercase;\n    letter-spacing: 2px;\n    font-family: sans-serif;\n\n}\n.title.enemy{\n    background-color: var(--fleet-bg-o);\n}\n.divder{\n    display: none;\n}\n.divider.show{\n    display: block;\n    outline: 1px solid grey;\n    width: 90vw;\n    margin-top: 1rem;\n}\n\n.p-board, .e-board{\n    position: relative;\n    display: grid;\n}\n\n.ship-section{\n    display: flex;\n    margin-top: 1rem;\n    height: 4rem;\n}\n\n.player-ship-indicator, .enemy-ship-indicator{\n    margin-left: 1rem;\n}\n.col-count{\n    display: flex;\n    gap: 1px;\n}\n.row-count{\n    position: absolute;\n    left: -2rem;\n    top: 4rem;\n    display: grid;\n    gap: .1rem;\n}\n\n.row-count>div, .col-count>div{\n    background-color: transparent;\n    outline: none;\n    font-weight: 600;\n    text-transform: uppercase;\n}\n\n.indicator-title{\n    position: absolute;\n    left: -4rem;\n    bottom: +1.8rem;\n    z-index: -10;\n}\n\n.e-graveyard{\n    position: absolute;\n    left: -.7rem;\n}\n.graveyard{\n    display: none;\n}\n.shipyard, .graveyard, .e-graveyard{\n    text-orientation: upright;\n    transform: rotate(-90deg);\n    text-transform: uppercase;\n    font-weight: 600;\n    letter-spacing: 2px;\n}\n.board{\n    display: grid;\n    gap: 1px;\n    grid-template-columns: repeat(10, 1fr);\n    /* border: 1px solid skyblue; */\n    height: 21.2rem;\n    margin-bottom: 2rem;\n}\n\n.player-board, .enemy-board{\n    width: min-content;\n    height: min-content;\n}\n\n.cell{\n    display: grid;\n    height: 2rem;\n    width: 2rem;\n    outline: 1px solid skyblue;\n    border-radius: 8px;\n    align-items: center;\n    justify-content: center;\n}\n\n.fill{\n    background-color: rgb(67, 147, 204);\n}\n.ship{\n    border: 3px solid blue;\n    background-color: gray;\n    z-index: 100;\n}\n.firstCell{\n    border: 2px solid red;\n}\n\n\n.ships{\n    display: grid;\n    gap: 5px;\n}\n.carrier{\n    display: grid;\n    grid-template-columns: repeat(5, 1fr);\n    color: black;\n    border: 1px solid gray;\n    /* width: 10rem; */\n}\n.carrier div{\n    height: 2rem;\n    width: 2rem;\n}\n\n/* .ship-container>div{\n    display: flex;\n    color: black;\n    height: 2rem;\n    width: min-content;\n    border: 1px solid gray;\n}\n.ship-container>div>div{\n    width: 2rem;\n    height: 2rem;\n} */\n\n.wrong{\n    border: 2px solid red;\n}\n.valid{\n    border: 2px solid green;\n}\n.highlight{\n    background-color: rgb(103, 194, 103);\n}\n\n\n\n.ship-container.vertical{\n    display: flex;\n}\n\n/* .ship-container>div:hover{\n    cursor: pointer;\n    border: 2px solid rgb(41, 12, 231);\n}\n.ship-container>div.vertical{\n    display: grid;\n    grid-template-columns: 1fr;\n    width: 2rem;\n} */\n\n/* .carrier.vertical{\n    height: 10rem;\n}\n.battleship.vertical{\n    height: 8rem;\n}\n.cruiser.vertical{\n    height: 6rem;\n}\n.submarine.vertical{\n    height: 6rem;\n}\n.destroyer.vertical{\n    height: 4rem;\n} */\n\n.e-board{\n    display: none;\n    position: relative;\n}\n\n.e-board.show{\n    display: grid;\n    position: relative;\n}\n\n.hit{\n    position: relative;\n    font-size: 1.5rem;\n    top: 0;\n    left: 0;\n    color: var(--hit);\n    /* background-color: var(--grey); */\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    /* border: 1px solid rgb(249, 13, 5); */\n}\n\n.missed{\n    font-size: 1.5rem;\n    font-weight: bolder;\n    color: rgb(214, 224, 18);\n}\n\n\n/* ships */\n.behicle{\n    height: 2rem;\n    width: 2rem;\n}\n\n.behicle span{\n    /* border: 2px solid rgb(34, 22, 197); */\n    position: absolute;\n    background-color: rgba(83, 177, 177, 0.44);\n    border-radius: 8px;\n    z-index: -10;\n}\n\n\n/* horizontal and verticle sizes */\n.behicle.verticle{\n    .len5{\n        display: block;\n        height: calc(10rem + 4px);\n        width: 2rem;\n    }\n    .len4{\n        display: block;\n        height: calc(8rem + 3px);\n        width: 2rem;\n    }\n\n    .len3{\n        display: block;\n        height: calc(6rem + 2px);\n        width: 2rem;\n    }\n    .len2{\n        display: block;\n        height: calc(4rem + 2px);\n        width: 2rem;\n    }\n}\n\n.behicle.horizontal{\n\n    .len5{\n        display: flex;\n        width: calc(10rem + 4px);\n        height: 2rem;\n    }\n    .len4{\n        display: flex;\n        width: calc(8rem + 3px);\n        height: 2rem;\n    }\n    .len3{\n        display: flex;\n        width: calc(6rem + 2px);\n        height: 2rem;\n    }\n    .len2{\n        display: flex;\n        width: calc(4rem + 2px);\n        height: 2rem;\n    }\n}\n\n/* indicator ships */\n.player-ship-indicator,\n.enemy-ship-indicator{\n    display: flex;\n    gap: 1rem;\n    flex-wrap: wrap;\n}\n/* Common styles for player and enemy ship indicators */\n.player-ship-indicator > div,\n.enemy-ship-indicator > div {\n    display: flex;\n    margin: 0.3rem 0;\n    width: fit-content;\n}\n\n/* Styles for inner divs within player and enemy ship indicators */\n.player-ship-indicator > div > div,\n.enemy-ship-indicator > div > div {\n    height: .8rem;\n    width: .8rem;\n    border: 1px solid grey;\n}\n\n/* Styles for destroyed player and enemy ship indicators */\n.player-ship-indicator > div.destroyed,\n.enemy-ship-indicator > div.destroyed {\n    /* border: 1px solid grey; */\n    opacity: 0.4;\n}\n\n/* Styles for inner divs within destroyed player and enemy ship indicators */\n.player-ship-indicator > div.destroyed > div,\n.enemy-ship-indicator > div.destroyed > div {\n    border: 1px solid grey;\n}\n\n/* |BreakPoint */\n\n@media screen and (min-width: 700px) {\n    .board-area{\n        display: flex;\n        gap: 2rem;\n    }\n    .divider.show{\n        display: block;\n        height: 24rem;\n        width: 0;\n        margin-right: 1rem;\n        margin-top: 0;\n    }\n}"],"sourceRoot":""}]);
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

/***/ "./src/app.css":
/*!*********************!*\
  !*** ./src/app.css ***!
  \*********************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./app.css */ "./node_modules/css-loader/dist/cjs.js!./src/app.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameBoard */ "./src/gameBoard.js");
/* harmony import */ var _gameLoop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameLoop */ "./src/gameLoop.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.css */ "./src/app.css");
/* harmony import */ var _turns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./turns */ "./src/turns.js");





const {getTurn, changeTurn} = (0,_turns__WEBPACK_IMPORTED_MODULE_4__["default"])()
const { isValidMove,
    isAllShipSunked, } = (0,_gameBoard__WEBPACK_IMPORTED_MODULE_0__["default"])()

let { playerBoard, enemyBoard, placeComputerShipsRandomly, placePlayerShipsRandomly, playerShips, enemyShips } = (0,_gameLoop__WEBPACK_IMPORTED_MODULE_1__["default"])()
const { playerMove, computersMove } = (0,_player__WEBPACK_IMPORTED_MODULE_2__["default"])(playerShips)

const [playerCarrier, playerBattleship, playerCruiser, playerSubmarine, playerDestroyer] = playerShips

const Dom = ()=> {
    
   let playerGridCells;
   document.addEventListener('DOMContentLoaded', ()=> {
       playerGridCells = document.querySelectorAll('.player-board div')
    //    console.log(playerGridCells)
   })
    const playerGrid = document.querySelector('.player-board')
    const enemyGridArea = document.querySelector('.e-board')
    const enemyGrid = document.querySelector('.enemy-board')
    
    const createBoard = (board) => {
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                const cell = document.createElement('div')
                cell.classList.add('cell')
                cell.setAttribute('x', i)
                cell.setAttribute('y', j)
                
                board.appendChild(cell)
            }
        }
    }
    
        // Drag and Drop ------
        const playerShipIndicator = document.querySelector('.player-ship-indicator')
        const enemyShipIndicator = document.querySelector('.enemy-ship-indicator')
        
        // end of drag and drop------
        const updateGrid = (board, grid) => {       
            // console.log(playerGridCells)
            console.log(board)
            playerGridCells.forEach(cell => {
                cell.innerHtml = ''
                cell.classList.remove('ship')
            })
            
            board.forEach((row, rowIdx) => {
                row.forEach((col, colIdx) => {
                    const element = grid.querySelector(`[x="${rowIdx}"][y="${colIdx}"]`)
                    
                    if (board[rowIdx][colIdx] === false) {
                        element.innerHtml = ''
            }
            else if (board[rowIdx][colIdx] === 'missed') {
                element.textContent = 'Ⓜ️'
                element.classList.add('missed')
                
            } else if (board[rowIdx][colIdx] === 'reveled') {
                element.textContent = '❌'
                element.classList.add('hit')
            }
        })
    })
}



// random ship placement: = 
const placeRandomShip = (playerBoard) => {
    const startGameBtn = document.querySelector('.start')
    playerBoard = placePlayerShipsRandomly(playerBoard)
    updateGrid(playerBoard, playerGrid)
    startGameBtn.removeAttribute('disabled')

    return playerBoard
}

// start game.
const playerShipCoordinate = {
    'carrier': [],
    'battleship': [],
    'cruiser': [],
    'submarine': [],
    'destroyer': [],
}
const enemyShipCoordinate = {
    'carrier': [],
    'battleship': [],
    'cruiser': [],
    'submarine': [],
    'destroyer': [],
}

const startGame = (playerBoard, enemyBoard) => {
    const divider = document.querySelector('.divider')
    const shipYard = document.querySelector('.shipyard')

    enemyBoard = placeComputerShipsRandomly(enemyBoard)
    enemyGridArea.classList.add('show')
    divider.classList.add('show')
    shipYard.textContent = 'Graveyard'
    
    playerBoard.forEach((row, rowIdx) => {
        row.forEach((col, colIdx) => {
            if (playerBoard[rowIdx][colIdx].name === 'carrier') {
                playerShipCoordinate['carrier'].push([rowIdx, colIdx])
            }
            else if (playerBoard[rowIdx][colIdx].name === 'battleship') {
                playerShipCoordinate['battleship'].push([rowIdx, colIdx])
            }
            else if (playerBoard[rowIdx][colIdx].name === 'cruiser') {
                playerShipCoordinate['cruiser'].push([rowIdx, colIdx])
            }
            else if (playerBoard[rowIdx][colIdx].name === 'submarine') {
                playerShipCoordinate['submarine'].push([rowIdx, colIdx])
            }
            else if (playerBoard[rowIdx][colIdx].name === 'destroyer') {
                playerShipCoordinate['destroyer'].push([rowIdx, colIdx])
            } else return
        })
    })
    
    enemyBoard.forEach((row, rowIdx) => {
        row.forEach((col, colIdx) => {
            if (enemyBoard[rowIdx][colIdx].name === 'carrier') {
                enemyShipCoordinate['carrier'].push([rowIdx, colIdx])
            }
            else if (enemyBoard[rowIdx][colIdx].name === 'battleship') {
                enemyShipCoordinate['battleship'].push([rowIdx, colIdx])
            }
            else if (enemyBoard[rowIdx][colIdx].name === 'cruiser') {
                enemyShipCoordinate['cruiser'].push([rowIdx, colIdx])
            }
            else if (enemyBoard[rowIdx][colIdx].name === 'submarine') {
                enemyShipCoordinate['submarine'].push([rowIdx, colIdx])
            }
            else if (enemyBoard[rowIdx][colIdx].name === 'destroyer') {
                enemyShipCoordinate['destroyer'].push([rowIdx, colIdx])
            } else return
        })
    })
    
    
    for (const key in enemyShipCoordinate) {
        const ship = document.createElement('div')
        ship.classList.add(`${key}-indicator`)
        
        enemyShipCoordinate[key].forEach(arr => {   
            const div = document.createElement('div')
            ship.appendChild(div)
        })
        enemyShipIndicator.appendChild(ship)
    }
    
    for (const key in playerShipCoordinate) {
        const ship = document.createElement('div')
        ship.classList.add(`${key}-indicator`)
        
        playerShipCoordinate[key].forEach(arr => {   
            const div = document.createElement('div')
            ship.appendChild(div)
        })
        playerShipIndicator.appendChild(ship)
    }
    
}


const attack = (e, cell, playerBoard, enemyBoard) => {

        const x = cell.getAttribute('x')
        const y = cell.getAttribute('y')
        
        if (x && y) {

            if (isAllShipSunked(playerShips, enemyShips)) {
                alert('Game Over')
            } else {
                if(getTurn() === 'player' && (enemyBoard[x][y] !== 'missed' && enemyBoard[x][y] !== 'reveled')){
                    // console.log(getTurn(), changeTurn())
                    enemyBoard = playerMove(enemyBoard, x, y)
                    updateGrid(enemyBoard, enemyGrid)
                    changeTurn()
                    // else return
                    
                    
                    // once a ship is sunked it updates the sarrounding places as empty..
                    enemyShips.forEach(ship => {
                        
                        if (ship.isSunked()) {
                            let coordinates = enemyShipCoordinate[ship.name];
                            let lastIdx = coordinates.length - 1; // Get the index of the last coordinate
                            
                            coordinates.forEach((arr, idx) => {
                                let [x, y] = arr;
                                x = parseInt(x);
                                y = parseInt(y);
                                
                                // Check if the current coordinate is the first or last coordinate of the ship
                                if (idx === 0 || idx === lastIdx) {
                                    // Check if adjacent cells are within bounds and not already revealed
                                    if (x - 1 >= 0 && y - 1 >= 0 && enemyBoard[x - 1][y - 1] !== 'reveled') enemyBoard[x - 1][y - 1] = 'missed';
                                    if (x - 1 >= 0 && y + 1 < enemyBoard[x].length && enemyBoard[x - 1][y + 1] !== 'reveled') enemyBoard[x - 1][y + 1] = 'missed';
                                    if (x + 1 < enemyBoard.length && y + 1 < enemyBoard[x].length && enemyBoard[x + 1][y + 1] !== 'reveled') enemyBoard[x + 1][y + 1] = 'missed';
                                    if (x + 1 < enemyBoard.length && y - 1 >= 0 && enemyBoard[x + 1][y - 1] !== 'reveled') enemyBoard[x + 1][y - 1] = 'missed';
                                }
                                
                                // Check adjacent cells for each coordinate
                                if (x - 1 >= 0 && enemyBoard[x - 1][y] !== 'reveled') enemyBoard[x - 1][y] = 'missed';
                                if (x + 1 < enemyBoard.length && enemyBoard[x + 1][y] !== 'reveled') enemyBoard[x + 1][y] = 'missed';
                                if (y - 1 >= 0 && enemyBoard[x][y - 1] !== 'reveled') enemyBoard[x][y - 1] = 'missed';
                                if (y + 1 < enemyBoard[x].length && enemyBoard[x][y + 1] !== 'reveled') enemyBoard[x][y + 1] = 'missed';
                            });
                            
                            // update indicator ships.
                            const name = ship.name
                            const indicatorShip = enemyShipIndicator.querySelector(`.${name}-indicator`)
                            indicatorShip.classList.add('destroyed')
                            // console.log({indicatorShip})
                        }
                    });
                }
                
                setTimeout(() => {
                    if(getTurn() === 'computer'){
                        
                        playerBoard = computersMove(playerBoard)
                        changeTurn()
                        updateGrid(playerBoard, playerGrid)
                        
                        // once a ship is sunked it updates the sarrounding places as empty..
                        playerShips.forEach(ship => {
                            // console.log(ship);
                            if (ship.isSunked()) {
                            let coordinates = playerShipCoordinate[ship.name];
                            
                            let lastIdx = coordinates.length - 1; // Get the index of the last coordinate
                            
                            coordinates.forEach((arr, idx) => {
                                let [x, y] = arr;
                                x = parseInt(x);
                                y = parseInt(y);
                                
                                // Check if the current coordinate is the first or last coordinate of the ship
                                if (idx === 0 || idx === lastIdx) {
                                    // Check if adjacent cells are within bounds and not already revealed
                                    if (x - 1 >= 0 && y - 1 >= 0 && playerBoard[x - 1][y - 1] !== 'reveled') playerBoard[x - 1][y - 1] = 'missed';
                                    if (x - 1 >= 0 && y + 1 < playerBoard[x].length && playerBoard[x - 1][y + 1] !== 'reveled') playerBoard[x - 1][y + 1] = 'missed';
                                    if (x + 1 < playerBoard.length && y + 1 < playerBoard[x].length && playerBoard[x + 1][y + 1] !== 'reveled') playerBoard[x + 1][y + 1] = 'missed';
                                    if (x + 1 < playerBoard.length && y - 1 >= 0 && playerBoard[x + 1][y - 1] !== 'reveled') playerBoard[x + 1][y - 1] = 'missed';
                                }
                                
                                // Check adjacent cells for each coordinate
                                if (x - 1 >= 0 && playerBoard[x - 1][y] !== 'reveled') playerBoard[x - 1][y] = 'missed';
                                if (x + 1 < playerBoard.length && playerBoard[x + 1][y] !== 'reveled') playerBoard[x + 1][y] = 'missed';
                                if (y - 1 >= 0 && playerBoard[x][y - 1] !== 'reveled') playerBoard[x][y - 1] = 'missed';
                                if (y + 1 < playerBoard[x].length && playerBoard[x][y + 1] !== 'reveled') playerBoard[x][y + 1] = 'missed';
                            });
                            
                            // update indicator ships.
                            const name = ship.name
                            const indicatorShip = playerShipIndicator.querySelector(`.${name}-indicator`)
                            indicatorShip.classList.add('destroyed')
                            // console.log({indicatorShip})
                        }
                        
                    });
                }
            }, 500);
            // else return
            
        }
        
    } else return
    updateGrid(enemyBoard, enemyGrid)
    updateGrid(playerBoard, playerGrid)
    // console.log(playerBoard, enemyBoard)
}

const highlightShipPosition = (board, grid, playerGridCells, ship, row, col, orientation) => {
    // let shipName = target.getAttribute('id')
    let shipName = ship.name
    // console.log(playerGridCells)
    
    // removes the previous highlights
    playerGridCells.forEach(item => {
        if (item.classList.contains('highlight')) {
            item.classList.remove('highlight')
        }
    })
    
    if (isValidMove(board, ship, row, col, orientation)) {
        row = parseInt(row)
        col = parseInt(col)
        
        // horizontal elements.
        const firstdNode = grid.querySelector(`[x="${row}"][y="${col}"]`)
        const secondNode = grid.querySelector(`[x='${row}'][y='${col + parseInt(1)}'`)
        const thirdNode = grid.querySelector(`[x='${row}'][y='${col + parseInt(2)}'`)
        const fourthNode = grid.querySelector(`[x='${row}'][y='${col + parseInt(3)}'`)
        const fifthNode = grid.querySelector(`[x='${row}'][y='${col + parseInt(4)}'`)
        
        // vertical elements.
        const firstdNodeV = grid.querySelector(`[x='${row}'][y='${col}']`)
        const secondNodeV = grid.querySelector(`[x='${row + parseInt(1)}'][y='${col}']`)
        const thirdNodeV = grid.querySelector(`[x='${row + parseInt(2)}'][y='${col}']`)
        const fourthNodeV = grid.querySelector(`[x='${row + parseInt(3)}'][y='${col}']`)
        const fifthNodeV = grid.querySelector(`[x='${row + parseInt(4)}'][y='${col}']`)
        
        if (shipName === 'carrier') {
            if (orientation === 'h') {
                firstdNode.classList.add('highlight')
                secondNode.classList.add('highlight')
                thirdNode.classList.add('highlight')
                fourthNode.classList.add('highlight')
                fifthNode.classList.add('highlight')
            } 
            else {
                firstdNodeV.classList.add('highlight')
                secondNodeV.classList.add('highlight')
                thirdNodeV.classList.add('highlight')
                fourthNodeV.classList.add('highlight')
                fifthNodeV.classList.add('highlight')
            }
        }
        
        else if (shipName === 'battleship') {
            if (orientation === 'h') {
                firstdNode.classList.add('highlight')
                secondNode.classList.add('highlight')
                thirdNode.classList.add('highlight')
                fourthNode.classList.add('highlight')
            } else {
                firstdNodeV.classList.add('highlight')
                secondNodeV.classList.add('highlight')
                thirdNodeV.classList.add('highlight')
                fourthNodeV.classList.add('highlight')
            }
        }
        else if (shipName === 'cruiser' || shipName === 'submarine') {
            if (orientation === 'h') {
                firstdNode.classList.add('highlight')
                secondNode.classList.add('highlight')
                thirdNode.classList.add('highlight')
            } else {
                firstdNodeV.classList.add('highlight')
                secondNodeV.classList.add('highlight')
                thirdNodeV.classList.add('highlight')
            }
        }
        else {
            if (orientation === 'h') {
                firstdNode.classList.add('highlight')
                secondNode.classList.add('highlight')
            } else {
                firstdNodeV.classList.add('highlight')
                secondNodeV.classList.add('highlight')
            }
        }
    }
    else {
        return
    }
}

return {
    createBoard,
    startGame,
    updateGrid,
    placeRandomShip,
    attack, 
    highlightShipPosition,
    playerShipCoordinate,
}

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dom);

/***/ }),

/***/ "./src/events.js":
/*!***********************!*\
  !*** ./src/events.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ "./src/helper.js");
/* harmony import */ var _gameLoop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameLoop */ "./src/gameLoop.js");
/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.css */ "./src/app.css");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gameBoard */ "./src/gameBoard.js");





const {highlightShipPosition} = (0,_dom__WEBPACK_IMPORTED_MODULE_3__["default"])()
let {playerBoard} = (0,_gameLoop__WEBPACK_IMPORTED_MODULE_1__["default"])()
const {getShip} = (0,_helper__WEBPACK_IMPORTED_MODULE_0__["default"])()
const {isValidMove, placeShip} = (0,_gameBoard__WEBPACK_IMPORTED_MODULE_4__["default"])()


const Events = () => {
    const ships = document.querySelectorAll('.behicle')
    const playerGrid = document.querySelector('.player-board')
    // const playerGridCells = playerGrid.querySelectorAll('div')
    // const enemyGrid = document.querySelector('.enemy-board')
    let target;
    let isDragging = false;
    let originalPlayerBoard;

// Drag and Drop.
   const dragStart = (e, playerBoard)=> {
       target = e.target
       console.log(target)
       isDragging = true;
       if(playerBoard){
        originalPlayerBoard = JSON.parse(JSON.stringify(playerBoard));
       } 
       e.target.style.cursor = 'grabbing'
    } 

    const dragOver = (e, playerBoard, playerGridCells) => {
        if(playerBoard && playerGridCells){

            e.preventDefault()
            let orientation;
            let x = e.target.getAttribute('x')
            let y = e.target.getAttribute('y')
            let ship = getShip(target)
            if (!target) return
            else {
                
                if (target.classList.contains('horizontal')) {
                    orientation = 'h'
                } else orientation = 'v'
            }
            
            // console.log(playerGridCells, playerGrid)
            
            highlightShipPosition(playerBoard, playerGrid, playerGridCells, ship, x, y, orientation)
        }
    }
        
    const drop = (e, cell, playerBoard, playerGridCells, placedShips)=> {
        if(cell && playerBoard && playerGridCells){
            let tempShips = []
            let orientation;
            if (!target) return
            else {
                if (target.classList.contains('horizontal')) {
                    orientation = 'h'
                } else orientation = 'v'
            }
            
            const ship = getShip(target)
            
            const x = cell.getAttribute('x')
            const y = cell.getAttribute('y')
            
            if (!isDragging) return
            else if (isValidMove(playerBoard, ship, x, y, orientation)) {
                cell.appendChild(target)
                playerBoard = placeShip(playerBoard, ship, x, y, orientation)
          
                const shipExist = placedShips.includes(`${ship.name}`)
                if(!shipExist) placedShips.push(`${ship.name}`)
                console.log(placedShips)
                
                if(placedShips.length > 4){
                    const startGameBtn = document.querySelector('.start')
                    startGameBtn.removeAttribute('disabled')
                }

            target.setAttribute('x', x)
            target.setAttribute('y', y)
        } else {
            playerBoard = originalPlayerBoard
        }
        
        target = ''
        isDragging = false
        
        playerGridCells.forEach(item => {
            console.log('removing highlight')
            if (item.classList.contains('highlight')) {
                item.classList.remove('highlight')
            }
        })
        
        return playerBoard
    }

}
        
// Drag and Drop.

// change ship orientation:

const changeOrientation = (e, playerBoard)=> {
    const domShip = e.target
    const ship = getShip(domShip)
    let orientation;
    let tempOrientation;

    const x = domShip.getAttribute('x')
    const y = domShip.getAttribute('y')

    if (x && y) {

        if (domShip.classList.contains('horizontal')) {
            tempOrientation = 'v'
            orientation = 'h'
        } else {
            orientation = 'v'
            tempOrientation = 'h'
        }

        if (isValidMove(playerBoard, ship, x, y, tempOrientation)) {

            playerBoard = setOrientation(playerBoard, domShip, ship, x, y, tempOrientation)
        }
        else {
            playerBoard = setOrientation(playerBoard, domShip, ship, x, y, orientation)
        }
    } else return
}


const setOrientation = (playerBoard, domShip, ship, x, y, orientation) => {
    if (orientation === 'v') {
        domShip.classList.remove('horizontal')
        domShip.classList.add('verticle')
        return placeShip(playerBoard, ship, x, y, orientation)
    }
    else {
        domShip.classList.remove('verticle')
        domShip.classList.add('horizontal')
        return placeShip(playerBoard, ship, x, y, orientation)
    }
}
// change orientation.
return{
    dragOver, 
    dragStart,
    drop,
    changeOrientation,
}

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Events);

/***/ }),

/***/ "./src/gameBoard.js":
/*!**************************!*\
  !*** ./src/gameBoard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


const GameBoard = () => {

    const isValidMove = (board, ship, row, col, orientation) => {
        row = parseInt(row);
        col = parseInt(col);

        // Remove any existing instance of the ship from the board
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                if (board[i][j].name === ship.name) {
                    board[i][j] = false;
                }
            }
        }

        if (col < 0 || row < 0) return false;
        else if (orientation === 'h' && (col + ship.length > 10 || row > 10)) return false
        else if (orientation === 'v' && (col > 10 || row + ship.length > 10)) return false

        // Check if the ship's placement exceeds the board's bounds
        if (orientation.toLowerCase() === 'h') {
            for (let i = col; i < col + ship.length; i++) {
                // Check if the cells around the ship's placement are free
                for (let j = row - 1; j <= row + 1; j++) {
                    for (let k = i - 1; k <= i + 1; k++) {
                        if (j >= 0 && j < 10 && k >= 0 && k < 10 && board[j][k]) {
                            return false; // Ship overlaps with existing ship or adjacent ship
                        }
                    }
                }
            }
        } else {
            for (let i = row; i < row + ship.length; i++) {
                // Check if the cells around the ship's placement are free
                for (let j = col - 1; j <= col + 1; j++) {
                    for (let k = i - 1; k <= i + 1; k++) {
                        if (j >= 0 && j < 10 && k >= 0 && k < 10 && board[k][j]) {
                            return false; // Ship overlaps with existing ship or adjacent ship
                        }
                    }
                }
            }
        }

        return true; // All conditions passed, valid move
    };

    const placeShip = (board, ship, row, col, orientation) => {
        row = parseInt(row)
        col = parseInt(col)

        let oldBoard = board.map(row => [...row]);

        // Remove any existing instance of the same ship from the board
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                if (board[i][j] === ship) {
                    board[i][j] = false;
                }
            }
        }

        if (orientation.toLowerCase() === 'h') {
            if (isValidMove(board, ship, row, col, orientation)) {
                for (let i = col; i < col + ship.length; i++) {
                    board[row][i] = ship;
                }
                return board;
            } else {
                return oldBoard
            }

        } else {

            if (isValidMove(board, ship, row, col, orientation)) {
                for (let i = row; i < row + ship.length; i++) {
                    board[i][col] = ship;
                }
                return board;
            } else {
                return oldBoard
            }
        }
    };

    const placeShipRandomly = (board, ship, user = 'computer') => {

        const id = ship.name
        const behicle = document.getElementById(`${id}`)
        const playerGrid = document.querySelector('.player-board')

        let orientation;
        Math.random() > 0.5 ? orientation = 'v' : orientation = 'h';

        const row = Math.floor(Math.random() * 10)
        const col = Math.floor(Math.random() * 10)

        if (isValidMove(board, ship, row, col, orientation)) {
            const cell = playerGrid.querySelector(`[x="${row}"][y="${col}"]`)
            if (user === 'player') {
                if (orientation === 'h') {
                    behicle.classList.add('horizontal')
                    behicle.classList.remove('verticle')
                } else {
                    behicle.classList.remove('horizontal')
                    behicle.classList.add('verticle')
                }

                cell.appendChild(behicle)
                behicle.setAttribute('x', row)
                behicle.setAttribute('y', col)
            }
            
            return placeShip(board, ship, row, col, orientation)
        }
        else return placeShipRandomly(board, ship, user)
    }

    const receiveAttack = (board, row, col) => {

        if (board[row][col] === false) {
            board[row][col] = 'missed'
            return board
        }
        else if(typeof (board[row][col]) === 'object') {
            board[row][col].hit()
            board[row][col] = 'reveled'
            return board
        }else return board
    }

    const isAllShipSunked = (playerShips, enemyShips) => {

        const allEnemyShipSunked = enemyShips.every(ship => ship.isSunked())
        const allPlayerShipSunked = playerShips.every(ship => ship.isSunked())

        return allEnemyShipSunked || allPlayerShipSunked
    }

    return {
        isValidMove,
        placeShip,
        placeShipRandomly,
        receiveAttack,
        isAllShipSunked,
    };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameBoard);


/***/ }),

/***/ "./src/gameLoop.js":
/*!*************************!*\
  !*** ./src/gameLoop.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/ship.js");
/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameBoard */ "./src/gameBoard.js");
/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.css */ "./src/app.css");
/* harmony import */ var _turns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./turns */ "./src/turns.js");




const {getTurn, changeTurn} = (0,_turns__WEBPACK_IMPORTED_MODULE_3__["default"])()
const { isValidMove,
    placeShip,
    placeShipRandomly,
    isAllShipSunked, } = (0,_gameBoard__WEBPACK_IMPORTED_MODULE_1__["default"])()

const gameLoop = () => {
    const playerCarrier = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])('carrier');
    const playerBattleship = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])('battleship');
    const playerCruiser = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])('cruiser');
    const playerSubmarine = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])('submarine');
    const playerDestroyer = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])('destroyer');

    const enemyCarrier = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])('carrier');
    const enemyBattleship = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])('battleship');
    const enemyCruiser = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])('cruiser');
    const enemySubmarine = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])('submarine');
    const enemyDestroyer = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])('destroyer');

    const playerShips = [
        playerCarrier, playerBattleship, playerCruiser, playerSubmarine, playerDestroyer
    ]
    const enemyShips = [
        enemyCarrier, enemyBattleship, enemyCruiser, enemySubmarine, enemyDestroyer
    ]

    const placePlayerShipsRandomly = (playerBoard) => {
        placeShipRandomly(playerBoard, playerCarrier, 'player')
        placeShipRandomly(playerBoard, playerBattleship, 'player')
        placeShipRandomly(playerBoard, playerCruiser, 'player')
        placeShipRandomly(playerBoard, playerSubmarine, 'player')
        placeShipRandomly(playerBoard, playerDestroyer, 'player')
        return playerBoard
    }
    const placeComputerShipsRandomly = (enemyBoard) => {
        placeShipRandomly(enemyBoard, enemyCarrier)
        placeShipRandomly(enemyBoard, enemyBattleship)
        placeShipRandomly(enemyBoard, enemyCruiser)
        placeShipRandomly(enemyBoard, enemySubmarine)
        placeShipRandomly(enemyBoard, enemyDestroyer)
        return enemyBoard
    }

    return {
        // playerBoard,
        // enemyBoard,
        playerShips,
        enemyShips,
        placeComputerShipsRandomly,
        placePlayerShipsRandomly,
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gameLoop);



/***/ }),

/***/ "./src/helper.js":
/*!***********************!*\
  !*** ./src/helper.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _gameLoop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameLoop */ "./src/gameLoop.js");

const {playerShips, enemyShips} = (0,_gameLoop__WEBPACK_IMPORTED_MODULE_0__["default"])()

const Helper = () => {
console.log(playerShips[0])
    const getShip = (target) => {
        if (target) {
            const id = target.getAttribute('id')
            switch (id) {
                case 'carrier':
                    return playerShips[0]
                case 'battleship':
                    return playerShips[1]
                case 'cruiser':
                    return playerShips[2]
                case 'submarine':
                    return playerShips[3]
                case 'destroyer':
                    return playerShips[4]
            }
        } else return

    }

    return {
        getShip
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Helper);

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameBoard */ "./src/gameBoard.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship */ "./src/ship.js");



const Players = (ships) => {
    let probMap = Array.from({ length: 10 }, () => Array(10).fill(0));

   
    
    const getRandomComputerMove = (playerBoard) => {
        const rRow = Math.floor(Math.random() * 10);
        const rCol = Math.floor(Math.random() * 10);
        console.log({ ships });
    
        if (!ships[0].isSunked()) {
            playerBoard.forEach((row, rowIdx) => {
                row.forEach((cellValue, colIdx) => {
                    // Horizontal check
                    if (colIdx + ships[0].length <= 10) {
                        let isvalidPosition = true;
                        for (let i = 0; i < ships[0].length; i++) {
                            if (playerBoard[rowIdx][colIdx + i] === 'missed' || playerBoard[rowIdx][colIdx + i] === 'reveled') {
                                isvalidPosition = false;
                            }
                        }
                        if (isvalidPosition) {
                            for (let i = 0; i < ships[0].length; i++) {
                                probMap[rowIdx][colIdx + i] += 1;
                            }
                        }
                    }
    
                    // Vertical check
                    if (rowIdx + ships[0].length <= 10) {
                        let isvalidPosition = true;
                        for (let i = 0; i < ships[0].length; i++) {
                            if (playerBoard[rowIdx + i][colIdx] === 'missed' || playerBoard[rowIdx + i][colIdx] === 'reveled') {
                                isvalidPosition = false;
                            }
                        }
                        if (isvalidPosition) {
                            for (let i = 0; i < ships[0].length; i++) {
                                probMap[rowIdx + i][colIdx] += 1;
                            }
                        }
                    }
                });
            });
        } else {
            ships.shift();
        }
    
        function updateHighestVal() {
            let highestVal = {
                row: 0,
                col: 0,
            };
            let highestValue = probMap[0][0];
    
            probMap.forEach((row, rowIdx) => {
                row.forEach((cellValue, colIdx) => {
                    if (cellValue > highestValue) {
                        highestValue = cellValue;
                        highestVal.row = rowIdx;
                        highestVal.col = colIdx;
                    }
                });
            });
    
            return highestVal;
        }
    
        let highestVal = updateHighestVal();
    
        if (typeof playerBoard[highestVal.row][highestVal.col] === 'object' && playerBoard[highestVal.row][highestVal.col] !== null) {
            // Increase the probability of adjacent cells
            if (highestVal.col - 1 >= 0 && playerBoard[highestVal.row][highestVal.col - 1] !== 'reveled' && playerBoard[highestVal.row][highestVal.col - 1] !== 'missed') {
                probMap[highestVal.row][highestVal.col - 1] += 100;
            }
            if (highestVal.col + 1 < 10 && playerBoard[highestVal.row][highestVal.col + 1] !== 'reveled' && playerBoard[highestVal.row][highestVal.col + 1] !== 'missed') {
                probMap[highestVal.row][highestVal.col + 1] += 100;
            }
            if (highestVal.row - 1 >= 0 && playerBoard[highestVal.row - 1][highestVal.col] !== 'reveled' && playerBoard[highestVal.row - 1][highestVal.col] !== 'missed') {
                probMap[highestVal.row - 1][highestVal.col] += 100;
            }
            if (highestVal.row + 1 < 10 && playerBoard[highestVal.row + 1][highestVal.col] !== 'reveled' && playerBoard[highestVal.row + 1][highestVal.col] !== 'missed') {
                probMap[highestVal.row + 1][highestVal.col] += 100;
            }
        }
    
        // Update highestVal again to make the next move
        
    
        
        // Assuming GameBoard is already defined and has the receiveAttack method

        const ship = playerBoard[highestVal.row][highestVal.col]

        let board =  (0,_gameBoard__WEBPACK_IMPORTED_MODULE_0__["default"])().receiveAttack(playerBoard, highestVal.row, highestVal.col);

        // Reset the specific cell's probability to 0
        probMap[highestVal.row][highestVal.col] = 0;
        console.log(typeof ship)
        console.log(ship)

        if(typeof ship === 'object' && ship.isSunked()){
            probMap = Array.from({ length: 10 }, () => Array(10).fill(0));
        }

        highestVal = updateHighestVal();
        console.log(highestVal);
        console.log(probMap[highestVal.row][highestVal.col]);
        console.log(probMap);
        return board
    };
    


    const playerMove = (board, row, col) => {
            if (board[row][col] === 'missed' || board[row][col] === 'reveled' || board[row][col] === undefined) return board
            else {
                return (0,_gameBoard__WEBPACK_IMPORTED_MODULE_0__["default"])().receiveAttack(board, row, col)
            }
        }

    const computersMove = (board) => {
            return getRandomComputerMove(board)
    }

    return {
        playerMove,
        computersMove,
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Players);

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const ship = (name) => {
let hitCount = 0;
let length;

    if(name.toLowerCase() === 'carrier') length = 5;
    else if(name.toLowerCase() === 'battleship') length = 4;
    else if(name.toLowerCase() === 'cruiser' || name.toLowerCase() === 'submarine') length = 3;
    else length = 2;

    const hit = () => {
        hitCount += 1;
    }

    const isSunked = () => {
        if(hitCount === length){
            return true
        }else return false;
    }

    return{
        name,
        length,
        hit,
        isSunked,
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ship);

/***/ }),

/***/ "./src/turns.js":
/*!**********************!*\
  !*** ./src/turns.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Turns = () =>{
    let turn = 'player'
    const changeTurn = () => {
        turn === 'player'? turn = 'computer' : turn = 'player'
    }
    const getTurn = ()=> {
        return turn
    }
    return{
        getTurn,
        changeTurn
    }
} 

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Turns);

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events */ "./src/events.js");



const Main = () => {
    
    let gameStarted = false
    const initializeBoard = (rows, cols) => {
        return Array.from({ length: rows }, () => Array(cols).fill(false));
    };
    let enemyBoard = initializeBoard(10, 10)
    let playerBoard = initializeBoard(10, 10)

    const { createBoard, placeRandomShip, startGame, attack, updateGrid, playerShipCoordinate} = (0,_dom__WEBPACK_IMPORTED_MODULE_0__["default"])()
    const {dragOver, dragStart, drop, changeOrientation} = (0,_events__WEBPACK_IMPORTED_MODULE_1__["default"])()
    
    const randomShipBtn = document.querySelector('.random-ship')
    const playerGrid = document.querySelector('.player-board')
    const enemyGrid = document.querySelector('.enemy-board')
    const startGameBtn = document.querySelector('.start')
    const ships = document.querySelectorAll('.behicle')
    const playAgainBtn = document.querySelector('.play-again')
    const placedShips = []
    
    createBoard(playerGrid)
    createBoard(enemyGrid)
    
    const playerGridCells = document.querySelectorAll('.player-board div')
    const enemyGridCells = document.querySelectorAll('.enemy-board div')
    
    playAgainBtn.addEventListener('click', ()=> {
        // enemyBoard = initializeBoard(10, 10)
        // playerBoard = initializeBoard(10, 10)
        // updateGrid(playerBoard, playerGrid)
        // updateGrid(enemyBoard, enemyGrid)
        location.reload()
        console.log('play again')
    })

    randomShipBtn.addEventListener('click', ()=> {
        if(!gameStarted){
            randomShipBtn.removeAttribute('disabled')
            playerBoard = placeRandomShip(playerBoard)
        }
    })
    startGameBtn.addEventListener('click', ()=> {
        startGame(playerBoard, enemyBoard)
        gameStarted = true
        randomShipBtn.setAttribute('disabled', true)
        startGameBtn.setAttribute('disabled', true)
    })

    ships.forEach(ship => {
        ship.addEventListener('dragstart', (e)=> {
           if (!gameStarted) dragStart(e, playerBoard)
        })
    })

    ships.forEach(ship => {
        ship.addEventListener('click', (e)=> {
            if (!gameStarted) changeOrientation(e, playerBoard)
        })
    })

    playerGridCells.forEach(cell => {
        cell.addEventListener('dragover', (e)=>{
            if (!gameStarted) dragOver(e,playerBoard, playerGridCells)
        })
    })
    
    playerGridCells.forEach(cell => {
        cell.addEventListener('drop', (e)=>{
           if (!gameStarted) playerBoard = drop(e,cell, playerBoard, playerGridCells, placedShips)
        })
    })

    enemyGridCells.forEach(cell => {
        cell.addEventListener('click', (e)=> {
            attack(e, cell, playerBoard, enemyBoard)
        })
    })
    

}

Main()
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2Qix3QkFBd0I7QUFDeEI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQztBQUN0QztBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJDQUEyQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTywwRUFBMEUsS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsY0FBYyxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxRQUFRLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLGNBQWMsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksU0FBUyxLQUFLLFVBQVUsT0FBTyxZQUFZLE1BQU0sa0JBQWtCLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsUUFBUSxVQUFVLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsUUFBUSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFlBQVksV0FBVyxLQUFLLE1BQU0sTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sTUFBTSxZQUFZLE9BQU8sVUFBVSxVQUFVLFVBQVUsTUFBTSxZQUFZLE9BQU8sVUFBVSxZQUFZLGFBQWEsT0FBTyxZQUFZLE9BQU8sVUFBVSxVQUFVLFlBQVksT0FBTyxZQUFZLE9BQU8sWUFBWSxXQUFXLE9BQU8sWUFBWSxPQUFPLFlBQVksT0FBTyxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLGdDQUFnQyxnQkFBZ0IsaUJBQWlCLDZCQUE2QixHQUFHLFVBQVUsc0JBQXNCLHNCQUFzQixpQkFBaUIsbUJBQW1CLHdCQUF3Qix5QkFBeUIsbUJBQW1CLEdBQUcsU0FBUyw2QkFBNkIsZ0JBQWdCLGlCQUFpQix5QkFBeUIsR0FBRyxRQUFRLG9CQUFvQiwwQkFBMEIsMEJBQTBCLHlCQUF5QixtQkFBbUIsR0FBRyxZQUFZLG9CQUFvQix5Q0FBeUMsMEJBQTBCLDZDQUE2QyxtQkFBbUIsc0JBQXNCLGtCQUFrQixHQUFHLFlBQVksb0JBQW9CLDBCQUEwQixHQUFHLFFBQVEsb0JBQW9CLEdBQUcsa0JBQWtCLHVCQUF1QixvQkFBb0IsaUNBQWlDLDRCQUE0Qiw4QkFBOEIsc0JBQXNCLGlCQUFpQix5QkFBeUIsNEJBQTRCLEtBQUssNkJBQTZCLHVCQUF1QixHQUFHLGdDQUFnQyxzQkFBc0IsR0FBRyx3REFBd0Qsc0JBQXNCLEdBQUcsNkJBQTZCLHNCQUFzQixHQUFHLG9CQUFvQiwwQ0FBMEMsMkNBQTJDLHdCQUF3Qix5QkFBeUIsc0JBQXNCLGdDQUFnQyx1QkFBdUIsR0FBRyxVQUFVLGlCQUFpQix1QkFBdUIsd0JBQXdCLEdBQUcsZ0JBQWdCLHlCQUF5QixtQkFBbUIsb0JBQW9CLDBCQUEwQiw0QkFBNEIsZ0JBQWdCLEdBQUcsV0FBVywwQ0FBMEMsc0JBQXNCLHNCQUFzQiwwQkFBMEIsdUJBQXVCLG1CQUFtQixxQkFBcUIsMkJBQTJCLGdDQUFnQywwQkFBMEIsOEJBQThCLEtBQUssZUFBZSwwQ0FBMEMsR0FBRyxVQUFVLG9CQUFvQixHQUFHLGdCQUFnQixxQkFBcUIsOEJBQThCLGtCQUFrQix1QkFBdUIsR0FBRyx1QkFBdUIseUJBQXlCLG9CQUFvQixHQUFHLGtCQUFrQixvQkFBb0IsdUJBQXVCLG1CQUFtQixHQUFHLGtEQUFrRCx3QkFBd0IsR0FBRyxhQUFhLG9CQUFvQixlQUFlLEdBQUcsYUFBYSx5QkFBeUIsa0JBQWtCLGdCQUFnQixvQkFBb0IsaUJBQWlCLEdBQUcsbUNBQW1DLG9DQUFvQyxvQkFBb0IsdUJBQXVCLGdDQUFnQyxHQUFHLHFCQUFxQix5QkFBeUIsa0JBQWtCLHNCQUFzQixtQkFBbUIsR0FBRyxpQkFBaUIseUJBQXlCLG1CQUFtQixHQUFHLGFBQWEsb0JBQW9CLEdBQUcsc0NBQXNDLGdDQUFnQyxnQ0FBZ0MsZ0NBQWdDLHVCQUF1QiwwQkFBMEIsR0FBRyxTQUFTLG9CQUFvQixlQUFlLDZDQUE2QyxvQ0FBb0Msd0JBQXdCLDBCQUEwQixHQUFHLGdDQUFnQyx5QkFBeUIsMEJBQTBCLEdBQUcsVUFBVSxvQkFBb0IsbUJBQW1CLGtCQUFrQixpQ0FBaUMseUJBQXlCLDBCQUEwQiw4QkFBOEIsR0FBRyxVQUFVLDBDQUEwQyxHQUFHLFFBQVEsNkJBQTZCLDZCQUE2QixtQkFBbUIsR0FBRyxhQUFhLDRCQUE0QixHQUFHLGFBQWEsb0JBQW9CLGVBQWUsR0FBRyxXQUFXLG9CQUFvQiw0Q0FBNEMsbUJBQW1CLDZCQUE2Qix1QkFBdUIsS0FBSyxlQUFlLG1CQUFtQixrQkFBa0IsR0FBRywyQkFBMkIsb0JBQW9CLG1CQUFtQixtQkFBbUIseUJBQXlCLDZCQUE2QixHQUFHLDBCQUEwQixrQkFBa0IsbUJBQW1CLElBQUksYUFBYSw0QkFBNEIsR0FBRyxTQUFTLDhCQUE4QixHQUFHLGFBQWEsMkNBQTJDLEdBQUcsaUNBQWlDLG9CQUFvQixHQUFHLGlDQUFpQyxzQkFBc0IseUNBQXlDLEdBQUcsK0JBQStCLG9CQUFvQixpQ0FBaUMsa0JBQWtCLElBQUksMkJBQTJCLG9CQUFvQixHQUFHLHVCQUF1QixtQkFBbUIsR0FBRyxvQkFBb0IsbUJBQW1CLEdBQUcsc0JBQXNCLG1CQUFtQixHQUFHLHNCQUFzQixtQkFBbUIsSUFBSSxlQUFlLG9CQUFvQix5QkFBeUIsR0FBRyxrQkFBa0Isb0JBQW9CLHlCQUF5QixHQUFHLFNBQVMseUJBQXlCLHdCQUF3QixhQUFhLGNBQWMsd0JBQXdCLHdDQUF3QyxzQkFBc0IsMEJBQTBCLDhCQUE4Qiw0Q0FBNEMsS0FBSyxZQUFZLHdCQUF3QiwwQkFBMEIsK0JBQStCLEdBQUcsNEJBQTRCLG1CQUFtQixrQkFBa0IsR0FBRyxrQkFBa0IsNkNBQTZDLDJCQUEyQixpREFBaUQseUJBQXlCLG1CQUFtQixHQUFHLDZEQUE2RCxZQUFZLHlCQUF5QixvQ0FBb0Msc0JBQXNCLE9BQU8sWUFBWSx5QkFBeUIsbUNBQW1DLHNCQUFzQixPQUFPLGNBQWMseUJBQXlCLG1DQUFtQyxzQkFBc0IsT0FBTyxZQUFZLHlCQUF5QixtQ0FBbUMsc0JBQXNCLE9BQU8sR0FBRyx3QkFBd0IsY0FBYyx3QkFBd0IsbUNBQW1DLHVCQUF1QixPQUFPLFlBQVksd0JBQXdCLGtDQUFrQyx1QkFBdUIsT0FBTyxZQUFZLHdCQUF3QixrQ0FBa0MsdUJBQXVCLE9BQU8sWUFBWSx3QkFBd0Isa0NBQWtDLHVCQUF1QixPQUFPLEdBQUcsMEVBQTBFLG9CQUFvQixnQkFBZ0Isc0JBQXNCLEdBQUcsd0hBQXdILG9CQUFvQix1QkFBdUIseUJBQXlCLEdBQUcsaUpBQWlKLG9CQUFvQixtQkFBbUIsNkJBQTZCLEdBQUcsaUpBQWlKLGlDQUFpQyxxQkFBcUIsR0FBRywrS0FBK0ssNkJBQTZCLEdBQUcsK0RBQStELGtCQUFrQix3QkFBd0Isb0JBQW9CLE9BQU8sb0JBQW9CLHlCQUF5Qix3QkFBd0IsbUJBQW1CLDZCQUE2Qix3QkFBd0IsT0FBTyxHQUFHLG1CQUFtQjtBQUNuNVY7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUN2YjFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFpRztBQUNqRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhO0FBQ3JDLGlCQUFpQix1R0FBYTtBQUM5QixpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLG9GQUFPOzs7O0FBSTJDO0FBQ25FLE9BQU8saUVBQWUsb0ZBQU8sSUFBSSxvRkFBTyxVQUFVLG9GQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7OztBQ3hCaEU7O0FBRWI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNuRmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYm9DO0FBQ0Y7QUFDSjtBQUNaO0FBQ1U7QUFDNUIsT0FBTyxxQkFBcUIsRUFBRSxrREFBSztBQUNuQyxRQUFRO0FBQ1IsdUJBQXVCLEVBQUUsc0RBQVM7O0FBRWxDLE1BQU0seUdBQXlHLEVBQUUscURBQVE7QUFDekgsUUFBUSw0QkFBNEIsRUFBRSxtREFBTzs7QUFFN0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsUUFBUTtBQUNoQyw0QkFBNEIsUUFBUTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsOERBQThELE9BQU8sUUFBUSxPQUFPO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZCxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLElBQUk7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixJQUFJO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0VBQWtFO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0EsdUZBQXVGLEtBQUs7QUFDNUY7QUFDQSw0Q0FBNEMsY0FBYztBQUMxRDtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrRUFBa0U7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQSx3RkFBd0YsS0FBSztBQUM3RjtBQUNBLDRDQUE0QyxjQUFjO0FBQzFEO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFELElBQUksUUFBUSxJQUFJO0FBQ3JFLHFEQUFxRCxJQUFJLFFBQVEsa0JBQWtCO0FBQ25GLG9EQUFvRCxJQUFJLFFBQVEsa0JBQWtCO0FBQ2xGLHFEQUFxRCxJQUFJLFFBQVEsa0JBQWtCO0FBQ25GLG9EQUFvRCxJQUFJLFFBQVEsa0JBQWtCO0FBQ2xGO0FBQ0E7QUFDQSxzREFBc0QsSUFBSSxRQUFRLElBQUk7QUFDdEUsc0RBQXNELGtCQUFrQixRQUFRLElBQUk7QUFDcEYscURBQXFELGtCQUFrQixRQUFRLElBQUk7QUFDbkYsc0RBQXNELGtCQUFrQixRQUFRLElBQUk7QUFDcEYscURBQXFELGtCQUFrQixRQUFRLElBQUk7QUFDbkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsaUVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5WGU7QUFDSTtBQUNoQjtBQUNNO0FBQ1k7QUFDcEMsT0FBTyx1QkFBdUIsRUFBRSxnREFBRztBQUNuQyxLQUFLLGFBQWEsRUFBRSxxREFBUTtBQUM1QixPQUFPLFNBQVMsRUFBRSxtREFBTTtBQUN4QixPQUFPLHdCQUF3QixFQUFFLHNEQUFTOzs7QUFHMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRCxVQUFVO0FBQ3BFLG1EQUFtRCxVQUFVO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7OztBQzlKZjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0IsUUFBUTtBQUNoQyw0QkFBNEIsUUFBUTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsOEJBQThCLHVCQUF1QjtBQUNyRDtBQUNBLHNDQUFzQyxjQUFjO0FBQ3BELHdDQUF3QyxZQUFZO0FBQ3BEO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLDhCQUE4Qix1QkFBdUI7QUFDckQ7QUFDQSxzQ0FBc0MsY0FBYztBQUNwRCx3Q0FBd0MsWUFBWTtBQUNwRDtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSx3QkFBd0IsUUFBUTtBQUNoQyw0QkFBNEIsUUFBUTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQ0FBa0MsdUJBQXVCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBOztBQUVBLFVBQVU7O0FBRVY7QUFDQSxrQ0FBa0MsdUJBQXVCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLG1EQUFtRCxHQUFHO0FBQ3REOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHlEQUF5RCxJQUFJLFFBQVEsSUFBSTtBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RKRTtBQUNVO0FBQ2xCO0FBQ1U7QUFDNUIsT0FBTyxxQkFBcUIsRUFBRSxrREFBSztBQUNuQyxRQUFRO0FBQ1I7QUFDQTtBQUNBLHVCQUF1QixFQUFFLHNEQUFTOztBQUVsQztBQUNBLDBCQUEwQixpREFBSTtBQUM5Qiw2QkFBNkIsaURBQUk7QUFDakMsMEJBQTBCLGlEQUFJO0FBQzlCLDRCQUE0QixpREFBSTtBQUNoQyw0QkFBNEIsaURBQUk7O0FBRWhDLHlCQUF5QixpREFBSTtBQUM3Qiw0QkFBNEIsaURBQUk7QUFDaEMseUJBQXlCLGlEQUFJO0FBQzdCLDJCQUEyQixpREFBSTtBQUMvQiwyQkFBMkIsaURBQUk7O0FBRS9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6RFU7QUFDakMsT0FBTyx5QkFBeUIsRUFBRSxxREFBUTs7QUFFMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7O0FBRVY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3Qm9CO0FBQ1Y7O0FBRXpCO0FBQ0EsK0JBQStCLFlBQVk7O0FBRTNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsT0FBTztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxxQkFBcUI7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxxQkFBcUI7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxxQkFBcUI7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxxQkFBcUI7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLHNEQUFTOztBQUU5QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1DQUFtQyxZQUFZO0FBQy9DOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0RBQVM7QUFDaEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7QUN0SWY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWU7Ozs7Ozs7Ozs7Ozs7O0FDM0JmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlOzs7Ozs7VUNkZjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7OztBQ0F1QjtBQUNNOztBQUU3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixjQUFjO0FBQzFDO0FBQ0E7QUFDQTs7QUFFQSxZQUFZLG1GQUFtRixFQUFFLGdEQUFHO0FBQ3BHLFdBQVcsOENBQThDLEVBQUUsbURBQU07QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7O0FBRUE7O0FBRUEsTSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvYXBwLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9hcHAuY3NzP2E2NzIiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVCb2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVMb29wLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaGVscGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3R1cm5zLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgXG5odG1se1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbjpyb290e1xuICAgIC0tY2VsbC1iZzogYmx1ZTtcbiAgICAtLXNoaXAtYmc6IGdyZXk7XG4gICAgLS1oaXQ6IHJlZDtcbiAgICAtLW1pc3M6IGJsdWU7XG4gICAgLS1mbGVldC1iZy1wOiByZWQ7XG4gICAgLS1mbGVldC1iZy1vOiBncmV5O1xuICAgIC0tZ3JleTogZ3JleTtcbn1cblxuYm9keXtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cbi5tYWlue1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICB3aWR0aDogMTAwdnc7XG59XG5cbi5oZWFkZXJ7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnIgMWZyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc2Nik7XG4gICAgaGVpZ2h0OiAzcmVtO1xuICAgIHBhZGRpbmc6IDAgMXJlbTtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuc2VjdGlvbntcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG59XG4uaGVyb3tcbiAgICBwYWRkaW5nOiAxcmVtO1xufVxuLnNoaXAtY29udGFpbmVye1xuICAgIG1heC13aWR0aDogMTlyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAvKiBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAqL1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGdhcDogLjVyZW07XG4gICAgLyogbWFyZ2luOiAxcmVtIDA7ICovXG4gICAgLyogcGFkZGluZzogMCAxcmVtOyAqL1xufVxuXG4uc2hpcC1jb250YWluZXIgI2NhcnJpZXJ7XG4gICAgbWluLXdpZHRoOiAxMHJlbTtcbn1cblxuLnNoaXAtY29udGFpbmVyICNiYXR0bGVzaGlwe1xuICAgIG1pbi13aWR0aDogOHJlbTtcbn1cblxuLnNoaXAtY29udGFpbmVyICNjcnVpc2VyLC5zaGlwLWNvbnRhaW5lciAjc3VibWFyaW5le1xuICAgIG1pbi13aWR0aDogNnJlbTtcbn1cbi5zaGlwLWNvbnRhaW5lciAjZGVzdHJveWVye1xuICAgIG1pbi13aWR0aDogNHJlbTtcbn1cblxuLmJ1dHRvbnM+YnV0dG9ue1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxOCwgMTM5LCAxNDMpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTAsIDIwMCwgMjAwKTtcbiAgICBwYWRkaW5nOiA4cHggMXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmxvZ297XG4gICAgY29sb3I6IHJlZDtcbiAgICBmb250LXNpemU6IGxhcmdlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uYm9hcmQtYXJlYXtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luOiAycmVtO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxcmVtO1xufVxuXG4udGl0bGV7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmxlZXQtYmctcCk7XG4gICAgLyogd2lkdGg6IDEwMCU7ICovXG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IC41cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IC4zcmVtO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcblxufVxuLnRpdGxlLmVuZW15e1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZsZWV0LWJnLW8pO1xufVxuLmRpdmRlcntcbiAgICBkaXNwbGF5OiBub25lO1xufVxuLmRpdmlkZXIuc2hvd3tcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBvdXRsaW5lOiAxcHggc29saWQgZ3JleTtcbiAgICB3aWR0aDogOTB2dztcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuXG4ucC1ib2FyZCwgLmUtYm9hcmR7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG59XG5cbi5zaGlwLXNlY3Rpb257XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgIGhlaWdodDogNHJlbTtcbn1cblxuLnBsYXllci1zaGlwLWluZGljYXRvciwgLmVuZW15LXNoaXAtaW5kaWNhdG9ye1xuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xufVxuLmNvbC1jb3VudHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMXB4O1xufVxuLnJvdy1jb3VudHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogLTJyZW07XG4gICAgdG9wOiA0cmVtO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ2FwOiAuMXJlbTtcbn1cblxuLnJvdy1jb3VudD5kaXYsIC5jb2wtY291bnQ+ZGl2e1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uaW5kaWNhdG9yLXRpdGxle1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAtNHJlbTtcbiAgICBib3R0b206ICsxLjhyZW07XG4gICAgei1pbmRleDogLTEwO1xufVxuXG4uZS1ncmF2ZXlhcmR7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IC0uN3JlbTtcbn1cbi5ncmF2ZXlhcmR7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cbi5zaGlweWFyZCwgLmdyYXZleWFyZCwgLmUtZ3JhdmV5YXJke1xuICAgIHRleHQtb3JpZW50YXRpb246IHVwcmlnaHQ7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbn1cbi5ib2FyZHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdhcDogMXB4O1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHNreWJsdWU7ICovXG4gICAgaGVpZ2h0OiAyMS4ycmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG5cbi5wbGF5ZXItYm9hcmQsIC5lbmVteS1ib2FyZHtcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcbn1cblxuLmNlbGx7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBoZWlnaHQ6IDJyZW07XG4gICAgd2lkdGg6IDJyZW07XG4gICAgb3V0bGluZTogMXB4IHNvbGlkIHNreWJsdWU7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5maWxse1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2NywgMTQ3LCAyMDQpO1xufVxuLnNoaXB7XG4gICAgYm9yZGVyOiAzcHggc29saWQgYmx1ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xuICAgIHotaW5kZXg6IDEwMDtcbn1cbi5maXJzdENlbGx7XG4gICAgYm9yZGVyOiAycHggc29saWQgcmVkO1xufVxuXG5cbi5zaGlwc3tcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdhcDogNXB4O1xufVxuLmNhcnJpZXJ7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICAgIC8qIHdpZHRoOiAxMHJlbTsgKi9cbn1cbi5jYXJyaWVyIGRpdntcbiAgICBoZWlnaHQ6IDJyZW07XG4gICAgd2lkdGg6IDJyZW07XG59XG5cbi8qIC5zaGlwLWNvbnRhaW5lcj5kaXZ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgaGVpZ2h0OiAycmVtO1xuICAgIHdpZHRoOiBtaW4tY29udGVudDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xufVxuLnNoaXAtY29udGFpbmVyPmRpdj5kaXZ7XG4gICAgd2lkdGg6IDJyZW07XG4gICAgaGVpZ2h0OiAycmVtO1xufSAqL1xuXG4ud3Jvbmd7XG4gICAgYm9yZGVyOiAycHggc29saWQgcmVkO1xufVxuLnZhbGlke1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyZWVuO1xufVxuLmhpZ2hsaWdodHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAzLCAxOTQsIDEwMyk7XG59XG5cblxuXG4uc2hpcC1jb250YWluZXIudmVydGljYWx7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLyogLnNoaXAtY29udGFpbmVyPmRpdjpob3ZlcntcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDQxLCAxMiwgMjMxKTtcbn1cbi5zaGlwLWNvbnRhaW5lcj5kaXYudmVydGljYWx7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICB3aWR0aDogMnJlbTtcbn0gKi9cblxuLyogLmNhcnJpZXIudmVydGljYWx7XG4gICAgaGVpZ2h0OiAxMHJlbTtcbn1cbi5iYXR0bGVzaGlwLnZlcnRpY2Fse1xuICAgIGhlaWdodDogOHJlbTtcbn1cbi5jcnVpc2VyLnZlcnRpY2Fse1xuICAgIGhlaWdodDogNnJlbTtcbn1cbi5zdWJtYXJpbmUudmVydGljYWx7XG4gICAgaGVpZ2h0OiA2cmVtO1xufVxuLmRlc3Ryb3llci52ZXJ0aWNhbHtcbiAgICBoZWlnaHQ6IDRyZW07XG59ICovXG5cbi5lLWJvYXJke1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uZS1ib2FyZC5zaG93e1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uaGl0e1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBjb2xvcjogdmFyKC0taGl0KTtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmV5KTsgKi9cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgcmdiKDI0OSwgMTMsIDUpOyAqL1xufVxuXG4ubWlzc2Vke1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgY29sb3I6IHJnYigyMTQsIDIyNCwgMTgpO1xufVxuXG5cbi8qIHNoaXBzICovXG4uYmVoaWNsZXtcbiAgICBoZWlnaHQ6IDJyZW07XG4gICAgd2lkdGg6IDJyZW07XG59XG5cbi5iZWhpY2xlIHNwYW57XG4gICAgLyogYm9yZGVyOiAycHggc29saWQgcmdiKDM0LCAyMiwgMTk3KTsgKi9cbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg4MywgMTc3LCAxNzcsIDAuNDQpO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICB6LWluZGV4OiAtMTA7XG59XG5cblxuLyogaG9yaXpvbnRhbCBhbmQgdmVydGljbGUgc2l6ZXMgKi9cbi5iZWhpY2xlLnZlcnRpY2xle1xuICAgIC5sZW41e1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwcmVtICsgNHB4KTtcbiAgICAgICAgd2lkdGg6IDJyZW07XG4gICAgfVxuICAgIC5sZW40e1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDhyZW0gKyAzcHgpO1xuICAgICAgICB3aWR0aDogMnJlbTtcbiAgICB9XG5cbiAgICAubGVuM3tcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGhlaWdodDogY2FsYyg2cmVtICsgMnB4KTtcbiAgICAgICAgd2lkdGg6IDJyZW07XG4gICAgfVxuICAgIC5sZW4ye1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDRyZW0gKyAycHgpO1xuICAgICAgICB3aWR0aDogMnJlbTtcbiAgICB9XG59XG5cbi5iZWhpY2xlLmhvcml6b250YWx7XG5cbiAgICAubGVuNXtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgd2lkdGg6IGNhbGMoMTByZW0gKyA0cHgpO1xuICAgICAgICBoZWlnaHQ6IDJyZW07XG4gICAgfVxuICAgIC5sZW40e1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB3aWR0aDogY2FsYyg4cmVtICsgM3B4KTtcbiAgICAgICAgaGVpZ2h0OiAycmVtO1xuICAgIH1cbiAgICAubGVuM3tcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgd2lkdGg6IGNhbGMoNnJlbSArIDJweCk7XG4gICAgICAgIGhlaWdodDogMnJlbTtcbiAgICB9XG4gICAgLmxlbjJ7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHdpZHRoOiBjYWxjKDRyZW0gKyAycHgpO1xuICAgICAgICBoZWlnaHQ6IDJyZW07XG4gICAgfVxufVxuXG4vKiBpbmRpY2F0b3Igc2hpcHMgKi9cbi5wbGF5ZXItc2hpcC1pbmRpY2F0b3IsXG4uZW5lbXktc2hpcC1pbmRpY2F0b3J7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDFyZW07XG4gICAgZmxleC13cmFwOiB3cmFwO1xufVxuLyogQ29tbW9uIHN0eWxlcyBmb3IgcGxheWVyIGFuZCBlbmVteSBzaGlwIGluZGljYXRvcnMgKi9cbi5wbGF5ZXItc2hpcC1pbmRpY2F0b3IgPiBkaXYsXG4uZW5lbXktc2hpcC1pbmRpY2F0b3IgPiBkaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luOiAwLjNyZW0gMDtcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG59XG5cbi8qIFN0eWxlcyBmb3IgaW5uZXIgZGl2cyB3aXRoaW4gcGxheWVyIGFuZCBlbmVteSBzaGlwIGluZGljYXRvcnMgKi9cbi5wbGF5ZXItc2hpcC1pbmRpY2F0b3IgPiBkaXYgPiBkaXYsXG4uZW5lbXktc2hpcC1pbmRpY2F0b3IgPiBkaXYgPiBkaXYge1xuICAgIGhlaWdodDogLjhyZW07XG4gICAgd2lkdGg6IC44cmVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XG59XG5cbi8qIFN0eWxlcyBmb3IgZGVzdHJveWVkIHBsYXllciBhbmQgZW5lbXkgc2hpcCBpbmRpY2F0b3JzICovXG4ucGxheWVyLXNoaXAtaW5kaWNhdG9yID4gZGl2LmRlc3Ryb3llZCxcbi5lbmVteS1zaGlwLWluZGljYXRvciA+IGRpdi5kZXN0cm95ZWQge1xuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7ICovXG4gICAgb3BhY2l0eTogMC40O1xufVxuXG4vKiBTdHlsZXMgZm9yIGlubmVyIGRpdnMgd2l0aGluIGRlc3Ryb3llZCBwbGF5ZXIgYW5kIGVuZW15IHNoaXAgaW5kaWNhdG9ycyAqL1xuLnBsYXllci1zaGlwLWluZGljYXRvciA+IGRpdi5kZXN0cm95ZWQgPiBkaXYsXG4uZW5lbXktc2hpcC1pbmRpY2F0b3IgPiBkaXYuZGVzdHJveWVkID4gZGl2IHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xufVxuXG4vKiB8QnJlYWtQb2ludCAqL1xuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MDBweCkge1xuICAgIC5ib2FyZC1hcmVhe1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBnYXA6IDJyZW07XG4gICAgfVxuICAgIC5kaXZpZGVyLnNob3d7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBoZWlnaHQ6IDI0cmVtO1xuICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9hcHAuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdz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SSxhQUFhO1FBQ2Isd0JBQXdCO1FBQ3hCLFlBQVk7SUFDaEI7SUFDQTtRQUNJLGFBQWE7UUFDYix1QkFBdUI7UUFDdkIsWUFBWTtJQUNoQjtJQUNBO1FBQ0ksYUFBYTtRQUNiLHVCQUF1QjtRQUN2QixZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxhQUFhO1FBQ2IsdUJBQXVCO1FBQ3ZCLFlBQVk7SUFDaEI7QUFDSjs7QUFFQSxvQkFBb0I7QUFDcEI7O0lBRUksYUFBYTtJQUNiLFNBQVM7SUFDVCxlQUFlO0FBQ25CO0FBQ0EsdURBQXVEO0FBQ3ZEOztJQUVJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBLGtFQUFrRTtBQUNsRTs7SUFFSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLHNCQUFzQjtBQUMxQjs7QUFFQSwwREFBMEQ7QUFDMUQ7O0lBRUksNEJBQTRCO0lBQzVCLFlBQVk7QUFDaEI7O0FBRUEsNEVBQTRFO0FBQzVFOztJQUVJLHNCQUFzQjtBQUMxQjs7QUFFQSxnQkFBZ0I7O0FBRWhCO0lBQ0k7UUFDSSxhQUFhO1FBQ2IsU0FBUztJQUNiO0lBQ0E7UUFDSSxjQUFjO1FBQ2QsYUFBYTtRQUNiLFFBQVE7UUFDUixrQkFBa0I7UUFDbEIsYUFBYTtJQUNqQjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcbmh0bWx7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3R7XFxuICAgIC0tY2VsbC1iZzogYmx1ZTtcXG4gICAgLS1zaGlwLWJnOiBncmV5O1xcbiAgICAtLWhpdDogcmVkO1xcbiAgICAtLW1pc3M6IGJsdWU7XFxuICAgIC0tZmxlZXQtYmctcDogcmVkO1xcbiAgICAtLWZsZWV0LWJnLW86IGdyZXk7XFxuICAgIC0tZ3JleTogZ3JleTtcXG59XFxuXFxuYm9keXtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcbi5tYWlue1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICAgIHdpZHRoOiAxMDB2dztcXG59XFxuXFxuLmhlYWRlcntcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyIDFmcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc2Nik7XFxuICAgIGhlaWdodDogM3JlbTtcXG4gICAgcGFkZGluZzogMCAxcmVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuc2VjdGlvbntcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG59XFxuLmhlcm97XFxuICAgIHBhZGRpbmc6IDFyZW07XFxufVxcbi5zaGlwLWNvbnRhaW5lcntcXG4gICAgbWF4LXdpZHRoOiAxOXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgLyogZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgKi9cXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgZ2FwOiAuNXJlbTtcXG4gICAgLyogbWFyZ2luOiAxcmVtIDA7ICovXFxuICAgIC8qIHBhZGRpbmc6IDAgMXJlbTsgKi9cXG59XFxuXFxuLnNoaXAtY29udGFpbmVyICNjYXJyaWVye1xcbiAgICBtaW4td2lkdGg6IDEwcmVtO1xcbn1cXG5cXG4uc2hpcC1jb250YWluZXIgI2JhdHRsZXNoaXB7XFxuICAgIG1pbi13aWR0aDogOHJlbTtcXG59XFxuXFxuLnNoaXAtY29udGFpbmVyICNjcnVpc2VyLC5zaGlwLWNvbnRhaW5lciAjc3VibWFyaW5le1xcbiAgICBtaW4td2lkdGg6IDZyZW07XFxufVxcbi5zaGlwLWNvbnRhaW5lciAjZGVzdHJveWVye1xcbiAgICBtaW4td2lkdGg6IDRyZW07XFxufVxcblxcbi5idXR0b25zPmJ1dHRvbntcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE4LCAxMzksIDE0Myk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTAsIDIwMCwgMjAwKTtcXG4gICAgcGFkZGluZzogOHB4IDFyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4ubG9nb3tcXG4gICAgY29sb3I6IHJlZDtcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5ib2FyZC1hcmVhe1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG1hcmdpbjogMnJlbTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbi50aXRsZXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmxlZXQtYmctcCk7XFxuICAgIC8qIHdpZHRoOiAxMDAlOyAqL1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IC41cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAuM3JlbTtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuXFxufVxcbi50aXRsZS5lbmVteXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmxlZXQtYmctbyk7XFxufVxcbi5kaXZkZXJ7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5kaXZpZGVyLnNob3d7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBvdXRsaW5lOiAxcHggc29saWQgZ3JleTtcXG4gICAgd2lkdGg6IDkwdnc7XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxufVxcblxcbi5wLWJvYXJkLCAuZS1ib2FyZHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4uc2hpcC1zZWN0aW9ue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICBoZWlnaHQ6IDRyZW07XFxufVxcblxcbi5wbGF5ZXItc2hpcC1pbmRpY2F0b3IsIC5lbmVteS1zaGlwLWluZGljYXRvcntcXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XFxufVxcbi5jb2wtY291bnR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMXB4O1xcbn1cXG4ucm93LWNvdW50e1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IC0ycmVtO1xcbiAgICB0b3A6IDRyZW07XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogLjFyZW07XFxufVxcblxcbi5yb3ctY291bnQ+ZGl2LCAuY29sLWNvdW50PmRpdntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcblxcbi5pbmRpY2F0b3ItdGl0bGV7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogLTRyZW07XFxuICAgIGJvdHRvbTogKzEuOHJlbTtcXG4gICAgei1pbmRleDogLTEwO1xcbn1cXG5cXG4uZS1ncmF2ZXlhcmR7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogLS43cmVtO1xcbn1cXG4uZ3JhdmV5YXJke1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG4uc2hpcHlhcmQsIC5ncmF2ZXlhcmQsIC5lLWdyYXZleWFyZHtcXG4gICAgdGV4dC1vcmllbnRhdGlvbjogdXByaWdodDtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXG59XFxuLmJvYXJke1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDFweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHNreWJsdWU7ICovXFxuICAgIGhlaWdodDogMjEuMnJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG59XFxuXFxuLnBsYXllci1ib2FyZCwgLmVuZW15LWJvYXJke1xcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XFxuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XFxufVxcblxcbi5jZWxse1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIHdpZHRoOiAycmVtO1xcbiAgICBvdXRsaW5lOiAxcHggc29saWQgc2t5Ymx1ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmZpbGx7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2NywgMTQ3LCAyMDQpO1xcbn1cXG4uc2hpcHtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgYmx1ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG4gICAgei1pbmRleDogMTAwO1xcbn1cXG4uZmlyc3RDZWxse1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XFxufVxcblxcblxcbi5zaGlwc3tcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiA1cHg7XFxufVxcbi5jYXJyaWVye1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XFxuICAgIC8qIHdpZHRoOiAxMHJlbTsgKi9cXG59XFxuLmNhcnJpZXIgZGl2e1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIHdpZHRoOiAycmVtO1xcbn1cXG5cXG4vKiAuc2hpcC1jb250YWluZXI+ZGl2e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xcbn1cXG4uc2hpcC1jb250YWluZXI+ZGl2PmRpdntcXG4gICAgd2lkdGg6IDJyZW07XFxuICAgIGhlaWdodDogMnJlbTtcXG59ICovXFxuXFxuLndyb25ne1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XFxufVxcbi52YWxpZHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgZ3JlZW47XFxufVxcbi5oaWdobGlnaHR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDMsIDE5NCwgMTAzKTtcXG59XFxuXFxuXFxuXFxuLnNoaXAtY29udGFpbmVyLnZlcnRpY2Fse1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4vKiAuc2hpcC1jb250YWluZXI+ZGl2OmhvdmVye1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYig0MSwgMTIsIDIzMSk7XFxufVxcbi5zaGlwLWNvbnRhaW5lcj5kaXYudmVydGljYWx7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICB3aWR0aDogMnJlbTtcXG59ICovXFxuXFxuLyogLmNhcnJpZXIudmVydGljYWx7XFxuICAgIGhlaWdodDogMTByZW07XFxufVxcbi5iYXR0bGVzaGlwLnZlcnRpY2Fse1xcbiAgICBoZWlnaHQ6IDhyZW07XFxufVxcbi5jcnVpc2VyLnZlcnRpY2Fse1xcbiAgICBoZWlnaHQ6IDZyZW07XFxufVxcbi5zdWJtYXJpbmUudmVydGljYWx7XFxuICAgIGhlaWdodDogNnJlbTtcXG59XFxuLmRlc3Ryb3llci52ZXJ0aWNhbHtcXG4gICAgaGVpZ2h0OiA0cmVtO1xcbn0gKi9cXG5cXG4uZS1ib2FyZHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uZS1ib2FyZC5zaG93e1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5oaXR7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgY29sb3I6IHZhcigtLWhpdCk7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZXkpOyAqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgcmdiKDI0OSwgMTMsIDUpOyAqL1xcbn1cXG5cXG4ubWlzc2Vke1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgY29sb3I6IHJnYigyMTQsIDIyNCwgMTgpO1xcbn1cXG5cXG5cXG4vKiBzaGlwcyAqL1xcbi5iZWhpY2xle1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIHdpZHRoOiAycmVtO1xcbn1cXG5cXG4uYmVoaWNsZSBzcGFue1xcbiAgICAvKiBib3JkZXI6IDJweCBzb2xpZCByZ2IoMzQsIDIyLCAxOTcpOyAqL1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoODMsIDE3NywgMTc3LCAwLjQ0KTtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICB6LWluZGV4OiAtMTA7XFxufVxcblxcblxcbi8qIGhvcml6b250YWwgYW5kIHZlcnRpY2xlIHNpemVzICovXFxuLmJlaGljbGUudmVydGljbGV7XFxuICAgIC5sZW41e1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICBoZWlnaHQ6IGNhbGMoMTByZW0gKyA0cHgpO1xcbiAgICAgICAgd2lkdGg6IDJyZW07XFxuICAgIH1cXG4gICAgLmxlbjR7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIGhlaWdodDogY2FsYyg4cmVtICsgM3B4KTtcXG4gICAgICAgIHdpZHRoOiAycmVtO1xcbiAgICB9XFxuXFxuICAgIC5sZW4ze1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICBoZWlnaHQ6IGNhbGMoNnJlbSArIDJweCk7XFxuICAgICAgICB3aWR0aDogMnJlbTtcXG4gICAgfVxcbiAgICAubGVuMntcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDRyZW0gKyAycHgpO1xcbiAgICAgICAgd2lkdGg6IDJyZW07XFxuICAgIH1cXG59XFxuXFxuLmJlaGljbGUuaG9yaXpvbnRhbHtcXG5cXG4gICAgLmxlbjV7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgd2lkdGg6IGNhbGMoMTByZW0gKyA0cHgpO1xcbiAgICAgICAgaGVpZ2h0OiAycmVtO1xcbiAgICB9XFxuICAgIC5sZW40e1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIHdpZHRoOiBjYWxjKDhyZW0gKyAzcHgpO1xcbiAgICAgICAgaGVpZ2h0OiAycmVtO1xcbiAgICB9XFxuICAgIC5sZW4ze1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIHdpZHRoOiBjYWxjKDZyZW0gKyAycHgpO1xcbiAgICAgICAgaGVpZ2h0OiAycmVtO1xcbiAgICB9XFxuICAgIC5sZW4ye1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIHdpZHRoOiBjYWxjKDRyZW0gKyAycHgpO1xcbiAgICAgICAgaGVpZ2h0OiAycmVtO1xcbiAgICB9XFxufVxcblxcbi8qIGluZGljYXRvciBzaGlwcyAqL1xcbi5wbGF5ZXItc2hpcC1pbmRpY2F0b3IsXFxuLmVuZW15LXNoaXAtaW5kaWNhdG9ye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDFyZW07XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuLyogQ29tbW9uIHN0eWxlcyBmb3IgcGxheWVyIGFuZCBlbmVteSBzaGlwIGluZGljYXRvcnMgKi9cXG4ucGxheWVyLXNoaXAtaW5kaWNhdG9yID4gZGl2LFxcbi5lbmVteS1zaGlwLWluZGljYXRvciA+IGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1hcmdpbjogMC4zcmVtIDA7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG59XFxuXFxuLyogU3R5bGVzIGZvciBpbm5lciBkaXZzIHdpdGhpbiBwbGF5ZXIgYW5kIGVuZW15IHNoaXAgaW5kaWNhdG9ycyAqL1xcbi5wbGF5ZXItc2hpcC1pbmRpY2F0b3IgPiBkaXYgPiBkaXYsXFxuLmVuZW15LXNoaXAtaW5kaWNhdG9yID4gZGl2ID4gZGl2IHtcXG4gICAgaGVpZ2h0OiAuOHJlbTtcXG4gICAgd2lkdGg6IC44cmVtO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xcbn1cXG5cXG4vKiBTdHlsZXMgZm9yIGRlc3Ryb3llZCBwbGF5ZXIgYW5kIGVuZW15IHNoaXAgaW5kaWNhdG9ycyAqL1xcbi5wbGF5ZXItc2hpcC1pbmRpY2F0b3IgPiBkaXYuZGVzdHJveWVkLFxcbi5lbmVteS1zaGlwLWluZGljYXRvciA+IGRpdi5kZXN0cm95ZWQge1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCBncmV5OyAqL1xcbiAgICBvcGFjaXR5OiAwLjQ7XFxufVxcblxcbi8qIFN0eWxlcyBmb3IgaW5uZXIgZGl2cyB3aXRoaW4gZGVzdHJveWVkIHBsYXllciBhbmQgZW5lbXkgc2hpcCBpbmRpY2F0b3JzICovXFxuLnBsYXllci1zaGlwLWluZGljYXRvciA+IGRpdi5kZXN0cm95ZWQgPiBkaXYsXFxuLmVuZW15LXNoaXAtaW5kaWNhdG9yID4gZGl2LmRlc3Ryb3llZCA+IGRpdiB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XFxufVxcblxcbi8qIHxCcmVha1BvaW50ICovXFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzAwcHgpIHtcXG4gICAgLmJvYXJkLWFyZWF7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZ2FwOiAycmVtO1xcbiAgICB9XFxuICAgIC5kaXZpZGVyLnNob3d7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIGhlaWdodDogMjRyZW07XFxuICAgICAgICB3aWR0aDogMDtcXG4gICAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYXBwLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2FwcC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBHYW1lQm9hcmQgZnJvbSBcIi4vZ2FtZUJvYXJkXCI7XG5pbXBvcnQgZ2FtZUxvb3AgZnJvbSBcIi4vZ2FtZUxvb3BcIjtcbmltcG9ydCBQbGF5ZXJzIGZyb20gJy4vcGxheWVyJ1xuaW1wb3J0ICcuL2FwcC5jc3MnXG5pbXBvcnQgVHVybnMgZnJvbSBcIi4vdHVybnNcIjtcbmNvbnN0IHtnZXRUdXJuLCBjaGFuZ2VUdXJufSA9IFR1cm5zKClcbmNvbnN0IHsgaXNWYWxpZE1vdmUsXG4gICAgaXNBbGxTaGlwU3Vua2VkLCB9ID0gR2FtZUJvYXJkKClcblxubGV0IHsgcGxheWVyQm9hcmQsIGVuZW15Qm9hcmQsIHBsYWNlQ29tcHV0ZXJTaGlwc1JhbmRvbWx5LCBwbGFjZVBsYXllclNoaXBzUmFuZG9tbHksIHBsYXllclNoaXBzLCBlbmVteVNoaXBzIH0gPSBnYW1lTG9vcCgpXG5jb25zdCB7IHBsYXllck1vdmUsIGNvbXB1dGVyc01vdmUgfSA9IFBsYXllcnMocGxheWVyU2hpcHMpXG5cbmNvbnN0IFtwbGF5ZXJDYXJyaWVyLCBwbGF5ZXJCYXR0bGVzaGlwLCBwbGF5ZXJDcnVpc2VyLCBwbGF5ZXJTdWJtYXJpbmUsIHBsYXllckRlc3Ryb3llcl0gPSBwbGF5ZXJTaGlwc1xuXG5jb25zdCBEb20gPSAoKT0+IHtcbiAgICBcbiAgIGxldCBwbGF5ZXJHcmlkQ2VsbHM7XG4gICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCk9PiB7XG4gICAgICAgcGxheWVyR3JpZENlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBsYXllci1ib2FyZCBkaXYnKVxuICAgIC8vICAgIGNvbnNvbGUubG9nKHBsYXllckdyaWRDZWxscylcbiAgIH0pXG4gICAgY29uc3QgcGxheWVyR3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXItYm9hcmQnKVxuICAgIGNvbnN0IGVuZW15R3JpZEFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZS1ib2FyZCcpXG4gICAgY29uc3QgZW5lbXlHcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVuZW15LWJvYXJkJylcbiAgICBcbiAgICBjb25zdCBjcmVhdGVCb2FyZCA9IChib2FyZCkgPT4ge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnY2VsbCcpXG4gICAgICAgICAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoJ3gnLCBpKVxuICAgICAgICAgICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKCd5JywgailcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBib2FyZC5hcHBlbmRDaGlsZChjZWxsKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgICAgICAvLyBEcmFnIGFuZCBEcm9wIC0tLS0tLVxuICAgICAgICBjb25zdCBwbGF5ZXJTaGlwSW5kaWNhdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci1zaGlwLWluZGljYXRvcicpXG4gICAgICAgIGNvbnN0IGVuZW15U2hpcEluZGljYXRvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbmVteS1zaGlwLWluZGljYXRvcicpXG4gICAgICAgIFxuICAgICAgICAvLyBlbmQgb2YgZHJhZyBhbmQgZHJvcC0tLS0tLVxuICAgICAgICBjb25zdCB1cGRhdGVHcmlkID0gKGJvYXJkLCBncmlkKSA9PiB7ICAgICAgIFxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocGxheWVyR3JpZENlbGxzKVxuICAgICAgICAgICAgY29uc29sZS5sb2coYm9hcmQpXG4gICAgICAgICAgICBwbGF5ZXJHcmlkQ2VsbHMuZm9yRWFjaChjZWxsID0+IHtcbiAgICAgICAgICAgICAgICBjZWxsLmlubmVySHRtbCA9ICcnXG4gICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdzaGlwJylcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGJvYXJkLmZvckVhY2goKHJvdywgcm93SWR4KSA9PiB7XG4gICAgICAgICAgICAgICAgcm93LmZvckVhY2goKGNvbCwgY29sSWR4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBncmlkLnF1ZXJ5U2VsZWN0b3IoYFt4PVwiJHtyb3dJZHh9XCJdW3k9XCIke2NvbElkeH1cIl1gKVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJvYXJkW3Jvd0lkeF1bY29sSWR4XSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuaW5uZXJIdG1sID0gJydcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGJvYXJkW3Jvd0lkeF1bY29sSWR4XSA9PT0gJ21pc3NlZCcpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gJ+KTgu+4jydcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ21pc3NlZCcpXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGJvYXJkW3Jvd0lkeF1bY29sSWR4XSA9PT0gJ3JldmVsZWQnKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9ICfinYwnXG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoaXQnKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0pXG59XG5cblxuXG4vLyByYW5kb20gc2hpcCBwbGFjZW1lbnQ6ID0gXG5jb25zdCBwbGFjZVJhbmRvbVNoaXAgPSAocGxheWVyQm9hcmQpID0+IHtcbiAgICBjb25zdCBzdGFydEdhbWVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhcnQnKVxuICAgIHBsYXllckJvYXJkID0gcGxhY2VQbGF5ZXJTaGlwc1JhbmRvbWx5KHBsYXllckJvYXJkKVxuICAgIHVwZGF0ZUdyaWQocGxheWVyQm9hcmQsIHBsYXllckdyaWQpXG4gICAgc3RhcnRHYW1lQnRuLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuXG4gICAgcmV0dXJuIHBsYXllckJvYXJkXG59XG5cbi8vIHN0YXJ0IGdhbWUuXG5jb25zdCBwbGF5ZXJTaGlwQ29vcmRpbmF0ZSA9IHtcbiAgICAnY2Fycmllcic6IFtdLFxuICAgICdiYXR0bGVzaGlwJzogW10sXG4gICAgJ2NydWlzZXInOiBbXSxcbiAgICAnc3VibWFyaW5lJzogW10sXG4gICAgJ2Rlc3Ryb3llcic6IFtdLFxufVxuY29uc3QgZW5lbXlTaGlwQ29vcmRpbmF0ZSA9IHtcbiAgICAnY2Fycmllcic6IFtdLFxuICAgICdiYXR0bGVzaGlwJzogW10sXG4gICAgJ2NydWlzZXInOiBbXSxcbiAgICAnc3VibWFyaW5lJzogW10sXG4gICAgJ2Rlc3Ryb3llcic6IFtdLFxufVxuXG5jb25zdCBzdGFydEdhbWUgPSAocGxheWVyQm9hcmQsIGVuZW15Qm9hcmQpID0+IHtcbiAgICBjb25zdCBkaXZpZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpdmlkZXInKVxuICAgIGNvbnN0IHNoaXBZYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoaXB5YXJkJylcblxuICAgIGVuZW15Qm9hcmQgPSBwbGFjZUNvbXB1dGVyU2hpcHNSYW5kb21seShlbmVteUJvYXJkKVxuICAgIGVuZW15R3JpZEFyZWEuY2xhc3NMaXN0LmFkZCgnc2hvdycpXG4gICAgZGl2aWRlci5jbGFzc0xpc3QuYWRkKCdzaG93JylcbiAgICBzaGlwWWFyZC50ZXh0Q29udGVudCA9ICdHcmF2ZXlhcmQnXG4gICAgXG4gICAgcGxheWVyQm9hcmQuZm9yRWFjaCgocm93LCByb3dJZHgpID0+IHtcbiAgICAgICAgcm93LmZvckVhY2goKGNvbCwgY29sSWR4KSA9PiB7XG4gICAgICAgICAgICBpZiAocGxheWVyQm9hcmRbcm93SWR4XVtjb2xJZHhdLm5hbWUgPT09ICdjYXJyaWVyJykge1xuICAgICAgICAgICAgICAgIHBsYXllclNoaXBDb29yZGluYXRlWydjYXJyaWVyJ10ucHVzaChbcm93SWR4LCBjb2xJZHhdKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAocGxheWVyQm9hcmRbcm93SWR4XVtjb2xJZHhdLm5hbWUgPT09ICdiYXR0bGVzaGlwJykge1xuICAgICAgICAgICAgICAgIHBsYXllclNoaXBDb29yZGluYXRlWydiYXR0bGVzaGlwJ10ucHVzaChbcm93SWR4LCBjb2xJZHhdKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAocGxheWVyQm9hcmRbcm93SWR4XVtjb2xJZHhdLm5hbWUgPT09ICdjcnVpc2VyJykge1xuICAgICAgICAgICAgICAgIHBsYXllclNoaXBDb29yZGluYXRlWydjcnVpc2VyJ10ucHVzaChbcm93SWR4LCBjb2xJZHhdKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAocGxheWVyQm9hcmRbcm93SWR4XVtjb2xJZHhdLm5hbWUgPT09ICdzdWJtYXJpbmUnKSB7XG4gICAgICAgICAgICAgICAgcGxheWVyU2hpcENvb3JkaW5hdGVbJ3N1Ym1hcmluZSddLnB1c2goW3Jvd0lkeCwgY29sSWR4XSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHBsYXllckJvYXJkW3Jvd0lkeF1bY29sSWR4XS5uYW1lID09PSAnZGVzdHJveWVyJykge1xuICAgICAgICAgICAgICAgIHBsYXllclNoaXBDb29yZGluYXRlWydkZXN0cm95ZXInXS5wdXNoKFtyb3dJZHgsIGNvbElkeF0pXG4gICAgICAgICAgICB9IGVsc2UgcmV0dXJuXG4gICAgICAgIH0pXG4gICAgfSlcbiAgICBcbiAgICBlbmVteUJvYXJkLmZvckVhY2goKHJvdywgcm93SWR4KSA9PiB7XG4gICAgICAgIHJvdy5mb3JFYWNoKChjb2wsIGNvbElkeCkgPT4ge1xuICAgICAgICAgICAgaWYgKGVuZW15Qm9hcmRbcm93SWR4XVtjb2xJZHhdLm5hbWUgPT09ICdjYXJyaWVyJykge1xuICAgICAgICAgICAgICAgIGVuZW15U2hpcENvb3JkaW5hdGVbJ2NhcnJpZXInXS5wdXNoKFtyb3dJZHgsIGNvbElkeF0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChlbmVteUJvYXJkW3Jvd0lkeF1bY29sSWR4XS5uYW1lID09PSAnYmF0dGxlc2hpcCcpIHtcbiAgICAgICAgICAgICAgICBlbmVteVNoaXBDb29yZGluYXRlWydiYXR0bGVzaGlwJ10ucHVzaChbcm93SWR4LCBjb2xJZHhdKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZW5lbXlCb2FyZFtyb3dJZHhdW2NvbElkeF0ubmFtZSA9PT0gJ2NydWlzZXInKSB7XG4gICAgICAgICAgICAgICAgZW5lbXlTaGlwQ29vcmRpbmF0ZVsnY3J1aXNlciddLnB1c2goW3Jvd0lkeCwgY29sSWR4XSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGVuZW15Qm9hcmRbcm93SWR4XVtjb2xJZHhdLm5hbWUgPT09ICdzdWJtYXJpbmUnKSB7XG4gICAgICAgICAgICAgICAgZW5lbXlTaGlwQ29vcmRpbmF0ZVsnc3VibWFyaW5lJ10ucHVzaChbcm93SWR4LCBjb2xJZHhdKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZW5lbXlCb2FyZFtyb3dJZHhdW2NvbElkeF0ubmFtZSA9PT0gJ2Rlc3Ryb3llcicpIHtcbiAgICAgICAgICAgICAgICBlbmVteVNoaXBDb29yZGluYXRlWydkZXN0cm95ZXInXS5wdXNoKFtyb3dJZHgsIGNvbElkeF0pXG4gICAgICAgICAgICB9IGVsc2UgcmV0dXJuXG4gICAgICAgIH0pXG4gICAgfSlcbiAgICBcbiAgICBcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBlbmVteVNoaXBDb29yZGluYXRlKSB7XG4gICAgICAgIGNvbnN0IHNoaXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBzaGlwLmNsYXNzTGlzdC5hZGQoYCR7a2V5fS1pbmRpY2F0b3JgKVxuICAgICAgICBcbiAgICAgICAgZW5lbXlTaGlwQ29vcmRpbmF0ZVtrZXldLmZvckVhY2goYXJyID0+IHsgICBcbiAgICAgICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICBzaGlwLmFwcGVuZENoaWxkKGRpdilcbiAgICAgICAgfSlcbiAgICAgICAgZW5lbXlTaGlwSW5kaWNhdG9yLmFwcGVuZENoaWxkKHNoaXApXG4gICAgfVxuICAgIFxuICAgIGZvciAoY29uc3Qga2V5IGluIHBsYXllclNoaXBDb29yZGluYXRlKSB7XG4gICAgICAgIGNvbnN0IHNoaXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBzaGlwLmNsYXNzTGlzdC5hZGQoYCR7a2V5fS1pbmRpY2F0b3JgKVxuICAgICAgICBcbiAgICAgICAgcGxheWVyU2hpcENvb3JkaW5hdGVba2V5XS5mb3JFYWNoKGFyciA9PiB7ICAgXG4gICAgICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgc2hpcC5hcHBlbmRDaGlsZChkaXYpXG4gICAgICAgIH0pXG4gICAgICAgIHBsYXllclNoaXBJbmRpY2F0b3IuYXBwZW5kQ2hpbGQoc2hpcClcbiAgICB9XG4gICAgXG59XG5cblxuY29uc3QgYXR0YWNrID0gKGUsIGNlbGwsIHBsYXllckJvYXJkLCBlbmVteUJvYXJkKSA9PiB7XG5cbiAgICAgICAgY29uc3QgeCA9IGNlbGwuZ2V0QXR0cmlidXRlKCd4JylcbiAgICAgICAgY29uc3QgeSA9IGNlbGwuZ2V0QXR0cmlidXRlKCd5JylcbiAgICAgICAgXG4gICAgICAgIGlmICh4ICYmIHkpIHtcblxuICAgICAgICAgICAgaWYgKGlzQWxsU2hpcFN1bmtlZChwbGF5ZXJTaGlwcywgZW5lbXlTaGlwcykpIHtcbiAgICAgICAgICAgICAgICBhbGVydCgnR2FtZSBPdmVyJylcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYoZ2V0VHVybigpID09PSAncGxheWVyJyAmJiAoZW5lbXlCb2FyZFt4XVt5XSAhPT0gJ21pc3NlZCcgJiYgZW5lbXlCb2FyZFt4XVt5XSAhPT0gJ3JldmVsZWQnKSl7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGdldFR1cm4oKSwgY2hhbmdlVHVybigpKVxuICAgICAgICAgICAgICAgICAgICBlbmVteUJvYXJkID0gcGxheWVyTW92ZShlbmVteUJvYXJkLCB4LCB5KVxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVHcmlkKGVuZW15Qm9hcmQsIGVuZW15R3JpZClcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlVHVybigpXG4gICAgICAgICAgICAgICAgICAgIC8vIGVsc2UgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLy8gb25jZSBhIHNoaXAgaXMgc3Vua2VkIGl0IHVwZGF0ZXMgdGhlIHNhcnJvdW5kaW5nIHBsYWNlcyBhcyBlbXB0eS4uXG4gICAgICAgICAgICAgICAgICAgIGVuZW15U2hpcHMuZm9yRWFjaChzaGlwID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNoaXAuaXNTdW5rZWQoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjb29yZGluYXRlcyA9IGVuZW15U2hpcENvb3JkaW5hdGVbc2hpcC5uYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbGFzdElkeCA9IGNvb3JkaW5hdGVzLmxlbmd0aCAtIDE7IC8vIEdldCB0aGUgaW5kZXggb2YgdGhlIGxhc3QgY29vcmRpbmF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzLmZvckVhY2goKGFyciwgaWR4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBbeCwgeV0gPSBhcnI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHggPSBwYXJzZUludCh4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeSA9IHBhcnNlSW50KHkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIGN1cnJlbnQgY29vcmRpbmF0ZSBpcyB0aGUgZmlyc3Qgb3IgbGFzdCBjb29yZGluYXRlIG9mIHRoZSBzaGlwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpZHggPT09IDAgfHwgaWR4ID09PSBsYXN0SWR4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDaGVjayBpZiBhZGphY2VudCBjZWxscyBhcmUgd2l0aGluIGJvdW5kcyBhbmQgbm90IGFscmVhZHkgcmV2ZWFsZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh4IC0gMSA+PSAwICYmIHkgLSAxID49IDAgJiYgZW5lbXlCb2FyZFt4IC0gMV1beSAtIDFdICE9PSAncmV2ZWxlZCcpIGVuZW15Qm9hcmRbeCAtIDFdW3kgLSAxXSA9ICdtaXNzZWQnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHggLSAxID49IDAgJiYgeSArIDEgPCBlbmVteUJvYXJkW3hdLmxlbmd0aCAmJiBlbmVteUJvYXJkW3ggLSAxXVt5ICsgMV0gIT09ICdyZXZlbGVkJykgZW5lbXlCb2FyZFt4IC0gMV1beSArIDFdID0gJ21pc3NlZCc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoeCArIDEgPCBlbmVteUJvYXJkLmxlbmd0aCAmJiB5ICsgMSA8IGVuZW15Qm9hcmRbeF0ubGVuZ3RoICYmIGVuZW15Qm9hcmRbeCArIDFdW3kgKyAxXSAhPT0gJ3JldmVsZWQnKSBlbmVteUJvYXJkW3ggKyAxXVt5ICsgMV0gPSAnbWlzc2VkJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh4ICsgMSA8IGVuZW15Qm9hcmQubGVuZ3RoICYmIHkgLSAxID49IDAgJiYgZW5lbXlCb2FyZFt4ICsgMV1beSAtIDFdICE9PSAncmV2ZWxlZCcpIGVuZW15Qm9hcmRbeCArIDFdW3kgLSAxXSA9ICdtaXNzZWQnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDaGVjayBhZGphY2VudCBjZWxscyBmb3IgZWFjaCBjb29yZGluYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh4IC0gMSA+PSAwICYmIGVuZW15Qm9hcmRbeCAtIDFdW3ldICE9PSAncmV2ZWxlZCcpIGVuZW15Qm9hcmRbeCAtIDFdW3ldID0gJ21pc3NlZCc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh4ICsgMSA8IGVuZW15Qm9hcmQubGVuZ3RoICYmIGVuZW15Qm9hcmRbeCArIDFdW3ldICE9PSAncmV2ZWxlZCcpIGVuZW15Qm9hcmRbeCArIDFdW3ldID0gJ21pc3NlZCc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh5IC0gMSA+PSAwICYmIGVuZW15Qm9hcmRbeF1beSAtIDFdICE9PSAncmV2ZWxlZCcpIGVuZW15Qm9hcmRbeF1beSAtIDFdID0gJ21pc3NlZCc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh5ICsgMSA8IGVuZW15Qm9hcmRbeF0ubGVuZ3RoICYmIGVuZW15Qm9hcmRbeF1beSArIDFdICE9PSAncmV2ZWxlZCcpIGVuZW15Qm9hcmRbeF1beSArIDFdID0gJ21pc3NlZCc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdXBkYXRlIGluZGljYXRvciBzaGlwcy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuYW1lID0gc2hpcC5uYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5kaWNhdG9yU2hpcCA9IGVuZW15U2hpcEluZGljYXRvci5xdWVyeVNlbGVjdG9yKGAuJHtuYW1lfS1pbmRpY2F0b3JgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGljYXRvclNoaXAuY2xhc3NMaXN0LmFkZCgnZGVzdHJveWVkJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh7aW5kaWNhdG9yU2hpcH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYoZ2V0VHVybigpID09PSAnY29tcHV0ZXInKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyQm9hcmQgPSBjb21wdXRlcnNNb3ZlKHBsYXllckJvYXJkKVxuICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlVHVybigpXG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVHcmlkKHBsYXllckJvYXJkLCBwbGF5ZXJHcmlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBvbmNlIGEgc2hpcCBpcyBzdW5rZWQgaXQgdXBkYXRlcyB0aGUgc2Fycm91bmRpbmcgcGxhY2VzIGFzIGVtcHR5Li5cbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllclNoaXBzLmZvckVhY2goc2hpcCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coc2hpcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNoaXAuaXNTdW5rZWQoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjb29yZGluYXRlcyA9IHBsYXllclNoaXBDb29yZGluYXRlW3NoaXAubmFtZV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxhc3RJZHggPSBjb29yZGluYXRlcy5sZW5ndGggLSAxOyAvLyBHZXQgdGhlIGluZGV4IG9mIHRoZSBsYXN0IGNvb3JkaW5hdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb29yZGluYXRlcy5mb3JFYWNoKChhcnIsIGlkeCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgW3gsIHldID0gYXJyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4ID0gcGFyc2VJbnQoeCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHkgPSBwYXJzZUludCh5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIHRoZSBjdXJyZW50IGNvb3JkaW5hdGUgaXMgdGhlIGZpcnN0IG9yIGxhc3QgY29vcmRpbmF0ZSBvZiB0aGUgc2hpcFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaWR4ID09PSAwIHx8IGlkeCA9PT0gbGFzdElkeCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgYWRqYWNlbnQgY2VsbHMgYXJlIHdpdGhpbiBib3VuZHMgYW5kIG5vdCBhbHJlYWR5IHJldmVhbGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoeCAtIDEgPj0gMCAmJiB5IC0gMSA+PSAwICYmIHBsYXllckJvYXJkW3ggLSAxXVt5IC0gMV0gIT09ICdyZXZlbGVkJykgcGxheWVyQm9hcmRbeCAtIDFdW3kgLSAxXSA9ICdtaXNzZWQnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHggLSAxID49IDAgJiYgeSArIDEgPCBwbGF5ZXJCb2FyZFt4XS5sZW5ndGggJiYgcGxheWVyQm9hcmRbeCAtIDFdW3kgKyAxXSAhPT0gJ3JldmVsZWQnKSBwbGF5ZXJCb2FyZFt4IC0gMV1beSArIDFdID0gJ21pc3NlZCc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoeCArIDEgPCBwbGF5ZXJCb2FyZC5sZW5ndGggJiYgeSArIDEgPCBwbGF5ZXJCb2FyZFt4XS5sZW5ndGggJiYgcGxheWVyQm9hcmRbeCArIDFdW3kgKyAxXSAhPT0gJ3JldmVsZWQnKSBwbGF5ZXJCb2FyZFt4ICsgMV1beSArIDFdID0gJ21pc3NlZCc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoeCArIDEgPCBwbGF5ZXJCb2FyZC5sZW5ndGggJiYgeSAtIDEgPj0gMCAmJiBwbGF5ZXJCb2FyZFt4ICsgMV1beSAtIDFdICE9PSAncmV2ZWxlZCcpIHBsYXllckJvYXJkW3ggKyAxXVt5IC0gMV0gPSAnbWlzc2VkJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2hlY2sgYWRqYWNlbnQgY2VsbHMgZm9yIGVhY2ggY29vcmRpbmF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoeCAtIDEgPj0gMCAmJiBwbGF5ZXJCb2FyZFt4IC0gMV1beV0gIT09ICdyZXZlbGVkJykgcGxheWVyQm9hcmRbeCAtIDFdW3ldID0gJ21pc3NlZCc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh4ICsgMSA8IHBsYXllckJvYXJkLmxlbmd0aCAmJiBwbGF5ZXJCb2FyZFt4ICsgMV1beV0gIT09ICdyZXZlbGVkJykgcGxheWVyQm9hcmRbeCArIDFdW3ldID0gJ21pc3NlZCc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh5IC0gMSA+PSAwICYmIHBsYXllckJvYXJkW3hdW3kgLSAxXSAhPT0gJ3JldmVsZWQnKSBwbGF5ZXJCb2FyZFt4XVt5IC0gMV0gPSAnbWlzc2VkJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHkgKyAxIDwgcGxheWVyQm9hcmRbeF0ubGVuZ3RoICYmIHBsYXllckJvYXJkW3hdW3kgKyAxXSAhPT0gJ3JldmVsZWQnKSBwbGF5ZXJCb2FyZFt4XVt5ICsgMV0gPSAnbWlzc2VkJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB1cGRhdGUgaW5kaWNhdG9yIHNoaXBzLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBzaGlwLm5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbmRpY2F0b3JTaGlwID0gcGxheWVyU2hpcEluZGljYXRvci5xdWVyeVNlbGVjdG9yKGAuJHtuYW1lfS1pbmRpY2F0b3JgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGljYXRvclNoaXAuY2xhc3NMaXN0LmFkZCgnZGVzdHJveWVkJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh7aW5kaWNhdG9yU2hpcH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgICAgIC8vIGVsc2UgcmV0dXJuXG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9IGVsc2UgcmV0dXJuXG4gICAgdXBkYXRlR3JpZChlbmVteUJvYXJkLCBlbmVteUdyaWQpXG4gICAgdXBkYXRlR3JpZChwbGF5ZXJCb2FyZCwgcGxheWVyR3JpZClcbiAgICAvLyBjb25zb2xlLmxvZyhwbGF5ZXJCb2FyZCwgZW5lbXlCb2FyZClcbn1cblxuY29uc3QgaGlnaGxpZ2h0U2hpcFBvc2l0aW9uID0gKGJvYXJkLCBncmlkLCBwbGF5ZXJHcmlkQ2VsbHMsIHNoaXAsIHJvdywgY29sLCBvcmllbnRhdGlvbikgPT4ge1xuICAgIC8vIGxldCBzaGlwTmFtZSA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2lkJylcbiAgICBsZXQgc2hpcE5hbWUgPSBzaGlwLm5hbWVcbiAgICAvLyBjb25zb2xlLmxvZyhwbGF5ZXJHcmlkQ2VsbHMpXG4gICAgXG4gICAgLy8gcmVtb3ZlcyB0aGUgcHJldmlvdXMgaGlnaGxpZ2h0c1xuICAgIHBsYXllckdyaWRDZWxscy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBpZiAoaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZ2hsaWdodCcpKSB7XG4gICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZ2hsaWdodCcpXG4gICAgICAgIH1cbiAgICB9KVxuICAgIFxuICAgIGlmIChpc1ZhbGlkTW92ZShib2FyZCwgc2hpcCwgcm93LCBjb2wsIG9yaWVudGF0aW9uKSkge1xuICAgICAgICByb3cgPSBwYXJzZUludChyb3cpXG4gICAgICAgIGNvbCA9IHBhcnNlSW50KGNvbClcbiAgICAgICAgXG4gICAgICAgIC8vIGhvcml6b250YWwgZWxlbWVudHMuXG4gICAgICAgIGNvbnN0IGZpcnN0ZE5vZGUgPSBncmlkLnF1ZXJ5U2VsZWN0b3IoYFt4PVwiJHtyb3d9XCJdW3k9XCIke2NvbH1cIl1gKVxuICAgICAgICBjb25zdCBzZWNvbmROb2RlID0gZ3JpZC5xdWVyeVNlbGVjdG9yKGBbeD0nJHtyb3d9J11beT0nJHtjb2wgKyBwYXJzZUludCgxKX0nYClcbiAgICAgICAgY29uc3QgdGhpcmROb2RlID0gZ3JpZC5xdWVyeVNlbGVjdG9yKGBbeD0nJHtyb3d9J11beT0nJHtjb2wgKyBwYXJzZUludCgyKX0nYClcbiAgICAgICAgY29uc3QgZm91cnRoTm9kZSA9IGdyaWQucXVlcnlTZWxlY3RvcihgW3g9JyR7cm93fSddW3k9JyR7Y29sICsgcGFyc2VJbnQoMyl9J2ApXG4gICAgICAgIGNvbnN0IGZpZnRoTm9kZSA9IGdyaWQucXVlcnlTZWxlY3RvcihgW3g9JyR7cm93fSddW3k9JyR7Y29sICsgcGFyc2VJbnQoNCl9J2ApXG4gICAgICAgIFxuICAgICAgICAvLyB2ZXJ0aWNhbCBlbGVtZW50cy5cbiAgICAgICAgY29uc3QgZmlyc3RkTm9kZVYgPSBncmlkLnF1ZXJ5U2VsZWN0b3IoYFt4PScke3Jvd30nXVt5PScke2NvbH0nXWApXG4gICAgICAgIGNvbnN0IHNlY29uZE5vZGVWID0gZ3JpZC5xdWVyeVNlbGVjdG9yKGBbeD0nJHtyb3cgKyBwYXJzZUludCgxKX0nXVt5PScke2NvbH0nXWApXG4gICAgICAgIGNvbnN0IHRoaXJkTm9kZVYgPSBncmlkLnF1ZXJ5U2VsZWN0b3IoYFt4PScke3JvdyArIHBhcnNlSW50KDIpfSddW3k9JyR7Y29sfSddYClcbiAgICAgICAgY29uc3QgZm91cnRoTm9kZVYgPSBncmlkLnF1ZXJ5U2VsZWN0b3IoYFt4PScke3JvdyArIHBhcnNlSW50KDMpfSddW3k9JyR7Y29sfSddYClcbiAgICAgICAgY29uc3QgZmlmdGhOb2RlViA9IGdyaWQucXVlcnlTZWxlY3RvcihgW3g9JyR7cm93ICsgcGFyc2VJbnQoNCl9J11beT0nJHtjb2x9J11gKVxuICAgICAgICBcbiAgICAgICAgaWYgKHNoaXBOYW1lID09PSAnY2FycmllcicpIHtcbiAgICAgICAgICAgIGlmIChvcmllbnRhdGlvbiA9PT0gJ2gnKSB7XG4gICAgICAgICAgICAgICAgZmlyc3RkTm9kZS5jbGFzc0xpc3QuYWRkKCdoaWdobGlnaHQnKVxuICAgICAgICAgICAgICAgIHNlY29uZE5vZGUuY2xhc3NMaXN0LmFkZCgnaGlnaGxpZ2h0JylcbiAgICAgICAgICAgICAgICB0aGlyZE5vZGUuY2xhc3NMaXN0LmFkZCgnaGlnaGxpZ2h0JylcbiAgICAgICAgICAgICAgICBmb3VydGhOb2RlLmNsYXNzTGlzdC5hZGQoJ2hpZ2hsaWdodCcpXG4gICAgICAgICAgICAgICAgZmlmdGhOb2RlLmNsYXNzTGlzdC5hZGQoJ2hpZ2hsaWdodCcpXG4gICAgICAgICAgICB9IFxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZmlyc3RkTm9kZVYuY2xhc3NMaXN0LmFkZCgnaGlnaGxpZ2h0JylcbiAgICAgICAgICAgICAgICBzZWNvbmROb2RlVi5jbGFzc0xpc3QuYWRkKCdoaWdobGlnaHQnKVxuICAgICAgICAgICAgICAgIHRoaXJkTm9kZVYuY2xhc3NMaXN0LmFkZCgnaGlnaGxpZ2h0JylcbiAgICAgICAgICAgICAgICBmb3VydGhOb2RlVi5jbGFzc0xpc3QuYWRkKCdoaWdobGlnaHQnKVxuICAgICAgICAgICAgICAgIGZpZnRoTm9kZVYuY2xhc3NMaXN0LmFkZCgnaGlnaGxpZ2h0JylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgZWxzZSBpZiAoc2hpcE5hbWUgPT09ICdiYXR0bGVzaGlwJykge1xuICAgICAgICAgICAgaWYgKG9yaWVudGF0aW9uID09PSAnaCcpIHtcbiAgICAgICAgICAgICAgICBmaXJzdGROb2RlLmNsYXNzTGlzdC5hZGQoJ2hpZ2hsaWdodCcpXG4gICAgICAgICAgICAgICAgc2Vjb25kTm9kZS5jbGFzc0xpc3QuYWRkKCdoaWdobGlnaHQnKVxuICAgICAgICAgICAgICAgIHRoaXJkTm9kZS5jbGFzc0xpc3QuYWRkKCdoaWdobGlnaHQnKVxuICAgICAgICAgICAgICAgIGZvdXJ0aE5vZGUuY2xhc3NMaXN0LmFkZCgnaGlnaGxpZ2h0JylcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZmlyc3RkTm9kZVYuY2xhc3NMaXN0LmFkZCgnaGlnaGxpZ2h0JylcbiAgICAgICAgICAgICAgICBzZWNvbmROb2RlVi5jbGFzc0xpc3QuYWRkKCdoaWdobGlnaHQnKVxuICAgICAgICAgICAgICAgIHRoaXJkTm9kZVYuY2xhc3NMaXN0LmFkZCgnaGlnaGxpZ2h0JylcbiAgICAgICAgICAgICAgICBmb3VydGhOb2RlVi5jbGFzc0xpc3QuYWRkKCdoaWdobGlnaHQnKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHNoaXBOYW1lID09PSAnY3J1aXNlcicgfHwgc2hpcE5hbWUgPT09ICdzdWJtYXJpbmUnKSB7XG4gICAgICAgICAgICBpZiAob3JpZW50YXRpb24gPT09ICdoJykge1xuICAgICAgICAgICAgICAgIGZpcnN0ZE5vZGUuY2xhc3NMaXN0LmFkZCgnaGlnaGxpZ2h0JylcbiAgICAgICAgICAgICAgICBzZWNvbmROb2RlLmNsYXNzTGlzdC5hZGQoJ2hpZ2hsaWdodCcpXG4gICAgICAgICAgICAgICAgdGhpcmROb2RlLmNsYXNzTGlzdC5hZGQoJ2hpZ2hsaWdodCcpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZpcnN0ZE5vZGVWLmNsYXNzTGlzdC5hZGQoJ2hpZ2hsaWdodCcpXG4gICAgICAgICAgICAgICAgc2Vjb25kTm9kZVYuY2xhc3NMaXN0LmFkZCgnaGlnaGxpZ2h0JylcbiAgICAgICAgICAgICAgICB0aGlyZE5vZGVWLmNsYXNzTGlzdC5hZGQoJ2hpZ2hsaWdodCcpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAob3JpZW50YXRpb24gPT09ICdoJykge1xuICAgICAgICAgICAgICAgIGZpcnN0ZE5vZGUuY2xhc3NMaXN0LmFkZCgnaGlnaGxpZ2h0JylcbiAgICAgICAgICAgICAgICBzZWNvbmROb2RlLmNsYXNzTGlzdC5hZGQoJ2hpZ2hsaWdodCcpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZpcnN0ZE5vZGVWLmNsYXNzTGlzdC5hZGQoJ2hpZ2hsaWdodCcpXG4gICAgICAgICAgICAgICAgc2Vjb25kTm9kZVYuY2xhc3NMaXN0LmFkZCgnaGlnaGxpZ2h0JylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuXG4gICAgfVxufVxuXG5yZXR1cm4ge1xuICAgIGNyZWF0ZUJvYXJkLFxuICAgIHN0YXJ0R2FtZSxcbiAgICB1cGRhdGVHcmlkLFxuICAgIHBsYWNlUmFuZG9tU2hpcCxcbiAgICBhdHRhY2ssIFxuICAgIGhpZ2hsaWdodFNoaXBQb3NpdGlvbixcbiAgICBwbGF5ZXJTaGlwQ29vcmRpbmF0ZSxcbn1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBEb20iLCJpbXBvcnQgSGVscGVyIGZyb20gXCIuL2hlbHBlclwiO1xuaW1wb3J0IGdhbWVMb29wIGZyb20gXCIuL2dhbWVMb29wXCI7XG5pbXBvcnQgJy4vYXBwLmNzcydcbmltcG9ydCBEb20gZnJvbSBcIi4vZG9tXCI7XG5pbXBvcnQgR2FtZUJvYXJkIGZyb20gXCIuL2dhbWVCb2FyZFwiO1xuY29uc3Qge2hpZ2hsaWdodFNoaXBQb3NpdGlvbn0gPSBEb20oKVxubGV0IHtwbGF5ZXJCb2FyZH0gPSBnYW1lTG9vcCgpXG5jb25zdCB7Z2V0U2hpcH0gPSBIZWxwZXIoKVxuY29uc3Qge2lzVmFsaWRNb3ZlLCBwbGFjZVNoaXB9ID0gR2FtZUJvYXJkKClcblxuXG5jb25zdCBFdmVudHMgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2hpcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYmVoaWNsZScpXG4gICAgY29uc3QgcGxheWVyR3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXItYm9hcmQnKVxuICAgIC8vIGNvbnN0IHBsYXllckdyaWRDZWxscyA9IHBsYXllckdyaWQucXVlcnlTZWxlY3RvckFsbCgnZGl2JylcbiAgICAvLyBjb25zdCBlbmVteUdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZW5lbXktYm9hcmQnKVxuICAgIGxldCB0YXJnZXQ7XG4gICAgbGV0IGlzRHJhZ2dpbmcgPSBmYWxzZTtcbiAgICBsZXQgb3JpZ2luYWxQbGF5ZXJCb2FyZDtcblxuLy8gRHJhZyBhbmQgRHJvcC5cbiAgIGNvbnN0IGRyYWdTdGFydCA9IChlLCBwbGF5ZXJCb2FyZCk9PiB7XG4gICAgICAgdGFyZ2V0ID0gZS50YXJnZXRcbiAgICAgICBjb25zb2xlLmxvZyh0YXJnZXQpXG4gICAgICAgaXNEcmFnZ2luZyA9IHRydWU7XG4gICAgICAgaWYocGxheWVyQm9hcmQpe1xuICAgICAgICBvcmlnaW5hbFBsYXllckJvYXJkID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShwbGF5ZXJCb2FyZCkpO1xuICAgICAgIH0gXG4gICAgICAgZS50YXJnZXQuc3R5bGUuY3Vyc29yID0gJ2dyYWJiaW5nJ1xuICAgIH0gXG5cbiAgICBjb25zdCBkcmFnT3ZlciA9IChlLCBwbGF5ZXJCb2FyZCwgcGxheWVyR3JpZENlbGxzKSA9PiB7XG4gICAgICAgIGlmKHBsYXllckJvYXJkICYmIHBsYXllckdyaWRDZWxscyl7XG5cbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgbGV0IG9yaWVudGF0aW9uO1xuICAgICAgICAgICAgbGV0IHggPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ3gnKVxuICAgICAgICAgICAgbGV0IHkgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ3knKVxuICAgICAgICAgICAgbGV0IHNoaXAgPSBnZXRTaGlwKHRhcmdldClcbiAgICAgICAgICAgIGlmICghdGFyZ2V0KSByZXR1cm5cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdob3Jpem9udGFsJykpIHtcbiAgICAgICAgICAgICAgICAgICAgb3JpZW50YXRpb24gPSAnaCdcbiAgICAgICAgICAgICAgICB9IGVsc2Ugb3JpZW50YXRpb24gPSAndidcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocGxheWVyR3JpZENlbGxzLCBwbGF5ZXJHcmlkKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBoaWdobGlnaHRTaGlwUG9zaXRpb24ocGxheWVyQm9hcmQsIHBsYXllckdyaWQsIHBsYXllckdyaWRDZWxscywgc2hpcCwgeCwgeSwgb3JpZW50YXRpb24pXG4gICAgICAgIH1cbiAgICB9XG4gICAgICAgIFxuICAgIGNvbnN0IGRyb3AgPSAoZSwgY2VsbCwgcGxheWVyQm9hcmQsIHBsYXllckdyaWRDZWxscywgcGxhY2VkU2hpcHMpPT4ge1xuICAgICAgICBpZihjZWxsICYmIHBsYXllckJvYXJkICYmIHBsYXllckdyaWRDZWxscyl7XG4gICAgICAgICAgICBsZXQgdGVtcFNoaXBzID0gW11cbiAgICAgICAgICAgIGxldCBvcmllbnRhdGlvbjtcbiAgICAgICAgICAgIGlmICghdGFyZ2V0KSByZXR1cm5cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdob3Jpem9udGFsJykpIHtcbiAgICAgICAgICAgICAgICAgICAgb3JpZW50YXRpb24gPSAnaCdcbiAgICAgICAgICAgICAgICB9IGVsc2Ugb3JpZW50YXRpb24gPSAndidcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3Qgc2hpcCA9IGdldFNoaXAodGFyZ2V0KVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCB4ID0gY2VsbC5nZXRBdHRyaWJ1dGUoJ3gnKVxuICAgICAgICAgICAgY29uc3QgeSA9IGNlbGwuZ2V0QXR0cmlidXRlKCd5JylcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKCFpc0RyYWdnaW5nKSByZXR1cm5cbiAgICAgICAgICAgIGVsc2UgaWYgKGlzVmFsaWRNb3ZlKHBsYXllckJvYXJkLCBzaGlwLCB4LCB5LCBvcmllbnRhdGlvbikpIHtcbiAgICAgICAgICAgICAgICBjZWxsLmFwcGVuZENoaWxkKHRhcmdldClcbiAgICAgICAgICAgICAgICBwbGF5ZXJCb2FyZCA9IHBsYWNlU2hpcChwbGF5ZXJCb2FyZCwgc2hpcCwgeCwgeSwgb3JpZW50YXRpb24pXG4gICAgICAgICAgXG4gICAgICAgICAgICAgICAgY29uc3Qgc2hpcEV4aXN0ID0gcGxhY2VkU2hpcHMuaW5jbHVkZXMoYCR7c2hpcC5uYW1lfWApXG4gICAgICAgICAgICAgICAgaWYoIXNoaXBFeGlzdCkgcGxhY2VkU2hpcHMucHVzaChgJHtzaGlwLm5hbWV9YClcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwbGFjZWRTaGlwcylcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZihwbGFjZWRTaGlwcy5sZW5ndGggPiA0KXtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhcnRHYW1lQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXJ0JylcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRHYW1lQnRuLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGFyZ2V0LnNldEF0dHJpYnV0ZSgneCcsIHgpXG4gICAgICAgICAgICB0YXJnZXQuc2V0QXR0cmlidXRlKCd5JywgeSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBsYXllckJvYXJkID0gb3JpZ2luYWxQbGF5ZXJCb2FyZFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0YXJnZXQgPSAnJ1xuICAgICAgICBpc0RyYWdnaW5nID0gZmFsc2VcbiAgICAgICAgXG4gICAgICAgIHBsYXllckdyaWRDZWxscy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlbW92aW5nIGhpZ2hsaWdodCcpXG4gICAgICAgICAgICBpZiAoaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZ2hsaWdodCcpKSB7XG4gICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWdobGlnaHQnKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHBsYXllckJvYXJkXG4gICAgfVxuXG59XG4gICAgICAgIFxuLy8gRHJhZyBhbmQgRHJvcC5cblxuLy8gY2hhbmdlIHNoaXAgb3JpZW50YXRpb246XG5cbmNvbnN0IGNoYW5nZU9yaWVudGF0aW9uID0gKGUsIHBsYXllckJvYXJkKT0+IHtcbiAgICBjb25zdCBkb21TaGlwID0gZS50YXJnZXRcbiAgICBjb25zdCBzaGlwID0gZ2V0U2hpcChkb21TaGlwKVxuICAgIGxldCBvcmllbnRhdGlvbjtcbiAgICBsZXQgdGVtcE9yaWVudGF0aW9uO1xuXG4gICAgY29uc3QgeCA9IGRvbVNoaXAuZ2V0QXR0cmlidXRlKCd4JylcbiAgICBjb25zdCB5ID0gZG9tU2hpcC5nZXRBdHRyaWJ1dGUoJ3knKVxuXG4gICAgaWYgKHggJiYgeSkge1xuXG4gICAgICAgIGlmIChkb21TaGlwLmNsYXNzTGlzdC5jb250YWlucygnaG9yaXpvbnRhbCcpKSB7XG4gICAgICAgICAgICB0ZW1wT3JpZW50YXRpb24gPSAndidcbiAgICAgICAgICAgIG9yaWVudGF0aW9uID0gJ2gnXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvcmllbnRhdGlvbiA9ICd2J1xuICAgICAgICAgICAgdGVtcE9yaWVudGF0aW9uID0gJ2gnXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNWYWxpZE1vdmUocGxheWVyQm9hcmQsIHNoaXAsIHgsIHksIHRlbXBPcmllbnRhdGlvbikpIHtcblxuICAgICAgICAgICAgcGxheWVyQm9hcmQgPSBzZXRPcmllbnRhdGlvbihwbGF5ZXJCb2FyZCwgZG9tU2hpcCwgc2hpcCwgeCwgeSwgdGVtcE9yaWVudGF0aW9uKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcGxheWVyQm9hcmQgPSBzZXRPcmllbnRhdGlvbihwbGF5ZXJCb2FyZCwgZG9tU2hpcCwgc2hpcCwgeCwgeSwgb3JpZW50YXRpb24pXG4gICAgICAgIH1cbiAgICB9IGVsc2UgcmV0dXJuXG59XG5cblxuY29uc3Qgc2V0T3JpZW50YXRpb24gPSAocGxheWVyQm9hcmQsIGRvbVNoaXAsIHNoaXAsIHgsIHksIG9yaWVudGF0aW9uKSA9PiB7XG4gICAgaWYgKG9yaWVudGF0aW9uID09PSAndicpIHtcbiAgICAgICAgZG9tU2hpcC5jbGFzc0xpc3QucmVtb3ZlKCdob3Jpem9udGFsJylcbiAgICAgICAgZG9tU2hpcC5jbGFzc0xpc3QuYWRkKCd2ZXJ0aWNsZScpXG4gICAgICAgIHJldHVybiBwbGFjZVNoaXAocGxheWVyQm9hcmQsIHNoaXAsIHgsIHksIG9yaWVudGF0aW9uKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZG9tU2hpcC5jbGFzc0xpc3QucmVtb3ZlKCd2ZXJ0aWNsZScpXG4gICAgICAgIGRvbVNoaXAuY2xhc3NMaXN0LmFkZCgnaG9yaXpvbnRhbCcpXG4gICAgICAgIHJldHVybiBwbGFjZVNoaXAocGxheWVyQm9hcmQsIHNoaXAsIHgsIHksIG9yaWVudGF0aW9uKVxuICAgIH1cbn1cbi8vIGNoYW5nZSBvcmllbnRhdGlvbi5cbnJldHVybntcbiAgICBkcmFnT3ZlciwgXG4gICAgZHJhZ1N0YXJ0LFxuICAgIGRyb3AsXG4gICAgY2hhbmdlT3JpZW50YXRpb24sXG59XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXZlbnRzIiwiXG5cbmNvbnN0IEdhbWVCb2FyZCA9ICgpID0+IHtcblxuICAgIGNvbnN0IGlzVmFsaWRNb3ZlID0gKGJvYXJkLCBzaGlwLCByb3csIGNvbCwgb3JpZW50YXRpb24pID0+IHtcbiAgICAgICAgcm93ID0gcGFyc2VJbnQocm93KTtcbiAgICAgICAgY29sID0gcGFyc2VJbnQoY29sKTtcblxuICAgICAgICAvLyBSZW1vdmUgYW55IGV4aXN0aW5nIGluc3RhbmNlIG9mIHRoZSBzaGlwIGZyb20gdGhlIGJvYXJkXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGJvYXJkW2ldW2pdLm5hbWUgPT09IHNoaXAubmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBib2FyZFtpXVtqXSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb2wgPCAwIHx8IHJvdyA8IDApIHJldHVybiBmYWxzZTtcbiAgICAgICAgZWxzZSBpZiAob3JpZW50YXRpb24gPT09ICdoJyAmJiAoY29sICsgc2hpcC5sZW5ndGggPiAxMCB8fCByb3cgPiAxMCkpIHJldHVybiBmYWxzZVxuICAgICAgICBlbHNlIGlmIChvcmllbnRhdGlvbiA9PT0gJ3YnICYmIChjb2wgPiAxMCB8fCByb3cgKyBzaGlwLmxlbmd0aCA+IDEwKSkgcmV0dXJuIGZhbHNlXG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIHNoaXAncyBwbGFjZW1lbnQgZXhjZWVkcyB0aGUgYm9hcmQncyBib3VuZHNcbiAgICAgICAgaWYgKG9yaWVudGF0aW9uLnRvTG93ZXJDYXNlKCkgPT09ICdoJykge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IGNvbDsgaSA8IGNvbCArIHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAvLyBDaGVjayBpZiB0aGUgY2VsbHMgYXJvdW5kIHRoZSBzaGlwJ3MgcGxhY2VtZW50IGFyZSBmcmVlXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IHJvdyAtIDE7IGogPD0gcm93ICsgMTsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGsgPSBpIC0gMTsgayA8PSBpICsgMTsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaiA+PSAwICYmIGogPCAxMCAmJiBrID49IDAgJiYgayA8IDEwICYmIGJvYXJkW2pdW2tdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlOyAvLyBTaGlwIG92ZXJsYXBzIHdpdGggZXhpc3Rpbmcgc2hpcCBvciBhZGphY2VudCBzaGlwXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gcm93OyBpIDwgcm93ICsgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIHRoZSBjZWxscyBhcm91bmQgdGhlIHNoaXAncyBwbGFjZW1lbnQgYXJlIGZyZWVcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gY29sIC0gMTsgaiA8PSBjb2wgKyAxOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgayA9IGkgLSAxOyBrIDw9IGkgKyAxOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChqID49IDAgJiYgaiA8IDEwICYmIGsgPj0gMCAmJiBrIDwgMTAgJiYgYm9hcmRba11bal0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7IC8vIFNoaXAgb3ZlcmxhcHMgd2l0aCBleGlzdGluZyBzaGlwIG9yIGFkamFjZW50IHNoaXBcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlOyAvLyBBbGwgY29uZGl0aW9ucyBwYXNzZWQsIHZhbGlkIG1vdmVcbiAgICB9O1xuXG4gICAgY29uc3QgcGxhY2VTaGlwID0gKGJvYXJkLCBzaGlwLCByb3csIGNvbCwgb3JpZW50YXRpb24pID0+IHtcbiAgICAgICAgcm93ID0gcGFyc2VJbnQocm93KVxuICAgICAgICBjb2wgPSBwYXJzZUludChjb2wpXG5cbiAgICAgICAgbGV0IG9sZEJvYXJkID0gYm9hcmQubWFwKHJvdyA9PiBbLi4ucm93XSk7XG5cbiAgICAgICAgLy8gUmVtb3ZlIGFueSBleGlzdGluZyBpbnN0YW5jZSBvZiB0aGUgc2FtZSBzaGlwIGZyb20gdGhlIGJvYXJkXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGJvYXJkW2ldW2pdID09PSBzaGlwKSB7XG4gICAgICAgICAgICAgICAgICAgIGJvYXJkW2ldW2pdID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9yaWVudGF0aW9uLnRvTG93ZXJDYXNlKCkgPT09ICdoJykge1xuICAgICAgICAgICAgaWYgKGlzVmFsaWRNb3ZlKGJvYXJkLCBzaGlwLCByb3csIGNvbCwgb3JpZW50YXRpb24pKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IGNvbDsgaSA8IGNvbCArIHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgYm9hcmRbcm93XVtpXSA9IHNoaXA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBib2FyZDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9sZEJvYXJkXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgaWYgKGlzVmFsaWRNb3ZlKGJvYXJkLCBzaGlwLCByb3csIGNvbCwgb3JpZW50YXRpb24pKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IHJvdzsgaSA8IHJvdyArIHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgYm9hcmRbaV1bY29sXSA9IHNoaXA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBib2FyZDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9sZEJvYXJkXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgcGxhY2VTaGlwUmFuZG9tbHkgPSAoYm9hcmQsIHNoaXAsIHVzZXIgPSAnY29tcHV0ZXInKSA9PiB7XG5cbiAgICAgICAgY29uc3QgaWQgPSBzaGlwLm5hbWVcbiAgICAgICAgY29uc3QgYmVoaWNsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2lkfWApXG4gICAgICAgIGNvbnN0IHBsYXllckdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyLWJvYXJkJylcblxuICAgICAgICBsZXQgb3JpZW50YXRpb247XG4gICAgICAgIE1hdGgucmFuZG9tKCkgPiAwLjUgPyBvcmllbnRhdGlvbiA9ICd2JyA6IG9yaWVudGF0aW9uID0gJ2gnO1xuXG4gICAgICAgIGNvbnN0IHJvdyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKVxuICAgICAgICBjb25zdCBjb2wgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMClcblxuICAgICAgICBpZiAoaXNWYWxpZE1vdmUoYm9hcmQsIHNoaXAsIHJvdywgY29sLCBvcmllbnRhdGlvbikpIHtcbiAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBwbGF5ZXJHcmlkLnF1ZXJ5U2VsZWN0b3IoYFt4PVwiJHtyb3d9XCJdW3k9XCIke2NvbH1cIl1gKVxuICAgICAgICAgICAgaWYgKHVzZXIgPT09ICdwbGF5ZXInKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9yaWVudGF0aW9uID09PSAnaCcpIHtcbiAgICAgICAgICAgICAgICAgICAgYmVoaWNsZS5jbGFzc0xpc3QuYWRkKCdob3Jpem9udGFsJylcbiAgICAgICAgICAgICAgICAgICAgYmVoaWNsZS5jbGFzc0xpc3QucmVtb3ZlKCd2ZXJ0aWNsZScpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYmVoaWNsZS5jbGFzc0xpc3QucmVtb3ZlKCdob3Jpem9udGFsJylcbiAgICAgICAgICAgICAgICAgICAgYmVoaWNsZS5jbGFzc0xpc3QuYWRkKCd2ZXJ0aWNsZScpXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY2VsbC5hcHBlbmRDaGlsZChiZWhpY2xlKVxuICAgICAgICAgICAgICAgIGJlaGljbGUuc2V0QXR0cmlidXRlKCd4Jywgcm93KVxuICAgICAgICAgICAgICAgIGJlaGljbGUuc2V0QXR0cmlidXRlKCd5JywgY29sKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gcGxhY2VTaGlwKGJvYXJkLCBzaGlwLCByb3csIGNvbCwgb3JpZW50YXRpb24pXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSByZXR1cm4gcGxhY2VTaGlwUmFuZG9tbHkoYm9hcmQsIHNoaXAsIHVzZXIpXG4gICAgfVxuXG4gICAgY29uc3QgcmVjZWl2ZUF0dGFjayA9IChib2FyZCwgcm93LCBjb2wpID0+IHtcblxuICAgICAgICBpZiAoYm9hcmRbcm93XVtjb2xdID09PSBmYWxzZSkge1xuICAgICAgICAgICAgYm9hcmRbcm93XVtjb2xdID0gJ21pc3NlZCdcbiAgICAgICAgICAgIHJldHVybiBib2FyZFxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYodHlwZW9mIChib2FyZFtyb3ddW2NvbF0pID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgYm9hcmRbcm93XVtjb2xdLmhpdCgpXG4gICAgICAgICAgICBib2FyZFtyb3ddW2NvbF0gPSAncmV2ZWxlZCdcbiAgICAgICAgICAgIHJldHVybiBib2FyZFxuICAgICAgICB9ZWxzZSByZXR1cm4gYm9hcmRcbiAgICB9XG5cbiAgICBjb25zdCBpc0FsbFNoaXBTdW5rZWQgPSAocGxheWVyU2hpcHMsIGVuZW15U2hpcHMpID0+IHtcblxuICAgICAgICBjb25zdCBhbGxFbmVteVNoaXBTdW5rZWQgPSBlbmVteVNoaXBzLmV2ZXJ5KHNoaXAgPT4gc2hpcC5pc1N1bmtlZCgpKVxuICAgICAgICBjb25zdCBhbGxQbGF5ZXJTaGlwU3Vua2VkID0gcGxheWVyU2hpcHMuZXZlcnkoc2hpcCA9PiBzaGlwLmlzU3Vua2VkKCkpXG5cbiAgICAgICAgcmV0dXJuIGFsbEVuZW15U2hpcFN1bmtlZCB8fCBhbGxQbGF5ZXJTaGlwU3Vua2VkXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaXNWYWxpZE1vdmUsXG4gICAgICAgIHBsYWNlU2hpcCxcbiAgICAgICAgcGxhY2VTaGlwUmFuZG9tbHksXG4gICAgICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgICAgIGlzQWxsU2hpcFN1bmtlZCxcbiAgICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR2FtZUJvYXJkXG4iLCJpbXBvcnQgc2hpcCBmcm9tIFwiLi9zaGlwXCI7XG5pbXBvcnQgR2FtZUJvYXJkIGZyb20gXCIuL2dhbWVCb2FyZFwiO1xuaW1wb3J0ICcuL2FwcC5jc3MnXG5pbXBvcnQgVHVybnMgZnJvbSBcIi4vdHVybnNcIjtcbmNvbnN0IHtnZXRUdXJuLCBjaGFuZ2VUdXJufSA9IFR1cm5zKClcbmNvbnN0IHsgaXNWYWxpZE1vdmUsXG4gICAgcGxhY2VTaGlwLFxuICAgIHBsYWNlU2hpcFJhbmRvbWx5LFxuICAgIGlzQWxsU2hpcFN1bmtlZCwgfSA9IEdhbWVCb2FyZCgpXG5cbmNvbnN0IGdhbWVMb29wID0gKCkgPT4ge1xuICAgIGNvbnN0IHBsYXllckNhcnJpZXIgPSBzaGlwKCdjYXJyaWVyJyk7XG4gICAgY29uc3QgcGxheWVyQmF0dGxlc2hpcCA9IHNoaXAoJ2JhdHRsZXNoaXAnKTtcbiAgICBjb25zdCBwbGF5ZXJDcnVpc2VyID0gc2hpcCgnY3J1aXNlcicpO1xuICAgIGNvbnN0IHBsYXllclN1Ym1hcmluZSA9IHNoaXAoJ3N1Ym1hcmluZScpO1xuICAgIGNvbnN0IHBsYXllckRlc3Ryb3llciA9IHNoaXAoJ2Rlc3Ryb3llcicpO1xuXG4gICAgY29uc3QgZW5lbXlDYXJyaWVyID0gc2hpcCgnY2FycmllcicpO1xuICAgIGNvbnN0IGVuZW15QmF0dGxlc2hpcCA9IHNoaXAoJ2JhdHRsZXNoaXAnKTtcbiAgICBjb25zdCBlbmVteUNydWlzZXIgPSBzaGlwKCdjcnVpc2VyJyk7XG4gICAgY29uc3QgZW5lbXlTdWJtYXJpbmUgPSBzaGlwKCdzdWJtYXJpbmUnKTtcbiAgICBjb25zdCBlbmVteURlc3Ryb3llciA9IHNoaXAoJ2Rlc3Ryb3llcicpO1xuXG4gICAgY29uc3QgcGxheWVyU2hpcHMgPSBbXG4gICAgICAgIHBsYXllckNhcnJpZXIsIHBsYXllckJhdHRsZXNoaXAsIHBsYXllckNydWlzZXIsIHBsYXllclN1Ym1hcmluZSwgcGxheWVyRGVzdHJveWVyXG4gICAgXVxuICAgIGNvbnN0IGVuZW15U2hpcHMgPSBbXG4gICAgICAgIGVuZW15Q2FycmllciwgZW5lbXlCYXR0bGVzaGlwLCBlbmVteUNydWlzZXIsIGVuZW15U3VibWFyaW5lLCBlbmVteURlc3Ryb3llclxuICAgIF1cblxuICAgIGNvbnN0IHBsYWNlUGxheWVyU2hpcHNSYW5kb21seSA9IChwbGF5ZXJCb2FyZCkgPT4ge1xuICAgICAgICBwbGFjZVNoaXBSYW5kb21seShwbGF5ZXJCb2FyZCwgcGxheWVyQ2FycmllciwgJ3BsYXllcicpXG4gICAgICAgIHBsYWNlU2hpcFJhbmRvbWx5KHBsYXllckJvYXJkLCBwbGF5ZXJCYXR0bGVzaGlwLCAncGxheWVyJylcbiAgICAgICAgcGxhY2VTaGlwUmFuZG9tbHkocGxheWVyQm9hcmQsIHBsYXllckNydWlzZXIsICdwbGF5ZXInKVxuICAgICAgICBwbGFjZVNoaXBSYW5kb21seShwbGF5ZXJCb2FyZCwgcGxheWVyU3VibWFyaW5lLCAncGxheWVyJylcbiAgICAgICAgcGxhY2VTaGlwUmFuZG9tbHkocGxheWVyQm9hcmQsIHBsYXllckRlc3Ryb3llciwgJ3BsYXllcicpXG4gICAgICAgIHJldHVybiBwbGF5ZXJCb2FyZFxuICAgIH1cbiAgICBjb25zdCBwbGFjZUNvbXB1dGVyU2hpcHNSYW5kb21seSA9IChlbmVteUJvYXJkKSA9PiB7XG4gICAgICAgIHBsYWNlU2hpcFJhbmRvbWx5KGVuZW15Qm9hcmQsIGVuZW15Q2FycmllcilcbiAgICAgICAgcGxhY2VTaGlwUmFuZG9tbHkoZW5lbXlCb2FyZCwgZW5lbXlCYXR0bGVzaGlwKVxuICAgICAgICBwbGFjZVNoaXBSYW5kb21seShlbmVteUJvYXJkLCBlbmVteUNydWlzZXIpXG4gICAgICAgIHBsYWNlU2hpcFJhbmRvbWx5KGVuZW15Qm9hcmQsIGVuZW15U3VibWFyaW5lKVxuICAgICAgICBwbGFjZVNoaXBSYW5kb21seShlbmVteUJvYXJkLCBlbmVteURlc3Ryb3llcilcbiAgICAgICAgcmV0dXJuIGVuZW15Qm9hcmRcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICAvLyBwbGF5ZXJCb2FyZCxcbiAgICAgICAgLy8gZW5lbXlCb2FyZCxcbiAgICAgICAgcGxheWVyU2hpcHMsXG4gICAgICAgIGVuZW15U2hpcHMsXG4gICAgICAgIHBsYWNlQ29tcHV0ZXJTaGlwc1JhbmRvbWx5LFxuICAgICAgICBwbGFjZVBsYXllclNoaXBzUmFuZG9tbHksXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBnYW1lTG9vcFxuXG4iLCJpbXBvcnQgZ2FtZUxvb3AgZnJvbSBcIi4vZ2FtZUxvb3BcIlxuY29uc3Qge3BsYXllclNoaXBzLCBlbmVteVNoaXBzfSA9IGdhbWVMb29wKClcblxuY29uc3QgSGVscGVyID0gKCkgPT4ge1xuY29uc29sZS5sb2cocGxheWVyU2hpcHNbMF0pXG4gICAgY29uc3QgZ2V0U2hpcCA9ICh0YXJnZXQpID0+IHtcbiAgICAgICAgaWYgKHRhcmdldCkge1xuICAgICAgICAgICAgY29uc3QgaWQgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKCdpZCcpXG4gICAgICAgICAgICBzd2l0Y2ggKGlkKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnY2Fycmllcic6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwbGF5ZXJTaGlwc1swXVxuICAgICAgICAgICAgICAgIGNhc2UgJ2JhdHRsZXNoaXAnOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGxheWVyU2hpcHNbMV1cbiAgICAgICAgICAgICAgICBjYXNlICdjcnVpc2VyJzpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBsYXllclNoaXBzWzJdXG4gICAgICAgICAgICAgICAgY2FzZSAnc3VibWFyaW5lJzpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBsYXllclNoaXBzWzNdXG4gICAgICAgICAgICAgICAgY2FzZSAnZGVzdHJveWVyJzpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBsYXllclNoaXBzWzRdXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSByZXR1cm5cblxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGdldFNoaXBcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlbHBlciIsImltcG9ydCBHYW1lQm9hcmQgZnJvbSBcIi4vZ2FtZUJvYXJkXCJcbmltcG9ydCBzaGlwIGZyb20gXCIuL3NoaXBcIlxuXG5jb25zdCBQbGF5ZXJzID0gKHNoaXBzKSA9PiB7XG4gICAgbGV0IHByb2JNYXAgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiAxMCB9LCAoKSA9PiBBcnJheSgxMCkuZmlsbCgwKSk7XG5cbiAgIFxuICAgIFxuICAgIGNvbnN0IGdldFJhbmRvbUNvbXB1dGVyTW92ZSA9IChwbGF5ZXJCb2FyZCkgPT4ge1xuICAgICAgICBjb25zdCByUm93ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICBjb25zdCByQ29sID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICBjb25zb2xlLmxvZyh7IHNoaXBzIH0pO1xuICAgIFxuICAgICAgICBpZiAoIXNoaXBzWzBdLmlzU3Vua2VkKCkpIHtcbiAgICAgICAgICAgIHBsYXllckJvYXJkLmZvckVhY2goKHJvdywgcm93SWR4KSA9PiB7XG4gICAgICAgICAgICAgICAgcm93LmZvckVhY2goKGNlbGxWYWx1ZSwgY29sSWR4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEhvcml6b250YWwgY2hlY2tcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbElkeCArIHNoaXBzWzBdLmxlbmd0aCA8PSAxMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGlzdmFsaWRQb3NpdGlvbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBzWzBdLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBsYXllckJvYXJkW3Jvd0lkeF1bY29sSWR4ICsgaV0gPT09ICdtaXNzZWQnIHx8IHBsYXllckJvYXJkW3Jvd0lkeF1bY29sSWR4ICsgaV0gPT09ICdyZXZlbGVkJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc3ZhbGlkUG9zaXRpb24gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXN2YWxpZFBvc2l0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwc1swXS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9iTWFwW3Jvd0lkeF1bY29sSWR4ICsgaV0gKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgLy8gVmVydGljYWwgY2hlY2tcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJvd0lkeCArIHNoaXBzWzBdLmxlbmd0aCA8PSAxMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGlzdmFsaWRQb3NpdGlvbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBzWzBdLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBsYXllckJvYXJkW3Jvd0lkeCArIGldW2NvbElkeF0gPT09ICdtaXNzZWQnIHx8IHBsYXllckJvYXJkW3Jvd0lkeCArIGldW2NvbElkeF0gPT09ICdyZXZlbGVkJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc3ZhbGlkUG9zaXRpb24gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXN2YWxpZFBvc2l0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwc1swXS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9iTWFwW3Jvd0lkeCArIGldW2NvbElkeF0gKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2hpcHMuc2hpZnQoKTtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBmdW5jdGlvbiB1cGRhdGVIaWdoZXN0VmFsKCkge1xuICAgICAgICAgICAgbGV0IGhpZ2hlc3RWYWwgPSB7XG4gICAgICAgICAgICAgICAgcm93OiAwLFxuICAgICAgICAgICAgICAgIGNvbDogMCxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBsZXQgaGlnaGVzdFZhbHVlID0gcHJvYk1hcFswXVswXTtcbiAgICBcbiAgICAgICAgICAgIHByb2JNYXAuZm9yRWFjaCgocm93LCByb3dJZHgpID0+IHtcbiAgICAgICAgICAgICAgICByb3cuZm9yRWFjaCgoY2VsbFZhbHVlLCBjb2xJZHgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNlbGxWYWx1ZSA+IGhpZ2hlc3RWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGlnaGVzdFZhbHVlID0gY2VsbFZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGlnaGVzdFZhbC5yb3cgPSByb3dJZHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBoaWdoZXN0VmFsLmNvbCA9IGNvbElkeDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgXG4gICAgICAgICAgICByZXR1cm4gaGlnaGVzdFZhbDtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBsZXQgaGlnaGVzdFZhbCA9IHVwZGF0ZUhpZ2hlc3RWYWwoKTtcbiAgICBcbiAgICAgICAgaWYgKHR5cGVvZiBwbGF5ZXJCb2FyZFtoaWdoZXN0VmFsLnJvd11baGlnaGVzdFZhbC5jb2xdID09PSAnb2JqZWN0JyAmJiBwbGF5ZXJCb2FyZFtoaWdoZXN0VmFsLnJvd11baGlnaGVzdFZhbC5jb2xdICE9PSBudWxsKSB7XG4gICAgICAgICAgICAvLyBJbmNyZWFzZSB0aGUgcHJvYmFiaWxpdHkgb2YgYWRqYWNlbnQgY2VsbHNcbiAgICAgICAgICAgIGlmIChoaWdoZXN0VmFsLmNvbCAtIDEgPj0gMCAmJiBwbGF5ZXJCb2FyZFtoaWdoZXN0VmFsLnJvd11baGlnaGVzdFZhbC5jb2wgLSAxXSAhPT0gJ3JldmVsZWQnICYmIHBsYXllckJvYXJkW2hpZ2hlc3RWYWwucm93XVtoaWdoZXN0VmFsLmNvbCAtIDFdICE9PSAnbWlzc2VkJykge1xuICAgICAgICAgICAgICAgIHByb2JNYXBbaGlnaGVzdFZhbC5yb3ddW2hpZ2hlc3RWYWwuY29sIC0gMV0gKz0gMTAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGhpZ2hlc3RWYWwuY29sICsgMSA8IDEwICYmIHBsYXllckJvYXJkW2hpZ2hlc3RWYWwucm93XVtoaWdoZXN0VmFsLmNvbCArIDFdICE9PSAncmV2ZWxlZCcgJiYgcGxheWVyQm9hcmRbaGlnaGVzdFZhbC5yb3ddW2hpZ2hlc3RWYWwuY29sICsgMV0gIT09ICdtaXNzZWQnKSB7XG4gICAgICAgICAgICAgICAgcHJvYk1hcFtoaWdoZXN0VmFsLnJvd11baGlnaGVzdFZhbC5jb2wgKyAxXSArPSAxMDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaGlnaGVzdFZhbC5yb3cgLSAxID49IDAgJiYgcGxheWVyQm9hcmRbaGlnaGVzdFZhbC5yb3cgLSAxXVtoaWdoZXN0VmFsLmNvbF0gIT09ICdyZXZlbGVkJyAmJiBwbGF5ZXJCb2FyZFtoaWdoZXN0VmFsLnJvdyAtIDFdW2hpZ2hlc3RWYWwuY29sXSAhPT0gJ21pc3NlZCcpIHtcbiAgICAgICAgICAgICAgICBwcm9iTWFwW2hpZ2hlc3RWYWwucm93IC0gMV1baGlnaGVzdFZhbC5jb2xdICs9IDEwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChoaWdoZXN0VmFsLnJvdyArIDEgPCAxMCAmJiBwbGF5ZXJCb2FyZFtoaWdoZXN0VmFsLnJvdyArIDFdW2hpZ2hlc3RWYWwuY29sXSAhPT0gJ3JldmVsZWQnICYmIHBsYXllckJvYXJkW2hpZ2hlc3RWYWwucm93ICsgMV1baGlnaGVzdFZhbC5jb2xdICE9PSAnbWlzc2VkJykge1xuICAgICAgICAgICAgICAgIHByb2JNYXBbaGlnaGVzdFZhbC5yb3cgKyAxXVtoaWdoZXN0VmFsLmNvbF0gKz0gMTAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgXG4gICAgICAgIC8vIFVwZGF0ZSBoaWdoZXN0VmFsIGFnYWluIHRvIG1ha2UgdGhlIG5leHQgbW92ZVxuICAgICAgICBcbiAgICBcbiAgICAgICAgXG4gICAgICAgIC8vIEFzc3VtaW5nIEdhbWVCb2FyZCBpcyBhbHJlYWR5IGRlZmluZWQgYW5kIGhhcyB0aGUgcmVjZWl2ZUF0dGFjayBtZXRob2RcblxuICAgICAgICBjb25zdCBzaGlwID0gcGxheWVyQm9hcmRbaGlnaGVzdFZhbC5yb3ddW2hpZ2hlc3RWYWwuY29sXVxuXG4gICAgICAgIGxldCBib2FyZCA9ICBHYW1lQm9hcmQoKS5yZWNlaXZlQXR0YWNrKHBsYXllckJvYXJkLCBoaWdoZXN0VmFsLnJvdywgaGlnaGVzdFZhbC5jb2wpO1xuXG4gICAgICAgIC8vIFJlc2V0IHRoZSBzcGVjaWZpYyBjZWxsJ3MgcHJvYmFiaWxpdHkgdG8gMFxuICAgICAgICBwcm9iTWFwW2hpZ2hlc3RWYWwucm93XVtoaWdoZXN0VmFsLmNvbF0gPSAwO1xuICAgICAgICBjb25zb2xlLmxvZyh0eXBlb2Ygc2hpcClcbiAgICAgICAgY29uc29sZS5sb2coc2hpcClcblxuICAgICAgICBpZih0eXBlb2Ygc2hpcCA9PT0gJ29iamVjdCcgJiYgc2hpcC5pc1N1bmtlZCgpKXtcbiAgICAgICAgICAgIHByb2JNYXAgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiAxMCB9LCAoKSA9PiBBcnJheSgxMCkuZmlsbCgwKSk7XG4gICAgICAgIH1cblxuICAgICAgICBoaWdoZXN0VmFsID0gdXBkYXRlSGlnaGVzdFZhbCgpO1xuICAgICAgICBjb25zb2xlLmxvZyhoaWdoZXN0VmFsKTtcbiAgICAgICAgY29uc29sZS5sb2cocHJvYk1hcFtoaWdoZXN0VmFsLnJvd11baGlnaGVzdFZhbC5jb2xdKTtcbiAgICAgICAgY29uc29sZS5sb2cocHJvYk1hcCk7XG4gICAgICAgIHJldHVybiBib2FyZFxuICAgIH07XG4gICAgXG5cblxuICAgIGNvbnN0IHBsYXllck1vdmUgPSAoYm9hcmQsIHJvdywgY29sKSA9PiB7XG4gICAgICAgICAgICBpZiAoYm9hcmRbcm93XVtjb2xdID09PSAnbWlzc2VkJyB8fCBib2FyZFtyb3ddW2NvbF0gPT09ICdyZXZlbGVkJyB8fCBib2FyZFtyb3ddW2NvbF0gPT09IHVuZGVmaW5lZCkgcmV0dXJuIGJvYXJkXG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gR2FtZUJvYXJkKCkucmVjZWl2ZUF0dGFjayhib2FyZCwgcm93LCBjb2wpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIGNvbnN0IGNvbXB1dGVyc01vdmUgPSAoYm9hcmQpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBnZXRSYW5kb21Db21wdXRlck1vdmUoYm9hcmQpXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcGxheWVyTW92ZSxcbiAgICAgICAgY29tcHV0ZXJzTW92ZSxcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllcnMiLCJjb25zdCBzaGlwID0gKG5hbWUpID0+IHtcbmxldCBoaXRDb3VudCA9IDA7XG5sZXQgbGVuZ3RoO1xuXG4gICAgaWYobmFtZS50b0xvd2VyQ2FzZSgpID09PSAnY2FycmllcicpIGxlbmd0aCA9IDU7XG4gICAgZWxzZSBpZihuYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdiYXR0bGVzaGlwJykgbGVuZ3RoID0gNDtcbiAgICBlbHNlIGlmKG5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2NydWlzZXInIHx8IG5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ3N1Ym1hcmluZScpIGxlbmd0aCA9IDM7XG4gICAgZWxzZSBsZW5ndGggPSAyO1xuXG4gICAgY29uc3QgaGl0ID0gKCkgPT4ge1xuICAgICAgICBoaXRDb3VudCArPSAxO1xuICAgIH1cblxuICAgIGNvbnN0IGlzU3Vua2VkID0gKCkgPT4ge1xuICAgICAgICBpZihoaXRDb3VudCA9PT0gbGVuZ3RoKXtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1lbHNlIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm57XG4gICAgICAgIG5hbWUsXG4gICAgICAgIGxlbmd0aCxcbiAgICAgICAgaGl0LFxuICAgICAgICBpc1N1bmtlZCxcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNoaXAiLCJjb25zdCBUdXJucyA9ICgpID0+e1xuICAgIGxldCB0dXJuID0gJ3BsYXllcidcbiAgICBjb25zdCBjaGFuZ2VUdXJuID0gKCkgPT4ge1xuICAgICAgICB0dXJuID09PSAncGxheWVyJz8gdHVybiA9ICdjb21wdXRlcicgOiB0dXJuID0gJ3BsYXllcidcbiAgICB9XG4gICAgY29uc3QgZ2V0VHVybiA9ICgpPT4ge1xuICAgICAgICByZXR1cm4gdHVyblxuICAgIH1cbiAgICByZXR1cm57XG4gICAgICAgIGdldFR1cm4sXG4gICAgICAgIGNoYW5nZVR1cm5cbiAgICB9XG59IFxuXG5leHBvcnQgZGVmYXVsdCBUdXJucyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBEb20gZnJvbSBcIi4vZG9tXCJcbmltcG9ydCBFdmVudHMgZnJvbSBcIi4vZXZlbnRzXCJcblxuY29uc3QgTWFpbiA9ICgpID0+IHtcbiAgICBcbiAgICBsZXQgZ2FtZVN0YXJ0ZWQgPSBmYWxzZVxuICAgIGNvbnN0IGluaXRpYWxpemVCb2FyZCA9IChyb3dzLCBjb2xzKSA9PiB7XG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKHsgbGVuZ3RoOiByb3dzIH0sICgpID0+IEFycmF5KGNvbHMpLmZpbGwoZmFsc2UpKTtcbiAgICB9O1xuICAgIGxldCBlbmVteUJvYXJkID0gaW5pdGlhbGl6ZUJvYXJkKDEwLCAxMClcbiAgICBsZXQgcGxheWVyQm9hcmQgPSBpbml0aWFsaXplQm9hcmQoMTAsIDEwKVxuXG4gICAgY29uc3QgeyBjcmVhdGVCb2FyZCwgcGxhY2VSYW5kb21TaGlwLCBzdGFydEdhbWUsIGF0dGFjaywgdXBkYXRlR3JpZCwgcGxheWVyU2hpcENvb3JkaW5hdGV9ID0gRG9tKClcbiAgICBjb25zdCB7ZHJhZ092ZXIsIGRyYWdTdGFydCwgZHJvcCwgY2hhbmdlT3JpZW50YXRpb259ID0gRXZlbnRzKClcbiAgICBcbiAgICBjb25zdCByYW5kb21TaGlwQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJhbmRvbS1zaGlwJylcbiAgICBjb25zdCBwbGF5ZXJHcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci1ib2FyZCcpXG4gICAgY29uc3QgZW5lbXlHcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVuZW15LWJvYXJkJylcbiAgICBjb25zdCBzdGFydEdhbWVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhcnQnKVxuICAgIGNvbnN0IHNoaXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJlaGljbGUnKVxuICAgIGNvbnN0IHBsYXlBZ2FpbkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5LWFnYWluJylcbiAgICBjb25zdCBwbGFjZWRTaGlwcyA9IFtdXG4gICAgXG4gICAgY3JlYXRlQm9hcmQocGxheWVyR3JpZClcbiAgICBjcmVhdGVCb2FyZChlbmVteUdyaWQpXG4gICAgXG4gICAgY29uc3QgcGxheWVyR3JpZENlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBsYXllci1ib2FyZCBkaXYnKVxuICAgIGNvbnN0IGVuZW15R3JpZENlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmVuZW15LWJvYXJkIGRpdicpXG4gICAgXG4gICAgcGxheUFnYWluQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PiB7XG4gICAgICAgIC8vIGVuZW15Qm9hcmQgPSBpbml0aWFsaXplQm9hcmQoMTAsIDEwKVxuICAgICAgICAvLyBwbGF5ZXJCb2FyZCA9IGluaXRpYWxpemVCb2FyZCgxMCwgMTApXG4gICAgICAgIC8vIHVwZGF0ZUdyaWQocGxheWVyQm9hcmQsIHBsYXllckdyaWQpXG4gICAgICAgIC8vIHVwZGF0ZUdyaWQoZW5lbXlCb2FyZCwgZW5lbXlHcmlkKVxuICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKVxuICAgICAgICBjb25zb2xlLmxvZygncGxheSBhZ2FpbicpXG4gICAgfSlcblxuICAgIHJhbmRvbVNoaXBCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+IHtcbiAgICAgICAgaWYoIWdhbWVTdGFydGVkKXtcbiAgICAgICAgICAgIHJhbmRvbVNoaXBCdG4ucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpXG4gICAgICAgICAgICBwbGF5ZXJCb2FyZCA9IHBsYWNlUmFuZG9tU2hpcChwbGF5ZXJCb2FyZClcbiAgICAgICAgfVxuICAgIH0pXG4gICAgc3RhcnRHYW1lQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PiB7XG4gICAgICAgIHN0YXJ0R2FtZShwbGF5ZXJCb2FyZCwgZW5lbXlCb2FyZClcbiAgICAgICAgZ2FtZVN0YXJ0ZWQgPSB0cnVlXG4gICAgICAgIHJhbmRvbVNoaXBCdG4uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsIHRydWUpXG4gICAgICAgIHN0YXJ0R2FtZUJ0bi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgdHJ1ZSlcbiAgICB9KVxuXG4gICAgc2hpcHMuZm9yRWFjaChzaGlwID0+IHtcbiAgICAgICAgc2hpcC5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCAoZSk9PiB7XG4gICAgICAgICAgIGlmICghZ2FtZVN0YXJ0ZWQpIGRyYWdTdGFydChlLCBwbGF5ZXJCb2FyZClcbiAgICAgICAgfSlcbiAgICB9KVxuXG4gICAgc2hpcHMuZm9yRWFjaChzaGlwID0+IHtcbiAgICAgICAgc2hpcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKT0+IHtcbiAgICAgICAgICAgIGlmICghZ2FtZVN0YXJ0ZWQpIGNoYW5nZU9yaWVudGF0aW9uKGUsIHBsYXllckJvYXJkKVxuICAgICAgICB9KVxuICAgIH0pXG5cbiAgICBwbGF5ZXJHcmlkQ2VsbHMuZm9yRWFjaChjZWxsID0+IHtcbiAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIChlKT0+e1xuICAgICAgICAgICAgaWYgKCFnYW1lU3RhcnRlZCkgZHJhZ092ZXIoZSxwbGF5ZXJCb2FyZCwgcGxheWVyR3JpZENlbGxzKVxuICAgICAgICB9KVxuICAgIH0pXG4gICAgXG4gICAgcGxheWVyR3JpZENlbGxzLmZvckVhY2goY2VsbCA9PiB7XG4gICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIChlKT0+e1xuICAgICAgICAgICBpZiAoIWdhbWVTdGFydGVkKSBwbGF5ZXJCb2FyZCA9IGRyb3AoZSxjZWxsLCBwbGF5ZXJCb2FyZCwgcGxheWVyR3JpZENlbGxzLCBwbGFjZWRTaGlwcylcbiAgICAgICAgfSlcbiAgICB9KVxuXG4gICAgZW5lbXlHcmlkQ2VsbHMuZm9yRWFjaChjZWxsID0+IHtcbiAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKT0+IHtcbiAgICAgICAgICAgIGF0dGFjayhlLCBjZWxsLCBwbGF5ZXJCb2FyZCwgZW5lbXlCb2FyZClcbiAgICAgICAgfSlcbiAgICB9KVxuICAgIFxuXG59XG5cbk1haW4oKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==