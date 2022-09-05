import React from 'react'
import Item from '../Item'
import './style.css'

const ItemList = ({products}) => {
  return (
    <div className='list-container'>
        {products.map(product =>{
        return <Item key={product.id} product = {product}/>
    })}
    </div>
  )
}

export default ItemList