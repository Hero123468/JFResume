import "./Resume.css";

const Resume = () => {
  return (
    <div className="resume-wrapper">
      <div className="resume-box">
        <h1 className="name">Jesse Falleur </h1>
        <p className="headline">Full-Stack JavaScript Developer</p>

        <section className="resume-section">
          <h2>Summary</h2>
          <p>
            Passionate full-stack JavaScript developer with 24 weeks of intensive hands-on training in modern web and mobile technologies. Skilled in building responsive web applications using React, Node, and Express.
          </p>
        </section>

        <section className="resume-section">
          <h2>Technical Skills</h2>
          <ul className="skills-list">
            <li>HTML & CSS (Flexbox, Semantic Tags)</li>
            <li>JavaScript (ES6+), jQuery, AJAX</li>
            <li>ReactJS, React Native, TypeScript</li>
            <li>Node.js, Express, MongoDB</li>
            <li>Git, GitHub, REST APIs</li>
          </ul>
        </section>

        <section className="resume-section">
          <h2>Course Experience</h2>
          <ul>
            <li><strong>Frontend:</strong> HTML, CSS, Bootstrap, Mobile-first Design</li>
            <li><strong>JavaScript:</strong> Functions, Loops, Data Types, Conditions</li>
            <li><strong>Projects:</strong> Cloned websites, Responsive apps, Final full-stack project</li>
            <li><strong>ReactJS:</strong> Components, Props, Hooks, API Calls</li>
            <li><strong>React Native:</strong> Mobile apps with API integration</li>
            <li><strong>Backend:</strong> Node.js, Express, MongoDB</li>
          </ul>
        </section>

        <section className="resume-section">
          <h2>Bonus Knowledge</h2>
          <p>Sass, PostgreSQL, AWS, Linux, NGINX, JavaScript Algorithms</p>
        </section>
      </div>
    </div>
  );
};

export default Resume;