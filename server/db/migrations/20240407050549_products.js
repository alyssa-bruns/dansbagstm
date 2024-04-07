/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('products', (table) => {
    table.increments('id')
    table.string('name')
    table.string('color_one')
    table.string('color_two')
    table.number('price')
    table.boolean('is_custom')
    table.string('image')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

export function down(knex) {
  return knex.schema.dropTable('products')
}
