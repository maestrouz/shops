import React, { useState } from "react";
import "./Mainhed.css";
import maxsulot from "../../public/img/hero_fruits.png";
import bul from "../../public/img/b.png";
import kolbasa from "../../public/img/k1.png";
import sut from "../../public/img/m.png";
import sosiska from "../../public/img/s.png";

export default function Mainhed() {
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
      </header>
    </>
  );
}
