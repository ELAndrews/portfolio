const jwt = require("jsonwebtoken")
const Admin = require("./data/models")

function authenticate(req, res, next) {
    const token = req.header.authenticate
    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
            if (err) {
                res.status(401).json({ message: "Access not granted" })
            } else {
                req.decodedToken = decoded;
                next()
            }
        })
    } else {
        res.status(400).json({ message: "Credentials required" })
    }
}

router.post("/adminLogin", (req, res) => {
    const { name, password } = req.body;
    Admin.getAdmin({ name })
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


module.exports = { router, authenticate }
