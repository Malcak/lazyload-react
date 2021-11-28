import { useState } from 'react'
import { Product, ProductInCart } from '../interfaces/interfaces'

export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCart
  }>({})

  const onProducCountChange = ({
    count,
    product
  }: {
    count: number
    product: Product
  }) => {
    setShoppingCart(prevCartState => {
      // not truly control props

      if (count === 0) {
        const { [product.id]: toDelete, ...rest } = prevCartState
        return rest
      }

      return {
        ...prevCartState,
        [product.id]: { ...product, count }
      }
    })
  }

  return { shoppingCart, onProducCountChange }
}
