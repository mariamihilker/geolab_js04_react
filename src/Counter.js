import { useEffect, useState } from "react";

export default function Counter() {
  let [currentValue, setCurrentValue] = useState(10);
  let [title, setTitle] = useState('');

  useEffect(() => {
    let sint = setInterval(() => {
      console.log('test');
      setCurrentValue(val => val + 1);
    }, 1000);

    return () => {
      clearInterval(sint);
    }
  }, []);

  useEffect(() => {
    let sint = setInterval(() => {
      console.log('test');
      setCurrentValue(val => val + 1);
    }, 1000);

    return () => {
      clearInterval(sint);
    }
  }, []);
  
  function increase() {
    let newValue = currentValue + 1;
    setCurrentValue(newValue);
  }

  function updateTitle() {
    setTitle('Current value is ' + currentValue);
  }

  return (
    <div>
      <h1>{title}</h1>
      <p>{currentValue}</p>
      <button onClick={increase}>submit</button>
      <button onClick={updateTitle}>submit</button>
    </div>
  )
}