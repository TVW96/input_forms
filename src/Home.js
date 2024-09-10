import "./App.css";
import Form1 from './Form1';
import Form2 from './Form2';
import PopUpWindow from "./PopUpWindow";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Dynamic header</h3>
      </header>
      <div className="component">
        <Form1 />
      </div>
    </div>
  );
}

export default App;
