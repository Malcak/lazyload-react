import { Suspense } from 'react'
import { Router, Switch, Route } from 'wouter'
import ActiveLink from '../components/ActiveLink'
import routes from './routes'

import logo from '../logo.svg'

const Nav = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
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
    </Suspense>
  )
}

export default Nav
