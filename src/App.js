import React, { Component } from 'react';
import { BrowserRouter,Switch,Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import SignUp from './components/Register/SignUp'
import SignIn from './components/Register/SignIn'
import SignInLink from './components/Navbar/SignInLink'
class App extends Component {
  
  render() {
    
    return (
      
      <BrowserRouter>
        <div className="App">
          <Navbar />
          
          <Switch>
            <Route path='/signup' component={SignUp} />
            <Route path='/signin' component={SignIn} />
            <Route path='/home' component={SignInLink} />
          </Switch>
        </div>
      </BrowserRouter>
     
    );
  }
}


export default  App