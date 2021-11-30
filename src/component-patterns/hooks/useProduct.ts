import { useEffect, useRef, useState } from 'react'
import { onChangeArgs, Product, InitialValues } from '../interfaces/interfaces'

interface useProductArgs {
  product: Product
  initialValues?: InitialValues
  value?: number
  // eslint-disable-next-line no-unused-vars
  onChange?: (args: onChangeArgs) => void
}

export const useProduct = ({
  onChange,
  product,
  initialValues,
  value = 0
}: useProductArgs) => {
  const [counter, setCounter] = useState<number>(initialValues?.count || value)
  const isMounted = useRef(false)

  const increaseBy = (value: number) => {
    let nextValue = Math.max(counter + value, 0)
    if (initialValues?.maxCount) {
      nextValue = Math.min(nextValue, initialValues.maxCount)
    }

    setCounter(nextValue)
    onChange && onChange({ count: nextValue, product })
  }

  const reset = () => {
    setCounter(initialValues?.count || value)
  }

  useEffect(() => {
    if (!isMounted.current) return
    setCounter(value)
  }, [value])

  useEffect(() => {
    isMounted.current = true
  }, [])

  return {
    counter,
    increaseBy,
    reset,
    maxCount: initialValues?.maxCount,
    isMaxCountReached:
      !!initialValues?.count && initialValues.maxCount === counter
  }
}
