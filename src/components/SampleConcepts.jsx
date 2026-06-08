import { useState, useEffect } from 'react';
import './SampleConcepts.css';
import treeConcept from '../assets/images/tree_concept.jpg';

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
      title: "Fence & Deck Contractor Website",
      category: "Fence & Deck Business",
      image: "/demo-fence-deck/images/hero-home.png",
      iframeUrl: "/demo-fence-deck/index.html",
      description: "A homeowner-focused contractor website concept built around fence services, deck builds, recent projects, and fast quote requests.",
      tags: ["Service Business", "Project Proof", "Free Estimates"],
      bullets: [
        "Fence installation and deck building service pages",
        "Recent projects and trust-building proof",
        "Local Franklin, TN contractor positioning",
        "Clear free-estimate CTA flow",
        "Mobile-first layout for homeowner enquiries"
      ]
    },
    {
      title: "Concrete Contractor Website",
      category: "Concrete Contractor Business",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
      iframeUrl: "/demo-concrete-contractor/index.html",
      description: "A local concrete contractor demo built around driveways, patios, slabs, project proof, reviews, and fast estimate requests.",
      tags: ["Service Business", "Concrete Services", "Estimate Requests"],
      bullets: [
        "Concrete driveway, patio, slab, sidewalk, and repair service pages",
        "Project gallery and homeowner trust proof",
        "Austin, TX local contractor positioning",
        "Clear estimate request CTA flow",
        "Mobile-first layout for service enquiries"
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
