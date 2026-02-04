import React from 'react';
import Nav from './components/Nav';
import Hero from './sections/Hero';
import Intro from './sections/Intro';
import Workflow from './sections/Workflow';
import Timeline from './sections/Timeline';
import Conclusion from './sections/Conclusion';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-bg text-text-primary selection:bg-accent-pink/30 font-sans">
      <Nav />
      <main>
        <Hero />
        <Intro />
        <Timeline />
        <Workflow />
        <Conclusion />
      </main>
      <Footer />
    </div>
  );
}

export default App;
