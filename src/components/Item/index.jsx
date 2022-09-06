import React from 'react'
import './style.css'

const Item = ({product}) => {
  return (
    //acá va una card
    <>
    <div className='items'>
    <img className='cardImage' src={product.img}  alt='foto'/>
   
    
            <h3 id='name'>{product.nombre}</h3>
            <p className='precioProducto'>${product.precio}</p>
            <p>Categoría : <span className='categoria'>{product.categoria}</span></p>
           <a href=".#">
            <button  className='boton-agregar'>Agregar <i className='fas fa-shopping-cart'></i></button>
            </a>
     </div>       
    </>
  )

}

export default Item