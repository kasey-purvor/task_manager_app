"use strict";
(() => {
var exports = {};
exports.id = 484;
exports.ids = [484];
exports.modules = {

/***/ 8335:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ TaskDetailsPage),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(1844);
// EXTERNAL MODULE: ./src/utils/apiCalls/tasks/tasksApiCalls.js
var tasksApiCalls = __webpack_require__(2376);
;// CONCATENATED MODULE: ./src/utils/functions/tasksFunctions.js

const getAllTaskIds = async ()=>{
    const allTasks = await (0,tasksApiCalls/* getAllTasks */.km)();
    return allTasks.map((task)=>{
        return {
            params: {
                id: task._id.toString()
            }
        };
    });
};

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/taskForm.js
var taskForm = __webpack_require__(7018);
// EXTERNAL MODULE: ./src/components/pageContainer.js
var pageContainer = __webpack_require__(6860);
;// CONCATENATED MODULE: ./src/pages/tasks/[id].js






async function getStaticPaths() {
    const allTaskIds = await getAllTaskIds();
    return {
        paths: allTaskIds,
        fallback: false
    };
}
async function getStaticProps({ params  }) {
    const taskData = await (0,tasksApiCalls/* getTask */._X)(params.id);
    return {
        props: {
            taskData
        }
    };
}
function TaskDetailsPage({ taskData  }) {
    return /*#__PURE__*/ jsx_runtime.jsx(pageContainer/* default */.Z, {
        children: /*#__PURE__*/ jsx_runtime.jsx(taskForm/* default */.Z, {
            taskData: taskData,
            formEdit: true
        })
    });
}


/***/ }),

/***/ 8038:
/***/ ((module) => {

module.exports = require("next/dist/compiled/react");

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
var __webpack_exports__ = __webpack_require__.X(0, [844,376,546], () => (__webpack_exec__(8335)));
module.exports = __webpack_exports__;

})();