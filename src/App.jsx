import './App.css';
import { TheNav } from './components/TheNav';
import { Contador } from './components/Contador';

function App() {
  return (
    
    <div className="text-center">
      <TheNav/>
      <h1>Hola Mundo</h1>
      <Contador/>
    </div>
  )
}

export default App;
