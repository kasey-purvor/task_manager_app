const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDc5YjZjMzg0NTUwM2NmNDE0OGVkMDEiLCJpYXQiOjE2ODU2OTgyODV9.46iI44wTsGmyxgfcmIluAyMZETqu6NyWFo4yImSPC9A";

export const loginUser = async (email , password) => {
    const response = await fetch(`http://localhost:3000/users/login`, {
        method: "POST",
        headers: {
            // Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email: email,
            password: password,
        })
    }).catch((error) => console.log(error));
    const responseJSON = await response.json();
    alert(JSON.stringify(responseJSON.token.token))
    return responseJSON.token.token
}
export const signUpUser = async (name, email, password, age) => {
    await fetch(`http://localhost:3000/users`, {
        method: "POST",
        headers: {
            // Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: name,
            email: email,
            password: password,
            age: age
        })
    }).catch((error) => console.log(error));
}