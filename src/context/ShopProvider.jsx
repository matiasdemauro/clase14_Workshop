
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
//Completar logica
    const removeItem = (item) =>{

    }

    const clearCart = () =>{

    }




  //Dentro del context irian : estados , efectos y funciones auxiliares 
   
   return (
    <Shop.Provider value={{cart, addItem}}>
    {children}
    </Shop.Provider>
  )
}

export default ShopProvider;
