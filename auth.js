const jwt = require("jsonwebtoken")

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



module.exports = { authenticate }
