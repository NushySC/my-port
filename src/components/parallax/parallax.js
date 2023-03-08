
import './parallax.scss';

function Parallax() {
  return (
    <section
    class="parallax section"
    id="skills"
    data-bg="#e41352"
    data-text="#232323"
  >
    <div class="container--special">
      <h2 class="container container__title">Skills</h2>
      <div class="bg__orange">
        <div class="capture frontend">
          <h3 class="skill">Frontend</h3>
          <p class="container__text--skill">
            I enjoy bringing ideas to life in the browser
            and combining design and business logic to
            achieve a <strong>user-facing</strong> product.
            To do this successfully, a wide skill set is
            necessary to produce a quality user experience
            that leads to meeting business goals.
          </p>
          <p class="container__text--skill">
            My main focus is on
            <strong>mobile-first</strong>
            <strong>responsive</strong> and
            <strong>accessible</strong> websites designed
            with <strong>HTML5</strong>,
            <strong>JavaScript</strong>,
            <strong>CSS3</strong> (and Sass, Scss, Less) and
            I also develop in React and Angular.
          </p>

          <div class="row justify-c skills">
            <span class="fab fa-html5 tooltip-html"></span>
            <span
              class="fab fa-css3-alt tooltip-css"
            ></span>
            <span class="fab fa-js tooltip-js"></span>
            <span
              class="fab fa-bootstrap tooltip-boot"
            ></span>
            <span
              class="fab fa-angular tooltip-angular"
            ></span>
            <span class="fab fa-vuejs tooltip-vue"></span>
            <span class="fab fa-react tooltip-react"></span>
            <span class="fab fa-sass tooltip-sass"></span>
            <span class="fab fa-gulp tooltip-gulp"></span>
          </div>
        </div>
      </div>
      <div class="bg__red">
        <div class="capture ui">
          <h3 class="skill">UI and Design</h3>
          <p class="container__text--skill">
            I value simple content structure, clean design
            patterns, and thoughtful interactions. My
            approach to website design is to create a
            website that strengthens your company’s brand
            while ensuring ease of use and simplicity for
            all users.
          </p>
          <p class="container__text--skill">
            Once the proper information architecture is in
            place, I design the visual layer to create a
            beautiful user experience. Getting the interface
            right and most importantly, making it easy to
            navigate, are the keys to a successful app.
          </p>

          <div class="row justify-c skills">
            <span
              class="fab fa-sketch tooltip-sketch"
            ></span>
            <span class="fab fa-figma tooltip-figma"></span>
          </div>
        </div>
      </div>
      <div class="bg__green">
        <div class="capture e-commerce">
          <h3 class="skill">E-commerce</h3>
          <p class="container__text--skill">
            I build websites with WordPress. You can easily
            update every piece of content, turn sections on
            or off and so much more. The purpose of this
            kind of website is to let you manage content
            yourself, without the need of a developer.
          </p>
          <p class="container__text--skill">
            Typography, user experience, readability, and
            great design will get people engaged in your
            store.
          </p>
          <div class="row justify-c skills">
            <span
              class="fab fa-wordpress tooltip-wordpress"
            ></span>
            <span
              class="fab fa-shopify tooltip-shopify"
            ></span>
          </div>
        </div>
      </div>
    </div>
  </section>

  );
}

export default Parallax;
