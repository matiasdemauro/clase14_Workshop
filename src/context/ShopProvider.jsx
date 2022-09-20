
import React , {useState , createContext} from "react";




//1) Declarar el context

export const Shop = createContext(null);

//2)crear el proveedor/provider que me va a envolver la app.
 const ShopProvider = ({children}) =>{
   const [message , setMessage] = useState("hola");
   return (
    <Shop.Provider value={{message, setMessage}}>
    {children}
    </Shop.Provider>
  )
}

export default ShopProvider;
