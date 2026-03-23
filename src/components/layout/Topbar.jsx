import { siteInfo } from '../../data/siteData';

export default function Topbar() {
  const copyPhone = () => {
    navigator.clipboard.writeText(siteInfo.phone);
  };

  return (
    <div className="topbar">
      <div className="topbar__inner">
        {/* Left — address & hours */}
        <div className="topbar__info">
          <span className="topbar__item">
            <i className="fas fa-map-marker-alt" />
            {siteInfo.address}
          </span>
          <span className="topbar__item">
            <i className="far fa-clock" />
            {siteInfo.hours}
          </span>
        </div>

        {/* Right — phone + socials */}
        <div className="topbar__right">
          <div className="topbar__phone">
            <i className="fas fa-phone-alt" />
            <a href={`tel:${siteInfo.phone}`}>{siteInfo.phone}</a>
            <button
              onClick={copyPhone}
              className="topbar__copy-btn"
              title="Copy number"
              aria-label="Copy phone number"
            >
              <i className="fas fa-copy" />
            </button>
          </div>
          <div className="topbar__socials">
            <a className="topbar__social" href={siteInfo.socials.facebook}  aria-label="Facebook"><i className="fab fa-facebook-f" /></a>
            <a className="topbar__social" href={siteInfo.socials.twitter}   aria-label="Twitter"><i className="fab fa-twitter" /></a>
            <a className="topbar__social" href={siteInfo.socials.linkedin}  aria-label="LinkedIn"><i className="fab fa-linkedin-in" /></a>
            <a className="topbar__social" href={siteInfo.socials.instagram} aria-label="Instagram"><i className="fab fa-instagram" /></a>
          </div>
        </div>
      </div>
    </div>
  );
}
