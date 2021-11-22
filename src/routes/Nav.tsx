import { Router, Switch, Route } from 'wouter'
import ActiveLink from '../components/ActiveLink'
import { LazyPage1, LazyPage2, LazyPage3 } from '../lazyload/pages/index'

import logo from '../logo.svg'

const Nav = () => {
  return (
    <Router>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            <li>
              <ActiveLink href="/lazy1">Home</ActiveLink>
            </li>
            <li>
              <ActiveLink href="/lazy2">About</ActiveLink>
            </li>
            <li>
              <ActiveLink href="/lazy3">Users</ActiveLink>
            </li>
          </ul>
        </nav>

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
      </div>
    </Router>
  )
}

export default Nav
