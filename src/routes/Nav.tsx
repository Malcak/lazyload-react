import { Router, Switch, Route } from 'wouter'
import ActiveLink from '../components/ActiveLink'
import routes from './routes'
// import { LazyPage1, LazyPage2, LazyPage3 } from '../lazyload/pages'

import logo from '../logo.svg'

const Nav = () => {
  return (
    <Router>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            {routes.map(({ path, name }) => (
              <li key={path}>
                <ActiveLink href={path}>{name}</ActiveLink>
              </li>
            ))}
          </ul>
        </nav>

        <Switch>
          {routes.map(({ path, Component }) => (
            <Route key={path} path={path}>
              {<Component />}
            </Route>
          ))}
        </Switch>
      </div>
    </Router>
  )
}

export default Nav
