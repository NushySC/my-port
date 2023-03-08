import logo from "../../images/ank.svg";
import "./navbar.scss";

function Navbar() {
  return (
    <nav className="navbar" id="navbar">
      <a href="#">
        <img src={logo} alt="anuska_logo" className="logo" />
      </a>

      <div className="navbar__link toggle">
        <i className="fas fa-bars"></i>
      </div>

      <ul className="navbar__items right">
        <li className="navbar__link">
          <a href="#intro" className="active">
            Intro
          </a>
        </li>
        <li className="navbar__link">
          <a href="#skills">Skills</a>
        </li>
        <li className="navbar__link">
          <a href="#portfolio">Portfolio</a>
        </li>
        <li className="navbar__link">
          <a href="#about">About</a>
        </li>
        <li className="navbar__link">
          <a href="#contact">Contact</a>
        </li>
        <li className="navbar__link">
          <a href="#social">Social</a>
        </li>
        {/* <li className="navbar__link">
                <div className="language">
                    <button className="dropbtn" title="language">
                        <span className="fas fa-globe"></span>
                    </button>
                    <div className="language-content">
                        <a href="#" className="lang">English</a>
                        <a href="#" className="lang">Spanish</a>
                    </div>
                </div>
            </li>  */}
      </ul>
    </nav>
  );
}
export default Navbar;
