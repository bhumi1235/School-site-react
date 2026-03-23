import { useState } from 'react';
import PageHeader from '../components/layout/PageHeader';

const steps = [
  { num: '01', icon: 'fa-file-alt', title: 'Fill Application', desc: 'Complete the online admission form with student and parent details. All fields are mandatory.' },
  { num: '02', icon: 'fa-upload', title: 'Submit Documents', desc: 'Upload birth certificate, previous school report cards, passport-size photograph, and address proof.' },
  { num: '03', icon: 'fa-clipboard-check', title: 'Admission Test', desc: 'Applicants for Grades 2 and above will take a written assessment in English, Math, and Science.' },
  { num: '04', icon: 'fa-handshake', title: 'Interview', desc: 'A brief interaction with the student and parent with the Principal and Admission Coordinator.' },
  { num: '05', icon: 'fa-check-circle', title: 'Confirmation', desc: 'Successful candidates receive an offer letter. Fees must be paid within 7 days to confirm the seat.' },
];

export default function Admissions() {
  const [form, setForm] = useState({ studentName: '', grade: '', parentName: '', email: '', phone: '', message: '' });
  const handleChange = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }));
  const handleSubmit = e => { e.preventDefault(); alert('Enquiry submitted! Our admissions team will contact you within 24 hours.'); setForm({ studentName: '', grade: '', parentName: '', email: '', phone: '', message: '' }); };

  return (
    <>
      <PageHeader title="Admissions" />

      {/* Process */}
      <section style={{ background: '#fff', padding: '5rem 0' }}>
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="section-label">Admissions 2026–27</span>
            <h2 className="section-title">Simple & Transparent Process</h2>
            <p style={{ color: 'var(--secondary)', maxWidth: 560, margin: '0 auto' }}>Securing your child's place at Global School is straightforward. Follow the five steps below.</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '720px', margin: '0 auto' }}>
            {steps.map((s, i) => (
              <div key={s.num} className="card-white" style={{ padding: '1.5rem 2rem', display: 'flex', alignItems: 'flex-start', gap: '1.5rem' }} data-aos="fade-up" data-aos-delay={i * 80}>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 800, color: 'var(--primary-light)', lineHeight: 1, flexShrink: 0, minWidth: '3rem' }}>{s.num}</div>
                <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'linear-gradient(135deg,var(--primary),var(--primary-dark))', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '1.1rem' }}>
                  <i className={`fas ${s.icon}`} />
                </div>
                <div>
                  <h5 style={{ marginBottom: '0.3rem' }}>{s.title}</h5>
                  <p style={{ color: 'var(--secondary)', fontSize: '0.9rem', margin: 0 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry form */}
      <section style={{ background: '#f8fafc', padding: '5rem 0' }}>
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="section-label">Apply Now</span>
            <h2 className="section-title">Admission Enquiry Form</h2>
          </div>
          <div className="card-white" style={{ maxWidth: '680px', margin: '0 auto', padding: '2.5rem' }} data-aos="fade-up">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group"><label>Student Name</label><input name="studentName" value={form.studentName} onChange={handleChange} placeholder="Full name" required /></div>
                <div className="form-group">
                  <label>Applying for Grade</label>
                  <select name="grade" value={form.grade} onChange={handleChange} required>
                    <option value="">Select Grade</option>
                    {Array.from({length: 12}, (_, i) => <option key={i+1} value={i+1}>Grade {i+1}</option>)}
                  </select>
                </div>
                <div className="form-group"><label>Parent / Guardian Name</label><input name="parentName" value={form.parentName} onChange={handleChange} placeholder="Full name" required /></div>
                <div className="form-group"><label>Email Address</label><input name="email" type="email" value={form.email} onChange={handleChange} placeholder="email@example.com" required /></div>
              </div>
              <div className="form-group"><label>Phone Number</label><input name="phone" value={form.phone} onChange={handleChange} placeholder="+971 ..." /></div>
              <div className="form-group"><label>Additional Message</label><textarea name="message" value={form.message} onChange={handleChange} placeholder="Any specific questions or requirements..." /></div>
              <button type="submit" className="btn btn-accent btn-pill" style={{ width: '100%', justifyContent: 'center', padding: '0.85rem' }}>Submit Enquiry <i className="fas fa-arrow-right" /></button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
