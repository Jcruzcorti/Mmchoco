import './navbar.css';
import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import {NavLink} from 'react-router-dom'



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
                    <li className="nav-item"><NavLink to="/Inicio" className="nav-link active" aria-current="page" href="#">Inicio</NavLink> </li> 
                    <li className="nav-item"><NavLink to="/Productos" className="nav-link active" href="#">Productos</NavLink></li>
                    <li className="nav-item"><NavLink to="/Nosotros" className="nav-link active" href="#">Nosotros</NavLink></li>
                    <li className="nav-item"><NavLink to="/Contacto" className="nav-link active" href="#">Contacto</NavLink></li>
                    <CartWidget/>
                </ul>
                </div>
            </div>
        </nav>

    </div>
  );
}

export default NavBar;