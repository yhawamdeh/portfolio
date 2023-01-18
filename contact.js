const nodemailer = require('nodemailer');

async function sendEmail(to, subject, message) {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: "yazan@hawamda.com",
            pass: "Nazayaaa1995!"
        }
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: '"Your Name" <yazan@hawamda.com>', // sender address
        to: to, // list of receivers
        subject: subject, // Subject line
        text: message, // plain text body
        html: message // html body
    });

    console.log("Message sent: %s", info.messageId);
}

// email sending to, subject, body
let inputSubject = document.getElementById("subject").value;
let inputBody = document.getElementById("message").value;
let sendMessage = document.getElementById("send");

sendMessage.addEventListener("click", function() {
  sendEmail("yazan@hawamda.com", inputSubject, inputBody);
});

