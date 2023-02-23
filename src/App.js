// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './components/About';
// import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
    const []=useState('null');

  return (
    <>
   
    {/* <Alert alert=""/> */}
   
    <Router>
    
    <Navbar/>
   
   
    <Routes>
    <Route element= {<TextForm/>} path='/'></Route>
    <Route element=<About/> path="/about">
          </Route>

    </Routes>
    </Router>
    </>
  
);
}

export default App;
