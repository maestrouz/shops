import React from 'react'
import './Main.css';
import bl from '../../public/img/bl.png'; 
import kl from '../../public/img/kl.png'; 
import ml from '../../public/img/ml.png'; 
import buy from '../../public/img/buy.png'; 
import card from '../../public/img/karta.png'; 

export default function Main() {
    let url = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23980.163121189107!2d69.21758082317967!3d41.2975415402639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8afc8d085a63%3A0x1a99ce5e4e0ba99e!2sKorzinka%20%E2%80%94%20Next!5e0!3m2!1sru!2s!4v1697722812293!5m2!1sru!2s"
  return (
    <>
      <main className="container">
        <section className="section_1 container">
          <div className="vse_produkti">
            <h2>Акции</h2>
            <a href="#">
              Все продукты
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.64645 5.64645C8.84171 5.45118 9.15829 5.45118 9.35355 5.64645L15.3536 11.6464C15.5488 11.8417 15.5488 12.1583 15.3536 12.3536L9.35355 18.3536C9.15829 18.5488 8.84171 18.5488 8.64645 18.3536C8.45118 18.1583 8.45118 17.8417 8.64645 17.6464L14.2929 12L8.64645 6.35355C8.45118 6.15829 8.45118 5.84171 8.64645 5.64645Z"
                  fill="#606060"
                />
              </svg>
            </a>
          </div>
          <div className="cards_1">
            <div className="card_1_1">
              <img src={bl} alt="img" />
              <div className="scene">
                <p>44,50 ₽</p>
                <p>50,50 ₽</p>
              </div>
              <div className="karta">
                <p>С картой</p>
                <p>Обычная</p>
              </div>
              <h3>Г/Ц Блинчики с мясом вес, Россия</h3>
              <img className="rating" src="images/rating.png" alt="pic" />
              <button className="korzina">В корзину</button>
            </div>

            <div className="card_1_1">
              <img src={ml} alt="img" />
              <div className="scene">
                <p>44,50 ₽</p>
                <p>50,50 ₽</p>
              </div>
              <div className="karta">
                <p>С картой</p>
                <p>Обычная</p>
              </div>
              <h3>Молоко ПРОСТОКВАШИНО паст. питьевое цельное отборное...</h3>

              <button className="korzina">Savatga</button>
            </div>

            <div className="card_1_1">
              <img src={kl} alt="img" />
              <div className="scene">
                <p>44,50 ₽</p>
                <p>50,50 ₽</p>
              </div>
              <div className="karta">
                <p>С картой</p>
                <p>Обычная</p>
              </div>
              <h3>Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон и Тоскан...</h3>

              <button className="korzina">Savatga</button>
            </div>

            <div className="card_1_1">
              <img src={kl} alt="img" />
              <div className="scene">
                <p>44,50 ₽</p>
                <p>50,50 ₽</p>
              </div>
              <div className="karta">
                <p>С картой</p>
                <p>Обычная</p>
              </div>
              <h3>Сосиски вареные МЯСНАЯ ИСТОРИЯ Молочные и С сыро...</h3>

              <button className="korzina">Savatga</button>
            </div>
          </div>
        </section>
        <section className="section_1 container">
          <div className="vse_produkti">
            <h2>Новинки</h2>
            <a href="#">
              Все продукты
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.64645 5.64645C8.84171 5.45118 9.15829 5.45118 9.35355 5.64645L15.3536 11.6464C15.5488 11.8417 15.5488 12.1583 15.3536 12.3536L9.35355 18.3536C9.15829 18.5488 8.84171 18.5488 8.64645 18.3536C8.45118 18.1583 8.45118 17.8417 8.64645 17.6464L14.2929 12L8.64645 6.35355C8.45118 6.15829 8.45118 5.84171 8.64645 5.64645Z"
                  fill="#606060"
                />
              </svg>
            </a>
          </div>
          <div className="cards_1">
            <div className="card_1_1">
              <img src={bl} alt="img" />
              <div className="scene">
                <p>44,50 ₽</p>
                <p>50,50 ₽</p>
              </div>
              <div className="karta">
                <p>С картой</p>
                <p>Обычная</p>
              </div>
              <h3>Г/Ц Блинчики с мясом вес, Россия</h3>
              <img className="rating" src="images/rating.png" alt="pic" />
              <button className="korzina">В корзину</button>
            </div>

            <div className="card_1_1">
              <img src={ml} alt="img" />
              <div className="scene">
                <p>44,50 ₽</p>
                <p>50,50 ₽</p>
              </div>
              <div className="karta">
                <p>С картой</p>
                <p>Обычная</p>
              </div>
              <h3>Молоко ПРОСТОКВАШИНО паст. питьевое цельное отборное...</h3>

              <button className="korzina">Savatga</button>
            </div>

            <div className="card_1_1">
              <img src={kl} alt="img" />
              <div className="scene">
                <p>44,50 ₽</p>
                <p>50,50 ₽</p>
              </div>
              <div className="karta">
                <p>С картой</p>
                <p>Обычная</p>
              </div>
              <h3>Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон и Тоскан...</h3>

              <button className="korzina">Savatga</button>
            </div>

            <div className="card_1_1">
              <img src={kl} alt="img" />
              <div className="scene">
                <p>44,50 ₽</p>
                <p>50,50 ₽</p>
              </div>
              <div className="karta">
                <p>С картой</p>
                <p>Обычная</p>
              </div>
              <h3>Сосиски вареные МЯСНАЯ ИСТОРИЯ Молочные и С сыро...</h3>

              <button className="korzina">Savatga</button>
            </div>
          </div>
        </section>
        <section className="section_1 container">
          <div className="vse_produkti">
            <h2>Покупали раньше</h2>
            <a href="#">
              Все продукты
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.64645 5.64645C8.84171 5.45118 9.15829 5.45118 9.35355 5.64645L15.3536 11.6464C15.5488 11.8417 15.5488 12.1583 15.3536 12.3536L9.35355 18.3536C9.15829 18.5488 8.84171 18.5488 8.64645 18.3536C8.45118 18.1583 8.45118 17.8417 8.64645 17.6464L14.2929 12L8.64645 6.35355C8.45118 6.15829 8.45118 5.84171 8.64645 5.64645Z"
                  fill="#606060"
                />
              </svg>
            </a>
          </div>
          <div className="cards_1">
            <div className="card_1_1">
              <img src={bl} alt="img" />
              <div className="scene">
                <p>44,50 ₽</p>
                <p>50,50 ₽</p>
              </div>
              <div className="karta">
                <p>С картой</p>
                <p>Обычная</p>
              </div>
              <h3>Г/Ц Блинчики с мясом вес, Россия</h3>
              <img className="rating" src="images/rating.png" alt="pic" />
              <button className="korzina">В корзину</button>
            </div>

            <div className="card_1_1">
              <img src={ml} alt="img" />
              <div className="scene">
                <p>44,50 ₽</p>
                <p>50,50 ₽</p>
              </div>
              <div className="karta">
                <p>С картой</p>
                <p>Обычная</p>
              </div>
              <h3>Молоко ПРОСТОКВАШИНО паст. питьевое цельное отборное...</h3>

              <button className="korzina">Savatga</button>
            </div>

            <div className="card_1_1">
              <img src={kl} alt="img" />
              <div className="scene">
                <p>44,50 ₽</p>
                <p>50,50 ₽</p>
              </div>
              <div className="karta">
                <p>С картой</p>
                <p>Обычная</p>
              </div>
              <h3>Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон и Тоскан...</h3>

              <button className="korzina">Savatga</button>
            </div>

            <div className="card_1_1">
              <img src={kl} alt="img" />
              <div className="scene">
                <p>44,50 ₽</p>
                <p>50,50 ₽</p>
              </div>
              <div className="karta">
                <p>С картой</p>
                <p>Обычная</p>
              </div>
              <h3>Сосиски вареные МЯСНАЯ ИСТОРИЯ Молочные и С сыро...</h3>

              <button className="korzina">Savatga</button>
            </div>
          </div>
        </section>
        <section className="section_4">
          <h2>Специальные предложения</h2>
          <div className="cards_4">
            <div className="card_4_1">
              <div className="karta">
                <h3>Оформите карту «Северяночка»</h3>
                <p>И получайте бонусы при покупке в магазинах и на сайте</p>
              </div>
              <img src={card} className="mini-kart" alt="" />
            </div>

            <div className="card_4_1">
              <div className="karta">
                <h3>Покупайте акционные товары</h3>
                <p>И получайте вдвое больше бонусов</p>
              </div>
              <img src={buy} className="mini-kart" alt="" />
            </div>
          </div>
        </section>
        <section class="section_5">
          <h2>Наши магазины</h2>
          <div class="address">
            <button>п.Щельяюр</button>
            <button>д.Вертеп</button>
            <button>с.Краснобор</button>
            <button>д.Диюр</button>
          </div>
          <iframe
            src={url}
            width="1208px"
            height="354px"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
        <div className="admin" id="admin">
          <h1>Admin</h1>
          <form action="#">
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" id="name" />
            <label htmlFor="psw">Password:</label>
            <input type="password" name="psw" id="psw" />
            <button>Log In</button>
          </form>
        </div>
      </main>
    </>
  );
}
