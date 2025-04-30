// App.jsx
import React from 'react';
import NavBar from './components/Navbar';
import Welcome from './components/Welcome';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <NavBar />
      <Welcome />
      <About />
      <Education />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;