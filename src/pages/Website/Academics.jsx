import { useState } from 'react';
import PageHeader from '../../components/layout/PageHeader';
import { programs } from '../../data/siteData';

const learningMethods = [
  {
    icon: 'fa-project-diagram', color: 'var(--primary)',
    title: 'Project-Based Learning',
    desc: 'We believe that concepts are best understood when applied. Our students engage in "Term Projects" where they solve real-world problems — ranging from urban planning models to renewable energy prototypes — integrating knowledge from multiple subjects.',
  },
  {
    icon: 'fa-search', color: 'var(--accent)',
    title: 'Inquiry-Based Learning',
    desc: 'Our classrooms are hubs of curiosity. Rather than simply delivering lectures, teachers pose stimulating questions that trigger student-led research. This method develops critical thinking, information literacy, and independent study habits.',
  },
  {
    icon: 'fa-users-cog', color: 'var(--primary)',
    title: 'Collaborative Synergy',
    desc: 'Modern success is built on teamwork. Our "Synergy Sprints" encourage students to work in diverse groups, teaching them how to delegate, debate constructively, and achieve shared objectives while respecting varied perspectives.',
  },
];

const elearningFeatures = [
  { icon: 'fa-wifi', label: 'High-speed Smart Campus' },
  { icon: 'fa-vr-cardboard', label: 'Immersive Labs' },
  { icon: 'fa-shield-alt', label: 'Cyber-Safety Ethics' },
  { icon: 'fa-cloud-upload-alt', label: 'LMS Resource Hub' },
];

const curriculumSubjects = [
  { icon: 'fa-book-open', title: 'Core Sciences', desc: 'Advanced Physics, Chemistry, and Biology modules with integrated laboratory research from early secondary levels.' },
  { icon: 'fa-calculator', title: 'Mathematics', desc: 'Focus on logical reasoning, statistical analysis, and computational thinking across all grade levels.' },
  { icon: 'fa-language', title: 'Humanities', desc: 'A deep dive into Global History, Literature, and Social Sciences to foster empathy and cultural awareness.' },
  { icon: 'fa-code', title: 'Specialized Track', desc: 'Optional specialized modules in AI & Robotics, Data Science, and Environmental Sustainability.' },
];

export default function Academics() {
  const [activeAcademic, setActiveAcademic] = useState('curriculum');

  return (
    <>
      <PageHeader title="Academics" />

      {/* Curriculum */}
      <section style={{ background: '#fff', padding: '5rem 0' }} id="curriculum">
        <div className="container">
          <div className="row-2" style={{ gap: '3rem', alignItems: 'center' }}>
            <div data-aos="fade-right">
              <span className="section-label">Academic Roadmap</span>
              <h2 className="section-title" style={{ marginTop: '0.5rem', marginBottom: '1.25rem' }}>A Holistic & Future-Ready Curriculum</h2>
              <p style={{ color: 'var(--secondary)', marginBottom: '1.5rem' }}>
                At Global School, our curriculum is engineered to transcend traditional rote learning. We provide a rigorous academic foundation integrated with 21st-century competencies. Our framework is meticulously aligned with global standards, ensuring that every student is prepared for the challenges of higher education and professional life.
              </p>
              <div className="row-2" style={{ gap: '1.25rem' }}>
                {curriculumSubjects.map(s => (
                  <div key={s.title}>
                    <h5 style={{ marginBottom: '0.4rem', fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <i className={`fas ${s.icon}`} style={{ color: 'var(--primary)' }} />{s.title}
                    </h5>
                    <p style={{ color: 'var(--secondary)', fontSize: '0.82rem', margin: 0 }}>{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div data-aos="fade-left">
              <div className="card-white" style={{ padding: '2.5rem', textAlign: 'center', borderTop: '5px solid var(--primary)' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
                  <i className="fas fa-graduation-cap" style={{ fontSize: '2.5rem', color: 'var(--primary)' }} />
                  <h3 style={{ margin: 0, textAlign: 'left' }}>The Global Advantage</h3>
                </div>
                <p style={{ color: 'var(--secondary)', marginBottom: '1.25rem' }}>Our "Dual Pathway" system allows senior students to choose between a research-heavy academic track or a skill-based vocational track, tailoring their education to their career aspirations.</p>
                <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {['Accredited International Standard Material', 'Bilingual Proficiency Programs', 'Integrated STEAM Education', 'Preparation for Competitive Global Exams'].map(item => (
                    <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}>
                      <i className="fas fa-check" style={{ color: 'var(--primary)', fontSize: '0.75rem' }} />{item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Pathways (programs) */}
      <section style={{ background: '#f0f4ff', padding: '5rem 0' }}>
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="section-label">Academic Pathways</span>
            <h2 className="section-title" style={{ marginTop: '0.5rem' }}>Excellence Across All Learning Levels</h2>
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
                  <div className="program-card__overlay" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Methods */}
      <section style={{ background: '#f8fafc', padding: '5rem 0' }} id="learning">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="section-label">Pedagogical Excellence</span>
            <h2 className="section-title" style={{ marginTop: '0.5rem' }}>Advanced Learning Methodologies</h2>
          </div>
          <div className="row-3">
            {learningMethods.map((m, i) => (
              <div key={m.title} className="card-white"
                style={{ padding: '2.5rem', borderBottom: `5px solid ${m.color}` }}
                data-aos="fade-up" data-aos-delay={i * 100}
              >
                <div style={{ fontSize: '2.5rem', color: m.color, marginBottom: '1.25rem' }}>
                  <i className={`fas ${m.icon}`} />
                </div>
                <h4 style={{ marginBottom: '0.75rem' }}>{m.title}</h4>
                <p style={{ color: 'var(--secondary)', margin: 0, fontSize: '0.9rem' }}>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Assessment */}
      <section style={{ background: '#fff', padding: '5rem 0' }} id="assessment">
        <div className="container">
          <div className="row-2" style={{ gap: '3rem', alignItems: 'center' }}>
            <div data-aos="fade-right" style={{ position: 'relative', display: 'inline-block' }}>
              <img src="/img/about-2.webp" alt="Assessment" style={{ width: '100%', borderRadius: '16px', boxShadow: '0 8px 32px rgba(26,86,219,0.12)' }} loading="lazy" />
              <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 150, height: 150, borderRadius: '50%', background: 'linear-gradient(135deg,var(--primary),var(--primary-dark))', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 32px rgba(26,86,219,0.35)', textAlign: 'center' }}>
                <h2 style={{ color: '#fff', margin: 0, fontSize: '1.8rem' }}>100%</h2>
                <small style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.75rem' }}>Growth Focus</small>
              </div>
            </div>
            <div data-aos="fade-left">
              <span className="section-label">Continuous Growth</span>
              <h2 className="section-title" style={{ marginTop: '0.5rem', marginBottom: '1.25rem' }}>A Multi-Dimensional Assessment Framework</h2>
              <p style={{ color: 'var(--secondary)', marginBottom: '1.5rem' }}>
                Evaluation at Global School moves away from the anxiety of "High Stakes Testing." We utilize a Continuous and Comprehensive Evaluation (CCE) system that monitors a student's progress across academic and non-academic domains throughout the year.
              </p>
              <div style={{ background: '#f1f5f9', padding: '1.25rem', borderRadius: '10px', borderLeft: '5px solid var(--primary)', marginBottom: '1rem' }}>
                <h5 style={{ color: 'var(--primary)', marginBottom: '0.4rem' }}><i className="fas fa-chart-line" style={{ marginRight: '0.75rem' }} />Formative Assessments (FA)</h5>
                <p style={{ margin: 0, color: 'var(--secondary)', fontSize: '0.88rem' }}>Weekly quizzes, oral presentations, lab experiments, and portfolio reviews that allow for immediate feedback and correction.</p>
              </div>
              <div style={{ background: '#f1f5f9', padding: '1.25rem', borderRadius: '10px', borderLeft: '5px solid var(--accent)' }}>
                <h5 style={{ color: 'var(--accent)', marginBottom: '0.4rem' }}><i className="fas fa-clipboard-check" style={{ marginRight: '0.75rem' }} />Summative Assessments (SA)</h5>
                <p style={{ margin: 0, color: 'var(--secondary)', fontSize: '0.88rem' }}>End-of-term evaluations that measure depth of conceptual understanding and the ability to apply logic in complex scenarios.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IT & E-learning */}
      <section style={{ background: '#f1f5f9', padding: '5rem 0' }} id="elearning">
        <div className="container">
          <div className="row-2" style={{ gap: '3rem', alignItems: 'center' }}>
            <div data-aos="fade-right">
              <span className="section-label">Technological Integration</span>
              <h2 className="section-title" style={{ marginTop: '0.5rem', marginBottom: '1.25rem' }}>IT, STEM & E-learning Ecosystem</h2>
              <p style={{ color: 'var(--secondary)', marginBottom: '1.5rem' }}>
                We are a "Digital Discovery" campus where technology is a catalyst, not just a tool. Our students are equipped with the digital literacy required to navigate and lead in a technology-driven world.
              </p>
              <div className="row-2" style={{ gap: '1rem' }}>
                {elearningFeatures.map(f => (
                  <div key={f.label} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.9rem' }}>
                    <i className={`fas ${f.icon}`} style={{ fontSize: '1.5rem', color: 'var(--primary)' }} />
                    <span>{f.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div data-aos="fade-left">
              <div style={{ background: '#0f172a', color: '#fff', padding: '3rem', borderRadius: '16px', textAlign: 'center', position: 'relative', overflow: 'hidden', boxShadow: '0 8px 40px rgba(15,23,42,0.25)' }}>
                <i className="fas fa-microchip" style={{ position: 'absolute', top: '1rem', right: '1rem', fontSize: '5rem', opacity: 0.06, color: '#fff' }} />
                <i className="fas fa-laptop-code" style={{ fontSize: '4rem', color: 'var(--primary)', marginBottom: '1.25rem', display: 'block' }} />
                <h2 style={{ color: '#fff', marginBottom: '1rem' }}>Global Digital Portal</h2>
                <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '1.5rem' }}>A unified Learning Management System (LMS) where students access curated resources, digital libraries, and interactive coding sandboxes 24/7.</p>
                <span style={{ background: 'var(--primary)', color: '#fff', padding: '0.65rem 1.5rem', borderRadius: '50px', fontWeight: 600, fontSize: '0.9rem' }}>Access via Student Portal</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PTI */}
      <section style={{ background: '#fff', padding: '5rem 0' }} id="pti">
        <div className="container text-center" data-aos="fade-up">
          <span className="section-label">Collaborative Ecosystem</span>
          <h2 className="section-title" style={{ marginTop: '0.5rem', marginBottom: '1rem' }}>Parent-Teacher Partnership</h2>
          <p style={{ color: 'var(--secondary)', maxWidth: 750, margin: '0 auto 3rem', fontSize: '1.05rem' }}>
            We believe in a three-way partnership where students flourish. Our interactive sessions go beyond grade reporting; we co-create growth roadmaps for every child through data-driven insights and personal observation.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="card-white" style={{ padding: '2rem 3rem', display: 'flex', gap: '4rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              {[
                { stat: 'Monthly', label: 'Townhalls' },
                { stat: 'Weekly', label: 'Newsletter' },
                { stat: 'On-Demand', label: 'Counseling' },
              ].map(item => (
                <div key={item.label} className="text-center">
                  <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--primary)', fontFamily: 'var(--font-heading)', marginBottom: '0.25rem' }}>{item.stat}</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--secondary)', fontWeight: 500 }}>{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
