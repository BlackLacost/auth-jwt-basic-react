import { Grid } from '@mui/material'
import { ProductCard } from '../features/Products/ProductCard'
import { useProducts } from '../features/Products/useProducts'

export const ProductsPage = () => {
  const { data: products, isLoading } = useProducts()

  if (isLoading) return <h1>Products Loading ...</h1>

  return (
    <>
      <Grid container p={3} spacing={3}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} md={6}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </>
  )
}
