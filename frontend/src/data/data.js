export const data = {
    forms: [
        {
            type: "signIn",
            formRows: [
                {
                    desc: "Username / Email",
                    additionalInfo: "Please use the username or email address you signed up with.",
                    formLineType: "email",
                    placeholderText: "example@gmail.com"
                },
                {
                    desc: "Password",
                    additionalInfo: "Please use the password you signed up with.",
                    formLineType: "password",
                    placeholderText: "Enter your password"
                }
            ]
        },
        {
            type: "signUp",
            formRows: [
                {
                    desc: "Username / Email",
                    additionalInfo: "Please use your email address if you would like to recieve notifications regarding your tasks.",
                    formLineType: "email",
                    placeholderText: "example@gmail.com or example Username"
                },
                {
                    desc: "Password",
                    additionalInfo: "Please create a password",
                    formLineType: "password",
                    placeholderText: "Enter a password"
                }

            ]
        }
    ]
}

