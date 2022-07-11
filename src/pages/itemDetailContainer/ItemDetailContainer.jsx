import React, {useState,useEffect} from 'react';
import ItemDetail from '../../components/itemDetail/ItemDetail';
import {useParams} from 'react-router-dom';
import './itemdetailcontainer.css';
import {getItem2} from '../../service/Firestore'


function ItemDetailContainer (props) {


  const [product, setProduct] = useState({})
  const [isLoading,setIsLoeading] = useState(true)

  const {itemId} = useParams();



  useEffect( ()=> {

    getItem2(itemId)
        .then( (respuesta)=> {
          setProduct(respuesta);
          setIsLoeading(false);
        })
     
        .catch((error) => {
          console.log(error);
        });
  }, [itemId]);


    const Saludo ={

        fontFamily: props.fontFamily,
        textAlign: props.textAlign,
        color: props.color        

    }


  return (

    <div className="divgreeting">
        
       <h1 style={Saludo}  className="h1detail" > {props.greeting} </h1>
        {
          isLoading
          ? <h3>Cargando...</h3>
          : <ItemDetail item={product}/>
        }
  
    </div>
  )
}



export default ItemDetailContainer;
