import React , { useState } from 'react'
import CartWidget from '../CartWidget';
import Select from '../Select';
import './style.css';

import { Link } from 'react-router-dom';


const NavBar = () => {
 //Nombre del estado, setNombreDelEstado
 const [navColor,setNavColor] = useState("#f3f3f3")
 //Consumimos el context desde la NavBar
 //const value = useContext(Shop)
 //console.log('valor context', value);
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
       backgroundColor : navColor,
       
    }} className='menu'
    > 
    <Link to='/'>  <li className='item'>Gianne-app</li> </Link>
    <Link to="/category/bazar"> <li className='item'>Bazar</li></Link>
    <Link to="/category/mesas"> <li className='item'>Mesas</li></Link>
    <Link to='/category/deco'> <li className='item'>Decoracion</li></Link>
    <Link to='/category/sillones'> <li className='item'>Sillones</li></Link>
    <Link to='/category/promociones'> <li className='item'>Promociones</li></Link>
    <CartWidget/>
   {/* <span>{value.message}</span>*/}
    <Select handleColor ={onChangeColor}/>
    </ul>
  </div>
  
    </>
  );
}

export default NavBar



