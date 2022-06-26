import React, {useState,useEffect} from 'react'
// import ItemCount from '../ItemCount/ItemCount'
import { productos } from '../../mock/products'
import ItemDetail from '../ItemDetail/ItemDetail';
import {useParams} from 'react-router-dom'


function ItemDetailContainer (props) {

  const [product, setProduct] = useState({})

  const {itemId} = useParams();
  console.log(itemId);


  useEffect( ()=> {

    const traerProducto =  new Promise((resolve, reject) => {
        setTimeout(() => {
    
        const itemFound = productos.find(producto =>{
           return producto.id === parseInt(itemId)
        })
        
        resolve(itemFound)

        }, 800);
    });

      traerProducto
        .then( (respuesta)=> {
          setProduct(respuesta);
        })
     
        .catch((error) => {
          console.log(error);
        });
  }, [itemId]);


    const Saludo ={

        fontFamily: props.fontFamily,
        fontSize: props.fontSize,
        textAlign: props.textAlign,
        color: props.color        

    }


  return (

    <div className="divgreeting">
        
       <h1 style={Saludo}> {props.greeting} </h1>
       <ItemDetail item={product}/>
       {/* <ItemCount stock={5} initial={1}/> */}
        
    </div>
  )
}



export default ItemDetailContainer;
