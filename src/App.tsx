import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';

function App() {
  return (
    <div className='absolute inset-0 bg-cover bg-no-repeat z-[-1]' style={{ backgroundImage: "url('./background.svg')" }}>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
    </div>
  );
}

export default App;
