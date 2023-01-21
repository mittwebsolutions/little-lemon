import styles from "./Nav.module.scss";
import { HashLink } from 'react-router-hash-link';

const navItems = [
  {text: "Home", link: `/`},
  {text: "About", link: `/#about`},
  {text: "Menu", link: `/menu`},
  {text: "Reservations", link: `/booking`},
  {text: "Order Online", link: `/order`},
  {text: "Login", link: `/login`},
];

const Nav = ({className}) => {
  const fullClassName = (!className || className.length === 0) ?
    styles.nav : `${styles.nav} ${className}`;
  return (
    <nav className={fullClassName}>
      <ul>
        {navItems.map((e, i) => <li key={i}><HashLink to={e.link}>{e.text}</HashLink></li>)}
      </ul>
    </nav>
  );
};

export default Nav;