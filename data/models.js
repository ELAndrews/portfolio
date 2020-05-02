const db = require("../data/dbConfig")

async function getAdmin({ name }) {
    return db('adminTable').where('name', name)
}

async function addAdmin(user) {
    const id = await db('adminTable').insert(user)
    return id
}

async function getAllAdmin() {
    return db('adminTable')
}

async function deleteAdmin(id) {
    return db('adminTable').where({ id }).delete()
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
    getAllAdmin,
    deleteAdmin,
    getEmails,
    addNewEmail,
    deleteEmail,
    deleteAll
}
