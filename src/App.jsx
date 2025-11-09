import React, { Suspense } from 'react';
import Navbar from './Sections/Navbar';
import Hero from './Sections/Hero'; // Hero loads immediately

// LAZY LOAD only the sections "below the fold"
const About = React.lazy(() => import('./Sections/About'));
const Projects = React.lazy(() => import('./Sections/Projects'));
const Experiences = React.lazy(() => import('./Sections/Experiences'));
const Contact = React.lazy(() => import('./Sections/Contact'));
const Footer = React.lazy(() => import('./Sections/Footer'));

const App = () => {
  return (
    <div className='container mx-auto max-w-7xl'>
      {/* Navbar and Hero load immediately */}
      <Navbar />
      <Hero /> 

      <Suspense fallback={null}>
        <About />
        <Projects />
        <Experiences />
        <Contact />
        <Footer />
      </Suspense>
      
    </div>
  );
};

export default App;