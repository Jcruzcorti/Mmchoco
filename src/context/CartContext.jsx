import { useState } from 'react';
import { createContext } from 'react';


export const CartContext = createContext()

function CartProvider ({children}) {

  const [cart,setCart] = useState([])

  function prueba(params) {
    console.log("Hola");
  }



  function addItem(item, quantity) {
    
  }
  
  function removeItem(itemId) {
    
  }
  
  function clear() {
    
  }
  
  //  function isInCart (id) => true|false{
    
  //  }

  return (
    <CartContext.Provider value={{cart,prueba}}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider;