import request from 'superagent'
import { Product } from '../../models/products'

const rootUrl = '/api/v1/products'

export async function getAllProducts(): Promise<Product[]> {
  const res = await request.get(rootUrl)
  return res.body
}
