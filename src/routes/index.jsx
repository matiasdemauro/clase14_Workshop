import React from 'react'
import NavBar from '../components/NavBar/index';
import NotFound from '../components/NotFound';
import Cart from '../container/CartContainer';
import ItemListContainer from '../container/ItemListContainer/index';
import logo from '../logo.jpeg'
import ItemDetailContainer from '../container/ItemDetailContainer/index';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const Routing = () => {
  return (

    <BrowserRouter>
      <div className='logo-up'>
        <img src={logo} alt='logo' />
      </div>
      <h1 className='title'>Home&Deco</h1>
      <NavBar />
      <Routes>
        <Route path='/'
          element={<ItemListContainer
            greeting={'Todos los productos en 30% OFF - temporada primavera 2022'} />}
        />
        <Route path='/category/:categoryId'
          element={<ItemListContainer />}
        />
        <Route path='/detail/:productId'
          element={<ItemDetailContainer />}
        />
        <Route path='/cart' element={<Cart />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>

  )
}

export default Routing