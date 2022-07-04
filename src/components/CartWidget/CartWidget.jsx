import Carrito from './imgnav/carrito.png';
import React from 'react';
import {NavLink} from 'react-router-dom';
import {useContext} from 'react';
import { CartContext } from '../../context/CartContext';
import './cartwidget.css';


function CartWidget() {

  const {getTotalItems} =useContext(CartContext);


  return (
    <div className='divcartwidget'>
      
      <li className="nav-item"><NavLink to="/Cart" className="nav-link active" href="#"><img src={Carrito} alt="carrito" className="imgcarrito"/></NavLink></li>
      {
        getTotalItems()===0
        ?null
        :<p className='nav-p'>{getTotalItems()}</p>
      }
    </div>
    
  )
}

export default CartWidget;


