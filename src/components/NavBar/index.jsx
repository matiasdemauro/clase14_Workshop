import React from 'react'
import './style.css'
import CartWidget from '../CartWidget';


const NavBar = ({categoria , temp}) => {
 console.log(categoria)
 console.log(temp);
 
    return (
      <>{/* <div className = 'cajaSup'>
        <p>categorias : {categoria}</p>
        <p>temp °C : {temp}</p>
        </div>*/}
     <div> <CartWidget/> </div>  
    <div className='nav'>
    

    <ul className='menu'> 
        <li className='item'>Home</li>
        <li className='item'>
              Productos
              <ul className='submenu'>
                  <li className='subitem'>Sillones</li>
                  <li className='subitem'>Mesas</li>
                  <li className='subitem'>Bazar</li>
                  <li className='subitem'>Deco</li>
              </ul>
        </li>
        <li className='item'>Nosotros</li>
        <li className='item'>Contacto</li>
  </ul>
</div>
</>
  );
}

export default NavBar



