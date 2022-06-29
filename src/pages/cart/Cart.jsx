import React from 'react'
import './cart.css'
import {useContext} from 'react'
import { CartContext } from '../../context/CartContext';

function Cart() {
  const {prueba} = useContext(CartContext)


  return (
    <div>
      <div>
        <button onClick={prueba} className='Botonclick'>Click aquí</button>
      </div>
    </div>
  )
}

export default Cart;