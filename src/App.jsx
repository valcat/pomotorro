import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer';
import PomoApp from './components/Main/PomoApp';

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<PomoApp />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
