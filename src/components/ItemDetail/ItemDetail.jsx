import React from 'react'
import './Itemdetail.css'



function ItemDetail({item}) {

  
  return (
    <div className='divgreeting'>

        <h2 className='h2greeting'>{item.name}</h2>
        <img  className='imgitem' src={item.img} alt="" />


        <div className='divInfo'>
            <p className='pItemDescripcion'>{item.description}</p>
            <p className='pItemPrecio'>${item.price}</p>
           
        </div>

    </div>
  )
}

export default ItemDetail