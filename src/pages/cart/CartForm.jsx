import React from 'react'
import './cartform.css'
import {buyOrder} from '../../service/Firestore'
import Swal from 'sweetalert2'
import { useState } from 'react'



function CartForm({cart,totalPrice,clear}) {

    const [buyer,setBuyer]=useState({
        name: "",
        phone: "",
        email: ""
    })

    function handleChange(e) {
        const field = e.target.name;
        const value = e.target.value;

        setBuyer({
            ...buyer,
            [field]:value,
    
        })
        
    } 


    function handleFin(e) {
        e.preventDefault();
 
        const dataOrden = {
          buyer,
          items: cart,
          total: totalPrice(),
        


        }
        if (buyer.name=== "") {
          Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Para finalizar la compra, debes ingresar tus datos en el formulario por favor.',
              })
        }
        else if (buyer.phone=== "") {
          Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Para finalizar la compra, debes ingresar tus datos en el formulario por favor.',
              })
        }
        else if (buyer.email=== "") {
          Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Para finalizar la compra, debes ingresar tus datos en el formulario por favor.',
              })
        }
            
        else{
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
   
    }


  return (
    
    <div className='formDiv'>

        <form className='form'>

            <fieldset className='fieldsetc'> 
            <div className='divInput'>

                <label htmlFor="name">Nombre y apellido: </label>
                <input onChange={handleChange} type="text" name='name' placeholder="ingrese su nombre y apellido" aria-required />

                <label htmlFor="phone">Teléfono: </label>
                <input onChange={handleChange} type="number" name='phone' placeholder="ingrese su teléfono" aria-required/>

                <label htmlFor="email">E-mail: </label>
                <input onChange={handleChange} type="email" name='email' placeholder="ingrese su E-mail" aria-required/>

            </div>
    
            <div className='divButtons'>
                <p className='total'>Total: $ {totalPrice()}</p>
          
                <button onClick={clear} className='Botonclickvacio' >Vaciar Carrito</button>
                <button onClick={handleFin} className='Botonclickfin'> Finalizar compra</button>                 
            </div>
            </fieldset>
        </form>
    </div>
  )
}

export default CartForm;