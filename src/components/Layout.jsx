import { Container } from '@mui/system'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <>
      <Container maxWidth="md">
        <Outlet />
      </Container>
    </>
  )
}
