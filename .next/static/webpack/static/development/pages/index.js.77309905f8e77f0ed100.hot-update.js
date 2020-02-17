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
      className: "jsx-101063160",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, __jsx("h1", {
      className: "jsx-101063160",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, "Name: ", restaurant.Name), __jsx("img", {
      src: restaurant.picture.url,
      alt: "",
      className: "jsx-101063160" + " " + "cover-image",
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
      className: "jsx-101063160",
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
        className: "jsx-101063160" + " " + "pills",
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
  }, __jsx("span", {
    className: "jsx-101063160",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "Go to next Page")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "101063160",
    __self: this
  }, "ul.jsx-101063160{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}li.jsx-101063160{padding:9px 10px;color:white;height:30px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;border-radius:100px;}.pills.jsx-101063160{margin-left:20px;}.cover-image.jsx-101063160{width:100px;height:100px;border-radius:100px;}img.jsx-101063160{width:100%;}span.jsx-101063160{float:right;color:purple;font-size:16px;font-weight:400;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvRGVza3RvcC9oZWxsby1uZXh0L3BhZ2VzL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3RXdCLEFBR2tDLEFBSUksQUFPQSxBQUdMLEFBTWpCLEFBRWlCLFdBRmhCLENBTGlCLEFBUUEsS0FsQkQsQUFPaEIsUUFJd0IsQUFRTCxJQWxCSCxXQW1CSSxDQWxCRSxJQVV0QixXQVNtQixlQUNuQixHQTFCdUIsa0NBT0Msb0JBQ3hCLGVBUEEiLCJmaWxlIjoiL1VzZXJzL21hYy9EZXNrdG9wL2hlbGxvLW5leHQvcGFnZXMvaW5kZXgudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0JztcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgTWFya2Rvd24gZnJvbSAncmVhY3QtbWFya2Rvd24nO1xuaW1wb3J0IHsgUmVzdGF1cmFudCB9IGZyb20gJy4uL2dyYXBocWwvdHlwZXMnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuY29uc3QgQVBJX1VSTCA9ICdodHRwczovL2huZHVwLWFwaS1jbXMuaGVyb2t1YXBwLmNvbS9ncmFwaHFsJ1xuaW50ZXJmYWNlIFByb3Bze1xuICAgIHVzZXJBZ2VudD86IHN0cmluZ1xuXG59XG5cbmNvbnN0IGZldGNoZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucG9zdChBUElfVVJMLHtcbiAgICAgICAgcXVlcnk6IGAgICAgICBcbiAgICAgICAge1xuICAgICAgICAgICAgcmVzdGF1cmFudHMge1xuICAgICAgICAgICAgICBOYW1lXG4gICAgICAgICAgICAgIGNhdGVnb3JpZXN7XG4gICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICBuYW1lXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcGljdHVyZSB7XG4gICAgICAgICAgICAgICAgdXJsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgRGVzY3JpcHRpb25cbiAgICAgICAgICAgIH1cbiAgICAgICAgIH1cbiAgICBgLFxuICAgIH0seyBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICB9fSlcblxuICAgIHJldHVybiByZXMuZGF0YS5kYXRhLnJlc3RhdXJhbnRzXG59XG5cbmNvbnN0IEhvbWVQYWdlOiBOZXh0UGFnZTxQcm9wcz4gPSAoeyB1c2VyQWdlbnQgfSkgPT4ge1xuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUignL3JlcG9zL3plaXQvbmV4dC5qcycsIGZldGNoZXIpXG4gICAgcmV0dXJuIChcbiAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBkYXRhICYmIGRhdGEubWFwKChyZXN0YXVyYW50OlJlc3RhdXJhbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtyZXN0YXVyYW50LmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+TmFtZToge3Jlc3RhdXJhbnQuTmFtZX08L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtyZXN0YXVyYW50LnBpY3R1cmUudXJsfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY292ZXItaW1hZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L2ltZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNYXJrZG93blxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlc2NhcGVIdG1sPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2U9e3Jlc3RhdXJhbnQuRGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmVzdGF1cmFudC5jYXRlZ29yaWVzICYmIHJlc3RhdXJhbnQuY2F0ZWdvcmllcy5tYXAoY2F0ZWdvcnkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtjYXRlZ29yeS5pZH0gc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogY2F0ZWdvcnkubmFtZSA9PT0gJ0NvZmZlZScgPyBcIiNhNTJhMmFcIjogXCJwdXJwbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSBjbGFzc05hbWU9XCJwaWxsc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjYXRlZ29yeS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj48c3Bhbj5HbyB0byBuZXh0IFBhZ2U8L3NwYW4+PC9MaW5rPlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA5cHggMTBweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICAucGlsbHMge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgIC5jb3Zlci1pbWFnZSB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgICAgICAgICAgICAgfSAgXG4gICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHB1cnBsZTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L0xheW91dD5cbiAgICApXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2UiXX0= */\n/*@ sourceURL=/Users/mac/Desktop/hello-next/pages/index.tsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ })

})
//# sourceMappingURL=index.js.77309905f8e77f0ed100.hot-update.js.map