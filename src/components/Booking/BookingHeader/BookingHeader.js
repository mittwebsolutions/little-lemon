import styles from "../Booking.module.scss";

const HEADER_TITLE = "Reserve a Table";

const BookingHeader = ({ subTitle, goBack }) => {
  return (
    <div className={styles.header}>
      <h2>{HEADER_TITLE}</h2>
      <div>
        <div className={styles["back-button"]} onClick={goBack}>{`<`}</div>
        <h3>{subTitle}</h3>
      </div>
    </div>
  );
};

export default BookingHeader;