import {useState} from 'react'
import './itemcount.css'



function ItemCount({stock, initial}) {

    const [count, setCount] = useState(initial)    



    function Suma() {

        if (count<stock) {
            setCount(count +1)
        }

        else if (count==stock){
            setCount(stock)
            alert("Alcanzaste el límite de stock, muchas gracias");
        }

    }

    function Resta() {

       if (count>initial) {
            setCount(count -1)
       }

    }



  return (
    <div className="Divboton">

        <button onClick={Resta} className="Botoncarrito"> - </button>
        <span className="cuenta"> {count} </span>
        <button onClick={Suma}  className="Botoncarrito"> + </button>

        <button className="Botonagregar">Agregar al carrito</button>

    </div>
  )
}

export default ItemCount;