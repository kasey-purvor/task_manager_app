const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (name, email) => {
    sgMail.send({
        to: email,
        from: "kasey.purvor@gmail.com",
        subject: "Thanks for signing up for the Todo app",
        text: `Welcome ${name}! Please let me know if you have any feedback.`
    })
}

const sendGoodbyeEmail = (name, email) => {
    sgMail.send({
        to: email,
        from: "kasey.purvor@gmail.com",
        subject: "Sorry to see you go. Thanks for using the Todo App",
        text: `Thanks for trying my Todo app ${name}. I hope you found it useful.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendGoodbyeEmail
}