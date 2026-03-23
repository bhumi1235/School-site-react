import PageHeader from '../components/layout/PageHeader';

const newsItems = [
  { tag: 'Achievement', date: 'March 10, 2026', title: 'Global School Wins State Science Olympiad 2026', excerpt: 'Our students swept the podium at the State Science Olympiad, winning gold in Physics, Chemistry and Biology categories.', img: '/img/school_science_lab_high_tech.webp' },
  { tag: 'Event', date: 'February 28, 2026', title: 'Annual Sports Day 2026 — A Grand Success', excerpt: 'Over 800 students participated in this year\'s Annual Sports Day, with record-breaking performances in athletics and team sports.', img: '/img/school_sports_complex.webp' },
  { tag: 'Announcement', date: 'February 15, 2026', title: 'Admissions Open for Academic Year 2026–27', excerpt: 'We are pleased to announce that admissions are now open for Grades 1 to 12. Limited seats available. Apply early to secure your child\'s future.', img: '/img/about-1.webp' },
  { tag: 'Event', date: 'January 26, 2026', title: 'Republic Day Celebration & Cultural Programme', excerpt: 'Students put up a spectacular cultural show celebrating Republic Day with folk dances, patriotic songs, and speeches.', img: '/img/school_auditorium_modern.webp' },
  { tag: 'Achievement', date: 'December 20, 2025', title: 'Board Results 2025 — 100% Pass Rate', excerpt: 'Global School achieves a 100% board pass rate for the 15th consecutive year, with 32 students scoring above 95%.', img: '/img/school_science_lab_high_tech.webp' },
  { tag: 'Workshop', date: 'November 18, 2025', title: 'Leadership Bootcamp for Grade 11 & 12', excerpt: 'A 3-day residential leadership bootcamp was held, focusing on communication, teamwork, and decision-making for senior students.', img: '/img/about-2.webp' },
];

export default function News() {
  return (
    <>
      <PageHeader title="News & Events" />
      <section style={{ background: '#f8fafc', padding: '5rem 0' }}>
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="section-label">Latest Updates</span>
            <h2 className="section-title">News, Events & Announcements</h2>
          </div>
          <div className="row-3">
            {newsItems.map((n, i) => (
              <div key={n.title} className="news-card" data-aos="fade-up" data-aos-delay={i * 80}>
                <div className="news-card__img">
                  <img src={n.img} alt={n.title} loading="lazy" />
                </div>
                <div className="news-card__body">
                  <span className="news-card__tag">{n.tag}</span>
                  <div className="news-card__date"><i className="fas fa-calendar-alt" style={{ marginRight: '0.4rem' }} />{n.date}</div>
                  <h4>{n.title}</h4>
                  <p style={{ color: 'var(--secondary)', fontSize: '0.86rem', marginBottom: '1rem' }}>{n.excerpt}</p>
                  <a href="#" style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '0.85rem' }}>Read More <i className="fas fa-arrow-right" /></a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
