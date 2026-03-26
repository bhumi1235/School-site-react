import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { stats, programs, facilities, team, testimonials, leadership, siteInfo } from '../../data/siteData';

/* ── Hero Carousel ── */
const slides = [
  {
    img: '/img/carousel-1.webp',
    alt: 'Students in classroom',
    heading: 'Shaping Future Leaders\nThrough Quality Education',
    sub: 'Providing holistic education from Primary to Senior Secondary with modern infrastructure and experienced faculty.',
  },
  {
    img: '/img/carousel-2.webp',
    alt: 'Students learning together',
    heading: 'Where Learning Meets\nExcellence',
    sub: 'Empowering young minds for tomorrow through innovative teaching and a thriving campus community.',
  },
];

function Hero() {
  const [current, setCurrent] = useState(0);
  const next = useCallback(() => setCurrent(c => (c + 1) % slides.length), []);
  const prev = () => setCurrent(c => (c - 1 + slides.length) % slides.length);

  useEffect(() => {
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [next]);

  return (
    <section className="hero">
      {slides.map((slide, index) => (
        <div key={index} className={`hero__slide${index === current ? ' active' : ''}`}>
          <img src={slide.img} alt={slide.alt} />
          <div className="hero__overlay" />
          <div className="hero__content">
            <h1>{slide.heading.split('\n').map((l, i) => <span key={i}>{l}{i === 0 && <br />}</span>)}</h1>
            <p>{slide.sub}</p>
            <div className="hero__btns">
              <Link to="/about" className="btn btn-accent btn-pill">Learn More</Link>
              <Link to="/academics" className="btn btn-ghost btn-pill">Our Programs</Link>
            </div>
          </div>
        </div>
      ))}
      <button className="hero__arrow hero__arrow--prev" onClick={prev} aria-label="Previous"><i className="fas fa-chevron-left" /></button>
      <button className="hero__arrow hero__arrow--next" onClick={next} aria-label="Next"><i className="fas fa-chevron-right" /></button>
      <div className="hero__controls">
        {slides.map((_, i) => (
          <button key={i} className={`hero__dot${i === current ? ' active' : ''}`} onClick={() => setCurrent(i)} aria-label={`Slide ${i + 1}`} />
        ))}
      </div>
    </section>
  );
}

/* ── Portal Cards ── */
const portals = [
  { icon: 'fa-user-graduate', title: 'Student / Parent Portal', desc: 'Academic Dashboard & Fee Payments', to: '/student/login', variant: 'primary' },
  { icon: 'fa-chalkboard-teacher', title: "Teacher's ERP", desc: 'Attendance, Marks & Lesson Plans', to: '/teacher-portal', variant: 'accent' },
  { icon: 'fa-envelope-open-text', title: 'E-Newsletter', desc: 'Latest Events & Monthly Highlights', to: '/news', variant: 'primary' },
  { icon: 'fa-headset', title: 'Admission Help', desc: '24/7 Helpline for New Admissions', to: '/admissions', variant: 'accent' },
];

function Portals() {
  return (
    <section style={{ background: '#fff', padding: '4rem 0' }}>
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-up">
          <span className="section-label">Administrative Dashboard</span>
          <h2 className="section-title">Our Digital Presence & Portal Access</h2>
        </div>
        <div className="row-4" data-aos="fade-up" data-aos-delay="100">
          {portals.map(p => (
            <div key={p.title} className={`portal-card portal-card--${p.variant} hover-lift`}>
              <div className={`portal-card__icon text-${p.variant === 'accent' ? 'accent' : 'primary'}`}>
                <i className={`fas ${p.icon}`} />
              </div>
              <h5>{p.title}</h5>
              <p>{p.desc}</p>
              <Link to={p.to} className={`btn btn-sm btn-outline btn-pill`}>
                {p.title.includes('Newsletter') ? 'Read Latest' : p.title.includes('Admission') ? 'Enquire Now' : 'Login Now'}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── About Snapshot ── */
function AboutSnapshot() {
  return (
    <section style={{ background: '#f8fafc', padding: '5rem 0' }}>
      <div className="container">
        <div className="row-2" style={{ gap: '3rem', alignItems: 'center' }}>
          <div data-aos="fade-right" style={{ position: 'relative', minHeight: '400px', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 8px 40px rgba(26,86,219,0.18)' }}>
            <img src="/img/school_science_lab_high_tech.webp" alt="Science lab" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }} />
            <img src="/img/about-2.webp" alt="Campus life" style={{ position: 'absolute', top: 0, left: 0, width: '200px', height: '200px', objectFit: 'cover', background: '#fff', padding: '6px', borderRadius: '0 0 12px 0', boxShadow: '0 8px 24px rgba(0,0,0,0.18)' }} />
          </div>
          <div data-aos="fade-left">
            <span className="section-label">Our Mission Overview</span>
            <h2 className="section-title mt-1">A Visionary Approach to Holistic Education</h2>
            <p style={{ color: 'var(--secondary)', marginBottom: '1rem' }}>
              At Global School, we stand at the intersection of tradition and innovation. Our mission is to nurture resilient, globally-minded lifelong learners who lead with integrity. We believe that true education goes beyond textbooks, fostering character and critical thinking.
            </p>
            <p style={{ color: 'var(--secondary)', marginBottom: '2rem' }}>
              Our campus is not just a building; it's a sanctuary for curiosity where every student's potential is recognized and celebrated.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
              <Link to="/about" className="btn btn-primary btn-pill">Discover Our Legacy</Link>
              <div>
                <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--accent)' }}>Est. {siteInfo.established}</div>
                <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--secondary)' }}>25 Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Leadership Toggle ── */
function Leadership() {
  const [active, setActive] = useState(0);
  const gliderPos = active * (100 / 3);
  const person = leadership[active];

  return (
    <section style={{ background: '#fff', padding: '5rem 0' }}>
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-up">
          <span className="section-label">Our Leadership</span>
          <h2 className="section-title">Meet the Visionaries Behind Global School</h2>
        </div>
        {/* Toggle */}
        <div data-aos="fade-up" data-aos-delay="100">
          <div className="leadership-toggle">
            <div className="leadership-glider" style={{ transform: `translateX(calc(${gliderPos}% * 3 + ${active * 4}px))` }} />
            {leadership.map((l, i) => (
              <button key={l.key} className={`leadership-btn${active === i ? ' active' : ''}`} onClick={() => setActive(i)}>{l.label}</button>
            ))}
          </div>
        </div>
        {/* Panel */}
        <div className={`leadership-panel active`} data-aos="fade-up" data-aos-delay="150">
          <div className="leadership-panel__img" style={{ flex: '0 0 360px' }}>
            <img src={person.img} alt={person.name} />
          </div>
          <div>
            <span className="section-label">{person.tag}</span>
            <h2 className="section-title mt-1">{person.heading}</h2>
            {person.quote && <blockquote>{person.quote}</blockquote>}
            <p style={{ color: 'var(--secondary)', marginBottom: '1.5rem' }}>{person.body}</p>
            <h5 style={{ marginBottom: '0.2rem' }}>{person.name}</h5>
            <span className="text-primary" style={{ fontSize: '0.9rem', fontWeight: 600 }}>{person.title}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Stats Bar ── */
function StatsBar() {
  return (
    <section className="stats-bar" data-aos="fade-in">
      <div className="container">
        <div className="text-center mb-5">
          <h6 style={{ color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', letterSpacing: '1.5px', fontSize: '0.8rem', fontWeight: 700 }}>Our Legacy in Numbers</h6>
          <h2 style={{ color: '#fff', fontSize: 'clamp(1.5rem, 3vw, 2rem)', marginTop: '0.5rem' }}>Measuring Our Success Over Decades</h2>
        </div>
        <div className="stats-bar__grid">
          {stats.map(s => (
            <div key={s.label}>
              <div className="stat-item__icon"><i className={`fas ${s.icon}`} /></div>
              <div className="stat-item__number">{s.number}</div>
              <div className="stat-item__label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Academic Programs ── */
function Programs() {
  return (
    <section style={{ background: 'linear-gradient(180deg,#f0f4ff 0%,#fff 100%)', padding: '5rem 0' }}>
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-up">
          <span className="section-label">Academic Pathways</span>
          <h2 className="section-title">Excellence Across All Learning Levels</h2>
        </div>
        <div className="row-3">
          {programs.map((p, i) => (
            <div key={p.title} className="program-card" data-aos="fade-up" data-aos-delay={i * 100}>
              <div className="program-card__body">
                <div className="program-card__icon-wrap"><i className={`fas ${p.icon}`} /></div>
                <h5>{p.title}</h5>
                <p>{p.desc}</p>
                <div className="program-card__grade"><i className="fas fa-signal" />{p.grades}</div>
              </div>
              <div className="program-card__img">
                <img src={p.img} alt={p.title} loading="lazy" />
                <div className="program-card__overlay">
                  <Link to="/academics" className="btn btn-outline btn-pill" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.7)' }}>Learn More</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Facilities ── */
function Facilities() {
  return (
    <section style={{ background: '#f1f5f9', padding: '5rem 0' }}>
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-up">
          <span className="section-label">Premium Campus Life</span>
          <h2 className="section-title">World-Class Facilities for Holistic Development</h2>
        </div>
        <div className="row-3">
          {facilities.map((f, i) => (
            <div key={f.title} className="facility-card" data-aos="fade-up" data-aos-delay={i * 80}>
              <div className="facility-card__icon"><i className={`fas ${f.icon}`} /></div>
              <h4>{f.title}</h4>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Faculty ── */
function Faculty() {
  return (
    <section style={{ background: '#fff', padding: '5rem 0' }}>
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-up">
          <span className="section-label">Meet Our Faculty</span>
          <h2 className="section-title">Dedicated Educators Committed to Excellence</h2>
        </div>
        <div className="row-4">
          {team.map((m, i) => (
            <div key={m.name} className="team-card" data-aos="fade-up" data-aos-delay={i * 100}>
              <div className="team-card__img">
                <img src={m.img} alt={m.name} loading="lazy" />
                <div className="team-card__social">
                  <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f" /></a>
                  <a href="#" aria-label="Twitter"><i className="fab fa-twitter" /></a>
                  <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in" /></a>
                </div>
              </div>
              <div className="team-card__info">
                <h5>{m.name}</h5>
                <span>{m.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Testimonials ── */
function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setCurrent(c => (c + 1) % testimonials.length), 4500);
    return () => clearInterval(id);
  }, []);

  const t = testimonials[current];
  return (
    <section id="testimonials" style={{ background: '#f8fafc', padding: '5rem 0' }}>
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-up">
          <span className="section-label">Student Testimonials</span>
          <h2 className="section-title">What Our Students & Parents Say!</h2>
        </div>
        <div style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center' }} data-aos="fade-up">
          <div className="testimonial-card">
            <img src={t.img} alt={t.name} className="testimonial-card__img" />
            <p>"{t.quote}"</p>
            <hr style={{ width: '60px', margin: '1rem auto', borderColor: 'var(--border)' }} />
            <h5>{t.name}</h5>
            <span className="text-muted">{t.role}</span>
          </div>
          <div className="testimonial-dots">
            {testimonials.map((_, i) => (
              <button key={i} className={`testimonial-dot${i === current ? ' active' : ''}`} onClick={() => setCurrent(i)} aria-label={`Testimonial ${i + 1}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


/* ── Home Page ── */
export default function Home() {
  return (
    <>
      <Hero />
      <Portals />
      <AboutSnapshot />
      <Leadership />
      <StatsBar />
      <Programs />
      <Facilities />
      <Faculty />
      <Testimonials />
    </>
  );
}
