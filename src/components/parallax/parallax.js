import "./parallax.scss";
import "./_tooltip.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngular,
  faBootstrap,
  faCss3,
  faHtml5,
  faJs,
  faVuejs,
  faSass,
  faReact,
  faGulp,
} from "@fortawesome/free-brands-svg-icons";

function Parallax() {
  return (
    <section
      className="parallax section"
      id="skills"
      data-bg="#e41352"
      data-text="#232323"
    >
      <div className="container--special">
        <h2 className="container container__title">Skills</h2>
        <div className="bg__orange">
          <div className="capture frontend">
            <h3 className="skill">Frontend</h3>
            <p className="container__text--skill">
              I enjoy bringing ideas to life in the browser and combining design
              and business logic to achieve a <strong>user-facing</strong>{" "}
              product. To do this successfully, a wide skill set is necessary to
              produce a quality user experience that leads to meeting business
              goals.
            </p>
            <p className="container__text--skill">
              My main focus is on
              <strong>mobile-first</strong>
              <strong>responsive</strong> and
              <strong>accessible</strong> websites designed with{" "}
              <strong>HTML5</strong>,<strong>JavaScript</strong>,
              <strong>CSS3</strong> (and Sass, Scss, Less) and I also develop in
              React and Angular.
            </p>

            <div className="row justify-c skills">
              <FontAwesomeIcon
                icon={faHtml5}
                className="tooltip-html fab fa-html5"
              />

              {/* <span className="fab fa-html5 tooltip-html"></span> */}
              <FontAwesomeIcon
                icon={faCss3}
                className="tooltip-css fab fa-css"
              />

              <FontAwesomeIcon icon={faJs} className="tooltip-js fab" />

              <FontAwesomeIcon
                icon={faBootstrap}
                className="tooltip-boot fab fa-bootstrap"
              />
              {/* <span className="fab fa-bootstrap tooltip-boot"></span> */}
              <FontAwesomeIcon
                icon={faAngular}
                className="tooltip-angular fab"
              />
              <FontAwesomeIcon icon={faVuejs} className="tooltip-vue fab" />

              <FontAwesomeIcon icon={faReact} className="tooltip-react fab" />

              <FontAwesomeIcon icon={faSass} className="tooltip-sass fab" />
              <FontAwesomeIcon icon={faGulp} className="tooltip-gulp fab" />
            </div>
          </div>
        </div>
        <div className="bg__red">
          <div className="capture ui">
            <h3 className="skill">UI and Design</h3>
            <p className="container__text--skill">
              I value simple content structure, clean design patterns, and
              thoughtful interactions. My approach to website design is to
              create a website that strengthens your company’s brand while
              ensuring ease of use and simplicity for all users.
            </p>
            <p className="container__text--skill">
              Once the proper information architecture is in place, I design the
              visual layer to create a beautiful user experience. Getting the
              interface right and most importantly, making it easy to navigate,
              are the keys to a successful app.
            </p>

            <div className="row justify-c skills">
              <span className="fab fa-sketch tooltip-sketch"></span>
              <span className="fab fa-figma tooltip-figma"></span>
            </div>
          </div>
        </div>
        <div className="bg__green">
          <div className="capture e-commerce">
            <h3 className="skill">E-commerce</h3>
            <p className="container__text--skill">
              I build websites with WordPress. You can easily update every piece
              of content, turn sections on or off and so much more. The purpose
              of this kind of website is to let you manage content yourself,
              without the need of a developer.
            </p>
            <p className="container__text--skill">
              Typography, user experience, readability, and great design will
              get people engaged in your store.
            </p>
            <div className="row justify-c skills">
              <span className="fab fa-wordpress tooltip-wordpress"></span>
              <span className="fab fa-shopify tooltip-shopify"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Parallax;
