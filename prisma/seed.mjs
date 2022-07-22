import { faker } from '@faker-js/faker'
import { prisma } from './prisma.client.mjs'

const products = [...new Array(30)].map(() => ({
  name: faker.commerce.productName(),
  price: Number(faker.commerce.price(100, 10000, 0)),
  image: faker.image.business(640, 480, true),
}))

const createdProducts = await prisma.product.createMany({
  data: products,
  skipDuplicates: true,
})
console.log(`Generate ${createdProducts.count} products`)
