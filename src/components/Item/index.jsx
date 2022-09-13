import React from 'react'
import './style.css'
import { useNavigate } from "react-router-dom";
const Item = ({product}) => {
  
  const navigate = useNavigate();
  const handleNavigate = () =>{
    navigate(`/detail/${product.id}`)
  }
  return (
    //acá va una card
    <>
  <div className='items' onClick={handleNavigate}>
    <img className='cardImage' src={product.image}  alt='foto'/>
   
    
            <h3 id='name'>{product.title}</h3>
            <p className='precioProducto'>${product.price}</p>
            <p>Categoría : <span className='categoria'>{product.category}</span></p>
           
            {/*<button  className='boton-agregar'>Agregar <i className='fas fa-shopping-cart'></i></button>*/}
            
     </div>      
  
    </>

  )

}

export default Item