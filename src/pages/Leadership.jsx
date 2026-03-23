import { useState } from 'react';
import PageHeader from '../components/layout/PageHeader';
import { leadership } from '../data/siteData';

export default function Leadership() {
  const [active, setActive] = useState(0);
  const person = leadership[active];

  return (
    <>
      <PageHeader title="Leadership" />
      <section style={{ background: '#fff', padding: '5rem 0' }}>
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="section-label">Our Leadership</span>
            <h2 className="section-title">Meet the Visionaries Behind Global School</h2>
          </div>

          {/* Toggle */}
          <div data-aos="fade-up" data-aos-delay="100">
            <div className="leadership-toggle">
              <div className="leadership-glider"
                style={{ transform: `translateX(${active * (100 + (active > 0 ? (active * 4) : 0))}%)` }}
              />
              {leadership.map((l, i) => (
                <button key={l.key} className={`leadership-btn${active === i ? ' active' : ''}`} onClick={() => setActive(i)}>
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          {/* Panel */}
          <div className="leadership-panel active" data-aos="fade-up" data-aos-delay="150" style={{ marginTop: '2rem' }}>
            <div className="leadership-panel__img" style={{ flex: '0 0 380px' }}>
              <img src={person.img} alt={person.name} />
            </div>
            <div>
              <span className="section-label">{person.tag}</span>
              <h2 className="section-title mt-1">{person.heading}</h2>
              {person.quote && (
                <blockquote style={{ fontSize: '1.1rem', fontStyle: 'italic', borderLeft: '4px solid var(--primary)', paddingLeft: '1.25rem', color: 'var(--dark)', marginBottom: '1rem' }}>
                  {person.quote}
                </blockquote>
              )}
              <p style={{ color: 'var(--secondary)', marginBottom: '1.5rem', lineHeight: 1.8 }}>{person.body}</p>
              <h5 style={{ marginBottom: '0.2rem' }}>{person.name}</h5>
              <span style={{ color: 'var(--primary)', fontSize: '0.9rem', fontWeight: 600 }}>{person.title}</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
