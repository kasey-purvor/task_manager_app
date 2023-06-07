"use strict";
exports.id = 376;
exports.ids = [376];
exports.modules = {

/***/ 2376:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F9": () => (/* binding */ saveTask),
/* harmony export */   "_5": () => (/* binding */ deleteTask),
/* harmony export */   "_X": () => (/* binding */ getTask),
/* harmony export */   "eT": () => (/* binding */ editTask),
/* harmony export */   "km": () => (/* binding */ getAllTasks)
/* harmony export */ });
const userEmail = "ey.purvor@gmail.com";
const userPAssword = "$2b$08$GbayOyMZ.u15uqWlTiMb3ukEvXCSipDz2cfttQ6ugRriUeqQNEiQq";
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDc5YjZjMzg0NTUwM2NmNDE0OGVkMDEiLCJpYXQiOjE2ODU5NjYwNzF9.0FQ09fYPyZUUIlD-MaJvN29XkYquXhMKgV6HjqJQuqw";
// const token = sessionStorage.getItem("token");
const getAllTasks = async ()=>{
    const response = await fetch("https://localhost:3000/api/tasks", {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).catch((error)=>console.log(error));
    const allTasks = await response.json();
    return allTasks;
};
const getTask = async (_id)=>{
    const response = await fetch(`https://localhost:3000/api/tasks/${_id}`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).catch((error)=>console.log(error));
    const task = await response.json();
    return task;
};
const deleteTask = async (_id)=>{
    await fetch(`https://localhost:3000/api/tasks/${_id}`, {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).catch((error)=>alert(error));
};
const editTask = async (_id, taskDescription, completed, due)=>{
    await fetch(`https://localhost:3000/api/tasks/${_id}`, {
        method: "PATCH",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            description: taskDescription,
            completed: completed,
            due: due
        })
    }).catch((error)=>alert(error));
};
const saveTask = async (taskDescription, due)=>{
    await fetch("https://localhost:3000/api/tasks", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            description: taskDescription,
            due: due
        })
    }).catch((error)=>alert(error));
};


/***/ })

};
;