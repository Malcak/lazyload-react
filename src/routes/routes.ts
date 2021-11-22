import { LazyPage1, LazyPage2, LazyPage3 } from '../lazyload/pages'

interface Route {
  path: string
  name: string
  Component: () => JSX.Element
}

const router: Route[] = [
  {
    path: '/lazy1',
    name: 'Lazy1',
    Component: LazyPage1
  },
  {
    path: '/lazy2',
    name: 'Lazy2',
    Component: LazyPage2
  },
  {
    path: '/lazy3',
    name: 'Lazy3',
    Component: LazyPage3
  }
]

export default router
