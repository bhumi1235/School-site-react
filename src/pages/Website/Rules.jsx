import { useState } from 'react';
import PageHeader from '../../components/layout/PageHeader';

const rulesSections = {
  'school-rules': {
    title: 'School Rules',
    icon: 'fa-school',
    rules: [
      'Students must arrive by 7:50 AM. School begins at 8:00 AM sharp.',
      'School uniform (as prescribed) is mandatory every day. No casual wear permitted.',
      'Mobile phones are strictly prohibited inside the school premises.',
      'Students must carry their diary and ID card every day.',
      'Respectful behavior towards all staff, teachers, and fellow students is mandatory.',
      'Littering on campus is a punishable offence. Keep the campus clean.',
      'Students involved in bullying, ragging, or harassment will face strict disciplinary action.',
      'Attendance below 75% will result in detention. Medical leaves must be documented.',
    ],
  },
  'fee-rules': {
    title: 'Fee Rules',
    icon: 'fa-money-bill-wave',
    rules: [
      'Tuition fees are due by the 10th of every month. A late fine of AED 50 applies after the due date.',
      'Fees can be paid online via the Student Portal or at the school accounts office.',
      'Annual fees (admission, development, and activity charges) must be paid at the start of each academic year.',
      'Fee receipts must be retained and produced if required.',
      'Defaulters for more than 2 consecutive months may be denied examination admission.',
      'Fee concession or installment options are available on written request to the Principal.',
    ],
  },
  'bus-rules': {
    title: 'Bus Rules',
    icon: 'fa-bus',
    rules: [
      'Students must board and alight from the bus only at the designated bus stop.',
      'Students must be at the bus stop 5 minutes before the scheduled time.',
      'No shouting, standing, or hanging out of the bus while in motion.',
      'Bus passes must be displayed daily. Lost passes must be reported immediately.',
      'Damage to bus property will be recovered from the responsible student\'s parents.',
      'Bullying or misconduct on the bus will result in cancellation of bus privilege.',
    ],
  },
  'code-conduct': {
    title: 'Code of Conduct',
    icon: 'fa-gavel',
    rules: [
      'Students are ambassadors of Global School inside and outside campus.',
      'Academic dishonesty (copying, plagiarism) is a serious offence and may result in suspension.',
      'Students must not use social media to defame teachers, students, or the institution.',
      'All school property must be treated with care. Damage will be penalized.',
      'Participation in school events, assemblies, and activities is compulsory.',
      'Grievances must be addressed through proper channels — counselor, class teacher, or principal.',
    ],
  },
};

export default function Rules() {
  const [activeTab, setActiveTab] = useState('school-rules');
  const section = rulesSections[activeTab];

  return (
    <>
      <PageHeader title="Rules & Regulations" />
      <section style={{ background: '#f8fafc', padding: '5rem 0' }}>
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="section-label">Discipline & Order</span>
            <h2 className="section-title">Rules & Regulations</h2>
            <p style={{ color: 'var(--secondary)', maxWidth: 580, margin: '0 auto' }}>A disciplined environment is the foundation of quality education. Our rules ensure every student learns in a safe, respectful, and productive space.</p>
          </div>

          {/* Tab Navigation */}
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '2.5rem' }} data-aos="fade-up">
            {Object.entries(rulesSections).map(([key, s]) => (
              <button key={key} id={key} onClick={() => setActiveTab(key)}
                style={{ padding: '0.7rem 1.5rem', borderRadius: '50px', border: 'none', fontWeight: 600, fontSize: '0.88rem', cursor: 'pointer', transition: 'all 0.3s', background: activeTab === key ? 'linear-gradient(135deg,var(--primary),var(--primary-dark))' : '#fff', color: activeTab === key ? '#fff' : 'var(--text)', boxShadow: activeTab === key ? '0 4px 14px rgba(26,86,219,0.25)' : '0 1px 4px rgba(0,0,0,0.06)' }}>
                <i className={`fas ${s.icon}`} style={{ marginRight: '0.5rem' }} />{s.title}
              </button>
            ))}
          </div>

          {/* Rules Content */}
          <div className="card-white" style={{ padding: '2.5rem', maxWidth: '800px', margin: '0 auto' }} data-aos="fade-up">
            <h3 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span style={{ width: 44, height: 44, borderRadius: '50%', background: 'linear-gradient(135deg,var(--primary),var(--primary-dark))', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', flexShrink: 0 }}>
                <i className={`fas ${section.icon}`} />
              </span>
              {section.title}
            </h3>
            <ol style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {section.rules.map((rule, i) => (
                <li key={i} style={{ fontSize: '0.92rem', color: 'var(--text)', lineHeight: 1.7 }}>{rule}</li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </>
  );
}
