import styles from "./SpecialCard.module.scss";

const SpecialCard = (props) => {
  const fullClassName = (!props.className || props.className.length === 0) ? styles.card : `${styles.card} ${props.className}`;
  const onClick = (!props.href || props.href.length === 0) ?
    props.onClick :
    (e) => {
      e.preventDefault();
      window.location.href = props.href;
    };
  return (
    <div className={fullClassName} onClick={onClick} tabIndex={0}>
      <img alt={props.name} src={props.img}></img>
      <div className={styles["card-body"]}>
        <div className={styles.header}>
          <span>{props.name}</span>
          <span>{props.price}</span>
        </div>
        <p>{props.text}</p>
        <a href="/order">Order a delivery</a>
      </div>
    </div>
  );
};

export default SpecialCard;