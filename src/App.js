import './App.css';
import Test from "./component/Test";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Test baslik="Birinci Başlık" p1="Paragraf 01" />
        <Test  baslik="İkinci Başlık" />
      </header>
    </div>
  );
}

export default App;
