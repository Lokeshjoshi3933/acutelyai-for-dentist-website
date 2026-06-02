import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Process.css';

function Process() {
  const steps = [
    {
      title: "Discovery Call",
      description: "A quick chat to understand your business, your goals, and exactly what kind of clients you want to attract."
    },
    {
      title: "Free Homepage Preview",
      description: "I will design a custom homepage concept for you. No commitment. If you like the direction, we move forward."
    },
    {
      title: "Build & Refine",
      description: "I build the full website, adding your content, services, and trust-building elements. We refine it together."
    },
    {
      title: "Launch & Support",
      description: "Your premium website goes live. I remain available for any future updates, hosting support, or changes you need."
    }
  ];

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Calculate opacities for text steps (faded out to 0.05 to clearly highlight the active one)
  const opacity1 = useTransform(scrollYProgress, [0, 0.2, 0.25, 1], [1, 1, 0.05, 0.05]);
  const opacity2 = useTransform(scrollYProgress, [0, 0.2, 0.25, 0.45, 0.5, 1], [0.05, 0.05, 1, 1, 0.05, 0.05]);
  const opacity3 = useTransform(scrollYProgress, [0, 0.45, 0.5, 0.7, 0.75, 1], [0.05, 0.05, 1, 1, 0.05, 0.05]);
  const opacity4 = useTransform(scrollYProgress, [0, 0.7, 0.75, 1], [0.05, 0.05, 1, 1]);

  const opacities = [opacity1, opacity2, opacity3, opacity4];

  // Visual side animations
  // Step 1
  const visual1Y = useTransform(scrollYProgress, [0, 0.25, 1], [0, -50, -50]);
  const visual1Opacity = useTransform(scrollYProgress, [0, 0.2, 0.25, 1], [1, 1, 0, 0]);
  const visual1Scale = useTransform(scrollYProgress, [0, 0.25, 1], [1, 0.9, 0.9]);
  const visual1Visibility = useTransform(scrollYProgress, [0, 0.24, 0.25, 1], ["visible", "visible", "hidden", "hidden"]);

  // Step 2
  const visual2Y = useTransform(scrollYProgress, [0, 0.2, 0.25, 0.45, 0.5, 1], [50, 50, 0, 0, -50, -50]);
  const visual2Opacity = useTransform(scrollYProgress, [0, 0.2, 0.25, 0.45, 0.5, 1], [0, 0, 1, 1, 0, 0]);
  const visual2Scale = useTransform(scrollYProgress, [0, 0.2, 0.25, 0.45, 0.5, 1], [0.9, 0.9, 1, 1, 0.9, 0.9]);
  const visual2Visibility = useTransform(scrollYProgress, [0, 0.2, 0.21, 0.49, 0.5, 1], ["hidden", "hidden", "visible", "visible", "hidden", "hidden"]);

  // Step 3
  const visual3Y = useTransform(scrollYProgress, [0, 0.45, 0.5, 0.7, 0.75, 1], [50, 50, 0, 0, -50, -50]);
  const visual3Opacity = useTransform(scrollYProgress, [0, 0.45, 0.5, 0.7, 0.75, 1], [0, 0, 1, 1, 0, 0]);
  const visual3Scale = useTransform(scrollYProgress, [0, 0.45, 0.5, 0.7, 0.75, 1], [0.9, 0.9, 1, 1, 0.9, 0.9]);
  const visual3Visibility = useTransform(scrollYProgress, [0, 0.45, 0.46, 0.74, 0.75, 1], ["hidden", "hidden", "visible", "visible", "hidden", "hidden"]);

  // Step 4
  const visual4Y = useTransform(scrollYProgress, [0, 0.7, 0.75, 1], [50, 50, 0, 0]);
  const visual4Opacity = useTransform(scrollYProgress, [0, 0.7, 0.75, 0.9, 1], [0, 0, 1, 1, 1]);
  const visual4Scale = useTransform(scrollYProgress, [0, 0.7, 0.75, 1], [0.9, 0.9, 1, 1]);
  const visual4Visibility = useTransform(scrollYProgress, [0, 0.7, 0.71, 1], ["hidden", "hidden", "visible", "visible"]);

  // Progress Bar
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="scroll-sec-wrapper" ref={containerRef} id="process">
      <div className="scroll-sticky-container">
        <div className="ct h-full w-full">
          <div className="scroll-grid">
            
            {/* Left Side: Text */}
            <div className="scroll-text-side">
              <div className="scroll-text-inner">
                <p className="ol">My Process</p>
                <h2 className="sh2">How We Work<br/>Together</h2>
                
                <div className="scroll-progress-wrapper">
                  <div className="scroll-progress-track">
                    <motion.div 
                      className="scroll-progress-fill"
                      style={{ scaleY, transformOrigin: "top" }}
                    />
                    <motion.div 
                      className="scroll-progress-glow"
                      style={{ top: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
                    />
                  </div>
                  
                  <div className="scroll-steps">
                    {steps.map((step, i) => (
                      <motion.div 
                        key={i} 
                        className="scroll-step"
                        style={{ opacity: opacities[i] }}
                      >
                        <h3>{step.title}</h3>
                        <p>{step.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Visuals */}
            <div className="scroll-visual-side">
              <div className="scroll-visual-wrapper perspective-container">
                
                {/* 1. Discovery Call: Floating glass chat bubble with glowing dots */}
                <motion.div 
                  className="scroll-visual-card absolute-center"
                  style={{ y: visual1Y, opacity: visual1Opacity, scale: visual1Scale, visibility: visual1Visibility, zIndex: 1 }}
                >
                  <div className="v3d-card v3d-front no-tilt flex-center">
                    <div className="chat-bubble glass-panel">
                       <i className="fas fa-microphone chat-icon"></i>
                       <div className="chat-waves">
                         <span></span><span></span><span></span>
                       </div>
                    </div>
                    {/* Glowing dots around it */}
                    <div className="glow-dot dot-1"></div>
                    <div className="glow-dot dot-2"></div>
                    <div className="glow-dot dot-3"></div>
                  </div>
                </motion.div>

                {/* 2. Free Homepage Preview: Tilted glass browser, minimal gold highlights */}
                <motion.div 
                  className="scroll-visual-card absolute-center"
                  style={{ y: visual2Y, opacity: visual2Opacity, scale: visual2Scale, visibility: visual2Visibility, zIndex: 2 }}
                >
                  <div className="v3d-card v3d-front tilt-right-subtle browser-glass">
                    <div className="browser-header">
                      <div className="browser-dots">
                        <span></span><span></span><span></span>
                      </div>
                    </div>
                    <div className="browser-body">
                      <div className="browser-hero glass-panel-inner">
                        <div className="hero-text-line"></div>
                        <div className="hero-text-line short"></div>
                        <div className="hero-btn"></div>
                      </div>
                      <div className="browser-grid">
                        <div className="glass-panel-inner"></div>
                        <div className="glass-panel-inner"></div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* 3. Build & Refine: Stacked layered 3D panels snapping */}
                <motion.div 
                  className="scroll-visual-card absolute-center"
                  style={{ y: visual3Y, opacity: visual3Opacity, scale: visual3Scale, visibility: visual3Visibility, zIndex: 3 }}
                >
                  <div className="v3d-card v3d-front tilt-isometric">
                    <div className="layer-stack">
                      <div className="layer layer-1 glass-panel">
                        <div className="layer-mock-nav"></div>
                      </div>
                      <div className="layer layer-2 glass-panel">
                        <div className="layer-mock-hero">
                          <i className="fas fa-image" style={{ opacity: 0.3 }}></i>
                        </div>
                      </div>
                      <div className="layer layer-3 glass-panel">
                        <div className="layer-mock-grid">
                           <div></div><div></div><div></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* 4. Launch & Support: Globe/Rocket with support ring */}
                <motion.div 
                  className="scroll-visual-card absolute-center"
                  style={{ y: visual4Y, opacity: visual4Opacity, scale: visual4Scale, visibility: visual4Visibility, zIndex: 4 }}
                >
                  <div className="v3d-card v3d-front no-tilt flex-center">
                    <div className="launch-globe-container">
                      <div className="support-ring ring-1"></div>
                      <div className="support-ring ring-2"></div>
                      <div className="support-ring ring-3"></div>
                      <div className="center-globe glass-panel">
                        <i className="fas fa-globe launch-icon"></i>
                      </div>
                      <div className="launch-btn glass-panel">
                        <span className="live-dot"></span> LIVE
                      </div>
                    </div>
                  </div>
                </motion.div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Process;
