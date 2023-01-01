import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import sh1 from "../images/imgs/1.jpg";
import sh2 from "../images/imgs/2.jpg";
import sh3 from "../images/imgs/3.jpg";
import sh4 from "../images/imgs/4.jpg";
import sh5 from "../images/imgs/5.jpg";
import sh6 from "../images/imgs/6.jpg";
import sh7 from "../images/imgs/7.jpg";
import frame from "../images/frame.png";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
const Products = () => {
  return (
    <div className="products" id="screenShots">
      <div className="productsContainer">
        <h1>لقطات التطبيق لدينا</h1>
      </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        <SwiperSlide className="swiperSlide">
          <img src={sh1} className="frame" alt="screenShot" />
          <img src={frame} className="person" alt="frame" />
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          <img src={sh2} className="frame" alt="screenShot" />
          <img src={frame} className="person" alt="frame" />
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          <img src={sh3} className="frame" alt="screenShot" />
          <img src={frame} className="person" alt="frame" />
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          <img src={sh4} className="frame" alt="screenShot" />
          <img src={frame} className="person" alt="frame" />
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          <img src={sh5} className="frame" alt="screenShot" />
          <img src={frame} className="person" alt="frame" />
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          <img src={sh6} className="frame" alt="screenShot" />
          <img src={frame} className="person" alt="frame" />
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          <img src={sh7} className="frame" alt="screenShot" />
          <img src={frame} className="person" alt="frame" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Products;
