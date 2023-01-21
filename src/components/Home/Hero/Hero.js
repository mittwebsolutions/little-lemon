import styles from "./Hero.module.scss";
import Button from "../../UI/Button/Button";
import Container from "../../UI/Container/Container";
import { ROOT_URL } from "../../../Util";
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.hero}>
      <Container className={styles.container}>
        <div className={styles.text}>
          <h1 className="heading">Little Lemon</h1>
          <h3 className="heading">Chicago</h3>
          <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
          <Button primary onClick={() => navigate("/booking")}>Reserve a Table</Button>
        </div>
        <img className={styles.pic} alt="hero-pic" src={`${ROOT_URL}/pics/istockphoto-104704117-1024x1024.jpg`}></img>
      </Container>
    </div>
  );
};

export default Hero;