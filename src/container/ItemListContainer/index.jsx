import React from 'react';
import ItemList from '../../components/ItemList/index';
import './style.css';
import { useParams } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
//import Footer from '../../components/Footer';


const ItemListContainer = ({ greeting }) => {
  const { categoryId } = useParams();
  const [loading, productos , error] = useFirebase(categoryId);
 return (
    //retorno las cards
    <>
    <div className='return'>
    {loading ? 
      <h2>Cargando...</h2>
    :
    <ItemList products={productos}/> }
      {error && <h2>{error}</h2>} 
     {/*} <Footer/>*/}
    </div>
    </>
  )
};
export default ItemListContainer;
    
    

    
   
