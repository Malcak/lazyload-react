export interface Product {
  id: string
  title: string
  img?: string
}

export interface ProductContextProps {
  counter: number
  // eslint-disable-next-line no-unused-vars
  increaseBy: (value: number) => void
  product: Product
}
