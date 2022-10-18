import { Button } from '@mui/material';
import React , {useState , useEffect} from 'react';
import './style.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemCount = ({stock , initial , onAdd}) => {
  
  const [count, setCount] = useState(initial);
    const handleAdd = () =>{
        if(count < stock) {
            setCount  (count+1);
        } else{
            toast('No hay suficiente stock disponible',  {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
            }

    }
    const handleDecrement = () => {
       // desarrollo del decremen
       if(count <= stock && count > 1 ) {
        setCount(count-1);
       } else{
        toast('Se permite al menos 1 producto',  {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          })
        }
    }
 
    //ciclo de vida
    useEffect (()=> {
        //el array de dependencia s vacio implica que el callback se ejecutrara cuando e MONTA el componente por UNICA vez.
        console.log('se monto el ItemCount');
    } , []);
    
    //La funciion callback dentro del useEffect se ejecutara cuando se MONTE el componente, y cuando se ACTUALICE el valor del count.
    useEffect (()=>{
        console.log('Se actualiza el estado');
    }, [count]);

    return (
    <div className='botonera'>
        <Button onClick= {handleDecrement}> <span> - </span></Button>
        <h2>{count}</h2>
        <Button onClick= {handleAdd}> <span> + </span></Button>
        <Button onClick={() => onAdd(count)}> <span> Agregar al carrito </span> </Button>
        <ToastContainer/>
    </div>
  )
}

export default ItemCount