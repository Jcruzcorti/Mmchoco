import React from 'react'
import './item.css'

const Item = ({item}) => {
  return (
    <div>

        <div>
            <h3>{item.name}</h3>
            <img className='imgitem' src={item.img} alt="imagen" />
            <p>{item.description}</p>
            <p className='pitem'>${item.price}</p>
        </div>


    </div>
  )
}

export default Item