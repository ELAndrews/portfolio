const db = require("../data/dbConfig")

async function getAdmin({ name }) {
    return db('admin').where({ name })
}

async function getEmails() {
    return db('emails')
}

async function addNewEmail(data) {
    return db('emails').insert(data)
}

async function deleteEmail(id) {
    return db('emails').where({ id }).delete()
}

async function deleteAll() {
    return db('emails').delete()
}

module.exports = {
    getAdmin,
    getEmails,
    addNewEmail,
    deleteEmail,
    deleteAll
}
