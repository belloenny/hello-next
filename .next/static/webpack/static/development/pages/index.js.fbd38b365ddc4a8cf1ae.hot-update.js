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

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["Layout"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, data && data.map(function (restaurant) {
    return __jsx("div", {
      key: restaurant.id,
      className: "jsx-1243452131",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, __jsx("h1", {
      className: "jsx-1243452131",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, "Name: ", restaurant.Name), __jsx("img", {
      src: restaurant.picture.url,
      alt: "",
      width: 50,
      height: 50,
      className: "jsx-1243452131",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
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
      className: "jsx-1243452131",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, restaurant.categories && restaurant.categories.map(function (category) {
      return __jsx("li", {
        key: category.id,
        style: {
          backgroundColor: category.name === 'Coffee' ? "#a52a2a" : "purple"
        },
        className: "jsx-1243452131",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, category.name);
    })));
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1243452131",
    __self: this
  }, "ul.jsx-1243452131{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}li.jsx-1243452131{padding:0px 10px;color:white;height:30px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;border-radius:100px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvRGVza3RvcC9oZWxsby1uZXh0L3BhZ2VzL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzRXdCLEFBR2tDLEFBSUksaUJBQ0wsWUFDQSxZQUNNLGlDQU5DLGtDQU9DLG9CQUN4QixlQVBBIiwiZmlsZSI6Ii9Vc2Vycy9tYWMvRGVza3RvcC9oZWxsby1uZXh0L3BhZ2VzL2luZGV4LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcbmltcG9ydCB7IExheW91dCB9IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJ1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IE1hcmtkb3duIGZyb20gJ3JlYWN0LW1hcmtkb3duJztcbmltcG9ydCB7IFJlc3RhdXJhbnQgfSBmcm9tICcuLi9ncmFwaHFsL3R5cGVzJztcblxuY29uc3QgQVBJX1VSTCA9ICdodHRwczovL2huZHVwLWFwaS1jbXMuaGVyb2t1YXBwLmNvbS9ncmFwaHFsJ1xuaW50ZXJmYWNlIFByb3Bze1xuICAgIHVzZXJBZ2VudD86IHN0cmluZ1xuXG59XG5cbmNvbnN0IGZldGNoZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucG9zdChBUElfVVJMLHtcbiAgICAgICAgcXVlcnk6IGAgICAgICBcbiAgICAgICAge1xuICAgICAgICAgICAgcmVzdGF1cmFudHMge1xuICAgICAgICAgICAgICBOYW1lXG4gICAgICAgICAgICAgIGNhdGVnb3JpZXN7XG4gICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICBuYW1lXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcGljdHVyZSB7XG4gICAgICAgICAgICAgICAgdXJsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgRGVzY3JpcHRpb25cbiAgICAgICAgICAgIH1cbiAgICAgICAgIH1cbiAgICBgLFxuICAgIH0seyBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICB9fSlcblxuICAgIHJldHVybiByZXMuZGF0YS5kYXRhLnJlc3RhdXJhbnRzXG59XG5cbmNvbnN0IEhvbWVQYWdlOiBOZXh0UGFnZTxQcm9wcz4gPSAoeyB1c2VyQWdlbnQgfSkgPT4ge1xuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUignL3JlcG9zL3plaXQvbmV4dC5qcycsIGZldGNoZXIpXG4gICAgcmV0dXJuIChcbiAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBkYXRhICYmIGRhdGEubWFwKChyZXN0YXVyYW50OlJlc3RhdXJhbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtyZXN0YXVyYW50LmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+TmFtZToge3Jlc3RhdXJhbnQuTmFtZX08L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtyZXN0YXVyYW50LnBpY3R1cmUudXJsfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezUwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezUwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L2ltZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNYXJrZG93blxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlc2NhcGVIdG1sPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2U9e3Jlc3RhdXJhbnQuRGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyZXN0YXVyYW50LmNhdGVnb3JpZXMgJiYgcmVzdGF1cmFudC5jYXRlZ29yaWVzLm1hcChjYXRlZ29yeSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2NhdGVnb3J5LmlkfSBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjYXRlZ29yeS5uYW1lID09PSAnQ29mZmVlJyA/IFwiI2E1MmEyYVwiOiBcInB1cnBsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjYXRlZ29yeS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICB1bCB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMHB4IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgICAgICAgICAgICAgIH0gICAgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvTGF5b3V0PlxuICAgIClcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZSJdfQ== */\n/*@ sourceURL=/Users/mac/Desktop/hello-next/pages/index.tsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ })

})
//# sourceMappingURL=index.js.fbd38b365ddc4a8cf1ae.hot-update.js.map