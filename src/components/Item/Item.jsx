import React from 'react'
// import ItemCount from '../ItemCount/ItemCount'
import './item.css'
import {Link} from 'react-router-dom'


const Item = ({item}) => {

  const urlDetalle = `/producto/${item.id}`

  return (
    <div className='divItemPadre'>

        <div className='divItem'>
            <h3>{item.name}</h3>
            <img className='imgitem' src={item.img} alt="imagen" />
            <p className='pitem1'>{item.description}</p>
            <p className='pitem2'>${item.price}</p>
            {/* <ItemCount stock={5} initial={1}/> */}
            <Link to={urlDetalle} className='detalleProducto'> <p> Ver detalle del producto </p> </Link>
        </div>


    </div>
  )
}

export default Item;