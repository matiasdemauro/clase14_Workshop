import React from 'react';
import ItemCount from '../../components/ItemCount';
import './style.css';

const ItemListContainer = ({greeting}) => {
  const agregarAlCarrito = (stock) => {
    console.log(`Se agrego la cantidad ${stock} al carrito`);
  }
  return (
    <div className='list-style-container'>
      <h1>{greeting}</h1>
      <ItemCount initial={1} stock={5} onAdd={agregarAlCarrito}/>
    </div>
  )
}

export default ItemListContainer;