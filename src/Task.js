export default function Task(props) {
  return (
    <div>
      <input type="checkbox" />
      <span>{props.text}</span>
      <button
        onClick={() => {
          if (typeof props.onDelete === 'function') {
            props.onDelete(props.id);
          }

          // props.onDelete?.(props.id);
        }}>
          Delete
        </button>
    </div>
  )
}