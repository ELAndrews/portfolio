
exports.up = function (knex) {
    return knex.schema.createTable('emails', (table) => {
        table.increments()
        table.string("name")
        table.string("email")
        table.string("subject")
        table.string("message")
    })
        .createTable('admin', (table) => {
            table.increments()
            table.string("name")
            table.string("password")
        })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('emails').dropTableIfExists('admin')
};
