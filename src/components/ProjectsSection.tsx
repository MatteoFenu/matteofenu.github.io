import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import './custom-swiper.css';

const videoUrls = ['projects/sco-bar-conad.mp4', 'projects/sco-mondadori.mp4'];

function ProjectsSection() {
  return (
    <section id='projects' className='py-10'>
      <div className='flex flex-col items-center mb-6'>
        <h2 className='text-[clamp(2.0rem,2.5vw,4.5rem)]'>Projects</h2>
      </div>

      <div className='lg:w-1/2 w-4/6 mx-auto bg-[#111133] bg-opacity-50 rounded-2xl shadow-md text-black sm:aspect-[4/3]'>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          className='custom-swiper sm:aspect-[4/3]'>
          {videoUrls.map((video, index) => (
            <SwiperSlide key={index}>
              <video src={video} className='w-full h-auto px-12 py-11 sm:aspect-[4/3]' autoPlay loop muted playsInline />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default ProjectsSection;
