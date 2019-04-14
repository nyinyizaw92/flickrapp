import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import {connect} from 'react-redux'
import SignOutLink from './SignOutLink'
import SignInLink from './SignInLink'
import SearchBar from './SearchBar'


class Navbar extends React.Component{
    render(){
        const logint = this.props.currentUser;
        console.log(logint)

        const Link = logint.id !==undefined ? <SignInLink /> :<SignOutLink />;
        return (
            <nav className="nav-wrapper grey darken-3">
                <div className="container">
                    <Link to='/' className="brand-logo">Home</Link>
                    <ul className="right">
                        <li><NavLink to=""><SearchBar /></NavLink></li>
                        {Link}
                    </ul>
                   
                </div>
            </nav>
        )
    }
   
}

const mapStateToProps = state =>({
    currentUser:state.currentUser
})

export default connect(mapStateToProps)(Navbar)