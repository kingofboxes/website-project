webpackHotUpdate_N_E("pages/maimai",{

/***/ "./components/public/Maimai/Maimai.tsx":
/*!*********************************************!*\
  !*** ./components/public/Maimai/Maimai.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _home_kingofboxes_projects_website_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _home_kingofboxes_projects_website_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_kingofboxes_projects_website_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_kingofboxes_projects_website_project_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _home_kingofboxes_projects_website_project_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _home_kingofboxes_projects_website_project_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _common_ContentHeader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/ContentHeader */ "./components/common/ContentHeader.tsx");
/* harmony import */ var _common_PublicShell__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/PublicShell */ "./components/common/PublicShell.tsx");
/* harmony import */ var _Maimai_data__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Maimai.data */ "./components/public/Maimai/Maimai.data.tsx");
/* harmony import */ var _Maimai_data__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_Maimai_data__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Maimai_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Maimai.constants */ "./components/public/Maimai/Maimai.constants.ts");
/* harmony import */ var _styling_Maimai_module_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../styling/Maimai.module.css */ "./components/styling/Maimai.module.css");
/* harmony import */ var _styling_Maimai_module_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styling_Maimai_module_css__WEBPACK_IMPORTED_MODULE_12__);






var _jsxFileName = "/home/kingofboxes/projects/website-project/components/public/Maimai/Maimai.tsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_home_kingofboxes_projects_website_project_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/* eslint-disable prettier/prettier */







 // Create Axios instance.

var api = axios__WEBPACK_IMPORTED_MODULE_6___default.a.create({
  baseURL: 'https://kingofboxes.mxblue.net.au:4000/'
});
var contentProps = {
  heading: 'Maimai DX',
  description: ["Maimai DX is an arcade rhythm game with eight buttons spaced around in a circle. \n  Below are a list of songs available on the machine (the international version), \n  as the song list on the official site is not up-to-date.", "Every song is either a \"Deluxe\" or \"Standard\" song, and is specified by the logo. If it is a Deluxe song,\n  the font color is rainbow, and if it is a Standard song, the font color is white. Deluxe songs\n  are exclusive to Maimai DX, and some songs may even have both Deluxe and Standard versions! The genre\n  for each song is located in the top right corner.", "Each song has a minimum of four difficulties: BASIC, ADVANCED, EXPERT and MASTER.\n  Some songs have a fifth difficulty, RE:MASTER, which is harder than MASTER. The difficulty levels\n  of the songs range from 1 to 15, and there is only currently one song that is Level 15.", "I do not own any of the images or songs, all ownership belongs to SEGA."]
};

var MaimaiDX = function MaimaiDX(data) {
  _s();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_5___default.a.useState(false),
      _React$useState2 = Object(_home_kingofboxes_projects_website_project_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState, 2),
      loading = _React$useState2[0],
      setLoading = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_5___default.a.useState(5),
      _React$useState4 = Object(_home_kingofboxes_projects_website_project_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState3, 2),
      results = _React$useState4[0],
      setResults = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_5___default.a.useState(data.record),
      _React$useState6 = Object(_home_kingofboxes_projects_website_project_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState5, 2),
      list = _React$useState6[0],
      setList = _React$useState6[1];

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_5___default.a.useState(_Maimai_constants__WEBPACK_IMPORTED_MODULE_11__["defaultOptions"]),
      _React$useState8 = Object(_home_kingofboxes_projects_website_project_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState7, 2),
      query = _React$useState8[0],
      setQuery = _React$useState8[1];

  var genres = [];
  data.record.forEach(function (song) {
    if (!genres.includes(song.genre)) {
      genres.push(song.genre);
    }
  });
  var genreList = [];
  genres.map(function (genre) {
    genreList.push({
      key: genre,
      text: genre,
      value: genre
    });
  }); // UseEffect hook for infinite scroll.

  react__WEBPACK_IMPORTED_MODULE_5___default.a.useEffect(function () {
    var checkScroll = function checkScroll() {
      var height = document.body.scrollHeight;
      var curr = window.scrollY + window.innerHeight;

      if (curr >= height) {
        if (list && results < list.length) {
          setLoading(true);
          setTimeout(function () {
            setLoading(false);
            setResults(results + 10);
          }, 500);
        }
      }
    };

    window.addEventListener('scroll', checkScroll);
    return function () {
      window.removeEventListener('scroll', checkScroll);
    };
  }, [list, results]); // Set name.

  var setName = function setName(event) {
    var options = _objectSpread(_objectSpread({}, query), {}, {
      name: event.target.value
    });

    setQuery(options);
    filter(options);
  };

  var setArtist = function setArtist(event) {
    var options = _objectSpread(_objectSpread({}, query), {}, {
      artist: event.target.value
    });

    setQuery(options);
    filter(options);
  };

  var setGenre = function setGenre(_event, data) {
    var genre = String(data.value);

    var options = _objectSpread(_objectSpread({}, query), {}, {
      genre: genre
    });

    setQuery(options);
    filter(options);
  };

  var filter = function filter(options) {
    var pattern;
    var newList = data.record;

    if (options.name !== '') {
      pattern = new RegExp(options.name, 'i');
      newList = newList.filter(function (song) {
        return pattern.test(song.song);
      });
    }

    if (options.artist !== '') {
      pattern = new RegExp(options.artist, 'i');
      newList = newList.filter(function (song) {
        return pattern.test(song.artist);
      });
    }

    if (options.genre !== '') {
      pattern = new RegExp(options.genre, 'i');
      newList = newList.filter(function (song) {
        return pattern.test(song.genre);
      });
    }

    setList(newList);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_common_PublicShell__WEBPACK_IMPORTED_MODULE_9__["default"], {
    title: "Maimai DX Song List | Justin's Website",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_common_ContentHeader__WEBPACK_IMPORTED_MODULE_8__["default"], {
      data: contentProps
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("h2", {
      children: "Song List"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      className: _styling_Maimai_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.search,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Form"], {
        inverted: true,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Form"].Group, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Form"].Input, {
            label: "Song Name:",
            placeholder: "Search by song name...",
            value: query.name,
            onChange: setName
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Form"].Input, {
            label: "Artist:",
            placeholder: "Search by artist...",
            value: query.artist,
            onChange: setArtist
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Form"].Dropdown, {
            label: "Genre:",
            selection: true,
            placeholder: "Filter by genre...",
            options: genreList,
            onChange: setGenre
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 7
    }, _this), list && list.map(function (song, idx) {
      if (idx < results) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_Maimai_data__WEBPACK_IMPORTED_MODULE_10__["MaimaiSongComponent"], {
          song: song
        }, song.id, false, {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 20
        }, _this);
      }
    }), loading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_Maimai_data__WEBPACK_IMPORTED_MODULE_10__["MaimaiSongLoader"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 19
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 124,
    columnNumber: 5
  }, _this);
}; // Fetch data before load.


_s(MaimaiDX, "aVvq9rJry8H+pYrnexo3WBdhYrs=");

_c = MaimaiDX;
MaimaiDX.getInitialProps = /*#__PURE__*/Object(_home_kingofboxes_projects_website_project_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_home_kingofboxes_projects_website_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var res, data;
  return _home_kingofboxes_projects_website_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return api.get('/maimai');

        case 2:
          res = _context.sent;
          data = res.data;
          return _context.abrupt("return", data);

        case 5:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
/* harmony default export */ __webpack_exports__["default"] = (MaimaiDX);

var _c;

$RefreshReg$(_c, "MaimaiDX");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wdWJsaWMvTWFpbWFpL01haW1haS50c3giXSwibmFtZXMiOlsiYXBpIiwiYXhpb3MiLCJjcmVhdGUiLCJiYXNlVVJMIiwiY29udGVudFByb3BzIiwiaGVhZGluZyIsImRlc2NyaXB0aW9uIiwiTWFpbWFpRFgiLCJkYXRhIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwicmVzdWx0cyIsInNldFJlc3VsdHMiLCJyZWNvcmQiLCJsaXN0Iiwic2V0TGlzdCIsImRlZmF1bHRPcHRpb25zIiwicXVlcnkiLCJzZXRRdWVyeSIsImdlbnJlcyIsImZvckVhY2giLCJzb25nIiwiaW5jbHVkZXMiLCJnZW5yZSIsInB1c2giLCJnZW5yZUxpc3QiLCJtYXAiLCJrZXkiLCJ0ZXh0IiwidmFsdWUiLCJ1c2VFZmZlY3QiLCJjaGVja1Njcm9sbCIsImhlaWdodCIsImRvY3VtZW50IiwiYm9keSIsInNjcm9sbEhlaWdodCIsImN1cnIiLCJ3aW5kb3ciLCJzY3JvbGxZIiwiaW5uZXJIZWlnaHQiLCJsZW5ndGgiLCJzZXRUaW1lb3V0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzZXROYW1lIiwiZXZlbnQiLCJvcHRpb25zIiwibmFtZSIsInRhcmdldCIsImZpbHRlciIsInNldEFydGlzdCIsImFydGlzdCIsInNldEdlbnJlIiwiX2V2ZW50IiwiU3RyaW5nIiwicGF0dGVybiIsIm5ld0xpc3QiLCJSZWdFeHAiLCJ0ZXN0Iiwic3R5bGVzIiwic2VhcmNoIiwiaWR4IiwiaWQiLCJnZXRJbml0aWFsUHJvcHMiLCJnZXQiLCJyZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtDQUlBOztBQUNBLElBQU1BLEdBQWtCLEdBQUdDLDRDQUFLLENBQUNDLE1BQU4sQ0FBYTtBQUN0Q0MsU0FBTyxFQUFFO0FBRDZCLENBQWIsQ0FBM0I7QUFJQSxJQUFNQyxZQUEwQixHQUFHO0FBQ2pDQyxTQUFPLEVBQUUsV0FEd0I7QUFFakNDLGFBQVcsRUFBRTtBQUZvQixDQUFuQzs7QUFpQkEsSUFBTUMsUUFBZ0MsR0FBRyxTQUFuQ0EsUUFBbUMsQ0FBQ0MsSUFBRCxFQUFVO0FBQUE7O0FBQUEsd0JBRW5CQyw0Q0FBSyxDQUFDQyxRQUFOLENBQXdCLEtBQXhCLENBRm1CO0FBQUE7QUFBQSxNQUUxQ0MsT0FGMEM7QUFBQSxNQUVqQ0MsVUFGaUM7O0FBQUEseUJBR25CSCw0Q0FBSyxDQUFDQyxRQUFOLENBQXVCLENBQXZCLENBSG1CO0FBQUE7QUFBQSxNQUcxQ0csT0FIMEM7QUFBQSxNQUdqQ0MsVUFIaUM7O0FBQUEseUJBSXpCTCw0Q0FBSyxDQUFDQyxRQUFOLENBQStCRixJQUFJLENBQUNPLE1BQXBDLENBSnlCO0FBQUE7QUFBQSxNQUkxQ0MsSUFKMEM7QUFBQSxNQUlwQ0MsT0FKb0M7O0FBQUEseUJBS3ZCUiw0Q0FBSyxDQUFDQyxRQUFOLENBQXVDUSxpRUFBdkMsQ0FMdUI7QUFBQTtBQUFBLE1BSzFDQyxLQUwwQztBQUFBLE1BS25DQyxRQUxtQzs7QUFPakQsTUFBTUMsTUFBTSxHQUFHLEVBQWY7QUFDQWIsTUFBSSxDQUFDTyxNQUFMLENBQVlPLE9BQVosQ0FBb0IsVUFBQ0MsSUFBRCxFQUFVO0FBQzVCLFFBQUksQ0FBQ0YsTUFBTSxDQUFDRyxRQUFQLENBQWdCRCxJQUFJLENBQUNFLEtBQXJCLENBQUwsRUFBa0M7QUFDaENKLFlBQU0sQ0FBQ0ssSUFBUCxDQUFZSCxJQUFJLENBQUNFLEtBQWpCO0FBQ0Q7QUFDRixHQUpEO0FBS0EsTUFBTUUsU0FBUyxHQUFHLEVBQWxCO0FBQ0FOLFFBQU0sQ0FBQ08sR0FBUCxDQUFXLFVBQUNILEtBQUQsRUFBbUI7QUFDNUJFLGFBQVMsQ0FBQ0QsSUFBVixDQUFlO0FBQ2JHLFNBQUcsRUFBRUosS0FEUTtBQUViSyxVQUFJLEVBQUVMLEtBRk87QUFHYk0sV0FBSyxFQUFFTjtBQUhNLEtBQWY7QUFLRCxHQU5ELEVBZGlELENBc0JqRDs7QUFDQWhCLDhDQUFLLENBQUN1QixTQUFOLENBQWdCLFlBQU07QUFDcEIsUUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN4QixVQUFNQyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxZQUE3QjtBQUNBLFVBQU1DLElBQUksR0FBR0MsTUFBTSxDQUFDQyxPQUFQLEdBQWlCRCxNQUFNLENBQUNFLFdBQXJDOztBQUNBLFVBQUlILElBQUksSUFBSUosTUFBWixFQUFvQjtBQUNsQixZQUFJbEIsSUFBSSxJQUFJSCxPQUFPLEdBQUdHLElBQUksQ0FBQzBCLE1BQTNCLEVBQW1DO0FBQ2pDOUIsb0JBQVUsQ0FBQyxJQUFELENBQVY7QUFDQStCLG9CQUFVLENBQUMsWUFBTTtBQUNmL0Isc0JBQVUsQ0FBQyxLQUFELENBQVY7QUFDQUUsc0JBQVUsQ0FBQ0QsT0FBTyxHQUFHLEVBQVgsQ0FBVjtBQUNELFdBSFMsRUFHUCxHQUhPLENBQVY7QUFJRDtBQUNGO0FBQ0YsS0FaRDs7QUFhQTBCLFVBQU0sQ0FBQ0ssZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0NYLFdBQWxDO0FBQ0EsV0FBTyxZQUFNO0FBQ1hNLFlBQU0sQ0FBQ00sbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUNaLFdBQXJDO0FBQ0QsS0FGRDtBQUdELEdBbEJELEVBa0JHLENBQUNqQixJQUFELEVBQU9ILE9BQVAsQ0FsQkgsRUF2QmlELENBMkNqRDs7QUFDQSxNQUFNaUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsS0FBRCxFQUFnRDtBQUM5RCxRQUFNQyxPQUFPLG1DQUFPN0IsS0FBUDtBQUFjOEIsVUFBSSxFQUFFRixLQUFLLENBQUNHLE1BQU4sQ0FBYW5CO0FBQWpDLE1BQWI7O0FBQ0FYLFlBQVEsQ0FBQzRCLE9BQUQsQ0FBUjtBQUNBRyxVQUFNLENBQUNILE9BQUQsQ0FBTjtBQUNELEdBSkQ7O0FBTUEsTUFBTUksU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0wsS0FBRCxFQUFnRDtBQUNoRSxRQUFNQyxPQUFPLG1DQUFPN0IsS0FBUDtBQUFja0MsWUFBTSxFQUFFTixLQUFLLENBQUNHLE1BQU4sQ0FBYW5CO0FBQW5DLE1BQWI7O0FBQ0FYLFlBQVEsQ0FBQzRCLE9BQUQsQ0FBUjtBQUNBRyxVQUFNLENBQUNILE9BQUQsQ0FBTjtBQUNELEdBSkQ7O0FBTUEsTUFBTU0sUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsTUFBRCxFQUE0Qy9DLElBQTVDLEVBQW9FO0FBQ25GLFFBQU1pQixLQUFLLEdBQUcrQixNQUFNLENBQUNoRCxJQUFJLENBQUN1QixLQUFOLENBQXBCOztBQUNBLFFBQU1pQixPQUErQixtQ0FBTzdCLEtBQVA7QUFBY00sV0FBSyxFQUFFQTtBQUFyQixNQUFyQzs7QUFDQUwsWUFBUSxDQUFDNEIsT0FBRCxDQUFSO0FBQ0FHLFVBQU0sQ0FBQ0gsT0FBRCxDQUFOO0FBQ0QsR0FMRDs7QUFPQSxNQUFNRyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDSCxPQUFELEVBQXFDO0FBRWxELFFBQUlTLE9BQUo7QUFDQSxRQUFJQyxPQUFPLEdBQUdsRCxJQUFJLENBQUNPLE1BQW5COztBQUVBLFFBQUlpQyxPQUFPLENBQUNDLElBQVIsS0FBaUIsRUFBckIsRUFBeUI7QUFDdkJRLGFBQU8sR0FBRyxJQUFJRSxNQUFKLENBQVdYLE9BQU8sQ0FBQ0MsSUFBbkIsRUFBeUIsR0FBekIsQ0FBVjtBQUNBUyxhQUFPLEdBQUdBLE9BQU8sQ0FBQ1AsTUFBUixDQUFlLFVBQUM1QixJQUFEO0FBQUEsZUFBVWtDLE9BQU8sQ0FBQ0csSUFBUixDQUFhckMsSUFBSSxDQUFDQSxJQUFsQixDQUFWO0FBQUEsT0FBZixDQUFWO0FBQ0Q7O0FBRUQsUUFBSXlCLE9BQU8sQ0FBQ0ssTUFBUixLQUFtQixFQUF2QixFQUEyQjtBQUN6QkksYUFBTyxHQUFHLElBQUlFLE1BQUosQ0FBV1gsT0FBTyxDQUFDSyxNQUFuQixFQUEyQixHQUEzQixDQUFWO0FBQ0FLLGFBQU8sR0FBR0EsT0FBTyxDQUFDUCxNQUFSLENBQWUsVUFBQzVCLElBQUQ7QUFBQSxlQUFVa0MsT0FBTyxDQUFDRyxJQUFSLENBQWFyQyxJQUFJLENBQUM4QixNQUFsQixDQUFWO0FBQUEsT0FBZixDQUFWO0FBQ0Q7O0FBRUQsUUFBSUwsT0FBTyxDQUFDdkIsS0FBUixLQUFrQixFQUF0QixFQUEwQjtBQUN4QmdDLGFBQU8sR0FBRyxJQUFJRSxNQUFKLENBQVdYLE9BQU8sQ0FBQ3ZCLEtBQW5CLEVBQTBCLEdBQTFCLENBQVY7QUFDQWlDLGFBQU8sR0FBR0EsT0FBTyxDQUFDUCxNQUFSLENBQWUsVUFBQzVCLElBQUQ7QUFBQSxlQUFVa0MsT0FBTyxDQUFDRyxJQUFSLENBQWFyQyxJQUFJLENBQUNFLEtBQWxCLENBQVY7QUFBQSxPQUFmLENBQVY7QUFDRDs7QUFFRFIsV0FBTyxDQUFDeUMsT0FBRCxDQUFQO0FBQ0QsR0FyQkQ7O0FBdUJBLHNCQUNFLHFFQUFDLDJEQUFEO0FBQWEsU0FBSyxFQUFDLHdDQUFuQjtBQUFBLDRCQUNFLHFFQUFDLDZEQUFEO0FBQWUsVUFBSSxFQUFFdEQ7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixlQUdFO0FBQUssZUFBUyxFQUFFeUQsa0VBQU0sQ0FBQ0MsTUFBdkI7QUFBQSw2QkFDRSxxRUFBQyxzREFBRDtBQUFNLGdCQUFRLE1BQWQ7QUFBQSwrQkFDRSxxRUFBQyxzREFBRCxDQUFNLEtBQU47QUFBQSxrQ0FDRSxxRUFBQyxzREFBRCxDQUFNLEtBQU47QUFBWSxpQkFBSyxFQUFDLFlBQWxCO0FBQStCLHVCQUFXLEVBQUMsd0JBQTNDO0FBQW9FLGlCQUFLLEVBQUUzQyxLQUFLLENBQUM4QixJQUFqRjtBQUF1RixvQkFBUSxFQUFFSDtBQUFqRztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUUscUVBQUMsc0RBQUQsQ0FBTSxLQUFOO0FBQVksaUJBQUssRUFBQyxTQUFsQjtBQUE0Qix1QkFBVyxFQUFDLHFCQUF4QztBQUE4RCxpQkFBSyxFQUFFM0IsS0FBSyxDQUFDa0MsTUFBM0U7QUFBbUYsb0JBQVEsRUFBRUQ7QUFBN0Y7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRixlQUdFLHFFQUFDLHNEQUFELENBQU0sUUFBTjtBQUFlLGlCQUFLLEVBQUMsUUFBckI7QUFBOEIscUJBQVMsTUFBdkM7QUFBd0MsdUJBQVcsRUFBQyxvQkFBcEQ7QUFBeUUsbUJBQU8sRUFBRXpCLFNBQWxGO0FBQTZGLG9CQUFRLEVBQUUyQjtBQUF2RztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEYsRUFZR3RDLElBQUksSUFDSEEsSUFBSSxDQUFDWSxHQUFMLENBQVMsVUFBQ0wsSUFBRCxFQUFxQndDLEdBQXJCLEVBQXFDO0FBQzVDLFVBQUlBLEdBQUcsR0FBR2xELE9BQVYsRUFBbUI7QUFDakIsNEJBQU8scUVBQUMsaUVBQUQ7QUFBcUIsY0FBSSxFQUFFVTtBQUEzQixXQUFzQ0EsSUFBSSxDQUFDeUMsRUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBUDtBQUNEO0FBQ0YsS0FKRCxDQWJKLEVBa0JHckQsT0FBTyxpQkFBSSxxRUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBbEJkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBc0JELENBNUdELEMsQ0E4R0E7OztHQTlHTUosUTs7S0FBQUEsUTtBQStHTkEsUUFBUSxDQUFDMEQsZUFBVCwrU0FBMkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFDUGpFLEdBQUcsQ0FBQ2tFLEdBQUosQ0FBUSxTQUFSLENBRE87O0FBQUE7QUFDbkJDLGFBRG1CO0FBRW5CM0QsY0FGbUIsR0FFRTJELEdBQUcsQ0FBQzNELElBRk47QUFBQSwyQ0FHbEJBLElBSGtCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBQTNCO0FBTWVELHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL21haW1haS4xMGE1ZTg4MWMzMWY3ZWY1NDhlMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcHJldHRpZXIvcHJldHRpZXIgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnO1xuaW1wb3J0IGF4aW9zLCB7IEF4aW9zSW5zdGFuY2UgfSBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyBEcm9wZG93blByb3BzLCBGb3JtIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXG5cbmltcG9ydCBDb250ZW50SGVhZGVyIGZyb20gJy4uLy4uL2NvbW1vbi9Db250ZW50SGVhZGVyJztcbmltcG9ydCBQdWJsaWNTaGVsbCBmcm9tICcuLi8uLi9jb21tb24vUHVibGljU2hlbGwnO1xuaW1wb3J0IHsgTU1QbGF5ZXJEYXRhLCBNTVNvbmdSZWNvcmQsIENvbnRlbnRQcm9wcyB9IGZyb20gJy4uLy4uLy4uL3R5cGVzJztcbmltcG9ydCB7IE1haW1haVNvbmdDb21wb25lbnQsIE1haW1haVNvbmdMb2FkZXIgfSBmcm9tICcuL01haW1haS5kYXRhJztcbmltcG9ydCB7IGdlbnJlTGlzdCwgZGVmYXVsdE9wdGlvbnMgfSBmcm9tICcuL01haW1haS5jb25zdGFudHMnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxpbmcvTWFpbWFpLm1vZHVsZS5jc3MnO1xuXG4vLyBDcmVhdGUgQXhpb3MgaW5zdGFuY2UuXG5jb25zdCBhcGk6IEF4aW9zSW5zdGFuY2UgPSBheGlvcy5jcmVhdGUoe1xuICBiYXNlVVJMOiAnaHR0cHM6Ly9raW5nb2Zib3hlcy5teGJsdWUubmV0LmF1OjQwMDAvJyxcbn0pO1xuXG5jb25zdCBjb250ZW50UHJvcHM6IENvbnRlbnRQcm9wcyA9IHtcbiAgaGVhZGluZzogJ01haW1haSBEWCcsXG4gIGRlc2NyaXB0aW9uOiBbXG4gICAgYE1haW1haSBEWCBpcyBhbiBhcmNhZGUgcmh5dGhtIGdhbWUgd2l0aCBlaWdodCBidXR0b25zIHNwYWNlZCBhcm91bmQgaW4gYSBjaXJjbGUuIFxuICBCZWxvdyBhcmUgYSBsaXN0IG9mIHNvbmdzIGF2YWlsYWJsZSBvbiB0aGUgbWFjaGluZSAodGhlIGludGVybmF0aW9uYWwgdmVyc2lvbiksIFxuICBhcyB0aGUgc29uZyBsaXN0IG9uIHRoZSBvZmZpY2lhbCBzaXRlIGlzIG5vdCB1cC10by1kYXRlLmAsXG4gICAgYEV2ZXJ5IHNvbmcgaXMgZWl0aGVyIGEgXCJEZWx1eGVcIiBvciBcIlN0YW5kYXJkXCIgc29uZywgYW5kIGlzIHNwZWNpZmllZCBieSB0aGUgbG9nby4gSWYgaXQgaXMgYSBEZWx1eGUgc29uZyxcbiAgdGhlIGZvbnQgY29sb3IgaXMgcmFpbmJvdywgYW5kIGlmIGl0IGlzIGEgU3RhbmRhcmQgc29uZywgdGhlIGZvbnQgY29sb3IgaXMgd2hpdGUuIERlbHV4ZSBzb25nc1xuICBhcmUgZXhjbHVzaXZlIHRvIE1haW1haSBEWCwgYW5kIHNvbWUgc29uZ3MgbWF5IGV2ZW4gaGF2ZSBib3RoIERlbHV4ZSBhbmQgU3RhbmRhcmQgdmVyc2lvbnMhIFRoZSBnZW5yZVxuICBmb3IgZWFjaCBzb25nIGlzIGxvY2F0ZWQgaW4gdGhlIHRvcCByaWdodCBjb3JuZXIuYCxcbiAgICBgRWFjaCBzb25nIGhhcyBhIG1pbmltdW0gb2YgZm91ciBkaWZmaWN1bHRpZXM6IEJBU0lDLCBBRFZBTkNFRCwgRVhQRVJUIGFuZCBNQVNURVIuXG4gIFNvbWUgc29uZ3MgaGF2ZSBhIGZpZnRoIGRpZmZpY3VsdHksIFJFOk1BU1RFUiwgd2hpY2ggaXMgaGFyZGVyIHRoYW4gTUFTVEVSLiBUaGUgZGlmZmljdWx0eSBsZXZlbHNcbiAgb2YgdGhlIHNvbmdzIHJhbmdlIGZyb20gMSB0byAxNSwgYW5kIHRoZXJlIGlzIG9ubHkgY3VycmVudGx5IG9uZSBzb25nIHRoYXQgaXMgTGV2ZWwgMTUuYCxcbiAgICBgSSBkbyBub3Qgb3duIGFueSBvZiB0aGUgaW1hZ2VzIG9yIHNvbmdzLCBhbGwgb3duZXJzaGlwIGJlbG9uZ3MgdG8gU0VHQS5gLFxuICBdLFxufTtcblxuY29uc3QgTWFpbWFpRFg6IE5leHRQYWdlPE1NUGxheWVyRGF0YT4gPSAoZGF0YSkgPT4ge1xuXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgY29uc3QgW3Jlc3VsdHMsIHNldFJlc3VsdHNdID0gUmVhY3QudXNlU3RhdGU8bnVtYmVyPig1KTtcbiAgY29uc3QgW2xpc3QsIHNldExpc3RdID0gUmVhY3QudXNlU3RhdGU8TU1Tb25nUmVjb3JkW10+KGRhdGEucmVjb3JkKTtcbiAgY29uc3QgW3F1ZXJ5LCBzZXRRdWVyeV0gPSBSZWFjdC51c2VTdGF0ZTxSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+PihkZWZhdWx0T3B0aW9ucyk7XG5cbiAgY29uc3QgZ2VucmVzID0gW11cbiAgZGF0YS5yZWNvcmQuZm9yRWFjaCgoc29uZykgPT4ge1xuICAgIGlmICghZ2VucmVzLmluY2x1ZGVzKHNvbmcuZ2VucmUpKSB7XG4gICAgICBnZW5yZXMucHVzaChzb25nLmdlbnJlKTtcbiAgICB9XG4gIH0pXG4gIGNvbnN0IGdlbnJlTGlzdCA9IFtdO1xuICBnZW5yZXMubWFwKChnZW5yZTogc3RyaW5nKSA9PiB7XG4gICAgZ2VucmVMaXN0LnB1c2goe1xuICAgICAga2V5OiBnZW5yZSxcbiAgICAgIHRleHQ6IGdlbnJlLFxuICAgICAgdmFsdWU6IGdlbnJlLFxuICAgIH0pO1xuICB9KTtcblxuICAvLyBVc2VFZmZlY3QgaG9vayBmb3IgaW5maW5pdGUgc2Nyb2xsLlxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGNoZWNrU2Nyb2xsID0gKCkgPT4ge1xuICAgICAgY29uc3QgaGVpZ2h0ID0gZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQ7XG4gICAgICBjb25zdCBjdXJyID0gd2luZG93LnNjcm9sbFkgKyB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICBpZiAoY3VyciA+PSBoZWlnaHQpIHtcbiAgICAgICAgaWYgKGxpc3QgJiYgcmVzdWx0cyA8IGxpc3QubGVuZ3RoKSB7XG4gICAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgc2V0UmVzdWx0cyhyZXN1bHRzICsgMTApO1xuICAgICAgICAgIH0sIDUwMCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBjaGVja1Njcm9sbCk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBjaGVja1Njcm9sbCk7XG4gICAgfTtcbiAgfSwgW2xpc3QsIHJlc3VsdHNdKTtcblxuICAvLyBTZXQgbmFtZS5cbiAgY29uc3Qgc2V0TmFtZSA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBjb25zdCBvcHRpb25zID0gey4uLnF1ZXJ5LCBuYW1lOiBldmVudC50YXJnZXQudmFsdWV9XG4gICAgc2V0UXVlcnkob3B0aW9ucyk7XG4gICAgZmlsdGVyKG9wdGlvbnMpXG4gIH1cblxuICBjb25zdCBzZXRBcnRpc3QgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHsuLi5xdWVyeSwgYXJ0aXN0OiBldmVudC50YXJnZXQudmFsdWV9XG4gICAgc2V0UXVlcnkob3B0aW9ucyk7XG4gICAgZmlsdGVyKG9wdGlvbnMpXG4gIH1cblxuICBjb25zdCBzZXRHZW5yZSA9IChfZXZlbnQ6IFJlYWN0LlN5bnRoZXRpY0V2ZW50PEhUTUxFbGVtZW50PiwgZGF0YTogRHJvcGRvd25Qcm9wcykgPT4ge1xuICAgIGNvbnN0IGdlbnJlID0gU3RyaW5nKGRhdGEudmFsdWUpO1xuICAgIGNvbnN0IG9wdGlvbnM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7Li4ucXVlcnksIGdlbnJlOiBnZW5yZX1cbiAgICBzZXRRdWVyeShvcHRpb25zKTtcbiAgICBmaWx0ZXIob3B0aW9ucylcbiAgfVxuXG4gIGNvbnN0IGZpbHRlciA9IChvcHRpb25zOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+KSA9PiB7XG5cbiAgICBsZXQgcGF0dGVybjogUmVnRXhwO1xuICAgIGxldCBuZXdMaXN0ID0gZGF0YS5yZWNvcmQ7XG5cbiAgICBpZiAob3B0aW9ucy5uYW1lICE9PSAnJykge1xuICAgICAgcGF0dGVybiA9IG5ldyBSZWdFeHAob3B0aW9ucy5uYW1lLCAnaScpO1xuICAgICAgbmV3TGlzdCA9IG5ld0xpc3QuZmlsdGVyKChzb25nKSA9PiBwYXR0ZXJuLnRlc3Qoc29uZy5zb25nKSk7XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMuYXJ0aXN0ICE9PSAnJykge1xuICAgICAgcGF0dGVybiA9IG5ldyBSZWdFeHAob3B0aW9ucy5hcnRpc3QsICdpJyk7XG4gICAgICBuZXdMaXN0ID0gbmV3TGlzdC5maWx0ZXIoKHNvbmcpID0+IHBhdHRlcm4udGVzdChzb25nLmFydGlzdCkpO1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zLmdlbnJlICE9PSAnJykge1xuICAgICAgcGF0dGVybiA9IG5ldyBSZWdFeHAob3B0aW9ucy5nZW5yZSwgJ2knKTtcbiAgICAgIG5ld0xpc3QgPSBuZXdMaXN0LmZpbHRlcigoc29uZykgPT4gcGF0dGVybi50ZXN0KHNvbmcuZ2VucmUpKTtcbiAgICB9XG5cbiAgICBzZXRMaXN0KG5ld0xpc3QpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8UHVibGljU2hlbGwgdGl0bGU9XCJNYWltYWkgRFggU29uZyBMaXN0IHwgSnVzdGluJ3MgV2Vic2l0ZVwiPlxuICAgICAgPENvbnRlbnRIZWFkZXIgZGF0YT17Y29udGVudFByb3BzfSAvPlxuICAgICAgPGgyPlNvbmcgTGlzdDwvaDI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaH0+XG4gICAgICAgIDxGb3JtIGludmVydGVkPlxuICAgICAgICAgIDxGb3JtLkdyb3VwPlxuICAgICAgICAgICAgPEZvcm0uSW5wdXQgbGFiZWw9J1NvbmcgTmFtZTonIHBsYWNlaG9sZGVyPSdTZWFyY2ggYnkgc29uZyBuYW1lLi4uJyB2YWx1ZT17cXVlcnkubmFtZX0gb25DaGFuZ2U9e3NldE5hbWV9IC8+XG4gICAgICAgICAgICA8Rm9ybS5JbnB1dCBsYWJlbD0nQXJ0aXN0OicgcGxhY2Vob2xkZXI9J1NlYXJjaCBieSBhcnRpc3QuLi4nIHZhbHVlPXtxdWVyeS5hcnRpc3R9IG9uQ2hhbmdlPXtzZXRBcnRpc3R9Lz5cbiAgICAgICAgICAgIDxGb3JtLkRyb3Bkb3duIGxhYmVsPSdHZW5yZTonIHNlbGVjdGlvbiBwbGFjZWhvbGRlcj0nRmlsdGVyIGJ5IGdlbnJlLi4uJyBvcHRpb25zPXtnZW5yZUxpc3R9IG9uQ2hhbmdlPXtzZXRHZW5yZX0gLz5cbiAgICAgICAgICA8L0Zvcm0uR3JvdXA+XG4gICAgICAgIDwvRm9ybT5cbiAgICAgIDwvZGl2PlxuICAgICAge2xpc3QgJiZcbiAgICAgICAgbGlzdC5tYXAoKHNvbmc6IE1NU29uZ1JlY29yZCwgaWR4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICBpZiAoaWR4IDwgcmVzdWx0cykge1xuICAgICAgICAgICAgcmV0dXJuIDxNYWltYWlTb25nQ29tcG9uZW50IHNvbmc9e3Nvbmd9IGtleT17c29uZy5pZH0gLz47XG4gICAgICAgICAgfVxuICAgICAgICB9KX1cbiAgICAgIHtsb2FkaW5nICYmIDxNYWltYWlTb25nTG9hZGVyIC8+fVxuICAgIDwvUHVibGljU2hlbGw+XG4gICk7XG59O1xuXG4vLyBGZXRjaCBkYXRhIGJlZm9yZSBsb2FkLlxuTWFpbWFpRFguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXMgPSBhd2FpdCBhcGkuZ2V0KCcvbWFpbWFpJyk7XG4gIGNvbnN0IGRhdGE6IE1NUGxheWVyRGF0YSA9IHJlcy5kYXRhO1xuICByZXR1cm4gZGF0YTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1haW1haURYO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==