require('dotenv').config();

const nodemailer = require('nodemailer');

var transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "3947807486a916",
      pass: "e84b4f02d668f1"
    }
  });

const mailOptions = {
    from: process.env.EMAIL_USERNAME,
    to: 'shubhaseesh09@gmail.com',
    subject: 'Node Mailer',
    text: 'Ho gya chalo ab bye!',
}

transport.sendMail(mailOptions, (err, info)=>{
    if (err){
        console.log(err)
    }else{
        console.log(info)
    }
})