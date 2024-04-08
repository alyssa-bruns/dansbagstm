export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('products').del()

  // Inserts seed entries
  await knex('products').insert([
    {
      id: 1,
      name: 'tool roll',
      description: 'product description',
      is_custom: 0,
      is_available: 1,
      price: 45,
      image: 'url',
    },
    {
      id: 2,
      name: 'handlebar bag',
      description: 'product description',
      is_custom: 0,
      is_available: 1,
      price: 85,
      image: 'url',
    },
    {
      id: 3,
      name: 'musette',
      description: 'product description',
      is_custom: 0,
      is_available: 1,
      price: 55,
      image: 'url',
    },
    {
      id: 4,
      name: 'custom half frame bag',
      description: 'product description',
      is_custom: 0,
      is_available: 1,
      price: 0,
      image: 'url',
    },
    {
      id: 5,
      name: 'custom full frame bag',
      description: 'product description',
      is_custom: 0,
      is_available: 1,
      price: 0,
      image: 'url',
    },
    {
      id: 6,
      name: 'custom order',
      description: 'product description',
      is_custom: 1,
      is_available: 1,
      price: 0,
      image: 'url',
    },
  ])
}
