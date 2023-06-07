"use strict";
exports.id = 829;
exports.ids = [829];
exports.modules = {

/***/ 1810:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Form)
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(1844);
;// CONCATENATED MODULE: ./src/components/formLine.js

function FormLine({ desc , additionalInfo , formLineType , placeholderText , onTextChange  }) {
    function handleChange(e) {
        onTextChange(e.target.value);
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("p", {
                className: "text-medium text-gray-800 mt-2",
                children: desc
            }),
            /*#__PURE__*/ jsx_runtime.jsx("input", {
                type: formLineType,
                onChange: handleChange,
                className: `py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500bg-grey-150border-gray-700 text-gray-400`,
                placeholder: placeholderText,
                "aria-describedby": "hs-input-helper-text"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("p", {
                className: "text-sm text-gray-500 mt-2",
                id: "hs-input-helper-text",
                children: additionalInfo
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/data/data.js
const data = {
    forms: [
        {
            type: "signIn",
            formRows: [
                {
                    desc: "Username / Email",
                    additionalInfo: "Please use the username or email address you signed up with.",
                    formLineType: "email",
                    placeholderText: "example@gmail.com"
                },
                {
                    desc: "Password",
                    additionalInfo: "Please use the password you signed up with.",
                    formLineType: "password",
                    placeholderText: "Enter your password"
                }
            ]
        },
        {
            type: "signUp",
            formRows: [
                {
                    desc: "Username / Email",
                    additionalInfo: "Please use your email address if you would like to recieve notifications regarding your tasks.",
                    formLineType: "email",
                    placeholderText: "example@gmail.com  - or - exampleUsername"
                },
                {
                    desc: "Password",
                    additionalInfo: "Please create a password",
                    formLineType: "password",
                    placeholderText: "Enter a password"
                },
                {
                    desc: "Name",
                    additionalInfo: "Please enter your name",
                    formLineType: "text",
                    placeholderText: "Enter your name"
                },
                {
                    desc: "Age",
                    additionalInfo: "(Optional) Please enter your age",
                    formLineType: "number",
                    placeholderText: "Enter your age"
                }
            ]
        }
    ]
};

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/utils/apiCalls/users/userAPIcalls.js
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDc5YjZjMzg0NTUwM2NmNDE0OGVkMDEiLCJpYXQiOjE2ODU5NjYwNzF9.0FQ09fYPyZUUIlD-MaJvN29XkYquXhMKgV6HjqJQuqw";
const loginUser = async (email, password)=>{
    try {
        const response = await fetch(`https://localhost:3000/api/users/login`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        }).catch((error)=>console.log(error));
        alert(res.cookie.jwt);
        const responseJSON = await response.json();
        return responseJSON.token.token;
    } catch (e) {
        console.log(e);
    }
};
const signUpUser = async (name, email, password, age)=>{
    try {
        await fetch(`https://localhost:3000/api/users`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password,
                age: age
            })
        }).catch((error)=>console.log(error));
    } catch (e) {
        alert(e);
    }
};

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./src/components/form.js






function Form({ formType  }) {
    const [email, setEmail] = (0,external_react_.useState)("");
    const [password, setPassword] = (0,external_react_.useState)("");
    const [name, setName] = (0,external_react_.useState)("");
    const [age, setAge] = (0,external_react_.useState)("");
    const formData = data.forms.filter((form)=>form.type === formType)[0];
    let token = "";
    const router = (0,router_.useRouter)();
    const handleSubmit = async (e)=>{
        e.preventDefault();
        formType === "signIn" ? token = await loginUser(email, password) : token = await signUpUser(name, email, password, age);
        router.push("/");
    // sessionStorage.setItem('token', token);
    };
    const renderedForm = /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(FormLine, {
                id: formData.formRows[0].desc,
                desc: formData.formRows[0].desc,
                additionalInfo: formData.formRows[0].additionalInfo,
                formLineType: formData.formRows[0].formLineType,
                placeholderText: formData.formRows[0].placeholderText,
                onTextChange: setEmail
            }),
            /*#__PURE__*/ jsx_runtime.jsx("br", {}),
            /*#__PURE__*/ jsx_runtime.jsx(FormLine, {
                id: formData.formRows[1].desc,
                desc: formData.formRows[1].desc,
                additionalInfo: formData.formRows[1].additionalInfo,
                formLineType: formData.formRows[1].formLineType,
                placeholderText: formData.formRows[1].placeholderText,
                onTextChange: setPassword
            }),
            /*#__PURE__*/ jsx_runtime.jsx("br", {}),
            formType === "signUp" && /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(FormLine, {
                        id: formData.formRows[2].desc,
                        desc: formData.formRows[2].desc,
                        additionalInfo: formData.formRows[2].additionalInfo,
                        formLineType: formData.formRows[2].formLineType,
                        placeholderText: formData.formRows[2].placeholderText,
                        onTextChange: setName
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                    /*#__PURE__*/ jsx_runtime.jsx(FormLine, {
                        id: formData.formRows[3].desc,
                        desc: formData.formRows[3].desc,
                        additionalInfo: formData.formRows[3].additionalInfo,
                        formLineType: formData.formRows[3].formLineType,
                        placeholderText: formData.formRows[3].placeholderText,
                        onTextChange: setAge
                    })
                ]
            })
        ]
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("main", {
        className: "p-6 max-h-auto  mx-auto sm:max-w-3xl sm:w-3/4 md:w-1/2 bg-orange-300  rounded-3xl",
        children: [
            renderedForm,
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "flex justify-center",
                children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                    className: " bg-green-700 hover:bg-grey-400 text-white font-bold py-2 px-4 mx-4 rounded-3xl mt-2",
                    onClick: handleSubmit,
                    children: formType === "signIn" ? "Sign In" : "Sign Up"
                })
            })
        ]
    });
}


/***/ }),

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


/***/ })

};
;