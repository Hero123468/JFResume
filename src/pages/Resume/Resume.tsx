import "./Resume.css";

const Resume = () => {
  return (
    <div className="resume-wrapper">
      <div className="resume-box">
        <h1 className="name">Jesse Falleur</h1>
        <p className="headline">Full-Stack JavaScript Developer</p>

        {/* SUMMARY */}
        <section className="resume-section">
          <h2>About Me</h2>
          <p>
            I’m a developer who builds things step-by-step. Whether it’s fixing internet outages, walking someone through a bank issue, or writing a React app from scratch — I make it work, and I don’t quit until it does. After years in tech support, I pivoted into full-stack development to turn problem-solving into building. This resume is part of that journey.
          </p>
        </section>

        {/* SKILLS */}
        <section className="resume-section">
          <h2>Skills</h2>
          <ul className="skills-list">
            <li>JavaScript (ES6+), TypeScript, React</li>
            <li>HTML, CSS, Responsive Design</li>
            <li>Node.js, Express, MongoDB</li>
            <li>Git, GitHub, REST APIs</li>
            <li>Debugging, Dev Tools, API Testing</li>
          </ul>
        </section>

        {/* EXPERIENCE */}
        <section className="resume-section">
          <h2>Work Experience</h2>
          
          <div className="job">
            <h3>Chat Support (Promoted) – T-Tech, Inc.</h3>
            <p className="job-dates">Nov 2023 – Present</p>
            <p>
              Helped customers resolve banking issues under tight rules and real pressure. Translated complex problems into step-by-step solutions. Promoted after proving I could do more than just answer questions — I solve the right problem the right way.
            </p>
          </div>

          <div className="job">
            <h3>Technical Support – Charter Communications</h3>
            <p className="job-dates">Jan 2018 – Jul 2019</p>
            <p>
              Helped customers fix network problems and understand what was happening. Turned jargon into plain English. Took detailed notes and always double-checked solutions.
            </p>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="resume-section">
          <h2>Projects</h2>

          <div className="project">
            <h3>JFResume (React, Vite)</h3>
            <p>
              This website. Includes a custom-built resume, an e-commerce mockup, and a boxing-themed game with sound and animation. Designed, built, and debugged every line myself.
            </p>
          </div>

          <div className="project">
            <h3>Reactok (React)</h3>
            <p>
              A component-driven React app to practice looping, layout, and debugging. Focused on clean state management and real-time updates.
            </p>
          </div>
        </section>

        {/* EDUCATION */}
        <section className="resume-section">
          <h2>Education</h2>
          <ul>
            <li>Full Stack Java Development – Claim Academy (Graduating Aug 2025)</li>
            <li>A.A.A. in Motion Picture Production – KD Conservatory</li>
            <li>Associate of Arts – St. Petersburg College</li>
          </ul>
        </section>

        {/* CERTIFICATIONS */}
        <section className="resume-section">
          <h2>Certifications (In Progress)</h2>
          <ul>
            <li>JavaScript, HTML, CSS – W3Schools (Aug 2025)</li>
            <li>TypeScript, React – W3Schools (Fall 2025)</li>
            <li>CPR Certified, Medication Aide – Past Roles</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Resume;
