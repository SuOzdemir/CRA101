import './App.css';
import Test from "./component/Test";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Test baslik="Birinci Başlık">
            <p>1. Paragraf</p>
            <p>2. Paragraf</p>
            <p>3. Paragraf</p>
        </Test>
        <Test  baslik="İkinci Başlık" />
      </header>
    </div>
  );
}

export default App;
