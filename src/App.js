import "./App.css";
import Header from "./Components/Header/Header";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import NewsLetter from "./Components/NewsLetter/NewsLetter";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, createContext } from "react";

export const CartContext = createContext();

function App() {
  const [cart, setCart] = useState([]);

  const addItem = (productToAdd) => {
    setCart([...cart, productToAdd]);
  };

  const getQuantity = () => {
    let acc = 0;

    cart.forEach((prod) => {
      acc += prod.quantity;
    });

    return acc;
  };

  return (
    <div className="App">
      <CartContext.Provider value={{ cart, addItem }}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:categoryId" element={<ItemListContainer />} />
            <Route path="/detail/:productId" element={<ItemDetailContainer />} />
            <Route path="*" element={<h1>404 NOT FOUND</h1>} />
          </Routes>
          <NewsLetter />
          <Footer />
        </BrowserRouter>
      </CartContext.Provider>
    </div>
  );
}

export default App;
