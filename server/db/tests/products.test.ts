import * as db from '../functions/products.ts'
import { describe, it, expect, beforeAll, beforeEach, afterAll } from 'vitest'
import connection from '../connection'

beforeAll(() => {
  return connection.migrate.latest()
})

beforeEach(async () => {
  await connection.seed.run()
})

describe('getAllProdcuts', () => {
  it('should get all products', async () => {
    const allPosts = await db.getAllProducts()

    expect(allPosts).toHaveLength(6)
    expect(allPosts[2].id).toBe(3)
  })
})

describe('getSinglePost', () => {
  it('should get just one product', async () => {
    const singleProduct = await db.getSingleProduct(2)
    expect(singleProduct).toHaveLength(1)
    expect(singleProduct[0].id).toBe(2)
  })
})

afterAll(() => {
  connection.destroy()
})
