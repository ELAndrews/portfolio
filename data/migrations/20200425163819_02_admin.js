

exports.up = function (knex) {
    return knex.schema.createTable('adminTable', (table) => {
        table.increments();
        table.string('name');
        table.string('password');
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('adminTable')
};
