import './App';
import { Link } from 'react-router-dom';
import {UserContext}from './context/use.context'
import {useContext}from "react"

function Homepage (){
    const {currentUser}=useContext(UserContext)
    const { setCurrentUser } = useContext(UserContext)
    
    return(
    <form action="/" method="get">
        <button className="head1">
            DEV@DEAKIN
        </button>
        <input
            type="text"
            id="header-search"
            placeholder="Search blog posts"
            name="s" 
            className='SearchInput'
        />
        <button type="submit" className="searchButton" >Post</button>
       
        {currentUser &&<button className="searchButton" onClick={()=>setCurrentUser("")}>Sign out</button>||
        <Link to='/signIn'>
        <button type="submit" className="searchButton" >Sign In</button>

        </Link>}
        {currentUser &&<h1>{currentUser}</h1>}
        
    </form>
);}

export default Homepage;