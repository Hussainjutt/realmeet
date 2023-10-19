import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { Swiper as SwiperCore } from "swiper";
import "swiper/swiper-bundle.css";

// Initialize SwiperCore with required modules
SwiperCore.use([Autoplay]);

const Verticleswiper2 = (props) => {
  return (
    <div className="">
      <div className="mySwiperContainer rotate-180">
        <Swiper
          direction="vertical"
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          slidesPerView={2}
          loop={true}
          modules={[Autoplay]}
          className="mySwiper1 h-screen rotate-180"
          initialSlide={0}
        >
          {props.details.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bg-white text-black rounded-[15px]">
                <div>
                  <img
                    src={item.img}
                    alt={item.title}
                    className="object-cover w-[200px] h-[200px] rounded-[15px]"
                  />
                </div>
                <div className="text-center py-2">
                  <p className="text-cstm_primary_pink-100 text-xs font-normal font-['BR Omega'] uppercase leading-none tracking-tight  py-1">
                    {item.date}
                  </p>
                  <p className="text-slate-800 text-base font-normal font-['BR Omega'] leading-snug">
                    {item.title}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Verticleswiper2;
