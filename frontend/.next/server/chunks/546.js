"use strict";
exports.id = 546;
exports.ids = [546];
exports.modules = {

/***/ 6860:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ PageContainer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1844);

function PageContainer({ children  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
        className: " bg-green-200 h-auto w-auto  flex justify-center py-6 sm:px-6 rounded-3xl sm:m-2 md:m-5",
        children: children
    });
}


/***/ }),

/***/ 7018:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ TaskForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1844);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_apiCalls_tasks_tasksApiCalls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2376);





function TaskForm({ taskData , formEdit  }) {
    const [completed, setCompleted] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(taskData.completed || false);
    const [due, setDue] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(taskData.due || "");
    const [taskDescription, setDescription] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(taskData.description || "");
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    async function handleEdit(e) {
        e.preventDefault();
        (0,_utils_apiCalls_tasks_tasksApiCalls__WEBPACK_IMPORTED_MODULE_4__/* .editTask */ .eT)(taskData._id, taskDescription, completed, due).then(alert("Task Updated"));
    }
    async function handleDelete(e) {
        e.preventDefault();
        await (0,_utils_apiCalls_tasks_tasksApiCalls__WEBPACK_IMPORTED_MODULE_4__/* .deleteTask */ ._5)(taskData._id).then(alert("Task Deleted"));
        router.push(`/tasks/allTasks/?reload=${Date.now()}`);
    }
    async function handleSave(e) {
        e.preventDefault();
        await (0,_utils_apiCalls_tasks_tasksApiCalls__WEBPACK_IMPORTED_MODULE_4__/* .saveTask */ .F9)(taskDescription, due).then(alert("Task Saved"));
        router.push(`/tasks/allTasks/?reload=${Date.now()}`);
    }
    if (taskData.due) {
        var dueDataHTMLLine = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "text-medium text-gray-800 mt-2",
                    children: "Task Due: "
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "text-sm text-gray-500",
                    children: taskData.due
                })
            ]
        });
    }
    if (formEdit === true) {
        // the following sections are needed if the form is for editing tasks
        var taskDetailsSection = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: " hover:bg-orange-400 border-orange-400 rounded-3xl p-3",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "text-lg text-center",
                    children: "Task Details"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "text-medium text-gray-800 mt-2",
                    children: "Task Created: "
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "text-sm text-gray-500",
                    children: taskData.createdAt
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "text-medium text-gray-800 mt-2",
                    children: "Task Updated: "
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "text-sm text-gray-500",
                    children: taskData.updatedAt
                }),
                dueDataHTMLLine
            ]
        });
        var taskCompletedSection = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "text-medium text-gray-800 mt-2",
                    children: "Completed"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    type: "checkbox",
                    name: "completed",
                    defaultChecked: taskData.completed,
                    onChange: (e)=>setCompleted(e.target.checked),
                    className: "py-3 px-4 block w-auto  border-gray-800 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 bg-grey-150text-gray-400",
                    placeholder: `${taskData.due}`,
                    "aria-describedby": "hs-input-helper-text"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "text-sm text-gray-500 mt-2",
                    id: "hs-input-helper-text",
                    children: "'Please edit Task Completed Status if you desire'"
                })
            ]
        });
        var buttonsSection = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex justify-center items-center",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    className: " bg-green-700 hover:bg-grey-400 text-white font-bold py-2 px-4 mx-4 rounded-3xl mt-2",
                    onClick: handleEdit,
                    children: "Update"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    className: " bg-green-700 hover:bg-grey-400 text-white font-bold py-2 px-4 mx-4 rounded-3xl mt-2",
                    onClick: handleDelete,
                    children: "Delete"
                })
            ]
        });
        var formTitle = "Edit Task";
        var taskDescriptonMessage = "Please edit the Task Description if you desire";
        var taskDueDateMessage = "Please edit Task Due Date & Time if you desire";
    } else {
        // the following sections are needed if the form is for creating tasks
        var formTitle = "New Task";
        var taskDescriptonMessage = "Please enter your Task Description.";
        var taskDueDateMessage = "Please enter a Due Date & Time if your task requires one. These can be used to recieve email alerts about the task.";
        var buttonsSection = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "flex justify-center items-center",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                className: " bg-green-700 hover:bg-grey-400 text-white font-bold py-2 px-4 mx-4 rounded-3xl mt-2",
                onClick: handleSave,
                children: "Save"
            })
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
        className: "p-6 max-h-120  mx-auto sm:max-w-3xl sm:w-3/4 md:w-1/2 bg-orange-300  rounded-3xl",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: formTitle
                })
            }),
            taskDetailsSection,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: " hover:bg-orange-400 border-orange-400 rounded-3xl p-3",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-lg text-center",
                            children: formTitle
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-medium text-gray-800 mt-2",
                            children: "Task Description"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                            type: "text",
                            name: "description",
                            className: "py-3 px-4 block w-full border-gray-200 rounded-md   text-sm focus:border-blue-500 focus:ring-blue-500bg-grey-150border-gray-700 text-gray-400",
                            onChange: (e)=>setDescription(e.target.value),
                            value: taskDescription,
                            "aria-describedby": "hs-input-helper-text"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-sm text-gray-500 mt-2",
                            id: "hs-input-helper-text",
                            children: taskDescriptonMessage
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-medium text-gray-800 mt-2",
                            children: "Due Date"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            type: "datetime-local",
                            name: "due",
                            placeholder: `${taskData.due}`,
                            defaultValue: `${taskData.due}`,
                            onChange: (e)=>setDue(e.target.value),
                            "aria-describedby": "hs-input-helper-text",
                            className: "py-3 px-4 block w-full  border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500bg-grey-150border-gray-700 text-gray-400"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-sm text-gray-500 mt-2",
                            id: "hs-input-helper-text",
                            children: taskDueDateMessage
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                        taskCompletedSection,
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                        buttonsSection
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {})
        ]
    });
}


/***/ })

};
;