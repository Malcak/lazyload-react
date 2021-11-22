import { lazy, LazyExoticComponent } from 'react'
import { NoLazy } from '../lazyload/pages/NoLazy'

type JSXComponent = () => JSX.Element

interface Route {
  to: string
  path: string
  name: string
  Component: LazyExoticComponent<JSXComponent> | JSXComponent
}

const lazyLayout = lazy(() => import('../lazyload/layout/LazyLayout'))

const router: Route[] = [
  {
    to: '/lazyload/',
    path: '/lazyload/:sub*',
    name: 'LazyLayout',
    Component: lazyLayout
  },
  {
    to: '/no-lazy',
    path: '/no-lazy',
    name: 'no-lazy',
    Component: NoLazy
  }
]

export default router
