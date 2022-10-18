import React, { useState, useEffect } from 'react';
import ItemDetail from '../../components/ItemDetail';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import NotFound from './../../components/NotFound/index';

const ItemDetailContainer = () => {
  //Gestionar la obtencion de la data del detalle
  const [productDetail, setProductDetail] = useState({});
  const [docState, setDocState] = useState(false);
  const { productId } = useParams();
  console.log(productId);

  useEffect(() => {
    const getProducts = async () => {
      try {
        //referencia de mi base de datos firebase 'products'
        const docRef = doc(db, "products", productId);
        //llamado a Firebase
        const docSnap = await getDoc(docRef);

        //Si los datos no existen o no coinciden que me lo explicite en console.log
        if (docSnap.exists()) {
         // console.log("Datos del documento docSnap:", docSnap.data());
          setProductDetail({ id: docSnap.id, ...docSnap.data() });
          setDocState(true);
        } else {
          console.log("No se encontro el documento")
          
        }

      } catch { console.error(); }

    }
    getProducts();
  }, [productId])
  console.log(productDetail);

  return (
    <main className='interface'>
      {docState ? <ItemDetail product={productDetail} /> : <NotFound />}
    </main>
  )
}

export default ItemDetailContainer