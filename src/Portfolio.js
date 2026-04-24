import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <header>
        <h1>Your Name</h1>
        <p>Cloud Engineer | Developer | Tech Enthusiast</p>
      </header>
      <section className="about">
        <h2>About Me</h2>
        <p>
          Welcome to my portfolio! I am passionate about cloud technologies and building scalable solutions. I enjoy learning new tools and sharing knowledge.
        </p>
      </section>
      <section className="projects">
        <h2>Projects</h2>
        <ul>
          <li>
            <strong>Automated Cloud Portfolio</strong> - A project to automate cloud portfolio deployment.
          </li>
          <li>
            <strong>Sample Project 2</strong> - Description of another project.
          </li>
        </ul>
      </section>
      <section className="contact">
        <h2>Contact</h2>
        <p>Email: your.email@example.com</p>
        <p>LinkedIn: linkedin.com/in/yourprofile</p>
      </section>
    </div>
  );
};

export default Portfolio;
