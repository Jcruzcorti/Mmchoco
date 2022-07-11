import React, {useState,useEffect} from 'react';
import './itemlistcontainer.css';
import ItemList from '../../components/itemList/ItemList';
import { useParams } from 'react-router-dom';
import {getItem, getItem3} from '../../service/Firestore'


function ItemListContainer(props) {

  // getItem().then(respu=>(console.log(respu)));


  const [products, setProducts] = useState([])

  const {categoryId} = useParams();

  useEffect( ()=> {

      if (categoryId) {
        getItem3(categoryId)

        .then( (respuesta)=> {
          setProducts(respuesta);
        })
     
        .catch((error) => {
          console.log(error);
        });
      } 

      else{
        getItem()
        .then( (respuesta)=> {
          setProducts(respuesta);
        })
     
        .catch((error) => {
          console.log(error);
        });
      }
     
  }, [categoryId]);


    const Saludo ={

        fontFamily: props.fontFamily,
        textAlign: props.textAlign,
        color: props.color        

    }


  return (

    <div className="divgreeting1">
        
       <h1 style={Saludo} className="h1greeting"> {props.greeting} </h1>

       <div className='divListContainer'>
          <ItemList items={products}/>
       </div>
        
    </div>
  )
}



export default ItemListContainer;


