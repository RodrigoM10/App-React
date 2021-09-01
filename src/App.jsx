import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { NavRB } from "./components/TheNav";
import { Container } from "react-bootstrap";

import Memes from "./components/Memes";
import Footer from "./components/Footer";

import { useState } from "react";



function App() {
  const [seccion, setSeccion] = useState("memes");

  return (
    <div className="footer-fix">
      <NavRB setSeccion={setSeccion} />
      <Container>

      </Container>
      <Footer />
    </div>
  );
}

export default App;
