const db = require("../data/dbConfig")

async function getAdmin({ name }) {
    return db('adminTable').where({ name })
}

async function addAdmin(user) {
    return db('adminTable').insert(user)
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
    addAdmin,
    getEmails,
    addNewEmail,
    deleteEmail,
    deleteAll
}
