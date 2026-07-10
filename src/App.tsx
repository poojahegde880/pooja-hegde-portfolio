import { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import LoadingScreen from './components/layout/LoadingScreen';
import Navbar from './components/layout/Navbar';
import TraceRail from './components/layout/TraceRail';
import ParticleBackground from './components/layout/ParticleBackground';
import BackToTop from './components/layout/BackToTop';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Education from './components/sections/Education';
import Certifications from './components/sections/Certifications';
import Contact from './components/sections/Contact';

function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <ThemeProvider>
      <LoadingScreen onFinish={() => setLoaded(true)} />

      <div
        className={`relative min-h-screen bg-mist text-slate-deep transition-opacity duration-700 dark:bg-void dark:text-ink ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="fixed inset-0 -z-10">
          <ParticleBackground />
        </div>

        <a
          href="#home"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-signal focus:px-4 focus:py-2 focus:text-void"
        >
          Skip to content
        </a>

        <Navbar />
        <TraceRail />

        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Education />
          <Certifications />
          <Contact />
        </main>

        <Footer />
        <BackToTop />
      </div>
    </ThemeProvider>
  );
}

export default App;