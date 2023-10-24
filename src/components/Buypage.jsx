import React from "react";
import "./buypage.scss";

export default function Buypage() {
  const buyers = JSON.parse(localStorage.getItem('buyer'))
  // const test = JSON.parse(buyers)
  // console.log(test);
  return (

    <>
      <div className="ghost__main">
        <div id="background"></div>
        <div class="top">
          <h1>404</h1>
          <h6>page not found</h6>
        </div>
        <div class="ghost_cont">
          <div class="ghost-copy">
            <div class="one"></div>
            <div class="two"></div>
            <div class="three"></div>
            <div class="four"></div>
          </div>
          <div class="ghost">
            <div class="face">
              <div class="eye"></div>
              <div class="eye-right"></div>
              <div class="mouth"></div>
            </div>
          </div>
          <div class="shadow"></div>
        </div>
        <div class="bottom">
          <p>Bu qismni localstoragedagi muommolar tufayli yakunlay olmadim</p>
        </div>
      </div>
    </>
  );
}
