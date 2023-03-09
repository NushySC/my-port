import "./App.scss";
import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero/hero";
import Intro from "./components/intro/intro";
import Parallax from "./components/parallax/parallax";
import About from "./components/about/about";
import Footer from "./components/footer/footer";
import Portfolio from "./components/portfolio/portfolio";

import './hooks/prevScrollpos';
import './hooks/background';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Intro />
      <Parallax />
      <Portfolio />
      <About />
      <Footer />
    </div>
  );
}

export default App;
