import Header from "./components/Header";
import Game from "./components/Game";
import { GameContextProvider } from "./utils/context";
import "./App.css";

function App() {
  return (
    <div className="App">
      <GameContextProvider>
        <Header></Header>
        <Game></Game>
      </GameContextProvider>
    </div>
  );
}

export default App;
