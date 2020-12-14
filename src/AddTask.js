import { useEffect, useRef, useState } from "react";
import axios from 'axios';

export default function AddTask(props) {
  const [value, setValue] = useState('');
  const inputEl = useRef();

  function onAddTask(event) {
    event.preventDefault();
    axios.post('https://us-central1-js04-b4877.cloudfunctions.net/tasks/create', {
      text: value
    })
      .then((response) => {
        if (response.data.status === 'ok') {
          props.onAddTask(response.data.id, value);
        }
      })
  }

  useEffect(() => {
    inputEl.current.focus();
  }, []);

  return (
    <form onSubmit={onAddTask}>
      <input
        ref={inputEl}
        type="text"
        onChange={(event) => setValue(event.target.value)}
        value={value}
      />
      <button>Add Task</button>
    </form>
  )
}