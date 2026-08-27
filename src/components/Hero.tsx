import React from 'react';
import { siteData } from '../config/siteData';

export const Hero: React.FC = () => {
  const { intro } = siteData;

  return (
    <section
      id="section-intro"
      style={{
        paddingTop: '48px',
        paddingBottom: '40px',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
      }}
    >
      <div className="container">
        <span className="section-tag">01 — FEEDBACK</span>
        <h1
          style={{
            fontSize: 'clamp(1.9rem, 4vw, 2.7rem)',
            fontWeight: 700,
            letterSpacing: '-0.025em',
            color: '#f3f4f6',
            lineHeight: 1.2,
            marginBottom: '16px',
          }}
        >
          {intro.heading}
        </h1>

        <p
          style={{
            fontSize: '1.08rem',
            lineHeight: 1.6,
            color: '#d1d5db',
            marginBottom: '10px',
          }}
        >
          {intro.paragraph1}
        </p>

        <p
          style={{
            fontSize: '0.95rem',
            lineHeight: 1.55,
            color: '#9ca3af',
          }}
        >
          {intro.paragraph2}
        </p>
      </div>
    </section>
  );
};
