import { useState } from 'react';
import { HeaderNav } from './components/HeaderNav';
import { Hero } from './components/Hero';
import { ChangesSection } from './components/ChangesSection';
import { UpdatedLinksSection } from './components/UpdatedLinksSection';
import { ClosingSection } from './components/ClosingSection';
import { CVViewerModal } from './components/CVViewerModal';

export function App() {
  const [isCvModalOpen, setIsCvModalOpen] = useState<boolean>(false);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--bg-main)' }}>
      {/* Top Header */}
      <HeaderNav />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <ChangesSection />
        <UpdatedLinksSection onOpenCvModal={() => setIsCvModalOpen(true)} />
      </main>

      {/* Closing Section & Footer */}
      <ClosingSection />

      {/* CV Modal Overlay */}
      <CVViewerModal isOpen={isCvModalOpen} onClose={() => setIsCvModalOpen(false)} />
    </div>
  );
}

export default App;
