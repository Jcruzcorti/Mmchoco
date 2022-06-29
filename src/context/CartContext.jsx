import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';


export const CartContext = createContext()

function CartProvider ({children}) {

  const [cart,setCart] = useState([])

  useEffect(()=>{
    console.log(cart);
  },[cart]);


  function addItem(item, cantidad) {
    // addItem(item,cantidad);
    if (isInCart(item.id)) {
      console.log('ya esta en el carrito');
    }else{
      setCart([...cart,{...item,cantidad}])
    }

  }
  
  function removeItem(id) {
    const products =cart.filter(prod =>prod.id !== id)
    setCart(products)
  }
  
  function clear() {
    setCart([])
  }
  
  function isInCart(id) {
    return cart.some((prod)=>prod.id ===id);
  };

  return (
    <CartContext.Provider value={{cart,addItem,removeItem,clear}}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider;