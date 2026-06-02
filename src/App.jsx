import React from 'react';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Services from './components/Services';
import WhoIHelp from './components/WhoIHelp';
import SampleConcepts from './components/SampleConcepts';
import Process from './components/Process';
import WhyWorkWithMe from './components/WhyWorkWithMe';
import FreePreview from './components/FreePreview';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Hero />
      <Problem />
      <Services />
      <WhoIHelp />
      <SampleConcepts />
      <Process />
      <WhyWorkWithMe />
      <FreePreview />
      <FAQ />
      <Contact />
      <Footer />
      
      {/* Floating WhatsApp Widget */}
      <a 
        href="https://wa.me/918193973933" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="floating-whatsapp"
        aria-label="Chat on WhatsApp"
      >
        <i className="fab fa-whatsapp"></i>
      </a>
    </div>
  );
}

export default App;
