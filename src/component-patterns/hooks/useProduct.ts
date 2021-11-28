import { useState } from 'react'

export const useProduct = (initValue: number) => {
  const [counter, setCounter] = useState(initValue)

  const increaseBy = (value: number) => {
    setCounter(prev => Math.max(prev + value, initValue))
  }

  return { counter, increaseBy }
}
