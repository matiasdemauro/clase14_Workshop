import React , {useState} from 'react'
import './style.css'
import ItemCount from './../ItemCount';
import {useNavigate} from 'react-router-dom'
const ItemDetail = ({product}) => {
  
  const [qty , setQty] = useState(0);
  const navigate = useNavigate();
  const addCart = (quantity) => {
    setQty(quantity);    
  }
  const handleFinish = () => {
      navigate('/cart');
  }
  console.log(qty);
  //alert(`Se agrego la cantidad ${stock} al carrito`);
    return (
    <div className='ItemDetail'>
<h1>{product.title}</h1>
<img src={product.image} alt="product" />
<h2>${product.price}</h2>
    { !qty ? (<ItemCount stock={10} initial={1} onAdd={addCart}/>) : ( <button onClick={handleFinish}>Finalizar compra</button>)}
    </div>
  )
}

export default ItemDetail