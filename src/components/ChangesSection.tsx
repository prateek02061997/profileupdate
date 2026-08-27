import React from 'react';
import { siteData } from '../config/siteData';

export const ChangesSection: React.FC = () => {
  const { changes } = siteData;

  return (
    <section
      id="section-changes"
      style={{
        paddingTop: '40px',
        paddingBottom: '40px',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
      }}
    >
      <div className="container">
        <span className="section-tag">02 — CHANGES</span>
        <h2 className="section-heading">{changes.heading}</h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {changes.items.map((item) => (
            <div
              key={item.area}
              style={{
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-card)',
                borderRadius: '6px',
                padding: '14px 18px',
                display: 'flex',
                alignItems: 'baseline',
                gap: '14px',
                flexWrap: 'wrap',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  color: '#38bdf8',
                  minWidth: '95px',
                }}
              >
                {item.area}
              </span>
              <span style={{ fontSize: '0.92rem', color: '#e5e7eb', flex: 1, lineHeight: 1.5 }}>
                {item.description}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
