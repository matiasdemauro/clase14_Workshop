import NavBar from './components/NavBar';

import './App.css';

function App() {
  return (
    <>
    <NavBar/>
    <div className="App">
      {/* Estilos en linea*/}
      <p style={
        {
          color: 'salmon',
          padding: '10px',
          marginTop:'100px',
        }
      }>Bienvenidos a la clase</p>
      <hr/>
    <input placeholder='Ingrese algun contenido'/>
    </div>
    </>
  );
}

export default App;
