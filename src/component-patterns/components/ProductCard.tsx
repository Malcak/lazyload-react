import styles from '../styles/styles.module.css'
import { useProduct } from '../hooks/useProduct'
import { createContext } from 'react'
import {
  onChangeArgs,
  Product,
  ProductContextProps,
  InitialValues
} from '../interfaces/interfaces'

export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext

export interface Props {
  children?: React.ReactNode
  className?: string
  style?: React.CSSProperties
  product: Product
  initialValues?: InitialValues
  value?: number
  // eslint-disable-next-line no-unused-vars
  onChange?: (args: onChangeArgs) => void
}

export const ProductCard = ({
  children,
  product,
  className,
  style,
  initialValues,
  value,
  onChange
}: Props) => {
  const { counter, increaseBy } = useProduct({
    onChange,
    product,
    value,
    initialValues
  })

  return (
    <Provider value={{ counter, increaseBy, product }}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children}
      </div>
    </Provider>
  )
}
