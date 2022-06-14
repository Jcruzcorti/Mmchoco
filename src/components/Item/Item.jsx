import React from 'react'
import './item.css'

const Item = ({item}) => {
  return (
    <div>

        <div>
            <h2>{item.name}</h2>
            <img className='imgitem' src={item.img} alt="imagen" />
            <p>{item.description}</p>
            <p className='pitem'>${item.price}</p>
        </div>


    </div>
  )
}

export default Item