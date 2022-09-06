import NavBar from './components/NavBar';
import './App.css';

import ItemListContainer from './container/ItemListContainer/index';

import logo from './logo.jpeg'

function App() {
  

  
  
  return (

    <>
    <div className='logo-up'>
    <img src={logo} alt='logo'/>
    </div>
    <h1 className='title'>Home&Deco</h1>
    <NavBar/>
    <ItemListContainer
      greeting = {'Todos los productos en 30% OFF - temporada invierno 2022'}/>
    </>
  );
}

export default App;
