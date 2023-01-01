import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import boy from "../images/boy.jpg";
import quote from "../images/qoute.png";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
const Comments = () => {
  return (
    <div className="comments" id="comments">
      <div className="commentsContainer">
        <div className="headComments">
          <h1>ماذا يقول عملاؤنا</h1>
          <p></p>
        </div>
        <>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            slidesPerGroup={3}
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{
              clickable: true,
            }}
            //   navigation={true}
            // modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide className="swiperSlide">
              <ul className="swiperContent_comments">
                <li className="liUp">
                  <img src={boy} alt="person" className="person" />
                  <h2>ابو مازن الشرقي</h2>
                </li>
                <li className="liQuote">
                  <img src={quote} alt="quote" />
                </li>
              </ul>
              <div className="commentsContent">
                <p>انا سعيد جدا حقيقي بسطة يوفرلي الكثير</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiperSlide">
              <ul className="swiperContent_comments">
                <li>
                  <img src={boy} alt="person" className="person" />
                  <h2>ابو مازن الشرقي</h2>
                </li>
                <li>
                  <img src={quote} alt="quote" />
                </li>
              </ul>
              <div className="commentsContent">
                <p>انا سعيد جدا حقيقي بسطة يوفرلي الكثير</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiperSlide">
              <ul className="swiperContent_comments">
                <li>
                  <img src={boy} alt="person" className="person" />
                  <h2>ابو مازن الشرقي</h2>
                </li>
                <li>
                  <img src={quote} alt="quote" />
                </li>
              </ul>
              <div className="commentsContent">
                <p>انا سعيد جدا حقيقي بسطة يوفرلي الكثير</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiperSlide">
              <ul className="swiperContent_comments">
                <li>
                  <img src={boy} alt="person" className="person" />
                  <h2>ابو مازن الشرقي</h2>
                </li>
                <li>
                  <img src={quote} alt="quote" />
                </li>
              </ul>
              <div className="commentsContent">
                <p>انا سعيد جدا حقيقي بسطة يوفرلي الكثير</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiperSlide">
              <ul className="swiperContent_comments">
                <li>
                  <img src={boy} alt="person" className="person" />
                  <h2>ابو مازن الشرقي</h2>
                </li>
                <li>
                  <img src={quote} alt="quote" />
                </li>
              </ul>
              <div className="commentsContent">
                <p>انا سعيد جدا حقيقي بسطة يوفرلي الكثير</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </>
      </div>
    </div>
  );
};

export default Comments;
