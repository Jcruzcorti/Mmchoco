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
                    <li className="nav-item"><NavLink to="/" className="nav-link active" aria-current="page" href="#">Inicio</NavLink> </li> 
                    {/* <li className="nav-item"><NavLink to="/Productos" className="nav-link active" href="#">Productos</NavLink></li> */}
                    <li className="nav-item"><NavLink to="/category/Bombones" className="nav-link active" href="#">Bombones</NavLink></li>
                    <li className="nav-item"><NavLink to="/category/Bombonesybarritas" className="nav-link active" href="#">Bombones/barritas</NavLink></li>
                    <CartWidget/>
                </ul>
                </div>
            </div>
        </nav>

    </div>
  );
}

export default NavBar;