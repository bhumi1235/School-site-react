import PageHeader from '../components/layout/PageHeader';


const coreValues = [
  { icon: 'fa-shield-alt', title: 'Integrity', desc: 'We uphold the highest ethical standards, fostering honesty and mutual respect in all we do.' },
  { icon: 'fa-trophy', title: 'Excellence', desc: 'We pursue the highest standards in academics, arts, and athletics through relentless dedication.' },
  { icon: 'fa-lightbulb', title: 'Innovation', desc: 'We embrace creative problem-solving and prepare our students for a rapidly changing future.' },
  { icon: 'fa-heart', title: 'Compassion', desc: 'We cultivate empathy and kindness, building a community where every student feels they belong.' },
  { icon: 'fa-globe', title: 'Inclusivity', desc: 'We celebrate diversity and ensure every child, regardless of background, has equal opportunity.' },
  { icon: 'fa-leaf', title: 'Sustainability', desc: 'We instill environmental stewardship and a sense of responsibility towards our planet and future.' },
];

export default function About() {
  return (
    <>
      <PageHeader title="About Us" />

      {/* Historical Background */}
      <section style={{ background: '#fff', padding: '5rem 0' }} id="background">
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }} data-aos="fade-up">
            <span className="section-label">Our Legacy</span>
            <h2 className="section-title" style={{ marginTop: '0.5rem', marginBottom: '1.5rem' }}>Historical Background</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text)', marginBottom: '1.5rem' }}>
              From its inception in 2000, Global School has been more than just an educational institution; it has been a beacon of hope and excellence. What started as a visionary dream by our founder, Shri. R.K. Oberoi, has transformed into a prestigious multi-disciplinary campus in the heart of Abu Dhabi.
            </p>
            <div style={{ textAlign: 'left', maxWidth: '780px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <p style={{ color: 'var(--secondary)' }}>
                Over the last quarter-century, we have been pioneers in integrating traditional values with modern pedagogical techniques. Our journey began with a handful of students and a monumental ambition: to provide a world-class education that remains accessible and grounded in character. Today, our alumni are leading industries, driving innovation, and making significant contributions across the globe.
              </p>
              <p style={{ color: 'var(--secondary)', margin: 0 }}>
                Our history is a testament to our unwavering commitment to academic rigor, environmental stewardship, and the holistic development of every child who walks through our gates. We don't just celebrate our past; we use it as a foundation to build an even brighter future for the next generation of global leaders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section style={{ background: '#f1f5f9', padding: '5rem 0' }}>
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="section-label">Our Foundation</span>
            <h2 className="section-title" style={{ marginTop: '0.5rem', marginBottom: '0.75rem' }}>The Core Values We Live By</h2>
            <p style={{ color: 'var(--secondary)', maxWidth: 560, margin: '0 auto' }}>These pillars define our culture and guide every interaction within the Global School community.</p>
          </div>
          <div className="row-3">
            {coreValues.map((v, i) => (
              <div key={v.title} className="card-white"
                style={{ padding: '2rem', textAlign: 'center', borderTop: `4px solid ${i % 2 === 0 ? 'var(--primary)' : 'var(--accent)'}` }}
                data-aos="fade-up" data-aos-delay={i * 80}
              >
                <div style={{ width: 70, height: 70, borderRadius: '50%', background: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem', fontSize: '1.5rem', color: i % 2 === 0 ? 'var(--primary)' : 'var(--accent)' }}>
                  <i className={`fas ${v.icon}`} />
                </div>
                <h5 style={{ marginBottom: '0.6rem' }}>{v.title}</h5>
                <p style={{ color: 'var(--secondary)', fontSize: '0.88rem', margin: 0 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* School Aim */}
      <section style={{ background: '#fff', padding: '5rem 0' }} id="aim">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
            <div data-aos="fade-right">
              <span className="section-label">Our Purpose</span>
              <h2 className="section-title" style={{ marginTop: '0.5rem', marginBottom: '1.25rem' }}>School Aim</h2>
              <p style={{ color: 'var(--secondary)', marginBottom: '1.5rem' }}>
                Our aim is to empower students with the skills, values, and knowledge required to thrive in an ever-evolving global landscape. We seek to transcend traditional learning boundaries, creating a vibrant ecosystem where curiosity meets capability.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem', marginBottom: '1.5rem' }}>
                {['Critical Thinking & Inquiry', 'Emotional Intelligence', 'Technological Literacy', 'Social Responsibility'].map(item => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}>
                    <i className="fas fa-check" style={{ color: 'var(--primary)', fontSize: '0.8rem' }} />{item}
                  </div>
                ))}
              </div>
              <p style={{ color: 'var(--secondary)', margin: 0 }}>We aim to produce leaders who lead with empathy, think with clarity, and act with courage.</p>
            </div>
            <div data-aos="fade-left">
              <img src="/img/about-2.webp" alt="School Aim" style={{ width: '100%', borderRadius: '16px', boxShadow: '0 8px 40px rgba(15,23,42,0.15)' }} loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission (dark cards) */}
      <section style={{ background: '#f8fafc', padding: '5rem 0' }} id="vision">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="section-label">Our Guiding Stars</span>
            <h2 className="section-title" style={{ marginTop: '0.5rem' }}>Vision & Mission</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            <div data-aos="fade-right"
              style={{ background: '#0f172a', color: '#fff', padding: '2.5rem', borderRadius: '16px', boxShadow: '0 8px 40px rgba(15,23,42,0.2)', borderBottom: '5px solid var(--accent)' }}>
              <i className="fas fa-eye" style={{ fontSize: '2.5rem', color: 'var(--accent)', marginBottom: '1.25rem', display: 'block' }} />
              <h3 style={{ color: '#fff', marginBottom: '1rem' }}>Our Vision</h3>
              <p style={{ color: 'rgba(255,255,255,0.85)', marginBottom: '0.75rem' }}>
                To be a global benchmark in education by cultivating a sanctuary of inquiry, where curiosity is ignited and resilience is forged.
              </p>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.88rem', margin: 0 }}>We envision students as architects of a sustainable, equitable, and innovation-driven world.</p>
            </div>
            <div data-aos="fade-left" id="mission"
              style={{ background: '#0f172a', color: '#fff', padding: '2.5rem', borderRadius: '16px', boxShadow: '0 8px 40px rgba(15,23,42,0.2)', borderBottom: '5px solid var(--accent)' }}>
              <i className="fas fa-bullseye" style={{ fontSize: '2.5rem', color: 'var(--accent)', marginBottom: '1.25rem', display: 'block' }} />
              <h3 style={{ color: '#fff', marginBottom: '1rem' }}>Our Mission</h3>
              <p style={{ color: 'rgba(255,255,255,0.85)', marginBottom: '0.75rem' }}>
                To deliver a rigorous curriculum that empowers students with 21st-century skills while honoring cultural heritage.
              </p>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.88rem', margin: 0 }}>We commit to an inclusive and challenging environment that promotes excellence and personal growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* School Motto */}
      <section style={{ background: '#fff', padding: '4rem 0' }} id="motto">
        <div className="container text-center" data-aos="fade-up">
          <span className="section-label">The Core Belief</span>
          <div style={{ maxWidth: '700px', margin: '1.5rem auto 0' }}>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 5vw, 3.2rem)', color: 'var(--dark)', fontStyle: 'italic' }}>"Knowledge is Power"</h1>
            <p style={{ color: 'var(--secondary)', fontSize: '1.05rem', marginTop: '1.25rem' }}>
              This motto guides every decision we make at Global School, reminding us that wisdom is the ultimate catalyst for change.
            </p>
          </div>
        </div>
      </section>

      {/* Faculty Preview */}
      <section style={{ background: '#f8fafc', padding: '5rem 0' }}>
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="section-label">Our Team</span>
            <h2 className="section-title" style={{ marginTop: '0.5rem' }}>Meet Our Professional Faculty</h2>
          </div>
          <div className="row-4">
            {[
              { img: '/img/team-1.webp', name: 'Dr. Rajiv Sharma', role: 'Head of Science' },
              { img: '/img/team-2.webp', name: 'Ms. Priya Nair', role: 'English & Literature' },
              { img: '/img/team-3.webp', name: 'Mrs. Anita Desai', role: 'Mathematics Faculty' },
              { img: '/img/team-4.webp', name: 'Mr. Suresh Menon', role: 'Sports & PE Director' },
            ].map((m, i) => (
              <div key={m.name} className="team-card" data-aos="fade-up" data-aos-delay={i * 80}>
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

    </>
  );
}
