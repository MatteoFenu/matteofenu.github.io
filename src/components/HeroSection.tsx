import { useState, useEffect } from 'react';

function HeroSection() {
  const labels = [
    {
      firstRow: "Hey, welcome! I'm",
      secondRow: 'Based in Sardinia 🏝️',
      flag: 'flags/gb.png',
    },
    {
      firstRow: 'Hey, benvenuto! Sono',
      secondRow: 'Vivo in Sardegna 🏝️',
      flag: '/flags/it.png',
    },
    {
      firstRow: '¡Hola, bienvenidos! Soy',
      secondRow: 'Basado en Cerdeña 🏝️',
      flag: '/flags/es.png',
    },
    {
      firstRow: 'Salut, bienvenue! Je suis',
      secondRow: 'Basé en Sardaigne 🏝️',
      flag: '/flags/fr.png',
    },
  ];

  const [currentLabelIndex, setCurrentLabelIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLabelIndex((prevIndex) => (prevIndex + 1) % labels.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id='home'>
      <div className='flex sm:flex-row flex-col justify-between items-center gap-8 sm:mt-14 md:mx-28 mt-20 mx-12'>
        <div className='flex flex-col justify-center gap-7'>
          <div className='flex flex-col items-start'>
            <img src={labels[currentLabelIndex].flag} alt='national flag' className='h-14 mb-2' />
            <h1 className='text-[clamp(1.5rem,2.5vw,4.5rem)]'>{labels[currentLabelIndex].firstRow}</h1>
          </div>
          <h1 className='text-[clamp(2.40rem,5vw,6.9375rem)]'>
            Matteo Fenu
            <br />
            Software Developer
          </h1>
          <h1 className='text-[clamp(1.5rem,2.5vw,4.5rem)]'>{labels[currentLabelIndex].secondRow}</h1>

          <div className='flex flex-row items-center justify-center space-x-10 lg:mt-20 mt-5'>
            <a href='https://github.com/MatteoFenu' target='_blank'>
              <div className='rounded-full bg-white'>
                <img src='/github.png' alt='github icon' className='w-[clamp(3rem,5vw,5rem)] h-[clamp(3rem,5vw,5rem)]' />
              </div>
            </a>

            <a href='https://www.linkedin.com/in/matteo-fenu/' target='_blank'>
              <div className='rounded-full bg-white p-3'>
                <img src='/linkedin.png' alt='linkedin icon' className='w-[clamp(1.5rem,3.34vw,3.5rem)] h-[clamp(1.5rem,3.34vw,3.5rem)]' />
              </div>
            </a>

            <div className='rounded-full bg-white p-3'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='#000000'
                className='w-[clamp(1.5rem,3.34vw,3.5rem)] h-[clamp(1.5rem,3.34vw,3.5rem)]'>
                <path d='M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z' />
                <path d='M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z' />
              </svg>
            </div>
          </div>
        </div>
        <div className='w-[clamp(12rem,20vw,50rem)] flex justify-end'>
          <img src='/matteo-fenu-portrait.svg' alt='portrait' />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
