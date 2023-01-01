import React from "react";
import img1 from "../images/f-icon1.png";
import img2 from "../images/f-icon2.png";
import img3 from "../images/f-icon3.png";
const Featuers = () => {
  return (
    <div className="features" id="features">
      <h2 className="headTextH2">مميزاتنا</h2>
      <p className="headTextP">
        يوفر لك مساحة تعرض فيها منتجاتك يوفر خدمة التوصيل والدفع الإلكتروني
        والحلو إنه التسجيل في التطبيق مجاني ضاعف مبيعاتك وساعد عملاءك يشتروا منك
        بضغطة زر تقدر تسجل الحين وتستفيد من المميزات المتاحة
      </p>
      <ul>
        <li>
          <img src={img1} alt="" />
          <h2>ضاعف مبيعاتك وساعد عملائك</h2>
          <p>
            بسطه توفر لك مساحة تعرض فيها متجاتك بشكل مجاني اعرض ممتجاتك واجلبك
            عملائك
          </p>
          <span>1</span>
        </li>
        <li>
          <img src={img2} alt="" />
          <h2>ضاعف مبيعاتك وساعد عملائك</h2>
          <p>
            بسطه توفر لك مساحة تعرض فيها متجاتك بشكل مجاني اعرض ممتجاتك واجلبك
            عملائك
          </p>
          <span>2</span>
        </li>
        <li>
          <img src={img3} alt="" />
          <h2>ضاعف مبيعاتك وساعد عملائك</h2>
          <p>
            بسطه توفر لك مساحة تعرض فيها متجاتك بشكل مجاني اعرض ممتجاتك واجلبك
            عملائك
          </p>
          <span>3</span>
        </li>
      </ul>
    </div>
  );
};

export default Featuers;
