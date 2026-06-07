import './Footer.css';

function Footer() {
  return (
    <footer className="ftr">
      <div className="ct">
        <div className="ftr-r">
          <div>
            <h2 style={{ fontFamily: 'Cabinet Grotesk, sans-serif', fontSize: '24px', fontWeight: 900, marginBottom: '8px' }}>
              Acutely AI <span style={{ color: 'var(--accent)' }}>.</span>
            </h2>
            <p className="ftr-tg">Premium websites for Indian businesses.</p>
          </div>
          <div className="ftr-lk">
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#sample-concepts">Demo Work</a>
            <a href="https://wa.me/918193973933" target="_blank" rel="noopener noreferrer">Contact</a>
          </div>
        </div>
        <div className="ftr-dv"></div>
        <div className="ftr-b">
          <span>&copy; {new Date().getFullYear()} Acutely AI. All rights reserved.</span>
          <span>Designed for high-trust businesses.</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
