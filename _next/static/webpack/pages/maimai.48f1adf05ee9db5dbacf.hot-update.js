webpackHotUpdate_N_E("pages/maimai",{

/***/ "./components/public/Maimai/Maimai.constants.ts":
/*!******************************************************!*\
  !*** ./components/public/Maimai/Maimai.constants.ts ***!
  \******************************************************/
/*! exports provided: getGenres, getLevels, defaultOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGenres", function() { return getGenres; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLevels", function() { return getLevels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultOptions", function() { return defaultOptions; });
// Genre list for maimai.
var getGenres = function getGenres(list) {
  // Get a list of genres.
  var genres = [];
  list.forEach(function (song) {
    if (!genres.includes(song.genre)) {
      genres.push(song.genre);
    }
  }); // Map out dropdown from list of genres.

  var genreList = [];
  genres.map(function (genre) {
    genreList.push({
      key: genre,
      text: genre,
      value: genre
    });
  });
  return genreList;
}; // Level list for maimai.

var getLevels = function getLevels(list) {
  // Get a list of genres.
  var levels = [];
  list.forEach(function (song) {
    Object.keys(song.data).map(function (diff) {
      if (!levels.includes(song.data[diff].level)) {
        levels.push(Number(song.data[diff].level));
      }
    });
  });
  console.log(levels);
  levels.sort(function (a, b) {
    return Number(a) - Number(b);
  });
  console.log(levels); // Map out dropdown from list of genres.

  var levelsList = [];
  levels.map(function (genre) {
    levelsList.push({
      key: genre,
      text: genre,
      value: genre
    });
  });
  return levelsList;
}; // Default options.

var defaultOptions = {
  name: '',
  artist: '',
  level: '',
  genre: ''
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wdWJsaWMvTWFpbWFpL01haW1haS5jb25zdGFudHMudHMiXSwibmFtZXMiOlsiZ2V0R2VucmVzIiwibGlzdCIsImdlbnJlcyIsImZvckVhY2giLCJzb25nIiwiaW5jbHVkZXMiLCJnZW5yZSIsInB1c2giLCJnZW5yZUxpc3QiLCJtYXAiLCJrZXkiLCJ0ZXh0IiwidmFsdWUiLCJnZXRMZXZlbHMiLCJsZXZlbHMiLCJPYmplY3QiLCJrZXlzIiwiZGF0YSIsImRpZmYiLCJsZXZlbCIsIk51bWJlciIsImNvbnNvbGUiLCJsb2ciLCJzb3J0IiwiYSIsImIiLCJsZXZlbHNMaXN0IiwiZGVmYXVsdE9wdGlvbnMiLCJuYW1lIiwiYXJ0aXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNPLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLElBQUQsRUFBb0Q7QUFDM0U7QUFDQSxNQUFNQyxNQUFnQixHQUFHLEVBQXpCO0FBQ0FELE1BQUksQ0FBQ0UsT0FBTCxDQUFhLFVBQUNDLElBQUQsRUFBd0I7QUFDbkMsUUFBSSxDQUFDRixNQUFNLENBQUNHLFFBQVAsQ0FBZ0JELElBQUksQ0FBQ0UsS0FBckIsQ0FBTCxFQUFrQztBQUNoQ0osWUFBTSxDQUFDSyxJQUFQLENBQVlILElBQUksQ0FBQ0UsS0FBakI7QUFDRDtBQUNGLEdBSkQsRUFIMkUsQ0FTM0U7O0FBQ0EsTUFBTUUsU0FBbUMsR0FBRyxFQUE1QztBQUNBTixRQUFNLENBQUNPLEdBQVAsQ0FBVyxVQUFDSCxLQUFELEVBQW1CO0FBQzVCRSxhQUFTLENBQUNELElBQVYsQ0FBZTtBQUNiRyxTQUFHLEVBQUVKLEtBRFE7QUFFYkssVUFBSSxFQUFFTCxLQUZPO0FBR2JNLFdBQUssRUFBRU47QUFITSxLQUFmO0FBS0QsR0FORDtBQU9BLFNBQU9FLFNBQVA7QUFDRCxDQW5CTSxDLENBcUJQOztBQUNPLElBQU1LLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNaLElBQUQsRUFBb0Q7QUFDM0U7QUFDQSxNQUFNYSxNQUFnQixHQUFHLEVBQXpCO0FBQ0FiLE1BQUksQ0FBQ0UsT0FBTCxDQUFhLFVBQUNDLElBQUQsRUFBd0I7QUFDbkNXLFVBQU0sQ0FBQ0MsSUFBUCxDQUFZWixJQUFJLENBQUNhLElBQWpCLEVBQXVCUixHQUF2QixDQUEyQixVQUFDUyxJQUFELEVBQVU7QUFDbkMsVUFBSSxDQUFDSixNQUFNLENBQUNULFFBQVAsQ0FBZ0JELElBQUksQ0FBQ2EsSUFBTCxDQUFVQyxJQUFWLEVBQWdCQyxLQUFoQyxDQUFMLEVBQTZDO0FBQzNDTCxjQUFNLENBQUNQLElBQVAsQ0FBWWEsTUFBTSxDQUFDaEIsSUFBSSxDQUFDYSxJQUFMLENBQVVDLElBQVYsRUFBZ0JDLEtBQWpCLENBQWxCO0FBQ0Q7QUFDRixLQUpEO0FBS0QsR0FORDtBQVFBRSxTQUFPLENBQUNDLEdBQVIsQ0FBWVIsTUFBWjtBQUNBQSxRQUFNLENBQUNTLElBQVAsQ0FBWSxVQUFDQyxDQUFELEVBQUlDLENBQUo7QUFBQSxXQUFVTCxNQUFNLENBQUNJLENBQUQsQ0FBTixHQUFZSixNQUFNLENBQUNLLENBQUQsQ0FBNUI7QUFBQSxHQUFaO0FBQ0FKLFNBQU8sQ0FBQ0MsR0FBUixDQUFZUixNQUFaLEVBYjJFLENBZTNFOztBQUNBLE1BQU1ZLFVBQW9DLEdBQUcsRUFBN0M7QUFDQVosUUFBTSxDQUFDTCxHQUFQLENBQVcsVUFBQ0gsS0FBRCxFQUFtQjtBQUM1Qm9CLGNBQVUsQ0FBQ25CLElBQVgsQ0FBZ0I7QUFDZEcsU0FBRyxFQUFFSixLQURTO0FBRWRLLFVBQUksRUFBRUwsS0FGUTtBQUdkTSxXQUFLLEVBQUVOO0FBSE8sS0FBaEI7QUFLRCxHQU5EO0FBT0EsU0FBT29CLFVBQVA7QUFDRCxDQXpCTSxDLENBMkJQOztBQUNPLElBQU1DLGNBQXNDLEdBQUc7QUFDcERDLE1BQUksRUFBRSxFQUQ4QztBQUVwREMsUUFBTSxFQUFFLEVBRjRDO0FBR3BEVixPQUFLLEVBQUUsRUFINkM7QUFJcERiLE9BQUssRUFBRTtBQUo2QyxDQUEvQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9tYWltYWkuNDhmMWFkZjA1ZWU5ZGI1ZGJhY2YuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1NU29uZ1JlY29yZCB9IGZyb20gJy4uLy4uLy4uL3R5cGVzJztcblxuLy8gR2VucmUgbGlzdCBmb3IgbWFpbWFpLlxuZXhwb3J0IGNvbnN0IGdldEdlbnJlcyA9IChsaXN0OiBNTVNvbmdSZWNvcmRbXSk6IFJlY29yZDxzdHJpbmcsIHN0cmluZz5bXSA9PiB7XG4gIC8vIEdldCBhIGxpc3Qgb2YgZ2VucmVzLlxuICBjb25zdCBnZW5yZXM6IHN0cmluZ1tdID0gW107XG4gIGxpc3QuZm9yRWFjaCgoc29uZzogTU1Tb25nUmVjb3JkKSA9PiB7XG4gICAgaWYgKCFnZW5yZXMuaW5jbHVkZXMoc29uZy5nZW5yZSkpIHtcbiAgICAgIGdlbnJlcy5wdXNoKHNvbmcuZ2VucmUpO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gTWFwIG91dCBkcm9wZG93biBmcm9tIGxpc3Qgb2YgZ2VucmVzLlxuICBjb25zdCBnZW5yZUxpc3Q6IFJlY29yZDxzdHJpbmcsIHN0cmluZz5bXSA9IFtdO1xuICBnZW5yZXMubWFwKChnZW5yZTogc3RyaW5nKSA9PiB7XG4gICAgZ2VucmVMaXN0LnB1c2goe1xuICAgICAga2V5OiBnZW5yZSxcbiAgICAgIHRleHQ6IGdlbnJlLFxuICAgICAgdmFsdWU6IGdlbnJlLFxuICAgIH0pO1xuICB9KTtcbiAgcmV0dXJuIGdlbnJlTGlzdDtcbn07XG5cbi8vIExldmVsIGxpc3QgZm9yIG1haW1haS5cbmV4cG9ydCBjb25zdCBnZXRMZXZlbHMgPSAobGlzdDogTU1Tb25nUmVjb3JkW10pOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+W10gPT4ge1xuICAvLyBHZXQgYSBsaXN0IG9mIGdlbnJlcy5cbiAgY29uc3QgbGV2ZWxzOiBzdHJpbmdbXSA9IFtdO1xuICBsaXN0LmZvckVhY2goKHNvbmc6IE1NU29uZ1JlY29yZCkgPT4ge1xuICAgIE9iamVjdC5rZXlzKHNvbmcuZGF0YSkubWFwKChkaWZmKSA9PiB7XG4gICAgICBpZiAoIWxldmVscy5pbmNsdWRlcyhzb25nLmRhdGFbZGlmZl0ubGV2ZWwpKSB7XG4gICAgICAgIGxldmVscy5wdXNoKE51bWJlcihzb25nLmRhdGFbZGlmZl0ubGV2ZWwpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG5cbiAgY29uc29sZS5sb2cobGV2ZWxzKTtcbiAgbGV2ZWxzLnNvcnQoKGEsIGIpID0+IE51bWJlcihhKSAtIE51bWJlcihiKSk7XG4gIGNvbnNvbGUubG9nKGxldmVscyk7XG5cbiAgLy8gTWFwIG91dCBkcm9wZG93biBmcm9tIGxpc3Qgb2YgZ2VucmVzLlxuICBjb25zdCBsZXZlbHNMaXN0OiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+W10gPSBbXTtcbiAgbGV2ZWxzLm1hcCgoZ2VucmU6IHN0cmluZykgPT4ge1xuICAgIGxldmVsc0xpc3QucHVzaCh7XG4gICAgICBrZXk6IGdlbnJlLFxuICAgICAgdGV4dDogZ2VucmUsXG4gICAgICB2YWx1ZTogZ2VucmUsXG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gbGV2ZWxzTGlzdDtcbn07XG5cbi8vIERlZmF1bHQgb3B0aW9ucy5cbmV4cG9ydCBjb25zdCBkZWZhdWx0T3B0aW9uczogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcbiAgbmFtZTogJycsXG4gIGFydGlzdDogJycsXG4gIGxldmVsOiAnJyxcbiAgZ2VucmU6ICcnLFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=