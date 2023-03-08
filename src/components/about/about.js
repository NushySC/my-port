import "./about.scss";
import anuska from "../../images/anuska_back.jpg";

function About() {
  return (
    <section class="section" id="about" data-text=" #232323" data-bg="#A0FF1F">
      <div class="container">
        <h2 class="container__title">About</h2>
        <div class="content">
          <div class="text">
            <p class="container__text">
              I would love to help you with your website, feel free to get in
              touch!
            </p>
            <figure class="profile-pic">
              <img
                class="profile-pic__img"
                src={anuska}
                alt="anuska's picture"
              />
            </figure>
            <p class="container__text">
              I’m a <strong>frontend developer</strong> and
              <strong>visual designer </strong>living in
              <strong>Madrid</strong> with experience in many different areas of
              web development from frontend engineering to user experience and
              visual design.
            </p>

            <p class="container__text">
              I have worked in web and print based projects for a range of
              clients providing design services and web development solutions
              and collaborated with several clients in the USA and Europe. Also
              I have worked as a frontend developer (and currently do) as part
              of a team in various companies across Europe.
            </p>

            <p class="container__text">
              I have acquired project and time management skills, as well as the
              ability to communicate effectively with team members and clients
              while meeting milestones and tight deadlines.
            </p>
            <p class="container__text">
              Aside from web development, I enjoy drawing, painting, reading,
              photography and playing guitar, to name a few.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
