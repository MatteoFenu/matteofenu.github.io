import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutMeSection from './components/AboutMeSection';
import ContactForm from './components/ContactForm';
import ProjectsSection from './components/ProjectsSection';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className='sm:mt-14 md:mx-28 mt-20 mx-12'>
        <HeroSection></HeroSection>
      </div>
      <div className='sm:mt-14 md:mx-28 mt-20 mx-12'>
        <AboutMeSection></AboutMeSection>
      </div>
      <div className='sm:my-14 my-20'>
        <ProjectsSection></ProjectsSection>
      </div>
      <div className='sm:my-14 my-20'>
        <ContactForm />
      </div>
    </>
  );
}

export default App;
