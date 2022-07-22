import { Router } from 'express'
import { prisma } from '../../prisma/prisma.client.mjs'

const router = Router()

router.get('/', async (req, res) => {
  const products = await prisma.product.findMany()
  res.json({ items: products })
})

export const productsRouter = router
