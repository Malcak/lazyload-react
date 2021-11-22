import { lazy, LazyExoticComponent } from 'react'
import LazyPage1 from '../lazyload/pages/LazyPage1'

type JSXComponent = () => JSX.Element

interface Route {
  path: string
  name: string
  Component: LazyExoticComponent<JSXComponent> | JSXComponent
}

// const Lazy1 = lazy(() => import('../lazyload/pages/LazyPage1'))
const Lazy2 = lazy(() => import('../lazyload/pages/LazyPage2'))
const Lazy3 = lazy(() => import('../lazyload/pages/LazyPage3'))

const router: Route[] = [
  {
    path: '/lazy1',
    name: 'Lazy1',
    Component: LazyPage1
  },
  {
    path: '/lazy2',
    name: 'Lazy2',
    Component: Lazy2
  },
  {
    path: '/lazy3',
    name: 'Lazy3',
    Component: Lazy3
  }
]

export default router
