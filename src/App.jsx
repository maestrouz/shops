import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { uid } from "uid";
import Product from "./components/Product";
import Buypage from "./components/Buypage";
import Header from "./components/Header.1";
import { Route, Routes } from "react-router-dom";
import Like from "./components/Like";
import Mainhed from "./components/Mainhed";
import Login from "./components/Log/Login";
import Catalog from "./components/Catalog/Catalog";
import Footer from "./components/Footer/Footer";

const getLocalStorage = (key) => {
  return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : [];
};

const App = () => {
  const id = uid();
  const img = "https://picsum.photos/300/200";

  const [item, setItem] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState(""); // Added category state
  const [product, setProduct] = useState(getLocalStorage("items"));
  const [buyer, setBuyer] = useState(getLocalStorage("buyer"));
  const [checkLike, setCheckLike] = useState(false);
  const [like, setLike] = useState(getLocalStorage("like"));
  const creatProduct = (e) => {
    e.preventDefault();
    const newItem = {
      id: id,
      image: img,
      name: item,
      narx: price,
      category: category,
    };
    setProduct([...product, newItem]);
    setItem("");
    setPrice("");
    const newData = { name: item, price: price, category: category };
  };

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(product));
    localStorage.setItem("buyer", JSON.stringify(buyer));
    localStorage.setItem("like", JSON.stringify(like));
  }, [product, buyer, like]);

  const removeItem = (id) => {
    setProduct(product.filter((item) => item.id !== id));
  };

  const buyProduct = (id) => {
    const buyItem = product.find((item) => item.id === id);
    setBuyer([...buyer, buyItem]);
    console.log(buyItem);
  };

  const heart = document.getElementById("heart");

  const likeProduct = (id) => {
    const likeItem = product.find((item) => item.id === id);
    setLike([...like, likeItem]);
    console.log(likeItem);
  };
  const updateLocalStorage = () => {
    localStorage.setItem("items", JSON.stringify(product));
  };

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Mainhed />} />
        <Route
          path="/add"
          element={
            <Product
              name={item}
              setName={setItem}
              price={price}
              setPrice={setPrice}
              creatProduct={creatProduct}
              product={product}
              removeItem={removeItem}
              buyProduct={buyProduct}
              likeProduct={likeProduct}
              category={category}
              setCategory={setCategory}
            />
          }
        />
        <Route path="/Catalog" element={<Catalog />} />
        <Route path="/userr" element={<Login />} />
        <Route path="/buypage" element={<Buypage buyer={buyer} />} />
        <Route path="/like" element={<Like />} />
        <Route path="/Footer" element={<Footer />} />
      </Routes>
    </>
  );
};

export default App;
