import { Link } from 'react-router-dom';

export default function CTABanner() {
  return (
    <div className="cta-banner-container">
      <section className="cta-banner" data-aos="zoom-in" data-aos-duration="600" data-aos-offset="100">
        <p className="cta-banner__label">Admissions Open · 2026–27</p>
      <h1>Shape Your Child's Future at Global School</h1>
      <p>World-class education, character-driven learning, and a campus built for excellence.<br />Secure your child's seat today.</p>
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        <Link to="/admissions" className="btn btn-accent btn-pill btn-lg">
          Apply Now <i className="fas fa-arrow-right" />
        </Link>
        <Link to="/contact" className="btn btn-outline-white btn-pill btn-lg">
          Enquire <i className="fas fa-phone-alt" />
        </Link>
      </div>
      </section>
    </div>
  );
}
