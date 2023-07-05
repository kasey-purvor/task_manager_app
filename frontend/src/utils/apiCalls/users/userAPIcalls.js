if(process.env.NEXT_PUBLIC_DEV === 'true') {
    var token = process.env.NEXT_PUBLIC_TOKEN_DEV
} else {
    var token = process.env.NEXT_PUBLIC_TOKEN_PROD
}
const backendApiUrl = process.env.NEXT_PUBLIC_BACKEND_ADDRESS

export const loginUser = async (email , password) => {
    try {
        const response = await fetch(`/api/signin`, {
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

    } catch(e) {
        console.log(e)
    }  
}
export const signUpUser = async (name, email, password, age) => {
    try {
        await fetch(`/api/signup`, {
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
    } catch (e) {
        alert(e)
    }
}