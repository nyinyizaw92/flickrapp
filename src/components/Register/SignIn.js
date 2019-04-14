import React from 'react'
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Link
  } from "react-router-dom";
import { connect } from "react-redux";
import { loginUserEvent,fetchUsers } from "../../Actions/UserActions"


class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            firstName:'',
            lastName:'',
            password:'',
            loginTrue:false,
           
        }
        this.props.fetchUsers();
    }

    handleChange = (e) =>{
       this.setState({
        [e.target.id] : e.target.value,
       })
    }

    handleSubmit = (e) =>{
        e.preventDefault()
       // console.log(this.state)
        const fname = this.state.firstName;
        const lname = this.state.lastName;
        const pass= this.state.password;
        

        const currentUser = this.props.users.find(user => user.firstName == fname && user.lastName==lname
        && user.password == pass);
          
            if(currentUser){
                this.props.loginUserEvent(
                    currentUser,
                  () => {
                    this.setState({ loginTrue: true });
                  }
                );
              }
              else{
                alert("Wrong password");
              }
    }

    render(){
       
        if(this.state.loginTrue) return <Redirect to="/`${this.state.loginTrue}`" />
        return(
            <div className="container">
        <form onSubmit={this.handleSubmit} className="white" id="regform">
            <h5 className="grey-text text-darken-3">
                Login
            </h5>
            <div className="input-field">
                <label htmlFor="firstName">FirstName</label>
                <input type="text" id="firstName" onChange={this.handleChange} required/>
            </div>
            <div className="input-field">
                <label htmlFor="lastName">LastName</label>
                <input type="text" id="lastName" onChange={this.handleChange} required/>
            </div>
            <div className="input-field">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" onChange={this.handleChange} required/>
            </div>
            <div className="input-field">
                <button className="btn red lighten-1 z-depth" type="submit">Login</button>
            </div>
        </form>
      </div>
        )
    }
}

const mapStateToProps = (state) => ({
    users : state.users  
  });
  
const mapDispatchToProps = {
    loginUserEvent,
    fetchUsers
  }

export default connect(mapStateToProps,mapDispatchToProps)(SignIn)