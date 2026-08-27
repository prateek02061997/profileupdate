import React from 'react';
import { siteData } from '../config/siteData';

export const HeaderNav: React.FC = () => {
  const { candidate } = siteData;

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backgroundColor: 'rgba(11, 12, 16, 0.9)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '56px',
        }}
      >
        {/* Brand / Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div
            style={{
              width: '26px',
              height: '26px',
              borderRadius: '4px',
              backgroundColor: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.72rem',
              fontWeight: 700,
              color: '#38bdf8',
              fontFamily: 'var(--font-mono)',
            }}
          >
            PP
          </div>
          <span style={{ fontSize: '0.88rem', fontWeight: 600, color: '#f3f4f6' }}>
            {candidate.name}
          </span>
        </div>


        {/* Minimal Navigation */}
        <nav style={{ display: 'flex', gap: '16px', fontSize: '0.8rem', fontWeight: 500 }} className="desktop-nav">
          <button
            onClick={() => scrollTo('section-intro')}
            style={{
              background: 'none',
              border: 'none',
              color: '#9ca3af',
              cursor: 'pointer',
              fontFamily: 'inherit',
              transition: 'color 0.15s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#f3f4f6')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#9ca3af')}
          >
            01 Feedback
          </button>
          <span style={{ color: '#374151' }}>·</span>
          <button
            onClick={() => scrollTo('section-changes')}
            style={{
              background: 'none',
              border: 'none',
              color: '#9ca3af',
              cursor: 'pointer',
              fontFamily: 'inherit',
              transition: 'color 0.15s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#f3f4f6')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#9ca3af')}
          >
            02 Changes
          </button>
          <span style={{ color: '#374151' }}>·</span>
          <button
            onClick={() => scrollTo('section-links')}
            style={{
              background: 'none',
              border: 'none',
              color: '#9ca3af',
              cursor: 'pointer',
              fontFamily: 'inherit',
              transition: 'color 0.15s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#f3f4f6')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#9ca3af')}
          >
            03 Links
          </button>
        </nav>
      </div>
    </header>
  );
};
