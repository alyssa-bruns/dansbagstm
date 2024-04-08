export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('orders').del()

  // Inserts seed entries
  await knex('orders').insert([
    {
      id: 1,
      date: 20240408,
      total_amount: 50,
      customer_id: 1,
    },
    {
      id: 1,
      date: 20240409,
      total_amount: 200,
      customer_id: 2,
    },
  ])
}
