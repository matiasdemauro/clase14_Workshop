
import React , {useState , createContext} from "react";




//1) Declarar el context

export const Shop = createContext(null);

//2)crear el proveedor/provider que me va a envolver la app.
 const ShopProvider = ({children}) =>{
    const [cart , setCart] = useState([]);

    const addItem = (item) =>{
      const productoRepetido = isInCart(item.id)
      console.log('boolean:', productoRepetido);
      if (productoRepetido) {
           const cartModificado = cart.map(product=>{
            if (product.id === item.id){
              product.quantity += item.quantity 
            }
            return product
           })
           setCart(cartModificado);
           console.log(cart);
           console.log(cartModificado);
      } else{
        
        const cartModificado = [...cart , item]
        setCart(cartModificado)
        
      }
    }
    const isInCart = (id) =>{
        return cart.some(product => product.id === id);
    }

    const removeItem = (itemToRemove) =>{
      const filteredProducts = cart.filter(item => item !== itemToRemove);
        setCart(filteredProducts)
    }

    const clearCart = (cart) =>{
      setCart([]);
    }
    const total= () => {
      const total = cart.reduce((acc, producto) => acc += producto.quantity * producto.price, 0);
      console.log(total);
      return total;
    }




  //Dentro del context irian : estados , efectos y funciones auxiliares 
   
   return (
    <Shop.Provider value={{cart, addItem , removeItem, clearCart, total}}>
    {children}
    </Shop.Provider>
  )
}

export default ShopProvider;
