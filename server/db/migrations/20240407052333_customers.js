/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('customers', (table) => {
    table.increments('id').primary()
    table.string('auth0_id').unique()
    table.string('first_name')
    table.string('last_name')
    table.string('email')
    table.number('phone')
    table.string('address')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('customers')
}
