import React from 'react';

import './App.css';

import Header from './components/header/Header';
import About from './components/about/About';
import Cases from './components/cases/Cases';

function App() {
  return (
    <div className="app">
      <Header />
      <About />
      <Cases />
    </div>
  );
}

export default App;
