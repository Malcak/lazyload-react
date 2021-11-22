import { Router, Switch, Route } from 'wouter'
import ActiveLink from '../../components/ActiveLink'
import LazyPage1 from '../pages/LazyPage1'
import LazyPage2 from '../pages/LazyPage2'
import LazyPage3 from '../pages/LazyPage3'

const LazyLayout = () => {
  return (
    <div>
      <h1>LazyLayout Page</h1>
      <Router base="/lazyload">
        <ul>
          <li>
            <ActiveLink href="/lazy1">Lazy 1</ActiveLink>
          </li>
          <li>
            <ActiveLink href="/lazy2">Lazy 2</ActiveLink>
          </li>
          <li>
            <ActiveLink href="/lazy3">Lazy 3</ActiveLink>
          </li>
        </ul>

        <Switch>
          <Route path="/lazy1">
            <LazyPage1 />
          </Route>
          <Route path="/lazy2">
            <LazyPage2 />
          </Route>
          <Route path="/lazy3">
            <LazyPage3 />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default LazyLayout
