export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('options').del()

  // Inserts seed entries
  await knex('options').insert([
    {
      id: 1,
      option: 'hydration port',
      description: 'option description',
      is_available: 1,
      is_custom: 0,
      is_color: 0,
      price: 10,
    },
    {
      id: 2,
      option: 'map pocket',
      description: 'option description',
      is_available: 1,
      is_custom: 0,
      is_color: 0,
      price: 50,
    },
    {
      id: 3,
      option: 'pink',
      description: 'option description',
      is_available: 1,
      is_custom: 0,
      is_color: 1,
      price: 0,
    },
    {
      id: 4,
      option: 'yellow',
      description: 'option description',
      is_available: 1,
      is_custom: 0,
      is_color: 1,
      price: 0,
    },
    {
      id: 4,
      option: 'orange',
      description: 'option description',
      is_available: 1,
      is_custom: 0,
      is_color: 1,
      price: 0,
    },
    {
      id: 5,
      option: 'black',
      description: 'option description',
      is_available: 1,
      is_custom: 0,
      is_color: 1,
      price: 0,
    },
    {
      id: 5,
      option: 'camo',
      description: 'option description',
      is_available: 1,
      is_custom: 0,
      is_color: 1,
      price: 0,
    },
    {
      id: 6,
      option: 'custom color',
      description: 'option description',
      is_available: 1,
      is_custom: 1,
      is_color: 1,
      price: 0,
    },
    {
      id: 7,
      option: 'double zip/compartment',
      description: 'option description',
      is_available: 1,
      is_custom: 1,
      is_color: 0,
      price: 0,
    },
  ])
}
