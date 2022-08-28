import React from 'react'
import CartWidget from '../CartWidget';
import './style.css'



const NavBar = ({categoria , temp}) => {
 console.log(categoria)
 console.log(temp);
 
    return (
      <>{/* <div className = 'cajaSup'>
        <p>categorias : {categoria}</p>
        <p>temp °C : {temp}</p>
        </div>*/}
    <div className='nav'>
    

    <ul className='menu'> 
    <a href='#'>  <li className='item'>Gianne-app</li> </a>
    <a href='#'>   <li className='item'>
              Productos
              <ul className='submenu'>
                 <a href='#'> <li className='subitem'>Sillones</li></a>
                 <a href='#'> <li className='subitem'>Mesas</li></a>
                 <a href='#'> <li className='subitem'>Bazar</li></a>
                 <a href='#'> <li className='subitem'>Deco</li></a>
              </ul>
        </li> </a>
        <a href='#'>   <li className='item'>Nosotros</li> </a>
        <a href='#'>   <li className='item'>Contacto</li> </a>
  </ul>
      
  </div>
  <CartWidget/>
    </>
  );
}

export default NavBar



