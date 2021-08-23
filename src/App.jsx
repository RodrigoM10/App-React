import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { TheNav } from './components/TheNav';
// import { Contador } from './components/Contador';
import { NavRB } from './components/TheNav';
import { Container } from 'react-bootstrap';
import  Productos  from './components/Productos';

function App() {

  const title = " Productos destacados de verano"

  const productos = [
     {
      id: '1',
      nombre: 'Pantalon verde',
      img: 'https://tse1.mm.bing.net/th?id=OIP.rTYfHDrTyYL7U2Dl8S0gTAAAAA&pid=Api&P=0&w=300&h=300'
    },
    {
      id: '2',
      nombre: 'Pantalon azul',
      img: 'https://tse2.mm.bing.net/th?id=OIP.i9r0JTzi3Bf93FwpsLiUGAHaJ4&pid=Api&P=0&w=300&h=300'
    }
  ];


  return (  
    <div>
      <NavRB />
      <Container>
      <h1>Hola Mundo</h1>
      {/* <Contador /> */}
      <Productos title={title} productos={productos} />
      {/* <Productos title={title1} producto={producto1} /> */}
      </Container>
    </div>
  );
}

export default App;
