import { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  const menuItems = [
    {
      href: '#home',
      label: 'Home',
      iconPath:
        'm2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25',
    },
    {
      href: '#about-me',
      label: 'About Me',
      iconPath:
        'M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z',
    },
    {
      href: '#resume',
      label: 'Resume',
      iconPath:
        'M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z',
    },
  ];

  return (
    <nav className='fixed top-0 left-0 right-0 flex justify-between mt-10 sm:mx-28 mx-12'>
      <img src='src/assets/MF.svg' className='logo' alt='logo' />

      <div className={`absolute top-full w-full sm:w-auto sm:relative p-3`}>
        <div className='hidden sm:block absolute inset-0 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg'></div>
        <ul
          className={`relative sm:static flex items-center flex-col space-y-4 sm:space-y-0 sm:space-x-8 sm:flex-row bg-white sm:bg-transparent text-black sm:text-inherit text-xl 
                      py-3 sm:py-0 text-center sm:px-0 rounded-xl sm:rounded-none transition-all duration-300 
                      ${isMobileMenuOpen && 'hidden sm:flex'} list-style`}>
          {menuItems.map(({ href, label, iconPath }) => (
            <li key={href} className='relative flex items-center space-x-2'>
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='size-6'>
                <path strokeLinecap='round' strokeLinejoin='round' d={iconPath} />
              </svg>
              <a href={href}>{label}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className='relative sm:hidden' onClick={toggleMobileMenu}>
        <div className='absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg'></div>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='size-16 relative py-3 text-white transition-all duration-200 bg-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900'>
          <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5' />
        </svg>
      </div>
    </nav>
  );
}

export default Navbar;
