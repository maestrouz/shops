import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { uid } from "uid";
import Product from "./components/Product";
import Buypage from "./components/Buypage";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Like from "./components/Like";
import Mainhed from "./components/Mainhed";

const getLocalStorage = (key) => {
  return localStorage.getItem(key)
    ? JSON.parse(localStorage.getItem(key))
    : [];
};

const App = () => {
  const id = uid();
  const img = "https://dummyimage.com/300x200/9f9fa1/fff";

  const [item, setItem] = useState("");
  const [price, setPrice] = useState("");
  const [product, setProduct] = useState(getLocalStorage('items'));
  const [buyer, setBuyer] = useState(getLocalStorage('buyer'));
  const [checkLike, setCheckLike] = useState(false);
  const [like, setLike] = useState(getLocalStorage('like'))
  // console.log(buyer);
  const creaProduct = (e) => {
    e.preventDefault();
    const newItem = { id: id, image: img, name: item, narx: price };
    setProduct([...product, newItem]);
    setItem("");
    setPrice("");
  };

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(product));
    localStorage.setItem("buyer", JSON.stringify(buyer));
    localStorage.setItem("like", JSON.stringify(like));
  }, [product,buyer,like]);

  const removeItem = (id) => {
    setProduct(product.filter((item) => item.id !== id));
  };
  

  const buyProduct = (id) => {
    const buyItem = product.filter((item) => item.id === id);
    setBuyer([...buyer, buyItem]);
    console.log(buyItem);
  }

const heart = document.getElementById("heart");

  const likeProduct = (id) => {
    setCheckLike(!checkLike)
    if(checkLike){
      const likeItem = product.filter((item) => item.id === id);
      console.log(likeItem);
      // heart.classList.toggle("fa-regular2")
      // setLike([...like, likeItem]);
    }
    else{
      // setLike(like.filter((item) => item.id !== id));
      console.log(false);
    }
  }

  return (
    <>
    <Header />
      <Routes>
        <Route path="/" element={<Mainhed />}/>
        <Route path="/add" element={
                <Product
                name={item}
                setName={setItem}
                price={price}
                setPrice={setPrice}
                creaProduct={creaProduct}
                product={product}
                removeItem={removeItem}
                buyProduct={buyProduct}
                likeProduct={likeProduct}
              />
        }/>
        <Route path="/buypage"  element={<Buypage buyer={buyer}/>}/>
        <Route path="/like"  element={<Like />}/>
      </Routes>
    </>
  );
};

export default App;
