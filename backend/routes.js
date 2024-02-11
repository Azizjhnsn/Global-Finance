const express = require('express')
const router = express.Router()

router.post('/sendEmail',(req,res)=>{
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
            from:req.body.email,
            to:process.env.USER,
            subject:"Message from Aziz&Charts User",
            text:req.body.message
        }
        transporter.sendMail(mailOptions)
        console.log('Email Sent');
    }catch(error){
        console.log();
        res.status(500).send('Error sending Email')
    }
})

module.exports= router