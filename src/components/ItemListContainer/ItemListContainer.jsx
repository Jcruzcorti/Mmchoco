import React from 'react'
import './itemlistcontainer.css'
import ItemCount from '../ItemCount/ItemCount'

function ItemListContainer(props) {

    const Saludo ={

        fontFamily: props.fontFamily,
        fontSize: props.fontSize,
        textAlign: props.textAlign,
        color: props.color,
        paddingLeft: props.paddingLeft        

    }


  return (

    <div className="divgreeting">
        
       <h1 style={Saludo}> {props.greeting} </h1>
       <ItemCount stock={5} initial={1}/>
        
    </div>
  )
}

export default ItemListContainer;


