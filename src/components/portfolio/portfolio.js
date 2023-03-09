import "./portfolio.scss";
import "./_flip.scss";

import yoga from "../../images/yoga.jpg";
import travelsie from "../../images/travelsie.jpg";
import belfast from "../../images/belfast.jpg";
import coffee from "../../images/coffee.jpg";
import forkify from "../../images/forky.jpg";
import maimuna from "../../images/maimuna.jpg";
import museum from "../../images/museum.jpg";
import ghibli from "../../images/ghibli.jpg";
import game from "../../images/game_radar.jpg";
import moliner from "../../images/moliner.jpg";
import weather from "../../images/weather.jpg";

function Portfolio() {
  return (
    <section
      className="section"
      id="portfolio"
      data-text=" #232323"
      data-bg="#420FE7"
    >
      <div className="container">
        <h2 className="container__title">Portfolio</h2>
        <div className="portfolio-cont">
          <figure className="imghvr-reveal-up">
            <img src={game} alt="game_radar" />
            <figcaption>
              <h3>Game Radar</h3>
              <h4>PHP, JS, HTML, CSS</h4>
              <h5>Final project for Coding Bootcamp Praha.</h5>
              <p>
                Game Radar is an application that allows game enthusiasts to
                engage with local friends, create events, trade games and share
                their game collection with friends.
              </p>
              <a href="http://gameradar.data4you.cz/" target="_blank"></a>
            </figcaption>
          </figure>

          <figure className="imghvr-reveal-up">
            <img src={yoga} alt="yoga tours" />
            <figcaption>
              <h3>Yoga Tours</h3>
              <h4>HTML, CSS</h4>
              <h5>Tours and retreats</h5>
              <a
                href="https://yogansh.netlify.com/"
                target="_blank"
                aria-label="yogatours"
              ></a>
            </figcaption>
          </figure>

          <figure className="imghvr-reveal-up">
            <img src={travelsie} alt="travelsie" />
            <figcaption>
              <h3>Travelsie</h3>
              <h4>HTML, CSS</h4>
              <h5>Hotels website</h5>
              <a
                href="https://travelsynsh.netlify.com/"
                target="_blank"
                aria-label="travelsie"
              ></a>
            </figcaption>
          </figure>

          <figure className="imghvr-reveal-up">
            <img src={forkify} alt="forkify" />
            <figcaption>
              <h3>Forkyfy</h3>
              <h4>JS, CSS</h4>
              <h5>Recipes Website</h5>
              <a
                href="/Websites/forkyfy/index.html"
                target="_blank"
                aria-label="forkify"
              ></a>
            </figcaption>
          </figure>

          <figure className="imghvr-reveal-up">
            <img src={museum} alt="museumnsh" />
            <figcaption>
              <h3>Gallerish</h3>
              <h4>HTML, CSS</h4>
              <h5>Museum Website</h5>
              <a
                href="https://museumnsh.netlify.com/"
                target="_blank"
                aria-label="gallerish"
              ></a>
            </figcaption>
          </figure>

          <figure className="imghvr-reveal-up">
            <img
              src={maimuna}
              alt="bootstrap
          website"
            />
            <figcaption>
              <h3>Maimuna</h3>
              <h4>HTML, CSS, Bootstrap</h4>
              <a
                href="/Websites/maimuna/index.html"
                target="_blank"
                aria-label="maimuna"
              ></a>
            </figcaption>
          </figure>

          <figure className="imghvr-reveal-up">
            <img src={coffee} alt="cofee hipster website" />
            <figcaption>
              <h3>Coffee Bar</h3>
              <h4>HTML, CSS, Bootstrap</h4>
              <a
                href="/Websites/coffee/index.html"
                target="_blank"
                aria-label="hipster cafe"
              ></a>
            </figcaption>
          </figure>

          <figure className="imghvr-reveal-up">
            <img src={ghibli} alt="studio ghibli website" />
            <figcaption>
              <h3>Studio Ghibli Database</h3>
              <h4>React, CSS</h4>
              <a
                href="/Websites/Studio%20Ghibli/index.html"
                target="_blank"
                aria-label="Studio Ghibli"
              ></a>
            </figcaption>
          </figure>

          <figure className="imghvr-reveal-up">
            <img src={weather} alt="weather app" />
            <figcaption>
              <h3>Weather App</h3>
              <h4>React, CSS</h4>
              <a
                href="https://weather-app-anuska.netlify.com/"
                target="_blank"
                aria-label="weather app"
              ></a>
            </figcaption>
          </figure>

          <figure className="imghvr-reveal-up">
            <img src={moliner} alt="Bootstrap website" />
            <figcaption>
              <h3>Moliner</h3>
              <h4>HTML, CSS, Bootstrap</h4>
              <a
                href="/Websites/moliner/index.html"
                target="_blank"
                aria-label="moliner"
              ></a>
            </figcaption>
          </figure>

          <figure className="imghvr-reveal-up">
            <img src={belfast} alt="simple website" />
            <figcaption>
              <h3>Belfast Kindergarden</h3>
              <h4>HTML, CSS</h4>
              <a
                href="/Websites/Belfast%20Kinderdarden/html/index.html"
                target="_blank"
                aria-label="belfast kindergarden"
              ></a>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
