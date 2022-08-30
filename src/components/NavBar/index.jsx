import React from 'react'
import CartWidget from '../CartWidget';
import Select from '../Select';
import './style.css'
import { useState } from 'react'


const NavBar = () => {
 //Nombre del estado, setNombreDelEstado
 const [navColor,setNavColor] = useState("#f3f3f3")
 const onChangeColor = (event) =>{
  //console.log(event);
 // console.log(event.target.value)
 const color = event.target.value;
  setNavColor(color);
 }
 console.log(navColor);
    return (
      <>
    <div className='nav'>
    

    <ul style={{
       backgroundColor : navColor
    }} className='menu'
    > 
    <a href='/#'>  <li className='item'>Gianne-app</li> </a>
    <a href='/#'>   <li className='item'>
              Productos
              <ul className='submenu'>
                 <a href='/#'> <li className='subitem'>Sillones</li></a>
                 <a href='/#'> <li className='subitem'>Mesas</li></a>
                 <a href='/#'> <li className='subitem'>Bazar</li></a>
                 <a href='/#'> <li className='subitem'>Deco</li></a>
              </ul>
        </li> </a>
        <a href='/#'>   <li className='item'>Nosotros</li> </a>
        <a href='/#'>   <li className='item'>Contacto</li> </a>
        <CartWidget/>
        <Select handleColor ={onChangeColor}/>
  </ul>
      
  </div>
  
    </>
  );
}

export default NavBar



