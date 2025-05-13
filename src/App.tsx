import React from 'react';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { Documentary } from './components/Documentary';
import { TFAForm } from './components/TFAForm';
import { About } from './components/About';
import { Stats } from './components/Stats';
import { Coalition } from './components/Coalition';
import { Resources } from './components/Resources';
import { LetterUpload } from './components/LetterUpload';
import { News } from './components/News';
import { TableauDashboard } from './components/TableauDashboard';
import { Contact } from './components/Contact';
import { ScrollToTop } from './components/ScrollToTop';
import { WelcomePopup } from './components/WelcomePopup';
import { Breadcrumbs } from './components/Breadcrumbs';
import { SEO } from './components/SEO';

/**
 * Root application component that defines the main layout and structure.
 * Organizes the page into three main sections:
 * 1. Header - Contains navigation
 * 2. Main content - All primary sections
 * 3. Footer - Contact information and copyright
 */
function App() {
  const breadcrumbItems = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#about' },
    { label: 'Take Action', href: '#take-action' }
  ];

  return (
    <div className="min-h-screen" itemScope itemType="https://schema.org/WebPage">
      <SEO />
      <WelcomePopup />
      <ScrollToTop />
      <header className="h-16 sm:h-20" role="banner">
        <Nav />
        <Breadcrumbs items={breadcrumbItems} />
      </header>
      <main role="main">
        {/* Hero section with main call-to-action */}
        <Hero />
        {/* Documentary section */}
        <Documentary />
        {/* Information about the initiative */}
        <About />
        {/* Key statistics and metrics */}
        <Stats />
        {/* News coverage section */}
        <News />
        {/* Interactive data visualization */}
        <TableauDashboard url="https://public.tableau.com/views/SCAEdEqualization/DistrictComparison?:showVizHome=no&:embed=true" />
        {/* Partner organizations */}
        <Coalition />
        {/* Downloadable materials and links */}
        <Resources />
        {/* Support form integration */}
        <TFAForm />
        {/* Letter submission section */}
        <LetterUpload />
      </main>
      <footer role="contentinfo">
        <Contact />
        <div className="bg-gray-50 py-6">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <p className="text-center text-sm text-gray-600">
              Copyright © {new Date().getFullYear()} Silicon Valley Education Foundation. All rights reserved.
            </p>
            <p className="text-center text-xs text-gray-500 mt-2">
              <a href="/sitemap.xml" className="hover:underline">Sitemap</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
