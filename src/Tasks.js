import AddTask from "./AddTask";
import Task from "./Task";
import axios from 'axios';
import { useEffect, useState } from "react";

const baseUrl = 'https://us-central1-js04-b4877.cloudfunctions.net/tasks';

export default function Tasks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get(baseUrl)
      .then(response => {
        setTasks(response.data.data);
      })
      .catch(error => {
        console.log(error);
      })
  }, []);

  function onAddTask(id, text) {
    let newTasks = [
      {
        id: id,
        text: text,
        completed: false
      },
      ...tasks
    ];
    setTasks(newTasks);
  }

  function onDelete(id) {
    console.log(id)
    axios.delete(`${baseUrl}/${id}`)
    .then(res => {
      const del = tasks.filter(employee => id !== employee.id)
      setTasks(del)
  })
  }

  return (
    <>
      <AddTask onAddTask={onAddTask} />
      {
        tasks.map((task, i) => (
          <Task
            key={task.id}
            text={task.text}
            id={task.id}
            completed={task.completed}
            onDelete={onDelete}
          />
        ))
      }
    </>
  )
}