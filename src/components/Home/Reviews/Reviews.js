import styles from "./Reviews.module.scss";
import Container from "../../UI/Container/Container";
import ReviewCard from "../../UI/ReviewCard/ReviewCard";
import { ROOT_URL } from "../../../Util";

const reviewsData = [
  {
    name: "Jane Mary",
    img: `${ROOT_URL}/pics/istockphoto-1412238352-2048x2048.jpg`,
    rating: "8",
    text: "Authentic and delicious food."
  },
  {
    name: "John Doe",
    img: `${ROOT_URL}/pics/istockphoto-544357744-2048x2048.jpg`,
    rating: "8.5",
    text: "Great ambiance and friendly staff."
  },
  {
    name: "Jean Billie",
    img: `${ROOT_URL}/pics/istockphoto-1284603827-2048x2048.jpg`,
    rating: "9",
    text: "Great place for an afternoon hangout!"
  },
  {
    name: "Jude Aloha",
    img: `${ROOT_URL}/pics/istockphoto-1232764960-2048x2048.jpg`,
    rating: "8",
    text: "Will definitely visit again!"
  }
];


const Reviews = () => {
  return (
    <div className={styles.reviews} id="reviews">
      <Container className={styles.container}>
        <h2 className="heading">Testimonials</h2>
        <div className={styles["card-list"]}>
          { reviewsData.map((e, i) => <ReviewCard key={i} className={styles.card} {...e}></ReviewCard>)}
        </div>
      </Container>
    </div>
  );
};

export default Reviews;