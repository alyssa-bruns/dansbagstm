/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('options', (table) => {
    table.increments('id')
    table.string('option')
    table.string('description')
    table.integer('price')
    table.boolean('is_custom')
    table.boolean('is_available')
    table.boolean('is_color')
    table.boolean('is_add_on')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('options')
}
