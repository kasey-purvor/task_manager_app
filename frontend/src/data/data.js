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
                    placeholderText: "example@gmail.com  - or - exampleUsername"
                },
                {
                    desc: "Password",
                    additionalInfo: "Please create a password",
                    formLineType: "password",
                    placeholderText: "Enter a password"
                }

            ]
        },
        {
            type: "editTask",
            formRows: [
                {
                    desc: "Task Description",
                    additionalInfo: "Please edit the Task Description if you desire",
                    formLineType: "text",
                },
                {
                    desc: "Due Date",
                    additionalInfo: " Please edit Task Due Date if you desire",
                    formLineType: "date",
                },
                {
                    desc: "Completion Status",
                    additionalInfo: "Please edit Task Completion Status if you desire",
                    formLineType: "checkbox",
                    isCheckBox: true
                }
            ]
        }
    ]
}

