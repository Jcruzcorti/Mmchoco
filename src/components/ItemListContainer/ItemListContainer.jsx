import React, {useState,useEffect} from 'react'
import './itemlistcontainer.css'
// import ItemCount from '../ItemCount/ItemCount'
import { productos } from '../../mock/products'
import ItemList from '../ItemList/ItemList'


function ItemListContainer(props) {

  const [products, setProducts] = useState([])



  useEffect( ()=> {

    const traerProductos =  new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(productos)
        }, 2000);
    });

      traerProductos
        .then( (respuesta)=> {
          setProducts(respuesta);
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
       
       <ItemList items={products}/>
       {/* <ItemCount stock={5} initial={1}/> */}
        
    </div>
  )
}

export default ItemListContainer;


