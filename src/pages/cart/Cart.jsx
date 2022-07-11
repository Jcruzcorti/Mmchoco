import React from 'react'
import './cart.css'
import {useContext} from 'react'
import { CartContext } from '../../context/CartContext';
import {Link} from 'react-router-dom'
import {buyOrder} from '../../service/Firestore'
import Swal from 'sweetalert2'

function Cart() {
  const {cart,clear,removeItem,totalPrice} = useContext(CartContext)
   

  function handleFin() {
    
    const dataOrden = {
      buyer:{
        name: "Juan Cortiñas",
        phone: 1234567,
        email: "asdasd@hotmail.com"
      },
      items: cart,
      total: totalPrice(),
    
    }
    
    
    buyOrder(dataOrden).then((orderCreated)=>{
      clear();
      console.log(orderCreated.id);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Pedido realizado, muchas gracias.',
        showConfirmButton: false,
        timer: 2500
      })
    });
    

  }

  ;
  return (
    <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">

      <h2 className='h1cart'>Tu carrito de compra</h2>  
      <div className='DivCart'>
        
        {
        cart.map((item)=>(
          <div className='divItem' key={item.id}>
            <h3>{item.name}</h3>
            <img className='imgitem' src={item.img} alt="img" />
            <p className='pitem2'>${item.price}</p>

            <button onClick={()=>{removeItem(item.id)}} className='Botonclickeliminar'>Eliminar item</button>
            <p className='pitem2'>Cantidad: {item.cantidad}</p>

            <p className='pitem2'>Subtotal: <span> ${item.price * item.cantidad}</span></p>
          </div>
        ))
        }

      </div>

      <div className='DivCart2'>
        {
          cart.length === 0
          ? <Link to='/'> <button className='Botonclickback'> Seguir comprando</button> </Link>          
          :<button onClick={clear} className='Botonclickvacio'>Vaciar Carrito</button>
        }
        
        <button onClick={handleFin} className='Botonclickfin'> Finalizar compra</button>
        
      </div>
      <p className='total'>Total: $ {totalPrice()}</p>
     
    </div>
  )
}

export default Cart;


