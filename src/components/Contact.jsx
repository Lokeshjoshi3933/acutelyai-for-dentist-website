import React, { useEffect } from 'react';
import './Contact.css';
import Cal, { getCalApi } from "@calcom/embed-react";

function Contact() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"free-website-preview-call"});
      cal("ui", {"hideEventTypeDetails":false,"layout":"month_view","theme":"dark"});
    })();
  }, []);

  return (
    <section className="contact-section rv v" id="contact">
      <div className="ct">
        <div className="contact-grid">
          
          {/* Left Column: Info */}
          <div className="contact-info">
            <p className="ol">Let's Talk</p>
            <h2 className="sh2">Ready To Scale<br/>Your Business?</h2>
            <p className="contact-desc">
              Don't be a stranger. Let's get on a free consultation call to discuss your business goals and how a premium custom website can help you achieve them.
            </p>
            
            <div className="contact-list">
              <a href="mailto:Lokeshjoshibusiness@gmail.com" className="contact-item" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="ci-icon"><i className="fas fa-envelope"></i></div>
                <div className="ci-text">Lokeshjoshibusiness@gmail.com</div>
              </a>
              <a href="tel:+918193973933" className="contact-item" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="ci-icon"><i className="fas fa-phone-alt"></i></div>
                <div className="ci-text">+91 8193973933</div>
              </a>
              <a href="https://wa.me/918193973933" target="_blank" rel="noopener noreferrer" className="contact-item" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="ci-icon"><i className="fab fa-whatsapp"></i></div>
                <div className="ci-text">+91 8193973933</div>
              </a>
              <div className="contact-item">
                <div className="ci-icon"><i className="fas fa-map-marker-alt"></i></div>
                <div className="ci-text">South Delhi</div>
              </div>
            </div>
          </div>

          {/* Right Column: Cal Embed */}
          <div className="contact-form-col">
            <div className="contact-form-card" style={{ padding: '32px 24px', minHeight: '600px', display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontFamily: 'Cabinet Grotesk, sans-serif', fontSize: '1.6rem', fontWeight: 800, color: 'var(--text-light)', marginBottom: '24px', textAlign: 'center' }}>
                Book a Free 15-Minute Website Call
              </h3>
              <div style={{ flex: 1, width: '100%', height: '100%', borderRadius: '12px', overflow: 'hidden' }}>
                <Cal 
                  namespace="free-website-preview-call"
                  calLink="lokesh-joshi/free-website-preview-call"
                  style={{ width: "100%", height: "100%", overflow: "scroll" }}
                  config={{ "layout": "month_view", "useSlotsViewOnSmallScreen": "true", "theme": "dark" }}
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;
