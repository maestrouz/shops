import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { uid } from "uid";
import Product from "./components/Product";

const getLocalStorage = () => {
  return localStorage.getItem("items")
    ? JSON.parse(localStorage.getItem("items"))
    : [];
};
const getBuyerStorage = () => {
  return localStorage.getItem("buyer")
    ? JSON.parse(localStorage.getItem("buyer"))
    : [];
};

const App = () => {
  const id = uid();
  const img = "https://dummyimage.com/300x200/9f9fa1/fff";

  const [item, setItem] = useState("");
  const [price, setPrice] = useState("");
  const [product, setProduct] = useState(getLocalStorage());
  const [buyer, setBuyer] = useState(getBuyerStorage());
  // console.log(buyer);
  const creaProduct = (e) => {
    e.preventDefault();
    const newItem = { id: id, image: img, name: item, narx: price };
    4;
    setProduct([...product, newItem]);
    setItem("");
    setPrice("");
  };

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(product));
  }, [product]);

  const removeItem = (id) => {
    setProduct(product.filter((item) => item.id !== id));
  };
  


  const buyProduct = (id) => {
    let product =JSON.parse(localStorage.getItem("items"));
    let buyItem = [];
    product.forEach((item) => {
      if (item.id === id) {
       buyItem.push(item); 
      }
    });
    setBuyer(buyItem);
    console.log(buyItem);
  }
  useEffect(() => {
    localStorage.setItem("buyer", JSON.stringify(buyer));
  });
  

  return (
    <>
      <Product
        name={item}
        setName={setItem}
        price={price}
        setPrice={setPrice}
        creaProduct={creaProduct}
        product={product}
        removeItem={removeItem}
        buyProduct={buyProduct}
      />
    </>
  );
};

export default App;
