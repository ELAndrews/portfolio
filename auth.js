const jwt = require("jsonwebtoken")

function authenticate(req, res, next) {
    const token = req.headers.authorization
    if (token) {
        jwt.verify(token, process.env.JWT_SECRET || "developmentTesting", (err, decode) => {
            if (err) {
                res.status(401).json({ message: "Access not granted" })
            } else {
                req.decodedToken = decode;
                next()
            }
        })
    } else {
        res.status(400).json({ message: "Credentials required" })
    }
}



module.exports = { authenticate }
