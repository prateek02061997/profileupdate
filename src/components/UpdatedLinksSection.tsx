import React from 'react';
import { Linkedin, FileText, ArrowUpRight } from 'lucide-react';
import { siteData } from '../config/siteData';


interface UpdatedLinksSectionProps {
  onOpenCvModal: () => void;
}

export const UpdatedLinksSection: React.FC<UpdatedLinksSectionProps> = ({ onOpenCvModal }) => {
  const { linksSection } = siteData;

  return (
    <section
      id="section-links"
      style={{
        paddingTop: '40px',
        paddingBottom: '40px',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
      }}
    >
      <div className="container">
        <span className="section-tag">03 — UPDATED LINKS</span>
        <h2 className="section-heading">{linksSection.heading}</h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '16px',
          }}
        >
          {/* LinkedIn Card */}
          <div className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '14px' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#38bdf8', marginBottom: '4px' }}>
                <Linkedin size={18} />
                <span style={{ fontSize: '0.82rem', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>LINKEDIN</span>
              </div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 600, color: '#f3f4f6' }}>
                {linksSection.linkedIn.title}
              </h3>
            </div>

            <a
              href={linksSection.linkedIn.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
              style={{ width: '100%' }}
            >
              <span>{linksSection.linkedIn.buttonText}</span>
              <ArrowUpRight size={14} />
            </a>
          </div>

          {/* CV Card */}
          <div className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '14px' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#38bdf8', marginBottom: '4px' }}>
                <FileText size={18} />
                <span style={{ fontSize: '0.82rem', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>CURRICULUM VITAE</span>
              </div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 600, color: '#f3f4f6' }}>
                {linksSection.cv.title}
              </h3>
            </div>

            <button onClick={onOpenCvModal} className="btn btn-primary" style={{ width: '100%' }}>
              <FileText size={14} />
              <span>View CV</span>
            </button>

          </div>
        </div>
      </div>
    </section>
  );
};

