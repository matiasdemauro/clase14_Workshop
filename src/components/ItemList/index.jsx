import React , {useContext} from 'react'
import { Shop } from '../../context/ShopProvider'
import Item from '../Item'

import './style.css'

const ItemList = ({products}) => {
  const {setMessage} = useContext(Shop);  
  const onChangeMensaje = () =>{
        setMessage("chau")
    }

  
  
  return (
    <div className='list-container'>
     
        {products.length ? products.map(product =>{
        return <Item key={product.id} product = {product}/>
      }):
        <h2>Loading...</h2>
      }
      <button onClick={onChangeMensaje}>Cambiar mensaje NavBar</button>
    </div>
  )
}

export default ItemList