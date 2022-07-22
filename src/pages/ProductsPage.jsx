import { useQuery } from '@tanstack/react-query'
import { api } from '../api.fetch'

export const ProductsPage = () => {
  const { data: products, isLoading } = useQuery(['products'], async () => {
    const res = await api.get('products')
    return res.data.items
  })

  if (isLoading) return <h1>Products Loading ...</h1>

  return <pre>{JSON.stringify(products, null, 2)}</pre>
}
