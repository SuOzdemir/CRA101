import './App.css';
import Test from "./component/Test";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Test baslik="Birinci Başlık" />
        <Test  baslik="İkinci Başlık" />
      </header>
    </div>
  );
}

export default App;
