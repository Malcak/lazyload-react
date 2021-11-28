import { Props as ProductCardProps } from '../components/ProductCard'
import { Props as ProductImageProps } from '../components/ProductImage'
import { Props as ProductTitleProps } from '../components/ProductTitle'
import { Props as ProductButtonsProps } from '../components/ProductButtons'

/* eslint-disable no-unused-vars */
export interface Product {
  id: string
  title: string
  img?: string
}

export interface ProductContextProps {
  counter: number
  increaseBy: (value: number) => void
  product: Product
}

export interface ProductCardHOCProps {
  ({ children, product }: ProductCardProps): JSX.Element
  Image: ({ img }: ProductImageProps) => JSX.Element
  Title: ({ title }: ProductTitleProps) => JSX.Element
  Buttons: ({ className }: ProductButtonsProps) => JSX.Element
}
