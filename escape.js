// Ver que sucede sin el return
import { useEffect } from 'react';

//On escape it will close

useEffect(()=>{
    const handleEsc = (event) => {
       console.log(event); //evento nativo del browser

       if(event.keyCode === 27) {
        console.log('will close');
       }
    };
    window.addEventListener('keydown' , handleEsc);

    return () => {
        window.addEventListener('keydown' , handleEsc);
    };
}, [])