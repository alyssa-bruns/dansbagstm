export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('customers').del()

  // Inserts seed entries
  await knex('customers').insert([
    {
      id: 1,
      auth0_id: null,
      first_name: 'Don',
      last_name: 'Donny',
      email: 'dondonny@gmail.com',
      phone: 7779993333,
      address: '21 Donny Way, Auckland, 2342',
    },
    {
      id: 2,
      auth0_id: null,
      first_name: 'Max',
      last_name: 'Maxxy',
      email: 'maxmaxxy@gmail.com',
      phone: 8883336666,
      address: '09 Maxxy Ave, Auckland, 2344',
    },
  ])
}
