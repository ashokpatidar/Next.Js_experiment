module.exports =
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./component/Layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__NavBar__ = __webpack_require__("./component/NavBar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_head__);
var _jsxFileName = '/Users/ashokpatidar/Documents/workspace/FrontEndDevelopment/nextJS-starter/component/Layout.js';




var Layout = function Layout(props) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 6
            }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_next_head___default.a,
            {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 7
                }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'title',
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 8
                    }
                },
                'Stock Price'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { rel: 'stylesheet', href: 'https://bootswatch.com/4/cerulean/bootstrap.min.css', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 9
                }
            })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__NavBar__["a" /* default */], {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 11
            }
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'container', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 12
                }
            },
            props.children
        )
    );
};

/* harmony default export */ __webpack_exports__["a"] = (Layout);

/***/ }),

/***/ "./component/NavBar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
var _jsxFileName = "/Users/ashokpatidar/Documents/workspace/FrontEndDevelopment/nextJS-starter/component/NavBar.js";


var NavBar = function NavBar() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "div",
        {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 3
            }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "nav",
            { className: "navbar navbar-expand-lg navbar-dark bg-dark", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 4
                }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", { className: "navbar-brand", href: "#", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 5
                }
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "button",
                { className: "navbar-toggler", type: "button", "data-toggle": "collapse", "data-target": "#navbarColor03", "aria-controls": "navbarColor03", "aria-expanded": "false", "aria-label": "Toggle navigation", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 6
                    }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", { className: "navbar-toggler-icon", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 7
                    }
                })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "div",
                { className: "collapse navbar-collapse", id: "navbarColor03", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 10
                    }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "ul",
                    { className: "navbar-nav mr-auto", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 11
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "li",
                        { className: "nav-item active", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 12
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
                            { prefetch: true, href: "/", __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 13
                                }
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                "a",
                                { className: "nav-link", __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 14
                                    }
                                },
                                "Home ",
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    "span",
                                    { className: "sr-only", __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 14
                                        }
                                    },
                                    "(current)"
                                )
                            )
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "li",
                        { className: "nav-item", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 17
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
                            { prefetch: true, href: "/about", __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 18
                                }
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                "a",
                                { className: "nav-link", __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 19
                                    }
                                },
                                "About"
                            )
                        )
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "form",
                    { className: "form-inline my-2 my-lg-0", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 24
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { className: "form-control mr-sm-2", type: "text", placeholder: "Search", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 25
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "button",
                        { className: "btn btn-secondary my-2 my-sm-0", type: "submit", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 26
                            }
                        },
                        "Search"
                    )
                )
            )
        )
    );
};

/* harmony default export */ __webpack_exports__["a"] = (NavBar);

/***/ }),

/***/ "./component/Prices.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = '/Users/ashokpatidar/Documents/workspace/FrontEndDevelopment/nextJS-starter/component/Prices.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();




function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Prices = function (_React$Component) {
    _inherits(Prices, _React$Component);

    function Prices() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Prices);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Prices.__proto__ || Object.getPrototypeOf(Prices)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            currency: 'USD'
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Prices, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var List = void 0;
            if (this.state.currency === 'USD') {
                List = __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'li',
                    { className: 'list-group-item', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 8
                        }
                    },
                    'stock price for exchange ',
                    this.props.bpi.USD.description,
                    ':',
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'span',
                        { className: 'badge badge-primary', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 10
                            }
                        },
                        ' ',
                        this.props.bpi.USD.code
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'strong',
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 11
                            }
                        },
                        this.props.bpi.USD.rate
                    )
                );
            }

            if (this.state.currency === 'GBP') {
                List = __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'li',
                    { className: 'list-group-item', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 16
                        }
                    },
                    'stock price for exchange ',
                    this.props.bpi.GBP.description,
                    ':',
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'span',
                        { className: 'badge badge-primary', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 18
                            }
                        },
                        ' ',
                        this.props.bpi.GBP.code
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'strong',
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 19
                            }
                        },
                        this.props.bpi.GBP.rate
                    )
                );
            }

            if (this.state.currency === 'EUR') {
                List = __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'li',
                    { className: 'list-group-item', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 24
                        }
                    },
                    'stock price for exchange ',
                    this.props.bpi.EUR.description,
                    ':',
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'span',
                        { className: 'badge badge-primary', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 26
                            }
                        },
                        ' ',
                        this.props.bpi.EUR.code
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'strong',
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 27
                            }
                        },
                        this.props.bpi.EUR.rate
                    )
                );
            }

            return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                {
                    className: 'jsx-1508141796',
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 33
                    }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'ul',
                    {
                        className: 'jsx-1508141796' + ' ' + 'list-group',
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 34
                        }
                    },
                    List
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('br', {
                    className: 'jsx-1508141796',
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 42
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'select',
                    { onChange: function onChange(e) {
                            return _this2.setState({ currency: e.target.value });
                        }, className: 'jsx-1508141796' + ' ' + 'form-control',
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 43
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'option',
                        { value: 'USD', className: 'jsx-1508141796',
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 44
                            }
                        },
                        'USD'
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'option',
                        { value: 'GBP', className: 'jsx-1508141796',
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 45
                            }
                        },
                        'GBP'
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'option',
                        { value: 'EUR', className: 'jsx-1508141796',
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 46
                            }
                        },
                        'EUR'
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
                    styleId: '1508141796',
                    css: 'body{background:black;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudC9QcmljZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0NtQyxBQUcwQixpQkFDbkIiLCJmaWxlIjoiY29tcG9uZW50L1ByaWNlcy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYXNob2twYXRpZGFyL0RvY3VtZW50cy93b3Jrc3BhY2UvRnJvbnRFbmREZXZlbG9wbWVudC9uZXh0SlMtc3RhcnRlciIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFByaWNlcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgY3VycmVuY3k6J1VTRCdcbiAgICB9XG4gICAgcmVuZGVyKCl7XG4gICAgICAgIGxldCBMaXN0O1xuICAgICAgICBpZih0aGlzLnN0YXRlLmN1cnJlbmN5ID09PSAnVVNEJyl7XG4gICAgICAgICAgICBMaXN0ID0gPGxpIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgc3RvY2sgcHJpY2UgZm9yIGV4Y2hhbmdlIHt0aGlzLnByb3BzLmJwaS5VU0QuZGVzY3JpcHRpb259OlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2UgYmFkZ2UtcHJpbWFyeVwiPiB7dGhpcy5wcm9wcy5icGkuVVNELmNvZGV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz57dGhpcy5wcm9wcy5icGkuVVNELnJhdGV9PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYodGhpcy5zdGF0ZS5jdXJyZW5jeSA9PT0gJ0dCUCcpe1xuICAgICAgICAgICAgTGlzdCA9IDxsaSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b2NrIHByaWNlIGZvciBleGNoYW5nZSB7dGhpcy5wcm9wcy5icGkuR0JQLmRlc2NyaXB0aW9ufTpcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlIGJhZGdlLXByaW1hcnlcIj4ge3RoaXMucHJvcHMuYnBpLkdCUC5jb2RlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+e3RoaXMucHJvcHMuYnBpLkdCUC5yYXRlfTwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHRoaXMuc3RhdGUuY3VycmVuY3kgPT09ICdFVVInKXtcbiAgICAgICAgICAgIExpc3QgPSA8bGkgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9jayBwcmljZSBmb3IgZXhjaGFuZ2Uge3RoaXMucHJvcHMuYnBpLkVVUi5kZXNjcmlwdGlvbn06XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiYWRnZSBiYWRnZS1wcmltYXJ5XCI+IHt0aGlzLnByb3BzLmJwaS5FVVIuY29kZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPnt0aGlzLnByb3BzLmJwaS5FVVIucmF0ZX08L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgPC9saT47XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4oXG5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgey8qIDxsaSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b2NrIHByaWNlIGZvciBleGNoYW5nZSB7dGhpcy5wcm9wcy5icGkuVVNELmRlc2NyaXB0aW9ufTpcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlIGJhZGdlLXByaW1hcnlcIj4ge3RoaXMucHJvcHMuYnBpLlVTRC5jb2RlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+e3RoaXMucHJvcHMuYnBpLlVTRC5yYXRlfTwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPiAqL31cbiAgICAgICAgICAgICAgICAgICAge0xpc3R9XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgIDxzZWxlY3Qgb25DaGFuZ2U9e2UgPT4gdGhpcy5zZXRTdGF0ZSh7Y3VycmVuY3k6ZS50YXJnZXQudmFsdWV9KX0gY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCI+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJVU0RcIj5VU0Q8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkdCUFwiPkdCUDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiRVVSXCI+RVVSPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcbiAgICAgIGJvZHkge1xuICAgICAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJpY2VzOyJdfQ== */\n/*@ sourceURL=component/Prices.js */'
                })
            );
        }
    }]);

    return Prices;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Prices);

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_unfetch__ = __webpack_require__("isomorphic-unfetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_unfetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__component_Layout__ = __webpack_require__("./component/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__component_Prices__ = __webpack_require__("./component/Prices.js");

var _jsxFileName = '/Users/ashokpatidar/Documents/workspace/FrontEndDevelopment/nextJS-starter/pages/index.js';


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }




var Index = function Index(props) {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3__component_Layout__["a" /* default */],
        {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 5
            }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 6
                }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'h1',
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 8
                    }
                },
                'Welcome To Stock Price'
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'p',
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 9
                    }
                },
                'Check current rates'
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__component_Prices__["a" /* default */], { bpi: props.bpi, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 10
                }
            })
        )
    );
};

Index.getInitialProps = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
    var result, data;
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _context.next = 2;
                    return __WEBPACK_IMPORTED_MODULE_2_isomorphic_unfetch___default()('https://api.coindesk.com/v1/bpi/currentprice.json');

                case 2:
                    result = _context.sent;
                    _context.next = 5;
                    return result.json();

                case 5:
                    data = _context.sent;
                    return _context.abrupt('return', {
                        bpi: data.bpi
                    });

                case 7:
                case 'end':
                    return _context.stop();
            }
        }
    }, _callee, this);
}));

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "babel-runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),

/***/ "isomorphic-unfetch":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map