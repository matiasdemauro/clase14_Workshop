import React , { useState } from 'react'
import CartWidget from '../CartWidget';
import Select from '../Select';
import './style.css';

import { Link } from 'react-router-dom';
import AuthContainer from '../../container/AuthContainer';
import { Button } from '@mui/material';




const NavBar = () => {
 //Nombre del estado, setNombreDelEstado
 const [navColor,setNavColor] = useState("#f3f3f3")
 


 const [loginModal , setLoginModal] = useState(false);
 const[signupModal, setSignupModal] = useState(false);
 
 const onChangeColor = (event) =>{
  //console.log(event);
 // console.log(event.target.value)
 const color = event.target.value;
  setNavColor(color);
 }

 const handleLogin = () => {
  setLoginModal(true);
};

const handleSignup = ()=> {
  setSignupModal(true);
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
    <div className='buttons-container'>
      <Button
        size='medium'
        variant='outlined'
        onClick={handleLogin}
        >
        Login
      </Button>
      <Button
        size='medium'
        variant='contained'
        onClick={handleSignup}
        >
        Signup
      </Button>
    </div>
    <Link to='/cart'><CartWidget/></Link>
   {/* <span>{value.message}</span>*/}
    <Select handleColor ={onChangeColor}/>
    </ul>
  </div>
  {(loginModal || signupModal) && (
    <AuthContainer
      handleClose={()=>{
        setLoginModal(false);
        setSignupModal(false);
      }}
      login={loginModal}
      signUp={signupModal}
      />
  )}    
    </>
  );
};


  

export default NavBar



