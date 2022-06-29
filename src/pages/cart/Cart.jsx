import React from 'react'
import './cart.css'
import {useContext} from 'react'
import { CartContext } from '../../context/CartContext';

function Cart() {
  const {cart,clear,removeItem} = useContext(CartContext)


  return (
    <div>

      <h2 className='h1cart'>Tu carrito de compra</h2>  
      <div className='DivCart'>
        
        {
        cart.map((item)=>(
          <div className='divItem'>
            <h3>{item.name}</h3>
            <img className='imgitem' src={item.img} alt="img" />
            <p className='pitem2'>${item.price}</p>

            <button onClick={()=>{removeItem(item.id)}} className='Botonclickeliminar'>Eliminar item</button>
            <p className='pitem2'>Cantidad: {item.cantidad}</p>
          </div>
        ))
        }

      </div>
      <button onClick={clear} className='Botonclickvacio'>Vaciar Carrito</button>
    </div>
  )
}

export default Cart;