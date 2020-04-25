const { Router } = require("express")
const nodemailer = require("nodemailer")
const Emails = require("./data/models")
const { authenticate } = require("./auth")

const router = Router()

const transporter = nodemailer.createTransport({
    sendmail: true,
    newline: 'unix',
    path: '/usr/sbin/sendmail'
})

router.get('/api/message', authenticate, (req, res) => {
    Emails.getEmails()
        .then(data => {
            res.status(202).json(data)
        })
        .catch(err => {
            res.status(500).json({ message: err.message })
        })
})

router.post('/api/message', (req, res) => {
    const data = req.body
    // transporter.sendMail({
    //     from: req.body.email,
    //     to: 'emmaandrewsdev@gmail.com',
    //     subject: req.body.subject,
    //     text: req.body.message + req.body.name
    // }, (err, info) => {
    //     console.log(info.envelope);
    //     console.log(info.messageId);
    // })
    Emails.addNewEmail(data)
        .then(data => {
            res.status(202).json({ message: "YAY" })
        })
        .catch(err => {
            res.status(500).json({ message: err.stack })
        })
})

router.delete('/api/message/:id', authenticate, (req, res) => {
    Emails.deleteEmail(req.params.id)
        .then(data => {
            res.status(202).json(data)
        })
        .catch(err => {
            res.status(500).json({ message: err.message })
        })
})

router.delete('/api/message/ALL', authenticate, (req, res) => {
    Emails.deleteALL()
        .then(data => {
            res.status(202).json(data)
        })
        .catch(err => {
            res.status(500).json({ message: err.message })
        })
})

module.exports = router;