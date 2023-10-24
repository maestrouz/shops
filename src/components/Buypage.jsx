import React from "react";
import "./buypage.scss";

export default function Buypage() {
  const buyers = JSON.parse(localStorage.getItem('buyer'))
  // const test = JSON.parse(buyers)
  // console.log(test);
  return (

    <>
      <div className="container">
        <div className="itemList">
           {
            buyers.map((item) => {
              <img src={item.img} alt="" />
            })
           }
        </div>
      </div>
    </>
  );
}
