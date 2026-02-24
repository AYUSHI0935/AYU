import Link from "next/link";

export default function BlogPage() {
  return (
    <main className="blog-page">

      {/* HERO */}
      <section className="blog-hero">
        <div className="container">
          <h1>Our Blog</h1>
          <p>Latest insights, tutorials and updates from our team.</p>
        </div>
      </section>

      {/* FEATURED POST */}
      <section className="container featured-blog">
        <div className="featured-card">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
            alt="featured blog"
          />
          <div className="featured-content">
            <span className="tag">Featured</span>
            <h2>How Modern Websites Are Built with Next.js</h2>
            <p>
              Discover how businesses build fast, scalable and modern
              websites using new technologies.
            </p>
            <Link href="#">Read Article</Link>
          </div>
        </div>
      </section>

      {/* BLOG GRID */}
      <section className="container blog-grid">

        <div className="blog-card">
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
            alt=""
          />
          <div className="blog-content">
            <span className="tag">Design</span>
            <h3>UI/UX Trends in Modern Websites</h3>
            <p>Latest design ideas improving user experience.</p>
            <Link href="#">Read More</Link>
          </div>
        </div>

       <div className="blog-card">
  <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71" />

  <div className="blog-content">
    <span className="tag">Design</span>
    <h3>UI/UX Trends in Modern Websites</h3>
    <p>Latest design ideas improving user experience.</p>

    <Link href="/blog/ui-ux-trends">Read More</Link>
  </div>
</div>

        <div className="blog-card">
          <img
            src="https://images.unsplash.com/photo-1559027615-cd4628902d4a"
            alt=""
          />
          <div className="blog-content">
            <span className="tag">Startup</span>
            <h3>How Startups Grow Online</h3>
            <p>Strategies used by fast-growing companies.</p>
            <Link href="#">Read More</Link>
          </div>
        </div>

      </section>

    </main>
  );
}