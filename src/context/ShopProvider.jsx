import React, { useState, createContext } from "react";
//1) Declarar el context
export const Shop = createContext(null);
//2)crear el proveedor/provider que me va a envolver la app.
const ShopProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    const productoRepetido = isInCart(item.id)
    console.log('boolean:', productoRepetido);
    if (productoRepetido) {
      const cartModificado = cart.map(product => {
        if (product.id === item.id) {
          product.quantity += item.quantity
        }
        return product
      })
      setCart(cartModificado);
      console.log(cart);
      console.log(cartModificado);
    } else {

      const cartModificado = [...cart, item]
      setCart(cartModificado)

    }
  }
  const isInCart = (id) => {
    return cart.some(product => product.id === id);
  }

  const removeItem = (itemToRemove) => {
    const filteredProducts = cart.filter(item => item !== itemToRemove);
    setCart(filteredProducts)
  }

  const clearCart = (cart) => {
    setCart([]);
  }
  const totalPrice = () => {
    return cart.reduce((prev, act) => prev + act.quantity * act.price, 0);
  }
  const totalProducts = () => {
    return cart.reduce((acumulador, productoActual) => acumulador + productoActual.quantity, 0);
  }

  //Dentro del context irian : estados , efectos y funciones auxiliares 

  return (
    <Shop.Provider value={{
      cart,
      addItem,
      removeItem,
      clearCart,
      totalProducts,
      totalPrice
      }}>
      {children}
    </Shop.Provider>
  )
}

export default ShopProvider;
