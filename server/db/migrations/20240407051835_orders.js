/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('orders', (table) => {
    table.increments('id')
    table.date('date')
    table.number('total_amount')
    table.number('customer_id')
    table.number('number_of_items')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('orders')
}
