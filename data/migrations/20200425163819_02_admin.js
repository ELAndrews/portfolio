

exports.up = function (knex) {
    return knex.schema.createTable('admin', (table) => {
        table.increments()
        table.string("name")
        table.string("password")
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('admin')
};
