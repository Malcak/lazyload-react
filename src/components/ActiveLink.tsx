// import { ReactElement } from 'react'
import { ReactChild } from 'react'
import { Link, useRoute } from 'wouter'

interface ActiveLinkProps {
  href: string
  children: ReactChild
}

const ActiveLink = (props: ActiveLinkProps) => {
  const [isActive] = useRoute(props.href)
  return (
    <Link {...props}>
      <a className={isActive ? 'nav-active' : ''}>{props.children}</a>
    </Link>
  )
}

export default ActiveLink
