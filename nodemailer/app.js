require('dotenv').config();
var nodemailer = require('nodemailer');

var transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "3947807486a916",
      pass: "e84b4f02d668f1"
    }
  });

var mailOptions = {
    from: 'shubhaseesh08@gmail.com', // sender address
    to: 'Shubhaseesh09@gmail.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world ?', // plaintext body
    html: '<b>Hello world ?</b>' // html body
};

transport.sendMail(mailOptions, (err, info)=> {
    if (err) {
        console.log(err);
    } else{
        console.log(info);
    }
})