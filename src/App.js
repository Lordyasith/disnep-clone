import React from 'react';


import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import Home from './components/Home';
import { BrowserRouter as Router,
  Routes,
  Route,
  Link
 } from 'react-router-dom';
 import Detail from './components/Detail';

function App() {
  return (
    <div className="App">
    <Router>
      <Header/>
      <Routes>
        <Route path="/detail" element={<Detail/>}/>
      </Routes>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      <Routes>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </Router>
      
    </div>
  );
}

export default App;
