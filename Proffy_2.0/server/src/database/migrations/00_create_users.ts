import knex from 'knex';

export async function up(knex: knex) {
    return knex.schema.createTable('users', table => {
        table.increments('id').primary();
        table.string('first_name').notNullable();
        table.string('last_name').notNullable();
        table.string('email').notNullable();
        table.string('password').notNullable();
        table.string('avatar').notNullable();
        table.string('whatsapp');
        table.string('bio');
        table.boolean('is_superuser').notNullable();
        table.boolean('is_staff').notNullable();
        table.boolean('is_active').notNullable();
        table.unique(['email'])
        table.timestamp('data_joined')
        .defaultTo(knex.raw('CURRENT_TIMESTAMP'))
        .notNullable()
    });
}

export async function down(knex: knex) {
    return knex.schema.dropTable('users')
}