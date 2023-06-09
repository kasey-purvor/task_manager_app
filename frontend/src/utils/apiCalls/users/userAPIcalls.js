if(process.env.NEXT_PUBLIC_DEV === 'true') {
    var token = process.env.NEXT_PUBLIC_TOKEN_DEV
} else {
    var token = process.env.NEXT_PUBLIC_TOKEN_PROD
}
const backendApiUrl = process.env.NEXT_PUBLIC_BACKEND_ADDRESS

export const loginUser = async (email , password) => {
    try {
        const response = await fetch(`${backendApiUrl}/api/users/login`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
        credentials: "include",
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
        await fetch(`${backendApiUrl}/api/users`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            credentials: "include",
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