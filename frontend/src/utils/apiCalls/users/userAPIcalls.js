const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDc5YjZjMzg0NTUwM2NmNDE0OGVkMDEiLCJpYXQiOjE2ODU5NjYwNzF9.0FQ09fYPyZUUIlD-MaJvN29XkYquXhMKgV6HjqJQuqw";

export const loginUser = async (email , password) => {
    try {
        const response = await fetch(`https://localhost:3000/api/users/login`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email: email,
            password: password,
        })
    }).catch((error) => console.log(error));
    alert(res.cookie.jwt)
    const responseJSON = await response.json();
    return responseJSON.token.token
    } catch(e) {
        console.log(e)
    }
   
    
}
export const signUpUser = async (name, email, password, age) => {
    try {
        await fetch(`https://localhost:3000/api/users`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password,
                age: age
            })
        }).catch((error) => console.log(error));
    } catch (e) {
        alert(e)
    }
}