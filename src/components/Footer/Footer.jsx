import "./Footer.css";
import logo from "../../assets/Catalog-img/logo.png";
import social from "../../assets/Catalog-img/Social.png";
import zasovskiy from "../../assets/Catalog-img/logo-zasovskiy-small-black.png";

export default function Footer() {
  return (
    <footer className="footer">
      <img src={logo} />
      <ul className="footer__list">
        <li>О компании</li>
        <li>Контакты</li>
        <li>Вакансии</li>
        <li>Статьи</li>
        <li>Политика обработки персональных данных</li>
      </ul>
      <img src={social} alt="social" />
      <div>
        <div className="phone">
          <i className="fa-solid fa-phone"></i>
          <p>8 800 777 33 33</p>
        </div>
        <div className="design">
          <span className="designt">Дизайн</span>
          <img src={zasovskiy} alt="disagn" />
        </div>
      </div>
    </footer>
  );
}
