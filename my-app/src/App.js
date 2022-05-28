
import { useRef } from 'react';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import ContactFrom from './components/ContactForm';
import Head from './components/Head';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  const projectSection = useRef(null)
  const contactSection = useRef(null)
  const SkillsSection =useRef(null);
  const AboutSection = useRef(null);
  const gotoProjectSection = ()=>{
    window.scrollTo({top:projectSection.current.offsetTop,behavior:"smooth"})
  }

  const gotoContactSection = ()=>{
    window.scrollTo({top:contactSection.current.offsetTop,behavior:"smooth"})
  }
  const gotoSkillsSection = ()=>{
    window.scrollTo({top:SkillsSection.current.offsetTop,behavior:"smooth"})
  }
  const gotoAboutSection = ()=>{
    window.scrollTo({top:AboutSection.current.offsetTop,behavior:"smooth"})
  }
  return (
    <div >
      <Navbar gotoProjectSection={gotoProjectSection} gotoContactSection={gotoContactSection} gotoSkillsSection={gotoSkillsSection}
      gotoAboutSection={gotoAboutSection}/>
      <Head about={AboutSection}/>
      <About />
      
      <Skills skills={SkillsSection}/>
      <Projects project={projectSection}/>
      <Contact contact={contactSection}/>
      <ContactFrom/>
     
    </div>
  );
}

export default App;
