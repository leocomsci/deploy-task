import { useState, useEffect } from "react";
import "./App.css";
import Homepage from "./Homepage";
import SignIn from "./SignIn";
import SignUp from "./SignUp"
import { Route, Routes } from 'react-router-dom';


function App() {
    return(
        <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/signIn"element={<SignIn/>}/>
        <Route path="/signUp"element={<SignUp/>}/> 
      </Routes>
    
      )
  
}

export default App;