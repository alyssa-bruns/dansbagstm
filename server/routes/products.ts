import { Router } from 'express'

import * as db from '../db/functions/products.ts'

const router = Router()

// GET /api/v1/products
router.get('/', async (req, res) => {
  try {
    const products = await db.getAllProducts()
    res.json(products)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

// GET /api/v1/products/:id
router.get('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const post = await db.getSingleProduct(id)
    res.json(post)
  } catch (error) {
    res.sendStatus(500)
  }
})

export default router
