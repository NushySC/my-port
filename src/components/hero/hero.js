
import './hero.scss';

function Hero() {
  return (
    <header className="header section">
    <h1 className="header__title">
        <div className="header__title--main">
            <span className="name">Anuska </span>
            <span className="lastname">Sampedro</span>
        </div>
        <div className="header__title--sub">
            Frontend Developer and Visual Designer
        </div>
    </h1>
    </header>
  );
}

export default Hero;
