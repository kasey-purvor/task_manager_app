const backenedUrl = process.env.NEXT_PUBLIC_BACKEND_ADDRESS;

export const getAllTaskIds = async () => {
    const response = await fetch(`${backenedUrl}/api/allTasks`, {
        method: "GET",
        headers: {
        },
    }).catch((error) => console.log(error));
    const allTasks = await response.json()
    // console.log(allTasks.map(task => task._id))
    return allTasks.map((task) => {
        return {
            params: {
                id: task._id.toString(),
            },
        };
    });
};
export const getSingleTask = async (_id) => {
    const response = await fetch(`${backenedUrl}/api/getTask/${_id}`, {
        method: "GET"
    }).catch((error) => console.log(error));
    const task = await response.json();
    // console.log(task)
    return task;
}
