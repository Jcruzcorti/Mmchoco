import React from 'react'
import './Itemdetail.css'
import ItemCount from '../itemCount/ItemCount'
import { useState } from 'react';
import {Link} from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
// import {useNavigate} from 'react-router-dom';

function ItemDetail({item}) {

  // let navigate=useNavigate()

  const {addItem} =useContext(CartContext)

  const [addCart,setAddCart] = useState(0)



  function handleOnAdd(cantidad) { 
    setAddCart(cantidad);
    addItem(item,cantidad);
    // console.log({...item,cantidad});
  
    // navigate('/cart');
  }
  
  return (
    <div className='divgreeting'>

        <h2 className='h2greeting'>{item.name}</h2>
        <img  className='imgitem' src={item.img} alt="" />


        <div className='divInfo'>
            <p className='pItemDescripcion'>{item.description2}</p>
            <p className='pItemPrecio'>${item.price}</p>
            
            {
              addCart===0
              ? <ItemCount onAdd={handleOnAdd} stock={5} initial={1}/>
              :<Link to='/cart'><button className='IrCarrito'>Ir al carrito</button></Link>
            }
             
             <Link to='/'> <button className='IrCatalogo' >Ir al catálogo</button> </Link>
        </div>

    </div>
  )
}

export default ItemDetail;