import React, { useState } from "react";
import mobile from "../images/imgs/10.png";
import gPlay from "../images/g-play-icon.png";
import apple from "../images/apple-icon.png";

const Info = () => {
  const [Y, setY] = useState("");
  const [X, setX] = useState("");
  const mouseMove = (e) => {
    const xWidth = (window.innerWidth - e.pageX * 8) / 100;
    const yWidth = (window.innerHeight - e.pageY * 3) / 100;
    setX(xWidth);
    setY(yWidth);
  };
  return (
    <div className="info" id="aboutUs">
      <div className="row">
        <div className="txtInf_row">
          <h2>بسطة حل سهل ومثالي لزيادة مبيعاتك</h2>
          <p>
            عندك مشروع منزلي أو تجاره الكترونيه وتريد مكان تعرض فيه منتجاتك
            مجانا؟ ملابس بأنواعها عبايات مخورات ملابس أطفال شنط وأحذيه اكسسوارات
            هدايا عطور بخور بسطه يوفر لك مساحة تعرض فيها منتجاتك يوفر خدمة
            التوصيل والدفع الإلكتروني والحلو إنه التسجيل في التطبيق مجاني
          </p>
          <div className="btns">
            <button>
              <img src={apple} alt="alt" />
              <span> تحميل للايفون</span>
            </button>
            <button>
              <img src={gPlay} alt="gPlay" />
              <span>تحميل للاندرويد</span>
            </button>
          </div>
        </div>
        <div className="imgInf_row">
          <img
            src={mobile}
            alt="mobile"
            onMouseMove={mouseMove}
            style={{
              transform: `rotate(-45deg) translateX(${X}px) translateY(${Y}px) `,
              transition: `all 1.2s linear`,
              position: "relative",
              right: "50px",
              top: "50px",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Info;
