const sgMail = require('@sendgrid/mail')


// const sendgridAPIKey = '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'


sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({  
        to: email,
        from: 'guntur.yasasvy@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}, Let me know how you get along with the app.`,
        // html: `<p>Welcome to the app, ${name}, Let me know how you get along with the app. Until further contact Please enjoy this...</p><img src="https://sugargeekshow.com/wp-content/uploads/2019/07/fresh-strawberry-cake-5.jpg" width="500" height="500" alt="Italian Trulli">`
    })   
}

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'guntur.yasasvy@gmail.com',
        subject: 'Sorry to see you go!',
        text: `Goodbye, ${name}, I hope to see you back sometime soon`
    })   
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}