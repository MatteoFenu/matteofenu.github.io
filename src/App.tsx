import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutMeSection from './components/AboutMeSection';
import ContactForm from './components/ContactForm';

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
      <div className='sm:my-14 my-20 flex items-center justify-center'>
        <ContactForm />
      </div>
    </>
  );
}

export default App;
