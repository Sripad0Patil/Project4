import React from 'react';

export default function About() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '32px 16px', background: '#fff', borderRadius: 16, boxShadow: '0 2px 12px #0001' }}>
      <h2 style={{ fontSize: 32, fontWeight: 800, color: '#2563eb', marginBottom: 24 }}>🏢 About Us</h2>
      <p style={{ fontSize: 18, marginBottom: 20 }}>
        We are a next-generation technology company on a mission to revolutionize digital onboarding and KYC verification for the financial sector. Our platform enables banks, NBFCs, and fintech institutions to onboard customers securely, efficiently, and with full regulatory compliance—entirely online.
      </p>
      <p style={{ fontSize: 18, marginBottom: 20 }}>
        Built with cutting-edge AI, facial recognition, and OCR technologies, our solution eliminates bottlenecks in traditional onboarding by automating the entire journey—from document verification to face matching and real-time approval. We are not just solving a problem—we are building a smarter, faster, and more secure future for digital identity.
      </p>

      <h3 style={{ fontSize: 26, fontWeight: 700, color: '#1e40af', margin: '32px 0 16px' }}>👥 Who We Are</h3>
      <p style={{ fontSize: 17, marginBottom: 16 }}>
        We are a passionate team of engineers, designers, and technologists who believe that financial access should be fast, safe, and user-friendly. Drawing from our experience in fintech, cybersecurity, and AI/ML, we've created a platform that combines technical excellence with real-world impact.
      </p>
      <ul style={{ fontSize: 17, marginBottom: 16, paddingLeft: 24 }}>
        <li>🔐 <b>Security first:</b> Data protection is non-negotiable</li>
        <li>🚀 <b>Speed with precision:</b> Fast results, with no compromises</li>
        <li>🧠 <b>Intelligence-driven:</b> Machine learning at every critical step</li>
        <li>🤝 <b>User-first design:</b> Smooth experiences for end users and institutions alike</li>
      </ul>
      <p style={{ fontSize: 17, marginBottom: 16 }}>
        We thrive on innovation and are committed to building digital trust at scale.
      </p>

      <h3 style={{ fontSize: 26, fontWeight: 700, color: '#1e40af', margin: '32px 0 16px' }}>🌟 Our Vision</h3>
      <p style={{ fontSize: 17, marginBottom: 16 }}>
        Our vision is to democratize access to financial services by creating a frictionless, AI-powered identity verification ecosystem. We envision a world where:
      </p>
      <ul style={{ fontSize: 17, marginBottom: 16, paddingLeft: 24 }}>
        <li>✔ Anyone, anywhere can open a bank account in minutes</li>
        <li>✔ Fraud is mitigated before it happens</li>
        <li>✔ Paperwork becomes a thing of the past</li>
        <li>✔ Financial onboarding is as intuitive as sending a text</li>
      </ul>
      <p style={{ fontSize: 17, marginBottom: 16 }}>
        We aim to be the engine behind the next billion secure digital interactions.
      </p>
      <p style={{ fontSize: 17, marginBottom: 16 }}>
        Our long-term goal is to empower financial institutions across urban and rural landscapes with tools that reduce manual work, enhance compliance, and make customer onboarding truly borderless.
      </p>

      <h3 style={{ fontSize: 26, fontWeight: 700, color: '#1e40af', margin: '32px 0 16px' }}>💼 What We Do</h3>
      <ul style={{ fontSize: 17, marginBottom: 16, paddingLeft: 24 }}>
        <li>Real-time face matching using advanced neural networks</li>
        <li>Liveness detection to prevent spoofing and impersonation</li>
        <li>Scalable backend built with Node.js, Express, and TensorFlow.js</li>
        <li>User-friendly React-based front-end for seamless interaction</li>
      </ul>
      <p style={{ fontSize: 17, marginBottom: 0 }}>
        Our platform is more than a tool—it's a trust layer between institutions and customers.
      </p>
    </div>
  );
} 