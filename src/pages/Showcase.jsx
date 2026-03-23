import PageHeader from '../components/layout/PageHeader';

const achievements = [
  { icon: 'fa-trophy', title: 'State Science Olympiad 2026', desc: 'Gold in Physics, Silver in Chemistry. 3 students in Top 10 nationally.', tag: 'Science' },
  { icon: 'fa-medal', title: 'National Debate Championship', desc: 'First place at the All-India Inter-School Debate Competition held in New Delhi.', tag: 'Debate' },
  { icon: 'fa-futbol', title: 'Inter-School Football Champions', desc: 'Our U-17 team won the regional championship for the third consecutive year.', tag: 'Sports' },
  { icon: 'fa-paint-brush', title: 'National Art Exhibition', desc: 'Five students selected for the National School Art Exhibition, Ministry of Education.', tag: 'Arts' },
  { icon: 'fa-robot', title: 'Robotics Challenge Finalists', desc: 'Our robotics team reached the national finals of EduRobot 2025, ranking 4th nationally.', tag: 'STEM' },
  { icon: 'fa-book', title: '100% Board Results — 15 Years', desc: '15 consecutive years of 100% CBSE board pass rate. 32 students scored above 95% this year.', tag: 'Academics' },
];

export default function Showcase() {
  return (
    <>
      <PageHeader title="Showcase" />
      <section style={{ background: '#f8fafc', padding: '5rem 0' }}>
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="section-label">Student Excellence</span>
            <h2 className="section-title">Our Students, Our Pride</h2>
            <p style={{ color: 'var(--secondary)', maxWidth: 560, margin: '0 auto' }}>From science olympiads to sports fields to art galleries — Global School students shine everywhere.</p>
          </div>
          <div className="row-3">
            {achievements.map((a, i) => (
              <div key={a.title} className="card-white" style={{ padding: '2rem' }} data-aos="fade-up" data-aos-delay={i * 80}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <div style={{ width: 52, height: 52, borderRadius: '50%', background: 'linear-gradient(135deg,var(--accent),var(--accent-dark))', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', flexShrink: 0 }}>
                    <i className={`fas ${a.icon}`} />
                  </div>
                  <span style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.8px', textTransform: 'uppercase', color: 'var(--primary)', background: 'var(--primary-light)', padding: '0.2rem 0.7rem', borderRadius: '4px' }}>{a.tag}</span>
                </div>
                <h5 style={{ marginBottom: '0.5rem' }}>{a.title}</h5>
                <p style={{ color: 'var(--secondary)', fontSize: '0.88rem', margin: 0 }}>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'linear-gradient(135deg,var(--primary),#0c1e3c)', padding: '4rem 1.5rem', textAlign: 'center' }}>
        <h2 style={{ color: '#fff', marginBottom: '1rem' }}>Be Part of Our Legacy</h2>
        <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '2rem' }}>Give your child the platform to discover, excel, and inspire.</p>
        <a href="/admissions" className="btn btn-accent btn-pill btn-lg">Apply for Admissions <i className="fas fa-arrow-right" /></a>
      </section>
    </>
  );
}
