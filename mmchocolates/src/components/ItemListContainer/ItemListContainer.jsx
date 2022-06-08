import React from 'react'
import './itemlistcontainer.css'

function ItemListContainer(props) {

    const Greeting ={

        backgroundColor: props.backgroundColor,
        fontFamily: props.fontFamily,
        fontSize: props.fontSize

    }


  return (

    <div className="divgreeting">
        
       <h1 className="h1greeting" style={Greeting}> MM Chocolates</h1>
        
    </div>
  )
}

export default ItemListContainer;


