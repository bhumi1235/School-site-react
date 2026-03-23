import PageHeader from '../components/layout/PageHeader';

const galleryImages = [
  { src: '/img/school_science_lab_high_tech.webp', caption: 'Science Laboratory' },
  { src: '/img/school_auditorium_modern.webp', caption: 'School Auditorium' },
  { src: '/img/school_sports_complex.webp', caption: 'Sports Complex' },
  { src: '/img/about-1.webp', caption: 'Campus Life' },
  { src: '/img/about-2.webp', caption: 'Student Life' },
  { src: '/img/carousel-1.webp', caption: 'Graduation Day' },
  { src: '/img/carousel-2.webp', caption: 'Campus Events' },
  { src: '/img/courses-2.webp', caption: 'Secondary Classrooms' },
  { src: '/img/courses-3.webp', caption: 'Senior Secondary' },
];

export default function Gallery() {
  return (
    <>
      <PageHeader title="Gallery" />
      <section style={{ background: '#fff', padding: '5rem 0' }}>
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="section-label">Visual Tour</span>
            <h2 className="section-title">Life at Global School</h2>
            <p style={{ color: 'var(--secondary)', maxWidth: 560, margin: '0 auto' }}>A glimpse into our vibrant campus — from smart classrooms and labs to sports grounds and cultural events.</p>
          </div>
          <div className="gallery-grid" data-aos="fade-up">
            {galleryImages.map((img, i) => (
              <div key={i} className="gallery-item">
                <img src={img.src} alt={img.caption} loading="lazy" />
                <div className="gallery-overlay">
                  <i className="fas fa-search-plus" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
