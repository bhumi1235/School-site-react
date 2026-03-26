import PageHeader from '../../components/layout/PageHeader';
import { facilities } from '../../data/siteData';

const labs = [
  { title: 'Physics Lab', desc: 'Advanced equipment for mechanical and electrical experiments, oscilloscopes, spectrometers, and more.', color: 'var(--primary)' },
  { title: 'Chemistry Lab', desc: 'Fully equipped with safety gear, chemical analyzers, fume hoods, and certified reagent storage.', color: 'var(--accent)' },
  { title: 'Biology Lab', desc: 'High-tech microscopes, specimen collections, and digital imaging tools for deep scientific study.', color: 'var(--primary)' },
];

export default function Infrastructure() {
  return (
    <>
      <PageHeader title="Our Campus" />

      {/* School Building */}
      <section style={{ background: '#fff', padding: '5rem 0' }} id="building">
        <div className="container">
          <div className="row-2" style={{ gap: '3rem', alignItems: 'center' }}>
            <div data-aos="fade-right">
              <span className="section-label">Our Campus</span>
              <h2 className="section-title" style={{ marginTop: '0.5rem', marginBottom: '1.25rem' }}>School Building</h2>
              <p style={{ color: 'var(--secondary)', marginBottom: '1.25rem' }}>
                Our main building is an architectural marvel designed to maximize natural light and ventilation. It houses administrative offices, the main reception, and dedicated wings for different academic levels. Built to inspire, the campus reflects our commitment to creating a world-class learning environment.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {['Earthquake Resistant Structure', 'Fire Safety Compliant', 'Barrier-Free & Inclusive Access', '5-Acre Sprawling Campus', 'CCTV Monitored Premises', 'Solar-Powered Common Areas'].map(item => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}>
                    <i className="fas fa-check" style={{ color: 'var(--primary)', fontSize: '0.75rem' }} />{item}
                  </div>
                ))}
              </div>
            </div>
            <div data-aos="fade-left">
              <img src="/img/carousel-1.webp" alt="School Building" style={{ width: '100%', borderRadius: '16px', boxShadow: '0 8px 32px rgba(26,86,219,0.12)' }} loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Modern Classrooms */}
      <section style={{ background: '#f8fafc', padding: '5rem 0' }} id="classrooms">
        <div className="container">
          <div className="row-2" style={{ gap: '3rem', alignItems: 'center' }}>
            <div data-aos="fade-right">
              <img src="/img/about-2.webp" alt="Classrooms" style={{ width: '100%', borderRadius: '16px', boxShadow: '0 8px 32px rgba(26,86,219,0.12)' }} loading="lazy" />
            </div>
            <div data-aos="fade-left">
              <span className="section-label">Learning Spaces</span>
              <h2 className="section-title" style={{ marginTop: '0.5rem', marginBottom: '1.25rem' }}>Modern Classrooms</h2>
              <p style={{ color: 'var(--secondary)', marginBottom: '1.25rem' }}>
                Temperature-controlled classrooms with ergonomic furniture provide a comfortable learning environment. Each room is designed for a low student-teacher ratio to ensure personalized attention. Natural light-filled spaces encourage focus and creativity.
              </p>
              <div className="row-2" style={{ gap: '0.75rem' }}>
                {['42 Smart Classrooms', 'Ratio: 25:1 Student–Teacher', 'Ergonomic Seating', 'Air-Conditioned Spaces', 'Interactive Displays', 'Soundproofed Walls'].map(item => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem' }}>
                    <i className="fas fa-check" style={{ color: 'var(--primary)', fontSize: '0.7rem' }} />{item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Smart Classrooms */}
      <section style={{ background: '#fff', padding: '5rem 0' }} id="smart-classes">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up" style={{ maxWidth: '600px', margin: '0 auto 3rem' }}>
            <span className="section-label">Digital Integration</span>
            <h2 className="section-title" style={{ marginTop: '0.5rem', marginBottom: '0.75rem' }}>Smart Classrooms</h2>
            <p style={{ color: 'var(--secondary)' }}>Equipped with interactive whiteboards and digital projectors, our smart classes bring abstract concepts to life through multimedia content.</p>
          </div>
          <div data-aos="fade-up" style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 40px rgba(26,86,219,0.12)' }}>
            <img src="/img/carousel-2.webp" alt="Smart Classroom" style={{ width: '100%', height: '400px', objectFit: 'cover', display: 'block' }} loading="lazy" />
          </div>
          <div className="row-3" style={{ marginTop: '2rem' }}>
            {[
              { icon: 'fa-tv', title: 'Interactive Whiteboards', desc: 'Full HD touch-enabled boards in every classroom for dynamic, engaging lessons.' },
              { icon: 'fa-wifi', title: 'High-Speed Wi-Fi', desc: 'Campus-wide fiber-optic network ensuring seamless digital learning with zero lag.' },
              { icon: 'fa-video', title: 'Live Streaming', desc: 'Record and stream lectures for students who need to review lessons at their own pace.' },
            ].map((f, i) => (
              <div key={f.title} className="card-white" style={{ padding: '1.75rem', textAlign: 'center' }} data-aos="fade-up" data-aos-delay={i * 80}>
                <i className={`fas ${f.icon}`} style={{ fontSize: '2rem', color: 'var(--primary)', marginBottom: '0.75rem', display: 'block' }} />
                <h5 style={{ marginBottom: '0.5rem' }}>{f.title}</h5>
                <p style={{ color: 'var(--secondary)', fontSize: '0.86rem', margin: 0 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Labs */}
      <section style={{ background: '#f1f5f9', padding: '5rem 0' }} id="labs">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up" style={{ maxWidth: '500px', margin: '0 auto 3rem' }}>
            <span className="section-label">Scientific Exploration</span>
            <h2 className="section-title" style={{ marginTop: '0.5rem' }}>Advanced Laboratories</h2>
          </div>
          <div className="row-3">
            {labs.map((lab, i) => (
              <div key={lab.title} className="card-white"
                style={{ padding: '2rem', borderTop: `5px solid ${lab.color}` }}
                data-aos="fade-up" data-aos-delay={i * 100}
              >
                <h5 style={{ marginBottom: '0.75rem' }}>{lab.title}</h5>
                <p style={{ color: 'var(--secondary)', fontSize: '0.88rem', margin: 0 }}>{lab.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '2.5rem', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 24px rgba(26,86,219,0.12)' }} data-aos="fade-up">
            <img src="/img/school_science_lab_high_tech.webp" alt="Science Lab" style={{ width: '100%', height: '360px', objectFit: 'cover' }} loading="lazy" />
          </div>
        </div>
      </section>

      {/* Auditorium */}
      <section style={{ background: '#fff', padding: '5rem 0' }} id="auditorium">
        <div className="container">
          <div className="row-2" style={{ gap: '3rem', alignItems: 'center' }}>
            <div data-aos="fade-right">
              <img src="/img/school_auditorium_modern.webp" alt="Auditorium" style={{ width: '100%', borderRadius: '16px', boxShadow: '0 8px 32px rgba(26,86,219,0.12)' }} loading="lazy" />
            </div>
            <div data-aos="fade-left">
              <span className="section-label">Grand Stage</span>
              <h2 className="section-title" style={{ marginTop: '0.5rem', marginBottom: '1.25rem' }}>Multipurpose Auditorium</h2>
              <p style={{ color: 'var(--secondary)', marginBottom: '1.25rem' }}>
                With a seating capacity of 500+, our air-conditioned auditorium features professional-grade acoustic and lighting systems for grand events including Annual Day, debates, cultural nights, and science fairs.
              </p>
              <div className="row-2" style={{ gap: '0.75rem' }}>
                {['600 Seat Capacity', 'Professional Acoustics', 'Broadcast Lighting Rig', 'Green Room & Backstage', 'Accessibility Ramps', 'Live Recording Studio'].map(item => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem' }}>
                    <i className="fas fa-check" style={{ color: 'var(--accent)', fontSize: '0.7rem' }} />{item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Facilities Grid */}
      <section style={{ background: '#f8fafc', padding: '5rem 0' }}>
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="section-label">Full Amenities</span>
            <h2 className="section-title" style={{ marginTop: '0.5rem' }}>Everything Your Child Needs</h2>
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
    </>
  );
}
