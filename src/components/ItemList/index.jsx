import React from 'react'
import Item from '../Item'
import './style.css'
import Footer from './../Footer/index';

const ItemList = ({ products }) => {

  return (
    <div className='list-container'>

      {products.map(product => {
        return <Item key={product.id} product={product} />
      })}

<Footer/>

    </div>
  )
}

export default ItemList