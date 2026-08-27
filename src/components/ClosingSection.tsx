import React from 'react';
import { siteData } from '../config/siteData';

export const ClosingSection: React.FC = () => {
  const { closing, candidate } = siteData;

  return (
    <footer
      style={{
        paddingTop: '40px',
        paddingBottom: '50px',
        backgroundColor: '#090a0d',
      }}
    >
      <div className="container">
        <div style={{ maxWidth: '640px' }}>
          <h2
            style={{
              fontSize: '1.4rem',
              fontWeight: 700,
              color: '#f3f4f6',
              marginBottom: '12px',
              letterSpacing: '-0.015em',
            }}
          >
            {closing.heading}
          </h2>

          <p
            style={{
              fontSize: '0.98rem',
              color: '#d1d5db',
              lineHeight: 1.6,
              marginBottom: '16px',
            }}
          >
            {closing.paragraph}
          </p>

          <p
            style={{
              fontSize: '0.92rem',
              color: '#9ca3af',
              fontStyle: 'italic',
              marginBottom: '32px',
            }}
          >
            {closing.signoff}
          </p>
        </div>

        <div
          style={{
            paddingTop: '20px',
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
            fontSize: '0.78rem',
            color: '#6b7280',
            fontFamily: 'var(--font-mono)',
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '10px',
          }}
        >
          <span>{candidate.name}</span>
          <span>© {new Date().getFullYear()}</span>

        </div>
      </div>
    </footer>
  );
};
