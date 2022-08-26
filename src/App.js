import NavBar from './components/NavBar';
import ItemListContainer from './container/ItemListContainer';
import './App.css';
import Ad from './components/Ad';


function App() {
  
  //agrego un arreglo categories
  const categories = ['Electrodomestico' , 'Audio & Video' ,'Clothing'];
  const temperaturas = 18;
  
  return (

    <>
    <h1>GIANNE Home&Deco</h1>
    <NavBar
    categoria = {categories} /*como lo recibe = {valor}*/
    temp = {temperaturas}
    />
    <ItemListContainer
      greeting = {'Hola, bienvenido a nuestra nueva app !'}
    />
      <Ad>
        <h1>Titulo del anuncio</h1>
        <span>Un anuncio muy molesto</span>
      </Ad>
    </>
  );
}

export default App;
