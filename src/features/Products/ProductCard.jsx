import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import { toRub } from './toRub'

export const ProductCard = ({ product }) => {
  return (
    <Card>
      <CardMedia height={250} image={product.image} component="img" />
      <CardContent>
        <Typography>{product.name}</Typography>
        <Typography variant="caption">
          {toRub().format(product.price)}
        </Typography>
      </CardContent>
    </Card>
  )
}
