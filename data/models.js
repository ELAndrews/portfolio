const db = require("../data/dbConfig")

async function getEmails() {
    return db('emails')
}

async function addNewEmail(data) {
    return db('emails').insert(data)
}

module.exports = {
    getEmails,
    addNewEmail
}
