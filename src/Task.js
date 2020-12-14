//import Button from "./Button";
import styles from './Task.module.css';

export default function Task(props) {
  return (
    <li className={styles.listItem}>
      <input className={styles.itemCheckbox} type="checkbox" />
      <span>{props.text}</span>
      <button 
        className={styles.itemButton}
        onClick={() => {
          if (typeof props.onDelete === 'function') {
            props.onDelete(props.id);
          }
          // props.onDelete?.(props.id);
        }}>
          Delete
        </button>
    </li>
  )
}