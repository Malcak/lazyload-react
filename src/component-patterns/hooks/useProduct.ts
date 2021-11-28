import { useEffect, useRef, useState } from 'react'
import { onChangeArgs, Product } from '../interfaces/interfaces'

interface useProductArgs {
  product: Product
  value?: number
  // eslint-disable-next-line no-unused-vars
  onChange?: (args: onChangeArgs) => void
}

export const useProduct = ({
  onChange,
  product,
  value = 0
}: useProductArgs) => {
  const [counter, setCounter] = useState(value)

  const isControlled = useRef(!!onChange)

  const increaseBy = (value: number) => {
    if (isControlled.current && onChange) {
      return onChange({ count: value, product })
    }

    const nextValue = Math.max(counter + value, 0)
    setCounter(nextValue)
    onChange && onChange({ count: nextValue, product })
  }

  useEffect(() => {
    setCounter(value)
  }, [value])

  return { counter, increaseBy }
}
