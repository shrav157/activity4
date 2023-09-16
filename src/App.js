import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Login from './components/Login';
import Signup from './components/Signup';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App(){
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path ="/Login" element={<Login/>}/>
      <Route path ="/Signup" element={<Signup/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;