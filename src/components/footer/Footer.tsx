import { Link } from "react-router-dom";
import facebook from "../../assets/icons/facebook.png";
import insta from "../../assets/icons/insta.png";
import vk from "../../assets/icons/vk.png";
import whatsapp from "../../assets/icons/whatsapp.png";
import scss from "./footer.module.scss";
import { FC } from "react";

export const Footer:FC = () => {
  return (
    <div className={scss.contayner}>
      <div className={scss.wrapper}>
        <div>
          <span className={scss.span}>Platinum Park</span>
          <br />
          <br />
          <span className={scss.p}>
            Аренда авто по вашему стилю. Широкий выбор,
            <br /> простая бронь. Воплотите свои путешественнические <br />
            планы в реальность с нашими автомобилями.
          </span>
        </div>

        <div>
          <span className={scss.span}>Наши контакты</span>
          <p className={scss.p}>
            Контакты: +996 709 371 950
            <br /> Почта:{" "}
            <span className={scss.underline}>platiumpark@gmail.com</span>
            <br />
            Адрес: Кыргызстан,Бишкек{" "} <br />
            <span className={scss.underline}> Правила пользование сайта </span>
          </p>
        </div>

        <div className={scss.lastBox}>
          <span className={scss.span}>Социальные сети</span>
          <br />
          <br />
          <div>
            <Link to="https://www.facebook.com/">
              <img src={facebook} alt="facebook" />
            </Link>

            <Link to="https://www.instagram.com/">
              <img src={insta} alt="insta" />
            </Link>
            <Link to="https://www.vk.com/">
              <img src={vk} alt="vk" />
            </Link>
            <Link to="https://www.whatsapp.com/">
              <img src={whatsapp} alt="whatsapp" />
            </Link>
          </div>
        </div>
      </div>

      <div className={scss.bottomPart}>
        <span className={scss.bottomLine}>©2023 Platinum Park</span>
        <span className={scss.bottomLine}>Все авторские права защищены</span>
      </div>
    </div>
  );
};
