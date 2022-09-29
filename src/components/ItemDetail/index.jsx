import React , {useState , useContext} from 'react'
import './style.css'
import ItemCount from './../ItemCount';
import {useNavigate} from 'react-router-dom';
import { Shop } from '../../context/ShopProvider';



const ItemDetail = ({product}) => {
  
  const [qty , setQty] = useState(0);
  const navigate = useNavigate();

  const {addItem} = useContext(Shop);


  const addCart = (quantity) => {
    setQty(quantity);    
  }
  //funcion que navega hacia Cart
  const handleFinish = () => {
      const productToSave = {...product , quantity: qty};
      addItem(productToSave);
      navigate('/cart');

  }
  console.log(qty);
 
    return (
    <div className='ItemDetail'>
<h1>{product.title}</h1>
<img src={product.image} alt="product" />
<h2>${product.price}</h2>
<>
    { !qty ? (<ItemCount stock= {`${product.stock}`} initial={1} onAdd={addCart}/>) 
    : 
    
    ( 
      
      <div className='detailContinue'>
        <h3>Total:</h3>
        <p>${product.price * qty}</p>
      <button onClick={handleFinish}>
        Finalizar compra
      </button> 
      </div>
      )}
      
      </>
    </div>
  )
}

export default ItemDetail