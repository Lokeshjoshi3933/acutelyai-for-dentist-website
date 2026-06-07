import { useState, useEffect } from 'react';
import './SampleConcepts.css';
import treeConcept from '../assets/images/tree_concept.jpg';
import consultantConcept from '../assets/images/consultant_concept.png';
import businessConcept from '../assets/images/business_concept.png';

function SampleConcepts() {
  const [selectedConcept, setSelectedConcept] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedConcept(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const concepts = [
    {
      title: "Premium Tree Service Authority Site",
      category: "Tree Service Business",
      image: treeConcept,
      iframeUrl: '/demo-tree-service/index.html',
      description: "A clean, high-trust contractor website concept designed to help clients understand services, trust the team, and request a quote.",
      tags: ["Service Business", "Quote Requests", "Trust-Focused"],
      bullets: [
        "Service sections for tree removal, roofing, plumbing, and concrete",
        "Team profile and company trust section",
        "Google reviews and customer-friendly FAQs",
        "WhatsApp booking and Google Maps integration",
        "Mobile-first layout for quick quote requests"
      ]
    },
    {
      title: "Modern Consultant Website",
      category: "Advisory Concept",
      image: consultantConcept,
      description: "A premium consultant website concept built to show authority, explain services, and attract serious business enquiries.",
      tags: ["Consultant", "Authority", "Lead Enquiries"],
      bullets: [
        "Strong expert positioning",
        "Services and advisory process section",
        "Authority-building about section",
        "Lead enquiry CTA",
        "Clean layout for consultants, coaches, advisors, and CA firms"
      ]
    },
    {
      title: "Indian Business Website With Global Feel",
      category: "Business Concept",
      image: businessConcept,
      description: "A premium business website concept for Indian companies that want to look modern, credible, and ready for bigger clients.",
      tags: ["Business Website", "Premium Brand", "Global Look"],
      bullets: [
        "Global-style homepage design",
        "Company credibility and capability sections",
        "Services or product overview",
        "Contact enquiry CTA",
        "Built for exporters, agencies, manufacturers, and service companies"
      ]
    }
  ];

  return (
    <section className="sec" id="sample-concepts">
      <div className="ct">
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 className="sh2 rv v d1" style={{ marginBottom: '16px' }}>Premium Website Concepts</h2>
          <p className="rv v d2" style={{ maxWidth: '800px', margin: '0 auto', fontSize: '18px', color: 'var(--text-muted)', lineHeight: '1.6' }}>
            These are original demo concepts, not past client projects. They show the design quality, layout thinking, and trust-building approach I can bring to your business.
          </p>
        </div>
        
        <div className="concept-grid">
          {concepts.map((concept, index) => (
            <div 
              key={index} 
              className={`concept-card rv v d${index + 1}`}
              onClick={() => setSelectedConcept(concept)}
              style={{ cursor: 'pointer' }}
            >
              <div className="concept-img-wrapper">
                <img src={concept.image} alt={concept.title} className="concept-img" />
              </div>
              <div className="concept-content">
                <div className="concept-category">{concept.category}</div>
                <h3>{concept.title}</h3>
                <p>{concept.description}</p>
                <div className="concept-tags">
                  {concept.tags.map((tag, i) => (
                    <span key={i} className="concept-tag">{tag}</span>
                  ))}
                </div>
                <button 
                  className="concept-btn"
                >
                  View Concept Preview
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedConcept && (
        <div className="concept-modal-overlay" onClick={() => setSelectedConcept(null)}>
          <div className="concept-modal" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedConcept(null)}>
              <i className="fas fa-times"></i>
            </button>
            
            <div className="modal-img-container">
              {selectedConcept.iframeUrl ? (
                <iframe 
                  src={selectedConcept.iframeUrl} 
                  title={selectedConcept.title} 
                  style={{ width: '100%', height: '100%', minHeight: '400px', border: 'none' }}
                />
              ) : (
                <img src={selectedConcept.image} alt={selectedConcept.title} className="modal-img" />
              )}
            </div>
            
            <div className="modal-content">
              <div className="concept-category">{selectedConcept.category}</div>
              <h3>{selectedConcept.title}</h3>
              <p className="modal-desc">{selectedConcept.description}</p>
              
              <ul className="modal-bullets">
                {selectedConcept.bullets.map((bullet, idx) => (
                  <li key={idx}><i className="fas fa-check"></i> {bullet}</li>
                ))}
              </ul>
              
              <a href="https://tally.so/r/KYk4Ng" target="_blank" rel="noopener noreferrer" className="modal-cta" onClick={() => setSelectedConcept(null)}>
                Get a Free Preview Like This
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default SampleConcepts;
