exports.up = (knex) => {
    return knex.schema
        .createTable('products', function (table) {
            table.increments('product_id');
            table.string('title', 50).notNullable();
            table.string('description', 500).notNullable();
            table.integer('funds_goal').notNullable();
            table.integer('funds_raised');
            table.specificType('images', 'text ARRAY');
            table.string('creator_name', 50).notNullable();
            table.string('creator_email', 100).notNullable();
            table.timestamps(false, true);
        });
    };

exports.down = (knex) => {
    return knex.schema.dropTableIfExists('products');
};