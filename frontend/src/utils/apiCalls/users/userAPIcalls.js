import {useRouter} from "next/router";

if (process.env.NEXT_PUBLIC_DEV === "true") {
    var token = process.env.NEXT_PUBLIC_TOKEN_DEV;
    var frontendApiUrl = process.env.NEXT_PUBLIC_FRONTEND_ADDRESS;
} else {
    var token = process.env.NEXT_PUBLIC_TOKEN_PROD;
    var frontendApiUrl = `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;
}
const backendApiUrl = process.env.NEXT_PUBLIC_BACKEND_ADDRESS;

export const loginUser = async (email, password) => {
    try {
        const response = await fetch(`${frontendApiUrl}/api/signin`, {
            method: "POST",
            headers: {
                // Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        }).catch((error) => console.log(error));
        const userData = await response.json();
        console.log("UserAPI login call: User data: ", userData);
        return userData;
    } catch (e) {
        console.log(e);
    }
};
export const signUpUser = async (name, email, password, age) => {
    try {
        const response = await fetch(`${frontendApiUrl}/api/signup`, {
            method: "POST",
            headers: {
                // Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password,
                age: age,
            }),
        }).catch((error) => console.log(error));
        const userData = await response.json();
        console.log("UserAPI signup call: User data: ", userData);
        return userData;
    } catch (e) {
        alert(e);
    }
};

export const logoutUser = async () => {
    try {
        // const router = useRouter();
        const response = await fetch(`${frontendApiUrl}/api/users/logout`, {
            method: "POST"
        }).catch((error) => console.log(error));
    } catch(error) {
        console.log("Error logging out: ", error);
    }
}

export const editUser = async (name, email, password, age) => {
    try {
        const res = await fetch(`${frontendApiUrl}/api/users/me`, {
            method : "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password,
                age: age,
            })
        })
        console.log("UserAPI edit call: User data: ");
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

export const deleteUser = async () => {
    try {
        const res = await fetch(`${frontendApiUrl}/api/users/delete`, {
            method : "DELETE"
        }).catch((error) => console.log(error));
    } catch (e) {
        console.log(e);
    }
    
}