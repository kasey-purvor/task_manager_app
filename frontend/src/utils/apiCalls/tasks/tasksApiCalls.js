if(process.env.NEXT_PUBLIC_DEV === 'true') {
    var token = process.env.NEXT_PUBLIC_TOKEN_DEV
    var frontendApiUrl = process.env.NEXT_PUBLIC_FRONTEND_ADDRESS
} else {
    var token = process.env.NEXT_PUBLIC_TOKEN_PROD
    var frontendApiUrl = fetch('/api/exposeVercelUrl')
    
}
const backendApiUrl = process.env.NEXT_PUBLIC_BACKEND_ADDRESS

export const getAllTasks = async () => {
    const response = await fetch(`${frontendApiUrl}/api/tasks`, {
        method: "GET",
        headers: {
            // Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
    }).catch((error) => console.log(error));
    const allTasks = await response.json();
    return allTasks;
};

export const getTask = async (_id) => {
    console.log("fronetendApiUrl",frontendApiUrl)
    const response = await fetch(`${frontendApiUrl}/api/tasks/${_id}`, {
        method: "GET",
        headers: {
            // Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
    }).catch((error) => console.log(error));
    const task = await response.json();
    if(task) {console.log("taskAPI Fetch Call: get task", task)}
    
    return task;
};

export const deleteTask = async (_id) => {
    console.log("taskAPI Fetch Call: delete task. ID: ", _id);
    console.log("fronetendApiUrl",frontendApiUrl)
    await fetch(`${frontendApiUrl}/api/tasks/${_id}`, {
        method: "DELETE",
        headers: {
            // Authorization: `Bearer ${token}`,
        },
    }).catch((error) => alert(error));
    
};

export const editTask = async (_id, taskDescription, completed, due) => {
    await fetch(`${frontendApiUrl}/api/tasks/${_id}`, {
        method: "PATCH",
        headers: {
            // Authorization: `Bearer ${token}`,
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
    await fetch(`${frontendApiUrl}/api/tasks`, {
        method: "POST",
        headers: {
            // Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            description: taskDescription,
            due: due,
        }),
    }).catch((error) => alert(error));
};
