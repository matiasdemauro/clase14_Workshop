import React from 'react';

import './style.css';
const ItemListContainer = ({greeting}) => {
  return (
    <div className='list-style-container'>
        

        <h1>{greeting}</h1>
    </div>
  )
}

export default ItemListContainer;