import React, { useState } from "react";
import "./Mainhed.css";
import maxsulot from "../../public/img/hero_fruits.png";
import bul from "../../public/img/b.png";
import kolbasa from "../../public/img/k1.png";
import sut from "../../public/img/m.png";
import sosiska from "../../public/img/s.png";
import chevron from "../../public/img/chevron-right.svg";
import kolbasa2 from "../../public/img/kolbasa.png";
import karta from "../../public/img/karta.png";
import korzina from "../../public/img/korzina.png";
import bottom from "../../public/img/bottom.png";
import Footer from "./Footer/Footer.jsx";

export default function Mainhed() {
  const [showTashkentMap, setShowTashkentMap] = useState(false);
  const [showFerganaMap, setShowFerganaMap] = useState(false);
  const [showAndijanMap, setShowAndijanMap] = useState(false);
  const [showNamanganMap, setShowNamanganMap] = useState(false);

  const handleTashkentButtonClick = () => {
    setShowTashkentMap(!showTashkentMap);
    // Fergana mapni yashirish
    setShowFerganaMap(false);
  };

  const handleFerganaButtonClick = () => {
    setShowFerganaMap(!showFerganaMap);
    // Tashkent mapni yashirish
    setShowTashkentMap(false);
  };

  const handleAndijanButtonClick = () => {
    setShowAndijanMap(!showAndijanMap);
    // Tashkent mapni yashirish
    setShowNamanganMap(false);
    setShowTashkentMap(false);

  };

  const handleNamanganButtonClick = () => {
    setShowNamanganMap(!showNamanganMap);
    // Tashkent mapni yashirish
    setShowAndijanMap(false);
    setShowTashkentMap(false);
    setShowFerganaMap(false);


  };
  return (
    <>
      <header className="header">
        <div className="header_hero">
          <img src={maxsulot} alt="pic" />
          <h1>Доставка бесплатно от 1000 ₽</h1>
        </div>
        <div className="cards">
          <div className="card1">
            <img className="pics" src={bul} alt="pic" />
            <h2 className="bul">Булочка</h2>
            <p className="price">24 000 so'm</p>
            <p className="lorem">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
              perferendis nostrum neque tenetur quaerat fugit?
            </p>
            <div className="buttons">
              <button className="shoping">
                <i class="fa-solid fa-cart-shopping fa-bounce"></i>
              </button>

              <button className="heart">
                <i class="fa-regular fa-heart fa-bounce"></i>
              </button>
            </div>
          </div>

          <div className="card1">
            <img className="pics" src={kolbasa} alt="pic" />
            <h2 className="bul">Колбаса</h2>
            <p className="price">32 000 so'm</p>
            <p className="lorem">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
              perferendis nostrum neque tenetur quaerat fugit?
            </p>
            <div className="buttons">
              <button className="shoping">
                <i class="fa-solid fa-cart-shopping fa-bounce"></i>
              </button>

              <button className="heart">
                <i class="fa-regular fa-heart fa-bounce"></i>
              </button>
            </div>
          </div>

          <div className="card1">
            <img className="pics" src={sut} alt="pic" />
            <h2 className="bul">Молоко</h2>
            <p className="price">14 000 so'm</p>
            <p className="lorem">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
              perferendis nostrum neque tenetur quaerat fugit?
            </p>
            <div className="buttons">
              <button className="shoping">
                <i class="fa-solid fa-cart-shopping fa-bounce"></i>
              </button>

              <button className="heart">
                <i class="fa-regular fa-heart fa-bounce"></i>
              </button>
            </div>
          </div>

          <div className="card1">
            <img className="pics" src={sosiska} alt="pic" />
            <h2 className="bul">Сосиска</h2>
            <p className="price">16 000 so'm</p>
            <p className="lorem">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
              perferendis nostrum neque tenetur quaerat fugit?
            </p>
            <div className="buttons">
              <button className="shoping">
                <i class="fa-solid fa-cart-shopping fa-bounce"></i>
              </button>

              <button className="heart">
                <i class="fa-regular fa-heart fa-bounce"></i>
              </button>
            </div>
          </div>
        </div>

        <section className="section1">
          <div className="novinki">
            <h2>Новинки</h2>
            <a href="#">
              Все продукты{" "}
              <span>
                <img src={chevron} alt="" />
              </span>
            </a>
          </div>
          <div className="cards2">
            <div className="card1">
              <img className="pics" src={kolbasa2} alt="pic" />
              <h2 className="bul">Молоко</h2>
              <p className="price">14 000 so'm</p>
              <p className="lorem">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
                perferendis nostrum neque tenetur quaerat fugit?
              </p>
              <div className="buttons">
                <button className="shoping">
                  <i class="fa-solid fa-cart-shopping fa-bounce"></i>
                </button>

                <button className="heart">
                  <i class="fa-regular fa-heart fa-bounce"></i>
                </button>
              </div>
            </div>

            <div className="card1">
              <img className="pics" src={kolbasa} alt="pic" />
              <h2 className="bul">Молоко</h2>
              <p className="price">14 000 so'm</p>
              <p className="lorem">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
                perferendis nostrum neque tenetur quaerat fugit?
              </p>
              <div className="buttons">
                <button className="shoping">
                  <i class="fa-solid fa-cart-shopping fa-bounce"></i>
                </button>

                <button className="heart">
                  <i class="fa-regular fa-heart fa-bounce"></i>
                </button>
              </div>
            </div>

            <div className="card1">
              <img className="pics" src={sosiska} alt="pic" />
              <h2 className="bul">Молоко</h2>
              <p className="price">14 000 so'm</p>
              <p className="lorem">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
                perferendis nostrum neque tenetur quaerat fugit?
              </p>
              <div className="buttons">
                <button className="shoping">
                  <i class="fa-solid fa-cart-shopping fa-bounce"></i>
                </button>

                <button className="heart">
                  <i class="fa-regular fa-heart fa-bounce"></i>
                </button>
              </div>
            </div>

            <div className="card1">
              <img className="pics" src={sosiska} alt="pic" />
              <h2 className="bul">Молоко</h2>
              <p className="price">14 000 so'm</p>
              <p className="lorem">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
                perferendis nostrum neque tenetur quaerat fugit?
              </p>
              <div className="buttons">
                <button className="shoping">
                  <i class="fa-solid fa-cart-shopping fa-bounce"></i>
                </button>

                <button className="heart">
                  <i class="fa-regular fa-heart fa-bounce"></i>
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="section2">
          <h2>Специальные предложения</h2>
          <div className="cards3">
            <div className="karta">
              <div className="karta_info">
                <h3>Оформите карту «Северяночка»</h3>
                <p>И получайте бонусы при покупке в магазинах и на сайте</p>
              </div>
              <div className="karta_img">
                <img src={karta} alt="" />
              </div>
            </div>

            <div className="tovar">
              <div className="karta_info">
                <h3>Покупайте акционные товары</h3>
                <p>И получайте вдвое больше бонусов</p>
              </div>
              <div className="karta_img">
                <img className="korzina" src={korzina} alt="" />
              </div>
            </div>
          </div>
        </section>

        <section className="section3">
          <h2>Наши магазины</h2>
          <h3>Выберите город <span><img src={bottom} alt="" /></span></h3>
          <div className="address">
            <button className="tashkent" onClick={handleTashkentButtonClick}>
              Ташкент
            </button>{" "}
            <button className="fergana" onClick={handleFerganaButtonClick}>
              Фергана
            </button>
            <button className="andijan" onClick={handleAndijanButtonClick}>
              Андижан
            </button>
            <button className="namangan" onClick={handleNamanganButtonClick}>
              Наманган
            </button>
          </div>

          {showTashkentMap && (
            <iframe
              className="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5997.6318613363865!2d69.1795160922772!3d41.26934353525995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae89f3371e0833%3A0x657012c8c99d5f97!2z0KfQuNC70LDQvdC30LDRgC0xOSwg0KLQsNGI0LrQtdC90YIsINCj0LfQsdC10LrQuNGB0YLQsNC9!5e0!3m2!1sru!2s!4v1702455599882!5m2!1sru!2s"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          )}

          {showFerganaMap && (
            <iframe
              className="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d988.1403800039933!2d71.7860339519466!3d40.374535405552635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb83431937abc5%3A0xcfa4d876b34e7bbc!2z0KTQtdGA0LPQsNC90LAsINCj0LfQsdC10LrQuNGB0YLQsNC9!5e0!3m2!1sru!2s!4v1702458855656!5m2!1sru!2s"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          )}

          {showAndijanMap && (
            <iframe
              className="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4845.951095243678!2d72.28113327527821!3d40.81329753352148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bc901d6b13d4ef%3A0xfc45bcaa7973dfac!2z0JDQvdC00LjQttCw0L0sINCj0LfQsdC10LrQuNGB0YLQsNC9!5e0!3m2!1sru!2s!4v1702456999572!5m2!1sru!2s"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          )}

          {showNamanganMap && (
            <iframe
              className="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4831.429530578224!2d71.60952846386279!3d41.0117170657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb4c1b2e60eea5%3A0x36ef7252c4c12106!2z0J3QsNC80LDQvdCz0LDQvSwg0KPQt9Cx0LXQutC40YHRgtCw0L0!5e0!3m2!1sru!2s!4v1702458596671!5m2!1sru!2s"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          )}
        </section>
        <Footer />
      </header>
    </>
  );
}
