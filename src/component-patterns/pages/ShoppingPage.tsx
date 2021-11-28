import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons
} from '../components'
import { Product } from '../interfaces/interfaces'
import '../styles/custom-styles.css'

const products: Product[] = [
  {
    id: '1',
    title: 'Coffee Mug',
    img: './coffee-mug.png'
  },
  {
    id: '2',
    title: 'Meme Mug',
    img: './coffee-mug2.png'
  }
]

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            className="bg-dark text-white"
          >
            <ProductImage className="custom-image" />
            <ProductTitle className="text-white" />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>
      <div className="shopping-cart">
        <ProductCard
          product={products[0]}
          className="bg-dark text-white"
          style={{ width: '100px' }}
        >
          <ProductImage className="custom-image" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>
        <ProductCard
          product={products[1]}
          className="bg-dark text-white"
          style={{ width: '100px' }}
        >
          <ProductImage className="custom-image" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>
      </div>
    </div>
  )
}
