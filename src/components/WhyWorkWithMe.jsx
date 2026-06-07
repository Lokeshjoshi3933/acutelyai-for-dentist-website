import './WhyWorkWithMe.css';

function WhyWorkWithMe() {
  const reasons = [
    "Direct communication",
    "Clean trust-focused design",
    "Fast delivery (48-72 hrs)",
    "Honest pricing",
    "Full website ownership",
    "No fake SEO promises"
  ];

  return (
    <section className="sec" id="man-behind" style={{ background: 'var(--bg-card)' }}>
      <div className="ct">
        <div className="mb-g">
          <div className="mb-img rv v">
            <img 
              src="/founder.jpg" 
              alt="Founder of Acutely AI" 
              loading="lazy" 
              onError={(e) => {
                e.target.src = 'https://ui-avatars.com/api/?name=Founder&background=E5D3B3&color=000&size=400';
              }}
            />
            <div className="founder-tag">FOUNDER</div>
          </div>
          <div className="mb-t">
            <p className="ol rv v">Why Work With Me</p>
            <h2 className="sh2 rv v d1" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', lineHeight: 1.3 }}>
              I design focused on trust. <br />
              <span style={{ color: 'var(--accent)' }}>Direct communication, clear process.</span>
            </h2>
            <p className="rv v d2">
              Most businesses don't need complex websites — they need simple, clean websites that actually bring them customers. That's exactly what I focus on.
            </p>
            <p className="rv v d3">
              Every website I create is designed to build trust, communicate your value clearly, and turn visitors into clients. No templates, no shortcuts — just purposeful design aligned with your business goals.
            </p>
            <div className="sk rv v d4">
              {reasons.map((reason, idx) => (
                <span key={idx}>{reason}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyWorkWithMe;
