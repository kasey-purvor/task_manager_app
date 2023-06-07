"use strict";
(() => {
var exports = {};
exports.id = 43;
exports.ids = [43];
exports.modules = {

/***/ 4677:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ AllTasks),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(1844);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/utils/apiCalls/tasks/tasksApiCalls.js
var tasksApiCalls = __webpack_require__(2376);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./src/components/task.js




function Task({ due , description , owner , createdAt , updatedAt , completed , id  }) {
    const router = (0,router_.useRouter)();
    const handleTaskDeleteButton = (e)=>{
        e.preventDefault;
        (0,tasksApiCalls/* deleteTask */._5)(id);
        router.push(`/tasks/allTasks/?reload=${Date.now()}`);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("tr", {
        className: "border-solid border-b border-gray-400 hover:bg-green-100",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("td", {
                className: "px-6 py-4 whitespace-nowrap text-sm text-gray-800",
                children: due
            }),
            /*#__PURE__*/ jsx_runtime.jsx("td", {
                className: "px-6 py-4 whitespace-nowrap text-sm  text-gray-800 max-w-[500px] overflow-hidden truncate",
                children: description
            }),
            /*#__PURE__*/ jsx_runtime.jsx("td", {
                className: "px-6 py-4 whitespace-nowrap text-sm text-gray-800",
                children: `${completed}`
            }),
            /*#__PURE__*/ jsx_runtime.jsx("td", {
                className: "px-6 py-4 whitespace-nowrap text-sm text-gray-800",
                children: createdAt
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("td", {
                className: "px-6 py-4 whitespace-nowrap text-center text-sm max-w-sm font-medium",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                        href: `/tasks/${id}`,
                        children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                            className: " bg-green-700 hover:bg-grey-400 text-white font-small py-2 px-3 mr-1  rounded-3xl ",
                            children: "Edit"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("button", {
                        className: " bg-green-700 hover:bg-grey-400 text-white font-small py-2 px-3 ml-1 rounded-3xl",
                        onClick: handleTaskDeleteButton,
                        children: "Delete"
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/taskList.js


function TaskList({ allTasks  }) {
    const renderedTasks = allTasks.map((task)=>{
        return /*#__PURE__*/ jsx_runtime.jsx(Task, {
            due: task.due,
            description: task.description,
            completed: task.completed,
            createdAt: task.createdAt,
            id: task._id
        }, task._id);
    });
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "flex flex-col",
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "-m-1.5 overflow-x-auto",
            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "p-1.5 min-w-full inline-block align-middle",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "border rounded-lg overflow-hidden border-gray-700",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("table", {
                        className: "min-w-full divide-y divide-gray-700 overflow-x-auto",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("thead", {
                                className: "bg-orange-300",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("tr", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("th", {
                                            scope: "col",
                                            className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase",
                                            children: "Due"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("th", {
                                            scope: "col",
                                            className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase",
                                            children: "Description"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("th", {
                                            scope: "col",
                                            className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase",
                                            children: "Completed"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("th", {
                                            scope: "col",
                                            className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase",
                                            children: "Created"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("th", {
                                            scope: "col",
                                            className: "px-6 py-3 text-center   text-xs font-medium text-gray-500 uppercase",
                                            children: "Action"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("tbody", {
                                className: "divide-y  bg-green-200",
                                children: renderedTasks
                            })
                        ]
                    })
                })
            })
        })
    });
}

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./src/pages/tasks/allTasks.js




async function getServerSideProps() {
    const allTasks = await (0,tasksApiCalls/* getAllTasks */.km)();
    return {
        props: {
            allTasks
        }
    };
}
function AllTasks({ allTasks  }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime.jsx("title", {
                    children: "All Tasks"
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx(TaskList, {
                allTasks: allTasks
            })
        ]
    });
}


/***/ }),

/***/ 8038:
/***/ ((module) => {

module.exports = require("next/dist/compiled/react");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [844,664,376], () => (__webpack_exec__(4677)));
module.exports = __webpack_exports__;

})();