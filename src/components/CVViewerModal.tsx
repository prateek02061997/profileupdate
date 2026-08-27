import React from 'react';
import { X, Download, ExternalLink, FileText } from 'lucide-react';
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
        backgroundColor: 'rgba(5, 6, 8, 0.85)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '900px',
          height: '90vh',
          backgroundColor: '#12141c',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          borderRadius: '12px',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div
          style={{
            padding: '16px 24px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: '#0f1117',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <FileText size={18} color="#38bdf8" />
            <div>
              <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#f3f4f6' }}>
                {candidate.name} — Curriculum Vitae
              </h3>
              <p style={{ fontSize: '0.78rem', color: '#9ca3af' }}>Updated Generic CV</p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <a
              href={linksSection.cv.pdfPath}
              download="Prateek_Parihar_CV_Generic_1.pdf"
              className="btn btn-secondary"
              style={{ padding: '6px 12px', fontSize: '0.8rem' }}
            >

              <Download size={14} />
              <span>Download PDF</span>
            </a>

            <a
              href={linksSection.cv.pdfPath}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              style={{ padding: '6px 12px', fontSize: '0.8rem' }}
            >
              <ExternalLink size={14} />
              <span>Open in New Tab</span>
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

        {/* Modal Body / PDF Object Viewer */}
        <div style={{ flex: 1, backgroundColor: '#1a1d28', position: 'relative' }}>
          <object
            data={linksSection.cv.pdfPath}
            type="application/pdf"
            width="100%"
            height="100%"
            style={{ border: 'none' }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                padding: '40px',
                textAlign: 'center',
                color: '#9ca3af',
              }}
            >
              <FileText size={48} color="#38bdf8" style={{ marginBottom: '16px', opacity: 0.8 }} />
              <p style={{ fontSize: '1rem', color: '#f3f4f6', marginBottom: '8px' }}>
                PDF Preview standard viewer
              </p>
              <p style={{ fontSize: '0.88rem', maxWidth: '400px', marginBottom: '20px' }}>
                Your browser doesn't directly support embedded PDF viewing inside this frame.
              </p>
              <a
                href={linksSection.cv.pdfPath}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <ExternalLink size={16} />
                <span>Open PDF Document</span>
              </a>
            </div>
          </object>
        </div>
      </div>
    </div>
  );
};
