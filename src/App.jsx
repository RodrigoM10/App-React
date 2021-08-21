import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { TheNav } from './components/TheNav';
// import { Contador } from './components/Contador';
import { NavRB } from './components/TheNav';
import { Container } from 'react-bootstrap';
import { Productos } from './components/Productos';



function App() {

  let title = " Productos destacados de verano"
  let title1 = " Productos destacados de Invierno"

  let producto = {
    id: '1',
    nombre: 'pantalon verde',
    imagen: 'https://tse1.mm.bing.net/th?id=OIP.rTYfHDrTyYL7U2Dl8S0gTAAAAA&pid=Api&P=0&w=300&h=300'
  }
  let producto1 = {
    id: '2',
    nombre: 'pantalon azul',
    imagen: 'https://tse2.mm.bing.net/th?id=OIP.i9r0JTzi3Bf93FwpsLiUGAHaJ4&pid=Api&P=0&w=300&h=300'
  }
  return (  
    <div>
      <NavRB />
      <Container>
      <h1>Hola Mundo</h1>
      {/* <Contador /> */}
      <Productos title={title} producto={producto} />
      <Productos title={title1} producto={producto1} />
      </Container>
    </div>
  );
}

export default App;
