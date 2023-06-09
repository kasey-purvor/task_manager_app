const controller = new AbortController();
const signal = controller.signal;
setTimeout(() => controller.abort(), 10000); // 10 seconds

if(process.env.NEXT_PUBLIC_DEV === 'true') {
    var token = process.env.NEXT_PUBLIC_TOKEN_DEV
    var frontendApiUrl = process.env.NEXT_PUBLIC_FRONTEND_ADDRESS
} else {
    var token = process.env.NEXT_PUBLIC_TOKEN_PROD
    var frontendApiUrl = `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
}
const backendApiUrl = process.env.NEXT_PUBLIC_BACKEND_ADDRESS

export const getAllTasks = async (cookies) => {
    try {
        const response = await fetch(`${frontendApiUrl}/api/tasks`, {
            method: "GET",
            headers: {
                'Cookie': cookies,
                // Authorization: `Bearer ${token}`,
            },
            // signal
        }).catch((error) => {
            console.log("Error in getAllTasks fetch call: ", error)
            throw new Error(error);
        });
        const allTasks = await response.json();
        return allTasks;
    } catch (e) {
        console.log("error with getAllTasks api call: ", e)
        return e;
    }
};
export const getTask = async (_id) => {
    const response = await fetch(`${frontendApiUrl}/api/tasks/${_id}`, {
        method: "GET",
        headers: {
            // Authorization: `Bearer ${token}`,

        },
    }).catch((error) => console.log(error));
    const task = await response.json();
    if(task) {console.log("taskAPI Fetch Call: get task", task)}
    
    return task;
};

export const deleteTask = async (_id) => {
    await fetch(`${frontendApiUrl}/api/tasks/${_id}`, {

        method: "DELETE",
        headers: {
            // Authorization: `Bearer ${token}`,
            "auth-token": token
        },
    }).catch((error) => alert(error));
    
};

export const editTask = async (_id, taskDescription, completed, due) => {
    await fetch(`${frontendApiUrl}/api/tasks/${_id}`, {
        method: "PATCH",
        headers: {
            // Authorization: `Bearer ${token}`,
            "Content-Type": "application/json ; charset=utf-8",
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
            "Content-Type": "application/json ; charset=utf-8",
        },
        body: JSON.stringify({
            description: taskDescription,
            due: due,
        }),
    }).catch((error) => alert(error));
};
