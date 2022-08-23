import "./Checkout.css";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import CartContext from "../../Context/CartContext";
import { db } from "../../services/firebase";
import {
  addDoc,
  collection,
  getDocs,
  query,
  where,
  documentId,
  writeBatch,
} from "firebase/firestore";

function Checkout() {
  const [isLoading, setIsLoading] = useState(false);
  const [orderCreated, setOrderCreated] = useState(false);
  const { cart, getQuantity, getTotal, clearCart } = useContext(CartContext);
  const [dataOrder, setDataOrder] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setDataOrder({
      ...dataOrder,
      [e.target.name]: e.target.value,
    });
  };

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form before createOrder
    if (!isValidEmail(dataOrder.email)) {
      alert("Email is invalid");
      return;
    } else if (isNaN(dataOrder.phone)) {
      alert("Phone field must be numbers");
      return;
    }

    createOrder();
  };

  const navigate = useNavigate();

  const totalQuantity = getQuantity();
  const total = getTotal();

  const createOrder = async () => {
    setIsLoading(true);
    try {
      const objOrder = {
        buyer: {
          firstName: dataOrder.name,
          email: dataOrder.email,
          phone: dataOrder.phone,
        },
        items: cart,
        totalQuantity,
        total,
        date: new Date(),
      };

      const ids = cart.map((prod) => prod.id);

      const productRef = collection(db, "products");

      const productsAddedFromFirestore = await getDocs(
        query(productRef, where(documentId(), "in", ids))
      );

      const { docs } = productsAddedFromFirestore;

      const outOfStock = [];

      const batch = writeBatch(db);

      docs.forEach((doc) => {
        const dataDoc = doc.data();
        const stockDb = dataDoc.stock;

        const productAddedToCart = cart.find((prod) => prod.id === doc.id);
        const prodQuantity = productAddedToCart?.quantity;

        if (stockDb >= prodQuantity) {
          batch.update(doc.ref, { stock: stockDb - prodQuantity });
        } else {
          outOfStock.push({ id: doc.ic, ...dataDoc });
        }
      });

      if (outOfStock.length === 0) {
        await batch.commit();

        const orderRef = collection(db, "orders");
        const orderAdded = await addDoc(orderRef, objOrder);

        clearCart();

        setOrderCreated(true);
        setTimeout(() => {
          navigate("/");
        }, 4000);
      } else {
        alert("Out of stock");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <h1 className="spinner">Processing your order...</h1>;
  }

  if (orderCreated) {
    return (
      <h1 className="spinner">
        Thanks for buying with us, you will receive an email shortly.
      </h1>
    );
  }

  return (
    <>
      <div className="titleCheckout">
        <h1>Checkout</h1>
      </div>
      <form className="formOrder" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          value={dataOrder.name}
          required
        ></input>
        <input
          type="text"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={dataOrder.email}
          required
        ></input>
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          onChange={handleChange}
          value={dataOrder.phone}
          required
        ></input>
        <button className="checkout">Create new order</button>
      </form>
    </>
  );
}
export default Checkout;