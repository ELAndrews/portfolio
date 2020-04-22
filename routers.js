const { Router } = require("express")
const nodemailer = require("nodemailer")

const router = Router()

const transporter = nodemailer.createTransport({
    sendmail: true,
    newline: 'unix',
    path: '/usr/sbin/sendmail'
})

router.post('/api/message', (req, res) => {
    transporter.sendMail({
        from: req.body.email,
        to: 'emmaandrewsdev@gmail.com',
        subject: req.body.subject,
        text: req.body.message + req.body.name
    }, (err, info) => {
        console.log(info.envelope);
        console.log(info.messageId);
    })
    res.status(202).status({ message: "YAY" })

})

module.exports = router;