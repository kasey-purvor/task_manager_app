var token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNlYTM5NjA0MTc0MzgzMTU1NzYyYzkiLCJpYXQiOjE2ODE4MjY3MTB9.L4XPH2hE-i_alab8ThNQIu3yNY9tSD8ZzTKoc8Tquew";

// const token = sessionStorage.getItem("token");

export const getAllTasks = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_ADDRESS}/api/tasks`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }).catch((error) => console.log(error));
    const allTasks = await response.json();
    return allTasks;
};

export const getTask = async (_id) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_ADDRESS}/api/tasks/${_id}`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
            // "Content-Type": "application/json",
        },
    }).catch((error) => console.log(error));
    const task = await response.json();
    return task;
};

export const deleteTask = async (_id) => {
    await fetch(`${process.env.NEXT_PUBLIC_BACKEND_ADDRESS}/api/tasks/${_id}`, {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }).catch((error) => alert(error));
};

export const editTask = async (_id, taskDescription, completed, due) => {
    await fetch(`${process.env.NEXT_PUBLIC_BACKEND_ADDRESS}/api/tasks/${_id}`, {
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
};

export const saveTask = async (taskDescription, due) => {
    await fetch(`${process.env.NEXT_PUBLIC_BACKEND_ADDRESS}/api/tasks`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            description: taskDescription,
            due: due,
        }),
    }).catch((error) => alert(error));
};
