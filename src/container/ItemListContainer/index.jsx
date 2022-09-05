import React , {useState , useEffect} from 'react';
//import ItemCount from '../../components/ItemCount';
import './style.css';
import { products } from './../../data/products';


import ItemList from './../../components/ItemList/index';


const ItemListContainer = ({greeting}) => {
 //Seteamos la respuesta en un estado para que permanezcan y no mueran dsp de la ejecución
   const [productos , setProductos] = useState([])
 //--------TRAER UN ARREGLO PARA CONSUMIRLO--------------//
useEffect(()=>{
( async ()=> {
  //creo la promesa
  const obtenerProducts = new Promise ((accept, reject) =>{
    setTimeout(() => {
      accept(products)
    }, 2000);
  }) 
  // consumo la promesa:
//pasos: crear la IIFE y los bloques try catch
  try{
    const response = await obtenerProducts;
    
    setProductos(response); //ahora persiste
  }
  catch(error){
        console.log(error);
  }
})() 
}, [])
console.log(productos);
//------------------------------------------------------//
  return (
    //retorno las cardsz
    <>
    <div className='list-style-container'>
     <h1>{greeting}</h1>
     {/* <ItemCount initial={1} stock={5} onAdd={agregarAlCarrito}/>*/}
   
    </div>

    <div className='item-list-container'>
        <ItemList products ={productos}/>
    </div>
    </>
  )
}

export default ItemListContainer;