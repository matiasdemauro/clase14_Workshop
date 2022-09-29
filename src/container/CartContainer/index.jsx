import React from 'react'
import { useContext } from 'react'
import { Shop } from './../../context/ShopProvider';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import ordenGenerada from '../../services/generarOrden';


const Cart = () => {
  //Traigo los params de ShopProvider a Cart()
  const {cart , removeItem , clearCart , total} = useContext(Shop)
  
  console.log(cart);
  
  
  const renderImage = (image) =>{
    return(
    <img 
          src={image.value} 
          alt='cart-product' 
          style={{height: '120px'}}
          ></img>
    );
  };

  const renderRemoveButton = (item) =>{
    const product = item.value;
    return(
      <Button 
      onClick={()=> removeItem(product)} 
      variant='contained' 
      color='error'
      >
        Remove
      </Button>
    );
  };
  const handleBuy = () =>{
    const importeTotal = total(cart);
    const orden = ordenGenerada('Matias', 'matias@gmail.com' , '3254124' ,  cart, importeTotal )
    console.log(orden);
  }
 
  
        const columns = [
          { field: 'image', headerName: 'Producto', width: 250 , renderCell: renderImage },
          { field: 'title', headerName: 'Detalle', width: 250 },
          { field: 'quantity', headerName: 'Cantidad', width: 80 },
          {
            field: 'remove',
            headerName: 'Remove',
            renderCell : renderRemoveButton,
            width: 120,
          },
        ];
        const filas=[];
        cart.forEach( item=>{
          filas.push({
            id: item.id,
            image: item.image,
            title: item.title,
            quantity: item.quantity,
            remove: item,
          });
        });

        const rows = [];
  
  
    return (
      
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={filas}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          rowHeight={150}
        />
        <Button onClick={clearCart} color='error' variant='outlined'>Clear cart</Button>
        <Button onClick={handleBuy} >Confirmar Compra</Button>
      </div>
    );
    };
        
  




export default Cart