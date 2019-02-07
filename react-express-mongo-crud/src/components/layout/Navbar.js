import React from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                 <Link to='/' className="brand-logo">LOgo</Link>
                 <div className="right">
                    <ul>
                        <li>
                            <Link to="/register" >S'inscrire</Link>
                        </li>
                        <li>
                            <Link to="/login">Se connecter</Link>
                        </li>
                    </ul>
                 </div>
            </div>
        </nav>
  )
}

export default Navbar