import Carrito from './imgnav/carrito.png';
import React from 'react'
import {NavLink} from 'react-router-dom'


function CartWidget() {

  return (
    <li className="nav-item"><NavLink to="/Carrito" className="nav-link active" href="#"><img src={Carrito} alt="carrito" className="imgcarrito"/></NavLink></li>
  )
}

export default CartWidget;


