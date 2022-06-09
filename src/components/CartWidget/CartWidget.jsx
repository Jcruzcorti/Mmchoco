import Carrito from './imgnav/carrito.png';
import React from 'react'


function CartWidget() {

  return (
    <li className="nav-item"><a className="nav-link active" href="#"><img src={Carrito} alt="carrito" className="imgcarrito"/></a></li>
    
  )
}

export default CartWidget;


