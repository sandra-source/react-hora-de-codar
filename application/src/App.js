import './App.css';
import Evento from './components/Evento';
import Form from './components/Form';

function App() {

  const nome = 'Maria do Carmo';

  return (
    <div className="App">
      <h1>Testando eventos</h1>
      <Evento numero={21} />
      <Evento numero={44} />
      <Form />
    </div>
  );
}

export default App;
