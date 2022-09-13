import React from 'react'
import './style.css'
import ItemCount from './../ItemCount';

const ItemDetail = ({product}) => {
    const agregarAlCarrito = (stock) => {
        alert(`Se agrego la cantidad ${stock} al carrito`);
      }
    return (
    <div className='ItemDetail'>
<h1>{product.title}</h1>
<img src={product.image} alt="product" />
<h2>${product.price}</h2>
    <ItemCount initial={1} stock={5} onAdd={agregarAlCarrito}/>
    </div>
  )
}

export default ItemDetail