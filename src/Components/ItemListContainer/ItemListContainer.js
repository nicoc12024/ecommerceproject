import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import { getProducts, getProductsByCategory } from "../../asyncProducts";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

function ItemListContainer() {
  const [products, setProducts] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    const asyncFunction = categoryId ? getProductsByCategory : getProducts;

    asyncFunction(categoryId)
      .then((products) => {
        setProducts(products);
      })
      .catch((error) => {
        console.log(error);
      });

    // if (!categoryId) {
    //   getProducts().then((products) => {
    //     setProducts(products);
    //   });
    // } else {
    //   getProductsByCategory(categoryId).then((products) => {
    //     setProducts(products);
    //   });
    // }
  }, [categoryId]);

  return <ItemList products={products} />;
}
export default ItemListContainer;
