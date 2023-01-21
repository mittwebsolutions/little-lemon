import styles from './Footer.module.scss';
import Container from "../UI/Container/Container";
import Nav from "../Nav/Nav";
import { ROOT_URL } from "../../Util";

const contactInfo = {
  "address": "1234 E 67th St, Chicago, IL 60608, United States",
  "phone": "+1 (234) 5678901",
  "email": "enquiry@littlelemon.com",
  "instagram": "https://www.instagram.com/",
  "facebook": "https://www.facebook.com/"
};

const Footer = () => {
  return (
    <footer>
      <Container className={styles.container}>
        <a href="/">
          <img className={styles.logo2} alt="logo2" src={`${ROOT_URL}/logo2.png`}></img>
        </a>
        <div className={styles["grid-container"]}>
          <div>
            <div className={styles["grid-label"]}>Doormat Navigation</div>
            <div className={styles["grid-content"]}>
              <Nav className={styles["nav-footer"]}></Nav>
            </div>
          </div>
          <div>
            <div className={styles["grid-label"]}>Contact</div>
            <div className={styles["grid-content"]}>
              <ul>
                <li>{contactInfo.address}</li>
                <li>{contactInfo.phone}</li>
                <li><a href={"mailto:" + contactInfo.email}>{contactInfo.email}</a></li>
              </ul>
            </div>
          </div>
          <div>
            <div className={styles["grid-label"]}>Social Media Links</div>
            <div className={styles["grid-content"]}>
              <ul>
                <li><a href={contactInfo.instagram}>Instagram</a></li>
                <li><a href={contactInfo.facebook}>Facebook</a></li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;