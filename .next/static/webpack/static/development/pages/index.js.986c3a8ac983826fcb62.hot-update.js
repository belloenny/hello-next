webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.tsx");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "/Users/mac/Desktop/hello-next/pages/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





var API_URL = 'https://hndup-api-cms.herokuapp.com/graphql';

var fetcher = function fetcher() {
  var res;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function fetcher$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(API_URL, {
            query: "      \n        {\n            restaurants {\n              Name\n              categories{\n                id\n                name\n              }\n              picture {\n                url\n              }\n              Description\n            }\n         }\n    "
          }, {
            headers: {
              'Content-Type': 'application/json'
            }
          }));

        case 2:
          res = _context.sent;
          return _context.abrupt("return", res.data.data.restaurants);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
};

var HomePage = function HomePage(_ref) {
  var userAgent = _ref.userAgent;

  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_4__["default"])('/repos/zeit/next.js', fetcher),
      data = _useSWR.data,
      error = _useSWR.error;

  console.log(data);
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["Layout"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, data && data.map(function (restaurant) {
    return __jsx("div", {
      key: restaurant.id,
      className: "jsx-2524879433",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, __jsx("h1", {
      className: "jsx-2524879433",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, "Name: ", restaurant.Name), __jsx("img", {
      src: restaurant.picture.url,
      alt: "",
      width: 50,
      height: 50,
      className: "jsx-2524879433",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }), __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_6___default.a, {
      escapeHtml: true,
      source: restaurant.Description,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }), __jsx("ul", {
      className: "jsx-2524879433",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, restaurant.categories && restaurant.categories.map(function (category) {
      return __jsx("li", {
        key: category.id,
        style: {
          backgroundColor: category.name === 'Coffee' ? "#a52a2a" : "purple"
        },
        className: "jsx-2524879433",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, category.name);
    })));
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2524879433",
    __self: this
  }, "li.jsx-2524879433{padding:0px 10px;color:white;height:30px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvRGVza3RvcC9oZWxsby1uZXh0L3BhZ2VzL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1RXdCLEFBR3NDLGlCQUNMLFlBQ0EsWUFDaEIiLCJmaWxlIjoiL1VzZXJzL21hYy9EZXNrdG9wL2hlbGxvLW5leHQvcGFnZXMvaW5kZXgudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0JztcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgTWFya2Rvd24gZnJvbSAncmVhY3QtbWFya2Rvd24nO1xuaW1wb3J0IHsgUmVzdGF1cmFudCB9IGZyb20gJy4uL2dyYXBocWwvdHlwZXMnO1xuXG5jb25zdCBBUElfVVJMID0gJ2h0dHBzOi8vaG5kdXAtYXBpLWNtcy5oZXJva3VhcHAuY29tL2dyYXBocWwnXG5pbnRlcmZhY2UgUHJvcHN7XG4gICAgdXNlckFnZW50Pzogc3RyaW5nXG5cbn1cblxuY29uc3QgZmV0Y2hlciA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wb3N0KEFQSV9VUkwse1xuICAgICAgICBxdWVyeTogYCAgICAgIFxuICAgICAgICB7XG4gICAgICAgICAgICByZXN0YXVyYW50cyB7XG4gICAgICAgICAgICAgIE5hbWVcbiAgICAgICAgICAgICAgY2F0ZWdvcmllc3tcbiAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBwaWN0dXJlIHtcbiAgICAgICAgICAgICAgICB1cmxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBEZXNjcmlwdGlvblxuICAgICAgICAgICAgfVxuICAgICAgICAgfVxuICAgIGAsXG4gICAgfSx7IGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgIH19KVxuXG4gICAgcmV0dXJuIHJlcy5kYXRhLmRhdGEucmVzdGF1cmFudHNcbn1cblxuY29uc3QgSG9tZVBhZ2U6IE5leHRQYWdlPFByb3BzPiA9ICh7IHVzZXJBZ2VudCB9KSA9PiB7XG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKCcvcmVwb3MvemVpdC9uZXh0LmpzJywgZmV0Y2hlcilcbiAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgIHJldHVybiAoXG4gICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZGF0YSAmJiBkYXRhLm1hcCgocmVzdGF1cmFudDpSZXN0YXVyYW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17cmVzdGF1cmFudC5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPk5hbWU6IHtyZXN0YXVyYW50Lk5hbWV9PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cmVzdGF1cmFudC5waWN0dXJlLnVybH0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXs1MH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs1MH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9pbWc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8TWFya2Rvd25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXNjYXBlSHRtbD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlPXtyZXN0YXVyYW50LkRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmVzdGF1cmFudC5jYXRlZ29yaWVzICYmIHJlc3RhdXJhbnQuY2F0ZWdvcmllcy5tYXAoY2F0ZWdvcnkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtjYXRlZ29yeS5pZH0gc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogY2F0ZWdvcnkubmFtZSA9PT0gJ0NvZmZlZScgPyBcIiNhNTJhMmFcIjogXCJwdXJwbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2F0ZWdvcnkubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHggMTBweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgICAgfSAgICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9MYXlvdXQ+XG4gICAgKVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlIl19 */\n/*@ sourceURL=/Users/mac/Desktop/hello-next/pages/index.tsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ })

})
//# sourceMappingURL=index.js.986c3a8ac983826fcb62.hot-update.js.map