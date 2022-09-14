import { Route, Link, BrowserRouter as Router } from 'react-router-dom' 
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function Navbar(props){
          return(
                    <nav class="navbar navbar-expand-sm bg-primary navbar-dark">
                              <div class="container-fluid">
                              <a class="navbar-brand" href="#" onClick={props.welcome}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z"/></svg>Foods Restaurant</a>
                              <a class="navbar-brand" onClick={props.click}>Signup/Login</a>
                              </div>
                    </nav>
          )
}

export default Navbar;