import { HeaderNav } from './components/HeaderNav';
import { Hero } from './components/Hero';
import { ChangesSection } from './components/ChangesSection';
import { UpdatedLinksSection } from './components/UpdatedLinksSection';
import { ClosingSection } from './components/ClosingSection';

export function App() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--bg-main)' }}>
      {/* Top Header */}
      <HeaderNav />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <ChangesSection />
        <UpdatedLinksSection />
      </main>

      {/* Closing Section & Footer */}
      <ClosingSection />
    </div>
  );
}

export default App;
