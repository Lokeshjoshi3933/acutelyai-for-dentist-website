import { useEffect, useState } from 'react';
import heroBg from './assets/images/hero-bg.png';
import logoUrl from './assets/images/logo.png';
import treeConcept from './assets/images/tree_concept.jpg';
import consultantConcept from './assets/images/consultant_concept.png';
import businessConcept from './assets/images/business_concept.png';

const cases = [
  {
    title: 'Tree Service Authority Site',
    type: 'Tree Service Business',
    image: treeConcept,
    iframeUrl: '/demo-tree-service/index.html',
    description:
      'A high-trust service direction built around contractor credibility, service clarity, reviews, and fast quote requests.',
    points: ['Service pages', 'Contractor positioning', 'Review-ready layout'],
  },
  {
    title: 'Consultant Trust Website',
    type: 'Advisor site',
    image: consultantConcept,
    description:
      'A cleaner positioning system for experts who need to explain their offer and attract serious enquiries.',
    points: ['Expert profile', 'Clear services', 'Lead enquiry flow'],
  },
  {
    title: 'Premium Business Website',
    type: 'Founder-led brand',
    image: businessConcept,
    description:
      'A stronger digital front door for businesses that want to look credible before a buyer ever calls.',
    points: ['Brand story', 'Capability proof', 'Contact-focused CTA'],
  },
];

const process = [
  ['01', 'Send the basics', 'You share your clinic or business name, services, photos, city, and contact details.'],
  ['02', 'Free homepage preview', 'I design the first direction so you can judge the quality before paying.'],
  ['03', 'Build the full site', 'Once the direction feels right, I build the pages, content flow, and enquiry paths.'],
  ['04', 'Launch and improve', 'We launch, check the mobile experience, and keep the website easy to update.'],
];

const faqs = [
  [
    'Is this only for service contractors?',
    'Home service businesses like tree care, roofing, plumbing, and concrete are the main niche, but I also build similar trust-focused websites for consultants.',
  ],
  [
    'Can you guarantee leads?',
    'No. A website cannot honestly guarantee leads. What it can do is make visitors trust you faster and make enquiries easier.',
  ],
  [
    'How fast can you make the first preview?',
    'Usually 48 to 72 hours after I have the business details, photos, services, and contact information.',
  ],
  [
    'What if I do not have good photos?',
    'We can still start with a clean layout. Real project or business photos can be added later because they usually improve trust.',
  ],
];

function App() {
  const [selectedCase, setSelectedCase] = useState(cases[0]);
  const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    document.title = 'Acutely AI | Premium Service Business Websites';
  }, []);

  useEffect(() => {
    if (!isPreviewModalOpen) return undefined;

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsPreviewModalOpen(false);
      }
    };

    document.body.classList.add('modal-open');
    window.addEventListener('keydown', handleEscape);

    return () => {
      document.body.classList.remove('modal-open');
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isPreviewModalOpen]);

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#home" aria-label="Acutely AI home">
          <img src={logoUrl} alt="Acutely AI" />
        </a>
        <nav className="topnav" aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#system">System</a>
          <a href="#process">Process</a>
          <a href="#contact" className="nav-cta">Book a Call</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home" style={{ backgroundImage: `url(${heroBg})` }}>
          <div className="hero-shade" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="brand-stripe" aria-hidden="true" />
              <p className="micro">Acutely AI portfolio</p>
              <h1>Premium service business websites built to turn visitors into quote requests.</h1>
              <p className="hero-text">
                I design sharp, trust-building websites for service businesses and local contractors. Clear message, premium visual direction, and simple quote paths.
              </p>
              <div className="hero-actions">
                <a className="btn primary" href="https://tally.so/r/KYk4Ng" target="_blank" rel="noreferrer">
                  Request Free Preview
                </a>
                <a className="btn outline" href="#work">View Portfolio</a>
              </div>
            </div>

            <div className="hero-panel" aria-label="Website preview summary">
              <div className="panel-top">
                <span />
                <span />
                <span />
              </div>
              <div className="panel-body">
                <p className="micro">Service business flow</p>
                <h2>Trust first. Booking second. Confusion nowhere.</h2>
                <div className="metric-grid">
                  <div>
                    <strong>01</strong>
                    <span>Contractor trust</span>
                  </div>
                  <div>
                    <strong>02</strong>
                    <span>Service clarity</span>
                  </div>
                  <div>
                    <strong>03</strong>
                    <span>WhatsApp enquiry</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="proof-strip" aria-label="Acutely AI proof points">
          <div className="container proof-grid">
            <div>
              <strong>48-72h</strong>
              <span>first homepage preview</span>
            </div>
            <div>
              <strong>Service first</strong>
              <span>built around customer trust</span>
            </div>
            <div>
              <strong>No templates</strong>
              <span>custom direction for each business</span>
            </div>
            <div>
              <strong>Simple launch</strong>
              <span>clear steps, no tech confusion</span>
            </div>
          </div>
        </section>

        <section className="section split" id="system">
          <div className="container split-grid">
            <div>
              <p className="micro">The problem</p>
              <h2>Most contractor websites look average before the business owner gets a chance to prove they are not.</h2>
            </div>
            <div className="body-stack">
              <p>
                A potential client checks your website before they call. If the page looks old, unclear, or generic, trust drops before the first conversation.
              </p>
              <p>
                Acutely AI fixes that first impression with a website that explains your services, shows credibility, and makes requesting a quote feel obvious.
              </p>
            </div>
          </div>
        </section>

        <section className="section system-band">
          <div className="container">
            <div className="section-head">
              <p className="micro">Service website system</p>
              <h2>What I build into the page.</h2>
            </div>
            <div className="system-grid">
              {[
                ['Contractor trust', 'Position the business clearly with team profiles, experience, photos, and a calm expert tone.'],
                ['Service clarity', 'Explain tree removal, roof installation, plumbing repairs, and other services in plain language.'],
                ['Booking path', 'Make WhatsApp, phone, maps, and quote request buttons easy to find on desktop and mobile.'],
                ['Local proof', 'Use reviews, location cues, project photos, FAQs, and service standards to reduce doubt.'],
              ].map(([title, text]) => (
                <article className="system-card" key={title}>
                  <div className="card-line" />
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section work-section" id="work">
          <div className="container">
            <div className="section-head work-head">
              <div>
                <p className="micro">Selected directions</p>
                <h2>Portfolio concepts with a clear job.</h2>
              </div>
              <a className="text-link" href="https://wa.me/918193973933" target="_blank" rel="noreferrer">
                Discuss a project
              </a>
            </div>

            <div className="work-grid">
              <div className="case-list">
                {cases.map((item) => (
                  <button
                    className={`case-row ${selectedCase.title === item.title ? 'active' : ''}`}
                    key={item.title}
                    onClick={() => setSelectedCase(item)}
                  >
                    <span>{item.type}</span>
                    <strong>{item.title}</strong>
                  </button>
                ))}
              </div>
              <article
                className={`case-preview ${selectedCase.iframeUrl ? 'is-clickable' : ''}`}
                role={selectedCase.iframeUrl ? 'button' : undefined}
                tabIndex={selectedCase.iframeUrl ? 0 : undefined}
                onClick={() => {
                  if (selectedCase.iframeUrl) {
                    setIsPreviewModalOpen(true);
                  }
                }}
                onKeyDown={(event) => {
                  if (selectedCase.iframeUrl && (event.key === 'Enter' || event.key === ' ')) {
                    event.preventDefault();
                    setIsPreviewModalOpen(true);
                  }
                }}
              >
                {selectedCase.iframeUrl ? (
                  <div className="case-browser-preview">
                    <div className="case-browser-bar">
                      <span />
                      <span />
                      <span />
                      <strong>lonestarcanopy.com</strong>
                    </div>
                    <iframe
                      src={selectedCase.iframeUrl}
                      title={`${selectedCase.title} small preview`}
                    />
                    <div className="case-preview-hover">
                      <span>Open full website preview</span>
                    </div>
                  </div>
                ) : (
                  <img src={selectedCase.image} alt={selectedCase.title} />
                )}
                <div className="case-copy">
                  <p className="micro">{selectedCase.type}</p>
                  <h3>{selectedCase.title}</h3>
                  <p>{selectedCase.description}</p>
                  <div className="tag-row">
                    {selectedCase.points.map((point) => (
                      <span key={point}>{point}</span>
                    ))}
                  </div>
                  {selectedCase.iframeUrl && (
                    <div className="case-open-hint">
                      Click to open and scroll the full website
                    </div>
                  )}
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section process-section" id="process">
          <div className="container">
            <div className="section-head">
              <p className="micro">Process</p>
              <h2>Simple for you, structured behind the scenes.</h2>
            </div>
            <div className="process-grid">
              {process.map(([number, title, text]) => (
                <article className="process-card" key={title}>
                  <span>{number}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section founder-section">
          <div className="container founder-grid">
            <div className="founder-image">
              <img src="/founder.jpg" alt="Founder of Acutely AI" />
              <span>Founder-led studio</span>
            </div>
            <div>
              <p className="micro">Why work with me</p>
              <h2>I keep the process direct because most business owners do not want website chaos.</h2>
              <p>
                You talk to one person, get a clear direction, and see the first homepage before making a bigger commitment. The goal is not fancy design for its own sake. The goal is trust, clarity, and more enquiries.
              </p>
              <div className="founder-points">
                <span>Direct communication</span>
                <span>Clean premium design</span>
                <span>Mobile-first build</span>
                <span>Honest expectations</span>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-band" id="preview">
          <div className="container cta-grid">
            <div>
              <p className="micro">Risk-free first step</p>
              <h2>Get a free homepage preview before you decide.</h2>
            </div>
            <div>
              <p>
                Send your business details and I will create a custom homepage direction. If you like the direction, we build the full website.
              </p>
              <a className="btn primary dark" href="https://tally.so/r/KYk4Ng" target="_blank" rel="noreferrer">
                Request Free Preview
              </a>
            </div>
          </div>
        </section>

        <section className="section faq-section">
          <div className="container faq-grid">
            <div>
              <p className="micro">FAQ</p>
              <h2>Clear answers before we talk.</h2>
            </div>
            <div className="faq-list">
              {faqs.map(([question, answer], index) => (
                <button
                  className={`faq-item ${openFaq === index ? 'open' : ''}`}
                  key={question}
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span>
                    <strong>{question}</strong>
                    {openFaq === index && <em>{answer}</em>}
                  </span>
                  <i>{openFaq === index ? '-' : '+'}</i>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="container contact-grid">
            <div>
              <p className="micro">Contact</p>
              <h2>Want this level of website for your service business?</h2>
              <p>
                Message me with your business name, city, services, and what you want the website to help with.
              </p>
            </div>
            <div className="contact-card">
              <a href="mailto:Lokeshjoshibusiness@gmail.com">Lokeshjoshibusiness@gmail.com</a>
              <a href="tel:+918193973933">+91 8193973933</a>
              <a href="https://wa.me/918193973933" target="_blank" rel="noreferrer">WhatsApp me</a>
              <a href="https://cal.com/lokesh-joshi/free-website-preview-call" target="_blank" rel="noreferrer">
                Book a 15-minute call
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <span>&copy; {new Date().getFullYear()} Acutely AI</span>
          <span>Premium websites for service businesses and founder-led brands.</span>
        </div>
      </footer>

      <a className="floating-whatsapp" href="https://wa.me/918193973933" target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">
        WA
      </a>

      {isPreviewModalOpen && selectedCase.iframeUrl && (
        <div
          className="portfolio-modal-backdrop"
          onClick={() => setIsPreviewModalOpen(false)}
        >
          <div
            className="portfolio-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="portfolio-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="portfolio-modal-header">
              <div>
                <p className="micro">Scrollable website preview</p>
                <h2 id="portfolio-modal-title">{selectedCase.title}</h2>
              </div>
              <button
                className="portfolio-modal-close"
                type="button"
                onClick={() => setIsPreviewModalOpen(false)}
                aria-label="Close portfolio preview"
              >
                Close
              </button>
            </div>

            <div className="portfolio-browser-shell">
              <div className="portfolio-browser-bar">
                <div>
                  <span />
                  <span />
                  <span />
                </div>
                <strong>lonestarcanopy.com</strong>
              </div>
              <iframe
                src={selectedCase.iframeUrl}
                title={`${selectedCase.title} full website preview`}
                className="portfolio-modal-frame"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
