import React , {useState} from 'react'
import Item from '../Item'
import Modal from '../Modal'
import './style.css'

const ItemList = ({products}) => {
  //estado de react
  const [modalShow , setModalShow] = useState(true);
  
  
  return (
    <div className='list-container'>
      {modalShow ? <Modal handleClose = {setModalShow}/> : null}
        {products.length ? products.map(product =>{
        return <Item key={product.id} product = {product}/>
      }):
        <h2>Loading...</h2>
      }
    </div>
  )
}

export default ItemList