import React from 'react'
import './Itemdetail.css'
import ItemCount from '../itemCount/ItemCount'
import { useState } from 'react';
import {Link} from 'react-router-dom';
// import {useNavigate} from 'react-router-dom';

function ItemDetail({item}) {

  // let navigate=useNavigate()
  const [addCart,setAddCart] = useState(0)

  function handleOnAdd(cantidad) {
    setAddCart(cantidad);
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
              :<Link to='/cart'>Ir al carrito</Link>
            }
             
             
        </div>

    </div>
  )
}

export default ItemDetail;