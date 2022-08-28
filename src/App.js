import NavBar from './components/NavBar';
import './App.css';
import Ad from './components/Ad';
import ItemListContainer from './container/ItemListContainer/index';

import Logo from './components/img/logo.jpeg';

function App() {
  
  //agrego un arreglo categories
  const categories = ['Electrodomestico' , 'Audio & Video' ,'Clothing'];
  const temperaturas = 18;
  
  return (

    <>
    <div className='logo-up'>
    <img src={Logo}/>
    </div>
    <h1 className='title'>Home&Deco</h1>
    
    <NavBar
    categoria = {categories} /*como lo recibe = {valor}*/
    temp = {temperaturas}
    
    />
    <ItemListContainer
      greeting = {'Todos los productos en 30% OFF - temporada invierno 2022'}
      />

      {/*<Ad>
        <h1>Titulo del anuncio</h1>
        <span>Un anuncio muy molesto</span>
  </Ad>*/}
    </>
  );
}

export default App;
