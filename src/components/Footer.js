import React from "react";
import phone from "../images/phone.png";
import mail from "../images/mail.png";
import domain from "../images/domin.png";

const Footer = () => {
  return (
    <div className="footer">
      <ul className="row">
        <li className="fLi">
          <h2>بسطة</h2>
          <p>
            بسطة حل سهل ومثالي لزيادة مبيعاتك بسطه يوفر لك مساحة تعرض فيها
            منتجاتك يوفر خدمة التوصيل والدفع الإلكتروني والحلو إنه التسجيل في
            التطبيق مجاني
          </p>
        </li>
        <li className="sLi">
          <h2>مكونات الموقع</h2>
          <a href="#home">الرئيسية</a>
          <a href="#features">مميزتنا</a>
          <a href="#aboutUs">معلومات عنا</a>
          <a href="#screenShots">لقطات التطبيق</a>
          <a href="#comments">اراء عملاءنا</a>
        </li>
        <li className="tLi">
          <h2>اتصل بنا</h2>
          <div>
            <img src={domain} alt="phone" />
            <p>www.pasta.com</p>
          </div>
          <div>
            <img src={phone} alt="phone" />
            <p>71720992</p>
          </div>
          <div>
            <img src={mail} alt="mail" />
            <p>happylife2025@hotmail.com</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
