import React from 'react'
import CartWidget from '../CartWidget';
import Select from '../Select';
import './style.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

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
       backgroundColor : navColor,
       
    }} className='menu'
    > 
    <Link to='/'>  <li className='item'>Gianne-app</li> </Link>
    <Link to="/category/men's clothing"> <li className='item'>Men's clothing</li></Link>
    <Link to="/category/women's clothing"> <li className='item'>Women's clothing</li></Link>
    <Link to='/category/electronics'> <li className='item'>Electronics</li></Link>
    <Link to='/category/jewelery'> <li className='item'>Jewelery</li></Link>
    <CartWidget/>
        
  </ul>
  <Select handleColor ={onChangeColor}/>
  </div>
  
    </>
  );
}

export default NavBar



