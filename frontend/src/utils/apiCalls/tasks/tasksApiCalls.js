const userEmail = "ey.purvor@gmail.com";
const userPAssword = "$2b$08$GbayOyMZ.u15uqWlTiMb3ukEvXCSipDz2cfttQ6ugRriUeqQNEiQq";
const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDZmM2FhNzRlZWQ5NzZmMDA1OTM4MzQiLCJpYXQiOjE2ODUwMTExMTF9.8_G1FgWMWunjQ2_j4E-mTlRg9-tNabB1h0BpCPusTt4";

export const getAllTasks = async () => {
    const response = await fetch("http://localhost:3000/tasks", {
        method: "GET",
        headers: {
            Authorization: `Bearer ${process.env.TOKEN}`,
            "Content-Type": "application/json",
        },
    }).catch((error) => console.log(error));
    const allTasks = await response.json();
    return allTasks;
};

export const getTask = async (_id) => {
    const response = await fetch(`http://localhost:3000/tasks/${_id}`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${process.env.TOKEN}`,
            "Content-Type": "application/json",
        },
    }).catch((error) => console.log(error));
    const task = await response.json();
    return task;
};  
