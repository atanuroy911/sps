"use strict";
const nodemailer = require("nodemailer");
var connection = require('../db/connection');

const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
    }
});

const sendMail = (fullName, email, phone, contact_pref, message, subject) => {
    let sql = `SELECT notify_email FROM users WHERE 1`;
    let mailOptions = {};
    connection.query(sql, async function (err, results) {
        if (err) {
            res.send({ error: 'Database Error' })
            console.log(err);
        }
        else {
            // console.log(results[0])
            let promise = new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(results[0]?.notify_email)
                }, 2000)
            });
            let result = await promise;
            console.log(result)
            mailOptions = {
                from: process.env.EMAIL_USER,
                to: result,
                subject: `New Request Info for ${fullName} from ${subject}`,
                text: `
                  Name: ${fullName}
                  E-mail address: ${email}
                  Phone: ${phone}
                  Contact Preference: ${contact_pref}
                  Message: ${message}
        
                  Please Login to Dashboard to check for details
                `
            };
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.log(error)
                    return;
                }
                console.log('OK 1')
                sendMailUser(fullName, email, subject);
            });
        }
    })


}
const sendMailUser = (fullName, email, subject) => {

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: `Momin Auto Sales : Your ${subject} Request is received`,
        text: `
        Dear ${fullName},

        Thank you for contacting us through our ${subject} form! Our agent will reach out to you shortly.
        
        If you're ready to get started, check out our inventory on our website. If you need any additional assistance don't hesitate to contact us, we're here for you 24/7.*
        
        
        Thanks,
        Your friends at Momin Auto Sales


        Don't Reply to this email, this is an auto-generated email
        `
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error)
            return;
        }
        console.log('OK 2')
    });
}

module.exports = sendMail

