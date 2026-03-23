import { useState } from 'react';
import PageHeader from '../components/layout/PageHeader';
import { siteInfo } from '../data/siteData';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });

  const handleChange = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }));
  const handleSubmit = e => {
    e.preventDefault();
    alert('Thank you for reaching out! We will get back to you shortly.');
    setForm({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <>
      <PageHeader title="Contact Us" />

      {/* Info Cards */}
      <section id="info" style={{ background: '#f8fafc', padding: '5rem 0' }}>
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="section-label">Get In Touch</span>
            <h2 className="section-title">We'd Love to Hear from You</h2>
          </div>
          <div className="row-3" style={{ marginBottom: '4rem' }}>
            {[
              { icon: 'fa-map-marker-alt', title: 'Our Address', lines: [siteInfo.address] },
              { icon: 'fa-phone-alt', title: 'Phone', lines: [siteInfo.phone, 'Mon–Fri, 8:00 AM – 3:00 PM'] },
              { icon: 'fa-envelope', title: 'Email', lines: [siteInfo.email] },
            ].map((c, i) => (
              <div key={c.title} className="card-white" style={{ padding: '2rem', textAlign: 'center' }} data-aos="fade-up" data-aos-delay={i * 100}>
                <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'linear-gradient(135deg,var(--primary),var(--primary-dark))', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem', margin: '0 auto 1rem' }}>
                  <i className={`fas ${c.icon}`} />
                </div>
                <h5>{c.title}</h5>
                {c.lines.map(l => <p key={l} style={{ color: 'var(--secondary)', fontSize: '0.9rem' }}>{l}</p>)}
              </div>
            ))}
          </div>

          {/* Enquiry Form */}
          <div id="enquiry" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
            <div data-aos="fade-right">
              <span className="section-label">Send Us a Message</span>
              <h3 className="section-title mt-1" style={{ marginBottom: '1.5rem' }}>Enquiry Form</h3>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div className="form-group">
                    <label>Your Name</label>
                    <input name="name" value={form.name} onChange={handleChange} placeholder="Full name" required />
                  </div>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="email@example.com" required />
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input name="phone" value={form.phone} onChange={handleChange} placeholder="+971 ..." />
                  </div>
                  <div className="form-group">
                    <label>Subject</label>
                    <input name="subject" value={form.subject} onChange={handleChange} placeholder="e.g. Admissions query" required />
                  </div>
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea name="message" value={form.message} onChange={handleChange} placeholder="Write your message here..." required />
                </div>
                <button type="submit" className="btn btn-primary">Send Message <i className="fas fa-paper-plane" /></button>
              </form>
            </div>

            {/* Map Placeholder */}
            <div id="feedback" data-aos="fade-left">
              <span className="section-label">Find Us</span>
              <h3 className="section-title mt-1" style={{ marginBottom: '1.5rem' }}>Our Location</h3>
              <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--border)', height: '400px', background: 'linear-gradient(135deg,#e8efff,#f1f5f9)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '1rem', color: 'var(--secondary)' }}>
                <i className="fas fa-map-marked-alt" style={{ fontSize: '3rem', color: 'var(--primary)' }} />
                <p style={{ fontWeight: 600, color: 'var(--dark)' }}>{siteInfo.address}</p>
                <a href={`https://maps.google.com/?q=${encodeURIComponent(siteInfo.address)}`} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">Open in Google Maps</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
