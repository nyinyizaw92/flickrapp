import React from 'react' 
import { NavLink } from 'react-router-dom'

class SearchBar extends React.Component{
    render(){
        const {serachstyle} = {
            width:'300px',
            height:'20px'
        }
        return(
        <React.Fragment>
             <nav class="white">
                <div class="nav-wrapper">
                <form>
                    <div class="input-field">
                    <input id="search" type="search" length="350px" style={serachstyle} required/>
                    <label class="label-icon" for="search"><i class="material-icons">search</i></label>
                    <i class="material-icons">close</i>
                    </div>
                </form>
                </div>
            </nav>
        </React.Fragment>
      
        )
    }
}

export default SearchBar