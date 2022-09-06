import React from 'react'
import './style.css'
const Select = ({handleColor}) => {
  return (
    <>
    <div className='selector'>
    <select name="navColor"  onChange={handleColor}>
        <option value="#f3f3f3">Default</option>
        <option value="blue">Blue</option>
        <option value="red">Red</option>
        
    </select>
    </div>
    </>
    );
};

export default Select