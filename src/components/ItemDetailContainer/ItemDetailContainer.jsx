import React, {useState,useEffect} from 'react'
// import ItemCount from '../ItemCount/ItemCount'
import { productos } from '../../mock/products'
import ItemDetail from '../ItemDetail/ItemDetail';
// import ItemList from '../ItemList/ItemList'


function ItemDetailContainer (props) {

  const [product, setProduct] = useState({})



  useEffect( ()=> {

    const traerProducto =  new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(productos[0])
        }, 2000);
    });

      traerProducto
        .then( (respuesta)=> {
          setProduct(respuesta);
        })
     
        .catch((error) => {
          console.log(error);
        });
  }, []);


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
 
       {/* <ItemList items={product}/> */}
       {/* <ItemCount stock={5} initial={1}/> */}

        
    </div>
  )
}



export default ItemDetailContainer;
