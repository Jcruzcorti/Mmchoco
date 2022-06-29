import './navbar.css';
import React from 'react';
import CartWidget from '../cartWidget/CartWidget';
import {NavLink} from 'react-router-dom';


function NavBar() {


  return (

    <div className="Divnav">

        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item"><NavLink to="/" className="nav-link active" aria-current="page">Inicio</NavLink> </li> 
                    <li className="nav-item"><NavLink to="/category/Bombones" className="nav-link active" >Bombones</NavLink></li>
                    <li className="nav-item"><NavLink to="/category/Mixbarritas" className="nav-link active">Mix/barritas</NavLink></li>
                    <CartWidget/>
                </ul>
                </div>
            </div>
        </nav>

    </div>
  );
}

export default NavBar;