import React from "react";
import {Link,useNavigate} from 'react-router-dom';
import logo from '../Assets/png/logo-black.png';
const Nav=()=>{
    const auth=localStorage.getItem('user');
    const Navigate=useNavigate();
    const logout=()=>{
        localStorage.clear();
        Navigate('/signup')
    }
    return(
        <div>
        <img src={logo} className="logo" alt="brand" />
        { auth ?

             <ul className="nav-ul">
                <li><Link to="/">Products</Link></li>
                <li><Link to="/add">Add Products</Link></li>
                <li><Link to="/update">Update Products</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link onClick={logout} to="/signup">LogOut ({JSON.parse(auth).name})</Link></li>

             </ul> :
             <ul className="nav-ul nav-right">
             <li><Link to="/signup">Sign Up</Link></li>
                    <li><Link to="/Login">Login</Link></li>
             </ul>
        }
        </div>

    )
}

export default Nav;