import React , {useState , useEffect} from 'react'
import './style.css'

const ItemCount = ({stock , initial , onAdd}) => {
  
  const [count, setCount] = useState(initial);
    const handleAdd = () =>{
        if(count < stock) {
            setCount (count+1);
        } else{
            alert('No hay suficiente stock disponible');}

    }
    const handleDecrement = () => {
       // desarrollo del decremen
       if(count <= stock && count > 1 ) {
        setCount(count-1);
       } else{
        alert('Se permite al menos 1 producto');}
    }
 
    
    //ciclo de vida
    useEffect (()=> {
        //el array de dependencias vacio implica que el callback se ejecutrara cuando e MONTA el componente por UNICA vez.
        console.log('se monto el ItemCount');
    } , []);
    
    //La funciion callback dentro del useEffect se ejecutara cuando se MONTE el componente, y cuando se ACTUALICE el valor del count.
    useEffect (()=>{
        console.log('Se actualiza el estado');
    }, [count]);

    return (
    <div className='botonera'>
        <button onClick= {handleDecrement}> - </button>
        <h2>{count}</h2>
        <button onClick= {handleAdd}> + </button>
        <button onClick={() => onAdd(count)}> Agregar al carrito </button>
    </div>
  )
}

export default ItemCount