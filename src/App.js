import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';



function App() {
  return (
    <>
      <Navbar title="TextUtils" Abt="About"/>
      <div className='container my-4'>
        <TextForm heading="Enter the text to analyze below"/>
      </div>
    
    </>
  );
}

export default App;





