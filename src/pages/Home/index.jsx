import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import b1 from "../../assets/b1.avif";
import b2 from "../../assets/b2.avif";
import b3 from "../../assets/b3.avif";
import PriceOptions from "./PriceOptions";
import CardComponent from "./CardComponent";
import "../../index.css";
import CateringService from "./CateringService";
import Service from "./Service";
import CompSlide from './CompSlide'
import Testimonial from "./Testimonial";
import CateringEvents from "./CateringEvents";
import News from "./News";
import AOS from "aos";
import "aos/dist/aos.css";
import { useInView } from "react-intersection-observer";

const slideAnimations = `
  @keyframes slideDown {
    0% {
      transform: translateY(-50px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slideUp {
    0% {
      transform: translateY(50px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  .animate-heading {
    animation: slideDown 1.25s ease-out forwards;
    opacity: 0;
  }

  .animate-buttons {
    animation: slideUp 1.25s ease-out forwards;
    animation-delay: 0.3s;
    opacity: 0;
  }
`;

const Home = (props) => {
  const [animationKey, setAnimationKey] = useState(0);
  useEffect(()=>{
    props.setPreview("n/a");
},[])
  const slidesData = [
    {
      image: "https://res.cloudinary.com/daa3y840x/image/upload/a_-90/v1734955202/93fbd8aa-5e06-4d71-9f03-ac6e163ff1a1_zmzkfx.jpg",
      heading: "Premium catering services for your taste only",
      subheading: "Discover amazing content here.",
    },
    {
      image: "https://res.cloudinary.com/daa3y840x/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1734955025/cacfeb6d-209f-491b-9dc3-fd7863602f21_fm4f0s.jpg",
      heading: "Savor the finest catering options, designed just for you",
      subheading: "Innovative solutions for your needs.",
    },
    {
      image:"https://res.cloudinary.com/daa3y840x/image/upload/v1734955032/fe792f76-ba07-4f55-a2c3-09b071045c4b_o6sb3k.jpg",
      heading: "Elevating your events with custom catering experiences",
      subheading: "Sign up to get started on your journey.",
    },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 1,
  });

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const handleSlideChange = () => {
    setAnimationKey(prev => prev + 1);
  };

  return (
    <div className="min-h-screen w-full bg-[#f5f4f0]">
      <style>{slideAnimations}</style>
      <Swiper
  className="w-full h-screen relative text-cyan-300"
  loop={true}
  navigation={{
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }}
  modules={[Navigation, Pagination]}
  onSlideChange={handleSlideChange}
  speed={1500} 
>
  {slidesData.map((slide, index) => (
    <SwiperSlide key={index}>
      <div
        className="h-screen w-full flex flex-col items-center justify-center text-white text-center"
        style={{
          backgroundImage: `url(${slide.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Backdrop Filter */}
        <div className="absolute inset-0  bg-black bg-opacity-20"></div>

        {/* Header Text */}
        {/* <div className="absolute top-0 left-0 right-0 bg-opacity-30 py-4 hover:bg-white transition-all duration-200">
          <CompSlide />
        </div> */}

        {/* Content Section */}
        <div
          ref={ref}
          className="text-center z-50 bg-opacity-50 p-6 rounded-md text-white transition-all duration-200 flex flex-col items-center justify-between w-full md:w-2/3 lg:w-1/2 mx-auto"
          key={animationKey}
        >
          <h2 className="animate-heading text-[2.5rem] font-bold mb-4 leading-tight sm:text-3xl md:text-4xl lg:text-5xl">
            {slide.heading}
          </h2>

          <div className="animate-buttons flex mt-3 flex-col sm:flex-row gap-x-4 gap-y-4 sm:gap-y-0">
            <button className="border px-5 py-3 text-xl transition-all duration-200 border-[#f1a986] font-semibold text-white bg-[#f1a986] hover:text-peach hover:bg-transparent rounded-md w-full sm:w-auto">
              Read More
            </button>
            <button className="border px-5 py-3 text-xl transition-all duration-200 border-white font-semibold bg-white text-[#f1a986] hover:bg-transparent hover:text-white rounded-md w-full sm:w-auto">
            Plan Your Catering 
            </button>
          </div>
        </div>
      </div>
    </SwiperSlide>
  ))}
</Swiper>


      <div className="swiper-button-next text-[#f1a986] hover:text-[#f1a986]"></div>
      <div className="swiper-button-prev text-[#f1a986] hover:text-[#f1a986]"></div>

      {/* Other Components */}
      <div className="px-10 -mt-28 bg-transparent">
        <CardComponent />
      </div>

      <div className="min-h-[700px]">
        <CateringService />
      </div>

      <div className="">
        <Service />
      </div>

      <div>
        <PriceOptions />
      </div>
      <div className="mt-9 bg-gray-100 py-10">
        <Testimonial />
      </div>

      <div className="">
        <CateringEvents />
      </div>

      <div className="bg-[#f5f4f0] mt-5 py-6 px-4 sm:px-8 lg:px-16 xl:px-24">
        <News />
      </div>

    </div>
  );
};

export default Home;