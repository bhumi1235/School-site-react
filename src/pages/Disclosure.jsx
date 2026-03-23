import PageHeader from '../components/layout/PageHeader';

const disclosureData = [
  {
    section: 'General Information',
    rows: [
      ['Name of School', 'Global School'],
      ['Affiliation Board', 'CBSE (Central Board of Secondary Education)'],
      ['Affiliation Number', 'XXXX-YYYY-2000'],
      ['School Code', 'GS-ADU-2000'],
      ['Address', 'Sheikh Zayed Street, Abu Dhabi, UAE'],
      ['Principal', 'Dr. Sameer Gupta (Ph.D Education)'],
      ['Year of Establishment', '2000'],
      ['Status of School', 'Co-educational'],
    ],
  },
  {
    section: 'Academic Details',
    rows: [
      ['Classes Offered', 'Grade 1 to Grade 12'],
      ['Medium of Instruction', 'English'],
      ['Affiliation Status', 'Active — Valid up to 2030'],
      ['Recognition', 'Recognized by Ministry of Education, UAE'],
      ['Board Exam Results (2025)', '100% Pass Rate, 32 students above 95%'],
    ],
  },
  {
    section: 'Infrastructure',
    rows: [
      ['Total Campus Area', '5 Acres'],
      ['Number of Classrooms', '42 Smart Classrooms'],
      ['Science Laboratories', '3 (Physics, Chemistry, Biology)'],
      ['Computer Labs', '2 (60 terminals each)'],
      ['Library', 'Yes — 10,000+ books & digital resources'],
      ['Sports Facilities', 'Football, Cricket, Basketball, Athletics, Swimming'],
      ['Auditorium Capacity', '600 seats'],
    ],
  },
  {
    section: 'Staff Details',
    rows: [
      ['Total Teaching Staff', '50+'],
      ['Total Non-Teaching Staff', '30+'],
      ['Staff Qualification', 'All teachers hold minimum B.Ed / M.Ed degrees'],
      ['Student-Teacher Ratio', '25:1'],
    ],
  },
  {
    section: 'Fees & Charges (AY 2026–27)',
    rows: [
      ['Admission Fee (one-time)', 'AED 2,000'],
      ['Tuition Fee (Grade 1–5)', 'AED 1,200/month'],
      ['Tuition Fee (Grade 6–10)', 'AED 1,500/month'],
      ['Tuition Fee (Grade 11–12)', 'AED 1,800/month'],
      ['Development Fee (Annual)', 'AED 3,000'],
      ['Transport Fee (Optional)', 'AED 500/month per student'],
    ],
  },
];

export default function Disclosure() {
  return (
    <>
      <PageHeader title="Mandatory Disclosure" />
      <section style={{ background: '#f8fafc', padding: '5rem 0' }}>
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="section-label">Transparency</span>
            <h2 className="section-title">Mandatory Public Disclosure</h2>
            <p style={{ color: 'var(--secondary)', maxWidth: 580, margin: '0 auto' }}>
              In accordance with CBSE regulations and UAE Ministry of Education guidelines, Global School publicly discloses the following information.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {disclosureData.map((block, i) => (
              <div key={block.section} className="card-white" style={{ overflow: 'hidden' }} data-aos="fade-up" data-aos-delay={i * 60}>
                <div style={{ background: 'linear-gradient(135deg,var(--primary),var(--primary-dark))', padding: '1rem 1.5rem' }}>
                  <h4 style={{ color: '#fff', margin: 0, fontSize: '1rem' }}>{block.section}</h4>
                </div>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <tbody>
                    {block.rows.map(([label, value], j) => (
                      <tr key={label} style={{ background: j % 2 === 0 ? '#fff' : '#f8fafc', borderBottom: '1px solid var(--border)' }}>
                        <td style={{ padding: '0.75rem 1.5rem', fontWeight: 600, fontSize: '0.88rem', width: '40%', color: 'var(--dark)' }}>{label}</td>
                        <td style={{ padding: '0.75rem 1.5rem', fontSize: '0.88rem', color: 'var(--secondary)' }}>{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
