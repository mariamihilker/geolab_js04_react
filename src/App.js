// import logo from './logo.svg';
import React, { useRef, useState } from 'react';
import './App.css';
import Tasks from './Tasks';
import ThemeContext from './ThemeContext';

function App() {
  return (
    <ThemeContext.Provider value="light">
      <div className="App">
        <header className="App-header">
          <div className="content-container">
          <Tasks />
          </div>
        </header>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
