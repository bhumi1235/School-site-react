import PageHeader from '../components/layout/PageHeader';

const sportsFeatures = [
  { icon: 'fa-basketball-ball', title: 'Indoor Complex', desc: 'International-standard courts for Basketball, Badminton, and Table Tennis.' },
  { icon: 'fa-swimmer', title: 'Aquatics Center', desc: 'Temperature-controlled Olympic-size pool with professional coaching staff.' },
  { icon: 'fa-running', title: 'Track & Field', desc: '400m synthetic track and dedicated areas for Long Jump, Shot Put, and Archery.' },
  { icon: 'fa-futbol', title: 'Main Turf', desc: 'Full-size Football and Cricket grounds with night-lighting facilities.' },
];

const clubs = [
  { icon: 'fa-robot', color: 'var(--primary)', title: 'Robotics & AI', desc: 'From building basic circuits to programming autonomous drones, this club is the heart of innovation.' },
  { icon: 'fa-theater-masks', color: 'var(--accent)', title: 'Literary & Drama', desc: 'Cultivating eloquence through debate, creative writing, and immersive theatrical productions.' },
  { icon: 'fa-palette', color: 'var(--primary)', title: 'Fine Arts Guild', desc: 'Exploring traditional painting, digital art, and contemporary sculpture to unleash creativity.' },
  { icon: 'fa-music', color: 'var(--accent)', title: 'Musical Harmony', desc: 'Integrating classical training with modern composition in our school\'s orchestra and band.' },
];

const workshopItems = [
  { icon: 'fa-user-tie', label: 'Leadership & Management Series' },
  { icon: 'fa-microchip', label: 'Future-Tech Workshops (AI, Blockchain)' },
  { icon: 'fa-university', label: 'Global University Fair & Counseling' },
  { icon: 'fa-comments', label: 'Communication & Public Speaking' },
  { icon: 'fa-hand-holding-heart', label: 'Mental Health & Well-being Seminars' },
  { icon: 'fa-globe', label: 'Model United Nations (MUN) Training' },
];

export default function BeyondAcademics() {
  return (
    <>
      <PageHeader title="Student Life" breadcrumb="Beyond Academics" />

      {/* Sports */}
      <section style={{ background: '#fff', padding: '5rem 0' }} id="sports">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
            <div data-aos="fade-right">
              <span className="section-label">Athletic Excellence</span>
              <h2 className="section-title" style={{ marginTop: '0.5rem', marginBottom: '1.25rem' }}>Sports Arena: Healthy Mind, Healthy Body</h2>
              <p style={{ color: 'var(--secondary)', marginBottom: '1.5rem' }}>
                Physical fitness is not an elective at Global School; it is a way of life. We believe that the discipline of the sports field translates directly into academic focus and emotional resilience. Our comprehensive sports program is designed to identify and nurture athletic talent from a young age.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                {sportsFeatures.map(f => (
                  <div key={f.title} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <i className={`fas ${f.icon}`} style={{ fontSize: '1.5rem', color: 'var(--primary)', flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <h5 style={{ fontSize: '0.95rem', marginBottom: '0.25rem' }}>{f.title}</h5>
                      <p style={{ fontSize: '0.82rem', color: 'var(--secondary)', margin: 0 }}>{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div data-aos="fade-left" style={{ position: 'relative' }}>
              <img src="/img/school_sports_complex.webp" alt="Sports" style={{ width: '100%', borderRadius: '16px', boxShadow: '0 8px 32px rgba(26,86,219,0.12)', display: 'block' }} loading="lazy" />
              <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem', background: 'linear-gradient(135deg,var(--primary),var(--primary-dark))', color: '#fff', padding: '1rem 1.5rem', borderRadius: '12px', boxShadow: '0 4px 16px rgba(26,86,219,0.35)' }}>
                <h4 style={{ color: '#fff', margin: '0 0 0.2rem', fontSize: '1rem' }}>Elite Performance</h4>
                <small style={{ color: 'rgba(255,255,255,0.8)' }}>State-level Champions 2023</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clubs */}
      <section style={{ background: '#f1f5f9', padding: '5rem 0' }} id="clubs">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up" style={{ maxWidth: '700px', margin: '0 auto 3rem' }}>
            <span className="section-label">Interests & Hobbies</span>
            <h2 className="section-title" style={{ marginTop: '0.5rem', marginBottom: '0.75rem' }}>Student Clubs: Communities of Passion</h2>
            <p style={{ color: 'var(--secondary)' }}>Education is about finding your voice. Our clubs are student-led, teacher-mentored communities where children explore their identities and build lifelong friendships around shared interests.</p>
          </div>
          <div className="row-4">
            {clubs.map((c, i) => (
              <div key={c.title} className="card-white"
                style={{ padding: '2.5rem', textAlign: 'center', borderBottom: `5px solid ${c.color}` }}
                data-aos="fade-up" data-aos-delay={i * 80}
              >
                <i className={`fas ${c.icon}`} style={{ fontSize: '3rem', color: c.color, marginBottom: '1rem', display: 'block' }} />
                <h4 style={{ marginBottom: '0.75rem' }}>{c.title}</h4>
                <p style={{ color: 'var(--secondary)', fontSize: '0.86rem', margin: 0 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section style={{ background: '#fff', padding: '5rem 0' }} id="projects">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
            <div data-aos="fade-right">
              <img src="/img/about-2.webp" alt="Projects" style={{ width: '100%', borderRadius: '16px', boxShadow: '0 8px 32px rgba(26,86,219,0.12)' }} loading="lazy" />
            </div>
            <div data-aos="fade-left">
              <span className="section-label">Real-world Learning</span>
              <h2 className="section-title" style={{ marginTop: '0.5rem', marginBottom: '1.25rem' }}>Student Community Impact Projects</h2>
              <p style={{ color: 'var(--secondary)', marginBottom: '1.5rem' }}>
                We encourage our students to look "Across the Wall." Our Social Impact Projects involve students taking on real issues — environmental conservation, literacy drives, and community health — applying their academic knowledge for the greater good.
              </p>
              <div style={{ background: '#f1f5f9', padding: '1.5rem', borderRadius: '12px', borderLeft: '5px solid var(--primary)', marginBottom: '1rem' }}>
                <h5 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}><i className="fas fa-seedling" style={{ marginRight: '0.5rem' }} />Green Global Initiative</h5>
                <p style={{ color: 'var(--secondary)', fontSize: '0.88rem', margin: 0 }}>A student-run project that successfully converted the school campus to a 100% plastic-free zone and planted 500+ trees in the local community.</p>
              </div>
              <div style={{ background: '#f1f5f9', padding: '1.5rem', borderRadius: '12px', borderLeft: '5px solid var(--accent)' }}>
                <h5 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}><i className="fas fa-book-reader" style={{ marginRight: '0.5rem' }} />Literacy Bridge</h5>
                <p style={{ color: 'var(--secondary)', fontSize: '0.88rem', margin: 0 }}>Students mentor underprivileged children in nearby communities through a weekly tutoring initiative, fostering empathy and responsibility.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workshops */}
      <section style={{ background: '#f8fafc', padding: '5rem 0' }} id="workshops">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
            <div data-aos="fade-right">
              <span className="section-label">Skill Enhancement</span>
              <h2 className="section-title" style={{ marginTop: '0.5rem', marginBottom: '1.25rem' }}>Workshops & Career Seminars</h2>
              <p style={{ color: 'var(--secondary)', marginBottom: '1.5rem' }}>
                Our "World Vision" seminars bring leaders from diverse industries into our classrooms. These monthly workshops provide exposure to global career trends, university application strategies, and emerging technologies. Every student has access to mentors who have shaped industries.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {workshopItems.map(item => (
                  <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.9rem' }}>
                    <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'var(--primary-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <i className={`fas ${item.icon}`} style={{ fontSize: '0.8rem' }} />
                    </div>
                    {item.label}
                  </div>
                ))}
              </div>
            </div>
            <div data-aos="fade-left">
              <img src="/img/carousel-2.webp" alt="Workshops" style={{ width: '100%', borderRadius: '16px', boxShadow: '0 8px 32px rgba(26,86,219,0.12)' }} loading="lazy" />
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
