import React from "react";
import "./Product.scss";


export default function Product({
  name,
  setName,
  price,
  setPrice,
  category,
  setCategory,
  creatProduct,
  product,
  removeItem,
  buyProduct,
  likeProduct,
}) {

  const removeItemAndLocalStorage = (id) => {
    removeItem(id); 
    updateLocalStorage(); 
  };
  return (
    <>
      <div className="container">
        <div className="newItem">
          <form action="" onSubmit={creatProduct}>
            <input
              type="text"
              placeholder="Название продукта"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="number"
              placeholder="Цена"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <label class="select">
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="Категория" selected disabled>
                  Категория
                </option>
                <option value="Молочные продукты">Молочные продукты</option>
                <option value="napitki">Напитки</option>
                <option value="xleb">Хлеб</option>
                <option value="frukti">Фрукты</option>
                <option value="ovoshi">Овощи</option>
                <option value="zamorojennie">Замороженные</option>
                <option value="konditerskie izdeliya">
                  Кондитерские изделия
                </option>
                <option value="chay,kofe">Чай, Кофе</option>
                <option value="bakaleya">Бакалея</option>
                <option value="zdorovoe pitanie">Здоровое питание</option>
                <option value="zootovari">Зоотовары</option>
                <option value="detskoe pitanie">Детское питание</option>
                <option value="myaso, kolbasa">Мясо, Колбаса</option>
                <option value="neprodovolstvennie tovari">
                  Непродовольственные товары
                </option>
              </select>
            </label>
            <button disabled={!name || !price} onClick={creatProduct}>
              Добавить
            </button>
          </form>
        </div>
        
        <div className="itemList">
          {product.map((item) => {
            return (
              <div className="item" key={item.id}>
                <img src={item.image} alt="image" />
                <div className="txt">
                  <h3>{item.name}</h3>
                  <p>{item.narx} so'm</p>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Aliquam, excepturi nesciunt atque iure corrupti eligendi!
                  </p>

                  <div className="btn_cont">
                    <button
                      onClick={() => buyProduct(item.id)}
                      className="buy_btn"
                    >
                      <i class="fa-solid fa-cart-shopping fa-fade"></i>{" "}
                    </button>

                    <button
                      className="like_btn"
                      onClick={() => likeProduct(item.id)}
                    >
                      <i class="fa-brands fa-gratipay fa-fade"></i>{" "}
                    </button>
                    <button
                      onClick={() => removeItemAndLocalStorage(item.id)}
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
