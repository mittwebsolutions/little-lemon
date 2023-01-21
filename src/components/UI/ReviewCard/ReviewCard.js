import styles from "./ReviewCard.module.scss";

const ReviewCard = (props) => {
  const fullClassName = (!props.className || props.className.length === 0) ? styles.card : `${styles.card} ${props.className}`;
  const onClick = (!props.href || props.href.length === 0) ?
    props.onClick :
    (e) => {
      e.preventDefault();
      window.location.href = props.href;
    };
  return (
    <div className={fullClassName} onClick={onClick} tabIndex={0}>
      <div className={styles.rating}>
        Rating: <span>{props.rating}</span> / 10
      </div>
      <div className={styles.user}>
        <img alt={props.name} src={props.img}></img>
        <div>{props.name}</div>
      </div>
      <p>{props.text}</p>
    </div>
  );
};

export default ReviewCard;