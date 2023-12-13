import "./catalog.css";
import catalogimgcontent12 from "../../assets/Catalog-img/img (1).png";
import catalogimgcontent14 from "../../assets/Catalog-img/img (3).png";
import catalogimgcontent15 from "../../assets/Catalog-img/img (4).png";
import catalogimgcontent16 from "../../assets/Catalog-img/img (5).png";
import catalogimgcontent17 from "../../assets/Catalog-img/img (6).png";
import catalogimgcontent18 from "../../assets/Catalog-img/img (7).png";
import catalogimgcontent19 from "../../assets/Catalog-img/img (8).png";
import catalogimgcontent20 from "../../assets/Catalog-img/img (9).png";
import catalogimgcontent21 from "../../assets/Catalog-img/img (10).png";
import catalogimgcontent22 from "../../assets/Catalog-img/img (12).png";
import catalogimgcontent23 from "../../assets/Catalog-img/img (13).png";
import catalogimgcontent13 from "../../assets/Catalog-img/img (2).png";
import catalogimgcontent11 from "../../assets/Catalog-img/img.png";
import chevronright from "../../assets/Catalog-img/chevron-right.svg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Catalogpart() {
  return (
    <section className="catalog">
      <div className="catalog_container">
        <div className="catalog_toptext">
          <Link to="/">
            <p className="catalog_toptext1">Главная</p>
          </Link>
          <img src={chevronright} alt="img" className="catalog_toptext_img" />
          <p className="catalog_toptext2">Каталог</p>
        </div>
        <div className="catalog_content">
          <h1 className="catalog_contenth1">Каталог</h1>
          <div className="catalog_frame1">
            <div className="catalog_frame3-1">
              <img src={catalogimgcontent11} alt="img" />
              <div className="catalog_frame3-11"> Молоко, сыр, яйцо</div>
            </div>
            <div className="catalog_frame3-2">
              <img src={catalogimgcontent12} alt="img" />
              <div className="catalog_frame3-2b">Хлеб</div>
            </div>
            <div className="catalog_frame3-2">
              <img src={catalogimgcontent13} alt="img" />
              <div className="catalog_frame3-3b">Фрукты и овощи</div>
            </div>
          </div>
          <div className="catalog_frame4">
            <div className="catalog_frame4-2">
              <img src={catalogimgcontent14} alt="img" />
              <div className="catalog_frame3-3b">Замороженные продукты</div>
            </div>
            <div className="catalog_frame4-4">
              <img src={catalogimgcontent15} alt="img" />
              <div className="catalog_frame3-3b">Напитки</div>
            </div>
            <div className="catalog_frame4-4">
              <img src={catalogimgcontent16} alt="img" />
              <div className="catalog_frame3-3b">Кондитерские изделия</div>
            </div>
            <div className="catalog_frame4-4">
              <img src={catalogimgcontent17} alt="img" />
              <div className="catalog_frame3-3b">Чай, кофе</div>
            </div>
          </div>
          <div className="catalog_frame3">
            <div className="catalog_frame4-2">
              <img src={catalogimgcontent18} alt="img" />
              <div className="catalog_frame3-3b">Бакалея</div>
            </div>
            <div className="catalog_frame3-2">
              <img src={catalogimgcontent19} alt="img" />
              <div className="catalog_frame3-3b">Здоровое питание</div>
            </div>
            <div className="catalog_frame3-1b">
              <img src={catalogimgcontent20} alt="img" />
              <div className="catalog_frame3-11">Зоотовары</div>
            </div>
          </div>
          <div className="catalog_frame3">
            <div className="catalog_frame4-2">
              <img src={catalogimgcontent21} alt="img" />
              <div className="catalog_frame3-3b">Детское питание</div>
            </div>
            <div className="catalog_frame3-1b">
              <img src={catalogimgcontent22} alt="img" />
              <div className="catalog_frame3-11">Мясо, птица, колбаса</div>
            </div>
            <div className="catalog_frame3-2">
              <img src={catalogimgcontent23} alt="img" />
              <div className="catalog_frame4-3b">
                Непродовольственные товары
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
