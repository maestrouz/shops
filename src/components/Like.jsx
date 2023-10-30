import React from "react";

export default function Like() {
  const buyers = JSON.parse(localStorage.getItem('like'))
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
                  <p>{item.narx} so'm</p>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Velit maxime fugiat nihil soluta quae reiciendis.
                  </p>

                  <div className="btn_cont">
                    <button
                      onClick={() => buyProduct(item.id)}
                      className="buy_btn"
                    >
                      <i class="fa-solid fa-cart-shopping fa-fade"></i>{" "}
                    </button>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="trash_btn"
                    >
                      <i class="fa-sharp fa-regular fa-trash-can fa-beat-fade"></i>
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
