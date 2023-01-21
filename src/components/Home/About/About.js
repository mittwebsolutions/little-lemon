import styles from "./About.module.scss";
import Container from "../../UI/Container/Container";
import { ROOT_URL } from "../../../Util";

const About = () => {
  return (
    <div className={styles.about} id="about">
      <Container className={styles.container}>
        <div className={styles.text}>
          <h2 className="heading">Little Lemon</h2>
          <h3 className="heading">Chicago</h3>
          <p>
            Little Lemon is a charming neighborhood bistro that serves
            simple food and classic cocktails in a lively but casual environment.
            The restaurant features a locally-sourced menu with daily specials.
          </p>
        </div>
        <div className={styles.pic}>
          <img className={styles.pic1} alt="about-pic" src={`${ROOT_URL}/pics/istockphoto-1160577908-1024x1024.jpg`}></img>
          <img className={styles.pic2} alt="about-pic" src={`${ROOT_URL}/pics/istockphoto-1316145932-1024x1024.jpg`}></img>
        </div>
      </Container>
    </div>
  );
};

export default About;