import React , {useState , useEffect} from 'react';
import ItemDetail from '../../components/ItemDetail';
const ItemDetailContainer = () => {
  //Gestionar la obtencion de la data del detalle
  const [ productDetail, setProductDetail] = useState({});
  useEffect (()=>{
    const getProducts = async ()=>{
    try {
        const response = await fetch('https://fakestoreapi.com/products/3');
        
        const data = await response.json();
        setProductDetail(data);
       
        }       catch{console.error();}
    
    }
    getProducts();
  }, [])
  console.log(productDetail);

    return (
    <ItemDetail product = {productDetail} />
  )
}

export default ItemDetailContainer