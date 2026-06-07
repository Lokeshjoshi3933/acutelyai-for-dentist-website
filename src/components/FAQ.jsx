import { useState } from 'react';
import './FAQ.css';

function FAQ() {
  const faqs = [
    {
      question: "Can you guarantee leads?",
      answer: "No website can guarantee leads, but a good website improves trust and helps convert people who already find you."
    },
    {
      question: "How fast can you deliver?",
      answer: "First version in 48 to 72 hours after receiving your content."
    },
    {
      question: "What do you need from me?",
      answer: "Business name, services, photos, contact details, location, and any brand preferences."
    },
    {
      question: "Will I own the website?",
      answer: "Yes, the domain and core assets will stay under your ownership."
    },
    {
      question: "Do you provide SEO?",
      answer: "I provide basic local SEO setup. Advanced SEO is a longer-term service."
    },
    {
      question: "I do not have photos. Can you still build it?",
      answer: "Yes, but real photos build more trust. We can start with clean design and later upgrade with real photos."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section className="sec faq-section" style={{ background: 'var(--bg-main)' }} id="faq">
      <div className="ct">
        <div className="faq-layout">
          
          <div className="faq-header">
            <p className="ol rv v">FAQ</p>
            <h2 className="sh2 rv v d1" style={{ marginBottom: '20px' }}>Frequently Asked<br />Questions</h2>
            <p className="faq-desc rv v d2">
              Everything you need to know about the process, deliverables, and guarantees. Can't find the answer you're looking for?
            </p>
            <a href="#contact" className="faq-contact-btn rv v d3">
              Ask a Question <i className="fas fa-arrow-right"></i>
            </a>
          </div>
          
          <div className="faq-list rv v d2">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`faq-i ${openIndex === index ? 'active' : ''}`}
                onClick={() => toggleFAQ(index)}
              >
                <div className="faq-q">
                  <span>{faq.question}</span>
                  <div className="faq-icon-wrap">
                    <i className="fas fa-plus faq-ic"></i>
                  </div>
                </div>
                <div className="faq-a" style={{ maxHeight: openIndex === index ? '200px' : '0' }}>
                  <div className="faq-a-in">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default FAQ;
