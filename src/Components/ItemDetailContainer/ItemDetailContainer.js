import { useState, useEffect } from "react";
import { getProductById } from "../../asyncProducts";
import ItemDetail from "../ItemDetail/ItemDetail";

function ItemDetailContainer() {
  const [product, setProduct] = useState();

  useEffect(() => {
    getProductById("1")
      .then((product) => setProduct(product))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Detalle</h1>
      <ItemDetail {...product} />
    </div>
  );
}
export default ItemDetailContainer;
