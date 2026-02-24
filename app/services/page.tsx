export default function ServicesPage() {
  return (
    <main className="services-page">

      {/* HERO */}
      <section className="services-hero">
        <div className="container">
          <h1>Our Services</h1>
          <p>
            Professional digital solutions to grow your business online.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="container services-grid">

        <div className="service-card">
          <h3>Website Development</h3>
          <p>
            Fast, modern and scalable websites built with the latest technologies.
          </p>
        </div>

        <div className="service-card">
          <h3>UI / UX Design</h3>
          <p>
            Clean and user-friendly designs that improve user experience.
          </p>
        </div>

        <div className="service-card">
          <h3>Performance Optimization</h3>
          <p>
            Improve website speed and performance for better results.
          </p>
        </div>

        <div className="service-card">
          <h3>SEO Optimization</h3>
          <p>
            Rank higher on search engines and grow your online presence.
          </p>
        </div>

        <div className="service-card">
          <h3>Website Maintenance</h3>
          <p>
            Regular updates, security and support for your website.
          </p>
        </div>

        <div className="service-card">
          <h3>Custom Web Apps</h3>
          <p>
            Powerful and scalable custom applications for your business.
          </p>
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