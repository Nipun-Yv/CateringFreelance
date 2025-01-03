import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from 'react-router';

const useNavigateAndScroll = () => {
  const navigate = useNavigate();
  
  const navigateAndScroll = (path) => {
    navigate(path);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return navigateAndScroll;
};
const CardComponent = () => {
  const swiperRef = useRef(null);
  const navigateAndScroll = useNavigateAndScroll();
  const slidesData = [
    {
      image: "https://res.cloudinary.com/daa3y840x/image/upload/v1734955084/bdda474e-5221-432b-9f8a-076db1e9a26b_ppxtgy.jpg",
      heading: 'Luxurious Presentation',
      subheading:
        'A perfect harmony of visual splendour and gastronomic delight,ensuring every dish is a feast for the senses.'
    },
    {
      image: "https://res.cloudinary.com/daa3y840x/image/upload/v1735051511/s4_wklccw.jpg",
      heading: 'Gourmet Creations',
      subheading:
      "Artfully creafted menus showcasing the finest ingredients and inspired by the world's most exquisite cuisines."
    }
    ,
    {
      image: "https://res.cloudinary.com/daa3y840x/image/upload/v1734955239/85213c7a-1620-4d35-bbe5-8f41e43b681e_demf7u.jpg",
      heading: 'Impeccable Service ',
      subheading:
        'Our seasoned team of professionals is committed to delivering seamless hospitality, leaving you free to savor each moment.'
    },
    
    {
      image: "https://res.cloudinary.com/daa3y840x/image/upload/c_fill,w_1280,h_960/v1734955169/27f24880-cc5a-46ab-9b40-5d8fe12146b2_oho24q.jpg",
      heading: 'Taliored Culinary Experiences',
      subheading:
        'Bespoke menus designed to complement your tastes, themes, and dietary preferences.'
    }
  ];

  return (
    <div className="flex flex-col items-center w-full bg-white px-4 sm:px-8 md:px-12 lg:px-16 py-10">
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        spaceBetween={20}
        loop={true}
        modules={[Navigation, Pagination]}
        className="w-full h-[500px]"
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="h-full flex flex-col items-center bg-white shadow-md rounded-lg overflow-hidden group">
              <div className="w-full h-[40%]">
                <img
                  className="w-full h-full object-fill rounded-t-lg"
                  alt={slide.heading}
                  src={slide.image}
                />
              </div>

              <div className="p-4 flex flex-col justify-center items-center text-center gap-4">
                <h1 className="font-bold text-xl sm:text-xl md:text-xl text-gray-800 group-hover:text-[#f1a986] transition-all duration-200">
                  {slide.heading}
                </h1>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                  {slide.subheading}
                </p>
                <button className="border px-4 py-2 transition-all duration-200 border-[#f1a986] text-[#f1a986] hover:bg-[#f1a986] hover:text-white rounded-md text-sm sm:text-base lg:text-lg xl:text-xl"
                onClick={() => navigateAndScroll("/about-us")}
                >
                  Read More
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex pb-10 justify-center gap-4 lg:mt-8 mt-2 bg-transparent">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="bg-[#f1a986] text-white px-6 py-3 rounded-full hover:bg-[#e08b66] transition-all duration-200"
        >
          <MdOutlineKeyboardArrowLeft size={24} />
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="bg-[#f1a986] text-white px-6 py-3 rounded-full hover:bg-[#e08b66] transition-all duration-200"
        >
          <MdOutlineKeyboardArrowRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default CardComponent;
