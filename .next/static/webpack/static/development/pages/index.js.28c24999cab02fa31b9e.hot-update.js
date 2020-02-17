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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);

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

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["Layout"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, data && data.map(function (restaurant) {
    return __jsx("div", {
      key: restaurant.id,
      className: "jsx-475439764",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, __jsx("h1", {
      className: "jsx-475439764",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, "Name: ", restaurant.Name), __jsx("img", {
      src: restaurant.picture.url,
      alt: "",
      className: "jsx-475439764" + " " + "cover-image",
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
        lineNumber: 54
      },
      __self: this
    }), __jsx("ul", {
      className: "jsx-475439764",
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
        className: "jsx-475439764" + " " + "pills",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, category.name);
    })));
  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
    href: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, " ", __jsx("a", {
    className: "jsx-475439764",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "Go to next Page")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "475439764",
    __self: this
  }, "ul.jsx-475439764{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}li.jsx-475439764{padding:9px 10px;color:white;height:30px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;border-radius:100px;}.pills.jsx-475439764{margin-left:20px;}.cover-image.jsx-475439764{width:100px;height:100px;border-radius:100px;}img.jsx-475439764{width:100%;}a.jsx-475439764{float:right;color:purple;font-size:16px;font-weight:400;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvRGVza3RvcC9oZWxsby1uZXh0L3BhZ2VzL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3RXdCLEFBR2tDLEFBSUksQUFPQSxBQUdMLEFBTWpCLEFBRWlCLFdBRmhCLENBTGlCLEFBUUEsS0FsQkQsQUFPaEIsUUFJd0IsQUFRTCxJQWxCSCxXQW9CakIsQ0FuQnVCLElBVXRCLFdBU0Esa0JBekJ1QixrQ0FPQyxvQkFDeEIsZUFQQSIsImZpbGUiOiIvVXNlcnMvbWFjL0Rlc2t0b3AvaGVsbG8tbmV4dC9wYWdlcy9pbmRleC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnO1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cidcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCBNYXJrZG93biBmcm9tICdyZWFjdC1tYXJrZG93bic7XG5pbXBvcnQgeyBSZXN0YXVyYW50IH0gZnJvbSAnLi4vZ3JhcGhxbC90eXBlcyc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5jb25zdCBBUElfVVJMID0gJ2h0dHBzOi8vaG5kdXAtYXBpLWNtcy5oZXJva3VhcHAuY29tL2dyYXBocWwnXG5pbnRlcmZhY2UgUHJvcHN7XG4gICAgdXNlckFnZW50Pzogc3RyaW5nXG5cbn1cblxuY29uc3QgZmV0Y2hlciA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wb3N0KEFQSV9VUkwse1xuICAgICAgICBxdWVyeTogYCAgICAgIFxuICAgICAgICB7XG4gICAgICAgICAgICByZXN0YXVyYW50cyB7XG4gICAgICAgICAgICAgIE5hbWVcbiAgICAgICAgICAgICAgY2F0ZWdvcmllc3tcbiAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBwaWN0dXJlIHtcbiAgICAgICAgICAgICAgICB1cmxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBEZXNjcmlwdGlvblxuICAgICAgICAgICAgfVxuICAgICAgICAgfVxuICAgIGAsXG4gICAgfSx7IGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgIH19KVxuXG4gICAgcmV0dXJuIHJlcy5kYXRhLmRhdGEucmVzdGF1cmFudHNcbn1cblxuY29uc3QgSG9tZVBhZ2U6IE5leHRQYWdlPFByb3BzPiA9ICh7IHVzZXJBZ2VudCB9KSA9PiB7XG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKCcvcmVwb3MvemVpdC9uZXh0LmpzJywgZmV0Y2hlcilcbiAgICByZXR1cm4gKFxuICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGRhdGEgJiYgZGF0YS5tYXAoKHJlc3RhdXJhbnQ6UmVzdGF1cmFudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e3Jlc3RhdXJhbnQuaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5OYW1lOiB7cmVzdGF1cmFudC5OYW1lfTwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3Jlc3RhdXJhbnQucGljdHVyZS51cmx9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb3Zlci1pbWFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvaW1nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1hcmtkb3duXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVzY2FwZUh0bWw9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZT17cmVzdGF1cmFudC5EZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyZXN0YXVyYW50LmNhdGVnb3JpZXMgJiYgcmVzdGF1cmFudC5jYXRlZ29yaWVzLm1hcChjYXRlZ29yeSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2NhdGVnb3J5LmlkfSBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjYXRlZ29yeS5uYW1lID09PSAnQ29mZmVlJyA/IFwiI2E1MmEyYVwiOiBcInB1cnBsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IGNsYXNzTmFtZT1cInBpbGxzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NhdGVnb3J5Lm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPiA8YT5HbyB0byBuZXh0IFBhZ2U8L2E+PC9MaW5rPlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA5cHggMTBweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICAucGlsbHMge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgIC5jb3Zlci1pbWFnZSB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgICAgICAgICAgICAgfSAgXG4gICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHB1cnBsZTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L0xheW91dD5cbiAgICApXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2UiXX0= */\n/*@ sourceURL=/Users/mac/Desktop/hello-next/pages/index.tsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ })

})
//# sourceMappingURL=index.js.28c24999cab02fa31b9e.hot-update.js.map