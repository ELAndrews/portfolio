const { Router } = require("express")
const nodemailer = require("nodemailer")
const Emails = require("./data/models")
const { authenticate } = require("./auth")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const sendmail = require('sendmail')();

const router = Router()

function makeToken(user) {
    const payload = {
        sub: user.id,
    };
    const options = {
        expiresIn: 1000 * 60 * 10
    };
    const token = jwt.sign(
        payload,
        process.env.JWT_SECRET || "developmentTesting",
        options
    );
    return token;
}

router.post("/api/adminRegister", (req, res) => {
    const { name, password } = req.body;

    const bcryptHash = bcrypt.hashSync(password, 13);

    const user = {
        name,
        password: bcryptHash
    };

    Emails.addAdmin(user)
        .then(id => {
            res.status(201).json(`New user created`);
        })
        .catch(error => {
            res.status(500).json({ message: error.stack })
        });
});

router.post("/api/adminLogin", (req, res) => {
    const { name, password } = req.body;

    Emails.getAdmin({ name })
        .then(users => {
            const user = users[0]
            if (user && bcrypt.compareSync(password, user.password)) {
                const token = makeToken(user);
                res
                    .status(200)
                    .json({ message: `Logged in! Welcome back ${user.name}`, token });
            } else {
                res.status(401).json({ message: "Invalid Credentials" });
            }
        })
        .catch(error => {
            res.status(500).json(error.stack);
        });
});



const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL || "emmaandrewsdev.gmail.com",
        pass: process.env.PASSWORD || "BumbleBEE2012"
    }
});


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

    // sendmail({
    //     from: data.email,
    //     to: process.env.EMAIL || "emmaandreewsdev.gmail.com",
    //     subject: data.subject,
    //     text: data.name,
    //     html: data.message,
    // }, function (err, reply) {
    //     console.log(err && err.stack);
    //     console.log(reply);
    //     if (err == null || reply == undefined) {
    Emails.addNewEmail(data)
        .then(data => {
            res.status(202).json({ message: "YAY" })
        })
        .catch(err => {
            res.status(500).json({ message: err.stack })
        })
    // }
});
// const message = {
//     from: data.email,
//     to: process.env.EMAIL,
//     subject: data.subject,
//     text: data.name,
//     text: data.message,
// };
// transporter.sendMail(message, function (error, info) {
//     if (error) {
//         res.status(500).json({ message: error.message })
//     } else {
// Emails.addNewEmail(data)
//     .then(data => {
//         res.status(202).json({ message: "YAY" })
//     })
//     .catch(err => {
//         res.status(500).json({ message: err.stack })
//     })
//     }
// });

// })

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