import React, { useState, useEffect } from "react";
import Footer from "./Footer/Footer.jsx";



export default function Like() {
  const [like, setLike] = useState(
    JSON.parse(localStorage.getItem("like")) || []
  );

  const removeItem = (id) => {
    const updatedLike = like.filter((item) => item.id !== id);
    setLike(updatedLike);
  };
   useEffect(() => {
     localStorage.setItem("like", JSON.stringify(like));
   }, [like]);

  return (
    <>
      <span>
        <a href="http://localhost:5173/">Главная</a>
        <i class="fa-solid fa-chevron-right"></i>
        избранное
      </span>
      <div className="container">
        <div className="itemList">
          {like.map((item) => {
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
      <Footer />
    </>
  );
}
