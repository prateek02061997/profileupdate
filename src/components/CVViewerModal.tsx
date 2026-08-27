import React from 'react';
import { X, ExternalLink, FileText } from 'lucide-react';
import { siteData } from '../config/siteData';

interface CVViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVViewerModal: React.FC<CVViewerModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const { candidate, linksSection } = siteData;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        backgroundColor: 'rgba(5, 6, 8, 0.88)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '920px',
          height: '88vh',
          backgroundColor: '#12141c',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          borderRadius: '12px',
          boxShadow: '0 24px 60px rgba(0, 0, 0, 0.7)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div
          style={{
            padding: '14px 20px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: '#0f1117',
            flexWrap: 'wrap',
            gap: '10px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <FileText size={18} color="#38bdf8" />
            <div>
              <h3 style={{ fontSize: '0.95rem', fontWeight: 600, color: '#f3f4f6' }}>
                {candidate.name} — Curriculum Vitae
              </h3>
              <p style={{ fontSize: '0.75rem', color: '#9ca3af' }}>Generic CV Document</p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <a
              href={linksSection.cv.pdfPath}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ padding: '6px 12px', fontSize: '0.8rem' }}
            >
              <ExternalLink size={14} />
              <span>Open PDF</span>
            </a>

            <button

              onClick={onClose}
              style={{
                background: 'none',
                border: 'none',
                color: '#9ca3af',
                cursor: 'pointer',
                padding: '4px',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'color 0.15s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#9ca3af')}
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Modal Body / Seamless iframe PDF Viewer */}
        <div style={{ flex: 1, backgroundColor: '#1a1d28', position: 'relative' }}>
          <iframe
            src={linksSection.cv.pdfPath}
            title={`${candidate.name} CV`}
            width="100%"
            height="100%"
            style={{ border: 'none', display: 'block' }}
          />
        </div>
      </div>
    </div>
  );
};
