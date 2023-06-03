const userEmail = "ey.purvor@gmail.com";
const userPAssword = "$2b$08$GbayOyMZ.u15uqWlTiMb3ukEvXCSipDz2cfttQ6ugRriUeqQNEiQq";
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDc5YjZjMzg0NTUwM2NmNDE0OGVkMDEiLCJpYXQiOjE2ODU2OTgyODV9.46iI44wTsGmyxgfcmIluAyMZETqu6NyWFo4yImSPC9A";
// const token = sessionStorage.getItem("token");

export const getAllTasks = async () => {
    const response = await fetch("http://localhost:3000/tasks", {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }).catch((error) => console.log(error));
    const allTasks = await response.json();
    return allTasks;
};

export const getTask = async (_id) => {
    const response = await fetch(`http://localhost:3000/tasks/${_id}`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
    }).catch((error) => console.log(error));
    const task = await response.json();
    return task;
};  

export const deleteTask = async (_id) => {
    await fetch(`http://localhost:3000/tasks/${_id}`, {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }).catch((error) => alert(error))
}

export const editTask = async (_id, taskDescription, completed, due) => {
    await fetch(`http://localhost:3000/tasks/${_id}`, {
            method: "PATCH",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                description: taskDescription,
                completed: completed,
                due: due,
            }),
        }).catch((error) => alert(error));
}

export const saveTask = async (taskDescription, due) => {
    await fetch("http://localhost:3000/tasks", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            description: taskDescription,
            due: due,
        })
    }).catch((error) => alert(error));
}