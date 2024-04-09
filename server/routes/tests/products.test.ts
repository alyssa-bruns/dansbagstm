import { it, expect, describe, vi } from 'vitest'
import request from 'supertest'
import * as productsDb from '../../db/functions/products'
import server from '../../server'

vi.mock('../../db/products')

const mockProducts = [
  {
    id: 1,
    name: 'tool roll',
    description: 'product description',
    is_custom: false,
    is_available: true,
    price: 45,
    image: 'url',
  },
  {
    id: 2,
    name: 'handlebar bag',
    description: 'product description',
    is_custom: false,
    is_available: true,
    price: 85,
    image: 'url',
  },
]

describe('GET api/v1/products', async () => {
  it('should get all product', async () => {
    vi.mocked(productsDb.getAllProducts).mockResolvedValue(mockProducts)

    const res = await request(server).get('/api/v1/products')

    expect(res.statusCode).toBe(200)
  })
  it('should send an error message', async () => {
    vi.mocked(productsDb.getAllProducts).mockRejectedValue(mockProducts)

    const res = await request(server).get('/api/v1/products')

    expect(res.statusCode).toBe(500)
  })
})
