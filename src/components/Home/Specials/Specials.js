import styles from "./Specials.module.scss";
import Button from "../../UI/Button/Button";
import SpecialCard from "../../UI/SpecialCard/SpecialCard";
import Container from "../../UI/Container/Container";
import { ROOT_URL } from "../../../Util";

const specialsData = [
  {
    name: "Greek Salad",
    img: `${ROOT_URL}/pics/gettyimages-919666108-2048x2048.jpg`,
    price: "$12.99",
    text: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
  },
  {
    name: "Bruschetta",
    img: `${ROOT_URL}/pics/istockphoto-1296272943-1024x1024.jpg`,
    price: "$5.99",
    text: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
  },
  {
    name: "Lemon Dessert",
    img: `${ROOT_URL}/pics/gettyimages-1268428847-2048x2048.jpg`,
    price: "$5.00",
    text: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
  }
];

const Specials = () => {
  return (
    <div className={styles.specials} id="specials">
      <Container>
        <div className={styles.header}>
          <h2 className="heading">Specials</h2>
          <Button primary href="/menu">Online Menu</Button>
        </div>
        <div className={styles["card-list"]}>
          { specialsData.map((e, i) => <SpecialCard key={i} className={styles.card} {...e}></SpecialCard>)}
        </div>
      </Container>
    </div>
  );
};

export default Specials;