import './navbar.css';
import React from 'react';
import CartWidget from '../CartWidget/CartWidget';



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
                    <li className="nav-item"><a className="nav-link active" aria-current="page" href="#">Inicio</a></li>
                    <li className="nav-item"><a className="nav-link active" href="#">Productos</a></li>
                    <li className="nav-item"><a className="nav-link active" href="#">Nosotros</a></li>
                    <li className="nav-item"><a className="nav-link active" href="#">Contacto</a></li>
                    <CartWidget/>
                </ul>
                </div>
            </div>
        </nav>

    </div>
  );
}

export default NavBar;