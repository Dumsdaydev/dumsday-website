import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <h1>About Dumsday</h1>
      </section>

      <section className="about-section">
        <h2> SOFTWARE DEVELOPER</h2>
        <p>
            Experienced Software Engineer | Expertise in JavaScript, TypeScript, Node.js, React.js, Gatsby.js, Next.js, Express.js, Electron, MongoDB, SQL, GraphQL, Firebase, AWS, Docker, Git, and more
        </p>
      </section>

      {/* <section className="about-section">
        <h2>Our Mission</h2>
        <p>
          We aim to deliver quality items that don’t just serve a function—but make you smile, think, or
          laugh while doing it.
        </p>
      </section> */}

      <section className="about-section">
        <h2>Why Dumsday?</h2>
        <p>
        My name is Dunsin Agboola. I fondly like to be called Dumsday. I am based in Nigeria

        I am a highly skilled, experienced, and dynamic software developer with over 7 years of extensive experience. I am an expert in designing and developing front-end and back-end solutions for startups and enterprises, possessing an exceptional understanding of various web development frameworks and libraries, with an aim to enhance business operations and facilitate growth, meeting both current and future business requirements.

        I am comfortable developing on front-end or back-end. I primarily use Nodejs and I specialize in MERN stack (MongoDB, Express, React and Nodejs) but picking up a new framework is not a problem.

        Broad spectrum of expertise also covers web application development, desktop application (Electron), API development and integration, and cloud development, alongside developing and deploying web applications to the cloud, developing and executing result-driven web development policies that optimize user experience, set objectives and overall growth of the organization.

        In tech, I am a huge fan of great mobile experience driven by AI. At a tech event, you'd probably find me in a booth with a VR headset on, or trying to play a game (and possibly failing at it). I am also passionate about the developer community.

        My non-tech passion includes education & music. I believe everyone should be given a chance at basic education.

        Remote work pro, thriving as a team player with adaptability and collaborative prowess in every project.
        </p>
      </section>
    </div>
  );
};

export default About;