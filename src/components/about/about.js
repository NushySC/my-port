import "./about.scss";
import anuska from "../../images/anuska_back.jpg";

function About() {
  return (
    <section className="section" id="about" data-text=" #232323" data-bg="#A0FF1F">
      <div className="container">
        <h2 className="container__title">About</h2>
        <div className="content">
          <div className="text">
            <p className="container__text">
              I would love to help you with your website, feel free to get in
              touch!
            </p>
            <figure className="profile-pic">
              <img
                className="profile-pic__img"
                src={anuska}
                alt="anuska's picture"
              />
            </figure>
            <p className="container__text">
              I’m a <strong>frontend developer</strong> and
              <strong>visual designer </strong>living in
              <strong>Madrid</strong> with experience in many different areas of
              web development from frontend engineering to user experience and
              visual design.
            </p>

            <p className="container__text">
              I have worked in web and print based projects for a range of
              clients providing design services and web development solutions
              and collaborated with several clients in the USA and Europe. Also
              I have worked as a frontend developer (and currently do) as part
              of a team in various companies across Europe.
            </p>

            <p className="container__text">
              I have acquired project and time management skills, as well as the
              ability to communicate effectively with team members and clients
              while meeting milestones and tight deadlines.
            </p>
            <p className="container__text">
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
