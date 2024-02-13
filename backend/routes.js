const express = require('express')
const router = express.Router()
const nodemailer = require('nodemailer')

router.get('/',(req,res)=>{
    res.send("Hello Email Api")
})

router.post('/sendEmail',async (req,res)=>{
    const message = req.body.message
    const email = req.body.email
    console.log(email, message);

    const transporter = nodemailer.createTransport({
        host:process.env.SMTP_HOST,
        port:process.env.SMTP_PORT,
        secured:false,
        auth:{
            user:process.env.SMTP_USER,
            pass:process.env.SMTP_PASSWORD
        }
    })

    try{
        const mailOptions={
            from:email,
            to:process.env.USER,
            subject:"Message from GLOBAL FINANCE INTL User",
            text:message
        }
        transporter.sendMail(mailOptions)
        console.log(email, message);
        console.log('Email Sent');
    }catch(error){
       
        res.status(500).send('Error sending Email')
    }
})

module.exports= router