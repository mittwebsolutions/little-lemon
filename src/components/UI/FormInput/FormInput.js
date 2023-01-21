import styles from "./FormInput.module.scss";

const FormInput = (props) => {
  return (
    <div className={styles["input-field"]}>
      <label htmlFor={props.id}>{props.label}</label>
      {(props.type === "select" && props.options !== undefined)
        ? <select
          id={props.id}
          name={props.name}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
          ref={props.useRef}
        >
          {props.options.map((e, i) => <option key={i} value={e}>{e}</option>)}
        </select>
        : <input
          type={props.type}
          id={props.id}
          name={props.name}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
          ref={props.useRef}
        />}
      <div className={styles["error"]}>{props.error}</div>
    </div>
  );
};

export default FormInput;