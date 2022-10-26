import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List'

function App() {

  const nome = 'Maria do Carmo';

  return (
    <div className="App">
      <Frase />
      <Frase />
      <SayMyName nome="Sandra" />
      <SayMyName nome="Apolo" />
      <SayMyName nome={nome} />
      <Pessoa foto="https://via.placeholder.com/150" nome="Sandra" idade="28" profissao="Programadora" />
      <List />
    </div>
  );
}

export default App;
