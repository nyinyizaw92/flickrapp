import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Link
  } from "react-router-dom";
import { connect } from "react-redux";
import { insertUser } from "../../Actions/UserActions"

class SignUp extends Component {
    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:'',
            confirm_password:'',
            firstName:'',
            lastName:'',
            completeRegister: false
        }
    
    }
   
    handleChange = (e) =>{
       this.setState({
            [e.target.id]:e.target.value,
          
       })
    }

    handleSubmit = (e) =>{
       e.preventDefault();
       console.log(this.state);
        if(this.state.password===this.state.confirm_password){
            this.props.insertUser(
                {
                    email:this.state.email,
                    password:this.state.confirm_password,
                    firstName:this.state.firstName,
                    lastName:this.state.lastName
                },
                ()=>{
                    this.setState({
                        completeRegister:true
                    });
                }
            )
        }
    }

  render() {
if(this.state.completeRegister) return <Redirect to="/" />
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white" id="regform">
            <h5 className="grey-text text-darken-3">
                Sign Up
            </h5>
            <div className="input-field">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" onChange={this.handleChange} required/>
            </div>
            <div className="input-field">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" onChange={this.handleChange} required/>
            </div>
            <div className="input-field">
                <label htmlFor="confirm_password">Confirm Password</label>
                <input type="password" id="confirm_password" onChange={this.handleChange} required/>
            </div>
            <div className="input-field">
                <label htmlFor="firstName">FirstName</label>
                <input type="text" id="firstName" onChange={this.handleChange} required/>
            </div>
            <div className="input-field">
                <label htmlFor="lastName">LastName</label>
                <input type="text" id="lastName" onChange={this.handleChange} required/>
            </div>
            <div className="input-field">
                <button className="btn red lighten-1 z-depth" type="submit">Sign Up</button>
            </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = {
    insertUser
}

export default  connect(null,mapDispatchToProps)(SignUp)
