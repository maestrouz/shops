import React, { useState } from 'react'
import './Mainhed.css';
import maxsulot from '../../public/img/hero_fruits.png'; 


export default function Mainhed() {
  return (
    <>
    <header className="header">
    <div className="header_hero">
      <img src={maxsulot} alt="pic" />
      <h1>Доставка бесплатно от 1000 ₽</h1>
    </div>
    </header>
    </>
  )
}
