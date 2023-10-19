import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Verticleswiper1 = (props) => {
  return (
    <>
      <div className="">
        <Swiper
          direction={"vertical"}
          dir={props.dir}
          // pagination={{
          //   clickable: true,
          // }}
          loop={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          slidesPerView={2}
          modules={[Pagination, Autoplay]}
          className="mySwiper1 h-screen rotate-180"
        >
          {props.details.map((item) => (
            <SwiperSlide key={item.key}>
              <div className="bg-white text-black rotate-180 rounded-[15px]">
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
    </>
  );
};

export default Verticleswiper1;
