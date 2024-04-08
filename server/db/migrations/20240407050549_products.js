/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('products', (table) => {
    table.increments('id')
    table.string('name')
    table.string('description')
    table.integer('price')
    table.string('image')
    table.boolean('is_custom')
    table.boolean('is_available')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

export function down(knex) {
  return knex.schema.dropTable('products')
}
