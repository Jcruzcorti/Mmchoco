import React, {useState,useEffect} from 'react';
import './itemlistcontainer.css';
import { productos } from '../../mock/products';
import ItemList from '../../components/itemList/ItemList';
import { useParams } from 'react-router-dom';


function ItemListContainer(props) {

  const [products, setProducts] = useState([])

  const {categoryId} = useParams();
  // console.log(categoryId);

  useEffect( ()=> {

    const traerProductos =  new Promise((resolve, reject) => {
        setTimeout(() => {

          if (categoryId === undefined)
            resolve(productos)

            else{
              const categoryFound = productos.filter(producto =>{
                return producto.category === categoryId;
              })
              resolve(categoryFound)
            }
        }, 800);
    });

      traerProductos
        .then( (respuesta)=> {
          setProducts(respuesta);
        })
     
        .catch((error) => {
          console.log(error);
        });
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


