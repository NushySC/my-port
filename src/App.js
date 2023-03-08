import "./App.scss";
import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero/hero";
import Intro from "./components/intro/intro";
import Parallax from "./components/parallax/parallax";
// import './hooks/prevScrollpos';
// import './hooks/background';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Intro />
      <Parallax />
    </div>
  );
}

export default App;
