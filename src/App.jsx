import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { NavRB } from "./components/TheNav";
import { Container } from "react-bootstrap";

import Memes from "./components/Memes";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Admin from "./components/Admin";
import Perfil from "./components/Perfil";
import { useState } from "react";



function App() {
  const [seccion, setSeccion] = useState("memes");

  return (
    <div className="footer-fix">
      <NavRB setSeccion={setSeccion} />
      <Container>
        {/* entonces tenemos un renderizado condicional para cada uno de nuestras secciones. */}
        {seccion === "memes" && <Memes memes={memes} />}
        {seccion === "login" && <Login />}
        {seccion === "perfil" && <Perfil />}
        {seccion === "admin" && <Admin />}
      </Container>
      <Footer />
    </div>
  );
}

export default App;
