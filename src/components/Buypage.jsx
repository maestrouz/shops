import React from "react";
import Footer from "./Footer/Footer.jsx";


export default function Buypage() {
  const buyers = JSON.parse(localStorage.getItem("buyer"));

  const ButtonClick = () => {
    alert("Siz mahsulotni sotib oldingiz!");
  };

  return (
    <>
      <span>
        <a href="http://localhost:5173/">Главная</a>
        <i class="fa-solid fa-chevron-right"></i>
        корзина
      </span>
      <div className="container">
        <div className="itemList">
          {buyers.map((item) => (
            <div className="item" key={item.id}>
              <img src={item.image} alt="image" />
              <div className="txt">
                <h3>{item.name}</h3>
                <p>{item.narx} so'm</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                <div className="btn_cont">
                  <button className="buy" onClick={ButtonClick}>
                    <i className="fa-solid fa-dollar-sign fa-fade"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
