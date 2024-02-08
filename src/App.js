import './App.css';
import Accordion from './components/accordion';
import RandomColor from './components/random-color';

function App() {
  return (
    <div className="App">
      {/* Accordion component */}
      <Accordion />

      {/* Random Color component */}
      <RandomColor />
    </div>
  );
}

export default App;
