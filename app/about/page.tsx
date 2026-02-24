export default function About() {
  return (
    <main>

      {/* HERO */}
      <section className="about-hero">
        <div className="container">
          <h1>We Build Modern Websites</h1>
          <p>
            Our team creates fast, scalable and professional websites
            that help businesses grow online.
          </p>
        </div>
      </section>

      {/* ABOUT CONTENT */}
      <section className="section">
        <div className="container about-layout">

          <div className="about-text">
            <h2>Who We Are</h2>
            <p>
              We are a passionate team of developers focused on building
              high-quality websites using modern technologies like Next.js
              and React.
            </p>

            <p>
              Our goal is to create websites that are fast, secure,
              responsive and visually impressive.
            </p>
          </div>

          <div className="about-box">
            <h3>What We Focus On</h3>
            <ul>
              <li>Modern Website Development</li>
              <li>Clean UI / UX Design</li>
              <li>Performance Optimization</li>
              <li>SEO Friendly Websites</li>
            </ul>
          </div>

        </div>
      </section>

      {/* STATS */}
      <section className="stats-section">
        <div className="container stats-grid">

          <div className="stat-card">
            <h2>50+</h2>
            <p>Projects Completed</p>
          </div>

          <div className="stat-card">
            <h2>30+</h2>
            <p>Happy Clients</p>
          </div>

          <div className="stat-card">
            <h2>3+</h2>
            <p>Years Experience</p>
          </div>

          <div className="stat-card">
            <h2>24/7</h2>
            <p>Support</p>
          </div>

        </div>
      </section>

      {/* MISSION */}
      <section className="section">
        <div className="container mission-grid">

          <div className="mission-card">
            <h3>Our Mission</h3>
            <p>
              To deliver high-quality websites that help businesses grow
              faster in the digital world.
            </p>
          </div>

          <div className="mission-card">
            <h3>Our Vision</h3>
            <p>
              To become a trusted web development partner for startups
              and companies worldwide.
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}