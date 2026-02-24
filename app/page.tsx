export default function Home() {
  return (
    <main>

      {/* HERO */}
<section className="hero">
  <div className="hero-content">
    <div>
      <h1>Build Modern Websites</h1>
      <p>
        We create fast, scalable.
      </p>
      <button className="btn">Start Project</button>
    </div>
  </div>
</section>

     <div className="about-home">

  <div className="about-text">
    <h2>About Our Company</h2>
    <p>
      We help businesses grow online by creating fast, modern and
      professional websites using the latest technologies.
    </p>

    <p>
      Our goal is to build powerful digital products that improve
      brand presence and deliver real results.
    </p>

    {/* small cards */}
    <div className="about-features">

      <div className="feature">
        <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop"
      alt="team" />
        <div>
          <h4>Expert Team</h4>
          <p>Professional developers and designers.</p>
        </div>
      </div>

      <div className="feature">
  <img
    src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop"
    alt="modern office"
  />
  <div>
    <h4>Modern Office</h4>
    <p>Creative workspace for innovation.</p>
  </div>
</div>

    </div>

    <a href="/about" className="learn-btn">Learn More</a>

  </div>

</div>
      {/* SERVICES */}
      <section className="container section">
        <h2>Our Services</h2>

        <div className="grid">
          <div className="card">
            <h3>Website Development</h3>
            <p>Modern and fast websites.</p>
          </div>

          <div className="card">
            <h3>UI / UX Design</h3>
            <p>Clean and user-friendly design.</p>
          </div>

          <div className="card">
            <h3>SEO Optimization</h3>
            <p>Improve your Google ranking.</p>
          </div>

          <div className="card">
            <h3>Website Maintenance</h3>
            <p>Keep your website updated.</p>
          </div>
        </div>
      </section>


      {/* WHY CHOOSE US */}
      <section className="container section">
        <h2>Why Choose Us</h2>

        <div className="grid">
          <div className="card">
            <h3>Fast Performance</h3>
            <p>Optimized websites with high speed.</p>
          </div>

          <div className="card">
            <h3>Professional Design</h3>
            <p>Modern UI design.</p>
          </div>

          <div className="card">
            <h3>Responsive</h3>
            <p>Mobile friendly layout.</p>
          </div>

          <div className="card">
            <h3>Secure</h3>
            <p>Safe and reliable websites.</p>
          </div>
        </div>
      </section>


       {/* CTA */}
      <section className="services-cta">
        <div className="container">
          <h2>Let's Build Something Amazing</h2>
          <p>Start your project with us today.</p>
          <a href="/contact" className="cta-btn">Contact Us</a>
        </div>
      </section>

    </main>
  );
}