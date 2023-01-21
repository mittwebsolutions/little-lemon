import styles from "./Container.module.scss";

const Container = ({className, children}) => {
  const fullClassName = (!className || className.length === 0) ? 
    styles.container : `${styles.container} ${className}`;
  return (
    <div className={fullClassName}>
      {children}
    </div>
  );
}

export default Container;