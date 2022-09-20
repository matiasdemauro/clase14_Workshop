import React , {useEffect} from 'react';
import './style.css';

const Modal = ({handleClose}) => {

    //On escape it will close

useEffect(()=>{
    const handleEsc = (event) => {
       console.log(event); //evento nativo del browser
        //esc
       if(event.keyCode === 27) {
        console.log('will close');
        handleClose(false);
       }
        //enter
       if(event.keyCode === 13) {
        console.log('will send');
        handleSubmit();
       }
    };
    window.addEventListener('keydown' , handleEsc);

    return () => {
        //se eliminan los eventos nativos
        console.log('se desmonta el componente');
        window.removeEventListener('keydown' , handleEsc);
    };
}, [handleClose])
    
    const handleSubmit = (evento) =>{
        evento?.preventDefault();
        console.log(evento);
    }
    const onClose = () =>{
        //se deberia cerrar el modal
        handleClose(false);
    }
  
  return (
    <div className='background'>
        <form className='modal-container' onSubmit={handleSubmit}>
            <h2 className='title'>Titulo del modal</h2>
            <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eligendi, velit sequi tenetur nemo placeat eum!</p>
            <div className='buttons-container'>
                <button className='rounded-button-cancel' type='button' onClick={onClose} >Close</button>
                <button className='rounded-button-send' type='submit'>Send</button>
            </div>
        </form>
    </div>
  )
}

export default Modal