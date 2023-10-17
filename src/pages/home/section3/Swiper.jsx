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

const Swipper = (props) => {
  const swiperRef = useRef(null);

  const handleNextClick = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handlePrevClick = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <div className="w-full  flex items-center justify-center gap-2 p-2">
      <button onClick={handlePrevClick}>
        <MdKeyboardArrowLeft color="#E84670" size={30} />
      </button>
      <Swiper
        ref={swiperRef}
        slidesPerView={5}
        spaceBetween={40}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper"
      >
        {props.details.map((value, index) => (
          <SwiperSlide key={index}>
            <div className="w-full">
              <div>
                <img src={value.img} alt="" className="rounded-[40px] w-full" />
              </div>
              <div className="text-center mb-8">
                <h3 className="text-cstm_primary_pink-100 text-lg font-normal font-['BR Omega'] leading-normal my-2">
                  {value.title}
                </h3>
                <p>{value.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button onClick={handleNextClick}>
        <MdKeyboardArrowRight color="#E84670" size={30} />
      </button>
    </div>
  );
};

export default Swipper;
