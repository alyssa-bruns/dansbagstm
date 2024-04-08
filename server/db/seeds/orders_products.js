export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('orders_products').del()

  // Inserts seed entries
  await knex('orders_products').insert([
    {
      order_id: 1,
      product_id: 3,
    },
    {
      order_id: 2,
      product_id: 1,
    },
    {
      order_id: 2,
      product_id: 2,
    },
  ])
}
