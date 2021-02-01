import "./App.css";
import Header from "./components/layout/Header";
import Home from "./components/page/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Home />
      </div>
    </div>
  );
}

export default App;
