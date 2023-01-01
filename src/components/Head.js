import React, { useState } from "react";
import shape from "../images/shape.png";
import mobile from "../images/imgs/8.png";
const Head = () => {
  const [Y, setY] = useState("");
  const [X, setX] = useState("");
  const mouseMove = (e) => {
    const xWidth = (window.innerWidth - e.pageX * 8) / 100;
    const yWidth = (window.innerHeight - e.pageY * 8) / 100;
    setX(xWidth);
    setY(yWidth);
  };
  return (
    <div className="headNav">
      <img
        src={shape}
        alt="shape"
        onMouseMove={mouseMove}
        style={{
          transform: `translateX(${X}px) translateY(${Y}px)`,
          transition: `all 1.2s linear`,
          //   mixBlendMode: "darken",
        }}
        className="shape"
      />
      <div className="headContent">
        <div className="headRow">
          <div className="textHead_imageHead">
            <img src={mobile} alt="mobile" />
          </div>
          <div className="textHead_row">
            <h1>بسطة</h1>
            <h1>مع بسطه تجارتك أبسط ومبيعاتك أكثر</h1>
            <p>
              بسطه يوفر لك مساحة تعرض فيها منتجاتك يوفر خدمة التوصيل والدفع
              الإلكتروني والحلو إنه التسجيل في التطبيق مجاني
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Head;
