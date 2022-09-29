import { useState, useEffect, React, useContext } from "react";
import "./App.css";
import { db } from "./firebase-config";
import {

  getDocs,
  collection,
  query,
  where

} from "firebase/firestore";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { UserContext } from "./context/use.context";

function SignIn() {
  const navigate = useNavigate()
  const { setCurrentUser } = useContext(UserContext)
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  async function checkUser() {
    const usersCollectionRef = collection(db, "users");
    const q = query(usersCollectionRef, where("email", "==", email));

    const querySnapshot = await getDocs(q);
    if (querySnapshot.size == 0) {
      console.log("Your email are incorrect, please try again")
    } else {
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots

        if (password === doc.data().password) {
          setCurrentUser(doc.data().email)
          console.log(doc.data().email)
          navigate('/')
        }
        else console.log("fail")
      });
        }
      }

    return (
        <div className="LogIn">
            <Link to ="../signUp">
            <button className="SignUpBtn">Sign up</button>
            </Link>
            <label>Your email</label>
            <input onChange={(event)=>{setEmail(event.target.value)}}></input>
            <label>Your password</label>
            <input onChange={(event)=>{setPassword(event.target.value)}}></input>
            <button className="Login" onClick={() => {checkUser()}}>Login</button>
        </div>
    );
}

export default SignIn;