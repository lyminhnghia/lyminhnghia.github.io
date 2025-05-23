'use client';

import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Skills />
      <Experience />
      <Contact />
    </div>
  );
}
