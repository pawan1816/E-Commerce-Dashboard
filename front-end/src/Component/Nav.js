import React from "react";
import {Link,useNavigate} from 'react-router-dom';
const Nav=()=>{
    const auth=localStorage.getItem('user');
    const Navigate=useNavigate();
    const logout=()=>{
        localStorage.clear();
        Navigate('/signup')
    }
    return(
        <div>
             <ul class="nav-ul">
                <li><Link to="/">Products</Link></li>
                <li><Link to="/add">Add Products</Link></li>
                <li><Link to="/update">Update Products</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li>{!auth ? <Link to="/signup">Sign Up</Link> :
                <Link onClick={logout} to="/signup">LogOut</Link>}
                </li>
             </ul>
        </div>

    )
}

export default Nav;