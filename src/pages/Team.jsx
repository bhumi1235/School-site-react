import PageHeader from '../components/layout/PageHeader';
import { team } from '../data/siteData';

const allFaculty = [
  ...team,
  { img: '/img/team-1.webp', name: 'Mr. Arjun Iyer', role: 'Social Studies' },
  { img: '/img/team-3.webp', name: 'Mrs. Kavya Menon', role: 'Hindi Faculty' },
  { img: '/img/team-4.webp', name: 'Dr. Pooja Rao', role: 'Computer Science' },
  { img: '/img/team-2.webp', name: 'Mr. Rahul Das', role: 'Physical Education' },
];

export default function Team() {
  return (
    <>
      <PageHeader title="Our Team" />
      <section style={{ background: '#f8fafc', padding: '5rem 0' }}>
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="section-label">Meet Our Educators</span>
            <h2 className="section-title">Dedicated Faculty Committed to Excellence</h2>
            <p style={{ color: 'var(--secondary)', maxWidth: 560, margin: '0 auto' }}>
              Our 50+ strong faculty are subject experts and passionate educators who bring expertise, empathy, and energy to every classroom.
            </p>
          </div>
          <div className="row-4">
            {allFaculty.map((m, i) => (
              <div key={`${m.name}-${i}`} className="team-card" data-aos="fade-up" data-aos-delay={i * 60}>
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
