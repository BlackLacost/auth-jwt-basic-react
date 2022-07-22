import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { ProductsPage } from './pages/ProductsPage'

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<ProductsPage />} />
      </Route>
    </Routes>
  )
}
