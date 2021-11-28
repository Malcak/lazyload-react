import styles from '../styles/styles.module.css'
import noImage from '../assets/no-image.jpg'
import { useProduct } from '../hooks/useProduct'
import { createContext, useContext } from 'react'

interface Props {
  children?: React.ReactNode
  product: Product
}
interface Product {
  id: string
  title: string
  img?: string
}

interface ProductContextProps {
  counter: number
  // eslint-disable-next-line no-unused-vars
  increaseBy: (value: number) => void
  product: Product
}

const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext

export const ProductImage = ({ img }: { img?: string }) => {
  const { product } = useContext(ProductContext)
  let imgToShow: string

  if (img) {
    imgToShow = img
  } else if (product.img) {
    imgToShow = product.img
  } else {
    imgToShow = noImage
  }

  return (
    <img className={styles.productImg} src={imgToShow} alt="Product Image" />
  )
}

export const ProductTitle = ({ title }: { title?: string }) => {
  const { product } = useContext(ProductContext)

  return (
    <span className={styles.productDescription}>
      {title ? title : product.title}
    </span>
  )
}

export const ProductButtons = () => {
  const { counter, increaseBy } = useContext(ProductContext)

  return (
    <div className={styles.buttonsContainer}>
      <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
        -
      </button>
      <div className={styles.countLabel}>{counter}</div>
      <button className={styles.buttonAdd} onClick={() => increaseBy(+1)}>
        +
      </button>
    </div>
  )
}

export const ProductCard = ({ children, product }: Props) => {
  const { counter, increaseBy } = useProduct(0)

  return (
    <Provider value={{ counter, increaseBy, product }}>
      <div className={styles.productCard}>{children}</div>
    </Provider>
  )
}

ProductCard.Image = ProductImage
ProductCard.Title = ProductTitle
ProductCard.Buttons = ProductButtons
