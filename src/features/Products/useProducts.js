import { useQuery } from '@tanstack/react-query'
import { api } from '../../api.fetch'

export const useProducts = () =>
  useQuery(['products'], async () => {
    const res = await api.get('products')
    return res.data.items
  })
