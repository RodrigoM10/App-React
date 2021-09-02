import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { NavRB } from "./components/TheNav";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import Characters from "./components/Characters";


function App() {

  return (
    <div className="footer-fix">
      <NavRB />
      <Container>
        <Characters/>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
