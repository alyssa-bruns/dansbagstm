import connection from './connection.ts'
import { Product } from '../../models/products.ts'

const db = connection

export async function getAllProducts(): Promise<Product[]> {
  return db('products').select()
}
