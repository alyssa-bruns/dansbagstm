/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('orders', (table) => {
    table.increments('id')
    table.date('date')
    table.integer('total_amount')
    table.integer('customer_id')
    table.integer('number_of_items')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('orders')
}
