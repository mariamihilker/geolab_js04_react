// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Counter from './Counter';
import Task from './Task';

const tasks = [
  {id: 1, text: 'lorem ipsum 1', completed: true},
  {id: 2, text: 'lorem ipsum 2', completed: false},
  {id: 3, text: 'lorem ipsum 3', completed: true},
  {id: 4, text: 'lorem ipsum 4', completed: true},
];

function App() {
  const [showCounter, setShowCounter] = useState(true);

  return (
    <div className="App">
      <header className="App-header">

        {
          showCounter && <Counter />
        }

        <button onClick={() => setShowCounter(false)}>hide counter</button>

        {/* {
          tasks.map((task, i) => (
            <Task
              key={task.id}
              text={task.text}
              id={task.id}
              completed={task.completed}
              onDelete={'dsdsd'}
            />
          ))
        } */}
      </header>
    </div>
  );
}

export default App;
