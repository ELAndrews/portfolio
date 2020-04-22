const db = require("../data/dbConfig")

async function getEmails() {
    return db('emails')
}

async function addNewEmail(data) {
    return db('emails').insert(data)
}

async function deleteEmail(id) {
    return db('emails').where({ id }).delete()
}

module.exports = {
    getEmails,
    addNewEmail,
    deleteEmail
}
