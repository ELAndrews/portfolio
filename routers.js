const { Router } = require("express")
const nodemailer = require("nodemailer")
const Emails = require("./data/models")

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
    Emails.addNewEmail(req.body)
        .then(data => {
            res.status(202).json({ message: "YAY" })
        })
        .catch(err => {
            res.status(500).json({ message: err.message })
        })

})

module.exports = router;