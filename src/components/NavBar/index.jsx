import './style.css'
import React from 'react'

const NavBar = () => {
  return (
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
  )
}

export default NavBar



