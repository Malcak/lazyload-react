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
      const productInCart: ProductInCart = prevCartState[product.id] || {
        ...product,
        count: 0
      }

      if (Math.max(productInCart.count + count, 0) > 0) {
        productInCart.count += count
        return {
          ...prevCartState,
          [product.id]: productInCart
        }
      }

      const { [product.id]: toDelete, ...rest } = prevCartState
      return rest
    })
  }

  return { shoppingCart, onProducCountChange }
}

/* old onProducCountChange implementation without truly control props
  if (count === 0) {
    const { [product.id]: toDelete, ...rest } = prevCartState
    console.log(toDelete)
    return rest
  }

  return {
    ...prevCartState,
    [product.id]: { ...product, count }
  }
*/
