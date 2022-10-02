import React , {useState , useContext} from 'react'
import './style.css'
import ItemCount from './../ItemCount';
import {useNavigate} from 'react-router-dom';
import { Shop } from '../../context/ShopProvider';
import { Button } from '@mui/material';



const ItemDetail = ({product}) => {
  //estados y ruteo con desestructuracion Shop 
  const [qty , setQty] = useState(0);
  const navigate = useNavigate();
  const {addItem} = useContext(Shop);

//Añade cantidad 
  const addCart = (quantity) => {
    setQty(quantity);    
  }
  //Guarda el item/producto seleccionado con la cantidad
  const handleFinish = () => {
      const productToSave = {...product , quantity: qty};
      addItem(productToSave);
      navigate('/cart');
  }

 // console.log(qty);
   
    
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
            <Button onClick={handleFinish}>
           Finalizar compra
            </Button> 
        </div>
         )}

      </>
    </div>
  )
}

export default ItemDetail