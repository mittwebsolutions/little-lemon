import styles from './Header.module.scss';
import Nav from '../Nav/Nav';
import Container from "../UI/Container/Container";
import { ROOT_URL } from "../../Util";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Container className={styles.container}>
        <Link to="/">
          <img className={styles.logo} alt="logo" src={`${ROOT_URL}/logo.png`}></img>
        </Link>
        <div className={styles["nav-container"]}>
          <button className={styles["nav-button"]}>{">"}</button>
          <Nav className={styles["nav-header"]}></Nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;