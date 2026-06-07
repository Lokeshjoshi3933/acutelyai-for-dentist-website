import './WhoIHelp.css';

function WhoIHelp() {
  const audiences = [
    "Tree Services",
    "Roofing & Decking",
    "Plumbers & HVAC",
    "Local Service Businesses",
    "Concrete Contractors",
    "Founder-led Businesses"
  ];

  return (
    <section className="sec" id="who-we-help" style={{ background: 'var(--bg-main)' }}>
      <div className="ct">
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <p className="ol rv v">Who I Help</p>
          <h2 className="sh2 rv v d1">Perfect for ambitious businesses.</h2>
        </div>
        
        <div className="who-g rv v d2">
          {audiences.map((audience, index) => (
            <div key={index} className="who-i">
              <i className="fas fa-check-circle who-ic"></i>
              <span>{audience}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhoIHelp;
