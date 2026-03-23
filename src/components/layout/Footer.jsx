import { useState } from 'react';
import { Link } from 'react-router-dom';
import { siteInfo } from '../../data/siteData';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    setEmail('');
    alert('Thank you for subscribing!');
  };

  return (
    <footer className="footer">
      <div className="footer__grid">
        {/* Col 1 — Brand & Contact */}
        <div className="footer__col">
          <div className="footer__brand">
            <i className="fas fa-school" />
            <span>{siteInfo.name}</span>
          </div>
          <div className="footer__contact">
            <p><i className="fas fa-map-marker-alt" />{siteInfo.address}</p>
            <p><i className="fas fa-phone-alt" />{siteInfo.phone}</p>
            <p><i className="fas fa-envelope" />{siteInfo.email}</p>
          </div>
          <div className="footer__socials">
            <a href={siteInfo.socials.facebook} aria-label="Facebook"><i className="fab fa-facebook-f" /></a>
            <a href={siteInfo.socials.twitter}  aria-label="Twitter"><i className="fab fa-twitter" /></a>
            <a href={siteInfo.socials.linkedin} aria-label="LinkedIn"><i className="fab fa-linkedin-in" /></a>
            <a href={siteInfo.socials.instagram} aria-label="Instagram"><i className="fab fa-instagram" /></a>
          </div>
        </div>

        {/* Col 2 — Quick Links */}
        <div className="footer__col">
          <h4>Quick Links</h4>
          <div className="footer__links">
            <Link to="/admissions">Admissions</Link>
            <Link to="/academics">Academics</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/news">News & Events</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/disclosure">Disclosure</Link>
          </div>
        </div>

        {/* Col 3 — Academics */}
        <div className="footer__col">
          <h4>Academics</h4>
          <div className="footer__links">
            <Link to="/academics#curriculum">Curriculum</Link>
            <Link to="/academics#learning">Learning Method</Link>
            <Link to="/academics#assessment">Assessment</Link>
            <Link to="/academics#elearning">IT & E-learning</Link>
            <Link to="/beyond-academics#sports">Sports</Link>
            <Link to="/beyond-academics#clubs">Clubs & Activities</Link>
          </div>
        </div>

        {/* Col 4 — Newsletter */}
        <div className="footer__col">
          <h4>Newsletter</h4>
          <div className="footer__newsletter">
            <p>Stay updated with our latest news, events, and announcements.</p>
            <form onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
              <button type="submit"><i className="fas fa-paper-plane" /></button>
            </form>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p>
          &copy; {new Date().getFullYear()} <a href="/">{siteInfo.name}</a>. All Rights Reserved. Est. {siteInfo.established}.
        </p>
      </div>
    </footer>
  );
}
