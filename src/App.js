import NavBar from './components/NavBar';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ItemListContainer from './container/ItemListContainer/index';

import logo from './logo.jpeg'
import ItemDetailContainer from './container/ItemDetailContainer/index';
import NotFound from './components/NotFound';
import Cart from './container/CartContainer';
import ShopProvider from './context/ShopProvider';

function App() {
  return (

    <ShopProvider>
      <BrowserRouter>
      <div className='logo-up'>
      <img src={logo} alt='logo'/>
      </div>
      <h1 className='title'>Home&Deco</h1>
      <NavBar/>
      {/*Definimos las rutas*/}
      <Routes>
          <Route path='/' element={<ItemListContainer greeting = {'Todos los productos en 30% OFF - temporada invierno 2022'}/>}  />
          <Route path='/category/:categoryId' element={<ItemListContainer/>}  />
          <Route path='/detail/:productId' element={<ItemDetailContainer/>}/>
          <Route path='*' element = {<Cart/>}></Route>
          <Route path='*' element= {<NotFound/>}/>
      </Routes>
      </BrowserRouter>
    </ShopProvider>
  );
    
    
}

export default App;
