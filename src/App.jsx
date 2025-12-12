import React, { useState } from 'react';
import { PopupModal, InlineWidget } from 'react-calendly';

function App() {
  const [email, setEmail] = useState('');
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle'); // idle, submitting, success, error
  const [privacyAccepted, setPrivacyAccepted] = useState(false);

  const handleLeadMagnetSubmit = async (e) => {
    e.preventDefault();
    if (!privacyAccepted) {
      alert("Please accept the privacy policy.");
      return;
    }
    setSubmitStatus('submitting');

    // Placeholder Webhook URL - User to replace this
    const WEBHOOK_URL = 'https://hooks.zapier.com/hooks/catch/123456/abcdef/';

    try {
      // Simulating API call
      // const response = await fetch(WEBHOOK_URL, { method: 'POST', body: JSON.stringify({ email }) });
      
      // Mock success for demo
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitStatus('success');
      setEmail('');
    } catch (error) {
      console.error("Webhook Error:", error);
      setSubmitStatus('error');
    }
  };

  return (
    <div className="app">
      {/* --- NAVIGATION --- */}
      <nav className="navbar">
        <div className="logo">AI.ENGINEER</div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <button onClick={() => setIsCalendlyOpen(true)} className="btn-nav">Book Call</button>
        </div>
      </nav>

      {/* --- HERO SECTION --- 
          Archetype: The Hero
          Tone: Empowering, Bold, Direct
      */}
      <header className="hero-section">
        <div className="content">
          <h1>Stop Letting AI Intimidate You.<br /><span className="highlight">Master It.</span></h1>
          <p className="hero-subtitle">
            I engineer AI products that turn operational chaos into competitive dominance. 
            Don't just survive the tech revolution—lead it.
          </p>
          <div className="cta-group">
            <button onClick={() => setIsCalendlyOpen(true)} className="btn btn-primary" style={{ marginRight: '1rem' }}>Start Your Transformation</button>
            <a href="#services" className="btn btn-outline">View The Arsenal</a>
          </div>
        </div>
      </header>

      {/* --- SOCIAL PROOF (Authority & Trust) --- 
          Principle: Social Proof
      */}
      <section className="social-proof" style={{ borderTop: '1px solid rgba(255,255,255,0.1)', borderBottom: '1px solid rgba(255,255,255,0.1)', padding: '2rem 0' }}>
        <p className="text-center" style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.875rem', color: 'var(--muted)' }}>
          Trusted by visionaries at
        </p>
        <div className="logos" style={{ display: 'flex', justifyContent: 'center', gap: '3rem', marginTop: '1rem', opacity: 0.7 }}>
          {/* Placeholders for logos */}
          <span>TECH_CORP</span>
          <span>FUTURE_LABS</span>
          <span>INNOVATE_INC</span>
          <span>DATA_DYNAMICS</span>
        </div>
      </section>

      {/* --- ABOUT / VALUE PROP --- 
          Archetype: The Hero (The Guide)
          Principle: Authority
      */}
      <section id="about">
        <div className="grid" style={{ alignItems: 'center' }}>
          <div>
            <h2>The Guide You Need</h2>
            <p style={{ marginBottom: '1rem' }}>
              The market doesn't care about your effort; it cares about your results. 
              As a <strong>Certified AI Product Engineer</strong>, I don't just write code—I forge weapons for your business.
            </p>
            <p>
              I bridge the gap between complex algorithms and bottom-line revenue. 
              While others are still figuring out prompts, we will be building pipelines that automate your success.
            </p>
          </div>
          <div className="card" style={{ textAlign: 'center' }}>
            <h3 style={{ fontSize: '4rem', color: 'var(--primary)', margin: 0 }}>300%</h3>
            <p>Average Efficiency Gain</p>
            <h3 style={{ fontSize: '4rem', color: 'var(--primary)', margin: '1rem 0 0' }}>$2M+</h3>
            <p>Revenue Unlocked</p>
          </div>
        </div>
      </section>

      {/* --- SERVICES (The Arsenal) --- 
          Archetype: The Hero (Mastery)
      */}
      <section id="services">
        <h2 className="text-center mb-2">Your Arsenal</h2>
        <div className="grid">
          <div className="card">
            <h3>⚔️ AI Product Strategy</h3>
            <p>Stop guessing. We define a clear roadmap to integrate LLMs into your core product, ensuring you solve real user problems, not just hype.</p>
          </div>
          <div className="card">
            <h3>🛡️ Custom RAG Pipelines</h3>
            <p>Your data is your fortress. I build Retrieval-Augmented Generation systems that let your AI speak with authority on <em>your</em> proprietary knowledge.</p>
          </div>
          <div className="card">
            <h3>⚡ Automation Engineering</h3>
            <p>Manual work is the enemy. We deploy autonomous agents to handle workflows, freeing your team to focus on high-level strategy.</p>
          </div>
        </div>
      </section>

      {/* --- LEAD MAGNET (Reciprocity) --- 
          Principle: Reciprocity (Give before you take)
      */}
      <section className="lead-magnet" style={{ background: 'linear-gradient(45deg, #1D3557, #0F172A)', borderRadius: '1rem', padding: '4rem 2rem' }}>
        <div className="text-center">
          <h2>Arm Yourself for Free</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>
            Not ready to deploy yet? Download my <strong>"AI Battlefield Guide"</strong>—a 5-step checklist to audit your company's AI readiness. It's yours, on the house.
          </p>
          <form onSubmit={handleLeadMagnetSubmit} className="lead-form">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  aria-label="Email Address"
                  disabled={submitStatus === 'submitting'}
                />
                <button type="submit" className="btn btn-primary" disabled={submitStatus === 'submitting'}>
                  {submitStatus === 'submitting' ? 'Sending...' : 'Send Me The Intel'}
                </button>
              </div>
              
              <label style={{ fontSize: '0.8rem', color: 'var(--muted)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <input 
                  type="checkbox" 
                  checked={privacyAccepted} 
                  onChange={(e) => setPrivacyAccepted(e.target.checked)}
                />
                I agree to the privacy policy and processing of my data.
              </label>

              {submitStatus === 'success' && (
                <p style={{ color: '#4ade80', fontWeight: 'bold' }}>Mission Accepted. Intel is on the way.</p>
              )}
              {submitStatus === 'error' && (
                <p style={{ color: '#ef4444', fontWeight: 'bold' }}>Transmission Failed. Please try again.</p>
              )}
            </div>
          </form>
          <p style={{ fontSize: '0.75rem', marginTop: '1rem', opacity: 0.6 }}>
            *Automated via Zapier Webhook. No spam, only strategy.
          </p>
        </div>
      </section>

      {/* --- CONTACT / BOOKING (Scarcity) --- 
          Principle: Scarcity (Limited Availability)
      */}
      <section id="contact" className="text-center">
        <h2>Accept The Challenge</h2>
        <p style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>
          I only partner with <strong>3 visionary companies per quarter</strong> to ensure absolute focus and mission success. 
          Q1 slots are filling fast. Secure your position now.
        </p>
        
        {/* Calendly Integration */}
        <div className="calendly-container" style={{ marginTop: '2rem' }}>
          <InlineWidget 
            url="https://calendly.com/your-calendly-url" 
            styles={{ height: '700px' }}
          />
        </div>
      </section>

      <PopupModal
        url="https://calendly.com/your-calendly-url"
        rootElement={document.getElementById("root")}
        open={isCalendlyOpen}
        onModalClose={() => setIsCalendlyOpen(false)}
      />

      <footer style={{ textAlign: 'center', padding: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)', marginTop: '4rem' }}>
        <p>&copy; 2025 AI Product Engineer. All Rights Reserved.</p>
        <p style={{ fontSize: '0.8rem', color: 'var(--muted)', marginTop: '0.5rem' }}>
          Analytics by Plausible (Privacy Focused)
        </p>
      </footer>
    </div>
  )
}

export default App
