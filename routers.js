const { Router } = require("express")
const nodemailer = require("nodemailer")
const Emails = require("./data/models")
const { authenticate } = require("./auth")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const router = Router()

function makeToken(user) {
    const payload = {
        sub: user.id,
        name: user.name
    };
    const options = {
        expiresIn: 1000 * 60 * 10
    };
    const token = jwt.sign(
        payload,
        process.env.JWT_SECRET,
        options
    );
    return token;
}

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
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
    const message = {
        from: data.email,
        to: process.env.EMAIL,
        subject: data.subject,
        text: data.name,
        text: data.message,
    };

    transporter.sendMail(message, function (error, info) {
        if (error) {
            res.status(500).json({ message: err.stack })
        } else {
            Emails.addNewEmail(data)
                .then(data => {
                    res.status(202).json({ message: "YAY" })
                })
                .catch(err => {
                    res.status(500).json({ message: err.stack })
                })
        }
    });

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

router.post("/adminLogin", (req, res) => {
    const { name, password } = req.body;
    Emails.getAdmin({ name })
        .first()
        .then(user => {
            if (user && bcrypt.compareSync(password, user.password)) {
                const token = makeToken(user);
                res
                    .status(200)
                    .json({ message: `Logged in! Welcome back ${user.username}`, token });
            } else {
                res.status(401).json({ message: "Invalid Credentials" });
            }
        })
        .catch(error => {
            res.status(500).json(error.message);
        });
});

router.post("/adminRegister", (req, res) => {
    const { name, password } = req.body;

    const bcryptHash = bcrypt.hashSync(password, 13);
    const user = {
        name,
        password: bcryptHash
    };

    Emails.addAmin(user)
        .then(id => {
            res.status(201).json(`New user registered with id: ${id}`);
        })
        .catch(error => {
            res.status(500).json(error.message);
        });
});

module.exports = router;