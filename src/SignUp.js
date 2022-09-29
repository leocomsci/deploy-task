import { useState} from "react";
import './App.css';
import { useNavigate } from 'react-router-dom';
import { db } from "./firebase-config";
import { collection, addDoc, query, where, getDocs} from "firebase/firestore";

function SignUp(){
    const navigate =  useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");
    async function createUser() {
        const usersCollectionRef = collection(db, "users");
        const q = query(usersCollectionRef, where("email", "==", email));
        const querySnapshot = await getDocs(q);
        if (querySnapshot.size===0){
            if(email===""||name===""||password===""||confirmPassword!==password){
                console.log("Invalid input")
            }
            else {
                await addDoc(usersCollectionRef, { name: name, email:email,password:password});
                navigate('/signIn')

        }
        }
        else(console.log("false"))
    }
    
    return(
    <div className="SignUp">
    
        <h1 className='h1'>Create a DEV@DEAKIN Account</h1>
        <div className="smallform">
            <label className='label1'>Name*</label>
            <input className="inside" onChange={(event)=>{setName(event.target.value)}}></input>
            
        </div>
        <div className="smallform">
            <label className='label1'>Email*</label>
            <input className="inside" onChange={(event)=>{setEmail(event.target.value)}}></input>
            
        </div>
        <div className="smallform">
            <label className='label2'>password*</label>
            <input className="inside" onChange={(event)=>{setPassword(event.target.value)}}></input>
            
        </div>
        <div className="smallform">
            <label>confirmPassword*</label>
            <input className="inside" onChange={(event)=>{setconfirmPassword(event.target.value)}}></input>
        
        </div>
        <button className="Login createBtn" onClick={()=>{createUser()}}>Create</button>
        
    </div>
    );
}
export default SignUp