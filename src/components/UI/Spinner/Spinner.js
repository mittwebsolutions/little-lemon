import styles from "./Spinner.module.scss";

const Spinner = (props) => {
  let className = styles.spinner;
  if (props.hidden) {
    className += " " + styles.hidden;
  }
  return (
    <div className={className}></div>
  );
}

export default Spinner;