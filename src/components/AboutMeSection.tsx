function AboutMeSection() {
  return (
    <div id='about-me'>
      <h2 className='text-[clamp(2.0rem,2.5vw,4.5rem)]'>About Me</h2>
      <div className='flex flex-col md:flex-row'>
        <div className='flex-1 w-full md:w-auto'>
          <p className='text-justify'>
            I am an ambitious <span className='font-bold'>Software Developer</span>, with a strong desire to continually learn and improve. Currently,
            I work at{' '}
            <a href='https://www.tekneretail.it/' target='_blank' className='font-bold'>
              Tekne
            </a>
            , where I develop both front-end and back-end for cash register applications using technologies such as{' '}
            <span className='font-bold'>Angular, Ionic, and Java</span>.<br />
            My dedication and passion for the IT world allowed me to obtain both a Bachelor's and Master's Degree in Computer Science, both with top
            marks, while working full-time. My goal is to face innovative technological challenges and contribute to complex projects, constantly
            pushing the limits of my skills.
            <br />
            Outside of work, I love playing video games and spending time on the beautiful beaches of my homeland, Sardinia.
          </p>
        </div>
        <div className='flex-1 w-full md:w-auto pl-0 md:pl-24 mt-20 md:mt-0'>
          <ol className='relative border-s border-gray-200 dark:border-gray-700'>
            <li className='ms-4'>
              <div className='absolute w-6 h-6 flex items-center justify-center bg-gray-200 rounded-full mt-1.5 -start-3 border border-white dark:border-gray-900 dark:bg-gray-700'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-4 h-4 text-gray-500 dark:text-gray-400'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth={2}>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5'
                  />
                </svg>
              </div>
              <time className='mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>2014</time>
              <h3 className='text-lg font-semibold'>High School Diploma in IT Technical Specialist</h3>
            </li>
            <li className='mb-10 ms-4'>
              <div className='absolute w-6 h-6 flex items-center justify-center bg-gray-200 rounded-full mt-1.5 -start-3 border border-white dark:border-gray-900 dark:bg-gray-700'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-4 h-4 text-gray-500 dark:text-gray-400'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth={2}>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z'
                  />
                </svg>
              </div>
              <time className='mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>2015</time>
              <h3 className='text-lg font-semibold'>IT Specialist - Help Desk Analyst</h3>
            </li>
            <li className='mb-5 ms-4'>
              <div className='absolute w-6 h-6 flex items-center justify-center bg-gray-200 rounded-full mt-1.5 -start-3 border border-white dark:border-gray-900 dark:bg-gray-700'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-4 h-4 text-gray-500 dark:text-gray-400'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth={2}>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z'
                  />
                </svg>
              </div>
              <time className='mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>2019</time>
              <h3 className='text-lg font-semibold'>Started University – Computer Science</h3>
            </li>
            <li className='ms-4'>
              <div className='absolute w-6 h-6 flex items-center justify-center bg-gray-200 rounded-full mt-1.5 -start-3 border border-white dark:border-gray-900 dark:bg-gray-700'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-4 h-4 text-gray-500 dark:text-gray-400'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth={2}>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z'
                  />
                </svg>
              </div>
              <time className='mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>2022</time>
              <h3 className='text-lg font-semibold'>Software Developer</h3>
            </li>
            <li className='mb-3 ms-4'>
              <div className='absolute w-6 h-6 flex items-center justify-center bg-gray-200 rounded-full mt-1.5 -start-3 border border-white dark:border-gray-900 dark:bg-gray-700'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-4 h-4 text-gray-500 dark:text-gray-400'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth={2}>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5'
                  />
                </svg>
              </div>
              <time className='mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>2022</time>
              <h3 className='text-lg font-semibold'>Bachelor's Degree in Computer Science</h3>
            </li>
            <li className='ms-4'>
              <div className='absolute w-6 h-6 flex items-center justify-center bg-gray-200 rounded-full mt-1.5 -start-3 border border-white dark:border-gray-900 dark:bg-gray-700'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-4 h-4 text-gray-500 dark:text-gray-400'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth={2}>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5'
                  />
                </svg>
              </div>
              <time className='mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>2024</time>
              <h3 className='text-lg font-semibold'>Master Degree in Computer Science</h3>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default AboutMeSection;
