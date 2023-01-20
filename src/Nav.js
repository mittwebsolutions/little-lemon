import { Link, useMatch, useResolvedPath } from "react-router-dom"
import "./Nav.css"
export default function Nav() {
  return (
    <nav className="nav">
      <Link to="/" className="logo">
        Litte Lemon
      </Link>
      <ul>
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/about">About</CustomLink>
        <CustomLink to="/menu">Menu</CustomLink>
        <CustomLink to="/reservations">Resevations</CustomLink>
        <CustomLink to="/order">Order Online</CustomLink>
        <CustomLink to="/login">Login</CustomLink>
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}