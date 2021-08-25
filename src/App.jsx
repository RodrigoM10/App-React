import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import { TheNav } from './components/TheNav';
// import { Contador } from './components/Contador';
import { NavRB } from "./components/TheNav";
import { Container } from "react-bootstrap";
// import  Productos  from './components/Productos';
import Noticias from "./components/Noticias";

// const title = " Productos destacados de verano"
// const productos = [
//    {
//      id: '1',
//      nombre: 'Pantalon verde',
//      img: 'https://tse1.mm.bing.net/th?id=OIP.rTYfHDrTyYL7U2Dl8S0gTAAAAA&pid=Api&P=0&w=300&h=300'
//   },
//   {
//     id: '2',
//     nombre: 'Pantalon azul',
//     img: 'https://tse2.mm.bing.net/th?id=OIP.i9r0JTzi3Bf93FwpsLiUGAHaJ4&pid=Api&P=0&w=300&h=300'
//   }
// ];

const news = [
  {
    id: "1", 
    title: "Ultimo momento",
    subtitle: "",
    date: "10/10/2021",
    description: "Some quick example text to build on the card title and make up the bulk of the card",
    thumbnail: "https://tse2.mm.bing.net/th?id=OIP.i9r0JTzi3Bf93FwpsLiUGAHaJ4&pid=Api&P=0&w=300&h=300"
  },
  {
    id: "2", 
    title: "Ultimo momento !",
    subtitle: "",
    date: "10/10/2021",
    description: "Some quick example text to build on the card title and make up the bulk of the card",
    thumbnail: "https://tse2.mm.bing.net/th?id=OIP.i9r0JTzi3Bf93FwpsLiUGAHaJ4&pid=Api&P=0&w=300&h=300"
  },
  {
    id: "3", 
    title: "Ultimo momento !!!!!",
    subtitle: "",
    date: "10/10/2021",
    description: "Some quick example text to build on the card title and make up the bulk of the card",
    thumbnail: "https://tse2.mm.bing.net/th?id=OIP.i9r0JTzi3Bf93FwpsLiUGAHaJ4&pid=Api&P=0&w=300&h=300"
  },
];

// Para poder utilizar estados, seguramente se utiliza un formulario, como se usaba en crud. En este caso, seria un formulario pequeño con un input tipo select, para elegir la categoria de noticias que queremos ver.
//veamos lo que producen los estados en react
function App() {
  return (
    <div>
      <NavRB />
      <Container>
        <h1>Hola Mundo</h1>
        <Noticias noticias={news} /> 
        {/* <Contador /> */}
        {/* <Productos title={title} productos={productos} /> */}
        {/* <Productos title={title1} producto={producto1} /> */}
      </Container>
    </div>
  );
}

export default App;
