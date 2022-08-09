import { useState } from "react";
import "./Counter.css";

function Counter({ stock, onAdd, initial = 1 }) {
  const [count, setCount] = useState(initial);

  const increase = () => {
    if (count < stock) { 
      setCount(count + 1);
    }
  };

  const decrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="counter">
      <div className="counter-operation">
        <button className="operation" onClick={decrease}>
          -
        </button>
        <h1>{count}</h1>
        <button className="operation" onClick={increase}>
          +
        </button>
      </div>
      <button onClick={() => onAdd(count)} className="addToCart">
        Add to Cart
      </button>
    </div>
  );
}
export default Counter;
