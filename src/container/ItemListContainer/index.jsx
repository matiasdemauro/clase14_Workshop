import React, { useState, useEffect } from 'react';
import './style.css';
import ItemList from './../../components/ItemList/index';
import { useParams } from 'react-router-dom';
import { db } from '../../firebase/config';
import { collection, query, where, getDocs } from "firebase/firestore";


const ItemListContainer = ({ greeting }) => {
  //Seteamos la respuesta en un estado para que permanezcan y no mueran dsp de la ejecución
  const [productos, setProductos] = useState([])
  const { categoryId } = useParams();
  console.log('db', db);
  console.log(categoryId);
  //--------TRAER UN ARREGLO PARA CONSUMIRLO--------------//
  useEffect(() => {
    (async () => {

      try {
       
          //1) se genera la query
          const q = categoryId ?
               query(collection(db, "products"), where("category", '==', categoryId)) 
               :
               query(collection(db, "products"));
          //2) realizar el llamado a firebase
          //3) obtener el 'snapshot' con los datos crudos.
          const querySnapshot = await getDocs(q);
          const productsFireBase = [];
          querySnapshot.forEach((doc) => {
            
            console.log(doc.id, " => ", doc.data());
            productsFireBase.push({ id: doc.id, ...doc.data() })
          });
          console.log('productsFirebase', productsFireBase);
          setProductos(productsFireBase);

       
      
      }
      catch (error) {
        console.log(error);
      }
    })()
  }, [categoryId])
  console.log(productos);
 
  return (
    //retorno las cards
    <>
      <div className='list-style-container'>
        <h1>{greeting}</h1>
        {/* <ItemCount initial={1} stock={5} onAdd={agregarAlCarrito}/>*/}

      </div>

      <div className='item-list-container'>
        <ItemList products={productos} />
      </div>
    </>
  )
}

export default ItemListContainer;