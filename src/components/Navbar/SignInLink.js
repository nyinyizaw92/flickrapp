import React from 'react'
import { NavLink } from 'react-router-dom'
import SearchBar from './SearchBar'

const SignInLink = () =>{
 
    return (
        
       <ul className="right">
           
            <li><NavLink to='/signup'>Add Image </NavLink></li>
            <li><NavLink to='/'>Log Out</NavLink></li>
           
       </ul>
    )
}


export default SignInLink