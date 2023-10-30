import React from "react";

export default function Buypage() {
  const buyers = JSON.parse(localStorage.getItem('buyer'))
  return (
    <>
      <div className="container">

        
        <div className="itemList">
          {buyers.map((item) => {
            return (
              <div className="item" key={item.id}>
                <img src={item.image} alt="image" />
                <div className="txt">
                  <h3>{item.name}</h3>
                  <p>{item.narx}so'm</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>

                  <div className="btn_cont">
                    <button className="buy">
                      <i class="fa-solid fa-dollar-sign fa-fade"></i>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
