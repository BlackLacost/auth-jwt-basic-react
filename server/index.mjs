import express from 'express'
import path from 'path'
import { productsRouter } from './products/products.router.mjs'

const app = express()
const port = process.env.PORT || 4000

app.use('/api/products', productsRouter)

app.get('/api/check', (req, res) => {
  res.json({ message: 'API checked' })
})

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('build'))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve('build', 'index.html'))
  })
}

app.listen(port, () => {
  console.log(`Server on http://localhost:${port}`)
})
