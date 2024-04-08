export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('options_products').del()

  // Inserts seed entries
  await knex('options_products').insert([
    {
      product_id: 1,
      option_id: 3,
    },
    {
      product_id: 1,
      option_id: 4,
    },
    {
      product_id: 1,
      option_id: 5,
    },
    {
      product_id: 1,
      option_id: 6,
    },
    {
      product_id: 1,
      option_id: 7,
    },
    {
      product_id: 1,
      option_id: 8,
    },
    {
      product_id: 2,
      option_id: 3,
    },
    {
      product_id: 2,
      option_id: 4,
    },
    {
      product_id: 2,
      option_id: 5,
    },
    {
      product_id: 2,
      option_id: 6,
    },
    {
      product_id: 2,
      option_id: 7,
    },
    {
      product_id: 2,
      option_id: 8,
    },
    {
      product_id: 3,
      option_id: 3,
    },
    {
      product_id: 3,
      option_id: 4,
    },
    {
      product_id: 3,
      option_id: 5,
    },
    {
      product_id: 3,
      option_id: 6,
    },
    {
      product_id: 3,
      option_id: 7,
    },
    {
      product_id: 3,
      option_id: 8,
    },
    {
      product_id: 4,
      option_id: 1,
    },
    {
      product_id: 4,
      option_id: 2,
    },
    {
      product_id: 4,
      option_id: 3,
    },
    {
      product_id: 4,
      option_id: 4,
    },
    {
      product_id: 4,
      option_id: 5,
    },
    {
      product_id: 4,
      option_id: 6,
    },
    {
      product_id: 4,
      option_id: 7,
    },
    {
      product_id: 4,
      option_id: 8,
    },
    {
      product_id: 4,
      option_id: 9,
    },
    {
      product_id: 5,
      option_id: 1,
    },
    {
      product_id: 5,
      option_id: 2,
    },
    {
      product_id: 5,
      option_id: 3,
    },
    {
      product_id: 5,
      option_id: 4,
    },
    {
      product_id: 5,
      option_id: 5,
    },
    {
      product_id: 5,
      option_id: 6,
    },
    {
      product_id: 5,
      option_id: 7,
    },
    {
      product_id: 5,
      option_id: 8,
    },
    {
      product_id: 5,
      option_id: 9,
    },
    {
      product_id: 6,
      option_id: 3,
    },
    {
      product_id: 6,
      option_id: 4,
    },
    {
      product_id: 6,
      option_id: 5,
    },
    {
      product_id: 6,
      option_id: 6,
    },
    {
      product_id: 6,
      option_id: 7,
    },
    {
      product_id: 6,
      option_id: 8,
    },
  ])
}
