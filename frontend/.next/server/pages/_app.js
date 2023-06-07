(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 2940:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(1844);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);
// EXTERNAL MODULE: ./src/styles/globals.css
var globals = __webpack_require__(108);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/navbar.js


function Navbar({ isLoggedIn  }) {
    return /*#__PURE__*/ jsx_runtime.jsx("header", {
        className: "flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full text-sm py-4 bg-gray-700",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("nav", {
            className: "max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between",
            "aria-label": "Global",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                            className: "flex-none text-xl font-semibold text-white",
                            href: "/",
                            children: "Task Manager"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "sm:hidden",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                type: "button",
                                className: "hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md font-medium shadow-sm align-middle focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-blue-600 transition-all text-sm bg-slate-900 hover:bg-slate-800 border-gray-700 text-gray-400 hover:text-white focus:ring-offset-gray-800",
                                "data-hs-collapse": "#navbar-with-collapse",
                                "aria-controls": "navbar-with-collapse",
                                "aria-label": "Toggle navigation",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                        className: "hs-collapse-open:hidden w-4 h-4",
                                        width: "16",
                                        height: "16",
                                        fill: "currentColor",
                                        viewBox: "0 0 16 16",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                            fillRule: "evenodd",
                                            d: "M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                        className: "hs-collapse-open:block hidden w-4 h-4",
                                        width: "16",
                                        height: "16",
                                        fill: "currentColor",
                                        viewBox: "0 0 16 16",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                            d: "M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    id: "navbar-with-collapse",
                    className: "hidden basis-full grow sm:block",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                href: "/tasks/newTask",
                                children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                                    className: "bg-green-700 hover:bg-grey-400 text-white font-bold py-2 px-3 mr-1  rounded-3xl",
                                    children: "New Task"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                className: "font-bold text-blue-500",
                                href: "/tasks/allTasks",
                                "aria-current": "page",
                                children: "Tasks"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                className: "font-medium text-gray-200 hover:text-gray-500",
                                href: "/account",
                                children: "Account"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                className: "font-medium text-gray-200 hover:text-gray-500",
                                href: "/signup",
                                children: "Sign Up"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                className: "font-medium text-gray-200 hover:text-gray-500",
                                href: "/signin",
                                children: "Sign In"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                className: "font-medium text-gray-200 hover:text-gray-500",
                                href: "/logout",
                                children: "Logout"
                            })
                        ]
                    })
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./src/pages/_app.js




// import ('preline')
dynamic_default()(null, {
    loadableGenerated: {
        modules: [
            "_app.js -> " + "preline"
        ]
    },
    ssr: false
});
function App({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "bg-gray-300 h-screen",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(Navbar, {}),
            /*#__PURE__*/ jsx_runtime.jsx(Component, {
                ...pageProps
            })
        ]
    });
}


/***/ }),

/***/ 108:
/***/ (() => {



/***/ }),

/***/ 8038:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [844,664,152], () => (__webpack_exec__(2940)));
module.exports = __webpack_exports__;

})();