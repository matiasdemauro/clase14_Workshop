import React from 'react'
import './style.css'
const Select = ({handleColor}) => {
  return (
    <>
    <div className='selector'>
    <select name="navColor"  onChange={handleColor}>
        <option value="#f3f3f3">Light</option>
        <option value="#000">Dark</option>
        
        
    </select>
    </div>
    </>
    );
};

export default Select