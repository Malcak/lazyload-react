import styles from '../styles/styles.module.css'
import { useCallback, useContext } from 'react'
import { ProductContext } from './ProductCard'

export interface Props {
  className?: string
  style?: React.CSSProperties
}

export const ProductButtons = ({ className, style }: Props) => {
  const { counter, increaseBy, maxCount } = useContext(ProductContext)

  const isMaxReached = useCallback(() => {
    return counter === maxCount
  }, [counter, maxCount])

  return (
    <div className={`${styles.buttonsContainer} ${className}`} style={style}>
      <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
        -
      </button>
      <div className={styles.countLabel}>{counter}</div>
      <button
        className={`${styles.buttonAdd} ${isMaxReached() && styles.disabled}`}
        disabled={isMaxReached()}
        onClick={() => increaseBy(+1)}
      >
        +
      </button>
    </div>
  )
}
