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
      className: "jsx-623792288",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, __jsx("h1", {
      className: "jsx-623792288",
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
      className: "jsx-623792288",
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
      className: "jsx-623792288",
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
        className: "jsx-623792288",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, category.name);
    })));
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "623792288",
    __self: this
  }, "li.jsx-623792288{padding:0px 10px;color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvRGVza3RvcC9oZWxsby1uZXh0L3BhZ2VzL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1RXdCLEFBR3NDLGlCQUNMLFlBQ2hCIiwiZmlsZSI6Ii9Vc2Vycy9tYWMvRGVza3RvcC9oZWxsby1uZXh0L3BhZ2VzL2luZGV4LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcbmltcG9ydCB7IExheW91dCB9IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJ1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IE1hcmtkb3duIGZyb20gJ3JlYWN0LW1hcmtkb3duJztcbmltcG9ydCB7IFJlc3RhdXJhbnQgfSBmcm9tICcuLi9ncmFwaHFsL3R5cGVzJztcblxuY29uc3QgQVBJX1VSTCA9ICdodHRwczovL2huZHVwLWFwaS1jbXMuaGVyb2t1YXBwLmNvbS9ncmFwaHFsJ1xuaW50ZXJmYWNlIFByb3Bze1xuICAgIHVzZXJBZ2VudD86IHN0cmluZ1xuXG59XG5cbmNvbnN0IGZldGNoZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucG9zdChBUElfVVJMLHtcbiAgICAgICAgcXVlcnk6IGAgICAgICBcbiAgICAgICAge1xuICAgICAgICAgICAgcmVzdGF1cmFudHMge1xuICAgICAgICAgICAgICBOYW1lXG4gICAgICAgICAgICAgIGNhdGVnb3JpZXN7XG4gICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICBuYW1lXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcGljdHVyZSB7XG4gICAgICAgICAgICAgICAgdXJsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgRGVzY3JpcHRpb25cbiAgICAgICAgICAgIH1cbiAgICAgICAgIH1cbiAgICBgLFxuICAgIH0seyBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICB9fSlcblxuICAgIHJldHVybiByZXMuZGF0YS5kYXRhLnJlc3RhdXJhbnRzXG59XG5cbmNvbnN0IEhvbWVQYWdlOiBOZXh0UGFnZTxQcm9wcz4gPSAoeyB1c2VyQWdlbnQgfSkgPT4ge1xuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUignL3JlcG9zL3plaXQvbmV4dC5qcycsIGZldGNoZXIpXG4gICAgY29uc29sZS5sb2coZGF0YSlcbiAgICByZXR1cm4gKFxuICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGRhdGEgJiYgZGF0YS5tYXAoKHJlc3RhdXJhbnQ6UmVzdGF1cmFudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e3Jlc3RhdXJhbnQuaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5OYW1lOiB7cmVzdGF1cmFudC5OYW1lfTwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3Jlc3RhdXJhbnQucGljdHVyZS51cmx9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17NTB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17NTB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvaW1nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1hcmtkb3duXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVzY2FwZUh0bWw9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZT17cmVzdGF1cmFudC5EZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Jlc3RhdXJhbnQuY2F0ZWdvcmllcyAmJiByZXN0YXVyYW50LmNhdGVnb3JpZXMubWFwKGNhdGVnb3J5ID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17Y2F0ZWdvcnkuaWR9IHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNhdGVnb3J5Lm5hbWUgPT09ICdDb2ZmZWUnID8gXCIjYTUyYTJhXCI6IFwicHVycGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NhdGVnb3J5Lm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMHB4IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICB9ICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L0xheW91dD5cbiAgICApXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2UiXX0= */\n/*@ sourceURL=/Users/mac/Desktop/hello-next/pages/index.tsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ })

})
//# sourceMappingURL=index.js.0c2083b53a240459c63e.hot-update.js.map