import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SwiperCore from "swiper";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

SwiperCore.use([Autoplay, Pagination, Navigation]);

const Testimonial = (props) => {
  const swiperRef = useRef(null);

  return (
    <div className="w-full  flex items-center justify-center gap-2 p-2">
      {/* <button onClick={handlePrevClick}>
        <MdKeyboardArrowLeft color="#E84670" size={30} />
      </button> */}
      <Swiper
        ref={swiperRef}
        slidesPerView={3}
        spaceBetween={40}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
      >
        {props.details.map((value, index) => (
          <SwiperSlide key={index}>
            <div className="w-full">
              <div className="flex justify-center my-7">
                <img
                  src={value.icon}
                  alt=""
                  className=""
                />
              </div>
              <div className="text-center mb-8">
                <p className="">{value.description}</p>
                </div>
                <div className="flex justify-center gap-4 items-center mb-9">
                  <img src={value.img} alt="" className="rounded-[50%] w-16" />
                  <p>{value.name}</p>
                </div>
              
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
